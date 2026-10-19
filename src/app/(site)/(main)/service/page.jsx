export const metadata = {
  title: "Services",
  description:
    "AI services from AiLogiQs: conversational AI agents, machine learning models, data analytics and process automation, built and deployed for your business.",
  alternates: { canonical: "/service" },
};

import Link from "next/link";

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
                      <div className="col-12 wow fadeInUp" data-wow-delay=".2s">
                          <div className="service-box-items">
                              <div className="service-image">
                                  <img src="/assets/img/service/01.jpeg" alt="AI agent development" />
                              </div>
                              <div className="service-content">
                                  <h3>
                                      AI agent
                                      development
                                  </h3>
                                  <p>
                                      We build autonomous AI agents that think, plan and act on your behalf, handling tasks
                                      like customer support, scheduling, research and workflow management. Powered by the
                                      latest large language models, our agents work 24/7 and learn to get better over time.
                                  </p>
                                  <h4>Trending features</h4>
                                  <p className="trending-list">
                                      <span>Agentic AI workflows</span>
                                      <span>Multi-agent systems</span>
                                      <span>LLM-powered assistants (GPT, Claude, Gemini)</span>
                                      <span>Tool and API integration</span>
                                      <span>Voice-enabled agents</span>
                                      <span>WhatsApp and web chatbot agents</span>
                                  </p>
                                  <Link href="/service" className="link-btn">more details <i
                                          className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-12 wow fadeInUp" data-wow-delay=".4s">
                          <div className="service-box-items">
                              <div className="service-image">
                                  <img src="/assets/img/service/03.jpeg" alt="Machine learning models" />
                              </div>
                              <div className="service-content">
                                  <h3>
                                      Machine learning
                                      models
                                  </h3>
                                  <p>
                                      We design, train and deploy custom machine learning models that predict trends, detect
                                      patterns and automate decisions using your own data. From forecasting sales to spotting
                                      fraud, our models turn information into a competitive advantage.
                                  </p>
                                  <h4>Trending features</h4>
                                  <p className="trending-list">
                                      <span>Predictive analytics</span>
                                      <span>Recommendation engines</span>
                                      <span>Fraud and anomaly detection</span>
                                      <span>NLP and sentiment analysis</span>
                                      <span>Computer vision</span>
                                      <span>Fine-tuned LLMs</span>
                                      <span>MLOps for continuous model improvement</span>
                                  </p>
                                  <Link href="/service" className="link-btn">more details <i
                                          className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-12 wow fadeInUp" data-wow-delay=".6s">
                          <div className="service-box-items">
                              <div className="service-image">
                                  <img src="/assets/img/service/04.jpeg" alt="Custom AI solutions" />
                              </div>
                              <div className="service-content">
                                  <h3>
                                      Custom AI
                                      solutions
                                  </h3>
                                  <p>
                                      Every business is different, so we build AI tailored to your exact goals, processes and
                                      systems. We handle everything from strategy and development to integration with your
                                      CRM, ERP, website or apps.
                                  </p>
                                  <h4>Trending features</h4>
                                  <p className="trending-list">
                                      <span>Generative AI apps</span>
                                      <span>RAG (AI that answers from your company documents)</span>
                                      <span>AI-powered automation</span>
                                      <span>Private and secure AI deployment</span>
                                      <span>Seamless API integration</span>
                                      <span>Scalable cloud solutions</span>
                                  </p>
                                  <Link href="/service" className="link-btn">more details <i
                                          className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-12 wow fadeInUp" data-wow-delay=".8s">
                          <div className="service-box-items mb-0">
                              <div className="service-image">
                                  <img src="/assets/img/service/02.jpeg" alt="Data analysis services" />
                              </div>
                              <div className="service-content">
                                  <h3>
                                      Data analysis
                                      services
                                  </h3>
                                  <p>
                                      We transform raw data into clear insights, interactive dashboards and reports that drive
                                      smarter decisions. Our experts clean, analyze and visualize your data so you always know
                                      what's working and what's next.
                                  </p>
                                  <h4>Trending features</h4>
                                  <p className="trending-list">
                                      <span>Real-time dashboards</span>
                                      <span>AI-powered business intelligence</span>
                                      <span>Predictive forecasting</span>
                                      <span>Natural-language data queries ("ask your data")</span>
                                      <span>Data cleaning and pipelines</span>
                                      <span>Power BI and Tableau reporting</span>
                                  </p>
                                  <Link href="/service" className="link-btn">more details <i
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
                              <div className="benefit-image">
                                  <img src="/assets/img/benefit-image.jpg" alt="Team working with AI tools" />
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
                          <img src="/assets/img/star.png" alt="" />
                          latest insights
                      </h6>
                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Story <span>& <b>feedback</b></span>
                      </h2>
                  </div>
                  <div className="row">
                      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                          <div className="news-box-items-2">
                              <div className="news-image">
                                  <img src="/assets/img/news/04.jpg" alt="AI agents in customer support" />
                              </div>
                              <div className="news-content">
                                  <ul className="post-cat">
                                      <li>
                                          <i className="fa-regular fa-calendar-days"></i>
                                          12 sep. 2026
                                      </li>
                                      <li>
                                          <i className="fa-regular fa-folder-open"></i>
                                          ai agents
                                      </li>
                                  </ul>
                                  <h3><Link href="/news-details">How AI agents cut customer
                                          support response times
                                          from hours to seconds</Link></h3>
                                  <Link href="/news-details" className="icon">
                                      <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                  </Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                          <div className="news-box-items-2">
                              <div className="news-image">
                                  <img src="/assets/img/news/05.jpg" alt="Business automation" />
                              </div>
                              <div className="news-content">
                                  <ul className="post-cat">
                                      <li>
                                          <i className="fa-regular fa-calendar-days"></i>
                                          28 aug. 2026
                                      </li>
                                      <li>
                                          <i className="fa-regular fa-folder-open"></i>
                                          automation
                                      </li>
                                  </ul>
                                  <h3><Link href="/news-details">Five everyday business tasks
                                          you can automate with AI
                                          starting this week</Link></h3>
                                  <Link href="/news-details" className="icon">
                                      <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                  </Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                          <div className="news-box-items-2">
                              <div className="news-image">
                                  <img src="/assets/img/news/06.jpg" alt="Client success story" />
                              </div>
                              <div className="news-content">
                                  <ul className="post-cat">
                                      <li>
                                          <i className="fa-regular fa-calendar-days"></i>
                                          10 aug. 2026
                                      </li>
                                      <li>
                                          <i className="fa-regular fa-folder-open"></i>
                                          case study
                                      </li>
                                  </ul>
                                  <h3><Link href="/news-details">Client story: how a retail
                                          brand doubled its leads
                                          with a custom AI assistant</Link></h3>
                                  <Link href="/news-details" className="icon">
                                      <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </>
  );
}
