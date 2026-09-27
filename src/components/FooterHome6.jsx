import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function FooterHome6() {
  return (
        <footer className="footer-section overflow-hidden bg-cover" style={{backgroundImage: 'url(assets/img/home-6/footer-bg.jpg)'}}>
                <div className="container">
                    <div className="footer-widgets-wrapper style-6">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>
                                             <a href="mailto:EXAMPLE@EVANTBIZ.COM">
                                                EXAMPLE@EVANTBIZ.COM
                                            </a>
                                        </h3>
                                    </div>
                                    <div className="footer-content">
                                        <h4>
                                            27 Division St, New York, NY 10002, USA
                                        </h4>
                                        <h4>
                                            <a href="tel:+1800123456789">+1 800 123 456 789</a>
                                        </h4>
                                          <ul className="social-profile">
                                            <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".6s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>
                                            ABOUT aI
                                        </h3>
                                    </div>
                                    <ul className="list-items">
                                        <li>
                                            <Link to="/">
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service">
                                                Services 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/project-details">
                                               Project
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/faq">
                                                Project
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/news-details">
                                               Blog
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".8s">
                                <div className="single-footer-widget">
                                    <div className="newsletter-content">
                                        <h3>
                                            Subcribe To Our Newsletter
                                        </h3>
                                        <p>
                                            Leo site ultrices donec a volutpat penatibus mind suscipit faucibus and duis pharetra name sociosqu phasellus nunce accumsan
                                        </p>
                                        <div className="footer-input-6">
                                            <input type="email" id="email" placeholder="Enter Email Address" />
                                            <button className="newsletter-btn" type="submit">
                                                <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-6">
                        <div className="footer-bottom-wrapper">
                            <div className="logo wow fadeInUp" data-wow-delay=".3s">
                                <Link to="/" className="header-logo">
                                    <Logo variant="light" />
                                </Link>
                            </div>
                            <p className="wow fadeInUp" data-wow-delay=".5s">
                                Copyright © 2025 by <span>AI-Forge.</span> All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
  );
}
