import { isDatabaseConfigured, query, queryOne, execute } from "@/lib/db";

/**
 * Lead data layer -- contact-form submissions.
 *
 * Split from admin-posts.js because the two have opposite trust models: posts
 * are written only by an authenticated operator through the panel, whereas
 * leads are written by anyone on the public internet. Keeping the public write
 * path (createLead) in its own module makes it the one place to audit for
 * abuse, and keeps the auth-gated post code free of public-endpoint concerns.
 *
 * As with admin-posts.js, no `next/cache` import lives here so plain Node
 * scripts can use this module outside a Next build.
 */

/** Triage states, in pipeline order. */
export const LEAD_STATUSES = ["new", "contacted", "archived"];

const SELECT = `id, name, email, phone, subject, message, source, status, created_at`;

/**
 * Leads in one triage bucket, newest first.
 *
 * No soft delete: `status='archived'` is the shelf, and deleteLead removes the
 * row for real. A "deleted leads" recovery tab would be a liability on
 * personal data, unlike the blog where a mis-click is cheap to undo.
 */
export async function getLeadsByStatus(status) {
  if (!isDatabaseConfigured()) return [];
  return query(
    `SELECT ${SELECT} FROM leads
     WHERE status = ?
     ORDER BY created_at DESC, id DESC`,
    [status]
  );
}

/**
 * Count per bucket.
 *
 * One grouped query rather than three COUNTs: the tabs always need all three
 * numbers, so a GROUP BY is a single round trip instead of three.
 */
export async function getLeadCounts() {
  if (!isDatabaseConfigured()) {
    return { new: 0, contacted: 0, archived: 0, total: 0 };
  }
  const rows = await query(
    `SELECT status, COUNT(*) AS n FROM leads GROUP BY status`
  );
  const counts = { new: 0, contacted: 0, archived: 0, total: 0 };
  for (const row of rows) {
    if (row.status in counts) counts[row.status] = Number(row.n);
    counts.total += Number(row.n);
  }
  return counts;
}

/**
 * Stores one contact-form submission.
 *
 * This is a PUBLIC endpoint -- anything on the internet can reach it -- so:
 *   - every field is length-capped here rather than trusted from the form,
 *   - a honeypot field that only a bot fills aborts the write,
 *   - the row is inserted with the default 'new' status.
 *
 * Caps: name 120, email 200, phone 60, subject 120, message 5000. A real
 * enquiry fits; a paste-the-internet submission does not.
 */
export async function createLead({ name, email, phone, subject, message, source, honeypot }) {
  if (!isDatabaseConfigured()) throw new Error("Database is not configured");

  // A hidden field a human never fills. If it came back non-empty the caller
  // is a bot, and the cheapest correct response is to look like a success
  // without writing anything.
  if (String(honeypot ?? "").trim()) {
    return { ok: true, ignored: true };
  }

  const clean = (value, max) => String(value ?? "").trim().slice(0, max);

  const lead = {
    name: clean(name, 120),
    email: clean(email, 200),
    phone: clean(phone, 60),
    subject: clean(subject, 120),
    message: clean(message, 5000),
  };

  if (!lead.name || !lead.email || !lead.message) {
    throw new Error("Name, email and message are required.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    throw new Error("Enter a valid email address.");
  }

  await execute(
    `INSERT INTO leads (name, email, phone, subject, message, source, status)
     VALUES (?,?,?,?,?,?, 'new')`,
    [
      lead.name,
      lead.email,
      lead.phone,
      lead.subject,
      lead.message,
      clean(source, 120) || "/contact",
    ]
  );
  return { ok: true };
}

/** Moves a lead between triage buckets. */
export async function setLeadStatus(id, status) {
  if (!isDatabaseConfigured()) throw new Error("Database is not configured");
  const next = LEAD_STATUSES.includes(status) ? status : "new";
  await execute("UPDATE leads SET status=? WHERE id=?", [next, id]);
}

/** Removes a lead permanently. */
export async function deleteLead(id) {
  if (!isDatabaseConfigured()) throw new Error("Database is not configured");
  await execute("DELETE FROM leads WHERE id=?", [id]);
}
