import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function FooterHome5() {
  return (
        <footer className="footer-section overflow-hidden">
                <div className="container">
                    <div className="footer-widgets-wrapper style-5">
                        <div className="row">
                            <div className="col-xl-5 col-lg-4 col-md-5 wow fadeInUp" data-wow-delay=".2s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <Link to="/">
                                            <Logo variant="dark" />
                                        </Link>
                                    </div>
                                    <div className="footer-content">
                                        <h5>
                                            Subscribe Now
                                        </h5>
                                        <div className="footer-input-5">
                                            <input type="email" id="email" placeholder="enter email" />
                                            <button className="newsletter-btn" type="submit">
                                                <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-2 ps-lg-5 wow fadeInUp" data-wow-delay=".6s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>
                                            Quick Links
                                        </h3>
                                    </div>
                                    <ul className="list-items">
                                        <li>
                                            <Link to="/about">
                                                About us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">
                                                career
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/news-details">
                                               our blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">
                                                Privacy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/news">
                                               contact us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Say Hello</h3>
                                    </div>
                                    <ul className="contact-list">
                                        <li>
                                            536 Palmer Road Western <br />
                                            OH, 43081
                                        </li>
                                        <li>
                                            <a href="tel:+025262560365">+02 526 2560 365</a>
                                        </li>
                                        <li>
                                            <a href="mailto:support@ailandinfo.com">
                                                support@ailandinfo.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4 ps-lg-5 wow fadeInUp" data-wow-delay=".8s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Follow</h3>
                                    </div>
                                    <ul className="list-items">
                                        <li>
                                            <a href="#">
                                                Facebook
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Dribbble
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                               Linkedin
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Behance
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                               Instagram
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-5">
                        <div className="footer-bottom-wrapper">
                            <p>
                                Copyright © 2026 | Alright reserved by <span>Ai-forge</span>
                            </p>
                            <ul className="footer-menu justify-content-center flex-wrap d-flex align-items-center wow fadeInUp"
                                data-wow-delay=".5s">
                                <li>
                                    <Link to="/contact">Career</Link>
                                </li>
                                <li className="style-5">
                                    <Link to="/contact">privacy & policy</Link>
                                </li>
                                <li className="style-5">
                                    <Link to="/contact">contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
  );
}
