import Link from "next/link";
import { getOpenJobs } from "@/lib/careers";
import JobCard from "@/components/careers/JobCard";

const DESCRIPTION =
  "Build AI products that reach real users. Explore engineering, data, design and growth roles at AiLogiQs in Lahore and remote.";

export const metadata = {
  title: "Careers",
  description: DESCRIPTION,
  keywords: [
    "AI jobs Lahore",
    "machine learning jobs",
    "software house careers",
    "AiLogiQs careers",
    "remote AI jobs",
  ],
  alternates: { canonical: "/careers" },
  openGraph: {
    type: "website",
    description: DESCRIPTION,
    url: "/careers",
  },
};

/**
 * Public careers page.
 *
 * Readings are forced dynamic: a role can be opened or closed from the admin
 * panel at any time, and a statically prerendered list would keep advertising a
 * closed job until the next deploy. Filtering by department happens in memory
 * because the list is small and a filter must never hide a role due to a query
 * parameter typo.
 */
export const dynamic = "force-dynamic";

export default async function CareersPage({ searchParams }) {
  const params = await searchParams;
  const allJobs = await getOpenJobs();

  const departments = [
    ...new Set(allJobs.map((job) => job.department).filter(Boolean)),
  ].sort((a, b) => a.localeCompare(b));

  const requested =
    typeof params?.department === "string" ? params.department : "all";
  const activeDepartment = departments.includes(requested) ? requested : "all";

  const jobs =
    activeDepartment === "all"
      ? allJobs
      : allJobs.filter((job) => job.department === activeDepartment);

  const roleLabel = allJobs.length === 1 ? "role" : "roles";

  return (
    <>
      <section className="careers-hero">
        <div className="container">
          <div className="careers-hero-grid">
            <div className="careers-hero-copy-wrap">
              <span className="careers-eyebrow">
                <img src="/assets/img/star.png" alt="" />
                We&rsquo;re hiring
              </span>

              <h1>
                Build AI that <span>actually <b>ships.</b></span>
              </h1>

              <p className="careers-hero-copy">
                AiLogiQs is a small, senior team turning AI into products that
                businesses use every day. If you like owning outcomes, learning
                fast and working close to the problem, you will fit right in.
              </p>

              <div className="careers-hero-actions">
                <a className="theme-btn" href="#openings">
                  Explore open roles{" "}
                  <i className="fas fa-arrow-right" aria-hidden="true" />
                </a>
                <Link className="theme-btn bt-white-outline" href="/team">
                  Meet the team
                </Link>
              </div>

              <div className="careers-hero-chips">
                <span>
                  <i className="fas fa-location-dot" aria-hidden="true" />
                  Lahore, Pakistan
                </span>
                <span>
                  <i className="fas fa-globe" aria-hidden="true" />
                  Hybrid &amp; remote roles
                </span>
                <span>
                  <i className="fas fa-graduation-cap" aria-hidden="true" />
                  Paid internships
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="careers-openings-section" id="openings">
        <div className="container">
          <div className="careers-section-head">
            <div className="section-title">
              <h6>
                <img src="/assets/img/star.png" alt="" />
                open positions
              </h6>
              <h2>
                Find your next
                <br />
                <span>piece of <b>work.</b></span>
              </h2>
            </div>
            <p className="careers-section-intro">
              {allJobs.length > 0
                ? `We currently have ${allJobs.length} open ${roleLabel}. Every application is read by a person on the team.`
                : "We do not have a role listed right now, but we are always glad to meet thoughtful people."}
            </p>
          </div>

          {departments.length > 1 && (
            <nav className="careers-filters" aria-label="Filter roles by department">
              <Link
                href="/careers#openings"
                className={`careers-filter${
                  activeDepartment === "all" ? " is-active" : ""
                }`}
              >
                All roles <span>{allJobs.length}</span>
              </Link>
              {departments.map((department) => {
                const count = allJobs.filter(
                  (job) => job.department === department
                ).length;
                return (
                  <Link
                    key={department}
                    href={`/careers?department=${encodeURIComponent(
                      department
                    )}#openings`}
                    className={`careers-filter${
                      activeDepartment === department ? " is-active" : ""
                    }`}
                  >
                    {department} <span>{count}</span>
                  </Link>
                );
              })}
            </nav>
          )}

          {jobs.length === 0 ? (
            <div className="careers-empty">
              <span className="careers-empty-icon">
                <i className="fas fa-briefcase" aria-hidden="true" />
              </span>
              <h3>
                {activeDepartment === "all"
                  ? "No open roles right now"
                  : `No open ${activeDepartment} roles right now`}
              </h3>
              <p>
                {activeDepartment === "all"
                  ? "We are always happy to hear from engineers, designers and analysts who care about their craft. Introduce yourself and we will keep you in mind."
                  : "Try another department, or introduce yourself and tell us what you would like to build."}
              </p>
              <div className="careers-empty-actions">
                {activeDepartment !== "all" && (
                  <Link className="theme-btn" href="/careers#openings">
                    All roles
                  </Link>
                )}
                <Link className="theme-btn bt-white-outline" href="/contact">
                  Introduce yourself
                </Link>
              </div>
            </div>
          ) : (
            <div className="careers-jobs">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="careers-cta-section">
        <div className="container">
          <div className="careers-cta-inner">
            <div>
              <span className="careers-cta-eyebrow">No perfect match?</span>
              <h2>Tell us what you want to build.</h2>
              <p>
                We would rather meet a strong person before there is a vacancy
                than rush a hire when there is one.
              </p>
            </div>
            <div className="careers-cta-actions">
              <Link className="theme-btn" href="/contact">
                Start a conversation{" "}
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </Link>
              <a className="careers-cta-mail" href="mailto:bd@ailogiqs.com">
                bd@ailogiqs.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
