import Link from "next/link";
import Logo from "@/components/shared/Logo";

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
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="far fa-location-dot" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" rel="noreferrer" href="#">
                        Bahria Orchard, Central Block, Orchard Heights, 4th
                        Floor, Office No. 302
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:bd@ailogiqs.com">bd@ailogiqs.com</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <span>Monday - Friday, 9:00am - 5:00pm</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:03016146851">0301-6146851</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link href="/contact" className="theme-btn text-center">
                    Get A Quote
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="#" aria-label="Facebook">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#" aria-label="YouTube">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in" />
                  </a>
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
