/*
 * Service-page figures, drawn as markup instead of shipped as artwork.
 *
 * The /service benefit band seated a dark bitmap (benefit-image.jpg) between its
 * copy and its three benefit rows: a black card carrying a yellow glowing core
 * and a constellation of yellow nodes. Every other surface on the site runs the
 * homepage palette -- white panels, indigo #514DE0 accents, #EEF2FF tints -- so
 * on the white band it read as a hole punched through the page, and its yellow
 * was the last of the template accent on the route.
 *
 * The composition of the original is kept -- one core, one ring of connected
 * nodes -- but it is rebuilt here in the brand palette, and the labels are real,
 * selectable text rather than pixels.
 *
 * Sizing: the figure is measured in `cqw` -- 1cqw is 1% of the figure's own
 * width -- so it scales as a single unit exactly like the image it replaced,
 * which occupied a 7:10 portrait box at every breakpoint. All styling lives in
 * public/css/overrides.css under the `bfv-` prefix; the theme's own classes are
 * never touched.
 */

/** Node centres as a % of the figure's box, plus their radius in cqw. */
const NODES = [
  { x: 50, y: 12.5, r: 4.6, tone: "solid" },
  { x: 16.5, y: 27, r: 3.7 },
  { x: 83.5, y: 24.5, r: 4.1, tone: "solid" },
  { x: 13.5, y: 63.5, r: 3.4 },
  { x: 86.5, y: 60, r: 3.8, tone: "solid" },
  { x: 50, y: 80, r: 4.3 },
];

/** Sparkle positions, as a % of the figure's box, plus their size in cqw.
 *
 * `tone` is carried in the data rather than picked off with :nth-child(),
 * because the chip and the ring are siblings ahead of these and any element
 * added above them would silently shift every nth-child rule by one. */
const SPARKLES = [
  { x: 29, y: 8, size: 3.2 },
  { x: 72, y: 16, size: 1.7, tone: "sky" },
  { x: 24, y: 47, size: 1.5, tone: "faint" },
  { x: 76, y: 72, size: 2.2, tone: "sky" },
  { x: 34, y: 89, size: 1.6, tone: "faint" },
];

/** The core sits just above centre; everything else is placed around it. */
const CORE = { x: 50, y: 46.5 };

/**
 * The "always-on assistant" core: an indigo disc wired to a ring of nodes,
 * reinterpreting the artwork it replaced in the site's own palette.
 */
export function BenefitVisual() {
  return (
    <div
      className="bfv-visual"
      role="img"
      aria-label="An AiLogiQs assistant at the centre of a connected network, running on every channel around the clock."
    >
      {/* Title chip, in the empty top-left corner -- the first node starts at
          ~10% of the height, so it needs no geometry change. */}
      <p className="bfv-chip">
        <span className="bfv-chip-dot" />
        AiLogiQs core
      </p>

      {SPARKLES.map((s, i) => (
        <span
          key={i}
          className={`bfv-spark${s.tone ? ` bfv-spark-${s.tone}` : ""}`}
          aria-hidden="true"
          style={{
            "--x": `${s.x}%`,
            "--y": `${s.y}%`,
            "--size": `${s.size}cqw`,
          }}
        />
      ))}

      {/* Rings around the core. Drawn as elements rather than an SVG circle:
          the figure is a 7:10 box, so a circle stretched to it would come out
          an ellipse. */}
      <span className="bfv-ring bfv-ring-outer" aria-hidden="true" />
      <span className="bfv-ring bfv-ring-inner" aria-hidden="true" />

      {/* The links from the core out to each node. Authored in viewBox units so
          the path is locked to the percentage box the nodes are positioned in;
          non-scaling-stroke keeps the hairline from thickening as the figure
          grows. */}
      <svg
        className="bfv-links"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {NODES.map((n, i) => (
          <path key={i} d={`M ${CORE.x} ${CORE.y} L ${n.x} ${n.y}`} />
        ))}
      </svg>

      {NODES.map((n, i) => (
        <span
          key={i}
          className={`bfv-node${n.tone ? ` bfv-node-${n.tone}` : ""}`}
          aria-hidden="true"
          style={{
            "--x": `${n.x}%`,
            "--y": `${n.y}%`,
            "--r": `${n.r}cqw`,
          }}
        />
      ))}

      <span
        className="bfv-core"
        aria-hidden="true"
        style={{ "--x": `${CORE.x}%`, "--y": `${CORE.y}%` }}
      >
        <span className="bfv-core-mark" />
      </span>

      {/* Status strip, the counterpart to the original artwork's caption. */}
      <p className="bfv-status">
        <span className="bfv-status-dot" />
        Live on every channel
      </p>
    </div>
  );
}
