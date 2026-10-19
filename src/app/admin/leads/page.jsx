import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { isAuthenticated, isAdminConfigured } from "@/lib/admin-auth";
import { getLeadsByStatus, getLeadCounts } from "@/lib/admin-leads";
import AdminTopBar from "@/components/admin/AdminTopBar";
import LeadTable from "./LeadTable";

export const metadata = {
  title: "Leads",
  robots: { index: false, follow: false },
};

/**
 * Triage buckets for enquiries, mirroring the posts screen's All/Deleted tabs:
 * the counts come from one grouped query, and each tab is its own URL so a
 * batch can be worked through and shared by link.
 */
const VIEWS = [
  { key: "new", label: "New" },
  { key: "contacted", label: "Contacted" },
  { key: "archived", label: "Archived" },
];

const EMPTY = {
  new: "No new enquiries. Submissions from the contact form land here the moment they arrive.",
  contacted: "Nothing marked as contacted yet. Use “Mark contacted” once you have replied to an enquiry.",
  archived: "No archived leads. Archive an enquiry once it is closed and needs no further action.",
};

export default async function LeadsPage({ searchParams }) {
  if (!isAdminConfigured()) {
    return (
      <div className="admin-wrap">
        <div className="admin-panel">
          <h3>Not configured</h3>
          <p className="admin-meta" style={{ fontSize: 14 }}>
            Set <code>ADMIN_PASSWORD</code> in <code>.env.local</code> to enable the
            admin panel. Copy <code>.env.example</code> to get started.
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated(await cookies())) redirect("/admin/login");

  const params = await searchParams;
  const view = VIEWS.some((v) => v.key === params?.status) ? params.status : "new";

  const [leads, counts] = await Promise.all([
    getLeadsByStatus(view),
    getLeadCounts(),
  ]);

  return (
    <>
      <AdminTopBar active="leads" />

      <main className="admin-wrap">
        <div className="admin-card-head">
          <div>
            <h2>Leads</h2>
            <p className="admin-meta">
              {counts.total} total · {counts.new} awaiting reply · {counts.contacted} in
              conversation · {counts.archived} archived
            </p>
          </div>
          <a className="admin-btn admin-btn-small" href="/contact" target="_blank" rel="noopener">
            View form
          </a>
        </div>

        <nav className="admin-tabs">
          {VIEWS.map((v) => (
            <a
              key={v.key}
              href={`/admin/leads?status=${v.key}`}
              className={`admin-tab${view === v.key ? " is-active" : ""}`}
            >
              {v.label} <span>{counts[v.key]}</span>
            </a>
          ))}
        </nav>

        {leads.length === 0 ? (
          <div className="admin-panel">
            <p className="admin-meta" style={{ margin: 0 }}>
              {EMPTY[view]}
            </p>
          </div>
        ) : (
          <LeadTable leads={leads} view={view} />
        )}
      </main>
    </>
  );
}
