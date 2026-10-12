"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Preloader from "./Preloader";
import MouseCursor from "./MouseCursor";
import BackToTop from "./BackToTop";
import OffcanvasMenu from "./OffcanvasMenu";
import SearchPopup from "./SearchPopup";

/**
 * Resolves once window.AiLogiQsInitTemplate exists.
 *
 * The vendor stack is injected by next/script and can finish loading slightly
 * after React hydrates, so we poll rather than assume. Poll + timeout is used
 * instead of a load event because the stack is already in flight by the time
 * this component mounts -- the window "load" event may have fired already.
 */
function waitForTemplateInit(timeoutMs = 10000) {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }
    if (typeof window.AiLogiQsInitTemplate === "function") {
      resolve(true);
      return;
    }

    let intervalId;
    let timeoutId;
    const finish = (ready) => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      resolve(ready);
    };

    intervalId = setInterval(() => {
      if (typeof window.AiLogiQsInitTemplate === "function") finish(true);
    }, 50);
    timeoutId = setTimeout(() => finish(false), timeoutMs);
  });
}

/**
 * Wraps every public page with the chrome the original template put in every
 * page (preloader, custom cursor, back-to-top, offcanvas mobile menu, search
 * overlay) and keeps the jQuery layer in sync with client-side navigation.
 *
 * This replaces the old Vite src/layout/Layout.jsx. The template's plugins
 * (Swiper, WOW.js, counterUp, waypoints, meanmenu) cannot run during server
 * rendering, so they are applied on the client after each route commits.
 */
export default function TemplateRuntime({ children }) {
  const pathname = usePathname();

  // Start every page at the top, before the plugins measure element geometry.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  // Flag the pages that need per-page CONTENT rules on <body>.
  //
  // This used to be how the global chrome (back-to-top, the offcanvas drawer,
  // the header wordmark) was recoloured page by page, because that chrome is
  // rendered outside the route tree and CSS could not reach it any other way.
  // That is no longer how it works: the bar, its drawer and the back-to-top
  // disc are one indigo design on EVERY route now (see the "Nav" and "Home
  // palette" blocks in overrides.css), so the flags below exist only for the
  // four pages whose own content needs an accent of its own.
  //
  // A flag with no matching `body.route-*` rule in overrides.css is dead
  // weight -- grep before adding one, and delete it when its last rule goes.
  useEffect(() => {
    document.body.classList.toggle(
      "route-blog",
      pathname === "/blog" || pathname.startsWith("/blog/")
    );
    document.body.classList.toggle("route-contact", pathname === "/contact");
    document.body.classList.toggle("route-about", pathname === "/about");
    document.body.classList.toggle("route-service", pathname === "/service");
  }, [pathname]);

  // Initialise (and re-initialise) the theme's plugins for the current route.
  useEffect(() => {
    let cancelled = false;
    // One frame of breathing room so the new route's DOM is committed and
    // laid out before Swiper/waypoints read widths and offsets.
    const frame = requestAnimationFrame(async () => {
      const ready = await waitForTemplateInit();
      if (cancelled || !ready) return;
      try {
        window.AiLogiQsInitTemplate();
      } catch (error) {
        // Best-effort: a misbehaving slider must not take the page down.
        console.warn("AiLogiQsInitTemplate failed:", error);
      }
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  // Dismiss the preloader. On iOS Safari the window "load" event can fire
  // before React paints this component, so main.js never sees it -- hence the
  // timeout backstop, matching the previous Vite behaviour.
  useEffect(() => {
    const hide = () => {
      const el = document.querySelector("#preloader, .preloader");
      if (!el) return;
      el.classList.add("loaded"); // plays the template's exit animation
      setTimeout(() => {
        el.style.display = "none";
      }, 600);
    };

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide);
    }
    const fallback = setTimeout(hide, 3000);

    return () => {
      window.removeEventListener("load", hide);
      clearTimeout(fallback);
    };
  }, []);

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
