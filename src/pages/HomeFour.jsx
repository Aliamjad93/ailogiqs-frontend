import { useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderHome4 from "../components/HeaderHome4";
import FooterHome4 from "../components/FooterHome4";

export default function HomeFour() {
  useEffect(() => {
    document.title = "Home 04 | AiLogiQs";
  }, []);

  return (
    <>
      <HeaderHome4 />
      <div className="banner-slide-wrapper swiper">
              <div className="swiper-wrapper">
                  <div className="swiper-slide">
                      <section className="hero-secton hero-4 overflow-hidden bg-cover"
                          style={{backgroundImage: 'url(\'/assets/img/hero/hero-bg4.png\')'}}>
                          <div className="container">
                              <div className="row">
                                  <div className="col-lg-12">
                                      <div className="hero-content4">
                                          <p className="d-flex mb-2 align-items-center gap-2 text-primary wow fadeInUp"><img src="/assets/img/section-badge4.png" alt="img" /> Expert Care, Always Here for You</p>
                                          <h1 className="wow img-custom-anim-left pb-xl-4 pb-2" data-wow-duration="1.5s" data-wow-delay="0.1s">
                                              Expert Healthcare for Every Stage of Life
                                          </h1>
                                          <p className="hero-pra text-white opacity-75 mb-xl-4 pb-xxl-3 mb-3">
                                              From pediatrics to geriatrics, our team of dedicated medical professionals provides personalized, comprehensive care
                                              tailored to every age and need. Whether you're managing a chronic condition.
                                          </p>
                                          <div className="d-flex flex-wrap align-items-center gap-xl-4 gap-3 mb-md-5 mb-5 pb-md-3">
                                              <Link to="/about" className="theme-btn d-flex py-3 px-4 theme-btn-3">DISCOVER MORE
                                                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                              <Link to="/" className="theme-btn bt-white-outline py-3 px-4 wow fadeInUp" data-wow-delay=".7s"
                                                  style={{visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeInUp'}}>VIEW SERVICES <i
                                                      className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                          </div>
                                          <div className="drive-adjustment d-flex align-items-center justify-content-between gap-4">
                                              <img src="/assets/img/hero/drive-right.png" alt="img" className="d-md-block d-none" />
                                              <div className="social-icon-custom justify-content-center">
                                                  <a href="#"><i className="fa-brands fa-discord"></i></a>
                                                  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                  <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                                  <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                              </div>
                                              <img src="/assets/img/hero/drive-left.png" alt="img" className="d-md-block d-none" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                  </div>
                  <div className="swiper-slide">
                      <section className="hero-secton hero-4 overflow-hidden bg-cover"
                          style={{backgroundImage: 'url(\'/assets/img/hero/hero-bg4.png\')'}}>
                          <div className="container">
                              <div className="row">
                                  <div className="col-lg-12">
                                      <div className="hero-content4">
                                          <p className="d-flex mb-2 align-items-center gap-2 text-primary wow fadeInUp"><img
                                                  src="/assets/img/section-badge4.png" alt="img" /> Expert Care, Always Here for You</p>
                                          <h1 className="wow img-custom-anim-left pb-xl-4 pb-2" data-wow-duration="1.5s"
                                              data-wow-delay="0.1s">
                                              Expert Healthcare for Every Stage of Screen
                                          </h1>
                                          <p className="hero-pra text-white opacity-75 mb-xl-4 pb-xxl-3 mb-3">
                                              From pediatrics to geriatrics, our team of dedicated medical professionals provides
                                              personalized, comprehensive care
                                              tailored to every age and need. Whether you're managing a chronic condition.
                                          </p>
                                          <div className="d-flex flex-wrap align-items-center gap-xl-4 gap-3 mb-md-5 mb-5 pb-md-3">
                                              <Link to="/about" className="theme-btn d-flex py-3 px-4 theme-btn-3">DISCOVER MORE
                                                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                              <Link to="/" className="theme-btn bt-white-outline py-3 px-4 wow fadeInUp"
                                                  data-wow-delay=".7s"
                                                  style={{visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeInUp'}}>VIEW
                                                  SERVICES <i className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                          </div>
                                          <div className="drive-adjustment d-flex align-items-center justify-content-between gap-4">
                                              <img src="/assets/img/hero/drive-right.png" alt="img" className="d-md-block d-none" />
                                              <div className="social-icon-custom justify-content-center">
                                                  <a href="#"><i className="fa-brands fa-discord"></i></a>
                                                  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                  <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                                  <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                              </div>
                                              <img src="/assets/img/hero/drive-left.png" alt="img" className="d-md-block d-none" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                  </div>
                  <div className="swiper-slide">
                      <section className="hero-secton hero-4 overflow-hidden bg-cover"
                          style={{backgroundImage: 'url(\'/assets/img/hero/hero-bg4.png\')'}}>
                          <div className="container">
                              <div className="row">
                                  <div className="col-lg-12">
                                      <div className="hero-content4">
                                          <p className="d-flex mb-2 align-items-center gap-2 text-primary wow fadeInUp"><img
                                                  src="/assets/img/section-badge4.png" alt="img" /> Expert Care, Always Here for You</p>
                                          <h1 className="wow img-custom-anim-left pb-xl-4 pb-2" data-wow-duration="1.5s"
                                              data-wow-delay="0.1s">
                                              Expert Healthcare for Every Stage of Health
                                          </h1>
                                          <p className="hero-pra text-white opacity-75 mb-xl-4 pb-xxl-3 mb-3">
                                              From pediatrics to geriatrics, our team of dedicated medical professionals provides
                                              personalized, comprehensive care
                                              tailored to every age and need. Whether you're managing a chronic condition.
                                          </p>
                                          <div className="d-flex flex-wrap align-items-center gap-xl-4 gap-3 mb-md-5 mb-5 pb-md-3">
                                              <Link to="/about" className="theme-btn d-flex py-3 px-4 theme-btn-3">DISCOVER MORE
                                                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                              <Link to="/" className="theme-btn bt-white-outline py-3 px-4 wow fadeInUp"
                                                  data-wow-delay=".7s"
                                                  style={{visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeInUp'}}>VIEW
                                                  SERVICES <i className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                          </div>
                                          <div className="drive-adjustment d-flex align-items-center justify-content-between gap-4">
                                              <img src="/assets/img/hero/drive-right.png" alt="img" className="d-md-block d-none" />
                                              <div className="social-icon-custom justify-content-center">
                                                  <a href="#"><i className="fa-brands fa-discord"></i></a>
                                                  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                  <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                                  <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                              </div>
                                              <img src="/assets/img/hero/drive-left.png" alt="img" className="d-md-block d-none" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                  </div>
              </div>
          </div>

    
          <section className="feature-section4 section-padding fix bg-cover" style={{backgroundImage: 'url(\'/assets/img/feature-bg4.png\')'}}>
              <div className="container">
                  <div className="section-title style-4 text-center">
                      <h6 className="mt-3 text-primary d-flex justify-content-center align-items-center gap-2 wow fadeInUp" data-wow-delay=".3s">
                          <img src="/assets/img/section-badge4.png" alt="img" />
                          Care Features
                      </h6>
                      <h2 className="wow fadeInUp text-black" data-wow-delay=".5s"
                          style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                          Why Choose Us
                      </h2>
                  </div>
                  <div className="row g-0">
                      <div className="col-lg-3 col-sm-6">
                          <div className="feature-item4 border-end wow fadeInUp" data-wow-delay=".6s">
                              <h4 className="mb-2"><a href="#0" className="text-black">Creative Delivery</a></h4>
                              <p className="fw-normal cmn-pra d-block mb-4">Suspend cubilia comodo per dictumst dolor vitae lorem facilisis and sagittis semitant</p>
                              <div className="d-flex align-items-center justify-content-between">
                                  <a href="#0">
                                      <svg width="49" height="16" viewBox="0 0 49 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path
                                          d="M48.7071 8.7071C49.0976 8.31658 49.0976 7.68341 48.7071 7.29289L42.3431 0.928928C41.9526 0.538404 41.3195 0.538404 40.9289 0.928929C40.5384 1.31945 40.5384 1.95262 40.9289 2.34314L46.5858 8L40.9289 13.6569C40.5384 14.0474 40.5384 14.6805 40.9289 15.0711C41.3195 15.4616 41.9526 15.4616 42.3431 15.0711L48.7071 8.7071ZM0 8L8.74228e-08 9L48 9L48 8L48 7L-8.74228e-08 7L0 8Z"
                                          fill="white" />
                                      </svg>
                                  </a>                                
                                  <span className="serial d-block">01</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 mt-xxl-5">
                          <div className="feature-item4 border-end wow fadeInUp" data-wow-delay=".8s">
                              <h4 className="mb-2"><a href="#0" className="text-black">Rapidly Generate</a></h4>
                              <p className="fw-normal cmn-pra d-block mb-4">Suspend cubilia comodo per dictumst dolor vitae lorem facilisis and
                                  sagittis semitant</p>
                              <div className="d-flex align-items-center justify-content-between">
                                  <a href="#0">
                                      <svg width="49" height="16" viewBox="0 0 49 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              d="M48.7071 8.7071C49.0976 8.31658 49.0976 7.68341 48.7071 7.29289L42.3431 0.928928C41.9526 0.538404 41.3195 0.538404 40.9289 0.928929C40.5384 1.31945 40.5384 1.95262 40.9289 2.34314L46.5858 8L40.9289 13.6569C40.5384 14.0474 40.5384 14.6805 40.9289 15.0711C41.3195 15.4616 41.9526 15.4616 42.3431 15.0711L48.7071 8.7071ZM0 8L8.74228e-08 9L48 9L48 8L48 7L-8.74228e-08 7L0 8Z"
                                              fill="white" />
                                      </svg>
                                  </a>
                                  <span className="serial d-block">02</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                          <div className="feature-item4 border-end wow fadeInUp" data-wow-delay="1.1s">
                              <h4 className="mb-2"><a href="#0" className="text-black">Unique Resource</a></h4>
                              <p className="fw-normal cmn-pra d-block mb-4">Suspend cubilia comodo per dictumst dolor vitae lorem facilisis and
                                  sagittis semitant</p>
                              <div className="d-flex align-items-center justify-content-between">
                                  <a href="#0">
                                      <svg width="49" height="16" viewBox="0 0 49 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              d="M48.7071 8.7071C49.0976 8.31658 49.0976 7.68341 48.7071 7.29289L42.3431 0.928928C41.9526 0.538404 41.3195 0.538404 40.9289 0.928929C40.5384 1.31945 40.5384 1.95262 40.9289 2.34314L46.5858 8L40.9289 13.6569C40.5384 14.0474 40.5384 14.6805 40.9289 15.0711C41.3195 15.4616 41.9526 15.4616 42.3431 15.0711L48.7071 8.7071ZM0 8L8.74228e-08 9L48 9L48 8L48 7L-8.74228e-08 7L0 8Z"
                                              fill="white" />
                                      </svg>
                                  </a>
                                  <span className="serial d-block">03</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 mt-xxl-5">
                          <div className="feature-item4 border-end wow fadeInUp" data-wow-delay="1.2s">
                              <h4 className="mb-2"><a href="#0" className="text-black">Analyzing Data</a></h4>
                              <p className="fw-normal cmn-pra d-block mb-4">Suspend cubilia comodo per dictumst dolor vitae lorem facilisis and
                                  sagittis semitant</p>
                              <div className="d-flex align-items-center justify-content-between">
                                  <a href="#0">
                                      <svg width="49" height="16" viewBox="0 0 49 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              d="M48.7071 8.7071C49.0976 8.31658 49.0976 7.68341 48.7071 7.29289L42.3431 0.928928C41.9526 0.538404 41.3195 0.538404 40.9289 0.928929C40.5384 1.31945 40.5384 1.95262 40.9289 2.34314L46.5858 8L40.9289 13.6569C40.5384 14.0474 40.5384 14.6805 40.9289 15.0711C41.3195 15.4616 41.9526 15.4616 42.3431 15.0711L48.7071 8.7071ZM0 8L8.74228e-08 9L48 9L48 8L48 7L-8.74228e-08 7L0 8Z"
                                              fill="white" />
                                      </svg>
                                  </a>
                                  <span className="serial d-block">04</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    

    
          <section className="news-section section-bg2 section-padding fix">
              <div className="container">
                  <div className="row gx-xxl-5 g-4">
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                          <div className="who-thumb4 position-relative">
                              <img src="/assets/img/who-thumb4.png" alt="img" className="w-100" />
                              <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn video-popup">
                                  <i className="fas fa-play"></i></a>
                          </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                          <div className="section-title style-4">
                              <h6 className="d-flex text-primary align-items-center gap-2 wow fadeInUp" data-wow-delay=".3s">
                                  <img src="/assets/img/section-badge4.png" alt="img" />
                                  Who we are
                              </h6>
                              <h2 className="text-black mb-md-3 mb-2 wow fadeInUp" data-wow-delay=".5s">
                                  Excellence Through Experience
                              </h2> 
                              <p className="cmn-pra">With decades of medical expertise, our dedicated team delivers trusted, high-quality care using proven methods, advanced
                              technology, and a compassionate, patient-first approach.</p>
                          </div>
                          <div className="d-flex flex-column gap-3 mb-4 pb-xxl-2">
                              <div className="d-flex text-primary align-items-center gap-3 wow fadeInUp" data-wow-delay=".3s">
                                  <img src="/assets/img/who-icon1.png" alt="img" />
                                  <div>
                                      <h4 className="text-black mb-1">Minor Procedures & Urgent Care</h4>
                                      <p className="cmn-pra">Treatment for non-emergency injuries and conditions.</p>
                                  </div>
                              </div>
                              <div className="d-flex text-primary align-items-center gap-3 wow fadeInUp" data-wow-delay=".3s">
                                  <img src="/assets/img/who-icon1.png" alt="img" />
                                  <div>
                                      <h4 className="text-black mb-1">Telehealth Appointments</h4>
                                      <p className="cmn-pra">Remote consultations for convenient, at-home care.</p>
                                  </div>
                              </div>
                          </div>
                          <Link to="/about" className="theme-btn d-inline-flex py-3 fw-normal px-4 theme-btn-3">MORE ABOUT US
                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                      </div>
                  </div>
              </div>
          </section>
    

    
          <div className="marquee-section marque-style4 fix section-padding pt-0 margin-bottom-8 margin-top-5">
              <div className="mycustom-marque">
                  <div className="scrolling-wrap bg-primary gap-100">
                      <div className="comm">
                          <div className="cmn-textslide textitalick text-custom-storke">anime</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                          <div className="cmn-textslide textitalick text-custom-storke">text to image</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                          <div className="cmn-textslide textitalick text-custom-storke">image to image</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                      </div>
                      <div className="comm">
                          <div className="cmn-textslide textitalick text-custom-storke">anime</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                          <div className="cmn-textslide textitalick text-custom-storke">text to image</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                          <div className="cmn-textslide textitalick text-custom-storke">image to image</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                      </div>
                      <div className="comm">
                          <div className="cmn-textslide textitalick text-custom-storke">anime</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                          <div className="cmn-textslide textitalick text-custom-storke">text to image</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                          <div className="cmn-textslide textitalick text-custom-storke">image to image</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                      </div>
                  </div>
              </div>
          </div>
    

    
          <section className="process-section4 pb-5 fix bg-cover"
              style={{backgroundImage: 'url(\'/assets/img/feature-bg4.png\')'}}>
              <div className="container pb-5 mb-xxl-4">
                  <div className="section-title mb-4 pb-lg-3 style-4 text-center">
                      <h6 className="mt-3 text-primary d-flex justify-content-center align-items-center gap-2 wow fadeInUp"
                          data-wow-delay=".3s">
                          <img src="/assets/img/section-badge4.png" alt="img" />
                          Working Process
                      </h6>
                      <h2 className="wow fadeInUp text-black" data-wow-delay=".5s">
                          Our Care Process
                      </h2>
                  </div>
                  <div className="row g-4">
                      <div className="col-lg-4 col-sm-6">
                          <div className="process-item4 text-center wow fadeInUp" data-wow-delay=".6s">
                              <div className="icon mb-4 mx-auto">
                                  <img src="/assets/img/icon/process1.png" alt="img" />
                                  <span className="serial">01</span>
                              </div>
                              <h4 className="mb-xl-3 mb-2"><a href="#0" className="text-black">Start Generate</a></h4>
                              <p className="fw-normal cmn-pra d-block mb-0">Suspend cubilia comodo per dictumst dolor vitae lorem facilisis and sagittis semitant molestie aliquam</p>                        
                          </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                          <div className="process-item4 text-center wow fadeInUp" data-wow-delay=".8s">
                              <div className="icon mb-4 mx-auto">
                                  <img src="/assets/img/icon/process2.png" alt="img" />
                                  <span className="serial">02</span>
                              </div>
                              <h4 className="mb-xl-3 mb-2"><a href="#0" className="text-black">Model Building</a></h4>
                              <p className="fw-normal cmn-pra d-block mb-0">Suspend cubilia comodo per dictumst dolor vitae lorem facilisis and
                                  sagittis semitant molestie aliquam</p>
                          </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                          <div className="process-item4 text-center wow fadeInUp" data-wow-delay=".9s">
                              <div className="icon mb-4 mx-auto">
                                  <img src="/assets/img/icon/process3.png" alt="img" />
                                  <span className="serial">03</span>
                              </div>
                              <h4 className="mb-xl-3 mb-2"><a href="#0" className="text-black">Data Analysis</a></h4>
                              <p className="fw-normal cmn-pra d-block mb-0">Suspend cubilia comodo per dictumst dolor vitae lorem facilisis and
                                  sagittis semitant molestie aliquam</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    

    
          <section className="offer-section pb-120 fix">
              <div className="container">
                  <div className="row g-3 align-items-end mb-4 pb-lg-2">
                      <div className="col-md-8">
                          <div className="section-title style-4 mb-0">
                              <h6 className="d-flex text-primary align-items-center gap-2 wow fadeInUp" data-wow-delay=".3s">
                                  <img src="/assets/img/section-badge4.png" alt="img" />
                                  What We Offer
                              </h6>
                              <h2 className="text-black wow fadeInUp" data-wow-delay=".5s">
                                  Our Medical Services
                              </h2>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <div className="text-md-end">
                              <Link to="/about" className="theme-btn d-inline-block fw-medium py-3 px-4 theme-btn-3">VIEW ALL BLOG
                                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                              </Link>
                          </div>
                      </div>
                  </div>
                  <div className="row g-4 align-items-end">
                      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                          <div className="offer-box-items overflow-hidden bg-white">
                              <div className="offer-image d-flex align-content-center justify-content-center mb-3 rounded-3 overflow-hidden">
                                  <img src="/assets/img/news/offer-service1.png" alt="img" className="w-100" />
                                  <div className="img-box d-flex align-items-center justify-content-center text-center">
                                      <div>
                                          <img width="64" height="64" src="/assets/img/news/offer-helth.png" alt="img"
                                              className="mb-xxl-4 mb-md-3 mb-2 mx-auto d-block" />
                                          <Link to="/about" className="theme-btn d-inline-block fw-medium py-3 px-4 theme-btn-3">READ MORE
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                              <div className="offer-content px-4">
                                  <h4 className="mb-1">
                                      <Link to="/news-details" className="fw-semibold text-black">General Medicine</Link>
                                  </h4>
                                  <p className="cmn-pra">
                                      Diagnosis, treatment, and management of common illnesses and health concerns.
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                          <div className="offer-box-items overflow-hidden bg-white">
                              <div className="offer-image d-flex align-content-center justify-content-center mb-3 rounded-3 overflow-hidden">
                                  <img src="/assets/img/news/offer-service2.png" alt="img" className="w-100" />
                                  <div className="img-box d-flex align-items-center justify-content-center text-center">
                                      <div>
                                          <img width="64" height="64" src="/assets/img/news/offer-helth.png" alt="img"
                                              className="mb-xxl-4 mb-md-3 mb-2 mx-auto d-block" />
                                          <Link to="/about" className="theme-btn d-inline-block fw-medium py-3 px-4 theme-btn-3">READ MORE
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                              <div className="offer-content px-4">
                                  <h4 className="mb-1">
                                      <Link to="/news-details" className="fw-semibold text-black">Gynecology & Women’s Health</Link>
                                  </h4>
                                  <p className="cmn-pra">
                                      Comprehensive care for reproductive health, prenatal checkups, and family planning.
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                          <div className="offer-box-items overflow-hidden bg-white">
                              <div className="offer-image d-flex align-content-center justify-content-center mb-3 rounded-3 overflow-hidden">
                                  <img src="/assets/img/news/offer-service3.png" alt="img" className="w-100" />
                                  <div className="img-box d-flex align-items-center justify-content-center text-center">
                                      <div>
                                          <img width="64" height="64" src="/assets/img/news/offer-helth.png" alt="img"
                                              className="mb-xxl-4 mb-md-3 mb-2 mx-auto d-block" />
                                          <Link to="/about" className="theme-btn d-inline-block fw-medium py-3 px-4 theme-btn-3">READ MORE
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                              <div className="offer-content px-4">
                                  <h4 className="mb-1">
                                      <Link to="/news-details" className="fw-semibold text-black">Mental Health Services</Link>
                                  </h4>
                                  <p className="cmn-pra">
                                      Immediate care for injuries, infections, and sudden health issues.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>


    
          <section className="faq-section section-bg2 fix section-padding">
              <div className="container">
                  <div className="faq-wrapper">
                      <div className="row g-4">
                          <div className="col-lg-6">
                              <div className="faq-image-thumb">
                                  <img src="/assets/img/faq-thumb.png" alt="img" className="w-100" />
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="faq-content">
                                  <div className="section-title style-4 mb-4">
                                      <h6 className="mt-3 text-primary d-flex justify-content-start align-items-center gap-2 wow fadeInUp"
                                          data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                                          <img src="/assets/img/section-badge4.png" alt="img" />
                                          Subscribe & Stay Informed
                                      </h6>
                                      <h2 className="wow fadeInUp text-black mb-2" data-wow-delay=".5s"
                                          style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                                          Frequently Asked Questions
                                      </h2>
                                      <p className="fs-16 cmn-pra">
                                          Have questions about our services, appointments, or care process? Explore our FAQs for quick answers and helpful
                                          information.
                                      </p>         
                                  </div>
                                  <div className="faq-items-4">
                                      <div className="faq-accordion">
                                      <div className="accordion" id="accordion">
                                          <div className="accordion-item wow fadeInUp" data-wow-delay=".2s">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button collapsed" type="button"
                                                      data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false"
                                                      aria-controls="faq2">
                                                      Consultation booking system
                                                  </button>
                                              </h5>
                                              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                  <div className="accordion-body">
                                                      Rhoncus duis urna lobortis at fusce cum accumsan tempor ads orci etiam
                                                      litora dignissim ipsum lacinia hendrerit convallis vitae Consequat enim
                                                      phasellus purus
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="accordion-item  wow fadeInUp" data-wow-delay=".4s">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                      data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                                      Personalized dashboard
                                                  </button>
                                              </h5>
                                              <div id="faq1" className="accordion-collapse show" data-bs-parent="#accordion">
                                                  <div className="accordion-body">
                                                      Rhoncus duis urna lobortis at fusce cum accumsan tempor ads orci etiam
                                                      litora dignissim ipsum lacinia hendrerit convallis vitae Consequat enim
                                                      phasellus purus
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="accordion-item wow fadeInUp" data-wow-delay=".6s">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button collapsed" type="button"
                                                      data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false"
                                                      aria-controls="faq3">
                                                      AI insights and analytics
                                                  </button>
                                              </h5>
                                              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                  <div className="accordion-body">
                                                      Rhoncus duis urna lobortis at fusce cum accumsan tempor ads orci etiam
                                                      litora dignissim ipsum lacinia hendrerit convallis vitae Consequat enim
                                                      phasellus purus
                                                  </div>
                                              </div>
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

    
          <section className="newsletter-section4 section-padding fix bg-cover"
              style={{backgroundImage: 'url(\'/assets/img/newsletter-bg4.png\')'}}>
              <div className="container">
                  <div className="section-title style-4 text-center">
                      <h6 className="mt-3 text-primary d-flex justify-content-center align-items-center gap-2 wow fadeInUp"
                          data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                          <img src="/assets/img/section-badge4.png" alt="img" />
                          Subscribe & Stay Informed
                      </h6>
                      <h2 className="wow fadeInUp text-white mb-2" data-wow-delay=".5s"
                          style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                          Health News & Updates
                      </h2>
                      <p className="fs-16 mb-xxl-5 mb-4 text-white opacity-75">
                          Stay informed with the latest health tips, clinic updates, and expert advice—straight from our team to your inbox. Sign
                          up for smarter, healthier living.
                      </p>
                      <div className="form-newletter4 bg-white rounded-pill pe-1 py-1" style={{maxWidth: '534px', margin: '0 auto'}}>
                          <input type="email" id="email" className="form-control bg-transparent py-3 px-4 border-0 w-100" placeholder="Enter Your Email" />
                          <button type="submit" className="theme-btn text-nowrap d-inline-block fw-medium py-3 px-4 theme-btn-3 w-190">
                              SUBMIT NOW
                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                          </button>
                      </div>
                  </div>
              </div>
          </section>
    

    
          <section className="news-section pt-120 fix">
              <div className="container">
                  <div className="row g-3 align-items-end">
                      <div className="col-md-8">
                          <div className="section-title style-4 mb-0">
                              <h6 className="d-flex text-primary align-items-center gap-2 wow fadeInUp" data-wow-delay=".3s">
                                  <img src="/assets/img/section-badge4.png" alt="img" />
                                  Our Health Blog
                              </h6>
                              <h2 className="text-black wow fadeInUp" data-wow-delay=".5s">
                                  Health & Wellness Articles
                              </h2>  
                          </div>
                      </div>
                      <div className="col-md-4">
                          <div className="text-md-end">
                              <Link to="/about" className="theme-btn d-inline-block fw-medium py-3 px-4 theme-btn-3">VIEW ALL BLOG
                                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                              </Link>
                          </div>
                      </div>
                  </div>
                  <div className="row g-4 align-items-end">
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                          <div className="news-box-items rounded-4 overflow-hidden" style={{backgroundColor: '#F2F7FE'}}>
                              <div className="news-image">
                                  <img src="/assets/img/news/blog4-1.png" alt="img" />
                              </div>
                              <div className="news-content py-4 px-xxl-4 px-3 mt-0">
                                  <ul className="post-cat d-flex align-items-center gap-xxl-4 gap-3">
                                      <li className="fw-normal text-capitalize">
                                          <i className="fa-solid fa-calendar-days text-black"></i>
                                          October 19, 2022
                                      </li>
                                      <li className="fw-normal text-capitalize">
                                          <i className="fa-solid fa-user text-black"></i>
                                          By admin
                                      </li>
                                  </ul>
                                  <h3>
                                      <Link to="/news-details" className="fw-semibold">Hydration & Health How Much Water Do You Really Need?</Link>
                                  </h3>
                                  <Link to="/news-details" className="link-btn text-primary">
                                      Read More 
                                      <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                  </Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-6 col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                          <div className="d-flex flex-column gap-4">
                              <div className="news-box-items mt-0 d-flex justify-content-center justify-content-sm-start text-sm-start text-center flex-sm-nowrap p-sm-0 p-3 flex-wrap align-items-center gap-xl-4 gap-3 rounded-4" style={{backgroundColor: '#F2F7FE'}}>
                                  <div className="news-image" style={{height: '245px'}}>
                                      <img src="/assets/img/news/blog4-2.png" alt="img" />
                                  </div>
                                  <div className="news-content mt-0">
                                      <ul className="post-cat justify-content-center justify-content-sm-start d-flex align-items-center gap-xxl-4 gap-3">
                                          <li className="fw-normal text-capitalize">
                                              <i className="fa-solid fa-calendar-days text-black"></i>
                                              October 19, 2022
                                          </li>
                                             <li className="fw-normal text-capitalize">
                                              <i className="fa-solid fa-user text-black"></i>
                                              By admin
                                          </li>
                                      </ul>
                                      <h4 className="mb-2">
                                          <Link to="/news-details" className="fw-semibold text-black">Managing Stress for Better <br /> Overall Health</Link>
                                      </h4>
                                      <p className="text-secondary fs-16 mb-3">
                                          Techniques to balance mental well-being
                                      </p>
                                      <Link to="/news-details" className="link-btn text-primary">
                                          Read More
                                          <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                      </Link>
                                  </div>
                              </div>
                              <div className="news-box-items mt-0 d-flex justify-content-center justify-content-sm-start text-sm-start text-center flex-sm-nowrap p-sm-0 p-3 flex-wrap align-items-center gap-xl-4 gap-3 rounded-4" style={{backgroundColor: '#F2F7FE'}}>
                                  <div className="news-image" style={{height: '245px'}}>
                                      <img src="/assets/img/news/blog4-3.png" alt="img" />
                                  </div>
                                  <div className="news-content mt-0">
                                      <ul className="post-cat justify-content-center justify-content-sm-start d-flex align-items-center gap-xxl-4 gap-3">
                                          <li className="fw-normal text-capitalize">
                                              <i className="fa-solid fa-calendar-days text-black"></i>
                                              October 19, 2022
                                          </li>
                                          <li className="fw-normal text-capitalize">
                                              <i className="fa-solid fa-user text-black"></i>
                                              By admin
                                          </li>
                                      </ul>
                                      <h4 className="mb-2">
                                          <Link to="/news-details" className="fw-semibold text-black">How Telehealth Is Changing <br /> Modern Medicine</Link>
                                      </h4>
                                      <p className="text-secondary fs-16 mb-3">
                                          How Telehealth Is Changing Modern Medicine
                                      </p>
                                      <Link to="/news-details" className="link-btn text-primary">
                                          Read More
                                          <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="message-section fix bg-white section-padding overflow-hidden">
              <div className="brand-section brand-style4 pb-0">
                  <div className="container">
                      <h4 className="sponsor-title text-center mb-lg-5 mb-4 text-dark wow fadeInUp" data-wow-delay=".3s">
                          <span>Global Trusted Partner</span>
                      </h4>
                      <div className="swiper brand-slider">
                          <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                  <div className="brand-image text-center">
                                      <img src="/assets/img/brand/brandv1.png" alt="img" />
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="brand-image text-center">
                                      <img src="/assets/img/brand/brandv2.png" alt="img" />
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="brand-image text-center">
                                      <img src="/assets/img/brand/brandv3.png" alt="img" />
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="brand-image text-center">
                                      <img src="/assets/img/brand/brandv4.png" alt="img" />
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="brand-image text-center">
                                      <img src="/assets/img/brand/brandv5.png" alt="img" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      <FooterHome4 />
    </>
  );
}
