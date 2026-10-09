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
  Only "default" and "home1" remain.

  The template shipped a variant per homepage layout; five of those homepages
  were removed (see src/content/navigation.js), taking their header styling and
  footers with them. "default" styles the inner pages, "home1" styles "/".
*/
const VARIANTS = {
  default: {
    className: "header-1",
    wrapLeft: false,
    actions: ["discord", "search"],
    hamburger: "d-xl-block",
  },
  home1: {
    className: "header-1",
    wrapLeft: true,
    actions: ["discord", "search"],
    hamburger: "d-xl-block",
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
          <Logo variant="light" />
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
                  <Link href={item.href}>
                    {item.label}
                    {item.children ? (
                      <i className="fa-solid fa-chevron-down" />
                    ) : null}
                  </Link>
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
