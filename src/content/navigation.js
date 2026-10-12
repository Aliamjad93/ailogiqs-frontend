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

/*
  The bar is deliberately short and entirely flat -- five links, no dropdowns.
  A visitor gets: who you are, what you sell, what you've written, how to reach
  you. Nothing else earns a seat.

  "Services" used to open a two-item dropdown (All Services / Service Details).
  That is gone: /service-details is reached from the "more details" CTA on each
  card of the /service listing, which is where a visitor actually wants it.
  SiteHeader still supports parents with children, so reinstating one is a data
  change here and nothing else.

  Parked for later (removed from the nav for now, the routes still exist):

  - /pricing, /team, /faq, /project, /project-details, /service-details

  NOT in the nav, deliberately:

  - /login, /register  auth screens. They are reached from the drawer's CTA and
                       from the forms themselves; advertising them in the main
                       nav reads as an unfinished template.
  - /404               a 404 page is the destination for a broken link. Linking
                       it on purpose is exactly the template filler being
                       removed here.
*/

export const PRIMARY_NAV = [
  // No dropdown: one homepage variant remains, so Home points straight at it.
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/service" },
  // Blog article URLs are generated from the post title in the database, so
  // there is no fixed details page to link to. Linking a hardcoded slug here
  // would 404 the moment that post is deleted or unpublished.
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
