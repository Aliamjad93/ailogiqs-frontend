import { isDatabaseConfigured, query, queryOne, execute } from "@/lib/db";

/**
 * Careers read layer and public application write path.
 *
 * Public pages import their reads from here, and the server action behind the
 * application form imports the one write function. Admin-only queries live in
 * src/lib/admin-careers.js so the public Internet-facing path stays small and
 * auditable.
 *
 * No `next/*` import belongs in this module: like the other data layers it is
 * usable from plain Node scripts (and tests) outside a Next build.
 */

export const JOB_STATUSES = ["draft", "open", "closed"];

export const WORK_MODES = ["On-site", "Hybrid", "Remote"];

export const EMPLOYMENT_TYPES = [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
];

/** Cap on the resume upload. Kept below Vercel's 4.5 MB function body limit. */
export const MAX_RESUME_BYTES = 3 * 1024 * 1024;

const RESUME_TYPES = new Map([
  ["application/pdf", ".pdf"],
  ["application/msword", ".doc"],
  [
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".docx",
  ],
]);

const SELECT = `id, slug, title, department, location, work_mode, employment_type,
  experience_level, salary_range, summary, description_html, status, created_at, updated_at`;

/** Shapes a DB row into the camelCase object the pages render. */
function toJob(row) {
  if (!row) return null;
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    department: row.department,
    location: row.location,
    workMode: row.work_mode,
    employmentType: row.employment_type,
    experienceLevel: row.experience_level,
    salaryRange: row.salary_range,
    summary:
      row.summary ||
      plainText(row.description_html, 220) ||
      "Open a role to read the full description.",
    descriptionHtml: row.description_html ?? "",
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

/** Strips tags for card text and meta descriptions. */
export function plainText(html, limit = 0) {
  const text = String(html ?? "")
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<\/(p|h[1-6]|li|blockquote|div)>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();

  if (!limit || text.length <= limit) return text;
  return `${text.slice(0, limit).trimEnd()}…`;
}

/** SQLite datetimes are UTC but carry no timezone marker. */
export function formatJobDate(value) {
  if (!value) return "";
  const date = String(value).slice(0, 10);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

/**
 * Every open role, newest first.
 *
 * A database failure returns an empty list rather than taking the public page
 * down. The admin list deliberately does the opposite: it must never pretend an
 * empty result is the real state.
 */
export async function getOpenJobs() {
  if (!isDatabaseConfigured()) return [];
  try {
    const rows = await query(
      `SELECT ${SELECT} FROM jobs
       WHERE status = 'open'
       ORDER BY created_at DESC, id ASC`
    );
    return rows.map(toJob);
  } catch (error) {
    console.warn(`[careers] database read failed: ${error.message}`);
    return [];
  }
}

export async function getOpenJobBySlug(slug) {
  if (!isDatabaseConfigured()) return null;
  try {
    const row = await queryOne(
      `SELECT ${SELECT} FROM jobs WHERE slug = ? AND status = 'open'`,
      [slug]
    );
    return toJob(row);
  } catch (error) {
    console.warn(`[careers] job read failed: ${error.message}`);
    return null;
  }
}

/** Open slugs for the sitemap. */
export async function getOpenJobSlugs() {
  if (!isDatabaseConfigured()) return [];
  try {
    const rows = await query(
      "SELECT slug FROM jobs WHERE status = 'open' ORDER BY created_at DESC, id ASC"
    );
    return rows.map((row) => row.slug);
  } catch {
    return [];
  }
}

// ---------------------------------------------------------------------------
// Public application path
// ---------------------------------------------------------------------------

/**
 * Validates an uploaded resume.
 *
 * The browser-declared MIME is checked, but the byte count is measured from the
 * File itself. The bytes are only read when the row is actually being written,
 * so a failed validation never buffers a large file.
 *
 * @returns {{ file: File, mime: string, filename: string, size: number } | null}
 * @throws a message that is safe to show the applicant
 */
export function readUploadedResume(file) {
  if (!file || typeof file.arrayBuffer !== "function") return null;
  if (file.size === 0) return null;

  if (file.size > MAX_RESUME_BYTES) {
    const mb = Math.round(MAX_RESUME_BYTES / 1024 / 1024);
    throw new Error(`Your resume must be under ${mb} MB.`);
  }

  if (!RESUME_TYPES.has(file.type)) {
    throw new Error("Upload your resume as a PDF, DOC or DOCX file.");
  }

  // Strip any path a browser might have included, and control characters that
  // would make the download header difficult to construct safely.
  const filename =
    String(file.name ?? "resume")
      .split(/[\\/]/)
      .pop()
      .replace(/\p{Cc}/gu, "")
      .trim()
      .slice(0, 180) || "resume";

  return {
    file,
    mime: file.type,
    filename,
    size: file.size,
  };
}

async function toResumeBlob(upload) {
  if (!upload) return null;
  return new Uint8Array(await upload.file.arrayBuffer());
}

function clean(value, max) {
  return String(value ?? "").trim().slice(0, max);
}

/**
 * Validates an optional profile URL.
 *
 * Only http/https are accepted. A javascript: URL in a cell rendered as a link
 * is a stored-XSS vector, so bad input is rejected rather than silently stored.
 */
function cleanUrl(value, max) {
  const raw = clean(value, max);
  if (!raw) return "";

  let parsed;
  try {
    parsed = new URL(raw);
  } catch {
    throw new Error("Profile links must be full URLs starting with https://.");
  }

  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error("Profile links must start with http:// or https://.");
  }
  return parsed.toString().slice(0, max);
}

/**
 * Stores one application against an open role.
 *
 * This is a public endpoint. Every field is length-capped here, the role is
 * re-read from the database (a forged hidden input cannot apply to a closed
 * role), the resume is validated again on the server, and a honeypot short-
 * circuits bots without telling them why.
 */
export async function createJobApplication({
  jobSlug,
  name,
  email,
  phone,
  location,
  experience,
  linkedinUrl,
  portfolioUrl,
  coverLetter,
  resume,
  consent,
  honeypot,
}) {
  if (!isDatabaseConfigured()) throw new Error("Database is not configured");

  if (String(honeypot ?? "").trim()) {
    return { ok: true, ignored: true };
  }

  const slug = clean(jobSlug, 120);
  if (!slug) throw new Error("This role is no longer available.");

  const job = await queryOne(
    "SELECT id, slug, title FROM jobs WHERE slug = ? AND status = 'open'",
    [slug]
  );
  if (!job) {
    throw new Error(
      "This role is no longer open. Please check the careers page for current openings."
    );
  }

  const applicant = {
    name: clean(name, 120),
    email: clean(email, 200),
    phone: clean(phone, 60),
    location: clean(location, 120),
    experience: clean(experience, 80),
    linkedinUrl: cleanUrl(linkedinUrl, 300),
    portfolioUrl: cleanUrl(portfolioUrl, 300),
    coverLetter: clean(coverLetter, 5000),
  };

  if (!applicant.name || !applicant.email || !applicant.phone || !applicant.location) {
    throw new Error("Name, email, phone and location are required.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(applicant.email)) {
    throw new Error("Enter a valid email address.");
  }
  if (!applicant.coverLetter) {
    throw new Error("Tell us briefly why you are a good fit for this role.");
  }
  if (!consent) {
    throw new Error("Please confirm that we may store your application for recruitment.");
  }

  const upload = readUploadedResume(resume);
  if (!upload) throw new Error("Attach your resume as a PDF, DOC or DOCX file.");

  const blob = await toResumeBlob(upload);

  await execute(
    `INSERT INTO job_applications
       (job_id, job_slug, job_title, name, email, phone, location, experience,
        linkedin_url, portfolio_url, cover_letter, resume_blob, resume_mime,
        resume_filename, resume_size, consent, status)
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,'new')`,
    [
      job.id,
      job.slug,
      job.title,
      applicant.name,
      applicant.email,
      applicant.phone,
      applicant.location,
      applicant.experience,
      applicant.linkedinUrl,
      applicant.portfolioUrl,
      applicant.coverLetter,
      blob,
      upload.mime,
      upload.filename,
      upload.size,
      1,
    ]
  );

  return { ok: true, jobTitle: job.title };
}
