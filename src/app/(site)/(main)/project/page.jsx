export const metadata = {
  title: "Portfolio",
  description:
    "Selected work from AiLogiQs — AI agents, machine-learning models and data products we have designed, built and shipped for our clients.",
  alternates: { canonical: "/project" },
};

import Link from "next/link";

/*
  The portfolio page is deliberately thin: real work only.

  The template shipped five category tabs (show All / creative / anime / animal /
  graphic) holding around fifty filler cards -- stock artwork, invented titles,
  three pagination links and a counter block that read "236 Finished Projects"
  three times over. None of it described AiLogiQs work, so all of it is gone.

  What is left are the two real services, and each card doubles as the only way
  into its showcase: neither /portfolio/chatbot nor /portfolio/bee-virus-
  detection has a nav entry of its own, so these cards are the routes in.

  Add more cards by adding an object to SERVICES. Keep the markup shape
  (col-xl-4 col-lg-6 col-md-6 > .portfolio-card-items > .portfolio-image +
  .portfolio-content) and artwork at 420x505 -- 840x1010 at 2x, like
  custom/agent-portfolio.jpg -- so a row of cards stays even.

  Note the card renders narrower than its column: `body.route-project
  .portfolio-card-items` in overrides.css caps it at 340px and centres it. The
  artwork is composed larger than it displays on purpose -- it is headroom for
  the cap being raised, or for a dense display where 340 CSS pixels is more than
  340 device pixels.
*/
const SERVICES = [
  {
    img: "/assets/img/custom/agent-portfolio.jpg",
    alt: "AI chatbot and sales agent handling a customer order",
    eyebrow: "ai sales agent",
    title: "AI Chatbot & Sales Agent",
    href: "/portfolio/chatbot",
  },
  {
    img: "/assets/img/custom/beelens-portfolio.jpg",
    alt: "BeeLens analysing a hive video frame and flagging a Varroa mite and a deformed wing",
    eyebrow: "ai hive diagnostics",
    title: "BeeLens — Bee Virus Detection",
    href: "/portfolio/bee-virus-detection",
  },
];

export default function Project() {

  return (
    <>
      <div className="breadcrumb-wrapper bg-cover" style={{backgroundImage: 'url(\'/assets/img/breadcrumb-bg.jpg\')'}}>
              <div className="container">
                  <div className="page-heading">
                      <h6 className="wow fadeInUp">
                          <img src="/assets/img/star.png" alt="img" /> our work
                      </h6>
                      <h1 className="wow fadeInUp" data-wow-delay=".3s">AI products we’ve <span>shipped</span></h1>
                  </div>
              </div>
          </div>

    
          <section className="portfolio-section section-padding section-bg">
              <div className="container">
                  {/* Centred so two cards sit as a balanced pair rather than
                      hanging off the left third of a three-column grid. */}
                  <div className="row justify-content-center">
                      {SERVICES.map((s) => (
                          <div className="col-xl-4 col-lg-6 col-md-6" key={s.href}>
                              <div className="portfolio-card-items">
                                  <div className="portfolio-image">
                                      <img src={s.img} alt={s.alt} />
                                      <Link href={s.href} className="lets-circle">
                                          <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                          View service
                                      </Link>
                                  </div>
                                  <div className="portfolio-content">
                                      <h6><span>//</span> {s.eyebrow}</h6>
                                      <h3><Link href={s.href}>{s.title}</Link></h3>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>

    
          {/*
            PLACEHOLDER NUMBERS -- swap in the client's real figures.

            The template shipped "236 Finished Projects" three times; these at
            least describe what AiLogiQs actually sells. The same block appears on
            "/" and "/about", so those two need the same treatment or the three
            pages will disagree with each other.
          */}
          <div className="counter-section section-padding fix">
              <div className="container">
                  <div className="counter-wrapper">
                      <div className="counter-items wow fadeInUp" data-wow-delay=".3s">
                          <div className="icon">
                              <img src="/assets/img/icon/01.svg" alt="img" />
                          </div>
                          <div className="content">
                              <h2><span className="count">120</span></h2>
                              <p>AI Projects Delivered</p>
                          </div>
                      </div>
                      <div className="counter-items wow fadeInUp" data-wow-delay=".5s">
                          <div className="icon">
                              <img src="/assets/img/icon/01.svg" alt="img" />
                          </div>
                          <div className="content">
                              <h2><span className="count">45</span></h2>
                              <p>Businesses Automated</p>
                          </div>
                      </div>
                      <div className="counter-items wow fadeInUp" data-wow-delay=".7s">
                          <div className="icon">
                              <img src="/assets/img/icon/01.svg" alt="img" />
                          </div>
                          <div className="content">
                              <h2><span className="count">12</span></h2>
                              <p>Industries Served</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

    
          <section className="cta-discuss-section fix section-padding bg-cover"
              style={{backgroundImage: 'url(\'/assets/img/cta-discuss-bg.jpg\')'}}>
              <div className="container">
                  <div className="cta-discuss-content">
                      <h2>
                          Ready to put AI to <br />
                          <span>work in <b>your</b> business?</span>
                      </h2>
                      <p>
                          Tell us what you are trying to automate and we will show you what
                          an AI agent, a machine-learning model or a data pipeline could do
                          for it.
                      </p>
                      <Link href="/contact" className="theme-btn">get a free consultation <i
                              className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                  </div>
              </div>
          </section>
    </>
  );
}
