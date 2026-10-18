
export const metadata = {
  // `absolute` because the root layout applies a "%s | AiLogiQs" template,
  // which would otherwise duplicate the brand name in the title.
  //
  // This page is the showcase for the AI sales-agent service, not the site's
  // homepage -- the black/yellow template homepage owns "/". Title and copy are
  // the client's to finish; the canonical is what has to be right.
  title: { absolute: "AI Chatbot & Sales Agent – AiLogiQs" },
  alternates: { canonical: "/ai-services/chatbot" },
};

import Link from "next/link";
import AgentVideo from "@/components/aiq/AgentVideo";
import SiteHeader from "@/components/site-header/SiteHeader";
import Footer from "@/components/site-footer/Footer";

export default function ChatbotLandingPage() {
  return (
    <>
      <SiteHeader variant="home2" />
      {/* `.aiq-home` is the scope the homepage-specific rules in
          ai-service.css hang off (popular-service cards, the AI-agent
          section, the hero ring). It stays on this page rather than on the
          group layout, because the details page must not inherit it. */}
      <div className="aiq-home">
        <section className="hero-secton section-padding hero-2 bg-cover"
                style={{backgroundImage: 'url(\'/assets/img/hero/hero-bg.jpg\')'}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="hero-content">
                                 <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                     <span>Building</span> <br /> Innovative AI Solutions{" "}
                                     <span>with Trust</span>
                                 </h1>
                                <p className="wow fadeInUp" data-wow-delay=".5s">
                                    From AI chatbots and agents to automation and data <br /> platforms — practical AI, built to grow your business.
                                </p>
                                <Link href="/portfolio/chatbot" className="theme-btn wow fadeInUp" data-wow-delay=".7s">explore now <i
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

            <section className="popular-service-section fix section-padding-2 aiq-tight-bottom">
                <div className="container">
                    <div className="section-title style-2 text-center">
                        <img src="/assets/img/circle-title.png" alt="img" className="wow fadeInUp" />
                        <h6 className="mt-3 wow fadeInUp" data-wow-delay=".3s">popular services</h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".5s">
                            Exclusive AI-Powered Idea & <span>Automation</span> Services
                        </h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="service-box-items-2">
                                <div className="row align-items-center g-4">
                                    <div className="col-lg-4">
                                        <img src="/assets/img/custom/business-planing-strategy.jpeg"
                                            alt="Business Strategy Planning" />
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="content">
                                            <h3>Business Strategy Planning</h3>
                                            <p>
                                                Practical AI strategy and automation roadmaps that align
                                                technology with your business goals.
                                            </p>
                                            <Link href="/portfolio/chatbot" className="link-btn">More Details <i
                                                    className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="service-box-items-2">
                                <div className="row align-items-center g-4">
                                    <div className="col-lg-4">
                                        <img src="/assets/img/custom/data-analysis-services.jpg"
                                            alt="Data Analysis Services" />
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="content">
                                            <h3>Data Analysis Services</h3>
                                            <p>
                                                Turn raw data into clear, decision-ready insight with
                                                dashboards and reporting.
                                            </p>
                                            <Link href="/portfolio/chatbot" className="link-btn">More Details <i
                                                    className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="service-box-items-2">
                                <div className="row align-items-center g-4">
                                    <div className="col-lg-4">
                                        <img src="/assets/img/custom/machine-learning-models.jpeg"
                                            alt="Machine Learning Models" />
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="content">
                                            <h3>Machine Learning Models</h3>
                                            <p>
                                                Purpose-built models for forecasting, classification and
                                                recommendations.
                                            </p>
                                            <Link href="/portfolio/chatbot" className="link-btn">More Details <i
                                                    className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="service-box-items-2">
                                <div className="row align-items-center g-4">
                                    <div className="col-lg-4">
                                        <img src="/assets/img/custom/custom-artifical-solutions.jpeg"
                                            alt="Custom Artificial Solutions" />
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="content">
                                            <h3>Custom Artificial Solutions</h3>
                                            <p>
                                                Tailored AI systems, chatbots and integrations built around
                                                your workflow.
                                            </p>
                                            <Link href="/portfolio/chatbot" className="link-btn">More Details <i
                                                    className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                        </div>
                                    </div>
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
                        <h6 className="mt-3 wow fadeInUp" data-wow-delay=".3s">ai sales agent</h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".5s">
                            AI-powered chatbot that <span>sells 24/7</span>
                        </h2>
                        <p className="wow fadeInUp" data-wow-delay=".6s">
                            One AI agent that answers, recommends and closes the order — in
                            the language your customer writes.
                        </p>
                    </div>
                    {/*
                      No `align-items-center` here on purpose. The default
                      `stretch` is what gives the media column the card grid's
                      height to fill, which is how the clip is held to the same
                      height as the four cards instead of forcing its own.
                    */}
                    <div className="row g-4">
                        <div className="col-xl-7">
                            <div className="row g-4 agent-cards">
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="service-box-items-2">
                                        <div className="icon">
                                            <img src="/assets/img/icon/03.svg" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h3>
                                                Sales, start to close
                                            </h3>
                                            <p>
                                                From the first hello to a confirmed order, all inside one chat.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="service-box-items-2">
                                        <div className="icon">
                                            <img src="/assets/img/icon/04.svg" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h3>
                                                Knows your products
                                            </h3>
                                            <p>
                                                Trained on your catalogue, sizes, stock and store policies.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="service-box-items-2">
                                        <div className="icon">
                                            <img src="/assets/img/icon/05.svg" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h3>
                                                Online 24/7
                                            </h3>
                                            <p>
                                                Replies in seconds — nights, weekends and holidays included.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="service-box-items-2">
                                        <div className="icon">
                                            <img src="/assets/img/icon/06.svg" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h3>
                                                Speaks their language
                                            </h3>
                                            <p>
                                                English, Urdu, Arabic and Roman Urdu, detected automatically.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 wow fadeInUp agent-media-col" data-wow-delay=".3s">
                            <div className="service-image-2">
                                <AgentVideo
                                    src="/assets/video/home-chatbot-video.mp4"
                                    poster="/assets/img/custom/agent-hero.png"
                                    label="The AiLogiQs agent answering a customer, recommending a product and confirming the order on WhatsApp"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="agent-cta-row text-center wow fadeInUp" data-wow-delay=".4s">
                        <Link href="/portfolio/chatbot" className="theme-btn agent-cta">
                            how it works <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="how-to-work-section fix section-padding-2 bg-cover"
                style={{backgroundImage: 'url(\'/assets/img/how-work-bg.jpg\')'}}>
                <div className="container">
                    <div className="section-title style-2 text-center">
                        <img src="/assets/img/circle-title-2.png" alt="img" className="wow fadeInUp" />
                        <h6 className="text-white mt-3 wow fadeInUp" data-wow-delay=".3s">how it works</h6>
                        <h2 className="text-white wow fadeInUp" data-wow-delay=".5s">
                            Understanding our <br />
                            AI <span>chatbot's</span> workflow
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
                                <h3>Connect WhatsApp</h3>
                                <p>Link your business number and the agent goes live in minutes.</p>
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
                                <h3>Teach your catalogue</h3>
                                <p>Add products, prices, delivery and return policies.</p>
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
                                <h3>It chats and sells</h3>
                                <p>Answers, recommends and closes the order — day or night.</p>
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
                                <h3>Track every chat</h3>
                                <p>Watch orders, replies and hand-offs from one dashboard.</p>
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
                                    <img src="/assets/img/custom/faq.png"
                                        alt="Customer chatting with the AI agent on WhatsApp" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="faq-content">
                                    <div className="section-title style-2">
                                        <h6 className="wow fadeInUp"><img src="/assets/img/circle-title.png" alt="img" />Customer query
                                        </h6>
                                         <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                             Frequently asked customers{" "}
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
                                                        Every conversation is logged and reviewed. The agent learns from the
                                                        questions your customers actually ask, so its replies and product
                                                        recommendations keep getting sharper over time.
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
                                                        Yes. Chats stay inside your own WhatsApp Business account and
                                                        everything is encrypted in transit and at rest. Your customer data is
                                                        never sold or shared, and you can export or delete it at any time.
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
                                                        English, Urdu, Arabic and Roman Urdu. The agent detects the language
                                                        your customer writes in — or speaks in a voice note — and replies in the
                                                        same one, with nothing for you to configure.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item wow fadeInUp" data-wow-delay=".8s">
                                                <h5 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false"
                                                        aria-controls="faq4">
                                                        How accurate are the chatbot's answers?
                                                    </button>
                                                </h5>
                                                <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <div className="accordion-body">
                                                        It answers only from the catalogue, prices and policies you give it,
                                                        so it will not invent a product or a price. When it is unsure it asks a
                                                        follow-up question or passes the chat to your team.
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

      </div>
      <Footer variant="home2" />

    </>
  );
}
