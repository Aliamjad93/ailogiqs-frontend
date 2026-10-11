/**
 * Site navigation, kept as data rather than markup so the header, the
 * offcanvas menu and any future sitemap/breadcrumb logic read from one place.
 *
 * Paths are canonical Next.js routes. Legacy flat URLs (/news,
 * /news-details) are handled by permanent redirects in next.config.mjs.
 */

/*
  Only one homepage variant is kept: the template shipped six, but four were
  generic filler and two were for unrelated businesses (a healthcare clinic and
  a smart-classroom product). The site uses the home-02 layout at "/" (see
  src/app/(site)/(home-2)/), and home-1 … home-6 were removed along with their
  route folders and footers.

  If another variant is ever wanted, add the folder back under
  src/app/(site)/(home-N)/ with its own layout.jsx and footer component, then add
  the entry here. The single current variant does not need a dropdown, so Home
  links straight to /.
*/

export const PRIMARY_NAV = [
  // No dropdown: one homepage variant remains, so Home points straight at it.
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Pages",
    href: "/service",
    children: [
      { label: "Services", href: "/service" },
      { label: "Service Details", href: "/service-details" },
      { label: "Team", href: "/team" },
      { label: "Portfolio", href: "/project" },
      { label: "Portfolio Details", href: "/project-details" },
      { label: "Pricing", href: "/pricing" },
      { label: "Our Faq", href: "/faq" },
      { label: "Login", href: "/login" },
      { label: "Register", href: "/register" },
      { label: "404 Page", href: "/404" },
    ],
  },
  // Blog article URLs are generated from the post title in the database, so
  // there is no fixed details page to link to. Linking a hardcoded slug here
  // would 404 the moment that post is deleted or unpublished.
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
