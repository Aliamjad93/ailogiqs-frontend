/**
 * The studio's social profiles — ONE copy, used by the footer and the offcanvas
 * drawer.
 *
 * The drawer previously carried its own four icons (Facebook, Twitter, YouTube,
 * LinkedIn) all pointing at "#", and included two accounts that do not exist.
 * The footer's three real ones are the source of truth; add a profile here and
 * both surfaces follow.
 *
 * `icon` values are Font Awesome brand classes — the brands font is the one
 * webfont that is intact, so these render (unlike the solid/regular subsets).
 */
export const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100033227542369",
    icon: "fa-brands fa-facebook-f",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/108624298",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ai_logiqs/",
    icon: "fa-brands fa-instagram",
  },
];
