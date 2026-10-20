import { getJobCounts, getApplicationCounts } from "@/lib/admin-careers";

/**
 * Careers sub-navigation: Openings / Applications.
 *
 * The section tabs in the top bar switch between Blogs, Leads and Careers. Once
 * inside Careers there are two different jobs to do, so this second strip keeps
 * the openings list and the candidate pipeline one click apart. Counts fetch
 * themselves so every careers screen gets the same fresh badges without passing
 * them through every page.
 *
 * A failed count must never take the panel down; both queries degrade to zero.
 */
export default async function CareersTabs({ active = "openings" }) {
  let jobCounts = { open: 0, total: 0 };
  let applicationCounts = { new: 0, total: 0 };

  try {
    [jobCounts, applicationCounts] = await Promise.all([
      getJobCounts(),
      getApplicationCounts(),
    ]);
  } catch {
    // leave the zero defaults
  }

  return (
    <nav className="admin-tabs" aria-label="Careers sections">
      <a
        href="/admin/careers"
        className={`admin-tab${active === "openings" ? " is-active" : ""}`}
      >
        Openings <span>{jobCounts.total}</span>
      </a>
      <a
        href="/admin/careers/applications"
        className={`admin-tab${active === "applications" ? " is-active" : ""}`}
      >
        Applications <span>{applicationCounts.new}</span>
      </a>
    </nav>
  );
}
