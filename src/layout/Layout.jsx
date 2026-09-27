import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Preloader from "./Preloader";
import MouseCursor from "./MouseCursor";
import BackToTop from "./BackToTop";
import OffcanvasMenu from "./OffcanvasMenu";
import SearchPopup from "./SearchPopup";

export default function Layout({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Re-run the template's jQuery plugins (sliders, mobile menu, wow
    // animations, nice-select, counters, etc.) whenever the route changes,
    // since React swaps the DOM out from under them on navigation.
    const id = setTimeout(() => {
      if (typeof window !== "undefined" && window.AiLogiQsInitTemplate) {
        try {
          window.AiLogiQsInitTemplate();
        } catch (e) {
          /* template JS is best-effort on client-side navigation */
          console.warn("AiLogiQsInitTemplate re-run failed:", e);
        }
      }
    }, 60);
    return () => clearTimeout(id);
  }, [location.pathname]);

  return (
    <>
      <Preloader />
      <MouseCursor />
      <BackToTop />
      <OffcanvasMenu />
      <SearchPopup />
      {children}
    </>
  );
}
