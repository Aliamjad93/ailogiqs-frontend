export const metadata = {
  title: "BeeLens — AI Bee Virus & Varroa Detection",
  description:
    "BeeLens reads a photo or short video of your bees and flags Varroa mites and the visible signs of honey bee viruses — Deformed Wing, Sacbrood, Chronic Paralysis and Black Queen Cell — in seconds.",
  alternates: { canonical: "/portfolio/bee-virus-detection" },
};

import Link from "next/link";
import BeeVideo from "@/components/bee/BeeVideo";
import { COMB, DiagnosisCard, HiveScan, Icon, ScanMeter, SectionHead, ThreatArt } from "@/components/bee/BeeKit";
import SiteHeader from "@/components/site-header/SiteHeader";
import Footer from "@/components/site-footer/Footer";
import {
  benefits,
  closing,
  diagnosis,
  faq,
  hero,
  steps,
  symptoms,
  threats,
  varroa,
  videos,
} from "@/content/bee-service";

/*
  BeeLens — the second service page in the Portfolio showcase.

  It is the sibling of /portfolio/chatbot: same job (explain one service and
  sell it), same shape (hero, how it works, capability bands, benefits, FAQ),
  and reached the same way — from a card on /project, not from the nav.

  It is NOT the same design. The AI sales agent is indigo; BeeLens is the dark
  and amber system from the client's "Bee Virus Detection Infographic" PDF,
  which is why it lives in its own route group with its own stylesheet
  (public/css/bee-service.css, scoped to body.route-bee). Copying this folder
  and swapping the copy is all a third service needs.
*/

/*
  The brood frame in the Varroa section: two adult bees, one open brood cell,
  and the three findings the model reports. A scene description rather than one
  flat SVG, so a detection box can be moved without editing paths.
  Coordinates are the reference's own, in its 540x672 viewBox.
*/
const BROOD_SCENE = {
  id: "beeBroodComb",
  viewBox: "0 0 540 672",
  comb: COMB.brood,
  bees: [
    { x: 150, y: 190, rotate: 25, mite: true },
    { x: 390, y: 300, rotate: -35 },
  ],
  markers: [
    /*
      On the mite itself, not the bee: the first bee sits at 150,190 rotated
      25deg, its mite rides at local (6,-14) -- the box centres on 161,180 in
      scene space. Around the bee's abdomen instead, it read as if the stripes
      were the finding.
    */
    { x: 144, y: 164, w: 34, h: 32, tone: "alert" },
    { x: 244, y: 500, w: 44, h: 40, tone: "alert" },
  ],
  labels: [
    { text: "Mite on bee", x: 187, y: 166, w: 104, h: 26, tone: "alert" },
    { text: "Mite in brood", x: 296, y: 546, w: 128, h: 26, tone: "alert" },
    { text: "No mites", x: 390, y: 388, w: 116, h: 26, tone: "green" },
  ],
};

/*
  Scroll-reveal stagger, in seconds for WOW.js's `data-wow-delay`.

  Data-driven so adding a card to any grid does not mean hand-numbering a fourth
  delay. Capped at 0.8s: past that the last card in a long row arrives so late
  it reads as broken rather than as a sequence.
*/
const stagger = (i) => `${Math.min(0.2 * (i + 1), 0.8).toFixed(1)}s`;

/* The open brood cell with a larva, drawn beside the second bee. */
function BroodCell() {
  return (
    <g transform="translate(250 520)">
      <polygon
        points="-48,0 -24,-41.5 24,-41.5 48,0 24,41.5 -24,41.5"
        fill="#F1E6CC"
        stroke="#5A3D0C"
        strokeWidth="3"
      />
      <path
        d="M-18,8 C-22,-16 4,-26 18,-12 C26,-2 18,14 6,14"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <ellipse cx="14" cy="18" rx="8" ry="6" fill="#7A2A10" stroke="#3A0F04" strokeWidth="1" />
    </g>
  );
}

export default function BeeVirusDetectionPage() {
  return (
    <>
      <SiteHeader variant="bee" />

      <div className="bee-service">
        {/*
          HERO — exactly one screen tall at every breakpoint, no scroll inside
          it. See .bee-hero in bee-service.css: the height is
          calc(100svh - var(--bee-header-h)) and the copy is capped so it can
          never outgrow that.
        */}
        <section className="bee-hero">
          <div className="bee-hex" aria-hidden="true" />
          <div className="container">
            <div className="bee-hero-grid">
              <div className="bee-hero-copy">
                {/*
                  `wow fadeInUp` + `data-wow-delay` is the main site's own scroll
                  reveal. WOW.js is initialised inside
                  AiLogiQsInitTemplate(), which TemplateRuntime re-runs on every
                  route, so these work here exactly as they do on "/" — and the
                  stagger is the whole point: the eyebrow, heading, paragraph,
                  buttons and ticks arrive in reading order rather than all at
                  once.
                */}
                <p className="bee-eyebrow wow fadeInUp">{hero.eyebrow}</p>
                <h1 className="bee-hero-title wow fadeInUp" data-wow-delay=".2s">
                  {hero.titleLead}
                  <span>{hero.titleAccent}</span>
                </h1>
                <p className="bee-hero-intro wow fadeInUp" data-wow-delay=".3s">
                  {hero.intro}
                </p>
                <div className="bee-hero-cta wow fadeInUp" data-wow-delay=".4s">
                  <Link href={hero.cta.href} className="bee-btn bee-btn-solid">
                    {hero.cta.label}
                  </Link>
                  <a href={hero.ctaGhost.href} className="bee-btn bee-btn-ghost">
                    {hero.ctaGhost.label}
                  </a>
                </div>
                <ul className="bee-checks wow fadeInUp" data-wow-delay=".5s">
                  {hero.checks.map((c) => (
                    <li key={c}>
                      <Icon name="check" size={18} strokeWidth={2.5} />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/*
                The hero artwork: the whole composition — device, detection
                boxes and the two read-outs — supplied as one transparent PNG
                and exported to WebP with the alpha channel intact.

                Same call the sales-agent page makes with its WhatsApp mockup:
                the export carries the reference's own type, spacing and
                shadows, which hand-built markup could only approximate.

                What it costs: the read-outs are no longer selectable text and
                cannot be edited from the page — changing "Mite load / High"
                now means a new export. The alt below is therefore doing the
                work the markup would have done for screen readers and search
                engines, so keep it in step with the artwork.
              */}
              <div className="bee-hero-art wow fadeInUp" data-wow-delay=".2s">
                <img
                  src="/assets/img/custom/bee-hero.webp"
                  alt="A hive video frame on a phone being analysed by BeeLens: a honey bee with a deformed wing boxed in amber, a Varroa mite boxed in red, a read-out showing a high mite load above the safe level, and a second read-out reporting Deformed Wing Virus at high confidence."
                  width={1159}
                  height={1349}
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/*
          PHOTO IN, DIAGNOSIS OUT — the band under the hero.

          A statement band, then three beats on one baseline: the frame being
          analysed, the dashed join, and the report that comes back. Both the
          phone and the report are markup, so every word on this band is real
          text.
        */}
        <section className="bee-band">
          <div className="container">
            <div className="bee-flow-intro wow fadeInUp">
              <p className="bee-eyebrow">{diagnosis.intro.eyebrow}</p>
              <h2 className="bee-flow-title">
                {diagnosis.intro.titleLead}
                <span>{diagnosis.intro.titleAccent}</span>
              </h2>
              <p className="bee-flow-lead">{diagnosis.intro.lead}</p>
            </div>

            <div className="bee-flow">
              <div className="bee-flow-art wow fadeInUp">
                <div className="bee-frame bee-flow-frame">
                  <HiveScan
                    id="beeWingComb"
                    viewBox="0 0 304 620"
                    comb={COMB.fine}
                    bees={[{ x: 152, y: 330, rotate: -14, scale: 1.5, dashedWing: true }]}
                    markers={[{ x: 96, y: 236, w: 120, h: 100, tone: "amber" }]}
                    labels={[
                      {
                        text: "Wing deformity",
                        x: 96,
                        y: 210,
                        w: 132,
                        h: 24,
                        fontSize: 12,
                        tone: "amber",
                      },
                    ]}
                    ariaLabel="A hive video frame with a deformed wing boxed on a honey bee"
                  />
                  <ScanMeter {...diagnosis.clip} progress={0.62} />
                </div>
              </div>

              {/* Decorative: the report is reached by uploading, and this says
                  so without words. Hidden from assistive tech. */}
              <div className="bee-flow-arrow wow fadeInUp" data-wow-delay=".2s" aria-hidden="true" />

              <div className="bee-flow-report wow fadeInUp" data-wow-delay=".4s">
                <DiagnosisCard data={diagnosis.card} />
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS — the four-step pipeline */}
        <section className="bee-band" id="how-it-works">
          <div className="container">
            <SectionHead title={steps.title} align="center" />
            {/*
              Big-screen arrangement: the four steps as a 2x2 grid on the
              left, the walkthrough SQUARE cut running down the right-hand
              column beside the steps it describes. The 1:1 frame and the
              two card rows share one height, so the column edges line up
              (see .bee-how in bee-service.css); below 992 the band stacks.
            */}
            <div className="bee-how">
              <div className="bee-how-steps">
                <div className="bee-grid bee-grid-2">
                  {steps.items.map((s, i) => (
                    <article className="bee-step wow fadeInUp" key={s.n} data-wow-delay={stagger(i)}>
                      <span className="bee-step-icon">
                        <Icon name={s.icon} size={26} />
                      </span>
                      <span className="bee-step-n" aria-hidden="true">
                        {s.n}
                      </span>
                      <h3>{s.title}</h3>
                      <p>{s.text}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="bee-how-media wow fadeInUp" data-wow-delay=".2s">
                <BeeVideo {...videos.howItWorks} />
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IT LOOKS FOR — the four viruses, named on their visible signs */}
        <section className="bee-band">
          <div className="container">
            <SectionHead title={symptoms.title} align="center" />
            <div className="bee-grid bee-grid-4">
              {symptoms.items.map((s, i) => (
                <article
                  className="bee-symptom wow fadeInUp"
                  key={s.code}
                  data-wow-delay={stagger(i)}
                >
                  <p className="bee-symptom-code">{s.code}</p>
                  <h3>{s.title}</h3>
                  <p className="bee-symptom-text">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* VARROA DETECTION — frame on the left, capability grid on the right */}
        <section className="bee-band bee-band-tint">
          <div className="container">
            <div className="bee-split">
              <div className="bee-split-art wow fadeInUp">
                <div className="bee-frame bee-frame-sm">
                  <HiveScan
                    {...BROOD_SCENE}
                    ariaLabel="Frame from an uploaded brood-frame video with Varroa mites detected on adult bees and in an open brood cell"
                  >
                    <BroodCell />
                  </HiveScan>
                  <ScanMeter {...varroa.clip} progress={0.48} />
                </div>
              </div>
              <div className="bee-split-copy wow fadeInUp" data-wow-delay=".2s">
                <SectionHead
                  eyebrow={varroa.eyebrow}
                  title={varroa.title}
                  intro={varroa.intro}
                />
                <div className="bee-grid bee-grid-2">
                  {varroa.items.map((it, i) => (
                    <div
                      className="bee-mini wow fadeInUp"
                      key={it.title}
                      data-wow-delay={stagger(i)}
                    >
                      <h4>{it.title}</h4>
                      <p>{it.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/*
              The Varroa cut: the section's own claim ("Every mite. Counted.")
              shown happening, on a real uploaded clip. Full container width —
              the detection boxes are the point, and they need the room.
            */}
            <div className="bee-video-slot bee-video-slot-wide wow fadeInUp">
              <BeeVideo {...videos.varroa} />
            </div>
          </div>
        </section>

        {/* WHAT IT DETECTS — the one light band, so the threat cards read as specimens on paper */}
        <section className="bee-band bee-band-cream">
          <div className="container">
            <SectionHead
              eyebrow={threats.eyebrow}
              title={threats.title}
              intro={threats.intro}
            />
            <div className="bee-grid bee-grid-5">
              {threats.items.map((t, i) => (
                <article
                  className={`bee-threat${t.feature ? " bee-threat-feature" : ""} wow fadeInUp`}
                  key={t.code}
                  data-wow-delay={stagger(i)}
                >
                  <div className="bee-threat-art">
                    <ThreatArt name={t.art} />
                  </div>
                  <p className="bee-threat-code">{t.code}</p>
                  <h4>{t.title}</h4>
                  <p className="bee-threat-text">{t.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bee-band">
          <div className="container">
            <div className="bee-head-row">
              <SectionHead eyebrow={benefits.eyebrow} title={benefits.title} />
              <Link href={benefits.cta.href} className="bee-btn bee-btn-solid bee-btn-lg">
                {benefits.cta.label}
              </Link>
            </div>
            <div className="bee-grid bee-grid-3">
              {benefits.items.map((b, i) => (
                <article
                  className="bee-benefit wow fadeInUp"
                  key={b.title}
                  data-wow-delay={stagger(i)}
                >
                  <span className="bee-benefit-icon">
                    <Icon name={b.icon} size={24} />
                  </span>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </article>
              ))}
            </div>

            {/* The "why choose us" cut: the six cards above, in motion. */}
            <div className="bee-video-slot wow fadeInUp">
              <BeeVideo {...videos.whyChooseUs} />
            </div>
          </div>
        </section>

        {/*
          CLOSING CTA — full-bleed amber, the loudest thing on the page, and
          now the band without a clip: the walkthrough cuts already run in the
          How-it-works and Varroa bands, so a third on the same story would
          close the page on a repeat. The copy is centred poster-style —
          heading, pitch line, button — and the amber stays full-bleed.
        */}
        <section className="bee-cta">
          <div className="container">
            <div className="bee-cta-copy wow fadeInUp">
              <h2>{closing.title}</h2>
              <p>{closing.text}</p>
              <Link href={closing.cta.href} className="bee-btn bee-btn-dark bee-btn-lg">
                {closing.cta.label}
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ — accordion, plus a hive frame as the aside */}
        <section className="bee-band">
          <div className="container">
            <div className="bee-split bee-split-reverse">
              <div className="bee-split-copy wow fadeInUp">
                <SectionHead eyebrow={faq.eyebrow} title={faq.title} accent={faq.accent} intro={faq.intro} />
                <div className="accordion bee-faq" id="faq-bee">
                  {faq.items.map((f, i) => (
                    <div className="accordion-item wow fadeInUp" key={f.q} data-wow-delay={stagger(i)}>
                      <h3 className="accordion-header">
                        <button
                          className={`accordion-button${i === 0 ? "" : " collapsed"}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#beefaq${i + 1}`}
                          aria-expanded={i === 0 ? "true" : "false"}
                          aria-controls={`beefaq${i + 1}`}
                        >
                          {f.q}
                        </button>
                      </h3>
                      <div
                        id={`beefaq${i + 1}`}
                        className={`accordion-collapse collapse${i === 0 ? " show" : ""}`}
                        data-bs-parent="#faq-bee"
                      >
                        <div className="accordion-body">{f.a}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bee-split-art wow fadeInUp" data-wow-delay=".2s">
                <div className="bee-frame bee-frame-tall">
                  <HiveScan
                    id="beeFaqComb"
                    viewBox="0 0 304 620"
                    comb={COMB.fine}
                    bees={[{ x: 152, y: 300, rotate: 12, scale: 1.35, mite: true }]}
                    markers={[{ x: 96, y: 250, w: 120, h: 100, tone: "amber" }]}
                    labels={[
                      { text: "Rescan saved", x: 96, y: 224, w: 132, h: 24, fontSize: 12, tone: "amber" },
                    ]}
                    ariaLabel="A rescan of the same hive frame, saved against the hive and date"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer variant="classic" />
    </>
  );
}
