import { Link } from "react-router-dom";
import Logo from "../components/Logo";

export default function OffcanvasMenu() {
  return (
    <>
      <div className="fix-area">
              <div className="offcanvas__info">
                  <div className="offcanvas__wrapper">
                      <div className="offcanvas__content">
                          <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                              <div className="offcanvas__logo">
                                  <Link to="/">
                                      <Logo variant="light" />
                                  </Link>
                              </div>
                              <div className="offcanvas__close">
                                  <button>
                                      <i className="fas fa-times"></i>
                                  </button>
                              </div>
                          </div>
                          <p className="text d-none d-xl-block">
                              AiLogiQs builds intelligent AI-powered solutions that help businesses automate workflows, uncover insights, and scale smarter, faster.
                          </p>
                          <div className="mobile-menu fix mb-3"></div>
                          <div className="offcanvas__contact">
                              <h4>Contact Info</h4>
                              <ul>
                                  <li className="d-flex align-items-center">
                                      <div className="offcanvas__contact-icon">
                                          <i className="fal fa-map-marker-alt"></i>
                                      </div>
                                      <div className="offcanvas__contact-text">
                                          <a target="_blank" href="#">Bahria Orchard, Central Block, Orchard Heights, 4th Floor, Office No. 302</a>
                                      </div>
                                  </li>
                                  <li className="d-flex align-items-center">
                                      <div className="offcanvas__contact-icon mr-15">
                                          <i className="fal fa-envelope"></i>
                                      </div>
                                      <div className="offcanvas__contact-text">
                                          <a href="mailto:info@example.com"><span
                                                  className="mailto:info@example.com">bd@ailogiqs.com</span></a>
                                      </div>
                                  </li>
                                  <li className="d-flex align-items-center">
                                      <div className="offcanvas__contact-icon mr-15">
                                          <i className="fal fa-clock"></i>
                                      </div>
                                      <div className="offcanvas__contact-text">
                                          <a target="_blank" href="#">Monday - Friday, 09am - 05pm</a>
                                      </div>
                                  </li>
                                  <li className="d-flex align-items-center">
                                      <div className="offcanvas__contact-icon mr-15">
                                          <i className="far fa-phone"></i>
                                      </div>
                                      <div className="offcanvas__contact-text">
                                          <a href="tel:0301-6146851">0301-6146851</a>
                                      </div>
                                  </li>
                              </ul>
                              <div className="header-button mt-4">
                                  <Link to="/contact" className="theme-btn text-center">
                                      Get A Quote
                                  </Link>
                              </div>
                              <div className="social-icon d-flex align-items-center">
                                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                                  <a href="#"><i className="fab fa-twitter"></i></a>
                                  <a href="#"><i className="fab fa-youtube"></i></a>
                                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      <div className="offcanvas__overlay"></div>
    </>
  );
}
