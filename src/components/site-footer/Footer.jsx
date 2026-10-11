import Link from "next/link";
import Logo from "@/components/shared/Logo";

/**
 * `variant="home2"` renders the footer that ships with the homepage 02 layout
 * (dark logo widget, Company/Integration link lists, newsletter input, styled
 * bottom bar); anything else renders the default site footer.
 */
export default function Footer({ variant = "default" }) {
  if (variant === "home2") {
    return (
      <footer
        className="footer-section bg-cover"
        style={{ backgroundImage: "url('/assets/img/footer-bg.jpg')" }}
      >
        <div className="container">
          <div className="footer-widgets-wrapper style-2">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <Link href="/">
                      {/* Indigo accent: the homepage footer is white-and-blue,
                          so the wordmark keeps the theme yellow out of it. */}
                      <Logo variant="dark" accent="#514DE0" />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p>
                      Chatbot not only answered question offered suggestions even thought of It&rsquo;s like
                      chatting with
                    </p>
                    <div className="social-icon">
                      <a href="#"><i className="fa-brands fa-discord"></i></a>
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Company</h3>
                  </div>
                  <ul className="list-items">
                    <li>
                      <Link href="/about">
                        Chat incubator
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        Opportunity
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        Consulting
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        Partner program
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        Contact us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        System status
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-3 wow fadeInUp" data-wow-delay=".6s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Integration</h3>
                  </div>
                  <ul className="list-items">
                    <li>
                      <Link href="/service">
                        Chat widget
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        Marketing
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        Photography
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        Visual builder
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        Slack app
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        Education
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        Product demo
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        Help desk
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".8s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Newsletter</h3>
                  </div>
                  <div className="footer-content">
                    <p>
                      Don&rsquo;t hesitate to contact us if you&rsquo;re interested in collaborating or just want to
                      chat
                    </p>
                    <div className="footer-input-2">
                      <input type="email" id="email" placeholder="Enter email..." />
                      <button className="newsletter-btn" type="submit">
                        <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                      </button>
                    </div>
                    <p>We send interesting and relevant emails.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom style-2">
            <div className="footer-bottom-wrapper">
              <p className="wow fadeInUp" data-wow-delay=".3s">AiLogiQs &copy; 2026. All Rights Reserved.</p>
              <ul className="footer-menu wow fadeInUp" data-wow-delay=".5s">
                <li>
                  <Link href="/contact">Privacy policy -</Link>
                </li>
                <li>
                  <Link href="/contact">Contact -</Link>
                </li>
                <li>
                  <Link href="/contact">Terms &amp; conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
<footer className="footer-section footer-bg">
            <div className="container">
                <div className="footer-widgets-wrapper">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="footer-content">
                                    <h3 className="mb-3">
                                        Subscribe our
                                        newsletter
                                    </h3>
                                    <p>Join us today, get update everyday</p>
                                    <div className="footer-input">
                                        <input type="email" id="email" placeholder="Enter email..." />
                                        <button className="newsletter-btn" type="submit">
                                            <img src="/assets/img/circle-check.png" alt="img" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Company</h3>
                                </div>
                                <ul className="list-items">
                                    <li>
                                        <Link href="/about">
                                            About us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            Opportunity
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            Events
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            Consulting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/news">
                                            Our blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            Contact us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            Careers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/login">
                                            User login
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".6s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Company</h3>
                                </div>
                                <ul className="list-items">
                                    <li>
                                        <Link href="/service">
                                            Graphic design
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service">
                                            Marketing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service">
                                            Photography
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service">
                                            Art generate
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service">
                                            Face swap
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service">
                                            Interior design
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service">
                                            Face swap
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service">
                                            Mockup create
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-3 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Instagram</h3>
                                </div>
                                <div className="row g-3">
                                    <div className="col-md-6 col-sm-4 col-4">
                                        <div className="footer-thumb">
                                            <img src="/assets/img/footer/gallery-1.jpg" alt="img" />
                                            <Link href="/" className="icon">
                                                <i className="fa-brands fa-instagram"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-4 col-4">
                                        <div className="footer-thumb">
                                            <img src="/assets/img/footer/gallery-2.jpg" alt="img" />
                                            <Link href="/" className="icon">
                                                <i className="fa-brands fa-instagram"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-4 col-4">
                                        <div className="footer-thumb">
                                            <img src="/assets/img/footer/gallery-3.jpg" alt="img" />
                                            <Link href="/" className="icon">
                                                <i className="fa-brands fa-instagram"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-4 col-4">
                                        <div className="footer-thumb">
                                            <img src="/assets/img/footer/gallery-4.jpg" alt="img" />
                                            <Link href="/" className="icon">
                                                <i className="fa-brands fa-instagram"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-wrapper">
                        <div className="logo-img wow fadeInUp" data-wow-delay=".3s">
                            <Link href="/">
                                <Logo variant="dark" />
                            </Link>
                        </div>
                        <p className="wow fadeInUp" data-wow-delay=".5s">AiLogiQs © 2026. All Rights Reserved.</p>
                        <div className="social-icon wow fadeInUp" data-wow-delay=".7s">
                            <a href="#"><i className="fa-brands fa-discord"></i></a>
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  );
}
