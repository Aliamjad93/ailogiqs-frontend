export const metadata = {
  title: "Projects",
  description:
    "Selected work from AiLogiQs — AI agents, machine-learning models and data products we have designed, built and shipped for our clients.",
  alternates: { canonical: "/projects" },
};

import Link from "next/link";

/*
  The projects page is deliberately thin: real work only.

  The template shipped five category tabs (show All / creative / anime / animal /
  graphic) holding around fifty filler cards -- stock artwork, invented titles,
  three pagination links and a counter block that read "236 Finished Projects"
  three times over. None of it described AiLogiQs work, so all of it is gone.

  What is left are the two real services, and each card doubles as the only way
  into its showcase: neither /projects/chatbot nor /projects/bee-virus-
  detection has a nav entry of its own, so these cards are the routes in.

  Add more cards by adding an object to SERVICES. Keep the markup shape
  (col-xl-4 col-lg-6 col-md-6 > .portfolio-card-items > .portfolio-image +
  .portfolio-content) and artwork at 420x505 -- 840x1010 at 2x, like
  custom/agent-portfolio.jpg -- so a row of cards stays even.

  Note the card renders narrower than its column: `body.route-projects
  .portfolio-card-items` in overrides.css caps it at 340px and centres it. The
  artwork is composed larger than it displays on purpose -- it is headroom for
  the cap being raised, or for a dense display where 340 CSS pixels is more than
  340 device pixels.
*/
const SERVICES = [
  {
    img: "/assets/img/custom/agent-portfolio.jpg",
    alt: "AI chatbot and sales agent handling a customer order",
    title: "AI Chatbot & Sales Agent",
    href: "/projects/chatbot",
    desc: "An agent that answers product and order questions from your own catalogue and order data, then hands a qualified conversation to a human with the context already written down.",
  },
  {
    img: "/assets/img/custom/beelens-portfolio.jpg",
    alt: "BeeLens analysing a hive video frame and flagging a Varroa mite and a deformed wing",
    title: "BeeLens — Bee Virus Detection",
    href: "/projects/bee-virus-detection",
    desc: "Frame-level hive inspection from a phone photo or a short video. It flags Varroa, deformed wing and other brood problems while the frame is still in your hands.",
  },
];

export default function Projects() {

  return (
    <>
      {/*
        The breadcrumb banner ("our work" / "AI products we've shipped") is
        gone at the user's request -- it repeated the section title sitting
        directly beneath it.

        Its h1 text survives as a visually hidden heading on purpose. The
        section title below is an h2, so without this the page would ship with
        no h1 at all; and "AI products we've shipped" is still what the page is,
        which is why the metadata above says the same thing. Changing the h2 to
        an h1 instead is not a drop-in: the global h1 is 150px/900 against the
        h2's 65px/700, and `.section-title h2 span/b` (the Marcellus face and
        the yellow accent) are keyed to h2.
      */}
      <h1 className="sr-only">AI products we’ve shipped</h1>

          <section className="portfolio-section section-padding section-bg">
              <div className="container">
                  {/* The page used to open straight onto two cards with no copy
                      at all, which read as an unfinished grid. This intro says
                      what the cards are and what opening one gets you. */}
                  <div className="section-title text-center mb-5">
                      <h6 className="wow fadeInUp">
                          <img src="/assets/img/star.png" alt="" /> selected work
                      </h6>
                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Built, shipped, <span>still <b>running</b></span>
                      </h2>
                      <p className="wow fadeInUp" data-wow-delay=".5s">
                          Each card opens the build itself: what the product does, the agent or
                          model behind it, and what changed for the client once it went live.
                      </p>
                  </div>
                  {/* Centred so two cards sit as a balanced pair rather than
                      hanging off the left third of a three-column grid. */}
                  <div className="row justify-content-center">
                      {SERVICES.map((s) => (
                          <div className="col-xl-4 col-lg-6 col-md-6" key={s.href}>
                              <div className="portfolio-card-items">
                                  <Link
                                      href={s.href}
                                      className="portfolio-image d-block"
                                      aria-label={`View ${s.title}`}
                                  >
                                      <img src={s.img} alt={s.alt} />
                                  </Link>
                                  <div className="portfolio-content">
                                      <h3><Link href={s.href}>{s.title}</Link></h3>
                                      <p>{s.desc}</p>
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
              style={{backgroundImage: 'url(\'/assets/img/cta-dark-bg.svg\')'}}>
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
                              className="fa-solid fa-arrow-up-right"></i></Link>
                  </div>
              </div>
          </section>
    </>
  );
}
