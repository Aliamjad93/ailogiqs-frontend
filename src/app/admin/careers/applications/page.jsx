import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { isAuthenticated, isAdminConfigured } from "@/lib/admin-auth";
import {
  APPLICATION_STATUSES,
  APPLICATION_STATUS_LABELS,
  getApplicationsByStatus,
  getApplicationCounts,
} from "@/lib/admin-careers";
import AdminTopBar from "@/components/admin/AdminTopBar";
import CareersTabs from "../CareersTabs";
import ApplicationTable from "./ApplicationTable";

export const metadata = {
  title: "Applications",
  robots: { index: false, follow: false },
};

const EMPTY = {
  new: "No new applications. Submissions from the careers page land here immediately.",
  shortlisted:
    "No shortlisted candidates yet. Review a new application and shortlist the people you want to speak with.",
  interview:
    "Nobody is in the interview stage. Move a shortlisted candidate here when an interview is booked.",
  hired:
    "No hires recorded yet. Mark a candidate hired once they accept an offer.",
  rejected:
    "No rejected applications. Candidates you turn down are kept here for reference.",
  archived:
    "No archived applications. Archive a completed or withdrawn application once it needs no further action.",
};

export default async function ApplicationsPage({ searchParams }) {
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
  const view = APPLICATION_STATUSES.includes(params?.status)
    ? params.status
    : "new";

  const [applications, counts] = await Promise.all([
    getApplicationsByStatus(view),
    getApplicationCounts(),
  ]);

  return (
    <>
      <AdminTopBar active="careers" viewSiteHref="/careers" />

      <main className="admin-wrap">
        <div className="admin-card-head">
          <div>
            <h2>Applications</h2>
            <p className="admin-meta">
              {counts.total} total · {counts.new} new · {counts.shortlisted}{" "}
              shortlisted · {counts.interview} interviewing · {counts.hired} hired
            </p>
          </div>
          <a
            className="admin-btn admin-btn-small"
            href="/careers"
            target="_blank"
            rel="noopener"
          >
            View careers page
          </a>
        </div>

        <CareersTabs active="applications" />

        <nav className="admin-tabs" aria-label="Application stages">
          {APPLICATION_STATUSES.map((status) => (
            <a
              key={status}
              href={`/admin/careers/applications?status=${status}`}
              className={`admin-tab${view === status ? " is-active" : ""}`}
            >
              {APPLICATION_STATUS_LABELS[status]} <span>{counts[status]}</span>
            </a>
          ))}
        </nav>

        {applications.length === 0 ? (
          <div className="admin-panel">
            <p className="admin-meta" style={{ margin: 0 }}>
              {EMPTY[view]}
            </p>
          </div>
        ) : (
          <ApplicationTable applications={applications} view={view} />
        )}
      </main>
    </>
  );
}
