import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { isAuthenticated, isAdminConfigured } from "@/lib/admin-auth";
import { getAllJobsForAdmin } from "@/lib/admin-careers";
import AdminTopBar from "@/components/admin/AdminTopBar";
import CareersTabs from "./CareersTabs";
import JobTable from "./JobTable";

export const metadata = {
  title: "Careers",
  robots: { index: false, follow: false },
};

/**
 * Careers section: openings.
 *
 * This screen used to be a labelled placeholder. It now owns the list that feeds
 * /careers and /careers/<slug>. Applications live on their own sub-screen so a
 * role edit never competes with candidate data for attention.
 */
export default async function CareersPage({ searchParams }) {
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
  const jobs = await getAllJobsForAdmin();
  const counts = jobs.reduce(
    (acc, job) => {
      acc[job.status] = (acc[job.status] ?? 0) + 1;
      return acc;
    },
    { draft: 0, open: 0, closed: 0 }
  );

  return (
    <>
      <AdminTopBar active="careers" viewSiteHref="/careers" />

      <main className="admin-wrap">
        <div className="admin-card-head">
          <div>
            <h2>Careers</h2>
            <p className="admin-meta">
              {counts.open} open · {counts.draft} draft · {counts.closed} closed ·{" "}
              {jobs.length} total
            </p>
          </div>
          <a className="admin-btn admin-btn-primary" href="/admin/careers/new">
            New opening
          </a>
        </div>

        <CareersTabs active="openings" />

        {params?.deleted && (
          <div className="admin-notice admin-notice-ok">
            Opening deleted. Applications already received are still available in
            the Applications tab.
          </div>
        )}
        {params?.saved && (
          <div className="admin-notice admin-notice-ok">
            Opening saved. Publish it when you are ready for it to appear on the
            site.
          </div>
        )}

        {jobs.length === 0 ? (
          <div className="admin-panel">
            <h3>No openings yet</h3>
            <p className="admin-meta" style={{ marginBottom: 18 }}>
              Create the first role, or load the starter openings with{" "}
              <code>node scripts/setup-db.mjs --seed-jobs</code>.
            </p>
            <a className="admin-btn admin-btn-primary" href="/admin/careers/new">
              Create an opening
            </a>
          </div>
        ) : (
          <JobTable jobs={jobs} />
        )}
      </main>
    </>
  );
}
