import Link from "next/link";

/**
 * One open role in the listing (and in the "more roles" strip on a detail page).
 *
 * The whole card is the link rather than a "View role" button alone: on a
 * careers list the role title is the obvious target. Metadata is kept as chips
 * so the card stays scannable on mobile.
 */
export default function JobCard({ job }) {
  return (
    <Link href={`/careers/${job.slug}`} className="careers-job-card">
      <div className="careers-job-main">
        <span className="careers-job-dept">
          {job.department || "Open role"}
        </span>
        <h3>{job.title}</h3>
        <p>{job.summary}</p>

        <div className="careers-job-meta">
          {job.location && (
            <span>
              <i className="fas fa-location-dot" aria-hidden="true" />
              {job.location}
            </span>
          )}
          {job.workMode && (
            <span>
              <i className="fas fa-building" aria-hidden="true" />
              {job.workMode}
            </span>
          )}
          {job.employmentType && (
            <span>
              <i className="fas fa-clock" aria-hidden="true" />
              {job.employmentType}
            </span>
          )}
          {job.experienceLevel && (
            <span>
              <i className="fas fa-chart-line" aria-hidden="true" />
              {job.experienceLevel}
            </span>
          )}
        </div>
      </div>

      <span className="careers-job-arrow" aria-hidden="true">
        <i className="fas fa-arrow-right" />
      </span>
    </Link>
  );
}
