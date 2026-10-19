import { getLeadCounts } from "@/lib/admin-leads";

/**
 * Panel-wide section switcher: Blogs / Leads / Careers.
 *
 * The panel is no longer a blog editor that happens to be logged in to -- it
 * manages the site's content and its enquiries, and those are different jobs.
 * This nav is the tab strip that separates them, rendered inside the top bar
 * so it is reachable from every screen including the editor.
 *
 * An async server component on purpose: the Leads badge carries the count of
 * unhandled enquiries, so the tabs fetch it themselves rather than every page
 * having to remember to pass it down. A failed count must never take the panel
 * down, so it degrades to no badge.
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
  // Only NEW leads are badged. The total would grow forever and stop meaning
  // anything; the number that earns attention is the unhandled one.
  let newLeads = 0;
  try {
    const counts = await getLeadCounts();
    newLeads = counts.new;
  } catch {
    // Leave the badge off. If the database is truly down the section page
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
        </a>
      ))}
    </nav>
  );
}
