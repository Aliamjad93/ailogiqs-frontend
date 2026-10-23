export const metadata = {
  // `absolute` because the root layout applies a "%s | AiLogiQs" template,
  // which would otherwise duplicate the brand name on the homepage title.
  title: { absolute: "AiLogiQs – AI Startup & Technology" },
  alternates: { canonical: "/" },
};


import Link from "next/link";
import ScrollCue from "@/components/layout/ScrollCue";
import Check from "@/components/shared/Check";
/*
  The plans and the FAQ answers live in src/content so the homepage, /pricing
  and /faq all read from the same copy -- a plan that changes on one page used
  to change on one page only.
*/
import { PLANS, PRICING_NOTE } from "@/content/pricing";
import { HOME_FAQS } from "@/content/faqs";

export default function HomeOne() {

  return (
    <>
      <section className="hero-secton hero-1 bg-cover" style={{backgroundImage: 'url(\'/assets/img/hero/hero-bg-3.png\')'}}>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="hero-content">
                              <div className="color-bg">
                                  <img src="/assets/img/hero/color-bg.png" alt="img" />
                              </div>
                              <h1 className="wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.1s">
                                  <span className="hero-heading-line">
                                      {/*
                                        The eyebrow sits inside the headline so it
                                        can share the first line's right edge --
                                        "INTELLIGENT SOLUTION" ends exactly where
                                        "INNOVATIVE" ends at every width.
                                      */}
                                      <span className="hero-eyebrow wow fadeInUp">Intelligent Solution</span>
                                      Innovative
                                  </span>
                                  <br />
                                  <b>AI</b> <span className="text-2">solutions</span>
                              </h1>
                          </div>
                      </div>
                  </div>
              </div>
              {/*
                Temporarily hidden at the client's request. This is the banner
                copy ("Intelligent products, built to ship" + Get Started) and
                the robot artwork behind it. Kept here, not deleted, so it can
                be re-enabled by removing this comment wrapper.
              */}
              {/*
              <div className="hero-image img-custom-anim-left bg-cover"
    style={{
        backgroundImage: "url('/assets/img/hero/hero-1.jpg')",
        backgroundPosition: "right center",
    }}>
                  <div className="container">
                      <div className="hero-image-content">
                          <h2>
                              <span className="hero-title-line">Intelligent products,</span>
                              <span className="hero-title-line hero-title-line-accent">built to <b>ship</b></span>
                          </h2>
                          <Link href="/contact" className="theme-btn">get started <i
                                  className="fa-solid fa-arrow-up-right"></i></Link>
                      </div>
                  </div>
</div>
              */}
              <ScrollCue />
          </section>

    
          <section className="about-section section-padding section-bg fix">
              <div className="bg-shape">
                  <img src="/assets/img/about/bg-shape.png" alt="shape-img" />
              </div>
              <div className="color-bg">
                  <img src="/assets/img/about/color-bg-shape.png" alt="img" />
              </div>
              <div className="color-bg-2">
                  <img src="/assets/img/about/color-bg-shape-2.png" alt="img" />
              </div>
              <div className="container">
                  {/*
                    No .ml-200 here: the eyebrow and heading share the container's
                    left edge with the hero headline ("INNOVATIVE") and the tab
                    rail below, instead of sitting 200px to the right of both.
                  */}
                  <div className="section-title">
                      <h6 className="wow fadeInUp">
                          <img src="/assets/img/star.png" alt="img" /> Who we are
                      </h6>
                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Discover the Power of AI <br />
                          <span>& Our <b>Smart</b> Solutions</span>
                      </h2>
                  </div>
                  <div className="about-wrapper mt-4 mt-md-0">
                      {/* Bootstrap's tab plugin adds these ARIA attributes on
                          window load, before React hydrates. Declaring them up
                          front keeps the server markup in sync. */}
                      <ul className="nav" role="tablist">
                          <li className="nav-item wow fadeInUp" data-wow-delay=".3s" role="presentation">
                              <a href="#Mission" data-bs-toggle="tab" className="nav-link" role="tab"
                                  aria-selected="false" tabIndex={-1}>
                                  Our Mission
                              </a>
                          </li>
                          <li className="nav-item wow fadeInUp" data-wow-delay=".5s" role="presentation">
                              <a href="#Vision" data-bs-toggle="tab" className="nav-link active" role="tab"
                                  aria-selected="true">
                                  Our Vision
                              </a>
                          </li>
                          <li className="nav-item wow fadeInUp" data-wow-delay=".5s" role="presentation">
                              <a href="#Feature" data-bs-toggle="tab" className="nav-link" role="tab"
                                  aria-selected="false" tabIndex={-1}>
                                  Key Feature
                              </a>
                          </li>
                      </ul>
                      <div className="tab-content">
                          <div id="Mission" className="tab-pane fade" role="tabpanel">
                              <div className="about-items">
                                  <div className="about-content">
                                      <p>
                                          Our mission is to make artificial intelligence practical, accessible
                                          and valuable for every business. We design tailored AI solutions
                                          that automate the routine, turn data into clear decisions and help
                                          our clients grow with confidence, securely and responsibly.
                                      </p>
                                      <ul className="list-items">
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#EFFB53" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#EFFB53" />
                                              </svg>

                                              <span>Real-World Transformations</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#EFFB53" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#EFFB53" />
                                              </svg>

                                              <span>Innovative AI Solutions</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#EFFB53" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#EFFB53" />
                                              </svg>

                                              <span>Bot Brains, Business Boosters</span>
                                          </li>
                                      </ul>
                                      <Link href="/about" className="theme-btn">explore now <i
                                              className="fa-solid fa-arrow-up-right"></i></Link>
                                  </div>
                                  <div className="about-image">
                                      <img src="/assets/img/about/01.png" alt="img" />
                                  </div>
                              </div>
                          </div>
                          <div id="Vision" className="tab-pane fade show active" role="tabpanel">
                              <div className="about-items">
                                  <div className="about-content">
                                      <p className="wow fadeInUp" data-wow-delay=".3s">
                                          To be a trusted global leader in AI innovation, empowering businesses
                                          of every size to think smarter, work faster and shape a future where
                                          intelligent technology drives real human progress.
                                      </p>
                                      <ul className="list-items wow fadeInUp" data-wow-delay=".5s">
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#EFFB53" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#EFFB53" />
                                              </svg>

                                              <span>Real-World Transformations</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#EFFB53" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#EFFB53" />
                                              </svg>

                                              <span>Innovative AI Solutions</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#EFFB53" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#EFFB53" />
                                              </svg>

                                              <span>Bot Brains, Business Boosters</span>
                                          </li>
                                      </ul>
                                      <Link href="/about" className="theme-btn wow fadeInUp" data-wow-delay=".3s">explore now <i
                                              className="fa-solid fa-arrow-up-right"></i></Link>
                                  </div>
                                  <div className="about-image wow fadeInUp" data-wow-delay=".3s">
                                      <img src="/assets/img/about/01.png" alt="img" />
                                  </div>
                              </div>
                          </div>
                          <div id="Feature" className="tab-pane fade" role="tabpanel">
                              <div className="about-items">
                                  <div className="about-content">
                                      <p>
                                          AiLogiQs builds custom AI that automates tasks, delivers real-time
                                          insights and integrates seamlessly with your systems. Secure, scalable
                                          and always optimized, our solutions help your business grow smarter.
                                      </p>
                                      <ul className="list-items">
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#EFFB53" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#EFFB53" />
                                              </svg>

                                              <span>Real-World Transformations</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#EFFB53" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#EFFB53" />
                                              </svg>

                                              <span>Innovative AI Solutions</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#EFFB53" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#EFFB53" />
                                              </svg>

                                              <span>Bot Brains, Business Boosters</span>
                                          </li>
                                      </ul>
                                      <Link href="/about" className="theme-btn">explore now <i
                                              className="fa-solid fa-arrow-up-right"></i></Link>
                                  </div>
                                  <div className="about-image">
                                      <img src="/assets/img/about/01.png" alt="img" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/*
                Three distinct stats, matching /projects and /about.

                The template shipped "236 Finished Projects" three times over --
                the same card repeated, which read as a placeholder to anyone
                looking at it. Keep all three pages on the same three figures so
                they never contradict each other.
              */}
              <div className="counter-section section-padding pb-0">
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
          </section>

    
          <section className="service-section service-section-home fix section-padding">
              <div className="container">
                  {/* Left-aligned with the hero and the about heading above,
                      rather than the theme's centred services layout. */}
                  <div className="section-title">
                      <h6 className="wow fadeInUp">
                          <img src="/assets/img/star.png" alt="img" /> popular services
                      </h6>
                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          AI Integration & Chatbots, <br />
                          <span>Built for Your <b>Business</b></span>
                      </h2>
                  </div>
                  <div className="row">
                      <div className="col-xl-6 wow fadeInUp" data-wow-delay=".2s">
                          <div className="service-box-items">
                              <div className="service-image">
                                  <img src="/assets/img/service/01.jpeg" alt="img" />
                              </div>
                              <div className="service-content">
                                  <h3>
                                      AI Agent
                                      Development
                                  </h3>
                                  <p>
                                      Smart autonomous agents that automate tasks and support customers 24/7.
                                  </p>
                                  <Link href="/service" className="link-btn">more details <i
                                          className="fa-solid fa-arrow-up-right"></i></Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-6 wow fadeInUp" data-wow-delay=".4s">
                          <div className="service-box-items">
                              <div className="service-image">
                                  <img src="/assets/img/service/02.jpeg" alt="img" />
                              </div>
                              <div className="service-content">
                                  <h3>
                                      Machine Learning
                                      Models
                                  </h3>
                                  <p>
                                      Custom predictive models that turn your data into smarter decisions.
                                  </p>
                                  <Link href="/service" className="link-btn">more details <i
                                          className="fa-solid fa-arrow-up-right"></i></Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-6 wow fadeInUp" data-wow-delay=".6s">
                          <div className="service-box-items">
                              <div className="service-image">
                                  <img src="/assets/img/service/03.jpeg" alt="img" />
                              </div>
                              <div className="service-content">
                                  <h3>
                                      Custom AI
                                      Solutions
                                  </h3>
                                  <p>
                                      Tailored AI built and integrated around your unique business needs.
                                  </p>
                                  <Link href="/service" className="link-btn">more details <i
                                          className="fa-solid fa-arrow-up-right"></i></Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-6 wow fadeInUp" data-wow-delay=".8s">
                          <div className="service-box-items mb-0">
                              <div className="service-image">
                                  <img src="/assets/img/service/04.jpeg" alt="img" />
                              </div>
                              <div className="service-content">
                                  <h3>
                                      Data Analysis
                                      Services
                                  </h3>
                                  <p>
                                      Clear insights and real-time dashboards that drive business growth.
                                  </p>
                                  <Link href="/service" className="link-btn">more details <i
                                          className="fa-solid fa-arrow-up-right"></i></Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="project-section fix section-padding section-bg bg-cover"
              style={{backgroundImage: 'url(\'/assets/img/project/line-shape.png\')'}}>
              <div className="color-bg">
                  <img src="/assets/img/project/color-bg.png" alt="img" />
              </div>
              <div className="project-wrapper">
                  <h2 className="project-title text-center wow fadeInUp" data-wow-delay=".3s">
                      Selected <br /> <img src="/assets/img/has.png" alt="img" /> <span>Projects</span>
                  </h2>
                  <div className="row align-items-center">
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                          <div className="project-image">
                              <img src="/assets/img/project/01.jpeg" alt="img" />
                          </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                          <div className="project-content">
                              <span>25 july, 2024</span>
                              <h3>
                                  <Link href="/project-details">
                                      Machine <br />
                                      learning
                                  </Link>
                              </h3>
                              <p>
                                  Custom machine learning models that learn from your data to predict trends, automate decisions, and cut manual guesswork
                              </p>
                              <Link href="/projects" className="theme-btn">explore now <i
                                      className="fa-solid fa-arrow-up-right"></i></Link>
                          </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                          <div className="project-content">
                              <span>25 july, 2024</span>
                              <h3>
                                  <Link href="/project-details">
                                      Business <br />
                                      analytics
                                  </Link>
                              </h3>
                              <p>
                                  Turn raw business data into clear, actionable dashboards that help you spot opportunities before the competition does
                              </p>
                              <Link href="/projects" className="theme-btn">explore now <i
                                      className="fa-solid fa-arrow-up-right"></i></Link>
                          </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                          <div className="project-image style-2">
                              <img src="/assets/img/project/02.jpeg" alt="img" />
                          </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                          <div className="project-image">
                              <img src="/assets/img/project/03.jpeg" alt="img" />
                          </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                          <div className="project-content">
                              <span>25 july, 2024</span>
                              <h3>
                                  <Link href="/project-details">
                                      Marketing <br />
                                      solutions
                                  </Link>
                              </h3>
                              <p>
                                  AI-driven campaigns that target the right audience, optimize ad spend, and boost conversions automatically
                              </p>
                              <Link href="/projects" className="theme-btn">explore now <i
                                      className="fa-solid fa-arrow-up-right"></i></Link>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="faq-section fix section-padding">
              <div className="color-bg">
                  <img src="/assets/img/faq/color-bg.png" alt="img" />
              </div>
              <div className="container">
                  <div className="faq-wrapper">
                      <div className="row g-4">
                          <div className="col-lg-6">
                              <div className="faq-image-items">
                                  <div className="faq-image wow fadeInUp" data-wow-delay=".3s">
                                      <img src="/assets/img/faq/02.jpeg" alt="White humanoid robot against a grey background" />
                                  </div>
                                  <div className="faq-image wow fadeInUp" data-wow-delay=".5s">
                                      <img src="/assets/img/faq/01.jpeg" alt="Person silhouetted against a pink-lit background holding a phone" />
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="faq-content">
                                  <div className="section-title">
                                      <h6>
                                          <img src="/assets/img/star.png" alt="img" /> common questions
                                      </h6>
                                      <h2>
                                          Harnessing AI for
                                          <span><b>business</b> success</span>
                                      </h2>
                                  </div>
                                  <div className="faq-accordion">
                                      <div className="accordion" id="accordion">
                                          {HOME_FAQS.map((item, i) => {
                                              const id = `home-faq-${i + 1}`;
                                              const open = i === 0;
                                              return (
                                                  <div className="accordion-item wow fadeInUp"
                                                      data-wow-delay={`${(0.2 * (i + 1)).toFixed(1)}s`}
                                                      key={item.question}>
                                                      <h5 className="accordion-header">
                                                          <button className={`accordion-button ${open ? "" : "collapsed"}`}
                                                              type="button" data-bs-toggle="collapse"
                                                              data-bs-target={`#${id}`} aria-expanded={open ? "true" : "false"}
                                                              aria-controls={id}>
                                                          {item.question}
                                                          </button>
                                                      </h5>
                                                      <div id={id} className={`accordion-collapse ${open ? "show" : "collapse"}`}
                                                          data-bs-parent="#accordion">
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

    
          {/* The decorative parallax banner that sat here is gone -- it was a
              single full-bleed image between the FAQ and the packages with no
              content of its own. The FAQ keeps its own 120px bottom padding, so
              the pricing section still breathes. */}
          {/*
            Pricing is generated from PLANS now. The template shipped two tab
            panes (Annual / Monthly) with four cards each -- eight blocks of
            ~65 lines that repeated the same four tick items. The real plans
            have fixed prices, so the tabs went with them and the cards come
            from one array. Edit a plan in PLANS rather than in this markup.
          */}
          <section className="pricing-section pricing-home pricing-section-home fix section-padding pt-0">
              <div className="container">
                  <div className="section-title-area">
                      {/* Same left edge as the hero, about, services and
                          project headings; the theme indented this one by
                          200px through .ml-200. */}
                      <div className="section-title">
                          <h6 className="wow fadeInUp">
                              <img src="/assets/img/star.png" alt="" /> pricing
                          </h6>
                          <h2 className="wow fadeInUp" data-wow-delay=".3s">
                              Start free, <br />
                              <span>grow when it <b>pays</b></span>
                          </h2>
                      </div>
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
                                          {plan.cta}{" "}
                                          <i className="fa-solid fa-arrow-up-right"></i>
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

    
          <section className="message-section message-section-home fix section-bg section-padding">
              <div className="bg-shape">
                  <img src="/assets/img/about/bg-shape.png" alt="shape-img" />
              </div>
              <div className="container">
                  <div className="message-items">
                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Have a project
                          <span> in <b>mind</b>?</span>
                      </h2>
                      <div className="circle-bg wow fadeInUp" data-wow-delay=".3s">
                          <img src="/assets/img/circle-bg.png" alt="img" />
                      </div>
                      <div className="lets-talk-items wow fadeInUp" data-wow-delay=".5s">
                          <Link href="/contact" className="lets-circle">
                              <i className="fa-solid fa-arrow-up-right"></i> <br />
                              Let’s talk
                          </Link>
                          <p>
                              Tell us what you are trying to automate — a support inbox, a
                              sales funnel, a report nobody has time to build. We will come
                              back with a scoped plan, a timeline and a clear price.
                          </p>
                      </div>
                  </div>
              </div>
              <div className="brand-section section-padding pb-0">
                  <div className="container">
                      <div className="swiper brand-slider">
                          <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                  <div className="brand-image text-center">
                                      <img src="/assets/img/brand/01.png" alt="ISEKI" />
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="brand-image text-center">
                                      <img src="/assets/img/brand/02.png" alt="FE" />
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="brand-image text-center">
                                      <img src="/assets/img/brand/03.png" alt="rico" />
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="brand-image text-center">
                                      <img src="/assets/img/brand/04.png" alt="Futaba" />
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="brand-image text-center">
                                      <img src="/assets/img/brand/05.png" alt="box" />
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
