import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Faq() {
  useEffect(() => {
    document.title = "FAQ | AiLogiQs";
  }, []);

  return (
    <>
      <Header />
      <section className="faq-section fix  style-padding section-padding  bg-cover"
              style={{backgroundImage: 'url(\'/assets/img/service/Pattern.png\')'}}>
              <div className="container">
                  <div className="faq-banner">
                      <div className="section-title text-center">
                          <h6>
                              <img src="/assets/img/star.png" alt="img" /> general FAQ
                          </h6>
                          <h2>
                              Clients <span><b>query</b></span>
                          </h2>
                      </div>
                      <div className="faq-image-banner">
                          <img src="/assets/img/faq/04.jpg" alt="img" />
                      </div>
                  </div>
                  <div className="faq-wrapper style-inner-page">
                      <div className="row g-4">
                          <div className="col-lg-4">
                              <div className="faq-sidebar">
                                  <div className="search-widget">
                                      <form action="#">
                                          <input type="text" placeholder="Search keyword..." />
                                          <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                                      </form>
                                  </div>
                                  <div className="contact-info-box">
                                      <div className="icon">
                                          <i className="fa-regular fa-phone-volume"></i>
                                      </div>
                                      <h2>
                                          Have any
                                          project
                                          <span>contact</span> us
                                      </h2>
                                      <Link to="/contact" className="theme-btn">contact us <i
                                              className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-8">
                              <div className="faq-content">
                                  <h2>General questions</h2>
                                  <div className="faq-accordion">
                                      <div className="accordion" id="accordion2">
                                          <div className="accordion-item">
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
                                          <div className="accordion-item">
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
                                          <div className="accordion-item">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button collapsed" type="button"
                                                      data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false"
                                                      aria-controls="faq3">
                                                      What languages does chatbot support?
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
                                          <div className="accordion-item">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button collapsed" type="button"
                                                      data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false"
                                                      aria-controls="faq3">
                                                      What is an AI Image and Video Generator?
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
                                          <div className="accordion-item">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button collapsed" type="button"
                                                      data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false"
                                                      aria-controls="faq4">
                                                      Can I customize the generated content?
                                                  </button>
                                              </h5>
                                              <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                  <div className="accordion-body">
                                                      I love how easy it is to use this chatbot. Whether I’m looking for
                                                      product recommendations or just need help with a task, it’s always there
                                                      with the perfect response. A true game-changer
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="accordion-item">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button collapsed" type="button"
                                                      data-bs-toggle="collapse" data-bs-target="#faq6" aria-expanded="false"
                                                      aria-controls="faq6">
                                                      What should I do if I encounter an error?
                                                  </button>
                                              </h5>
                                              <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                  <div className="accordion-body">
                                                      I love how easy it is to use this chatbot. Whether I’m looking for
                                                      product recommendations or just need help with a task, it’s always there
                                                      with the perfect response. A true game-changer
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <h2 className="mb-3 mt-5">General questions</h2>
                                  <div className="faq-accordion">
                                      <div className="accordion" id="accordion">
                                          <div className="accordion-item">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                      data-bs-target="#faq7" aria-expanded="true" aria-controls="faq7">
                                                      How does the chatbot improve over time?
                                                  </button>
                                              </h5>
                                              <div id="faq7" className="accordion-collapse show" data-bs-parent="#accordion">
                                                  <div className="accordion-body">
                                                      I love how easy it is to use this chatbot. Whether I’m looking for
                                                      product recommendations or just need help with a task, it’s always there
                                                      with the perfect response. A true game-changer
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="accordion-item">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button collapsed" type="button"
                                                      data-bs-toggle="collapse" data-bs-target="#faq8" aria-expanded="false"
                                                      aria-controls="faq8">
                                                      What makes your AI different from others?
                                                  </button>
                                              </h5>
                                              <div id="faq8" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                  <div className="accordion-body">
                                                      I love how easy it is to use this chatbot. Whether I’m looking for
                                                      product recommendations or just need help with a task, it’s always there
                                                      with the perfect response. A true game-changer
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="accordion-item">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button collapsed" type="button"
                                                      data-bs-toggle="collapse" data-bs-target="#faq9" aria-expanded="false"
                                                      aria-controls="faq9">
                                                      Do I need any skills to use the platform?
                                                  </button>
                                              </h5>
                                              <div id="faq9" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                  <div className="accordion-body">
                                                      I love how easy it is to use this chatbot. Whether I’m looking for
                                                      product recommendations or just need help with a task, it’s always there
                                                      with the perfect response. A true game-changer
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="accordion-item">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button collapsed" type="button"
                                                      data-bs-toggle="collapse" data-bs-target="#faq10" aria-expanded="false"
                                                      aria-controls="faq10">
                                                      What happens when subscription expires?
                                                  </button>
                                              </h5>
                                              <div id="faq10" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                  <div className="accordion-body">
                                                      I love how easy it is to use this chatbot. Whether I’m looking for
                                                      product recommendations or just need help with a task, it’s always there
                                                      with the perfect response. A true game-changer
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="accordion-item">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button collapsed" type="button"
                                                      data-bs-toggle="collapse" data-bs-target="#faq11" aria-expanded="false"
                                                      aria-controls="faq11">
                                                      Can I save and revisit my projects later?
                                                  </button>
                                              </h5>
                                              <div id="faq11" className="accordion-collapse collapse" data-bs-parent="#accordion">
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

    
          <section className="cta-discuss-section fix section-padding bg-cover"
              style={{backgroundImage: 'url(\'/assets/img/cta-discuss-bg.jpg\')'}}>
              <div className="container">
                  <div className="cta-discuss-content">
                      <h2>
                          Let’s discuss how we <br />
                          <span>support <b>creative</b> vision</span>
                      </h2>
                      <p>
                          Unlock the power of AI to generate the
                          high-quality images and videos in few seconds
                      </p>
                      <Link to="/contact" className="theme-btn">contact us <i
                              className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                  </div>
              </div>
          </section>
      <Footer />
    </>
  );
}
