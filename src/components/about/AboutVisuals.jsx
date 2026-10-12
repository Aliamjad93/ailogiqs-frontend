/*
 * About-page figures, drawn as markup instead of shipped as artwork.
 *
 * The /about hero row used to seat two dark bitmaps side by side: a yellow
 * "Idea -> Build -> Launch" flow (about/06.jpg) and a yellow-on-black analytics
 * dashboard (about/07.jpg). Every other surface on the site runs the homepage
 * palette -- white panels, indigo #514DE0 accents, #EEF2FF tints -- so those
 * two read as screenshots from a different product.
 *
 * They are rebuilt here as ordinary elements: discs, cards, bars and sparkles
 * are divs, the connectors and the trend line are inline SVG. The composition
 * of each original is kept, but the subject matter is now the AiLogiQs story
 * (map the problem, train the agent, let it run) in the brand palette, and the
 * labels are real, selectable text rather than pixels.
 *
 * Sizing: every figure is measured in `cqw` -- 1cqw is 1% of the figure's own
 * width -- so each scales as a single unit exactly like the image it replaced.
 * All styling lives in public/css/overrides.css under the `abt-` prefix; the
 * theme's own classes are never touched.
 *
 * Two figures live here, both in the hero row:
 *   - ProcessStepsVisual   the hero row, left  (replaced about/06.jpg)
 *   - AgentDashboardVisual the hero row, right (replaced about/07.jpg)
 * StepArrow is the connector used by the "how we work" row below them.
 */

/** Step name, note, centre (as a % of the figure's box) and disc radius. */
const PROCESS_STEPS = [
  { n: "1", name: "Idea", note: "We map your workflow", x: 19.5, y: 39, r: 8.4 },
  { n: "2", name: "Build", note: "We train it on your data", x: 49, y: 53, r: 8.4 },
  {
    n: "3",
    name: "Launch",
    note: "It sells while you sleep",
    x: 79.5,
    y: 69.5,
    r: 9.2,
    final: true,
  },
];

/** Sparkle positions, as a % of the figure's box, plus their size in cqw.
 *
 * `tone` is carried in the data rather than picked off with :nth-child(),
 * because the caption chip is a sibling ahead of these and any element added
 * above them would silently shift every nth-child rule by one. */
const SPARKLES = [
  { x: 85, y: 17, size: 3.8 },
  { x: 92.5, y: 31, size: 1.9, tone: "sky" },
  { x: 12.5, y: 82, size: 2.6, tone: "faint" },
  { x: 66, y: 12.5, size: 1.6, tone: "faint" },
  { x: 29, y: 74, size: 1.5, tone: "sky" },
];

/**
 * The three-step engagement flow: a dotted indigo path that descends from a
 * small "Idea" disc to a filled "Launch" disc, mirroring the original.
 */
export function ProcessStepsVisual() {
  return (
    <div
      className="abt-visual abt-process"
      role="img"
      aria-label="How an AiLogiQs engagement runs: 1 Idea, we map your workflow. 2 Build, we train it on your data. 3 Launch, it sells while you sleep."
    >
      {/* The figure's own title, matching the dashboard window's title bar so
          the pair reads as two panels rather than two loose illustrations. It
          sits in the empty top-left of the box -- the first step's disc starts
          at ~30% of the height -- so it needs no geometry change. */}
      <p className="abt-chip">
        <i className="abt-chip-dot" aria-hidden="true" />
        How we work
      </p>

      {SPARKLES.map((s, i) => (
        <span
          key={i}
          className={`abt-spark${s.tone ? ` abt-spark-${s.tone}` : ""}`}
          aria-hidden="true"
          style={{
            "--x": `${s.x}%`,
            "--y": `${s.y}%`,
            "--size": `${s.size}cqw`,
          }}
        />
      ))}

      {/*
        The connector. Drawn first and through the disc centres, so the opaque
        discs above it clip the dashes to the gaps between them -- which is how
        the original read. preserveAspectRatio="none" keeps the path locked to
        the same percentage box the discs are positioned in, and
        non-scaling-stroke stops the stretch from fattening the dashes.
      */}
      <svg
        className="abt-process-path"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M19.5 39 L49 53 L79.5 69.5" />
      </svg>

      <ol className="abt-process-steps">
        {PROCESS_STEPS.map((step) => (
          <li
            key={step.n}
            className={`abt-step${step.final ? " abt-step-final" : ""}`}
            style={{
              "--x": `${step.x}%`,
              "--y": `${step.y}%`,
              "--r": `${step.r}cqw`,
            }}
          >
            <span className="abt-step-disc">
              <span className="abt-step-num">{step.n}</span>
            </span>
            <span className="abt-step-copy">
              <b>{step.name}</b>
              <i>{step.note}</i>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Sidebar navigation placeholders: the first row is the selected one. */
const SIDE_ROWS = [
  { active: true, width: 62 },
  { width: 52 },
  { width: 64 },
  { width: 46 },
  { width: 58 },
];

const STATS = [
  { label: "Hours saved", value: "412" },
  { label: "Tasks done", value: "9.8k" },
  { label: "Accuracy", value: "97%" },
];

const AGENTS = [
  { name: "Support agent", meta: "1,284 chats", live: true },
  { name: "Sales agent", meta: "86 leads", live: true },
  { name: "Data agent", meta: "Running", live: false },
];

/**
 * The connector drawn between two steps of the "how we work" row.
 *
 * The template used a bitmap for this (work-arrow.png) and painted it white,
 * which is correct on the homepage, where the row sits on a dark photograph --
 * and invisible on /about, where the same row sits on a white band. Drawing it
 * instead means one arrow that can simply be given the surface's colour, and it
 * echoes the dashed connector in the process figure above.
 */
export function StepArrow() {
  return (
    <svg
      className="abt-arrow"
      width="76"
      height="24"
      viewBox="0 0 76 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 12h56"
        stroke="#514DE0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="5 7"
      />
      <path
        d="M60 4l8 8-8 8"
        stroke="#514DE0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * The automation dashboard: sidebar rail, weekly trend, three headline stats
 * and the agents currently on shift.
 */
export function AgentDashboardVisual() {
  return (
    <div
      className="abt-visual abt-dash"
      role="img"
      aria-label="AiLogiQs automation dashboard: automated tasks up 64% this week, 412 hours saved, 9.8k tasks done at 97% accuracy, with the support, sales and data agents running."
    >
      <div className="abt-window" aria-hidden="true">
        <div className="abt-dash-bar">
          <span className="abt-dash-led" />
          <span className="abt-dash-led" />
          <span className="abt-dash-led abt-dash-led-on" />
          {/* Names the window so the figure reads as a product screenshot
              rather than an abstract chart, and balances the process figure's
              "How we work" chip opposite it. */}
          <span className="abt-dash-title">AiLogiQs Console</span>
          <span className="abt-dash-live">
            <i className="abt-dash-live-dot" />
            Live
          </span>
        </div>

        <div className="abt-dash-body">
          <div className="abt-dash-side">
            {SIDE_ROWS.map((row, i) => (
              <span
                key={i}
                className={`abt-side-row${row.active ? " abt-side-row-on" : ""}`}
              >
                <i className="abt-side-dot" />
                <i className="abt-side-bar" style={{ width: `${row.width}%` }} />
              </span>
            ))}
          </div>

          <div className="abt-dash-main">
            <div className="abt-dash-col">
              <div className="abt-kpi">
                <p className="abt-kpi-label">Automated tasks this week</p>
                <p className="abt-kpi-value">+64%</p>
              </div>

              <div className="abt-chart">
                {/*
                  Trend line + area fill. The viewBox is a plain 0..100 square
                  and the SVG is stretched to its box, so the series can be
                  authored straight as percentages. That stretch is also why the
                  end marker is a separate element below: a <circle> would be
                  squashed into an ellipse by it.
                */}
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="abt-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#514DE0" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#514DE0" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 62 L12 58 L24 66 L37 51 L48 55 L63 34 L74 38 L88 14 L97 7 L97 100 L0 100 Z"
                    fill="url(#abt-area)"
                  />
                  <polyline
                    className="abt-chart-line"
                    points="0,62 12,58 24,66 37,51 48,55 63,34 74,38 88,14 97,7"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
                <span className="abt-chart-pip" />
              </div>

              <div className="abt-stats">
                {STATS.map((s) => (
                  <div key={s.label} className="abt-stat">
                    <span>{s.label}</span>
                    <b>{s.value}</b>
                  </div>
                ))}
              </div>
            </div>

            <div className="abt-agents">
              <p className="abt-kpi-label">Active agents</p>
              {AGENTS.map((a) => (
                <div key={a.name} className="abt-agent">
                  <span
                    className={`abt-agent-dot${a.live ? " abt-agent-dot-on" : ""}`}
                  />
                  <span className="abt-agent-meta">
                    <b>{a.name}</b>
                    <i>{a.meta}</i>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
