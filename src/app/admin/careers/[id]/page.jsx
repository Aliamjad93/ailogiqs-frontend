import { notFound, redirect } from "next/navigation";
import { cookies } from "next/headers";
import { isAuthenticated } from "@/lib/admin-auth";
import { getJobForAdmin } from "@/lib/admin-careers";
import { changeJobStatus, removeJob } from "@/app/admin/careers/actions";
import AdminTopBar from "@/components/admin/AdminTopBar";
import ConfirmForm from "@/components/admin/ConfirmForm";
import CareersTabs from "../CareersTabs";
import JobForm from "./JobForm";

export const metadata = {
  title: "Edit opening",
  robots: { index: false, follow: false },
};

/**
 * New / edit opening.
 *
 * `new` is handled by the same dynamic route as an existing row, mirroring the
 * post editor. A numeric id that no longer exists is a 404 rather than an empty
 * create form, so a stale bookmark cannot accidentally create a duplicate.
 */
export default async function EditJobPage({ params, searchParams }) {
  if (!isAuthenticated(await cookies())) redirect("/admin/login");

  const { id } = await params;
  const { saved } = await searchParams;

  const isNew = id === "new";
  const job = isNew ? null : await getJobForAdmin(Number(id));

  if (!isNew && !job) notFound();

  const nextStatus = job?.status === "open" ? "closed" : "open";

  return (
    <>
      <AdminTopBar active="careers" viewSiteHref="/careers" />

      <main className="admin-wrap">
        <div className="admin-card-head">
          <div>
            <h2>{isNew ? "New opening" : "Edit opening"}</h2>
            {job && (
              <p className="admin-meta">
                <span className={`admin-badge admin-badge-job-${job.status}`}>
                  {job.status}
                </span>{" "}
                /careers/{job.slug}
              </p>
            )}
          </div>

          {!isNew && (
            <div className="admin-actions-inline">
              {job.status === "open" && (
                <a
                  className="admin-btn admin-btn-small"
                  href={`/careers/${job.slug}`}
                  target="_blank"
                  rel="noopener"
                >
                  View live
                </a>
              )}

              <ConfirmForm
                action={changeJobStatus}
                fields={{
                  id: job.id,
                  status: nextStatus,
                  redirectTo: `/admin/careers/${job.id}`,
                }}
                label={job.status === "open" ? "Close role" : "Publish role"}
                className="admin-btn admin-btn-small"
                confirm={
                  job.status === "open"
                    ? `Close “${job.title}”? It will stop accepting applications immediately.`
                    : `Publish “${job.title}” on the careers page?`
                }
              />

              <ConfirmForm
                action={removeJob}
                fields={{ id: job.id }}
                label="Delete"
                className="admin-btn admin-btn-small admin-btn-danger"
                confirm={`Delete “${job.title}”? Applications already received are kept, but the listing will be gone permanently.`}
              />
            </div>
          )}
        </div>

        <CareersTabs active="openings" />

        {saved && <div className="admin-notice admin-notice-ok">Saved.</div>}

        <JobForm job={job} />
      </main>
    </>
  );
}
