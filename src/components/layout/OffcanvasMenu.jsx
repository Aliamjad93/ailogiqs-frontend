import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { CONTACT } from "@/content/contact";
import { SOCIAL_LINKS } from "@/content/social";

export default function OffcanvasMenu() {
  return (
    <>
      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <Logo variant="light" />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button type="button">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">
                AiLogiQs builds intelligent AI-powered solutions that help
                businesses automate workflows, uncover insights, and scale
                smarter, faster.
              </p>
              {/* meanmenu() injects the mobile nav links in here. */}
              <div className="mobile-menu fix mb-3" />
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  {/* Same four details, same order, as the footer and the
                      /contact page — all read from src/content/contact.js.
                      The address used to be a dead `href="#"`; it opens Maps
                      now. */}
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="far fa-location-dot" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={CONTACT.mapsHref}
                      >
                        {CONTACT.address}
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href={CONTACT.emailHref}>{CONTACT.email}</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <span>{CONTACT.hours}</span>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link href="/contact" className="theme-btn text-center">
                    Get A Quote
                  </Link>
                </div>
                {/* Same three profiles as the footer, from
                    src/content/social.js. This row used to be four "#" links
                    including Twitter and YouTube accounts that do not exist. */}
                <div className="social-icon d-flex align-items-center">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                    >
                      <i className={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay" />
    </>
  );
}
