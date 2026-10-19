import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { isAuthenticated, isAdminConfigured } from "@/lib/admin-auth";
import AdminTopBar from "@/components/admin/AdminTopBar";

export const metadata = {
  title: "Careers",
  robots: { index: false, follow: false },
};

/**
 * Careers section — placeholder.
 *
 * The panel is organised as three sections, and Careers is the third one. It
 * exists now, empty and labelled, so the tab is not a dead link and the list
 * of openings and the applications they attract have an obvious home when that
 * work starts. Blogs and Leads are the live halves.
 */
export default async function CareersPage() {
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

  return (
    <>
      <AdminTopBar active="careers" />

      <main className="admin-wrap">
        <div className="admin-card-head">
          <div>
            <h2>Careers</h2>
            <p className="admin-meta">Openings and applications</p>
          </div>
        </div>

        <div className="admin-panel">
          <h3>Coming soon</h3>
          <p className="admin-empty-lead">
            This section will hold the job openings published on the site and the
            applications submitted through them — listing, reviewing and
            replying to candidates from one place, the same way the Leads tab
            handles contact enquiries.
          </p>
          <p className="admin-meta" style={{ marginBottom: 0 }}>
            Nothing to manage here yet. The Blogs and Leads tabs are live.
          </p>
        </div>
      </main>
    </>
  );
}
