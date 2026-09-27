import { useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderHome2 from "../components/HeaderHome2";
import FooterHome2 from "../components/FooterHome2";

export default function HomeTwo() {
  useEffect(() => {
    document.title = "Home 02 | AiLogiQs";
  }, []);

  return (
    <>
      <HeaderHome2 />
      <section className="hero-secton section-padding hero-2 bg-cover"
              style={{backgroundImage: 'url(\'/assets/img/hero/hero-bg.jpg\')'}}>
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-7">
                          <div className="hero-content">
                              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                  <span>Revolutionize</span>
                                  customer interplay
                                  for AI <span>chatbots</span>
                              </h1>
                              <p className="wow fadeInUp" data-wow-delay=".5s">
                                  Unlock the power of AI to generate high-quality images <br /> and videos in less than minutes
                              </p>
                              <Link to="/" className="theme-btn wow fadeInUp" data-wow-delay=".7s">explore now <i
                                      className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                          </div>
                      </div>
                      <div className="col-lg-5 wow fadeInUp" data-wow-delay=".3s">
                          <div className="hero-image">
                              <img src="/assets/img/hero/hero.png" alt="img" />
                              <div className="circle-shape">
                                  <img src="/assets/img/hero/circle-shape.png" alt="img" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="service-section fix section-padding-2">
              <div className="container">
                  <div className="section-title style-2 text-center">
                      <img src="/assets/img/circle-title.png" alt="img" className="wow fadeInUp" />
                      <h6 className="mt-3 wow fadeInUp" data-wow-delay=".3s">ultimate feature</h6>
                      <h2 className="wow fadeInUp" data-wow-delay=".5s">
                          Futuristic <span>chatbot</span>
                      </h2>
                  </div>
                  <div className="row">
                      <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                          <div className="service-box-items-2">
                              <div className="icon">
                                  <img src="/assets/img/icon/03.svg" alt="img" />
                              </div>
                              <div className="content">
                                  <h3>
                                      24/7 Customer
                                      Support
                                  </h3>
                                  <p>
                                      Selmas ligula ans vestibulum morbi lacsus urna fell crases eleifen mauris ans
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                          <div className="service-box-items-2">
                              <div className="icon">
                                  <img src="/assets/img/icon/04.svg" alt="img" />
                              </div>
                              <div className="content">
                                  <h3>
                                      Right Language
                                      Processing
                                  </h3>
                                  <p>
                                      Selmas ligula ans vestibulum morbi lacsus urna fell crases eleifen mauris ans
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                          <div className="service-box-items-2">
                              <div className="icon">
                                  <img src="/assets/img/icon/05.svg" alt="img" />
                              </div>
                              <div className="content">
                                  <h3>
                                      Seamless data
                                      Integration
                                  </h3>
                                  <p>
                                      Selmas ligula ans vestibulum morbi lacsus urna fell crases eleifen mauris ans
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                          <div className="service-box-items-2">
                              <div className="icon">
                                  <img src="/assets/img/icon/06.svg" alt="img" />
                              </div>
                              <div className="content">
                                  <h3>
                                      All Data-Driven
                                      Insights
                                  </h3>
                                  <p>
                                      Selmas ligula ans vestibulum morbi lacsus urna fell crases eleifen mauris ans
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                          <div className="service-box-items-2">
                              <div className="icon">
                                  <img src="/assets/img/icon/09.svg" alt="img" />
                              </div>
                              <div className="content">
                                  <h3>
                                      Automated Lead
                                      Generation
                                  </h3>
                                  <p>
                                      Selmas ligula ans vestibulum morbi lacsus urna fell crases eleifen mauris ans
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                          <div className="service-box-items-2">
                              <div className="icon">
                                  <img src="/assets/img/icon/10.svg" alt="img" />
                              </div>
                              <div className="content">
                                  <h3>
                                      Multi-Language
                                      Support
                                  </h3>
                                  <p>
                                      Selmas ligula ans vestibulum morbi lacsus urna fell crases eleifen mauris ans
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                          <div className="service-image-2">
                              <img src="/assets/img/service/05.jpg" alt="img" />
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="about-section fix section-padding-2 pt-0">
              <div className="about-wrapper-2 bg-cover" style={{backgroundImage: 'url(\'/assets/img/about/about-bg.jpg\')'}}>
                  <div className="container-fluid">
                      <div className="row g-4 align-items-center">
                          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                              <div className="about-image">
                                  <img src="/assets/img/about/02.png" alt="img" />
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="about-content">
                                  <div className="section-title style-2">
                                      <h6 className="wow fadeInUp"><img src="/assets/img/circle-title.png" alt="img" /> about chatbot
                                      </h6>
                                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                          Perfect solutions business <br />
                                          & <span>creative</span> work
                                      </h2>
                                  </div>
                                  <ul className="about-list mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".3s">
                                      <li>
                                          <span>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#514DE0" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#514DE0" />
                                              </svg>
                                              Real-World Transformations
                                          </span>
                                          Chatbot learns from interactions constantly improving responses
                                      </li>
                                      <li>
                                          <span>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#514DE0" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#514DE0" />
                                              </svg>
                                              Integration with E-commerce
                                          </span>
                                          Monitor chatbot are interaction in real-time to ensure high-quality
                                      </li>
                                  </ul>
                                  <Link to="/about" className="theme-btn theme-btn-2 wow fadeInUp" data-wow-delay=".5s">Learn
                                      more <i className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="popular-service-section fix section-padding-2 pt-0">
              <div className="container">
                  <div className="section-title style-2 text-center">
                      <img src="/assets/img/circle-title.png" alt="img" className="wow fadeInUp" />
                      <h6 className="mt-3 wow fadeInUp" data-wow-delay=".3s">Exclusive services</h6>
                      <h2 className="wow fadeInUp" data-wow-delay=".5s">
                          Comprehensive analytics <br /> <span>and popular</span> services
                      </h2>
                  </div>
                  <div className="row">
                      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                          <div className="service-left-items">
                              <div className="popular-service-items">
                                  <div className="icon">
                                      <img src="/assets/img/icon/11.svg" alt="img" />
                                  </div>
                                  <div className="content">
                                      <h3>
                                          Custom Chatbot <br />
                                          Development
                                      </h3>
                                      <p>
                                          Selmas ligula anser vestibulum morbi lacsus urna fell crases eleifen mauris meet the
                                          specific
                                      </p>
                                  </div>
                              </div>
                              <div className="popular-service-items style-2">
                                  <div className="content">
                                      <h3>
                                          Custom Chatbot <br />
                                          Development
                                      </h3>
                                      <p>
                                          Selmas ligula anser vestibulum morbi lacsus urna fell crases eleifen mauris meet the
                                          specific
                                      </p>
                                  </div>
                                  <div className="icon">
                                      <img src="/assets/img/icon/12.svg" alt="img" />
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                          <div className="popular-service-image">
                              <img src="/assets/img/service/Illustration.png" alt="img" />
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                          <div className="service-right-items">
                              <div className="popular-service-items style-3">
                                  <div className="icon">
                                      <img src="/assets/img/icon/13.svg" alt="img" />
                                  </div>
                                  <div className="content">
                                      <h3>
                                          Custom Chatbot <br />
                                          Development
                                      </h3>
                                      <p>
                                          Selmas ligula anser vestibulum morbi lacsus urna fell crases eleifen mauris meet the
                                          specific
                                      </p>
                                  </div>
                              </div>
                              <div className="popular-service-items style-2 style-3">
                                  <div className="content">
                                      <h3>
                                          Custom Chatbot <br />
                                          Development
                                      </h3>
                                      <p>
                                          Selmas ligula anser vestibulum morbi lacsus urna fell crases eleifen mauris meet the
                                          specific
                                      </p>
                                  </div>
                                  <div className="icon">
                                      <img src="/assets/img/icon/14.svg" alt="img" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="mobile-app fix section-padding-2 bg-cover"
              style={{backgroundImage: 'url(\'/assets/img/mobile-app-bg.jpg\')'}}>
              <div className="container">
                  <div className="mobile-app-wrapper">
                      <div className="row g-4 align-items-center">
                          <div className="col-lg-6 wow fadeInUp">
                              <div className="mobile-thumb text-center">
                                  <img src="/assets/img/mobile.png" alt="img" />
                                  <div className="shape-img">
                                      <img src="/assets/img/mobile-shaape.png" alt="img" />
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="mobile-app-content">
                                  <div className="section-title style-2">
                                      <h6 className="text-white wow fadeInUp"><img src="/assets/img/circle-title-2.png" alt="img" />
                                          Our application</h6>
                                      <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                          Mobile apps drive the easy and
                                          formal <span>revolution</span>
                                      </h2>
                                  </div>
                                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">Download our mobile apps from
                                      android & app store</p>
                                  <div className="apps-button">
                                      <Link to="/contact" className="wow fadeInUp" data-wow-delay=".3s">
                                          <img src="/assets/img/google-play.png" alt="img" />
                                      </Link>
                                      <Link to="/contact" className="wow fadeInUp" data-wow-delay=".5s">
                                          <img src="/assets/img/app-store.png" alt="img" />
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="testimonial-section fix section-padding-2">
              <div className="container">
                  <div className="client-1">
                      <img src="/assets/img/testimonial/client-1.png" alt="img" />
                  </div>
                  <div className="client-2">
                      <img src="/assets/img/testimonial/client-2.png" alt="img" />
                  </div>
                  <div className="client-3">
                      <img src="/assets/img/testimonial/client-3.png" alt="img" />
                  </div>
                  <div className="client-4">
                      <img src="/assets/img/testimonial/client-4.png" alt="img" />
                  </div>
                  <div className="client-5">
                      <img src="/assets/img/testimonial/client-5.png" alt="img" />
                  </div>
                  <div className="client-6">
                      <img src="/assets/img/testimonial/client-6.png" alt="img" />
                  </div>
                  <div className="testimonial-wrapper"
                      style={{backgroundImage: 'url(\'/assets/img/testimonial/testimonial-bg.png\')'}}>
                      <div className="section-title style-2 text-center">
                          <img src="/assets/img/circle-title.png" alt="img" className="wow fadeInUp" />
                          <h6 className="mt-3 wow fadeInUp" data-wow-delay=".3s">ultimate feature</h6>
                          <h2 className="wow fadeInUp" data-wow-delay=".5s">
                              Clients <span>feedback</span>
                          </h2>
                      </div>
                      <div className="swiper testimonail-slider mt-3 mt-md-0">
                          <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                  <div className="testimonail-content">
                                      <div className="icon">
                                          <img src="/assets/img/testimonial/quote.png" alt="img" />
                                      </div>
                                      <p>
                                          "I love how easy it is to use this chatbot. Whether I’m looking for product
                                          recommendations or just need help with a task, it’s always there with the perfect
                                          response. A true game-changer!"
                                      </p>
                                      <div className="client-info">
                                          <h3>Harry S. Adams</h3>
                                          <span>Senior executive of microsoft</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </section>

    
          <section className="platform-section fix section-padding-2 bg-cover"
              style={{backgroundImage: 'url(\'/assets/img/platform-bg.jpg\')'}}>
              <div className="container">
                  <div className="section-title style-2 text-center">
                      <img src="/assets/img/circle-title.png" alt="img" className="wow fadeInUp" />
                      <h6 className="mt-3 wow fadeInUp" data-wow-delay=".3s">favorite platform</h6>
                      <h2 className="wow fadeInUp" data-wow-delay=".5s">
                          Compatible with your <br /> <span>preferred</span> platforms
                      </h2>
                  </div>
                  <div className="platform-wrapper">
                      <div className="platform-icon">
                          <img src="/assets/img/platform/messenger.png" alt="img" />
                      </div>
                      <div className="platform-items">
                          <div className="platform-icon">
                              <img src="/assets/img/platform/slack.png" alt="img" />
                          </div>
                          <div className="platform-icon">
                              <img src="/assets/img/platform/chatgpt.png" alt="img" />
                          </div>
                      </div>
                      <div className="platform-icon">
                          <img src="/assets/img/platform/drive.png" alt="img" />
                      </div>
                  </div>
                  <div className="platform-wrapper-2">
                      <div className="platform-icon">
                          <img src="/assets/img/platform/mailchimp.png" alt="img" />
                      </div>
                      <div className="platform-icon">
                          <img src="/assets/img/platform/dropbox.png" alt="img" />
                      </div>
                      <div className="platform-icon">
                          <img src="/assets/img/platform/whatsapp.png" alt="img" />
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="faq-section fix section-padding-2">
              <div className="container">
                  <div className="faq-wrapper style-2">
                      <div className="row g-4">
                          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                              <div className="faq-image-2">
                                  <img src="/assets/img/faq/faq.png" alt="img" />
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="faq-content">
                                  <div className="section-title style-2">
                                      <h6 className="wow fadeInUp"><img src="/assets/img/circle-title.png" alt="img" />Customer query
                                      </h6>
                                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                          Frequently asked customers
                                          <span>question</span> & answer
                                      </h2>
                                  </div>
                                  <div className="faq-accordion">
                                      <div className="accordion" id="accordion">
                                          <div className="accordion-item wow fadeInUp" data-wow-delay=".2s">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button collapsed" type="button"
                                                      data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false"
                                                      aria-controls="faq2">
                                                      How does the chatbot improve over time?
                                                  </button>
                                              </h5>
                                              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                  <div className="accordion-body">
                                                      I love how easy it is to use this chatbot. Whether I’m looking for
                                                      product recommendations or just need help with a task, it’s always there
                                                      with the perfect response. A true game-changer
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="accordion-item  wow fadeInUp" data-wow-delay=".4s">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                      data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                                      Is my data safe when using the chatbot?
                                                  </button>
                                              </h5>
                                              <div id="faq1" className="accordion-collapse show" data-bs-parent="#accordion">
                                                  <div className="accordion-body">
                                                      I love how easy it is to use this chatbot. Whether I’m looking for
                                                      product recommendations or just need help with a task, it’s always there
                                                      with the perfect response. A true game-changer
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="accordion-item wow fadeInUp" data-wow-delay=".6s">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button collapsed" type="button"
                                                      data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false"
                                                      aria-controls="faq3">
                                                      What languages does the chatbot support?
                                                  </button>
                                              </h5>
                                              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                  <div className="accordion-body">
                                                      I love how easy it is to use this chatbot. Whether I’m looking for
                                                      product recommendations or just need help with a task, it’s always there
                                                      with the perfect response. A true game-changer
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="accordion-item wow fadeInUp" data-wow-delay=".8s">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button collapsed" type="button"
                                                      data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false"
                                                      aria-controls="faq4">
                                                      How accurate are the chatbot’s answers?
                                                  </button>
                                              </h5>
                                              <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                  <div className="accordion-body">
                                                      I love how easy it is to use this chatbot. Whether I’m looking for
                                                      product recommendations or just need help with a task, it’s always there
                                                      with the perfect response. A true game-changer
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

    
          <div className="brand-section section-padding-2 pt-0">
              <div className="container">
                  <h3 className="brand-title-2 text-center wow fadeInUp">Trusted by the great company</h3>
                  <div className="swiper brand-slider">
                      <div className="swiper-wrapper">
                          <div className="swiper-slide">
                              <div className="brand-image text-center">
                                  <img src="/assets/img/brand/06.png" alt="img" />
                              </div>
                          </div>
                          <div className="swiper-slide">
                              <div className="brand-image text-center">
                                  <img src="/assets/img/brand/07.png" alt="img" />
                              </div>
                          </div>
                          <div className="swiper-slide">
                              <div className="brand-image text-center">
                                  <img src="/assets/img/brand/08.png" alt="img" />
                              </div>
                          </div>
                          <div className="swiper-slide">
                              <div className="brand-image text-center">
                                  <img src="/assets/img/brand/09.png" alt="img" />
                              </div>
                          </div>
                          <div className="swiper-slide">
                              <div className="brand-image text-center">
                                  <img src="/assets/img/brand/10.png" alt="img" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

    
          <section className="how-to-work-section fix section-padding-2 bg-cover"
              style={{backgroundImage: 'url(\'/assets/img/how-work-bg.jpg\')'}}>
              <div className="container">
                  <div className="section-title style-2 text-center">
                      <img src="/assets/img/circle-title-2.png" alt="img" className="wow fadeInUp" />
                      <h6 className="text-white mt-3 wow fadeInUp" data-wow-delay=".3s">How we works</h6>
                      <h2 className="text-white wow fadeInUp" data-wow-delay=".5s">
                          Understanding our <br />
                          AI <span>chatbot’s</span> workflow
                      </h2>
                  </div>
                  <div className="how-to-work-wrapper">
                      <div className="how-too-work-items text-center wow fadeInUp">
                          <div className="icon">
                              <img src="/assets/img/icon/15.svg" alt="img" />
                              <div className="bar-shape">
                                  <img src="/assets/img/work-bar-shape.png" alt="img" />
                              </div>
                          </div>
                          <div className="content">
                              <h3>Choose Plan</h3>
                              <p>Start by signing up for our service with and proces simple</p>
                          </div>
                      </div>
                      <div className="arrow-shape wow fadeInUp" data-wow-delay=".2s">
                          <img src="/assets/img/work-arrow.png" alt="img" />
                      </div>
                      <div className="how-too-work-items text-center wow fadeInUp" data-wow-delay=".4s">
                          <div className="icon">
                              <img src="/assets/img/icon/16.svg" alt="img" />
                              <div className="bar-shape">
                                  <img src="/assets/img/work-bar-shape.png" alt="img" />
                              </div>
                          </div>
                          <div className="content">
                              <h3>Choose Plan</h3>
                              <p>Start by signing up for our service with and proces simple</p>
                          </div>
                      </div>
                      <div className="arrow-shape wow fadeInUp" data-wow-delay=".6s">
                          <img src="/assets/img/work-arrow.png" alt="img" />
                      </div>
                      <div className="how-too-work-items text-center wow fadeInUp" data-wow-delay=".7s">
                          <div className="icon">
                              <img src="/assets/img/icon/17.svg" alt="img" />
                              <div className="bar-shape">
                                  <img src="/assets/img/work-bar-shape.png" alt="img" />
                              </div>
                          </div>
                          <div className="content">
                              <h3>Choose Plan</h3>
                              <p>Start by signing up for our service with and proces simple</p>
                          </div>
                      </div>
                      <div className="arrow-shape wow fadeInUp" data-wow-delay=".8s">
                          <img src="/assets/img/work-arrow.png" alt="img" />
                      </div>
                      <div className="how-too-work-items text-center wow fadeInUp" data-wow-delay=".9s">
                          <div className="icon">
                              <img src="/assets/img/icon/18.svg" alt="img" />
                              <div className="bar-shape">
                                  <img src="/assets/img/work-bar-shape.png" alt="img" />
                              </div>
                          </div>
                          <div className="content">
                              <h3>Choose Plan</h3>
                              <p>Start by signing up for our service with and proces simple</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="news-section fix section-padding-2">
              <div className="container">
                  <div className="section-title style-2 text-center">
                      <img src="/assets/img/circle-title.png" alt="img" className="wow fadeInUp" />
                      <h6 className="mt-3 wow fadeInUp" data-wow-delay=".3s">recent articles</h6>
                      <h2 className="wow fadeInUp" data-wow-delay=".5s">
                          Story & <span>journal</span>
                      </h2>
                  </div>
                  <div className="row">
                      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                          <div className="news-box-items">
                              <div className="news-image">
                                  <img src="/assets/img/news/01.jpg" alt="img" />
                                  <div className="post-date">
                                      <h4>08</h4>
                                      <span>aug</span>
                                  </div>
                              </div>
                              <div className="news-content">
                                  <ul className="post-cat">
                                      <li>
                                          <i className="fa-regular fa-folder-open"></i>
                                          reporting
                                      </li>
                                  </ul>
                                  <h3>
                                      <Link to="/news-details">Fames pellen tesque an vivamu duis tortor distract from</Link>
                                  </h3>
                                  <Link to="/news-details" className="link-btn">Learn more <i
                                          className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                          <div className="news-box-items">
                              <div className="news-image">
                                  <img src="/assets/img/news/02.jpg" alt="img" />
                                  <div className="post-date">
                                      <h4>09</h4>
                                      <span>aug</span>
                                  </div>
                              </div>
                              <div className="news-content">
                                  <ul className="post-cat">
                                      <li>
                                          <i className="fa-regular fa-folder-open"></i>
                                          analytics
                                      </li>
                                  </ul>
                                  <h3>
                                      <Link to="/news-details">Responsive & really understand what I’m asking to</Link>
                                  </h3>
                                  <Link to="/news-details" className="link-btn">Learn more <i
                                          className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                          <div className="news-box-items">
                              <div className="news-image">
                                  <img src="/assets/img/news/03.jpg" alt="img" />
                                  <div className="post-date">
                                      <h4>10</h4>
                                      <span>aug</span>
                                  </div>
                              </div>
                              <div className="news-content">
                                  <ul className="post-cat">
                                      <li>
                                          <i className="fa-regular fa-folder-open"></i>
                                          reporting
                                      </li>
                                  </ul>
                                  <h3>
                                      <Link to="/news-details">chatbot not only for answered my questions but also</Link>
                                  </h3>
                                  <Link to="/news-details" className="link-btn">Learn more <i
                                          className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      <FooterHome2 />
    </>
  );
}
