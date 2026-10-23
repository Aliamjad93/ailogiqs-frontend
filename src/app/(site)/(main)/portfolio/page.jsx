export const metadata = {
  title: "Portfolio",
  description:
    "ChadBot, an adaptive AI fitness coach, and ShopAgent CRM, a multi-agent AI sales and customer management platform — selected AI engineering work delivered at Techliance.",
  alternates: { canonical: "/portfolio" },
};

import Link from "next/link";
import { PROJECTS, ENGINEERING_FOCUS } from "@/content/portfolio";

/*  --------------------------------------------------------------------------
    /portfolio — two-card showcase

    The page opens the way /projects does: a centred heading band over the
    breadcrumb glow — eyebrow, one title with the Marcellus/yellow accent, a
    single lede, then a small meta row — and continues into two cards side by
    side, ChadBot on the left, ShopAgent CRM on the right.

    Each card is the project mockup, then title, summary, stack pills, key
    features and the contribution statement. Everything that lived in
    src/content/portfolio.js is still represented except three pieces the user
    asked to drop: the screen gallery (the mockup already shows the product),
    the per-card index/category line, and the hero's "02 case studies /
    delivered at Techliance" meta row.

    The two cards are grid items in ONE grid (not Bootstrap columns), ChadBot
    first, ShopAgent second, so they read left to right and stretch to a shared
    height. The contribution panel is pinned to the bottom of each card with
    `margin-top: auto`, so the ragged edge left by ChadBot's four features
    against ShopAgent's six lands in the empty space above that panel instead
    of at the bottom of the page.

    The mockup images are the card artwork:
      - ChadBot:     /assets/img/projects/chadbot-mockup.png
      - ShopAgent:   /assets/img/projects/shopagent-mockup.png
    Both are 1254x1254 and are shown in a 4:3 frame, which crops ~12% off the
    top and bottom — the phones sit inside that margin, so nothing is lost.
*//* ------------------------------------------------------------------ */

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/* ------------------------------------------------------------------ */

export default function Portfolio() {
  return (
    <div className="pf-page">
      {/* ---- heading band ------------------------------------------------
          Mirrors /projects: the same centred eyebrow + title + lede rhythm,
          the same 16/65px scale, the same Marcellus accent. The only
          difference is that this page keeps a visible <h1> (it has one in the
          document already, and /portfolio is the page people land on from
          search), so the type below is set on the h1 instead of an h2. */}
      <section className="pf-hero">
        <div className="container">
          <p className="pf-eyebrow wow fadeInUp">
            <img src="/assets/img/star.png" alt="" /> case studies
          </p>
          <h1 className="wow fadeInUp" data-wow-delay=".15s">
            Selected AI <span>engineering <b>projects</b></span>
          </h1>
          <p className="pf-hero-lede wow fadeInUp" data-wow-delay=".3s">
            Adaptive assistants, multi-agent systems and production AI
            workflows — built beyond basic chat interfaces.
          </p>
        </div>
      </section>

      {/* ---- two cards ---- */}
      <section className="pf-work" aria-label="Case studies">
        <div className="container">
          <div className="pf-grid">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- engineering focus ---- */}
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

      {/* ---- CTA ---- */}
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
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Card ---------------------------------------------------------------- */
/* ------------------------------------------------------------------ */

function ProjectCard({ project }) {
  return (
    <article id={project.id} className="pf-card">
      {/* ---- artwork ---- */}
      <div className="pf-card-media">
        <img src={project.cardImage} alt={project.cardAlt} loading="lazy" />
      </div>

      {/* ---- body ---- */}
      <div className="pf-card-body">
        <h2 className="pf-card-title">{project.name}</h2>
        <p className="pf-card-desc">{project.summary}</p>

        <ul className="pf-card-stack" aria-label="Technology stack">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="pf-card-block">
          <h3 className="pf-card-label">Key features</h3>
          <ul className="pf-card-feats">
            {project.features.map((feature) => (
              <li key={feature.title}>
                <span className="pf-tick" aria-hidden="true">
                  <CheckIcon />
                </span>
                <p>
                  <strong>{feature.title}</strong> {feature.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="pf-card-contrib">
          <h3 className="pf-card-label">{project.contributionLabel}</h3>
          <p>{project.contribution}</p>
        </div>
      </div>
    </article>
  );
}
