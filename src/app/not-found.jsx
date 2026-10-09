import SiteHeader from "@/components/site-header/SiteHeader";
import Footer from "@/components/site-footer/Footer";
import NotFoundContent from "@/components/shared/NotFoundContent";

export const metadata = {
  title: "404",
  robots: { index: false, follow: false },
};

/**
 * Unmatched-URL handler. Lives at the app root because Next.js routes every
 * unknown path here, outside the (site) route group -- so the site chrome has
 * to be mounted explicitly.
 */
export default function NotFound() {
  return (
    <NotFoundContent
      showHeaderAndFooter
      Header={SiteHeader}
      Footer={Footer}
    />
  );
}
