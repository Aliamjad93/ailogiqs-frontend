import { Fragment } from "react";
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { PRIMARY_NAV } from "@/content/navigation";

/**
 * Header variants, collapsed from the six near-identical Header*.jsx files the
 * template shipped. Each variant is fully described by four properties:
 *
 *  - className   root element classes (drives the theme's header styling)
 *  - wrapLeft    whether the logo + nav sit inside a `.header-left` wrapper
 *  - actions     which call-to-action blocks appear on the right
 *  - hamburger   Bootstrap responsive display class for the burger
 */
/*
  "default" styles the inner pages; "home2" is the homepage variant now in
  use at "/" and applies the theme's header-2 styling: full-width container and
  the nav behind the burger at EVERY size (see `hamburger` below) — the inline
  desktop menu is hidden in overrides.css, so the drawer is the only nav.

  logoAccent tints the "Logi" half of the wordmark: the theme yellow on the
  inner pages, and plain white on the homepage so the wordmark reads as one
  solid white lockup against the indigo header (no tinted shade).
*/
const VARIANTS = {
  default: {
    className: "header-1",
    wrapLeft: false,
    // Search only: the "Join now" CTA (a /login link) was removed from the
    // inner-page bar, matching the homepage header, which carries no CTAs.
    actions: ["search"],
    hamburger: "d-xl-block",
    // White, not the theme yellow. Both variants now share one bar design, and
    // the bar is indigo on every route (.header-1 in overrides.css), so a solid
    // white lockup is the only readable choice. The yellow accent used to be
    // patched back to white per route in CSS; that is no longer needed.
    logoAccent: "#FFFFFF",
  },
  home2: {
    className: "header-2",
    // Logo and nav are direct children of .header-main so the bar can be laid
    // out as logo | nav (centred) | burger.
    wrapLeft: false,
    // No login / sign-up CTAs: the homepage header is just logo + burger.
    actions: [],
    // Always visible, so the mobile-style burger nav is used on laptops too.
    hamburger: "d-block",
    logoAccent: "#FFFFFF",
  },
};

function HeaderActions({ actions }) {
  const render = (action) => {
    switch (action) {
      case "discord":
        return (
          <Link href="/login" className="join-text">
            <img src="/assets/img/discord.svg" alt="" /> Join now
          </Link>
        );
      case "search":
        return (
          <a href="#0" className="search-trigger search-icon" aria-label="Search">
            <i className="fa-regular fa-magnifying-glass" />
          </a>
        );
      case "login":
        return (
          <Link href="/login" className="join-text">
            Login
          </Link>
        );
      case "signup":
        return (
          <Link href="/register" className="theme-btn">
            sign up
          </Link>
        );
      case "appointment":
        return (
          <Link
            href="/about"
            className="theme-btn d-md-block d-none py-3 px-4 theme-btn-3"
          >
            APPOINTMENT NOW
            <i className="fa-sharp fa-regular fa-arrow-up-right" />
          </Link>
        );
      case "trial":
        return (
          <Link href="/contact" className="theme-btn">
            Free Trial
          </Link>
        );
      default:
        return null;
    }
  };

  // Wrapped in a keyed Fragment because actions is a list: returning bare
  // elements from .map() gives React no key to reconcile with, which warns in
  // development and can mis-reconcile when the variant changes between pages.
  return actions.map((action) => <Fragment key={action}>{render(action)}</Fragment>);
}

export default function SiteHeader({ variant = "default" }) {
  const config = VARIANTS[variant] ?? VARIANTS.default;

  const identityAndNav = (
    <>
      <div className="logo">
        <Link href="/" className="header-logo">
          <Logo variant="light" accent={config.logoAccent} />
        </Link>
      </div>
      <div className="mean__menu-wrapper">
        <div className="main-menu">
          {/* meanmenu() reads #mobile-menu and clones it into the offcanvas
              drawer on viewports under 1200px. */}
          <nav id="mobile-menu">
            <ul>
              {PRIMARY_NAV.map((item) => (
                <li
                  key={item.label}
                  className={item.children ? "has-dropdown" : undefined}
                >
                  {/*
                    A parent with children and an href is a link that also opens
                    a dropdown ("Services"). A parent WITHOUT an href -- a
                    catch-all label with no destination of its own -- falls
                    through to an anchor with no href attribute: the theme's
                    `.main-menu ul li a` styling still applies, but nothing
                    navigates. tabIndex + the :focus-within rule in
                    overrides.css are what keep it reachable from the keyboard,
                    since an anchor with no href is not focusable by default.

                    No such item exists in PRIMARY_NAV today; the branch is kept
                    because adding one should not require a component change.
                  */}
                  {item.href ? (
                    <Link href={item.href}>
                      {item.label}
                      {item.children ? (
                        <i className="fa-solid fa-chevron-down" />
                      ) : null}
                    </Link>
                  ) : (
                    <a tabIndex={0} role="button" aria-haspopup="true">
                      {item.label}
                      <i className="fa-solid fa-chevron-down" />
                    </a>
                  )}
                  {item.children ? (
                    <ul className="submenu">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link href={child.href}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );

  return (
    <header id="header-sticky" className={config.className}>
      <div className="container-fluid">
        <div className="mega-menu-wrapper">
          <div className="header-main">
            {config.wrapLeft ? (
              <div className="header-left">{identityAndNav}</div>
            ) : (
              identityAndNav
            )}

            <div
              className={
                config.actions.includes("appointment") || config.actions.includes("trial")
                  ? "header-right gap-sm-4 gap-2 d-flex justify-content-end align-items-center"
                  : "header-right d-flex justify-content-end align-items-center"
              }
            >
              <HeaderActions actions={config.actions} />
              <div className={`header__hamburger ${config.hamburger} my-auto`}>
                <div className="sidebar__toggle">
                  <i className="fas fa-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
