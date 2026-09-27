import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function FooterHome3() {
  return (
        <footer className="footer-section footer-bg">
                <div className="circle-shape float-bob-y">
                    <img src="/assets/img/footer/circle.png" alt="img" />
                </div>
                <div className="circle-shape-2">
                    <img src="/assets/img/footer/circle-2.png" alt="img" />
                </div>
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
                                            <Link to="/about">
                                                About us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">
                                                Opportunity
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">
                                                Events
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">
                                                Consulting
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/news">
                                                Our blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">
                                                Contact us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">
                                                Careers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/login">
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
                                            <Link to="/service">
                                                Graphic design
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service">
                                                Marketing
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service">
                                                Photography
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service">
                                                Art generate
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service">
                                                Face swap
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service">
                                                Interior design
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service">
                                                Face swap
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service">
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
                                                <Link to="/" className="icon">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-4 col-4">
                                            <div className="footer-thumb">
                                                <img src="/assets/img/footer/gallery-2.jpg" alt="img" />
                                                <Link to="/" className="icon">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-4 col-4">
                                            <div className="footer-thumb">
                                                <img src="/assets/img/footer/gallery-3.jpg" alt="img" />
                                                <Link to="/" className="icon">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-4 col-4">
                                            <div className="footer-thumb">
                                                <img src="/assets/img/footer/gallery-4.jpg" alt="img" />
                                                <Link to="/" className="icon">
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
                                <Link to="/">
                                    <Logo variant="light" />
                                </Link>
                            </div>
                            <p className="wow fadeInUp" data-wow-delay=".5s">AiLogiQs © 2024. All Rights Reserved.</p>
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
