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
  a smart-classroom product). home-2 … home-6 were removed along with their
  route folders and footers.

  If another variant is ever wanted, add the folder back under
  src/app/(site)/(home-N)/ with its own layout.jsx and footer component, then add
  the entry here.
*/

/*
  FLAT MENU -- no dropdowns. Every label here is a real page a visitor can land
  on. SiteHeader still supports `children` (it renders a submenu when present),
  so a dropdown can be reintroduced by adding that key, but there is none today
  by request.

  Order is the order a buyer moves through: who we are, what we do, proof of
  it, who works here, what we think, how to reach us. "Projects" is the
  company's shipped work; the separate "Portfolio" is the founder-level case
  studies (/portfolio), so both sit together as proof.

  Pricing and FAQ are not in the bar. Both are linked from the footer
  (Footer.jsx ~line 366/371), which is where secondary pages belong. The two
  showcases (/projects/chatbot, /projects/bee-virus-detection) are reached
  from the /projects cards and the footer, deliberately not from the bar.
*/
export const PRIMARY_NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Projects", href: "/projects" },
  // Distinct from "Projects": /portfolio carries the detailed case-study
  // showcase (ChadBot, ShopAgent CRM) as one long page.
  { label: "Portfolio", href: "/portfolio" },
  // Careers is top-level: it is a live hiring surface with its own admin
  // section (postings + applications), not a marketing page.
  { label: "Careers", href: "/careers" },
  // Blog article URLs are generated from the post title in the database, so
  // there is no fixed details page to link to. Linking a hardcoded slug here
  // would 404 the moment that post is deleted or unpublished.
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/*
  Dropped from the menu, deliberately:

  - "Pages"          -- a template placeholder, not a label a business uses.
  - "Project Details" (/project-details) -- demo copy ("Bold & vibrant
                        design") describing no real project.
  - "Login" / "Register" -- the pages are decorative: /login renders
                        `<form action="#">` and submits nowhere. Advertising a
                        sign-in that cannot sign anyone in is worse than not
                        having one. Routes kept, menu entry removed.
  - "404 Page"       -- a nav link to an error screen is a template artifact.
  - "Team"           -- now reached from the footer, which already links it.

  Any of these can come back with a real page behind it.
*/
