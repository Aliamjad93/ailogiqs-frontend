import TemplateRuntime from "@/components/layout/TemplateRuntime";

/**
 * Wraps every page that shows the public site chrome.
 *
 * Deliberately contains no <Header> or <Footer>: those differ per homepage
 * variant, so they live in each route group's own layout one level down
 * ((main), (home-1) … (home-6)).
 *
 * The future /admin area is intentionally NOT nested under this group, so the
 * admin UI never inherits the site's header, footer, preloader or custom
 * cursor.
 */
export default function SiteLayout({ children }) {
  return <TemplateRuntime>{children}</TemplateRuntime>;
}
