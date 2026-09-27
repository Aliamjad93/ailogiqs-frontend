import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Service() {
  useEffect(() => {
    document.title = "Services | AiLogiQs";
  }, []);

  return (
    <>
      <Header />
      <section className="service-section style-padding fix section-padding bg-cover"
              style={{backgroundImage: 'url(\'/assets/img/service/Pattern.png\')'}}>
              <div className="container">
                  <div className="section-title text-center">
                      <h6 className="wow fadeInUp">
                          <img src="/assets/img/star.png" alt="img" />
                          popular services
                      </h6>
                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Exclusive AI-powered <br />
                          <span>idea & <b>automation</b> services</span>
                      </h2>
                  </div>
                  <div className="row">
                      <div className="col-xl-6 wow fadeInUp" data-wow-delay=".2s">
                          <div className="service-box-items">
                              <div className="service-image">
                                  <img src="/assets/img/service/01.jpeg" alt="img" />
                              </div>
                              <div className="service-content">
                                  <h3>
                                      Business strategy
                                      planning
                                  </h3>
                                  <p>
                                      Duise sagettis rosend accumsas magna onest curos adipiscine contacting the agency
                                      secondar
                                  </p>
                                  <Link to="/service" className="link-btn">more details <i
                                          className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-6 wow fadeInUp" data-wow-delay=".4s">
                          <div className="service-box-items">
                              <div className="service-image">
                                  <img src="/assets/img/service/02.jpg" alt="img" />
                              </div>
                              <div className="service-content">
                                  <h3>
                                      Data analysis
                                      services
                                  </h3>
                                  <p>
                                      Duise sagettis rosend accumsas magna onest curos adipiscine contacting the agency
                                      secondar
                                  </p>
                                  <Link to="/service" className="link-btn">more details <i
                                          className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-6 wow fadeInUp" data-wow-delay=".6s">
                          <div className="service-box-items">
                              <div className="service-image">
                                  <img src="/assets/img/service/03.jpg" alt="img" />
                              </div>
                              <div className="service-content">
                                  <h3>
                                      Machine learning
                                      models
                                  </h3>
                                  <p>
                                      Duise sagettis rosend accumsas magna onest curos adipiscine contacting the agency
                                      secondar
                                  </p>
                                  <Link to="/service" className="link-btn">more details <i
                                          className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-6 wow fadeInUp" data-wow-delay=".8s">
                          <div className="service-box-items mb-0">
                              <div className="service-image">
                                  <img src="/assets/img/service/04.jpg" alt="img" />
                              </div>
                              <div className="service-content">
                                  <h3>
                                      Custom artificial
                                      solutions
                                  </h3>
                                  <p>
                                      Duise sagettis rosend accumsas magna onest curos adipiscine contacting the agency
                                      secondar
                                  </p>
                                  <Link to="/service" className="link-btn">more details <i
                                          className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <div className="cta-section-4 fix">
              <div className="container">
                  <div className="cta-wrapper mt-0 bg-cover" style={{backgroundImage: 'url(\'/assets/img/cta-bg.jpg\')'}}>
                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Experience the future of <br />
                          <span></span> creation
                      </h2>
                      <Link to="/contact" className="theme-btn style-2 wow fadeInUp" data-wow-delay=".5s"
                          style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>free generate <i
                              className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                  </div>
              </div>
          </div>

    
          <section className="benefit-section fix section-padding section-bg">
              <div className="container">
                  <div className="benefit-wrapper">
                      <div className="row g-4 align-items-center">
                          <div className="col-xl-4 col-lg-6">
                              <div className="benefit-left-content">
                                  <div className="section-title">
                                      <h6 className="wow fadeInUp">
                                          <img src="/assets/img/star.png" alt="img" />
                                          our benefit
                                      </h6>
                                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                          Innovate the
                                          intelligence
                                          lead with AI
                                      </h2>
                                  </div>
                                  <p className="mt-3 mt-md-0">
                                      Duise sagittis accumsan magna onest adipisciny laoreet ultrices magna consectetuer
                                      eiaculis rutrium morbie habitasse orcide libero porttitor scelerisque acid vivamu
                                  </p>
                                  <Link to="/about" className="theme-btn wow fadeInUp" data-wow-delay=".5s">free generate <i
                                          className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                              </div>
                          </div>
                          <div className="col-xl-4 col-lg-6">
                              <div className="benefit-image">
                                  <img src="/assets/img/benefit-image.jpg" alt="img" />
                              </div>
                          </div>
                          <div className="col-xl-4 col-lg-6">
                              <div className="benefit-right-items">
                                  <div className="benefit-icon-items">
                                      <div className="icon">
                                          <img src="/assets/img/icon/27.svg" alt="img" />
                                      </div>
                                      <div className="content">
                                          <h3>Diverse Content</h3>
                                          <p>
                                              Magna onest also atornas adipiscine contacting pure ams agency rutrium morbie
                                              over habitasse
                                          </p>
                                      </div>
                                  </div>
                                  <div className="benefit-icon-items">
                                      <div className="icon">
                                          <img src="/assets/img/icon/27.svg" alt="img" />
                                      </div>
                                      <div className="content">
                                          <h3>Secure & Reliable</h3>
                                          <p>
                                              Magna onest also atornas adipiscine contacting pure ams agency rutrium morbie
                                              over habitasse
                                          </p>
                                      </div>
                                  </div>
                                  <div className="benefit-icon-items">
                                      <div className="icon">
                                          <img src="/assets/img/icon/27.svg" alt="img" />
                                      </div>
                                      <div className="content">
                                          <h3>Friendly Interface</h3>
                                          <p>
                                              Magna onest also atornas adipiscine contacting pure ams agency rutrium morbie
                                              over habitasse
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <div className="paralax-section-2 mt-0 fix bg-cover" style={{backgroundImage: 'url(\'/assets/img/paralax-bg-2.jpg\')'}}>
              <div className="video-text">
                  <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                      <i className="fas fa-play"></i>
                  </a>
                  <h3>Free training</h3>
              </div>
          </div>

    
          <section className="news-section fix section-padding-2">
              <div className="container">
                  <div className="section-title text-center">
                      <h6 className="wow fadeInUp">
                          <img src="/assets/img/star.png" alt="img" />
                          popular services
                      </h6>
                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Story <span>& <b>feedback</b></span>
                      </h2>
                  </div>
                  <div className="row">
                      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                          <div className="news-box-items-2">
                              <div className="news-image">
                                  <img src="/assets/img/news/04.jpg" alt="img" />
                              </div>
                              <div className="news-content">
                                  <ul className="post-cat">
                                      <li>
                                          <i className="fa-regular fa-calendar-days"></i>
                                          20 jul. 2024
                                      </li>
                                      <li>
                                          <i className="fa-regular fa-folder-open"></i>
                                          digital art
                                      </li>
                                  </ul>
                                  <h3><Link to="/news-details">Name fames pellen tesque
                                          tincidunt an vivamu duis
                                          tortor distract from the velie</Link></h3>
                                  <Link to="/news-details" className="icon">
                                      <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                  </Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                          <div className="news-box-items-2">
                              <div className="news-image">
                                  <img src="/assets/img/news/05.jpg" alt="img" />
                              </div>
                              <div className="news-content">
                                  <ul className="post-cat">
                                      <li>
                                          <i className="fa-regular fa-calendar-days"></i>
                                          20 jul. 2024
                                      </li>
                                      <li>
                                          <i className="fa-regular fa-folder-open"></i>
                                          digital art
                                      </li>
                                  </ul>
                                  <h3><Link to="/news-details">Suspen duine feugiat dolor
                                          behicula over interdum
                                          there wasd over page break </Link></h3>
                                  <Link to="/news-details" className="icon">
                                      <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                  </Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                          <div className="news-box-items-2">
                              <div className="news-image">
                                  <img src="/assets/img/news/05.jpg" alt="img" />
                              </div>
                              <div className="news-content">
                                  <ul className="post-cat">
                                      <li>
                                          <i className="fa-regular fa-calendar-days"></i>
                                          20 jul. 2024
                                      </li>
                                      <li>
                                          <i className="fa-regular fa-folder-open"></i>
                                          digital art
                                      </li>
                                  </ul>
                                  <h3><Link to="/news-details">Penatibus ipsum urna matis
                                          porttitor consequat risus
                                          elementum produse sodales</Link></h3>
                                  <Link to="/news-details" className="icon">
                                      <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                  </Link>
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
