import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function FooterHome2() {
  return (
        <footer className="footer-section bg-cover" style={{backgroundImage: 'url(\'/assets/img/footer-bg.jpg\')'}}>
                <div className="container">
                    <div className="footer-widgets-wrapper style-2">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <Link to="/">
                                            <Logo variant="dark" />
                                        </Link>
                                    </div>
                                    <div className="footer-content">
                                        <p>
                                            Chatbot not only answered question offered suggestions even thought of It’s like
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
                                            <Link to="/about">
                                                Chat incubator
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
                                            <Link to="/contact">
                                                Partner program
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
                                            <Link to="/contact">
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
                                            <Link to="/service">
                                                Chat widget
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
                                                Visual builder
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service">
                                                Slack app
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service">
                                                Education
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service">
                                                Product demo
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service">
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
                                            Don't hesitate to contact us if you're interested in collaborating or just want to
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
                            <p className="wow fadeInUp" data-wow-delay=".3s">AiLogiQs © 2024. All Rights Reserved.</p>
                            <ul className="footer-menu wow fadeInUp" data-wow-delay=".5s">
                                <li>
                                    <Link to="/contact">Privacy policy -</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact -</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Terms & conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
  );
}
