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

  // Flag the AI-service pages on <body>.
  //
  // The site carries two designs. The main one is the template's black/yellow
  // theme (public/css/overrides.css). The other is the indigo AI sales-agent
  // design, which lives under /ai-services/* and /portfolio/chatbot, and is
  // styled entirely by public/css/ai-service.css.
  //
  // That stylesheet is linked from the (ai-service) route group's layout, but
  // the header, the offcanvas drawer, the preloader and the back-to-top disc
  // are rendered by this component -- OUTSIDE the route tree -- so CSS cannot
  // reach them from inside the group. `route-ai-service` is how it does: every
  // rule in ai-service.css that is not already scoped to an `.aiq-*` class is
  // written as `body.route-ai-service ...`.
  //
  // The flag is keyed off the PATHNAME, so it has to list every URL that renders
  // the indigo design -- including /portfolio/chatbot, which does not sit under
  // the /ai-services prefix. It MUST stay in step with the (ai-service) route
  // group: anything rendering that design but missing here renders unstyled.
  //
  // A flag with no matching rule in ai-service.css is dead weight -- grep
  // before adding one, and delete it when its last rule goes. The previous
  // route-blog / route-contact / route-about / route-service flags were
  // removed with the indigo inner pages they belonged to.
  useEffect(() => {
    document.body.classList.toggle(
      "route-ai-service",
      pathname === "/ai-services" ||
        pathname.startsWith("/ai-services/") ||
        pathname === "/portfolio/chatbot" ||
        pathname.startsWith("/portfolio/chatbot/")
    );
  }, [pathname]);

  // Flag the BeeLens showcase page on <body>.
  //
  // The third design in the repo. It is styled entirely by
  // public/css/bee-service.css, which is linked from the (bee-service) route
  // group's layout -- but the header, the offcanvas drawer, the preloader and
  // the back-to-top disc are rendered by this component, OUTSIDE the route
  // tree, so CSS cannot reach them from inside the group. `route-bee` is how it
  // does: every rule in bee-service.css that is not already scoped to a `.bee-*`
  // class is written as `body.route-bee ...`.
  //
  // Keyed off the PATHNAME, like route-ai-service, because the group name is
  // invisible in the URL: the page serves /portfolio/bee-virus-detection, which
  // shares no prefix with the folder it lives in. Anything rendering this design
  // but missing here renders completely unstyled -- the stylesheet is written
  // against a dark surface and the site's own theme is light.
  useEffect(() => {
    document.body.classList.toggle(
      "route-bee",
      pathname === "/portfolio/bee-virus-detection" ||
        pathname.startsWith("/portfolio/bee-virus-detection/")
    );
  }, [pathname]);

  // Flag pages whose own CONTENT needs a rule of its own, on <body>.
  //
  // These are content hooks, not chrome. The header, its drawer and the
  // back-to-top disc are one design on every route and are not recoloured page
  // by page any more, so a flag here means "this page's markup needs something
  // the shared classes cannot express".
  //
  // `route-project` sizes the single portfolio card on /project. It has to be a
  // page flag rather than a plain class rule because /project-details renders
  // the same `.portfolio-section .portfolio-card-items` markup, three cards to a
  // row: a size meant for one card would have shrunk that row too.
  //
  // A flag with no matching `body.route-*` rule in overrides.css is dead
  // weight -- grep before adding one, and delete it when its last rule goes.
  useEffect(() => {
    document.body.classList.toggle("route-project", pathname === "/project");
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
