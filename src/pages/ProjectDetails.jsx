import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProjectDetails() {
  useEffect(() => {
    document.title = "Portfolio Details | AiLogiQs";
  }, []);

  return (
    <>
      <Header />
      <div className="breadcrumb-wrapper bg-cover" style={{backgroundImage: 'url(\'/assets/img/breadcrumb-bg.jpg\')'}}>
              <div className="container">
                  <div className="page-heading">
                      <h6 className="wow fadeInUp">
                          <img src="/assets/img/star.png" alt="img" /> portfolio details
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
                                      <Link to="/contact" className="theme-btn">contact us <i
                                              className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
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
                                  <div className="details-image">
                                      <img src="/assets/img/project/details-1.jpg" alt="img" />
                                  </div>
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
                                  <div className="row g-4">
                                      <div className="col-md-6">
                                          <div className="details-image">
                                              <img src="/assets/img/project/details-2.jpg" alt="img" />
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="details-image">
                                              <img src="/assets/img/project/details-3.jpg" alt="img" />
                                          </div>
                                      </div>
                                  </div>
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

    
          <section className="portfolio-section fix section-padding">
              <div className="container">
                  <div className="section-title">
                      <h6>
                          <img src="/assets/img/star.png" alt="img" /> our projects
                      </h6>
                      <h2>
                          Related <span><b>projects</b></span>
                      </h2>
                  </div>
                  <div className="row">
                      <div className="col-xl-4 col-lg-6 col-md-6">
                          <div className="portfolio-card-items">
                              <div className="portfolio-image">
                                  <img src="/assets/img/project/12.jpg" alt="img" />
                                  <Link to="/contact" className="lets-circle">
                                      <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                      Project
                                      details
                                  </Link>
                              </div>
                              <div className="portfolio-content">
                                  <h6><span>//</span> creative art</h6>
                                  <h3><Link to="/project-details">Stylishly extravagant toy</Link></h3>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6">
                          <div className="portfolio-card-items">
                              <div className="portfolio-image">
                                  <img src="/assets/img/project/13.jpg" alt="img" />
                                  <Link to="/contact" className="lets-circle">
                                      <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                      Project
                                      details
                                  </Link>
                              </div>
                              <div className="portfolio-content">
                                  <h6><span>//</span> creative art</h6>
                                  <h3><Link to="/project-details">A vintage postcard design</Link></h3>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6">
                          <div className="portfolio-card-items">
                              <div className="portfolio-image">
                                  <img src="/assets/img/project/14.jpg" alt="img" />
                                  <Link to="/contact" className="lets-circle">
                                      <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                      Project
                                      details
                                  </Link>
                              </div>
                              <div className="portfolio-content">
                                  <h6><span>//</span> creative art</h6>
                                  <h3><Link to="/project-details">Color for simple Company</Link></h3>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      <Footer />
    </>
  );
}
