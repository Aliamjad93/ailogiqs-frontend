/**
 * The line-icon set used across the public careers pages.
 *
 * Inline SVG rather than the theme's Font Awesome subset: the shipped light
 * and regular webfonts only contain a handful of glyphs, so a `fa-light` class
 * falls back to tofu for most icons. Drawing them here keeps the stroke
 * weight consistent, renders on the server and costs no extra request.
 */

const ICONS = {
  sparkles: (
    <>
      <path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7z" />
      <path d="m19 14.5.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />
      <path d="m5 15 .6 1.4L7 17l-1.4.6L5 19l-.6-1.4L3 17l1.4-.6z" />
    </>
  ),
  location: (
    <>
      <path d="M20 10c0 5.5-8 12-8 12S4 15.5 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
    </>
  ),
  graduationCap: (
    <>
      <path d="m2.5 10 9.5-5.5L21.5 10 12 15.5z" />
      <path d="M6 12.2V17c0 1.1 2.7 2 6 2s6-.9 6-2v-4.8" />
      <path d="M21.5 10v5.5" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </>
  ),
  building: (
    <>
      <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
      <path d="M3 21h18" />
      <path d="M9 7h.01M12 7h.01M15 7h.01M9 11h.01M12 11h.01M15 11h.01M9 15h.01M12 15h.01M15 15h.01" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  trendingUp: (
    <>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </>
  ),
  fileUp: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M12 18v-6" />
      <path d="m9.5 14.5 2.5-2.5 2.5 2.5" />
    </>
  ),
  userCheck: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.8-3.4 3.4-5.5 6.5-5.5 1.3 0 2.5.3 3.5.9" />
      <path d="m16 17 2 2 4-4" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  alertCircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V13" />
      <path d="M12 16.5h.01" />
    </>
  ),
  paperclip: (
    <path d="m21.4 11.05-9.1 9.15a5 5 0 0 1-7.07-7.07l9.2-9.2a3.5 3.5 0 0 1 4.95 4.95l-9.2 9.2a2 2 0 0 1-2.83-2.83l8.5-8.5" />
  ),
};

export default function CareersIcon({
  name,
  className = "",
  strokeWidth = 1.8,
}) {
  return (
    <svg
      className={`careers-icon ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {ICONS[name] ?? ICONS.sparkles}
    </svg>
  );
}
