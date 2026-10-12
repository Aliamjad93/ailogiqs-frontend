export const metadata = {
  title: "About Us",
  description:
    "AiLogiQs is an AI startup building intelligent products — our story, the team behind the work, and how we approach applied artificial intelligence.",
  alternates: { canonical: "/about" },
};

import Link from "next/link";
import {
  ProcessStepsVisual,
  AgentDashboardVisual,
  StepArrow,
} from "@/components/about/AboutVisuals";

export default function About() {

  return (
    <>
      <section className="about-section style-padding section-padding fix">
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
                          <img src="/assets/img/circle-title.png" alt="" /> Who we are
                      </h6>
                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Explore the AI power <br />
                          <span>& our <b>innovative</b> solutions</span>
                      </h2>
                  </div>
                  <div className="row">
                      <div className="col-lg-5">
                          <div className="about-image-33 img-custom-anim-left">
                              <ProcessStepsVisual />
                          </div>
                      </div>
                      <div className="col-lg-7">
                          <div className="about-image-33 img-custom-anim-right">
                              <AgentDashboardVisual />
                          </div>
                      </div>
                  </div>
              <div className="about-wrapper mt-4">
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
                                          Our mission is to make AI practical for every business. We build agents and automations that take repetitive work off your team, so they can focus on what really matters.
                                      </p>
                                      <ul className="list-items">
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#514DE0" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#514DE0" />
                                              </svg>

                                              <span>Real-World Transformations</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#514DE0" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#514DE0" />
                                              </svg>

                                              <span>Innovative AI Solutions</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#514DE0" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#514DE0" />
                                              </svg>

                                              <span>Bot Brains, Business Boosters</span>
                                          </li>
                                      </ul>
                                      <Link href="/about" className="theme-btn">explore now <i
                                              className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                  </div>
                              </div>
                          </div>
                          <div id="Vision" className="tab-pane fade show active">
                              <div className="about-items">
                                  <div className="about-content">
                                      <p className="wow fadeInUp" data-wow-delay=".3s">
                                          We want every business, big or small, to have access to AI that actually works for them. It should save time, cut costs and open new ways to grow.
                                      </p>
                                      <ul className="list-items wow fadeInUp" data-wow-delay=".5s">
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#514DE0" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#514DE0" />
                                              </svg>

                                              <span>Real-World Transformations</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#514DE0" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#514DE0" />
                                              </svg>

                                              <span>Innovative AI Solutions</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#514DE0" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#514DE0" />
                                              </svg>

                                              <span>Bot Brains, Business Boosters</span>
                                          </li>
                                      </ul>
                                      <Link href="/about" className="theme-btn wow fadeInUp" data-wow-delay=".3s">explore now <i
                                              className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                  </div>
                              </div>
                          </div>
                          <div id="Feature" className="tab-pane fade">
                              <div className="about-items">
                                  <div className="about-content">
                                      <p>
                                          Every solution we build is custom-made for your business, connects to the tools you already use, and keeps working around the clock with no extra effort from your team.
                                      </p>
                                      <ul className="list-items">
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#514DE0" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#514DE0" />
                                              </svg>

                                              <span>Real-World Transformations</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#514DE0" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#514DE0" />
                                              </svg>

                                              <span>Innovative AI Solutions</span>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14"
                                                  viewBox="0 0 22 14" fill="none">
                                                  <path
                                                      d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z"
                                                      fill="#514DE0" />
                                                  <path
                                                      d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z"
                                                      fill="#514DE0" />
                                              </svg>

                                              <span>Bot Brains, Business Boosters</span>
                                          </li>
                                      </ul>
                                      <Link href="/about" className="theme-btn">explore now <i
                                              className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="how-to-work-section fix section-padding section-bg">
              <div className="container">
                  <div className="section-title text-center">
                      <h6 className="wow fadeInUp">
                          <img src="/assets/img/circle-title.png" alt="" /> how we work
                      </h6>
                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Understanding our <br />
                          <span>AI <b>chatbot’s</b> workflow</span>
                      </h2>
                  </div>
                  <div className="how-to-work-wrapper">
                      <div className="how-too-work-items text-center wow fadeInUp" data-wow-delay=".2s">
                          <div className="icon">
                              <img src="/assets/img/icon/23.svg" alt="img" />
                              <div className="bar-shape">
                                  <img src="/assets/img/work-bar-shape.png" alt="img" />
                              </div>
                          </div>
                          <div className="content">
                              <h3>Choose Plan</h3>
                              <p>Pick the plan that fits your business size and goals</p>
                          </div>
                      </div>
                      <div className="arrow-shape">
                          <StepArrow />
                      </div>
                      <div className="how-too-work-items text-center wow fadeInUp" data-wow-delay=".4s">
                          <div className="icon">
                              <img src="/assets/img/icon/24.svg" alt="img" />
                              <div className="bar-shape">
                                  <img src="/assets/img/work-bar-shape.png" alt="img" />
                              </div>
                          </div>
                          <div className="content">
                              <h3>Setup Chatbot</h3>
                              <p>We set up your chatbot and connect it to your website and tools</p>
                          </div>
                      </div>
                      <div className="arrow-shape">
                          <StepArrow />
                      </div>
                      <div className="how-too-work-items text-center wow fadeInUp" data-wow-delay=".6s">
                          <div className="icon">
                              <img src="/assets/img/icon/25.svg" alt="img" />
                              <div className="bar-shape">
                                  <img src="/assets/img/work-bar-shape.png" alt="img" />
                              </div>
                          </div>
                          <div className="content">
                              <h3>Train Your Bot</h3>
                              <p>We train it on your products, FAQs and data so it answers like your team</p>
                          </div>
                      </div>
                      <div className="arrow-shape">
                          <StepArrow />
                      </div>
                      <div className="how-too-work-items text-center wow fadeInUp" data-wow-delay=".8s">
                          <div className="icon">
                              <img src="/assets/img/icon/26.svg" alt="img" />
                              <div className="bar-shape">
                                  <img src="/assets/img/work-bar-shape.png" alt="img" />
                              </div>
                          </div>
                          <div className="content">
                              <h3>Client Support</h3>
                              <p>Your bot handles customers 24/7, and we keep improving it over time</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="about-section fix section-padding">
              <div className="container">
                  <div className="about-wrapper-4">
                      {/*
                        Copy-only, centred. This band used to be a two-column
                        split -- a photo collage on the left, the copy on the
                        right -- so everything was authored left-aligned with a
                        40px indent. With the artwork gone the copy is the whole
                        band, so it is given a measure and centred; the indent
                        and the left-aligned skill rows are undone in
                        overrides.css under `body.route-about .about-wrapper-4`.
                      */}
                      <div className="row justify-content-center">
                          <div className="col-lg-9 col-xl-8">
                              <div className="about-content">
                                  <div className="section-title">
                                      <h6 className="wow fadeInUp">
                                          <img src="/assets/img/circle-title.png" alt="" /> our practice
                                      </h6>
                                      <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                          Harnessing AI for
                                          <span><b>business</b> success</span>
                                      </h2>
                                  </div>
                                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                      We are an applied-AI studio, not a research lab. We take the
                                      repetitive work that eats a team's day — answering the same
                                      questions, chasing order confirmations, logging every chat — and hand
                                      it to agents that speak your customers' language on the channels they
                                      already use.
                                  </p>
                                  <div className="skill-feature-items">
                                      <div className="skill-feature wow fadeInUp" data-wow-delay=".2s">
                                          <h3 className="box-title">Conversational AI</h3>
                                          <div className="progress">
                                              <div className="progress-bar"
                                                  style={{width: '95%', animation: '2.6s ease 0s 1 normal none running animate-positive', opacity: '1'}}>
                                                  <div className="progress-value"><span className="counter-number2">95</span>%</div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="skill-feature wow fadeInUp" data-wow-delay=".4s">
                                          <h3 className="box-title">Workflow automation</h3>
                                          <div className="progress">
                                              <div className="progress-bar"
                                                  style={{width: '90%', animation: '2.6s ease 0s 1 normal none running animate-positive', opacity: '1'}}>
                                                  <div className="progress-value"><span className="counter-number2">90</span>%</div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="skill-feature wow fadeInUp" data-wow-delay=".2s">
                                          <h3 className="box-title">Data &amp; analytics</h3>
                                          <div className="progress">
                                              <div className="progress-bar"
                                                  style={{width: '85%', animation: '2.6s ease 0s 1 normal none running animate-positive', opacity: '1'}}>
                                                  <div className="progress-value"><span className="counter-number2">85</span>%</div>
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

    
          <div className="counter-section section-padding pt-0">
              <div className="container">
                  {/*
                    The template shipped this row as the same stat three times --
                    "236 / Finished Projects" with icon/01.svg in every slot. Three
                    distinct numbers now, each with its own icon, and each one
                    matching a figure already quoted elsewhere on the page (412
                    hours and 97% come from the hero dashboard, the 3s reply from
                    the impact figure) so the numbers agree across the page.

                    counterUp() parses .count's text as a number: plain digits and
                    commas are fine, a "k" suffix would animate to NaN. So units
                    live in the markup around the number, never inside it.
                  */}
                  <div className="counter-wrapper">
                      <div className="counter-items wow fadeInUp" data-wow-delay=".3s">
                          <div className="icon">
                              <img src="/assets/img/icon/04.svg" alt="" />
                          </div>
                          <div className="content">
                              <h2><span className="count">412</span></h2>
                              <p>Hours saved every month</p>
                          </div>
                      </div>
                      <div className="counter-items wow fadeInUp" data-wow-delay=".5s">
                          <div className="icon">
                              <img src="/assets/img/icon/14.svg" alt="" />
                          </div>
                          <div className="content">
                              <h2><span className="count">1,284</span></h2>
                              <p>Conversations handled weekly</p>
                          </div>
                      </div>
                      <div className="counter-items wow fadeInUp" data-wow-delay=".7s">
                          <div className="icon">
                              <img src="/assets/img/icon/17.svg" alt="" />
                          </div>
                          <div className="content">
                              <h2><span className="count">97</span>%</h2>
                              <p>Answered without a human</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

    </>
  );
}
