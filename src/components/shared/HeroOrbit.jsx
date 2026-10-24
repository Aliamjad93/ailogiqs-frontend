export default function HeroOrbit() {
  return (
    <svg
      className="hero-orbit"
      viewBox="0 0 240 240"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="hero-orbit-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EFFB53" />
          <stop offset="52%" stopColor="#8BF5D0" />
          <stop offset="100%" stopColor="#45DCF2" />
        </linearGradient>
        <radialGradient id="hero-orbit-core">
          <stop offset="0%" stopColor="#EFFB53" />
          <stop offset="70%" stopColor="#45DCF2" />
          <stop offset="100%" stopColor="#45DCF2" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g
        className="hero-orbit-rings"
        fill="none"
        stroke="url(#hero-orbit-stroke)"
        strokeWidth="0.45"
      >
        <ellipse cx="120" cy="120" rx="104" ry="47" />
        <ellipse cx="120" cy="120" rx="104" ry="47" transform="rotate(60 120 120)" />
        <ellipse cx="120" cy="120" rx="104" ry="47" transform="rotate(120 120 120)" />
      </g>
      <circle cx="120" cy="120" r="4.5" fill="url(#hero-orbit-core)" />
    </svg>
  );
}
