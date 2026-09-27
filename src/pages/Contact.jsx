import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | AiLogiQs";
  }, []);

  return (
    <>
      <Header />
      <section className="contact-section fix style-padding section-padding bg-cover"
              style={{backgroundImage: 'url(\'/assets/img/contact-bg.jpg\')'}}>
              <div className="container">
                  <div className="section-title ml-200">
                      <h6 className="wow fadeInUp">
                          <img src="/assets/img/star.png" alt="img" /> contact with us
                      </h6>
                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Contact our experts <br /> <span>any <b>assistance</b> you need</span>
                      </h2>
                  </div>
                  <div className="contact-wrapper">
                      <div className="row align-items-center">
                          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                              <div className="contact-image">
                                  <img src="/assets/img/contact-visual.png" alt="img" />
                              </div>
                          </div>
                          <div className="col-lg-8">
                              <div className="contact-form-items-area">
                                  <h2 className="wow fadeInUp" data-wow-delay=".3s">Get in touch</h2>
                                  <form action="contact.php" id="contact-form" method="POST" className="contact-form-items">
                                      <div className="row g-4">
                                          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                              <div className="form-clt">
                                                  <div className="icon">
                                                      <i className="fa-regular fa-user"></i>
                                                  </div>
                                                  <input type="text" name="name" id="name" placeholder="Your name" />
                                              </div>
                                          </div>
                                          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                              <div className="form-clt">
                                                  <div className="icon">
                                                      <i className="fa-regular fa-phone"></i>
                                                  </div>
                                                  <input type="text" name="phone" id="phone" placeholder="Phone" />
                                              </div>
                                          </div>
                                          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                              <div className="form-clt">
                                                  <div className="icon">
                                                      <i className="fa-regular fa-envelope"></i>
                                                  </div>
                                                  <input type="text" name="email" id="email12" placeholder="Email here" />
                                              </div>
                                          </div>
                                          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                              <div className="form-clt">
                                                  <div className="nice-select" tabIndex="0">
                                                      <span className="current">
                                                          Subject
                                                      </span>
                                                      <ul className="list">
                                                          <li data-value="1" className="option selected">
                                                              01
                                                          </li>
                                                          <li data-value="1" className="option">
                                                              02
                                                          </li>
                                                          <li data-value="1" className="option">
                                                              03
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                                              <div className="form-clt">
                                                  <textarea name="message" id="message"
                                                      placeholder="Write your comment"></textarea>
                                                  <div className="icon">
                                                      <i className="fa-regular fa-comment"></i>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-lg-7 wow fadeInUp" data-wow-delay=".5s">
                                              <button type="submit" className="theme-btn">
                                                  Send message <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                              </button>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <div className="map-items">
              <div className="googpemap">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
                      style={{border: '0'}} allowFullScreen="" loading="lazy"></iframe>
              </div>
          </div>

          <section className="contact-info-section fix section-padding">
              <div className="container">
                  <div className="section-title text-center">
                      <h6 className="wow fadeInUp">
                          <img src="/assets/img/star.png" alt="img" /> Quick support info
                      </h6>
                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Contact <span><b>information</b></span>
                      </h2>
                  </div>
                  <div className="row g-4">
                      <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                          <div className="contact-box-items-4">
                              <div className="icon">
                                  <i className="fa-sharp fa-light fa-location-dot"></i>
                              </div>
                              <div className="content">
                                  <h3>Location</h3>
                                  <p>
                                      2455 Prudence Street Quas Detroits, MI 48234
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                          <div className="contact-box-items-4">
                              <div className="icon">
                                  <i className="fa-light fa-envelope"></i>
                              </div>
                              <div className="content">
                                  <h3>Email us</h3>
                                  <p><a href="mailto:info@example.com">info@example.com</a></p>
                                  <p><a href="mailto:info@example.com">info@example.com</a></p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                          <div className="contact-box-items-4">
                              <div className="icon">
                                  <i className="fa-regular fa-phone"></i>
                              </div>
                              <div className="content">
                                  <h3>Free call</h3>
                                  <p><a href="tel:+023133695329">+02 (313) 369 5329</a></p>
                                  <p><a href="tel:+023133695329">+02 (313) 369 5329</a></p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                          <div className="contact-box-items-4">
                              <div className="icon">
                                  <i className="fa-regular fa-clock"></i>
                              </div>
                              <div className="content">
                                  <h3>Opening hour</h3>
                                  <p>
                                      Sun to Fri: 09AM - 5PM
                                      Saturday: Closed
                                  </p>
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
