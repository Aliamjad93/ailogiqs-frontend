export const metadata = {
  title: "Project Details",
};

import Link from "next/link";
export default function ProjectDetails() {

  return (
    <>
      <div className="breadcrumb-wrapper bg-cover" style={{backgroundImage: 'url(\'/assets/img/breadcrumb-bg.jpg\')'}}>
              <div className="container">
                  <div className="page-heading">
                      <h6 className="wow fadeInUp">
                          <img src="/assets/img/star.png" alt="img" /> project details
                      </h6>
                      <h1 className="wow fadeInUp" data-wow-delay=".3s">Bold & <span>vibrant</span> design</h1>
                  </div>
              </div>
          </div>

    
          <section className="portfolio-details-section section-padding fix section-bg">
              <div className="container">
                  <div className="project-details-wrapper">
                      <div className="row g-4">
                          <div className="col-xl-4">
                              <div className="project-sidebar">
                                  <div className="project-details-info">
                                      <h3><img src="/assets/img/star-3.png" alt="img" />Project Info</h3>
                                      <ul>
                                          <li>
                                              Company:
                                              <span>Digital Teach</span>
                                          </li>
                                          <li>
                                              Category:
                                              <span>AI Generate</span>
                                          </li>
                                          <li>
                                              Start:
                                              <span>15/08/2024</span>
                                          </li>
                                          <li>
                                              End time::
                                              <span>20/08/2024</span>
                                          </li>
                                          <li>
                                              Feedback::
                                              <span>Happy Clients</span>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="contact-info-box">
                                      <div className="icon">
                                          <i className="fa-regular fa-phone-volume"></i>
                                      </div>
                                      <h2>
                                          Have any
                                          project
                                          <span>contact</span> us
                                      </h2>
                                      <Link href="/contact" className="theme-btn">contact us <i
                                              className="fa-solid fa-arrow-up-right"></i></Link>
                                  </div>
                              </div>
                          </div>
                          <div className="col-xl-8">
                              <div className="project-details-content">
                                  <h2>Bold & vibrant design</h2>
                                  <p className="mb-5">
                                      Nec pretium eget dictumst donec pretium quam mi ad vulputate risus mus rutrum nascetur
                                      sed imperdiet maecenas etiam nullam odio metus netus velit platea adipiscing. Fusce
                                      sociosqu elementum lacus duis Nostra nullam netus mauris ridiculus, venenatis pulvinar
                                      and ornare felis litora luctus urna sem. Risus libero phasellus fringilla nam dui etiam
                                      aenean phasellus iaculis duis
                                  </p>
                                  {/* details-1.jpg was deleted, so this
                                      .details-image block is gone. */}
                                  <h2>Project strategy</h2>
                                  <p className="mb-4">
                                      Eleifend. Netus volutpat purus purus augue nullam blandit, phasellus per vehicula dolor
                                      habitasse sapien curabitur enim eget vivamus odio ornare per feugiat. Habitasse orci
                                      cubilia vestibulum, duis magnis cubilia accumsan. Tempus quis urna hendrerit,
                                      pellentesque sociosqu lacinia dolor porta condimentum ridiculus elementum aliquam
                                      facilisi parturient dolor est nisi habitasse luctus mattis.
                                  </p>
                                  <p className="mb-5">
                                      Phasellus per vehicula dolor habitasse sapien curabitur enim eget vivamus odio ornare
                                      percent feugiat Habitasse orci cubilia vestibulum, duis magnis cubilia accumsan tempus
                                      quis urna hendrerit pellentesque sociosqu lacinia dolor porta condimentum ridiculus
                                      elementum aliquam facilisi
                                  </p>
                                  {/* The two-up details-2 / details-3 image row
                                      was removed with the files. */}
                                  <h2>Our working process</h2>
                                  <p>
                                      Rutrum ipsum taciti fermentum mollis litora congue vitae lacinia eget cras tempus in
                                      porta euismod binary metus. Integer eternal vitae cum ultrices curabitur malesuada lorem
                                      leo musmind curabitur dapibus ligula pellentesque sodales diam ridiculus urna proin
                                      tellus cum gravida.
                                  </p>
                                  <div className="how-to-work-wrapper">
                                      <div className="how-too-work-items text-center">
                                          <div className="icon">
                                              <img src="/assets/img/icon/24.svg" alt="img" />
                                              <div className="bar-shape">
                                                  <img src="/assets/img/work-bar-shape.png" alt="img" />
                                              </div>
                                          </div>
                                          <div className="content">
                                              <h3>Setup Chatbot</h3>
                                              <p>Start by signing up for our service with and proces simple</p>
                                          </div>
                                      </div>
                                      <div className="how-too-work-items text-center">
                                          <div className="icon">
                                              <img src="/assets/img/icon/25.svg" alt="img" />
                                              <div className="bar-shape">
                                                  <img src="/assets/img/work-bar-shape.png" alt="img" />
                                              </div>
                                          </div>
                                          <div className="content">
                                              <h3>Train Your Bot</h3>
                                              <p>Start by signing up for our service with and proces simple</p>
                                          </div>
                                      </div>
                                      <div className="how-too-work-items text-center">
                                          <div className="icon">
                                              <img src="/assets/img/icon/26.svg" alt="img" />
                                              <div className="bar-shape">
                                                  <img src="/assets/img/work-bar-shape.png" alt="img" />
                                              </div>
                                          </div>
                                          <div className="content">
                                              <h3>Client Support</h3>
                                              <p>Start by signing up for our service with and proces simple</p>
                                          </div>
                                      </div>
                                  </div>
                                  <h2>Results & impact</h2>
                                  <p>
                                      Lectus pellentesque curabitur augue facilisis proin scelerisque tristique tempus ante
                                      inceptos suspendisse nascetur a velit amet torquent dignissim. Vehicula volutpat platea.
                                      Sed nibh class tristique consectetuer ac viverra condimentum elementum. Euismod tempus.
                                      Praesent luctus auctor neck for a pulvinar nascetur sapien. Fames inceptos pede torquent
                                      interdum feugiat and nibh curaes senectus gravida auctor praesent Consectetuer pulvinar
                                      enim blandit, sapien nisie sagittis.
                                  </p>
                                  <ul className="details-list">
                                      <li>
                                          <i className="fa-solid fa-check-double"></i>
                                          Nostra egestas molestie cubilia sociis hack hendrerit ultricies lobortis.
                                      </li>
                                      <li>
                                          <i className="fa-solid fa-check-double"></i>
                                          Dictumst curabitur mollis urna quam diam aliquam posuere netus varius senectus
                                      </li>
                                      <li>
                                          <i className="fa-solid fa-check-double"></i>
                                          Nibh congue imperdiet nisie per inceptos in adipiscing lobortis vehicula.
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          {/* "Related projects" removed: its three cards were placeholder
              artwork (project/12-14.jpg), and those files have been deleted. */}
    </>
  );
}
