export const metadata = {
  // `absolute` because the root layout applies a "%s | AiLogiQs" template,
  // which would otherwise duplicate the brand name on the homepage title.
  title: { absolute: "AiLogiQs – AI Startup & Technology" },
  alternates: { canonical: "/" },
};


import Link from "next/link";
import ScrollCue from "@/components/layout/ScrollCue";
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
                                  AI, Simplified,{" "}
                                  <br />
                                  <b>Beyond</b> <span className="text-2">Automation.</span>
                              </h1>
                          </div>
                      </div>
                  </div>
              </div>
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
                  <div className="section-title ml-200">
                      <h6 className="wow fadeInUp">
                          <img src="/assets/img/star.png" alt="img" /> Who we are
                      </h6>
                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Discover the Power of AI <br />
                          <span>& Our <b>Smart</b> Solutions</span>
                      </h2>
                  </div>
                  <div className="about-wrapper mt-4 mt-md-0">
                      <ul className="nav">
                          <li className="nav-item wow fadeInUp" data-wow-delay=".3s">
                              <a href="#Mission" data-bs-toggle="tab" className="nav-link">
                                  Our Mission
                              </a>
                          </li>
                          <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                              <a href="#Vision" data-bs-toggle="tab" className="nav-link active">
                                  Our Vision
                              </a>
                          </li>
                          <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                              <a href="#Feature" data-bs-toggle="tab" className="nav-link">
                                  Key Feature
                              </a>
                          </li>
                      </ul>
                      <div className="tab-content">
                          <div id="Mission" className="tab-pane fade">
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
                          <div id="Vision" className="tab-pane fade show active">
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
                          <div id="Feature" className="tab-pane fade">
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
                Three distinct stats, matching /project and /about.

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

    
          <section className="service-section fix section-padding">
              <div className="container">
                  <div className="section-title text-center">
                      <h6 className="wow fadeInUp">
                          <img src="/assets/img/star.png" alt="img" />
                          popular services
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
                              <Link href="/project" className="theme-btn">explore now <i
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
                              <Link href="/project" className="theme-btn">explore now <i
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
                              <Link href="/project" className="theme-btn">explore now <i
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
                                  {/* The small offset image that sat above this
                                      one was faq/02.jpeg -- a grey "270X520"
                                      placeholder. faq/01.jpeg below is a real
                                      photograph, so the composition keeps its
                                      anchor and only loses the empty box. */}
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
                                          <div className="accordion-item wow fadeInUp" data-wow-delay=".2s">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                      data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                                      What can AiLogiQs build for my business?
                                                  </button>
                                              </h5>
                                              <div id="faq1" className="accordion-collapse show" data-bs-parent="#accordion">
                                                  <div className="accordion-body">
                                                      AI agents that handle support and sales conversations around the
                                                      clock, machine learning models that predict trends and spot fraud,
                                                      and dashboards that turn raw data into decisions. Every build is
                                                      tailored to your processes and connects to the tools you use now.
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="accordion-item wow fadeInUp" data-wow-delay=".4s">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button collapsed" type="button"
                                                      data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false"
                                                      aria-controls="faq2">
                                                      How do you work with us?
                                                  </button>
                                              </h5>
                                              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                  <div className="accordion-body">
                                                      We scope the work first, then build it, then train it on your
                                                      products, FAQs and data so it answers like your team. Once it is live we
                                                      keep monitoring it and improving it, so the solution keeps working as
                                                      your business changes.
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="accordion-item wow fadeInUp" data-wow-delay=".6s">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button collapsed" type="button"
                                                      data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false"
                                                      aria-controls="faq3">
                                                      How do we get started?
                                                  </button>
                                              </h5>
                                              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                  <div className="accordion-body">
                                                      With a free consultation. We look at the workflow you want to
                                                      change, map the data and the systems involved, and come back with a
                                                      scoped proposal, a timeline and the criteria we will measure it
                                                      against.
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

    
          {/* The decorative parallax banner that sat here is gone -- it was a
              single full-bleed image between the FAQ and the packages with no
              content of its own. The FAQ keeps its own 120px bottom padding, so
              the pricing section still breathes. */}
          <section className="pricing-section fix section-padding pt-0">
              <div className="container">
                  <div className="section-title-area">
                      <div className="section-title ml-200">
                          <h6 className="wow fadeInUp">
                              <img src="/assets/img/star.png" alt="img" /> popular package
                          </h6>
                          <h2 className="wow fadeInUp" data-wow-delay=".3s">
                              Competitive package <br />
                              <span> best AI <b>expertise</b></span>
                          </h2>
                      </div>
                      <ul className="nav">
                          <li className="nav-item wow fadeInUp" data-wow-delay=".3s">
                              <a href="#Annual" data-bs-toggle="tab" className="nav-link">
                                  Annual
                              </a>
                          </li>
                          <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                              <a href="#Monthly" data-bs-toggle="tab" className="nav-link active">
                                  Monthly
                              </a>
                          </li>
                      </ul>
                  </div>
                  <div className="tab-content">
                      <div id="Annual" className="tab-pane fade">
                          <div className="row">
                              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                                  <div className="pricing-box-items">
                                      <div className="icon">
                                          <img src="/assets/img/icon/02.svg" alt="img" />
                                      </div>
                                      <div className="pricing-header">
                                          <h3>Standard</h3>
                                          <p>Ideal for personal project</p>
                                          <h2>$25</h2>
                                      </div>
                                      <ul className="pricing-list">
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Access AI tool</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Exclusive feature</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>24/7 support</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Discord access</span>
                                          </li>
                                      </ul>
                                      <div className="pricing-button">
                                          <Link href="/pricing" className="theme-btn">
                                              Start Now <i className="fa-solid fa-arrow-up-right"></i>
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                                  <div className="pricing-box-items">
                                      <div className="icon">
                                          <img src="/assets/img/icon/02.svg" alt="img" />
                                      </div>
                                      <div className="pricing-header">
                                          <h3>Professional</h3>
                                          <p>Ideal for personal project</p>
                                          <h2>$29</h2>
                                      </div>
                                      <ul className="pricing-list">
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Access AI tool</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Exclusive feature</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>24/7 support</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Discord access</span>
                                          </li>
                                      </ul>
                                      <div className="pricing-button">
                                          <Link href="/pricing" className="theme-btn">
                                              Start Now <i className="fa-solid fa-arrow-up-right"></i>
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                                  <div className="pricing-box-items">
                                      <div className="icon">
                                          <img src="/assets/img/icon/02.svg" alt="img" />
                                      </div>
                                      <div className="pricing-header">
                                          <h3>Business</h3>
                                          <p>Ideal for personal project</p>
                                          <h2>$49</h2>
                                      </div>
                                      <ul className="pricing-list">
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Access AI tool</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Exclusive feature</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>24/7 support</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Discord access</span>
                                          </li>
                                      </ul>
                                      <div className="pricing-button">
                                          <Link href="/pricing" className="theme-btn">
                                              Start Now <i className="fa-solid fa-arrow-up-right"></i>
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                                  <div className="pricing-box-items">
                                      <div className="icon">
                                          <img src="/assets/img/icon/02.svg" alt="img" />
                                      </div>
                                      <div className="pricing-header">
                                          <h3>Enterprise</h3>
                                          <p>Ideal for personal project</p>
                                          <h2>$54</h2>
                                      </div>
                                      <ul className="pricing-list">
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Access AI tool</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Exclusive feature</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>24/7 support</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Discord access</span>
                                          </li>
                                      </ul>
                                      <div className="pricing-button">
                                          <Link href="/pricing" className="theme-btn">
                                              Start Now <i className="fa-solid fa-arrow-up-right"></i>
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div id="Monthly" className="tab-pane fade show active">
                          <div className="row">
                              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                  <div className="pricing-box-items">
                                      <div className="icon">
                                          <img src="/assets/img/icon/02.svg" alt="img" />
                                      </div>
                                      <div className="pricing-header">
                                          <h3>Standard</h3>
                                          <p>Ideal for personal project</p>
                                          <h2>$25</h2>
                                      </div>
                                      <ul className="pricing-list">
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Access AI tool</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Exclusive feature</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>24/7 support</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Discord access</span>
                                          </li>
                                      </ul>
                                      <div className="pricing-button">
                                          <Link href="/pricing" className="theme-btn">
                                              Start Now <i className="fa-solid fa-arrow-up-right"></i>
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                  <div className="pricing-box-items">
                                      <div className="icon">
                                          <img src="/assets/img/icon/02.svg" alt="img" />
                                      </div>
                                      <div className="pricing-header">
                                          <h3>Professional</h3>
                                          <p>Ideal for personal project</p>
                                          <h2>$29</h2>
                                      </div>
                                      <ul className="pricing-list">
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Access AI tool</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Exclusive feature</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>24/7 support</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Discord access</span>
                                          </li>
                                      </ul>
                                      <div className="pricing-button">
                                          <Link href="/pricing" className="theme-btn">
                                              Start Now <i className="fa-solid fa-arrow-up-right"></i>
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                  <div className="pricing-box-items">
                                      <div className="icon">
                                          <img src="/assets/img/icon/02.svg" alt="img" />
                                      </div>
                                      <div className="pricing-header">
                                          <h3>Business</h3>
                                          <p>Ideal for personal project</p>
                                          <h2>$49</h2>
                                      </div>
                                      <ul className="pricing-list">
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Access AI tool</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Exclusive feature</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>24/7 support</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Discord access</span>
                                          </li>
                                      </ul>
                                      <div className="pricing-button">
                                          <Link href="/pricing" className="theme-btn">
                                              Start Now <i className="fa-solid fa-arrow-up-right"></i>
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                  <div className="pricing-box-items">
                                      <div className="icon">
                                          <img src="/assets/img/icon/02.svg" alt="img" />
                                      </div>
                                      <div className="pricing-header">
                                          <h3>Enterprise</h3>
                                          <p>Ideal for personal project</p>
                                          <h2>$54</h2>
                                      </div>
                                      <ul className="pricing-list">
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Access AI tool</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Exclusive feature</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>24/7 support</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12"
                                                  viewBox="0 0 20 12" fill="none">
                                                  <path
                                                      d="M10.3553 12C10.0508 12 9.84772 11.8857 9.64467 11.6571L5.38071 6.85714C4.97462 6.4 4.97462 5.71429 5.38071 5.25714C5.7868 4.8 6.39594 4.8 6.80203 5.25714L10.3553 9.25714L18.2741 0.342857C18.6802 -0.114286 19.2893 -0.114286 19.6954 0.342857C20.1015 0.8 20.1015 1.48571 19.6954 1.94286L11.066 11.6571C10.9645 11.8857 10.6599 12 10.3553 12Z"
                                                      fill="#CDCDCD" />
                                                  <path
                                                      d="M5.27919 12C4.97462 12 4.77157 11.8857 4.56853 11.6571L0.304569 6.85714C-0.101523 6.4 -0.101523 5.71429 0.304569 5.25714C0.71066 4.8 1.3198 4.8 1.72589 5.25714L5.98985 10.0571C6.39594 10.5143 6.39594 11.2 5.98985 11.6571C5.88833 11.8857 5.58376 12 5.27919 12ZM10.6599 6.05714C10.3553 6.05714 10.1523 5.94286 9.94924 5.71429C9.54315 5.25714 9.54315 4.57143 9.94924 4.11429L13.198 0.342857C13.6041 -0.114286 14.2132 -0.114286 14.6193 0.342857C15.0254 0.8 15.0254 1.48571 14.6193 1.94286L11.3706 5.71429C11.1675 5.94286 10.9645 6.05714 10.6599 6.05714Z"
                                                      fill="#CDCDCD" />
                                              </svg>
                                              <span>Discord access</span>
                                          </li>
                                      </ul>
                                      <div className="pricing-button">
                                          <Link href="/pricing" className="theme-btn">
                                              Start Now <i className="fa-solid fa-arrow-up-right"></i>
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="message-section fix section-bg section-padding">
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
              {/*
                The client-logo marquee that sat here (FE / rico / Futaba / box /
                ISEKI) is gone. Those are the template's invented brands, not
                AiLogiQs clients, so it was advertising work that does not exist.
                Swiper init in main.js is length-guarded, and /about still has a
                brand slider, so nothing breaks.
              */}
          </section>
    </>
  );
}
