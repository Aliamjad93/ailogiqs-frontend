export const metadata = {
  title: "Our Team",
};

import Link from "next/link";
export default function Team() {

  return (
    <>
      {/* team-bg.jpg was deleted, so this section no longer carries a
          background image. */}
      <section className="team-section fix style-padding section-padding">
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
                      <Link href="/contact" className="mt-3 mt-md-0 theme-btn wow fadeInUp" data-wow-delay=".5s">Get in touch <i
                              className="fa-solid fa-arrow-up-right"></i></Link>
                      <p>
                          Duise sagittis accumsan magna on adipiscing laoreet ultrices magna consectetuer eiaculis rutrum
                          morbie habitasse orci libero porttitor scelerisque acid vivamus molestie mollise
                      </p>
                  </div>
                  {/* The eight team cards that stood here are gone: every one
                      was an invented person on a placeholder portrait
                      (team/01-08.jpg), and those files have been deleted. The
                      section keeps its heading and intro; add real people back
                      as .team-box-items when there are any. */}
              </div>
          </section>

    
          <section className="testimonial-section section-padding fix section-bg pb-0">
              <div className="container">
                  <div className="testimonial-wrapper-3">
                      {/* Decorative quote-mark shape removed: quate-1.png is a
                          blank white 491x363 rectangle, so it painted nothing. */}
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
                      {/* cta-image.jpg was deleted, so the decorative
                          .cta-img block is gone with it. */}
                  </div>
              </div>
          </section>
    </>
  );
}
