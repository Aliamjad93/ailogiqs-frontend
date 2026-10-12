export const metadata = {
  title: "Contact Us",
  description:
    "Contact AiLogiQs to discuss an AI agent, machine learning or data analytics project. Tell us what you are building and we will get back to you.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {

  return (
    <>
      {/*
        No cover photo. This band used /assets/img/contact-bg.jpg -- a near-black
        photograph (mean brightness 21/255) -- which made it the only dark section
        on an otherwise light page. Removing it leaves the page background, and
        the section's copy is styled dark in overrides.css to match.
        `bg-cover` is kept: it contributes position:relative, which is harmless
        here and removing it would be a layout risk for no benefit.
      */}
      <section className="contact-section fix style-padding section-padding bg-cover">
              <div className="container">
                  <div className="section-title ml-200">
                      <h6 className="wow fadeInUp">
                          {/* The homepage's eyebrow mark. /assets/img/star.png
                              is the template's yellow one (avg rgb 238,250,82);
                              circle-title.png is the indigo mark the homepage
                              uses, so the eyebrow matches it. */}
                          <img src="/assets/img/circle-title.png" alt="" /> contact with us
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
    src="https://maps.google.com/maps?q=Orchard+Heights,+Central+Block,+Bahria+Orchard,+Lahore&z=16&output=embed"
    title="AiLogiQs office location"
    style={{border: '0'}}
    allowFullScreen=""
    loading="lazy"></iframe>
              </div>
          </div>

          <section className="contact-info-section fix section-padding">
              <div className="container">
                  <div className="section-title text-center">
                      <h6 className="wow fadeInUp">
                          <img src="/assets/img/circle-title.png" alt="" /> Quick support info
                      </h6>
                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Contact <span><b>information</b></span>
                      </h2>
                  </div>
                  <div className="row g-4">
                      <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                          <div className="contact-box-items-4">
                              <div className="icon">
                                  {/* `fa-regular`, not `fa-light`: the light face is
                                      a 383 KB webfont that nothing else on the site
                                      needs, so these two icons alone were pulling
                                      it in on this page. */}
                                  <i className="fa-regular fa-location-dot"></i>
                              </div>
                              <div className="content">
                                  <h3>Location</h3>
                                  <p>
                                      Bahria Orchard, Central Block, Orchard Heights, 4th Floor, Office No. 302
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                          <div className="contact-box-items-4">
                              <div className="icon">
                                  <i className="fa-regular fa-envelope"></i>
                              </div>
                              <div className="content">
                                  <h3>Email us</h3>
                                  <p><a href="mailto:bd@ailogiqs.com">bd@ailogiqs.com</a></p>
                                  {/* <p><a href="mailto:bd@ailogiqs.com">bd@ailogiqs.com</a></p> */}
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
                                  <p><a href="tel:+932016146851">+932016146851</a></p>
                                  {/* <p><a href="tel:+932016146851">+932016146851</a></p> */}
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
    </>
  );
}
