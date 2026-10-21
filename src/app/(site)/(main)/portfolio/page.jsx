export const metadata = {
  title: "Portfolio",
  description:
    "ChadBot, an adaptive AI fitness coach, and ShopAgent CRM, a multi-agent AI sales and customer management platform — selected AI engineering work delivered at Techliance.",
  alternates: { canonical: "/portfolio" },
};

import Link from "next/link";
import { PROJECTS, ENGINEERING_FOCUS } from "@/content/portfolio";
import ScreenSlider from "@/components/portfolio/ScreenSlider";

/*
  /portfolio is one long page rather than a card grid with detail routes.

  Both case studies run down a single column in the same order -- title,
  summary, stack, the story, what it does, the contribution, then the screens.
  One measure, one rhythm, no rails or boxes competing with the writing.

  The screens of a project run in ONE frame with arrows either side
  (components/portfolio/ScreenSlider.jsx). They used to be separate cards, five
  of them for ShopAgent, so a case study was a wall of screenshots and a very
  long scroll. One frame reads as a product being demonstrated.

  All copy lives in src/content/portfolio.js; this file only owns the layout.
*/

export default function Portfolio() {
  return (
    <>
      <section className="pf-hero">
        <div className="container">
          <p className="pf-eyebrow wow fadeInUp">
            <img src="/assets/img/star.png" alt="" /> case studies
          </p>
          <h1 className="wow fadeInUp" data-wow-delay=".15s">
            Selected AI <span>engineering</span> projects
          </h1>
          <p className="pf-hero-lede wow fadeInUp" data-wow-delay=".3s">
            Adaptive assistants, multi-agent systems and production AI
            workflows — built beyond basic chat interfaces.
          </p>
          <p className="pf-hero-note wow fadeInUp" data-wow-delay=".4s">
            Delivered while working at Techliance.
          </p>

          <ul className="pf-hero-links wow fadeInUp" data-wow-delay=".5s">
            {PROJECTS.map((project, index) => (
              <li key={project.id}>
                <a
                  href={`#${project.id}`}
                  className={
                    index === 0
                      ? "theme-btn"
                      : "theme-btn bt-white-outline"
                  }
                >
                  <span>{project.index}</span>
                  {project.name}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8"
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
      </section>

      <div className="pf-work">
        <div className="container">
          {PROJECTS.map((project, projectIndex) => {
            const next = PROJECTS[projectIndex + 1];

            return (
              <article className="pf-case" id={project.id} key={project.id}>
                <header className="pf-case-head">
                  <p className="pf-case-index">Case study {project.index}</p>
                  <h2>{project.name}</h2>
                  <p className="pf-case-lede">{project.summary}</p>

                  <ul className="pf-stack" aria-label="Technology stack">
                    {project.stack.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </header>

                <div className="pf-case-body">
                  <div className="pf-prose">
                    {project.overview.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <section className="pf-block">
                    <h3>Key features</h3>
                    <ul className="pf-feature-list">
                      {project.features.map((feature) => (
                        <li key={feature.title}>
                          <h4>{feature.title}</h4>
                          <p>{feature.body}</p>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="pf-block">
                    <h3>{project.contributionLabel}</h3>
                    <div className="pf-prose">
                      <p>{project.contribution}</p>
                    </div>
                  </section>

                  <section className="pf-block">
                    <h3>Product screens</h3>
                    <ScreenSlider
                      images={project.images}
                      projectName={project.name}
                    />
                  </section>
                </div>

                {!next && (
                  <Link href="/contact" className="pf-next">
                    <span className="pf-next-label">
                      Have a project like this?
                    </span>
                    <span className="pf-next-name">Let’s build yours</span>
                    <span className="pf-next-arrow" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                          d="M3 9h12m0 0-5-5m5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </div>

      <section className="pf-focus" aria-labelledby="engineering-focus">
        <div className="container">
          <p className="pf-eyebrow">
            <img src="/assets/img/star.png" alt="" /> engineering focus
          </p>
          <h2 id="engineering-focus">
            Beyond basic <span>chat interfaces</span>
          </h2>
          <p className="pf-focus-copy">{ENGINEERING_FOCUS.copy}</p>

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
