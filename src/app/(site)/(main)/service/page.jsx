export const metadata = {
  title: "Services",
  description:
    "AI services from AiLogiQs: conversational AI agents, machine learning models, data analytics and process automation, built and deployed for your business.",
  alternates: { canonical: "/service" },
};

import Link from "next/link";
import { BenefitVisual } from "@/components/service/ServiceVisuals";

export default function Service() {
  return (
    <>
      <section className="service-section style-padding fix section-padding bg-cover"
              style={{backgroundImage: 'url(\'/assets/img/service/Pattern.png\')'}}>
              <div className="container">
                  <div className="section-title text-center">
                      <h6 className="wow fadeInUp">
                          <img src="/assets/img/star.png" alt="" />
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
                                  <img src="/assets/img/custom/business-planing-strategy.jpeg" alt="AI agent development" />
                              </div>
                              <div className="service-content">
                                  <h3>
                                      AI agent
                                      development
                                  </h3>
                                  <p>
                                      We build autonomous AI agents that answer customers, qualify leads and handle
                                      repetitive workflows around the clock, connected to the tools you already use.
                                  </p>
                                  {/* Was href="/service" -- a self-link, so the
                                      card's CTA reloaded the page it sat on.
                                      The homepage cards already point here, and
                                      this is the page that describes a single
                                      service in full. */}
                                  <Link href="/service-details" className="link-btn">more details <i
                                          className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-6 wow fadeInUp" data-wow-delay=".4s">
                          <div className="service-box-items">
                              <div className="service-image">
                                  <img src="/assets/img/custom/data-analysis-services.jpg" alt="Data analysis services" />
                              </div>
                              <div className="service-content">
                                  <h3>
                                      Data analysis
                                      services
                                  </h3>
                                  <p>
                                      Turn raw business data into clear dashboards and insights, so you can spot trends,
                                      forecast demand and make decisions backed by numbers.
                                  </p>
                                  {/* Was href="/service" -- a self-link, so the
                                      card's CTA reloaded the page it sat on.
                                      The homepage cards already point here, and
                                      this is the page that describes a single
                                      service in full. */}
                                  <Link href="/service-details" className="link-btn">more details <i
                                          className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-6 wow fadeInUp" data-wow-delay=".6s">
                          <div className="service-box-items">
                              <div className="service-image">
                                  <img src="/assets/img/custom/machine-learning-models.jpeg" alt="Machine learning models" />
                              </div>
                              <div className="service-content">
                                  <h3>
                                      Machine learning
                                      models
                                  </h3>
                                  <p>
                                      Custom-trained models for prediction, classification and recommendation, built on
                                      your data and deployed straight into your product.
                                  </p>
                                  {/* Was href="/service" -- a self-link, so the
                                      card's CTA reloaded the page it sat on.
                                      The homepage cards already point here, and
                                      this is the page that describes a single
                                      service in full. */}
                                  <Link href="/service-details" className="link-btn">more details <i
                                          className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-6 wow fadeInUp" data-wow-delay=".8s">
                          <div className="service-box-items mb-0">
                              <div className="service-image">
                                  <img src="/assets/img/custom/custom-artifical-solutions.jpeg" alt="Custom AI solutions" />
                              </div>
                              <div className="service-content">
                                  <h3>
                                      Custom artificial
                                      solutions
                                  </h3>
                                  <p>
                                      From chatbots to document processing, we design AI solutions around your exact
                                      business problem instead of forcing you into a one-size-fits-all tool.
                                  </p>
                                  {/* Was href="/service" -- a self-link, so the
                                      card's CTA reloaded the page it sat on.
                                      The homepage cards already point here, and
                                      this is the page that describes a single
                                      service in full. */}
                                  <Link href="/service-details" className="link-btn">more details <i
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
                          <span>AI-powered</span> creation
                      </h2>
                      <Link href="/contact" className="theme-btn style-2 wow fadeInUp" data-wow-delay=".5s"
                          style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>get a free consultation <i
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
                                          <img src="/assets/img/star.png" alt="" />
                                          our benefit
                                      </h6>
                                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                          Innovate the
                                          intelligence
                                          lead with AI
                                      </h2>
                                  </div>
                                  <p className="mt-3 mt-md-0">
                                      We help businesses adopt AI without the guesswork. Our team plans, builds and
                                      supports every solution, so you get measurable results instead of experiments
                                      that never leave the lab.
                                  </p>
                                  <Link href="/about" className="theme-btn wow fadeInUp" data-wow-delay=".5s">learn about us <i
                                          className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                              </div>
                          </div>
                          <div className="col-xl-4 col-lg-6">
                              {/*
                                Was a dark stock photo (benefit-image.jpg) -- a
                                black card with a yellow glow, the last
                                black-and-yellow surface on the route. Replaced
                                by a drawn figure in the brand palette; see
                                BenefitVisual in ServiceVisuals.jsx.
                              */}
                              <div className="benefit-image">
                                  <BenefitVisual />
                              </div>
                          </div>
                          <div className="col-xl-4 col-lg-6">
                              <div className="benefit-right-items">
                                  <div className="benefit-icon-items">
                                      <div className="icon">
                                          <img src="/assets/img/icon/27.svg" alt="" />
                                      </div>
                                      <div className="content">
                                          <h3>Diverse Content</h3>
                                          <p>
                                              Generate text, images, reports and replies from one platform, tailored to
                                              your brand voice.
                                          </p>
                                      </div>
                                  </div>
                                  <div className="benefit-icon-items">
                                      <div className="icon">
                                          <img src="/assets/img/icon/27.svg" alt="" />
                                      </div>
                                      <div className="content">
                                          <h3>Secure & Reliable</h3>
                                          <p>
                                              Your data stays private and protected, with systems built for consistent
                                              uptime and performance.
                                          </p>
                                      </div>
                                  </div>
                                  <div className="benefit-icon-items">
                                      <div className="icon">
                                          <img src="/assets/img/icon/27.svg" alt="" />
                                      </div>
                                      <div className="content">
                                          <h3>Friendly Interface</h3>
                                          <p>
                                              Simple, clean dashboards that your whole team can use without any technical
                                              training.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>


          {/*
            Was a "Free training" promo band: a play button linking out to
            YouTube on top of paralax-bg-2.jpg, which is the template's grey
            "1920X700" placeholder. The band now carries the client's own clip
            instead, and the heading is gone -- the clip is the whole band.
          */}
          <section className="service-video-section fix">
              <div className="container">
                  <div className="service-video-frame">
                      <video
                          className="service-video"
                          src="/assets/video/services-training-video.mp4"
                          poster="/assets/img/custom/services-training-poster.jpg"
                          width={1920}
                          height={1080}
                          style={{ aspectRatio: "1920 / 1080" }}
                          controls
                          preload="metadata"
                          playsInline
                          aria-label="AiLogiQs training session"
                      />
                  </div>
              </div>
          </section>
    </>
  );
}
