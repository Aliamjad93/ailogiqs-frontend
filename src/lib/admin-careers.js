import { isDatabaseConfigured, query, queryOne, execute, batch } from "@/lib/db";
import { sanitizeHtml, slugify } from "@/lib/sanitize";
import {
  JOB_STATUSES,
  WORK_MODES,
  EMPLOYMENT_TYPES,
  plainText,
} from "@/lib/careers";

/**
 * Admin write/read layer for jobs and applications.
 *
 * Kept apart from src/lib/careers.js because the trust models differ: jobs are
 * written only by an authenticated operator, while applications arrive from the
 * public internet. The public write path is the one place to audit for abuse;
 * this module is only ever called behind the admin session check.
 *
 * No `next/cache` import here, so plain Node scripts can load it. Cache
 * invalidation lives in src/app/admin/careers/actions.js.
 */

export const APPLICATION_STATUSES = [
  "new",
  "shortlisted",
  "interview",
  "hired",
  "rejected",
  "archived",
];

export const APPLICATION_STATUS_LABELS = {
  new: "New",
  shortlisted: "Shortlisted",
  interview: "Interview",
  hired: "Hired",
  rejected: "Rejected",
  archived: "Archived",
};

const JOB_SELECT = `j.id, j.slug, j.title, j.department, j.location, j.work_mode,
  j.employment_type, j.experience_level, j.salary_range, j.summary,
  j.description_html, j.status, j.created_at, j.updated_at`;

const APPLICATION_SELECT = `id, job_id, job_slug, job_title, name, email, phone,
  location, experience, linkedin_url, portfolio_url, cover_letter, resume_mime,
  resume_filename, resume_size, consent, status, created_at,
  (resume_blob IS NOT NULL) AS has_resume`;

function toAdminJob(row) {
  if (!row) return null;
  return {
    ...row,
    application_count: Number(row.application_count ?? 0),
  };
}

function clamp(value, max) {
  return String(value ?? "").trim().slice(0, max);
}

function choice(value, allowed, fallback) {
  return allowed.includes(value) ? value : fallback;
}

function jobStatus(value) {
  return JOB_STATUSES.includes(value) ? value : "draft";
}

function applicationStatus(value) {
  return APPLICATION_STATUSES.includes(value) ? value : "new";
}

/** Ensures a job URL is unique, appending -2, -3, ... on a clash. */
async function uniqueJobSlug(base, excludeId = null) {
  let candidate = base || "role";
  let suffix = 2;

  while (suffix < 100) {
    const clash = await queryOne(
      "SELECT id FROM jobs WHERE slug = ? AND id IS NOT ?",
      [candidate, excludeId]
    );
    if (!clash) return candidate;
    candidate = `${base}-${suffix++}`;
  }
  return `${base}-${Date.now()}`;
}

/** Everything the admin table needs, open roles first. */
export async function getAllJobsForAdmin() {
  if (!isDatabaseConfigured()) return [];
  const rows = await query(
    `SELECT ${JOB_SELECT},
       (SELECT COUNT(*) FROM job_applications a WHERE a.job_id = j.id) AS application_count
     FROM jobs j
     ORDER BY CASE j.status WHEN 'open' THEN 0 WHEN 'draft' THEN 1 ELSE 2 END,
              j.created_at DESC, j.id ASC`
  );
  return rows.map(toAdminJob);
}

export async function getJobForAdmin(id) {
  if (!isDatabaseConfigured()) return null;
  const row = await queryOne(
    `SELECT ${JOB_SELECT},
       (SELECT COUNT(*) FROM job_applications a WHERE a.job_id = j.id) AS application_count
     FROM jobs j WHERE j.id = ?`,
    [id]
  );
  return toAdminJob(row);
}

export async function getJobCounts() {
  if (!isDatabaseConfigured()) {
    return { draft: 0, open: 0, closed: 0, total: 0 };
  }
  const rows = await query("SELECT status, COUNT(*) AS n FROM jobs GROUP BY status");
  const counts = { draft: 0, open: 0, closed: 0, total: 0 };
  for (const row of rows) {
    if (row.status in counts) counts[row.status] = Number(row.n);
    counts.total += Number(row.n);
  }
  return counts;
}

/**
 * Normalises the job form into the columns the table stores.
 *
 * A summary is optional. When left blank it is derived from the description, so
 * a listing card can never be empty just because the author skipped a field.
 */
function jobFromInput(input) {
  const descriptionHtml = sanitizeHtml(input.descriptionHtml);
  const title = clamp(input.title, 160);
  if (!title) throw new Error("A role title is required.");
  if (!plainText(descriptionHtml)) {
    throw new Error("Add a job description before saving.");
  }

  const summary =
    clamp(input.summary, 320) || plainText(descriptionHtml, 220);

  return {
    title,
    descriptionHtml,
    summary,
    department: clamp(input.department, 120),
    location: clamp(input.location, 160),
    workMode: choice(input.workMode, WORK_MODES, "On-site"),
    employmentType: choice(
      input.employmentType,
      EMPLOYMENT_TYPES,
      "Full-time"
    ),
    experienceLevel: clamp(input.experienceLevel, 120),
    salaryRange: clamp(input.salaryRange, 160),
    status: jobStatus(input.status),
  };
}

export async function createJob(input) {
  if (!isDatabaseConfigured()) throw new Error("Database is not configured");

  const job = jobFromInput(input);
  const slug = await uniqueJobSlug(slugify(input.slug || job.title));

  const result = await execute(
    `INSERT INTO jobs
       (slug, title, department, location, work_mode, employment_type,
        experience_level, salary_range, summary, description_html, status)
     VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
    [
      slug,
      job.title,
      job.department,
      job.location,
      job.workMode,
      job.employmentType,
      job.experienceLevel,
      job.salaryRange,
      job.summary,
      job.descriptionHtml,
      job.status,
    ]
  );

  return { id: Number(result.lastInsertRowid), slug };
}

export async function updateJob(id, input) {
  if (!isDatabaseConfigured()) throw new Error("Database is not configured");

  const job = jobFromInput(input);
  const slug = await uniqueJobSlug(slugify(input.slug || job.title), id);

  await execute(
    `UPDATE jobs SET
       slug=?, title=?, department=?, location=?, work_mode=?, employment_type=?,
       experience_level=?, salary_range=?, summary=?, description_html=?,
       status=?, updated_at=datetime('now')
     WHERE id=?`,
    [
      slug,
      job.title,
      job.department,
      job.location,
      job.workMode,
      job.employmentType,
      job.experienceLevel,
      job.salaryRange,
      job.summary,
      job.descriptionHtml,
      job.status,
      id,
    ]
  );

  return { id, slug };
}

export async function setJobStatus(id, status) {
  if (!isDatabaseConfigured()) throw new Error("Database is not configured");
  await execute(
    "UPDATE jobs SET status=?, updated_at=datetime('now') WHERE id=?",
    [jobStatus(status), id]
  );
}

/**
 * Removes a job permanently, keeping any applications it received.
 *
 * Applicants are not a property of the listing. Their snapshotted job title
 * stays on the application, and `job_id` is cleared so no row points at a
 * deleted listing. Deleting a job is therefore safe for the recruitment record.
 */
export async function deleteJob(id) {
  if (!isDatabaseConfigured()) throw new Error("Database is not configured");
  await batch([
    {
      sql: "UPDATE job_applications SET job_id = NULL WHERE job_id = ?",
      args: [id],
    },
    { sql: "DELETE FROM jobs WHERE id = ?", args: [id] },
  ]);
}

// ---------------------------------------------------------------------------
// Applications
// ---------------------------------------------------------------------------

export async function getApplicationsByStatus(status) {
  if (!isDatabaseConfigured()) return [];
  const bucket = applicationStatus(status);
  return query(
    `SELECT ${APPLICATION_SELECT} FROM job_applications
     WHERE status = ?
     ORDER BY created_at DESC, id DESC`,
    [bucket]
  );
}

export async function getApplicationCounts() {
  if (!isDatabaseConfigured()) {
    return {
      new: 0,
      shortlisted: 0,
      interview: 0,
      hired: 0,
      rejected: 0,
      archived: 0,
      total: 0,
    };
  }

  const rows = await query(
    "SELECT status, COUNT(*) AS n FROM job_applications GROUP BY status"
  );
  const counts = {
    new: 0,
    shortlisted: 0,
    interview: 0,
    hired: 0,
    rejected: 0,
    archived: 0,
    total: 0,
  };
  for (const row of rows) {
    if (row.status in counts) counts[row.status] = Number(row.n);
    counts.total += Number(row.n);
  }
  return counts;
}

export async function getApplicationForAdmin(id) {
  if (!isDatabaseConfigured()) return null;
  return queryOne(`SELECT ${APPLICATION_SELECT} FROM job_applications WHERE id = ?`, [
    id,
  ]);
}

export async function setApplicationStatus(id, status) {
  if (!isDatabaseConfigured()) throw new Error("Database is not configured");
  await execute("UPDATE job_applications SET status=? WHERE id=?", [
    applicationStatus(status),
    id,
  ]);
}

/** Hard delete. Applications are personal data, not content to keep on a shelf. */
export async function deleteApplication(id) {
  if (!isDatabaseConfigured()) throw new Error("Database is not configured");
  await execute("DELETE FROM job_applications WHERE id=?", [id]);
}

/** Resume bytes for the protected download route. */
export async function getApplicationResume(id) {
  if (!isDatabaseConfigured()) return null;
  return queryOne(
    `SELECT resume_blob, resume_mime, resume_filename, resume_size
     FROM job_applications WHERE id = ?`,
    [id]
  );
}
