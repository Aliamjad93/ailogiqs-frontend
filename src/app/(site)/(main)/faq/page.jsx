export const metadata = {
  title: "FAQ",
  description:
    "Answers to the questions we get most: what the AiLogiQs plans cost, what the AI agents do, how a build is scoped and delivered, and how your data is handled.",
  alternates: { canonical: "/faq" },
};

import Link from "next/link";
import FaqBrowser from "@/components/faq/FaqBrowser";
/*
  The answers live in src/content/faqs.js, shared with the homepage FAQ and
  the pricing page. This page used to ship twelve template questions -- all of
  them about a generic chatbot, all of them answered with the same paragraph
  ("I love how easy it is to use this chatbot...") -- so it described nothing
  AiLogiQs actually does.
*/
import { FAQ_SECTIONS } from "@/content/faqs";

export default function Faq() {
  return (
    <>
      <section className="faq-section fix  style-padding section-padding  bg-cover"
              style={{backgroundImage: 'url(\'/assets/img/service/Pattern.png\')'}}>
              <div className="container">
                  <div className="faq-banner">
                      <div className="section-title text-center">
                          <h6>
                              <img src="/assets/img/star.png" alt="img" /> questions, answered
                          </h6>
                          <h2>
                              Everything you want to <span><b>know</b></span>
                          </h2>
                      </div>
                      {/* Banner removed: faq/04.jpg was a grey "1170X400"
                          placeholder, and .faq-image-banner is only a margin
                          wrapper around its <img>, so nothing else depended
                          on it. */}
                  </div>
                  <FaqBrowser sections={FAQ_SECTIONS} />
              </div>
          </section>

      <section className="cta-discuss-section fix section-padding bg-cover"
              style={{backgroundImage: 'url(\'/assets/img/cta-dark-bg.svg\')'}}>
              <div className="container">
                  <div className="cta-discuss-content">
                      <h2>
                          Tell us what you want <br />
                          <span>to <b>automate</b></span>
                      </h2>
                      <p>
                          A support inbox, a sales funnel, a report nobody has time to
                          build. We will come back with a scoped plan, a timeline and a
                          clear price.
                      </p>
                      <Link href="/contact" className="theme-btn">contact us <i
                              className="fa-solid fa-arrow-up-right"></i></Link>
                  </div>
              </div>
          </section>
    </>
  );
}
