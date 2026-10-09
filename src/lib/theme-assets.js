/**
 * Load order for the AiLogiQs theme's vendor assets.
 *
 * The original HTML template loaded these as plain <link>/<script> tags in
 * index.html. Bootstrap must precede the theme stylesheet, and jQuery must
 * precede every jQuery plugin, so these arrays are ordered deliberately and
 * must not be alphabetised or otherwise reordered.
 */

/** Stylesheets, in cascade order (framework -> icons -> theme -> overrides). */
export const THEME_STYLESHEETS = [
  { href: "/assets/css/bootstrap.min.css", precedence: "bootstrap" },
  { href: "/assets/css/all.min.css", precedence: "fontawesome" },
  { href: "/assets/css/animate.css", precedence: "animate" },
  { href: "/assets/css/magnific-popup.css", precedence: "magnific-popup" },
  { href: "/assets/css/meanmenu.css", precedence: "meanmenu" },
  { href: "/assets/css/swiper-bundle.min.css", precedence: "swiper" },
  { href: "/assets/css/nice-select.css", precedence: "nice-select" },
  { href: "/assets/css/color.css", precedence: "color" },
  { href: "/assets/css/main.css", precedence: "theme" },
  // MUST stay last: responsive fixes for the theme, see the file's header.
  { href: "/css/overrides.css", precedence: "overrides" },
];

/**
 * Vendor scripts, in execution order.
 *
 * jQuery is first and is a hard dependency of every plugin below it.
 * swiper-bundle must precede main.js, because main.js instantiates Swiper
 * inside window.AiLogiQsInitTemplate().
 */
export const THEME_SCRIPTS = [
  "/assets/js/jquery-3.7.1.min.js",
  "/assets/js/viewport.jquery.js",
  "/assets/js/bootstrap.bundle.min.js",
  "/assets/js/jquery.nice-select.min.js",
  "/assets/js/jquery.waypoints.js",
  "/assets/js/jquery.counterup.min.js",
  "/assets/js/swiper-bundle.min.js",
  "/assets/js/jquery.meanmenu.min.js",
  "/assets/js/jquery.magnific-popup.min.js",
  "/assets/js/wow.min.js",
  "/assets/js/main.js",
];
