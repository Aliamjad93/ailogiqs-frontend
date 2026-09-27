import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Team() {
  useEffect(() => {
    document.title = "Our Team | AiLogiQs";
  }, []);

  return (
    <>
      <Header />
      <section className="team-section fix style-padding section-padding bg-cover"
              style={{backgroundImage: 'url(\'/assets/img/team/team-bg.jpg\')'}}>
              <div className="container">
                  <div className="section-title ml-200">
                      <h6 className="wow fadeInUp">
                          <img src="/assets/img/star.png" alt="img" /> dedicated excutive
                      </h6>
                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Expert innovating <br />
                          <span>AI <b>driven visual</b> solutions</span>
                      </h2>
                  </div>
                  <div className="team-title-items">
                      <Link to="/contact" className="mt-3 mt-md-0 theme-btn wow fadeInUp" data-wow-delay=".5s">Get in touch <i
                              className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                      <p>
                          Duise sagittis accumsan magna on adipiscing laoreet ultrices magna consectetuer eiaculis rutrum
                          morbie habitasse orci libero porttitor scelerisque acid vivamus molestie mollise
                      </p>
                  </div>
                  <div className="row">
                      <div className="col-xl-3 col-lg-4 col-md-6">
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
                      <div className="col-xl-3 col-lg-4 col-md-6">
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
                      <div className="col-xl-3 col-lg-4 col-md-6">
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
                      <div className="col-xl-3 col-lg-4 col-md-6">
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
                      <div className="col-xl-3 col-lg-4 col-md-6">
                          <div className="team-box-items">
                              <div className="team-image">
                                  <img src="/assets/img/team/05.jpg" alt="img" />
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
                                  <h3>Belinda Hellers</h3>
                                  <p>Creative Designer</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6">
                          <div className="team-box-items">
                              <div className="team-image">
                                  <img src="/assets/img/team/06.jpg" alt="img" />
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
                                  <h3>Dorisde Wellas</h3>
                                  <p>Chief Executive</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6">
                          <div className="team-box-items">
                              <div className="team-image">
                                  <img src="/assets/img/team/07.jpg" alt="img" />
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
                                  <h3>Florence Craig</h3>
                                  <p>Project Manager</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6">
                          <div className="team-box-items">
                              <div className="team-image">
                                  <img src="/assets/img/team/08.jpg" alt="img" />
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
                                  <h3>Marty Dockery</h3>
                                  <p>Chief Engineer</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="testimonial-section section-padding fix section-bg pb-0">
              <div className="container">
                  <div className="testimonial-wrapper-3">
                      <div className="shape-1">
                          <img src="/assets/img/testimonial/quate-1.png" alt="img" />
                      </div>
                      <div className="row g-4">
                          <div className="col-xl-5 col-lg-6">
                              <div className="testimonial-image">
                                  <img src="/assets/img/testimonial/01.jpg" alt="img" />
                              </div>
                          </div>
                          <div className="col-xl-7 col-lg-6">
                              <div className="swiper testimonial-slider-3">
                                  <div className="swiper-wrapper">
                                      <div className="swiper-slide">
                                          <div className="testimonial-content">
                                              <div className="section-title">
                                                  <h6 className="wow fadeInUp">
                                                      <img src="/assets/img/star.png" alt="img" /> our testimonials
                                                  </h6>
                                                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                                      Clients
                                                      <span><b>feedback</b></span>
                                                  </h2>
                                              </div>
                                              <h3 className="mt-3 mt-md-0">
                                                  Potenti might turpis dictumst ridiculus pellentesque molestie consequat at
                                                  egestas eleifend nisle montes duis. Hack leo pellentesque malesuada, orcide
                                                  pretium blandit class sociosqu habitant duis convallis sed seme. Suscipit
                                                  one senectus nonum
                                              </h3>
                                              <div className="author-items">
                                                  <div className="image">
                                                      <img src="/assets/img/testimonial/client-10.jpg" alt="img" />
                                                  </div>
                                                  <div className="content">
                                                      <h3>Fredrick Grace</h3>
                                                      <span>sr. executive</span>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="swiper-slide">
                                          <div className="testimonial-content">
                                              <div className="section-title">
                                                  <h6 className="wow fadeInUp">
                                                      <img src="/assets/img/star.png" alt="img" /> our testimonials
                                                  </h6>
                                                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                                      Clients
                                                      <span><b>feedback</b></span>
                                                  </h2>
                                              </div>
                                              <h3 className="mt-3 mt-md-0">
                                                  Potenti might turpis dictumst ridiculus pellentesque molestie consequat at
                                                  egestas eleifend nisle montes duis. Hack leo pellentesque malesuada, orcide
                                                  pretium blandit class sociosqu habitant duis convallis sed seme. Suscipit
                                                  one senectus nonum
                                              </h3>
                                              <div className="author-items">
                                                  <div className="image">
                                                      <img src="/assets/img/testimonial/client-10.jpg" alt="img" />
                                                  </div>
                                                  <div className="content">
                                                      <h3>Fredrick Grace</h3>
                                                      <span>sr. executive</span>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="swiper-slide">
                                          <div className="testimonial-content">
                                              <div className="section-title">
                                                  <h6 className="wow fadeInUp">
                                                      <img src="/assets/img/star.png" alt="img" /> our testimonials
                                                  </h6>
                                                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                                      Clients
                                                      <span><b>feedback</b></span>
                                                  </h2>
                                              </div>
                                              <h3 className="mt-3 mt-md-0">
                                                  Potenti might turpis dictumst ridiculus pellentesque molestie consequat at
                                                  egestas eleifend nisle montes duis. Hack leo pellentesque malesuada, orcide
                                                  pretium blandit class sociosqu habitant duis convallis sed seme. Suscipit
                                                  one senectus nonum
                                              </h3>
                                              <div className="author-items">
                                                  <div className="image">
                                                      <img src="/assets/img/testimonial/client-10.jpg" alt="img" />
                                                  </div>
                                                  <div className="content">
                                                      <h3>Fredrick Grace</h3>
                                                      <span>sr. executive</span>
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

    
          <section className="message-section fix section-padding">
              <div className="container">
                  <div className="message-items">
                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Have any query
                          <span> send us <b>message</b></span>
                      </h2>
                      <div className="cta-img">
                          <img src="/assets/img/cta-image.jpg" alt="img" />
                      </div>
                  </div>
              </div>
          </section>
      <Footer />
    </>
  );
}
