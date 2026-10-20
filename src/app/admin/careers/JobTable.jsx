import { changeJobStatus, removeJob } from "@/app/admin/careers/actions";
import ConfirmForm from "@/components/admin/ConfirmForm";
import { formatJobDate } from "@/lib/careers";

const STATUS_LABELS = { draft: "Draft", open: "Open", closed: "Closed" };

/**
 * Openings table.
 *
 * Row actions mirror the posts table: status changes and deletion are reachable
 * without opening the editor, because an out-of-date role needs to be closed
 * immediately, not after a page load and a scroll. The application count links
 * to the pipeline so a role with applicants is never deleted without the
 * operator seeing that people are attached to it.
 */
export default function JobTable({ jobs }) {
  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Role</th>
          <th>Department</th>
          <th>Type</th>
          <th>Status</th>
          <th>Applications</th>
          <th>Updated</th>
          <th className="admin-col-actions">Actions</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job) => (
          <tr key={job.id}>
            <td>
              <a href={`/admin/careers/${job.id}`}>{job.title}</a>
              <div className="admin-meta">
                /careers/{job.slug}
                {job.status === "open" && (
                  <>
                    {" "}
                    ·{" "}
                    <a
                      href={`/careers/${job.slug}`}
                      target="_blank"
                      rel="noopener"
                      className="admin-meta-link"
                    >
                      View live
                    </a>
                  </>
                )}
              </div>
            </td>
            <td>{job.department || "—"}</td>
            <td>{job.employment_type}</td>
            <td>
              <span className={`admin-badge admin-badge-job-${job.status}`}>
                {STATUS_LABELS[job.status] ?? job.status}
              </span>
            </td>
            <td>
              <a href="/admin/careers/applications">{job.application_count}</a>
            </td>
            <td>{formatJobDate(job.updated_at || job.created_at)}</td>
            <td>
              <div className="admin-row-actions">
                <a
                  className="admin-btn admin-btn-small"
                  href={`/admin/careers/${job.id}`}
                >
                  Edit
                </a>

                <ConfirmForm
                  action={changeJobStatus}
                  fields={{
                    id: job.id,
                    status: job.status === "open" ? "closed" : "open",
                    redirectTo: "/admin/careers",
                  }}
                  label={job.status === "open" ? "Close" : "Publish"}
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
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
