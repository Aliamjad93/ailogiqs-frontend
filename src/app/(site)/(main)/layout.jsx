import SiteHeader from "@/components/site-header/SiteHeader";
import Footer from "@/components/site-footer/Footer";

/**
 * Default chrome for all inner pages (About, Blog, Pricing, …).
 *
 * Lives in a route group, so it adds no URL segment: (site)/(main)/about/page.jsx
 * serves /about.
 */
export default function MainLayout({ children }) {
  return (
    <>
      <SiteHeader variant="default" />
      {children}
      <Footer />
    </>
  );
}
