export const metadata = {
  title: "Contact Us",
  description:
    "Contact AiLogiQs to discuss an AI agent, machine learning or data analytics project. Tell us what you are building and we will get back to you.",
  alternates: { canonical: "/contact" },
};

import ContactForm from "@/components/contact/ContactForm";
import { CONTACT } from "@/content/contact";

export default function Contact() {

  return (
    <>
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
                                  <ContactForm />
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
                                  <i className="fa-regular fa-location-dot"></i>
                              </div>
                              <div className="content">
                                  <h3>Location</h3>
                                  <p>{CONTACT.address}</p>
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
                                  <p><a href={CONTACT.emailHref}>{CONTACT.email}</a></p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                          <div className="contact-box-items-4">
                              <div className="icon">
                                  <i className="fa-regular fa-phone"></i>
                              </div>
                              <div className="content">
                                  <h3>Call us</h3>
                                  <p><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                          <div className="contact-box-items-4">
                              <div className="icon">
                                  <i className="fa-regular fa-clock"></i>
                              </div>
                              <div className="content">
                                  <h3>Opening hours</h3>
                                  <p>{CONTACT.hours}</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </>
  );
}
