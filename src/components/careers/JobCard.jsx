import Link from "next/link";
import CareersIcon from "@/components/careers/CareersIcon";

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
              <CareersIcon name="location" />
              {job.location}
            </span>
          )}
          {job.workMode && (
            <span>
              <CareersIcon name="building" />
              {job.workMode}
            </span>
          )}
          {job.employmentType && (
            <span>
              <CareersIcon name="clock" />
              {job.employmentType}
            </span>
          )}
          {job.experienceLevel && (
            <span>
              <CareersIcon name="trendingUp" />
              {job.experienceLevel}
            </span>
          )}
        </div>
      </div>

      <span className="careers-job-arrow" aria-hidden="true">
        <CareersIcon name="arrowRight" />
      </span>
    </Link>
  );
}
