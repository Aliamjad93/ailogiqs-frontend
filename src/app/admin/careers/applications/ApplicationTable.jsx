import { formatJobDate } from "@/lib/careers";

/**
 * Candidate table for one application bucket.
 *
 * The row is intentionally a summary: the full cover letter and resume belong
 * on the review screen, not in a table cell. Candidate names link there, and the
 * resume link is a separate download so an operator can open it without leaving
 * the pipeline.
 */
export default function ApplicationTable({ applications, view }) {
  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Candidate</th>
          <th>Role</th>
          <th>Experience</th>
          <th>Resume</th>
          <th>Received</th>
          <th className="admin-col-actions">Actions</th>
        </tr>
      </thead>
      <tbody>
        {applications.map((application) => (
          <tr key={application.id}>
            <td>
              <a href={`/admin/careers/applications/${application.id}`}>
                {application.name}
              </a>
              <div className="admin-meta">
                {application.email}
                {application.phone ? ` · ${application.phone}` : ""}
              </div>
            </td>
            <td>
              {application.job_title || "—"}
              {application.job_slug && (
                <div className="admin-meta">/careers/{application.job_slug}</div>
              )}
            </td>
            <td>
              {application.experience || "—"}
              {application.location && (
                <div className="admin-meta">{application.location}</div>
              )}
            </td>
            <td>
              {application.has_resume ? (
                <a
                  className="admin-btn admin-btn-small"
                  href={`/admin/careers/applications/${application.id}/resume`}
                  title={application.resume_filename ?? "Download resume"}
                >
                  Download
                </a>
              ) : (
                <span className="admin-meta">None</span>
              )}
            </td>
            <td>{formatJobDate(application.created_at)}</td>
            <td>
              <div className="admin-row-actions">
                <a
                  className="admin-btn admin-btn-small admin-btn-primary"
                  href={`/admin/careers/applications/${application.id}?from=${view}`}
                >
                  Review
                </a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
