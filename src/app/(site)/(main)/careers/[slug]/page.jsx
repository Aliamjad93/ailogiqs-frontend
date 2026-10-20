import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatJobDate,
  getOpenJobBySlug,
  getOpenJobs,
} from "@/lib/careers";
import { absoluteUrl, SITE } from "@/lib/site.config";
import ApplicationForm from "@/components/careers/ApplicationForm";
import CareersIcon from "@/components/careers/CareersIcon";
import JobCard from "@/components/careers/JobCard";

export const dynamic = "force-dynamic";

const EMPLOYMENT_SCHEMA = {
  "Full-time": "FULL_TIME",
  "Part-time": "PART_TIME",
  Contract: "CONTRACTOR",
  Internship: "INTERN",
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = await getOpenJobBySlug(slug);

  if (!job) {
    return {
      title: "Role not found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: job.title,
    description: job.summary,
    alternates: { canonical: `/careers/${job.slug}` },
    openGraph: {
      type: "website",
      description: job.summary,
      url: `/careers/${job.slug}`,
    },
  };
}

export default async function JobPage({ params }) {
  const { slug } = await params;
  const job = await getOpenJobBySlug(slug);

  // A closed or deleted role is not a page. Keeping it at 404 is what removes it
  // from search results promptly after the admin closes it.
  if (!job) notFound();

  const allJobs = await getOpenJobs();
  const otherJobs = allJobs.filter((other) => other.id !== job.id).slice(0, 3);
  const posted = formatJobDate(job.createdAt);

  const jobLocation =
    job.workMode === "Remote"
      ? undefined
      : {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: job.location,
            addressCountry: "PK",
          },
        };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.descriptionHtml || job.summary,
    datePosted: String(job.createdAt).slice(0, 10),
    employmentType: EMPLOYMENT_SCHEMA[job.employmentType] ?? "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: SITE.name,
      sameAs: SITE.url,
      logo: absoluteUrl("/assets/img/logo/white-logo.svg"),
    },
    url: absoluteUrl(`/careers/${job.slug}`),
    directApply: true,
    ...(jobLocation ? { jobLocation } : { jobLocationType: "TELECOMMUTE" }),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Careers",
        item: absoluteUrl("/careers"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: job.title,
        item: absoluteUrl(`/careers/${job.slug}`),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="career-detail-hero">
        <div className="container">
          <nav className="careers-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/careers">Careers</Link>
            <span>/</span>
            <span aria-current="page">{job.title}</span>
          </nav>

          <div className="career-detail-hero-inner">
            <span className="careers-job-dept">
              {job.department || "Open role"}
            </span>

            <h1>{job.title}</h1>
            <p className="career-detail-summary">{job.summary}</p>

            <div className="career-detail-meta">
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

            <div className="careers-hero-actions">
              <a className="theme-btn" href="#apply">
                Apply for this role <CareersIcon name="arrowRight" />
              </a>
              <Link className="theme-btn bt-white-outline" href="/careers">
                All openings
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="career-detail-section">
        <div className="container">
          <div className="career-detail-grid">
            <div className="career-prose">
              {job.descriptionHtml ? (
                <div
                  dangerouslySetInnerHTML={{ __html: job.descriptionHtml }}
                />
              ) : (
                <p>{job.summary}</p>
              )}
            </div>

            <aside className="career-sidebar">
              <div className="career-summary-card">
                <span className="career-posted">Posted {posted}</span>
                <h2>Role at a glance</h2>

                <ul className="career-facts">
                  {job.department && (
                    <li>
                      <span>Department</span>
                      <strong>{job.department}</strong>
                    </li>
                  )}
                  {job.location && (
                    <li>
                      <span>Location</span>
                      <strong>{job.location}</strong>
                    </li>
                  )}
                  {job.workMode && (
                    <li>
                      <span>Work mode</span>
                      <strong>{job.workMode}</strong>
                    </li>
                  )}
                  {job.employmentType && (
                    <li>
                      <span>Type</span>
                      <strong>{job.employmentType}</strong>
                    </li>
                  )}
                  {job.experienceLevel && (
                    <li>
                      <span>Experience</span>
                      <strong>{job.experienceLevel}</strong>
                    </li>
                  )}
                  {job.salaryRange && (
                    <li>
                      <span>Compensation</span>
                      <strong>{job.salaryRange}</strong>
                    </li>
                  )}
                </ul>

                <a className="theme-btn career-apply-link" href="#apply">
                  Apply now <CareersIcon name="arrowRight" />
                </a>
                <p className="career-sidebar-note">
                  Every application is reviewed by a person on the team.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="careers-apply-section" id="apply">
        <div className="container">
          <div className="careers-apply-shell">
            <div className="careers-apply-intro">
              <span className="careers-eyebrow">
                <CareersIcon name="sparkles" />
                apply now
              </span>
              <h2>
                Your next
                <br />
                <span>chapter <b>starts here.</b></span>
              </h2>
              <p>
                Tell us what you have built and why this role is the right next
                step. A specific note beats a generic template every time.
              </p>

              <ul className="careers-apply-points">
                <li>
                  <CareersIcon name="fileUp" />
                  Resume as PDF, DOC or DOCX, under 3 MB.
                </li>
                <li>
                  <CareersIcon name="userCheck" />
                  Reviewed by a person, not an automated filter.
                </li>
                <li>
                  <CareersIcon name="clock" />
                  We usually reply within 10 working days.
                </li>
              </ul>
            </div>

            <ApplicationForm job={job} />
          </div>
        </div>
      </section>

      {otherJobs.length > 0 && (
        <section className="career-more-section">
          <div className="container">
            <div className="careers-section-head">
              <div className="section-title">
                <h6>
                  <CareersIcon name="sparkles" />
                  keep looking
                </h6>
                <h2>
                  Other open <span>roles.</span>
                </h2>
              </div>
              <Link className="theme-btn bt-white-outline" href="/careers">
                View all openings
              </Link>
            </div>

            <div className="careers-jobs">
              {otherJobs.map((other) => (
                <JobCard key={other.id} job={other} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
