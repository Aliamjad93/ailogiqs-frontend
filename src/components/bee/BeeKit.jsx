/**
 * BeeKit — the shared building blocks for the BeeLens service page.
 *
 * Everything here is presentational and server-renderable: no state, no hooks,
 * no "use client". The page composes these; the CSS that styles them lives in
 * public/css/bee-service.css under the `.bee-*` prefix.
 *
 * The artwork is drawn as SVG rather than shipped as images on purpose. The
 * reference design's hive frames are flat vector scenes, so keeping them vector
 * means they stay crisp at any size, cost no extra request, and can be
 * re-pointed at a different scene by changing data instead of re-exporting a
 * PNG. HiveScan is the piece that makes that work: one component, driven by a
 * scene description, draws both the hero frame and the brood-frame variant.
 */

/* ==========================================================================
   Icons
   --------------------------------------------------------------------------
   The reference ships a consistent 24x24 line set at stroke-width 2. They are
   inlined rather than pulled from FontAwesome so the stroke weight and joins
   match the design exactly. `fill` glyphs (play) are marked below.
   ========================================================================== */

const ICONS = {
  check: <path d="M20 6 9 17l-5-5" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  heart: (
    <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" />
  ),
  flask: (
    <path d="M10 2v6L4.5 18A2 2 0 0 0 6.3 21h11.4a2 2 0 0 0 1.8-3L14 8V2M8 2h8M7 15h10" />
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5M16 4.5a3.5 3.5 0 0 1 0 7M18 14.6c2 .7 3.2 2.6 3.5 5.4" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 15 4-4 3 3 5-6" />
    </>
  ),
  camera: (
    <>
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <path d="m16 10 6-3v10l-6-3z" />
    </>
  ),
  upload: (
    <>
      <path d="M4 14.9A7 7 0 1 1 15.7 8h1.8a4.5 4.5 0 0 1 2.5 8.2" />
      <path d="M12 12v9M8 16l4-4 4 4" />
    </>
  ),
  cpu: (
    <>
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </>
  ),
  report: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 14l2 2 4-4" />
    </>
  ),
  alert: (
    <>
      <path d="M12 8v5M12 17h.01" />
      <path d="M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6A2 2 0 0 0 22 18L13.7 3.9a2 2 0 0 0-3.4 0Z" />
    </>
  ),
  play: <path d="M7 4l13 8-13 8z" />,
  /* Video controls (BeeVideo): the pause pair is filled to match `play`. */
  pause: <path d="M8 4h3v16H8zM13 4h3v16h-3z" />,
  volume: (
    <>
      <path d="M11 5 6.5 9H3v6h3.5L11 19z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7M18.2 5.8a9 9 0 0 1 0 12.4" />
    </>
  ),
  volumeOff: (
    <>
      <path d="M11 5 6.5 9H3v6h3.5L11 19z" />
      <path d="m16 9.5 5 5M21 9.5l-5 5" />
    </>
  ),
};

/** Glyphs that are filled shapes rather than strokes. */
const FILLED = new Set(["play", "pause"]);

export function Icon({ name, size = 24, strokeWidth = 2, className = "" }) {
  const filled = FILLED.has(name);
  return (
    <svg
      className={className}
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={filled ? undefined : strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {ICONS[name] ?? ICONS.check}
    </svg>
  );
}

/* ==========================================================================
   Threat illustrations
   --------------------------------------------------------------------------
   The five "what BeeLens detects" cards each carry a small drawn specimen.
   They are the reference's own artwork, kept at its original geometry and
   colours so the cards read the same as the PDF.
   ========================================================================== */

const THREAT_ART = {
  varroa: {
    viewBox: "0 0 90 70",
    body: (
      <>
        <g stroke="#C9653A" strokeWidth="3" strokeLinecap="round">
          <path d="M22 28 L8 18 M22 36 L6 36 M22 44 L8 54 M68 28 L82 18 M68 36 L84 36 M68 44 L82 54" />
        </g>
        <ellipse cx="45" cy="36" rx="26" ry="20" fill="#8A3416" stroke="#4A1406" strokeWidth="2" />
        <ellipse cx="38" cy="30" rx="8" ry="4" fill="#B5582E" />
      </>
    ),
  },
  wing: {
    viewBox: "0 0 90 70",
    body: (
      <>
        <path
          d="M12 56 C14 30 30 12 52 10 C62 9 66 18 58 24 C66 26 64 36 54 36 C60 42 52 50 42 46 C40 54 30 58 12 56 Z"
          fill="#FFFFFF"
          stroke="#6B5E48"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M20 50 C28 38 38 30 50 22 M30 48 L38 40 M40 44 L46 34"
          stroke="#6B5E48"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </>
    ),
  },
  sacbrood: {
    viewBox: "0 0 90 80",
    body: (
      <>
        <polygon
          points="20,4 70,4 88,40 70,76 20,76 2,40"
          fill="#F7EFDD"
          stroke="#8A5E17"
          strokeWidth="3"
        />
        <path
          d="M45 18 C58 18 60 30 58 44 C56 58 50 64 45 64 C40 64 34 58 32 44 C30 30 32 18 45 18 Z"
          fill="#E8DCC0"
          stroke="#A89D88"
          strokeWidth="2"
        />
        <ellipse cx="45" cy="20" rx="8" ry="6" fill="#4A3A22" />
      </>
    ),
  },
  paralysis: {
    viewBox: "0 0 70 90",
    body: (
      <>
        <circle cx="35" cy="14" r="9" fill="#1A140C" />
        <ellipse cx="35" cy="32" rx="12" ry="11" fill="#1A140C" />
        <ellipse cx="35" cy="62" rx="16" ry="25" fill="#231C14" />
        <path
          d="M26 52 C30 50 34 50 38 52 M24 64 C30 62 36 62 42 64"
          stroke="#5C5143"
          strokeWidth="2"
          fill="none"
        />
        <ellipse cx="30" cy="56" rx="4" ry="9" fill="#FFFFFF" opacity="0.25" />
      </>
    ),
  },
  queencell: {
    viewBox: "0 0 60 96",
    body: (
      <>
        <rect x="4" y="2" width="52" height="10" rx="3" fill="#B98A3A" />
        <path
          d="M14 12 C8 30 8 60 18 80 C24 92 36 92 42 80 C52 60 52 30 46 12 Z"
          fill="#2E1E10"
          stroke="#120A04"
          strokeWidth="2"
        />
        <path d="M20 30 C18 46 20 62 24 72" stroke="#4A3420" strokeWidth="2" fill="none" />
      </>
    ),
  },
};

export function ThreatArt({ name, className = "" }) {
  const art = THREAT_ART[name] ?? THREAT_ART.varroa;
  return (
    <svg
      className={className}
      aria-hidden="true"
      width="90"
      height="70"
      viewBox={art.viewBox}
      fill="none"
    >
      {art.body}
    </svg>
  );
}

/* ==========================================================================
   HiveScan — the flat honeycomb video frame
   --------------------------------------------------------------------------
   One component draws every "frame from an uploaded clip" in the design: the
   comb pattern, the bees, the detection boxes and the labels. The scene is
   data, so adding a third frame later means adding an object, not a component.

   `id` must be unique on the page -- it namespaces the <pattern>, and two
   frames sharing an id would have the second silently reuse the first's comb.
   ========================================================================== */

/** Comb presets: pattern tile size plus the cells that fill it. */
export const COMB = {
  /* Fine, single-tone comb — the hero and the poster. */
  fine: {
    w: 36,
    h: 62,
    cells: [
      { points: "9,0 27,0 36,15.5 27,31 9,31 0,15.5", fill: "#8A5E17" },
      { points: "27,31 45,31 54,46.5 45,62 27,62 18,46.5", fill: "#8A5E17" },
      { points: "-9,31 9,31 18,46.5 9,62 -9,62 -18,46.5", fill: "#8A5E17" },
    ],
    stroke: "#5A3D0C",
    strokeWidth: 2,
    shade: 0.2,
  },
  /* Larger, two-tone comb — the brood-frame section. */
  brood: {
    w: 48,
    h: 83,
    cells: [
      { points: "12,0 36,0 48,20.75 36,41.5 12,41.5 0,20.75", fill: "#9A6A1C" },
      { points: "36,41.5 60,41.5 72,62.25 60,83 36,83 24,62.25", fill: "#B98A3A" },
      { points: "-12,41.5 12,41.5 24,62.25 12,83 -12,83 -24,62.25", fill: "#B98A3A" },
    ],
    stroke: "#5A3D0C",
    strokeWidth: 3,
    shade: 0.15,
  },
};

/**
 * A single bee, drawn around the origin so the caller positions it with a
 * transform. `mite` adds the parasite on the thorax; `dashedWing` reproduces
 * the hero's dashed right wing (the brood frames use two solid wings).
 */
function Bee({ mite = false, dashedWing = false, scale = 1 }) {
  return (
    <g transform={`scale(${scale})`}>
      <path
        d="M-6,-22 C-40,-70 -78,-40 -50,-12 C-40,-2 -20,-8 -6,-14"
        fill="#E9E2D3"
        opacity="0.55"
        stroke="#F4EEE2"
        strokeWidth="1.5"
      />
      <path
        d={
          dashedWing
            ? "M6,-22 C30,-58 62,-48 46,-20 C38,-10 20,-10 6,-14"
            : "M6,-22 C40,-60 70,-38 46,-12 C36,-2 20,-8 6,-14"
        }
        fill="#E9E2D3"
        opacity={dashedWing ? 0.4 : 0.5}
        stroke="#F4EEE2"
        strokeWidth="1.5"
        strokeDasharray={dashedWing ? "3 3" : undefined}
      />
      <ellipse cx="0" cy="28" rx="24" ry="40" fill="#E9A41E" />
      <path
        d="M-23,16 H23 M-24,32 H24 M-21,48 H21"
        stroke="#1A140C"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <ellipse cx="0" cy="-16" rx="18" ry="16" fill="#3A2A12" />
      {mite ? (
        <ellipse cx="6" cy="-14" rx="6" ry="4.5" fill="#7A2A10" stroke="#3A0F04" strokeWidth="1" />
      ) : null}
      <circle cx="0" cy="-42" r="14" fill="#1A140C" />
      <path
        d="M-6,-54 C-14,-70 -22,-74 -28,-74 M6,-54 C14,-70 22,-74 28,-74"
        stroke="#1A140C"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  );
}

/** A detection rectangle plus its mono label chip. */
function Marker({ x, y, w, h, tone = "amber" }) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx="5"
      fill="none"
      stroke={tone === "amber" ? "#F2A81D" : "#FF6B3D"}
      strokeWidth="3"
    />
  );
}

/** Label chip colours: a finding (amber), an alert (red), a clean result (green). */
const LABEL_TONES = {
  amber: { bg: "#F2A81D", fg: "#16130E" },
  alert: { bg: "#FF6B3D", fg: "#16130E" },
  green: { bg: "#4A8C5C", fg: "#FFFFFF" },
};

function Label({ text, x, y, w, h = 26, fontSize = 13, tone = "alert" }) {
  const t = LABEL_TONES[tone] ?? LABEL_TONES.alert;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="4" fill={t.bg} />
      <text
        x={x + 10}
        y={y + Math.round(h * 0.72)}
        fontFamily="IBM Plex Mono, monospace"
        fontSize={fontSize}
        fontWeight="600"
        fill={t.fg}
      >
        {text}
      </text>
    </g>
  );
}

export function HiveScan({
  id,
  viewBox,
  comb = COMB.fine,
  bees = [],
  markers = [],
  labels = [],
  className = "",
  ariaLabel,
  style,
  children,
}) {
  const combId = `${id}-comb`;
  return (
    <svg
      className={className}
      style={style}
      role="img"
      aria-label={ariaLabel}
      width="100%"
      height="100%"
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id={combId} width={comb.w} height={comb.h} patternUnits="userSpaceOnUse">
          {comb.cells.map((c) => (
            <polygon
              key={c.points}
              points={c.points}
              fill={c.fill}
              stroke={comb.stroke}
              strokeWidth={comb.strokeWidth}
            />
          ))}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${combId})`} />
      <rect width="100%" height="100%" fill="#000" opacity={comb.shade} />

      {bees.map((b, i) => (
        <g key={i} transform={`translate(${b.x} ${b.y}) rotate(${b.rotate ?? 0})`}>
          <Bee mite={b.mite} dashedWing={b.dashedWing} scale={b.scale ?? 1} />
        </g>
      ))}

      {markers.map((m, i) => (
        <Marker key={i} {...m} />
      ))}
      {labels.map((l, i) => (
        <Label key={i} {...l} />
      ))}
      {/* Scene-specific extras (the open brood cell, and anything added later). */}
      {children}
    </svg>
  );
}

/* ==========================================================================
   ScanMeter — the clip read-out under every hive frame
   ========================================================================== */

export function ScanMeter({ file, status, progress = 0.55, className = "" }) {
  return (
    <div className={`bee-meter ${className}`}>
      <div className="bee-meter-track">
        <span className="bee-meter-fill" style={{ width: `${progress * 100}%` }} />
      </div>
      <div className="bee-meter-row">
        <span className="bee-meter-file">
          <span className="bee-meter-play">
            <Icon name="play" size={11} />
          </span>
          {file}
        </span>
        <span className="bee-meter-status">{status}</span>
      </div>
    </div>
  );
}

/* ==========================================================================
   DiagnosisCard — the report that comes back
   --------------------------------------------------------------------------
   The one card in this design built as markup rather than supplied artwork.
   Everything in it is real text, so it is selectable, translatable and
   indexable, and the wording can change without a new export.

   Structure follows the reference exactly: a cream panel, the amber "Virus
   detected" badge, the finding at full weight, a two-up facts row split by a
   hairline, and a dark step card pinned to the bottom. `--bee-*` tokens supply
   the palette; the card flips between the cream and ink surfaces by inheriting
   them, so it reads correctly on any band.
   ========================================================================== */

export function DiagnosisCard({ data }) {
  return (
    <article className="bee-report">
      <div className="bee-report-top">
        <p className="bee-report-eyebrow">{data.eyebrow}</p>
        <p className="bee-report-meta">{data.meta}</p>
      </div>

      <p className="bee-report-tag">
        <Icon name="alert" size={13} strokeWidth={2.5} />
        {data.tag}
      </p>

      <h3 className="bee-report-title">{data.title}</h3>
      <p className="bee-report-sub">{data.subtitle}</p>

      <div className="bee-report-facts">
        <div>
          <p className="bee-report-fact-label">{data.signs.label}</p>
          <p className="bee-report-fact-text">{data.signs.text}</p>
        </div>
        <div>
          <p className="bee-report-fact-label">{data.risk.label}</p>
          <p className="bee-report-fact-text">{data.risk.text}</p>
        </div>
      </div>

      <div className="bee-report-step">
        <p className="bee-report-step-label">
          <Icon name="check" size={16} strokeWidth={2.5} />
          {data.step.label}
        </p>
        <p className="bee-report-step-text">{data.step.text}</p>
      </div>
    </article>
  );
}

/* ==========================================================================
   SectionHead — eyebrow + heading, shared by every band
   ========================================================================== */

export function SectionHead({ eyebrow, title, accent, intro, align = "start", as: As = "h2" }) {
  return (
    /*
      `wow fadeInUp` so every band's heading reveals on scroll, matching the main
      site. WOW.js is re-initialised per route by TemplateRuntime, so this is the
      only thing needed -- no client component, no state.
    */
    <div className={`bee-head bee-head-${align} wow fadeInUp`}>
      {eyebrow ? <p className="bee-eyebrow">{eyebrow}</p> : null}
      <As className="bee-title">
        {title}
        {accent ? <span> {accent}</span> : null}
      </As>
      {intro ? <p className="bee-intro">{intro}</p> : null}
    </div>
  );
}
