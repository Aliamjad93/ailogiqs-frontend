export const metadata = {
  title: "Pricing",
  description:
    "AiLogiQs pricing: start free, then move to AI Starter, AI Growth or AI Pro. AI agents, order taking, COD confirmation, follow-ups and Shopify — priced in PKR.",
  alternates: { canonical: "/pricing" },
};

import Link from "next/link";
import Check from "@/components/shared/Check";
/*
  The plan cards, the note under them and the FAQ answers are read from
  src/content, the same place the homepage pricing section reads from. This
  page used to carry the theme template's own cards -- Standard $25,
  Professional $29, Business $49, Enterprise $54, all four with the same four
  filler lines -- while the homepage showed the real plans. Anyone who compared
  the two pages saw two different companies.
*/
import { PLANS, PRICING_NOTE, PLAN_INCLUDES } from "@/content/pricing";
import { PRICING_FAQS } from "@/content/faqs";

export default function Pricing() {
  return (
    <>
      <section className="pricing-section pricing-home fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="wow fadeInUp">
              <img src="/assets/img/star.png" alt="" /> pricing
            </h6>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Start free, <br />
              <span>grow when it <b>pays</b></span>
            </h2>
          </div>
          <div className="row">
            {PLANS.map((plan, i) => (
              <div
                className="col-xxl-3 col-xl-4 col-lg-4 col-md-6"
                key={plan.name}
              >
                <div
                  className="pricing-box-items wow fadeInUp"
                  data-wow-delay={`${(0.2 * (i + 1)).toFixed(1)}s`}
                >
                  <div className="icon">
                    <img src="/assets/img/icon/02.svg" alt="" />
                  </div>
                  <div className="pricing-header">
                    <h3>{plan.name}</h3>
                    <p>{plan.blurb}</p>
                    <h2>{plan.price}</h2>
                  </div>
                  <ul className="pricing-list">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <Check />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pricing-button">
                    <Link href="/contact" className="theme-btn">
                      {plan.cta} <i className="fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="pricing-note wow fadeInUp" data-wow-delay=".5s">
            {PRICING_NOTE}
          </p>
        </div>
      </section>

      {/*
        What a plan actually contains. The cards above sell volume — this
        answers the question the cards cannot: what happens on the day the
        agent goes live, whichever plan was bought.
      */}
      <section className="pricing-section fix section-padding pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="section-title">
                <h6 className="wow fadeInUp">
                  <img src="/assets/img/star.png" alt="" /> what you get
                </h6>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  The same agent, <br />
                  <span>on <b>every</b> plan</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  Plans differ in volume, seats and integrations — not in the quality of
                  the build. Every plan gets the same agent, trained on your own
                  products and FAQs, and the same team behind it after launch.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="pricing-box-items wow fadeInUp" data-wow-delay=".3s">
                <div className="pricing-header">
                  <h3>Included in every plan</h3>
                  <p>What the agent does from day one</p>
                </div>
                <ul className="pricing-list">
                  {PLAN_INCLUDES.map((item) => (
                    <li key={item}>
                      <Check />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-section-4 fix">
        <div className="container">
          <div className="cta-wrapper mt-0 bg-cover" style={{backgroundImage: 'url(\'/assets/img/cta-bg.jpg\')'}}>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Ready to put an agent <br />
              <span></span> on your team?
            </h2>
            <Link href="/contact" className="theme-btn style-2 wow fadeInUp" data-wow-delay=".5s"
              style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>book a consultation <i
                className="fa-solid fa-arrow-up-right"></i></Link>
          </div>
        </div>
      </div>

      <section className="faq-section fix section-padding section-bg">
        <div className="container">
          <div className="faq-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="faq-image-4 wow fadeInUp" data-wow-delay=".3s">
                  <img src="/assets/img/faq/03.jpg" alt="Chat conversation with an AiLogiQs agent" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="section-title">
                    <h6>
                      <img src="/assets/img/star.png" alt="" /> pricing questions
                    </h6>
                    <h2>
                      Frequently asked <span><b>questions</b></span>
                    </h2>
                  </div>
                  <div className="faq-accordion">
                    <div className="accordion" id="pricing-accordion">
                      {PRICING_FAQS.map((item, i) => {
                        const id = `pricing-faq-${i + 1}`;
                        const open = i === 0;
                        return (
                          <div className="accordion-item wow fadeInUp"
                            data-wow-delay={`${(0.2 * (i + 1)).toFixed(1)}s`}
                            key={item.question}
                          >
                            <h5 className="accordion-header">
                              <button className={`accordion-button ${open ? "" : "collapsed"}`} type="button"
                                data-bs-toggle="collapse" data-bs-target={`#${id}`}
                                aria-expanded={open ? "true" : "false"} aria-controls={id}>
                                {item.question}
                              </button>
                            </h5>
                            <div id={id} className={`accordion-collapse ${open ? "show" : "collapse"}`}
                              data-bs-parent="#pricing-accordion">
                              <div className="accordion-body">
                                {item.answer}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
