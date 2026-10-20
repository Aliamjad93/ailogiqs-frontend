export const metadata = {
  title: "Portfolio",
  description:
    "ChadBot, an adaptive AI fitness coach, and ShopAgent CRM, a multi-agent AI sales and customer management platform — selected AI engineering work delivered at Techliance.",
  alternates: { canonical: "/portfolio" },
};

import Link from "next/link";
import { PROJECTS, ENGINEERING_FOCUS } from "@/content/portfolio";

/*
  /portfolio is one long page rather than a card grid with detail routes.

  Each project gets the same rhythm -- a numbered title, overview, feature
  cards, the contribution, then the product screens -- so the two case studies
  read as one body of work. All copy lives in src/content/portfolio.js; this
  file only owns the layout.

  The image sets differ on purpose: ShopAgent has five screens, so its first
  one runs full width and the rest sit two-up; ChadBot only has two, so they
  share a single row. See the `pf-gallery--*` rules in overrides.css.
*/

export default function Portfolio() {
  return (
    <>
      <section className="pf-hero">
        <div className="container">
          <div className="pf-hero-inner">
            <p className="pf-eyebrow wow fadeInUp">
              <img src="/assets/img/star.png" alt="" /> selected AI work
            </p>
            <h1 className="wow fadeInUp" data-wow-delay=".2s">
              Selected AI <span>engineering</span> projects
            </h1>
            <p className="pf-hero-context wow fadeInUp" data-wow-delay=".35s">
              Professional work delivered while working at Techliance.
            </p>
            <p className="pf-hero-lede wow fadeInUp" data-wow-delay=".45s">
              Adaptive assistants, multi-agent systems and production AI
              workflows — built beyond basic chat interfaces.
            </p>

            <ul className="pf-hero-links wow fadeInUp" data-wow-delay=".55s">
              {PROJECTS.map((project) => (
                <li key={project.id}>
                  <a href={`#${project.id}`}>
                    <span>{project.index}</span>
                    {project.name}
                    <svg
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 1v11M1.5 7.5 6 12l4.5-4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="pf-work">
        <div className="container">
          {PROJECTS.map((project) => (
            <article className="pf-project" id={project.id} key={project.id}>
              <header className="pf-project-head">
                <div className="pf-project-index" aria-hidden="true">
                  {project.index}
                </div>
                <div className="pf-project-title">
                  <p className="pf-kicker">
                    <span>//</span> {project.category}
                  </p>
                  <h2>{project.name}</h2>
                  <p>{project.summary}</p>
                </div>
              </header>

              <div className="pf-overview">
                <div className="pf-copy">
                  <h3>Overview</h3>
                  {project.overview.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <aside className="pf-sidebar" aria-label={`${project.name} details`}>
                  <dl className="pf-meta">
                    <div>
                      <dt>Delivered at</dt>
                      <dd>Techliance</dd>
                    </div>
                    <div>
                      <dt>Focus</dt>
                      <dd>{project.focus}</dd>
                    </div>
                  </dl>

                  <div className="pf-stack">
                    <h3>Technology stack</h3>
                    <ul>
                      {project.stack.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>

              <section
                className="pf-features"
                aria-labelledby={`${project.id}-features`}
              >
                <h3 className="pf-label" id={`${project.id}-features`}>
                  Key features{" "}
                  <span>{String(project.features.length).padStart(2, "0")}</span>
                </h3>
                <ul
                  className={`pf-feature-grid${
                    project.features.length > 4 ? " pf-feature-grid--three" : ""
                  }`}
                >
                  {project.features.map((feature, featureIndex) => (
                    <li key={feature.title}>
                      <span className="pf-feature-num">
                        {String(featureIndex + 1).padStart(2, "0")}
                      </span>
                      <h4>{feature.title}</h4>
                      <p>{feature.body}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="pf-contribution">
                <h3 className="pf-label">{project.contributionLabel}</h3>
                <p>{project.contribution}</p>
              </section>

              <section
                className="pf-gallery-block"
                aria-labelledby={`${project.id}-screens`}
              >
                <h3 className="pf-label" id={`${project.id}-screens`}>
                  Product screens{" "}
                  <span>{String(project.images.length).padStart(2, "0")}</span>
                </h3>
                <div className={`pf-gallery pf-gallery--${project.id}`}>
                  {project.images.map((image, imageIndex) => (
                    <figure
                      className={`pf-shot${
                        project.id === "shopagent" && imageIndex === 0
                          ? " pf-shot--lead"
                          : ""
                      }`}
                      key={image.src}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption>
                        <span>{String(imageIndex + 1).padStart(2, "0")}</span>
                        {image.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            </article>
          ))}
        </div>
      </div>

      <section className="pf-focus" aria-labelledby="engineering-focus">
        <div className="container">
          <div className="pf-focus-panel">
            <div className="pf-focus-heading">
              <p className="pf-eyebrow">
                <img src="/assets/img/star.png" alt="" /> engineering focus
              </p>
              <h2 id="engineering-focus">
                Beyond basic <span>chat interfaces</span>
              </h2>
              <p>{ENGINEERING_FOCUS.copy}</p>
            </div>

            <ul className="pf-focus-grid">
              {ENGINEERING_FOCUS.pillars.map((pillar, index) => (
                <li key={pillar.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </li>
              ))}
            </ul>

            <p className="pf-note">{ENGINEERING_FOCUS.note}</p>
          </div>
        </div>
      </section>

      <section
        className="cta-discuss-section fix section-padding bg-cover"
        style={{ backgroundImage: "url('/assets/img/cta-dark-bg.svg')" }}
      >
        <div className="container">
          <div className="cta-discuss-content">
            <h2>
              Ready to put AI to <br />
              <span>
                work in <b>your</b> business?
              </span>
            </h2>
            <p>
              Tell us what you are trying to automate and we will show you what
              an AI agent, a machine-learning model or a data pipeline could do
              for it.
            </p>
            <Link href="/contact" className="theme-btn">
              get a free consultation{" "}
              <i className="fa-solid fa-arrow-up-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
