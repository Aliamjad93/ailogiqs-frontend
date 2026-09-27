import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function HeaderHome6() {
  return (
        <header id="header-sticky" className="header-1 header-style-5 header-6">
                <div className="container-fluid">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="header-left">
                                <div className="logo">
                                    <Link to="/" className="header-logo">
                                        <Logo variant="light" />
                                    </Link>
                                </div>
                            </div>
                            <div className="mean__menu-wrapper">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-dropdown">
                                                    <Link to="/">
                                                        Home
                                                        <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                    <ul className="submenu">
                                                        <li><Link to="/">Home 01</Link></li>
                                                        <li><Link to="/home-2">Home 02</Link></li>
                                                        <li><Link to="/home-3">Home 03</Link></li>
                                                        <li><Link to="/home-4">Home 04</Link></li>
                                                        <li><Link to="/home-5">Home 05</Link></li>
                                                         <li><Link to="/home-6">Home 06</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="/about">About Us</Link>
                                                </li>
                                                <li className="has-dropdown">
                                                    <Link to="/news">
                                                        Pages
                                                        <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                    <ul className="submenu">
                                                        <li><Link to="/service">Services</Link></li>
                                                        <li><Link to="/team">Team</Link></li>
                                                        <li><Link to="/project">Portfolio</Link></li>
                                                        <li><Link to="/project-details">Portfolio Details</Link></li>
                                                        <li><Link to="/pricing">Pricing</Link></li>
                                                        <li><Link to="/faq">Our Faq</Link></li>
                                                        <li><Link to="/login">Login</Link></li>
                                                        <li><Link to="/register">Register</Link></li>
                                                        <li><Link to="/404">404 Page</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="/news-details">
                                                        Blog
                                                        <i className="fa-solid fa-chevron-down"></i>
                                                    </Link>
                                                    <ul className="submenu">
                                                        <li><Link to="/news">Blog</Link></li>
                                                        <li><Link to="/news-details">Blog Details</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="/contact">Contact</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            <div className="header-right gap-sm-4 gap-2 d-flex justify-content-end align-items-center">
                                <Link to="/contact" className="theme-btn">Free Trial</Link>
                                <a href="#0" className="search-trigger search-icon"><i
                                        className="fa-regular fa-magnifying-glass"></i></a>
                                <div className="header__hamburger d-xl-block my-auto">
                                    <div className="sidebar__toggle">
                                        <i className="fas fa-bars"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
  );
}
