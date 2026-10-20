import { notFound, redirect } from "next/navigation";
import { cookies } from "next/headers";
import { isAuthenticated, isAdminConfigured } from "@/lib/admin-auth";
import {
  APPLICATION_STATUSES,
  APPLICATION_STATUS_LABELS,
  getApplicationForAdmin,
} from "@/lib/admin-careers";
import {
  deleteApplication,
  updateApplicationStatus,
} from "@/app/admin/careers/actions";
import { formatJobDate } from "@/lib/careers";
import AdminTopBar from "@/components/admin/AdminTopBar";
import ConfirmForm from "@/components/admin/ConfirmForm";
import CareersTabs from "../../CareersTabs";

export const metadata = {
  title: "Application",
  robots: { index: false, follow: false },
};

function formatBytes(bytes) {
  const size = Number(bytes ?? 0);
  if (!size) return "";
  if (size < 1024 * 1024) return `${Math.max(1, Math.round(size / 1024))} KB`;
  return `${(size / 1024 / 1024).toFixed(1)} MB`;
}

/** The primary next step by stage, plus a reject/archive escape hatch. */
function statusActions(status) {
  switch (status) {
    case "new":
      return [
        { status: "shortlisted", label: "Shortlist", primary: true },
        { status: "rejected", label: "Reject", danger: true },
      ];
    case "shortlisted":
      return [
        { status: "interview", label: "Move to interview", primary: true },
        { status: "rejected", label: "Reject", danger: true },
      ];
    case "interview":
      return [
        { status: "hired", label: "Mark hired", primary: true },
        { status: "rejected", label: "Reject", danger: true },
      ];
    case "hired":
      return [{ status: "archived", label: "Archive" }];
    case "rejected":
      return [{ status: "new", label: "Reopen as new" }];
    case "archived":
      return [{ status: "new", label: "Reopen as new" }];
    default:
      return [];
  }
}

export default async function ApplicationPage({ params, searchParams }) {
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

  const { id } = await params;
  const query = await searchParams;
  const application = await getApplicationForAdmin(Number(id));

  if (!application) notFound();

  const fromView = APPLICATION_STATUSES.includes(query?.from)
    ? query.from
    : application.status;
  const backHref = `/admin/careers/applications?status=${fromView}`;
  const detailHref = `/admin/careers/applications/${application.id}?from=${fromView}`;
  const actions = statusActions(application.status);

  return (
    <>
      <AdminTopBar active="careers" viewSiteHref="/careers" />

      <main className="admin-wrap">
        <div className="admin-card-head">
          <div>
            <h2>{application.name}</h2>
            <p className="admin-meta">
              <span className={`admin-badge admin-badge-application-${application.status}`}>
                {APPLICATION_STATUS_LABELS[application.status] ?? application.status}
              </span>{" "}
              applied {formatJobDate(application.created_at)} for{" "}
              {application.job_title || "a role"}
            </p>
          </div>
          <div className="admin-actions-inline">
            <a className="admin-btn admin-btn-small" href={backHref}>
              Back to applications
            </a>
            {application.has_resume && (
              <a
                className="admin-btn admin-btn-small"
                href={`/admin/careers/applications/${application.id}/resume`}
              >
                Download resume
              </a>
            )}
          </div>
        </div>

        <CareersTabs active="applications" />

        <div className="admin-detail-grid">
          <div className="admin-panel">
            <h3>Candidate</h3>
            <dl className="admin-kv">
              <dt>Name</dt>
              <dd>{application.name}</dd>

              <dt>Email</dt>
              <dd>
                <a href={`mailto:${application.email}`}>{application.email}</a>
              </dd>

              <dt>Phone</dt>
              <dd>
                {application.phone ? (
                  <a href={`tel:${application.phone.replace(/[^\d+]/g, "")}`}>
                    {application.phone}
                  </a>
                ) : (
                  "—"
                )}
              </dd>

              <dt>Location</dt>
              <dd>{application.location || "—"}</dd>

              <dt>Experience</dt>
              <dd>{application.experience || "—"}</dd>

              {application.linkedin_url && (
                <>
                  <dt>LinkedIn</dt>
                  <dd>
                    <a
                      href={application.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {application.linkedin_url}
                    </a>
                  </dd>
                </>
              )}

              {application.portfolio_url && (
                <>
                  <dt>Portfolio</dt>
                  <dd>
                    <a
                      href={application.portfolio_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {application.portfolio_url}
                    </a>
                  </dd>
                </>
              )}

              <dt>Consent</dt>
              <dd>{application.consent ? "Given at submission" : "Not recorded"}</dd>
            </dl>
          </div>

          <div className="admin-panel">
            <h3>Role</h3>
            <dl className="admin-kv">
              <dt>Applied for</dt>
              <dd>{application.job_title || "—"}</dd>

              <dt>Role URL</dt>
              <dd>
                {application.job_slug ? (
                  <a
                    href={`/careers/${application.job_slug}`}
                    target="_blank"
                    rel="noopener"
                  >
                    /careers/{application.job_slug}
                  </a>
                ) : (
                  "Listing removed"
                )}
              </dd>

              <dt>Received</dt>
              <dd>{formatJobDate(application.created_at)}</dd>

              <dt>Resume</dt>
              <dd>
                {application.has_resume ? (
                  <>
                    {application.resume_filename || "resume"}{" "}
                    <span className="admin-meta">
                      ({formatBytes(application.resume_size)})
                    </span>
                  </>
                ) : (
                  "No file attached"
                )}
              </dd>

              <dt>Application ID</dt>
              <dd>#{application.id}</dd>
            </dl>
          </div>
        </div>

        <div className="admin-panel">
          <h3>Cover letter</h3>
          <div className="admin-cover-letter">
            {application.cover_letter || "No cover letter supplied."}
          </div>
        </div>

        <div className="admin-panel">
          <h3>Pipeline</h3>
          <p className="admin-meta" style={{ marginTop: 0 }}>
            Move this candidate through the process. Every change is visible on the
            Applications tab immediately.
          </p>

          <div className="admin-actions" style={{ marginTop: 0 }}>
            {actions.map((action) => (
              <ConfirmForm
                key={action.status}
                action={updateApplicationStatus}
                fields={{
                  id: application.id,
                  status: action.status,
                  redirectTo: detailHref,
                }}
                label={action.label}
                className={`admin-btn admin-btn-small${
                  action.primary ? " admin-btn-primary" : ""
                }${action.danger ? " admin-btn-danger" : ""}`}
                confirm={`Move ${application.name} to “${
                  APPLICATION_STATUS_LABELS[action.status]
                }”?`}
              />
            ))}

            <ConfirmForm
              action={deleteApplication}
              fields={{
                id: application.id,
                redirectTo: backHref,
              }}
              label="Delete application"
              className="admin-btn admin-btn-small admin-btn-danger"
              confirm={`Permanently delete ${application.name}'s application and resume? This cannot be undone.`}
            />
          </div>
        </div>
      </main>
    </>
  );
}
