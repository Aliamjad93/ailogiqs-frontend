import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  useEffect(() => {
    document.title = "About Us | AiLogiQs";
  }, []);

  return (
    <>
      <Header />
      <section className="about-section style-padding section-padding fix">
              <div className="bg-shape">
                  <img src="/assets/img/about/bg-shape.png" alt="shape-img" />
              </div>
              <div className="color-bg">
                  <img src="/assets/img/about/color-bg-shape.png" alt="img" />
              </div>
              <div className="color-bg-2">
                  <img src="/assets/img/about/color-bg-shape-2.png" alt="img" />
              </div>
              <div className="container">
                  <div className="section-title ml-200">
                      <h6 className="wow fadeInUp">
                          <img src="/assets/img/star.png" alt="img" /> Who we are
                      </h6>
                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Explore the AI power <br />
                          <span>& our <b>innovative</b> solutions</span>
                      </h2>
                  </div>
                  <div className="row">
                      <div className="col-lg-5">
                          <div className="about-image-33 img-custom-anim-left">
                              <img src="/assets/img/about/06.jpg" alt="img" />
                          </div>
                      </div>
                      <div className="col-lg-7">
                          <div className="about-image-33 img-custom-anim-right">
                              <img src="/assets/img/about/07.jpg" alt="img" />
                          </div>
                      </div>
                  </div>
                  <div className="about-wrapper mt-4">
                      <ul className="nav">
                          <li className="nav-item wow fadeInUp" data-wow-delay=".3s">
                              <a href="#Mission" data-bs-toggle="tab" className="nav-link">
                                  Our Mission
                              </a>
                          </li>
                          <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                              <a href="#Vision" data-bs-toggle="tab" className="nav-link active">
                                  Our Vision
                              </a>
                          </li>
                          <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                              <a href="#Feature" data-bs-toggle="tab" className="nav-link">
                                  Key Feature
                              </a>
                          </li>
                      </ul>
                      <div className="tab-content">
                          <div id="Mission" className="tab-pane fade">
                              <div className="about-items">
                                  <div className="about-content">
                                      <p>
                                          Our mission is to make AI practical for every business. We build agents and automations that take repetitive work off your team, so they can focus on what really matters.
                                      </p>
                                      <ul className="list-items">
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#EFFB53" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#EFFB53" />
                                              </svg>

                                              <span>Real-World Transformations</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#EFFB53" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#EFFB53" />
                                              </svg>

                                              <span>Innovative AI Solutions</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#EFFB53" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#EFFB53" />
                                              </svg>

                                              <span>Bot Brains, Business Boosters</span>
                                          </li>
                                      </ul>
                                      <Link to="/about" className="theme-btn">explore now <i
                                              className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                  </div>
                                  <div className="about-image">
                                      <img src="/assets/img/about/01.png" alt="img" />
                                  </div>
                              </div>
                          </div>
                          <div id="Vision" className="tab-pane fade show active">
                              <div className="about-items">
                                  <div className="about-content">
                                      <p className="wow fadeInUp" data-wow-delay=".3s">
                                          We want every business, big or small, to have access to AI that actually works for them. It should save time, cut costs and open new ways to grow.
                                      </p>
                                      <ul className="list-items wow fadeInUp" data-wow-delay=".5s">
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#EFFB53" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#EFFB53" />
                                              </svg>

                                              <span>Real-World Transformations</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#EFFB53" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#EFFB53" />
                                              </svg>

                                              <span>Innovative AI Solutions</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#EFFB53" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#EFFB53" />
                                              </svg>

                                              <span>Bot Brains, Business Boosters</span>
                                          </li>
                                      </ul>
                                      <Link to="/about" className="theme-btn wow fadeInUp" data-wow-delay=".3s">explore now <i
                                              className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                  </div>
                                  <div className="about-image wow fadeInUp" data-wow-delay=".3s">
                                      <img src="/assets/img/about/01.png" alt="img" />
                                  </div>
                              </div>
                          </div>
                          <div id="Feature" className="tab-pane fade">
                              <div className="about-items">
                                  <div className="about-content">
                                      <p>
                                          Every solution we build is custom-made for your business, connects to the tools you already use, and keeps working around the clock with no extra effort from your team.
                                      </p>
                                      <ul className="list-items">
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#EFFB53" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#EFFB53" />
                                              </svg>

                                              <span>Real-World Transformations</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#EFFB53" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#EFFB53" />
                                              </svg>

                                              <span>Innovative AI Solutions</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#EFFB53" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#EFFB53" />
                                              </svg>

                                              <span>Bot Brains, Business Boosters</span>
                                          </li>
                                      </ul>
                                      <Link to="/about" className="theme-btn">explore now <i
                                              className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                  </div>
                                  <div className="about-image">
                                      <img src="/assets/img/about/01.png" alt="img" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="brand-section section-padding pb-0">
                  <div className="container">
                      <div className="swiper brand-slider">
                          <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                  <div className="brand-image text-center">
                                      <img src="/assets/img/brand/01.png" alt="img" />
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="brand-image text-center">
                                      <img src="/assets/img/brand/02.png" alt="img" />
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="brand-image text-center">
                                      <img src="/assets/img/brand/03.png" alt="img" />
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="brand-image text-center">
                                      <img src="/assets/img/brand/04.png" alt="img" />
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="brand-image text-center">
                                      <img src="/assets/img/brand/05.png" alt="img" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="how-to-work-section fix section-padding section-bg">
              <div className="container">
                  <div className="section-title text-center">
                      <h6 className="wow fadeInUp">
                          <img src="/assets/img/star.png" alt="img" /> how we work
                      </h6>
                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Understanding our <br />
                          <span>AI <b>chatbot’s</b> workflow</span>
                      </h2>
                  </div>
                  <div className="how-to-work-wrapper">
                      <div className="how-too-work-items text-center wow fadeInUp" data-wow-delay=".2s">
                          <div className="icon">
                              <img src="/assets/img/icon/23.svg" alt="img" />
                              <div className="bar-shape">
                                  <img src="/assets/img/work-bar-shape.png" alt="img" />
                              </div>
                          </div>
                          <div className="content">
                              <h3>Choose Plan</h3>
                              <p>Pick the plan that fits your business size and goals</p>
                          </div>
                      </div>
                      <div className="arrow-shape">
                          <img src="/assets/img/work-arrow.png" alt="img" />
                      </div>
                      <div className="how-too-work-items text-center wow fadeInUp" data-wow-delay=".4s">
                          <div className="icon">
                              <img src="/assets/img/icon/24.svg" alt="img" />
                              <div className="bar-shape">
                                  <img src="/assets/img/work-bar-shape.png" alt="img" />
                              </div>
                          </div>
                          <div className="content">
                              <h3>Setup Chatbot</h3>
                              <p>We set up your chatbot and connect it to your website and tools</p>
                          </div>
                      </div>
                      <div className="arrow-shape">
                          <img src="/assets/img/work-arrow.png" alt="img" />
                      </div>
                      <div className="how-too-work-items text-center wow fadeInUp" data-wow-delay=".6s">
                          <div className="icon">
                              <img src="/assets/img/icon/25.svg" alt="img" />
                              <div className="bar-shape">
                                  <img src="/assets/img/work-bar-shape.png" alt="img" />
                              </div>
                          </div>
                          <div className="content">
                              <h3>Train Your Bot</h3>
                              <p>We train it on your products, FAQs and data so it answers like your team</p>
                          </div>
                      </div>
                      <div className="arrow-shape">
                          <img src="/assets/img/work-arrow.png" alt="img" />
                      </div>
                      <div className="how-too-work-items text-center wow fadeInUp" data-wow-delay=".8s">
                          <div className="icon">
                              <img src="/assets/img/icon/26.svg" alt="img" />
                              <div className="bar-shape">
                                  <img src="/assets/img/work-bar-shape.png" alt="img" />
                              </div>
                          </div>
                          <div className="content">
                              <h3>Client Support</h3>
                              <p>Your bot handles customers 24/7, and we keep improving it over time</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="about-section fix section-padding">
              <div className="container">
                  <div className="about-wrapper-4">
                      <div className="row g-4">
                          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                              <div className="about-image-items">
                                  <div className="row g-3">
                                      <div className="col-lg-5">
                                          <div className="about-image">
                                              <img src="/assets/img/about/08.jpg" alt="img" />
                                          </div>
                                          <div className="about-image style-2">
                                              <img src="/assets/img/about/09.jpg" alt="img" />
                                          </div>
                                      </div>
                                      <div className="col-lg-7">
                                          <div className="about-image">
                                              <img src="/assets/img/about/10.jpg" alt="img" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="about-content">
                                  <div className="section-title">
                                      <h6 className="wow fadeInUp">
                                          <img src="/assets/img/star.png" alt="img" /> our practice
                                      </h6>
                                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                          Harnessing AI for
                                          <span><b>business</b> success</span>
                                      </h2>
                                  </div>
                                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                      Duise sagittis accumsan magna onest adipiscing laoreet ultrices magna consectetuer
                                      eiaculis rutrium morbie habitasse orci libero porttitor scelerisque acid vivamu
                                  </p>
                                  <div className="skill-feature-items">
                                      <div className="skill-feature wow fadeInUp" data-wow-delay=".2s">
                                          <h3 className="box-title">Creativity</h3>
                                          <div className="progress">
                                              <div className="progress-bar"
                                                  style={{width: '85%', animation: '2.6s ease 0s 1 normal none running animate-positive', opacity: '1'}}>
                                                  <div className="progress-value"><span className="counter-number2">85</span>%</div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="skill-feature wow fadeInUp" data-wow-delay=".4s">
                                          <h3 className="box-title">Technology</h3>
                                          <div className="progress">
                                              <div className="progress-bar"
                                                  style={{width: '90%', animation: '2.6s ease 0s 1 normal none running animate-positive', opacity: '1'}}>
                                                  <div className="progress-value"><span className="counter-number2">90</span>%</div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="skill-feature wow fadeInUp" data-wow-delay=".2s">
                                          <h3 className="box-title">Marketing</h3>
                                          <div className="progress">
                                              <div className="progress-bar"
                                                  style={{width: '75%', animation: '2.6s ease 0s 1 normal none running animate-positive', opacity: '1'}}>
                                                  <div className="progress-value"><span className="counter-number2">75</span>%</div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <div className="counter-section section-padding pt-0">
              <div className="container">
                  <div className="counter-wrapper">
                      <div className="counter-items wow fadeInUp" data-wow-delay=".3s">
                          <div className="icon">
                              <img src="/assets/img/icon/01.svg" alt="img" />
                          </div>
                          <div className="content">
                              <h2><span className="count">236</span></h2>
                              <p>Finished Projects</p>
                          </div>
                      </div>
                      <div className="counter-items wow fadeInUp" data-wow-delay=".5s">
                          <div className="icon">
                              <img src="/assets/img/icon/01.svg" alt="img" />
                          </div>
                          <div className="content">
                              <h2><span className="count">236</span></h2>
                              <p>Finished Projects</p>
                          </div>
                      </div>
                      <div className="counter-items wow fadeInUp" data-wow-delay=".7s">
                          <div className="icon">
                              <img src="/assets/img/icon/01.svg" alt="img" />
                          </div>
                          <div className="content">
                              <h2><span className="count">236</span></h2>
                              <p>Finished Projects</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

    
          <section className="team-section fix section-padding section-bg">
              <div className="container">
                  <div className="section-title text-center">
                      <h6 className="wow fadeInUp">
                          <img src="/assets/img/star.png" alt="img" /> dedicated member
                      </h6>
                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Team powering cutting- <br /> <span>edge AI visual solutions</span>
                      </h2>
                  </div>
                  <div className="row">
                      <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                          <div className="team-box-items">
                              <div className="team-image">
                                  <img src="/assets/img/team/01.jpg" alt="img" />
                                  <div className="social-profile">
                                      <ul>
                                          <li> <a href="#"><i className="fa-brands fa-discord"></i></a></li>
                                          <li> <a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                          <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                      </ul>
                                      <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                  </div>
                              </div>
                              <div className="team-content">
                                  <h3>Rosa Compton</h3>
                                  <p>Creative Designer</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                          <div className="team-box-items">
                              <div className="team-image">
                                  <img src="/assets/img/team/02.jpg" alt="img" />
                                  <div className="social-profile">
                                      <ul>
                                          <li> <a href="#"><i className="fa-brands fa-discord"></i></a></li>
                                          <li> <a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                          <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                      </ul>
                                      <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                  </div>
                              </div>
                              <div className="team-content">
                                  <h3>Clifford Barron</h3>
                                  <p>Chief Executive</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                          <div className="team-box-items">
                              <div className="team-image">
                                  <img src="/assets/img/team/03.jpg" alt="img" />
                                  <div className="social-profile">
                                      <ul>
                                          <li> <a href="#"><i className="fa-brands fa-discord"></i></a></li>
                                          <li> <a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                          <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                      </ul>
                                      <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                  </div>
                              </div>
                              <div className="team-content">
                                  <h3>Shikhon Islam</h3>
                                  <p>Project Manager</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                          <div className="team-box-items">
                              <div className="team-image">
                                  <img src="/assets/img/team/04.jpg" alt="img" />
                                  <div className="social-profile">
                                      <ul>
                                          <li> <a href="#"><i className="fa-brands fa-discord"></i></a></li>
                                          <li> <a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                          <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                      </ul>
                                      <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                  </div>
                              </div>
                              <div className="team-content">
                                  <h3>Ritu Islam</h3>
                                  <p>Chief Engineer</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <div className="marquee-section fix section-padding pt-0 margin-bottom-8 margin-top-5">
              <div className="mycustom-marque">
                  <div className="scrolling-wrap gap-100">
                      <div className="comm">
                          <div className="cmn-textslide textitalick text-custom-storke">design</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                          <div className="cmn-textslide textitalick text-custom-storke">image</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                          <div className="cmn-textslide textitalick text-custom-storke">video</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                      </div>
                      <div className="comm">
                          <div className="cmn-textslide textitalick text-custom-storke">design</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                          <div className="cmn-textslide textitalick text-custom-storke">image</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                          <div className="cmn-textslide textitalick text-custom-storke">video</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                      </div>
                      <div className="comm">
                          <div className="cmn-textslide textitalick text-custom-storke">design</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                          <div className="cmn-textslide textitalick text-custom-storke">image</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                          <div className="cmn-textslide textitalick text-custom-storke">video</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                      </div>
                  </div>
              </div>
          </div>

    
          <section className="testimonial-section fix section-padding pt-0">
              <div className="array-button">
                  <button className="array-prev"><i className="fa-regular fa-arrow-left"></i></button>
                  <button className="array-next"><i className="fa-regular fa-arrow-right"></i></button>
              </div>
              <div className="container">
                  <div className="section-title text-center">
                      <h6 className="wow fadeInUp">
                          <img src="/assets/img/star.png" alt="img" /> our testimonials
                      </h6>
                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Clients <span><b>feedback</b></span>
                      </h2>
                  </div>
                  <div className="testimonial-wrapper-2">
                      <div className="client-image-items">
                          <div className="client-img">
                              <img src="/assets/img/testimonial/client-7.png" alt="img" />
                          </div>
                          <div className="client-img text-center">
                              <img src="/assets/img/testimonial/client-8.png" alt="img" />
                              <div className="star">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                              </div>
                          </div>
                          <div className="client-img">
                              <img src="/assets/img/testimonial/client-9.png" alt="img" />
                          </div>
                      </div>
                      <div className="swiper testimonial-slider-2">
                          <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                  <div className="testimonial-content">
                                      <p>
                                          Their AI chatbot now handles most of our customer questions. Response times went from hours to seconds, and our team finally has time for bigger work.
                                      </p>
                                      <div className="client-info">
                                          <h3>Maryad C. Garcia</h3>
                                          <span>Ceo of nural</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="testimonial-content">
                                      <p>
                                          They understood our business before writing a single line of code. The automation they built saves us hours every week.
                                      </p>
                                      <div className="client-info">
                                          <h3>Maryad C. Garcia</h3>
                                          <span>Ceo of nural</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="testimonial-content">
                                      <p>
                                          Professional, fast and easy to work with. The results were visible within the first month.
                                      </p>
                                      <div className="client-info">
                                          <h3>Maryad C. Garcia</h3>
                                          <span>Ceo of nural</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      <Footer />
    </>
  );
}
