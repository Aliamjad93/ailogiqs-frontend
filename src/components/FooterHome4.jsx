import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function FooterHome4() {
  return (
        <footer className="footer-section overflow-hidden bg-cover"
                style={{backgroundImage: 'url(\'/assets/img/footer/footer-bg4.png\')'}}>
                <div className="container">
                    <div
                        className="batter-information d-flex flex-md-nowrap flex-wrap align-content-center justify-content-between">
                        <div className="d-flex align-items-center gap-xxl-4 gap-3">
                            <img src="/assets/img/icon/supoot.svg" alt="img" />
                            <h3><a href="#0" className="text-white">Need any support for Hospital and vist?</a></h3>
                        </div>
                        <div className="line d-md-block d-none"></div>
                        <div className="d-flex align-items-center gap-xxl-4 gap-3">
                            <img src="/assets/img/icon/booktime.svg" alt="img" />
                            <h3><a href="#0" className="text-white">Book your appointment for better health</a></h3>
                        </div>
                    </div>
                    <div className="footer-widgets-wrapper style-2">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <Link to="/">
                                            <Logo variant="light" />
                                        </Link>
                                    </div>
                                    <div className="footer-content">
                                        <p className="text-white fs-16">
                                            Corporate business typically refers to large-scale mansola it enterprises or
                                            organizat
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
                            <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-3 wow fadeInUp" data-wow-delay=".6s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3 className="text-white d-block">Quick Links
                                            <img src="/assets/img/quick-line.png" alt="img" />
                                        </h3>
                                    </div>
                                    <ul className="list-items">
                                        <li>
                                            <a href="#" className="text-white fs-16 opacity-75">
                                                General Medicine
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-white fs-16 opacity-75">
                                                Gynecology & Women’s Health
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-white fs-16 opacity-75">
                                                Mental Health Services
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-white fs-16 opacity-75">
                                                Laboratory Services
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3 className="text-white d-block">Company</h3>
                                        <img src="/assets/img/quick-line.png" alt="img" />
                                    </div>
                                    <ul className="list-items">
                                        <li>
                                            <Link to="/" className="text-white opacity-75">
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/about" className="text-white opacity-75">
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact" className="text-white opacity-75">
                                                Pages
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/news" className="text-white opacity-75">
                                                Blog
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".8s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3 className="text-white d-block">Join The Newsletter</h3>
                                        <img src="/assets/img/quick-line.png" alt="img" />
                                    </div>
                                    <div className="footer-content">
                                        <p className="fs-16 text-white opacity-75">
                                            Want to be notified about our services. Just sign up and we'll send you a
                                            notification by email.
                                        </p>
                                        <div className="footer-input-2 footer-input4">
                                            <input type="email" id="email" placeholder="Enter email..." />
                                            <button className="newsletter-btn" type="submit">
                                                <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom style-4">
                        <div className="footer-bottom-wrapper">
                            <p className="wow fadeInUp" data-wow-delay=".3s">&copy; <a href="#0"
                                    className="text-primary text-decoration-none">Grameentheme</a> 2025. All Rights Reserved</p>
                            <div className="online-payment d-block">
                                <img src="/assets/img/online-payment.png" alt="img" />
                            </div>
                            <ul className="footer-menu justify-content-center flex-wrap d-flex align-items-center wow fadeInUp"
                                data-wow-delay=".5s">
                                <li>
                                    <Link to="/contact">Terms of use</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Terms of use Privacy Environmental Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
  );
}
