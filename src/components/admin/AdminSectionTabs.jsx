import { getLeadCounts } from "@/lib/admin-leads";
import { getApplicationCounts } from "@/lib/admin-careers";

/**
 * Panel-wide section switcher: Blogs / Leads / Careers.
 *
 * The panel is no longer a blog editor that happens to be logged in to -- it
 * manages the site's content and its enquiries, and those are different jobs.
 * This nav is the tab strip that separates them, rendered inside the top bar
 * so it is reachable from every screen including the editor.
 *
 * An async server component on purpose: the Leads and Careers badges carry the
 * count of unhandled enquiries and new applications, so the tabs fetch them
 * themselves rather than every page having to pass them down. A failed count
 * must never take the panel down, so it degrades to no badge.
 *
 * Links are plain <a>, not <Link>: the admin sits outside the public route
 * group and nothing here consumes the client router payload.
 */
const SECTIONS = [
  { key: "blogs", label: "Blogs", href: "/admin" },
  { key: "leads", label: "Leads", href: "/admin/leads" },
  { key: "careers", label: "Careers", href: "/admin/careers" },
];

export default async function AdminSectionTabs({ active = "" }) {
  // Only unhandled items are badged. A total would grow forever and stop
  // meaning anything; the number that earns attention is the one waiting for a
  // human response.
  let newLeads = 0;
  let newApplications = 0;
  try {
    const [leadCounts, applicationCounts] = await Promise.all([
      getLeadCounts(),
      getApplicationCounts(),
    ]);
    newLeads = leadCounts.new;
    newApplications = applicationCounts.new;
  } catch {
    // Leave the badges off. If the database is truly down the section page
    // itself will surface the error; this must not be the thing that throws.
  }

  return (
    <nav className="admin-sections" aria-label="Admin sections">
      {SECTIONS.map((section) => (
        <a
          key={section.key}
          href={section.href}
          className={`admin-section-link${active === section.key ? " is-active" : ""}`}
          aria-current={active === section.key ? "page" : undefined}
        >
          {section.label}
          {section.key === "leads" && newLeads > 0 && <span>{newLeads}</span>}
          {section.key === "careers" && newApplications > 0 && (
            <span>{newApplications}</span>
          )}
        </a>
      ))}
    </nav>
  );
}
