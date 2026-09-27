import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Project() {
  useEffect(() => {
    document.title = "Portfolio | AiLogiQs";
  }, []);

  return (
    <>
      <Header />
      <div className="breadcrumb-wrapper bg-cover" style={{backgroundImage: 'url(\'/assets/img/breadcrumb-bg.jpg\')'}}>
              <div className="container">
                  <div className="page-heading">
                      <h6 className="wow fadeInUp">
                          <img src="/assets/img/star.png" alt="img" /> user creation
                      </h6>
                      <h1 className="wow fadeInUp" data-wow-delay=".3s">Creative <span>Portfolio</span></h1>
                  </div>
              </div>
          </div>

    
          <section className="portfolio-section section-padding section-bg">
              <div className="container">
                  <ul className="nav">
                      <li className="nav-item wow fadeInUp" data-wow-delay=".2s">
                          <a href="#show" data-bs-toggle="tab" className="nav-link active">
                              show All
                          </a>
                      </li>
                      <li className="nav-item wow fadeInUp" data-wow-delay=".4s">
                          <a href="#creative" data-bs-toggle="tab" className="nav-link">
                              creative
                          </a>
                      </li>
                      <li className="nav-item wow fadeInUp" data-wow-delay=".6s">
                          <a href="#anime" data-bs-toggle="tab" className="nav-link">
                              anime
                          </a>
                      </li>
                      <li className="nav-item wow fadeInUp" data-wow-delay=".8s">
                          <a href="#animal" data-bs-toggle="tab" className="nav-link">
                              animal
                          </a>
                      </li>
                      <li className="nav-item wow fadeInUp" data-wow-delay=".9s">
                          <a href="#graphic" data-bs-toggle="tab" className="nav-link">
                              graphic
                          </a>
                      </li>
                  </ul>
                  <div className="tab-content">
                      <div id="show" className="tab-pane fade show active">
                          <div className="row">
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/09.jpg" alt="img" />
                                          <Link to="/contact" className="lets-circle">
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                              Project
                                              details
                                          </Link>
                                      </div>
                                      <div className="portfolio-content">
                                          <h6><span>//</span> creative art</h6>
                                          <h3><Link to="/project-details">Futuristic stylish model</Link></h3>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/10.jpg" alt="img" />
                                          <Link to="/contact" className="lets-circle">
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                              Project
                                              details
                                          </Link>
                                      </div>
                                      <div className="portfolio-content">
                                          <h6><span>//</span> creative art</h6>
                                          <h3><Link to="/project-details">Bold and vibrant design</Link></h3>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/11.jpg" alt="img" />
                                          <Link to="/contact" className="lets-circle">
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                              Project
                                              details
                                          </Link>
                                      </div>
                                      <div className="portfolio-content">
                                          <h6><span>//</span> creative art</h6>
                                          <h3><Link to="/project-details">Breathtaking landscape</Link></h3>
                                      </div>
                                  </div>
                              </div>
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
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/15.jpg" alt="img" />
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
                                          <img src="/assets/img/project/16.jpg" alt="img" />
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
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/17.jpg" alt="img" />
                                          <Link to="/contact" className="lets-circle">
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                              Project
                                              details
                                          </Link>
                                      </div>
                                      <div className="portfolio-content">
                                          <h6><span>//</span> creative art</h6>
                                          <h3><Link to="/project-details">Futuristic stylish model</Link></h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div id="creative" className="tab-pane fade">
                          <div className="row">
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/09.jpg" alt="img" />
                                          <Link to="/contact" className="lets-circle">
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                              Project
                                              details
                                          </Link>
                                      </div>
                                      <div className="portfolio-content">
                                          <h6><span>//</span> creative art</h6>
                                          <h3><Link to="/project-details">Futuristic stylish model</Link></h3>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/10.jpg" alt="img" />
                                          <Link to="/contact" className="lets-circle">
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                              Project
                                              details
                                          </Link>
                                      </div>
                                      <div className="portfolio-content">
                                          <h6><span>//</span> creative art</h6>
                                          <h3><Link to="/project-details">Bold and vibrant design</Link></h3>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/11.jpg" alt="img" />
                                          <Link to="/contact" className="lets-circle">
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                              Project
                                              details
                                          </Link>
                                      </div>
                                      <div className="portfolio-content">
                                          <h6><span>//</span> creative art</h6>
                                          <h3><Link to="/project-details">Breathtaking landscape</Link></h3>
                                      </div>
                                  </div>
                              </div>
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
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/15.jpg" alt="img" />
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
                                          <img src="/assets/img/project/16.jpg" alt="img" />
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
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/17.jpg" alt="img" />
                                          <Link to="/contact" className="lets-circle">
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                              Project
                                              details
                                          </Link>
                                      </div>
                                      <div className="portfolio-content">
                                          <h6><span>//</span> creative art</h6>
                                          <h3><Link to="/project-details">Futuristic stylish model</Link></h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div id="anime" className="tab-pane fade">
                          <div className="row">
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/09.jpg" alt="img" />
                                          <Link to="/contact" className="lets-circle">
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                              Project
                                              details
                                          </Link>
                                      </div>
                                      <div className="portfolio-content">
                                          <h6><span>//</span> creative art</h6>
                                          <h3><Link to="/project-details">Futuristic stylish model</Link></h3>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/10.jpg" alt="img" />
                                          <Link to="/contact" className="lets-circle">
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                              Project
                                              details
                                          </Link>
                                      </div>
                                      <div className="portfolio-content">
                                          <h6><span>//</span> creative art</h6>
                                          <h3><Link to="/project-details">Bold and vibrant design</Link></h3>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/11.jpg" alt="img" />
                                          <Link to="/contact" className="lets-circle">
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                              Project
                                              details
                                          </Link>
                                      </div>
                                      <div className="portfolio-content">
                                          <h6><span>//</span> creative art</h6>
                                          <h3><Link to="/project-details">Breathtaking landscape</Link></h3>
                                      </div>
                                  </div>
                              </div>
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
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/15.jpg" alt="img" />
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
                                          <img src="/assets/img/project/16.jpg" alt="img" />
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
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/17.jpg" alt="img" />
                                          <Link to="/contact" className="lets-circle">
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                              Project
                                              details
                                          </Link>
                                      </div>
                                      <div className="portfolio-content">
                                          <h6><span>//</span> creative art</h6>
                                          <h3><Link to="/project-details">Futuristic stylish model</Link></h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div id="animal" className="tab-pane fade">
                          <div className="row">
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/09.jpg" alt="img" />
                                          <Link to="/contact" className="lets-circle">
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                              Project
                                              details
                                          </Link>
                                      </div>
                                      <div className="portfolio-content">
                                          <h6><span>//</span> creative art</h6>
                                          <h3><Link to="/project-details">Futuristic stylish model</Link></h3>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/10.jpg" alt="img" />
                                          <Link to="/contact" className="lets-circle">
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                              Project
                                              details
                                          </Link>
                                      </div>
                                      <div className="portfolio-content">
                                          <h6><span>//</span> creative art</h6>
                                          <h3><Link to="/project-details">Bold and vibrant design</Link></h3>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/11.jpg" alt="img" />
                                          <Link to="/contact" className="lets-circle">
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                              Project
                                              details
                                          </Link>
                                      </div>
                                      <div className="portfolio-content">
                                          <h6><span>//</span> creative art</h6>
                                          <h3><Link to="/project-details">Breathtaking landscape</Link></h3>
                                      </div>
                                  </div>
                              </div>
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
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/15.jpg" alt="img" />
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
                                          <img src="/assets/img/project/16.jpg" alt="img" />
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
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/17.jpg" alt="img" />
                                          <Link to="/contact" className="lets-circle">
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                              Project
                                              details
                                          </Link>
                                      </div>
                                      <div className="portfolio-content">
                                          <h6><span>//</span> creative art</h6>
                                          <h3><Link to="/project-details">Futuristic stylish model</Link></h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div id="graphic" className="tab-pane fade">
                          <div className="row">
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/09.jpg" alt="img" />
                                          <Link to="/contact" className="lets-circle">
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                              Project
                                              details
                                          </Link>
                                      </div>
                                      <div className="portfolio-content">
                                          <h6><span>//</span> creative art</h6>
                                          <h3><Link to="/project-details">Futuristic stylish model</Link></h3>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/10.jpg" alt="img" />
                                          <Link to="/contact" className="lets-circle">
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                              Project
                                              details
                                          </Link>
                                      </div>
                                      <div className="portfolio-content">
                                          <h6><span>//</span> creative art</h6>
                                          <h3><Link to="/project-details">Bold and vibrant design</Link></h3>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/11.jpg" alt="img" />
                                          <Link to="/contact" className="lets-circle">
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                              Project
                                              details
                                          </Link>
                                      </div>
                                      <div className="portfolio-content">
                                          <h6><span>//</span> creative art</h6>
                                          <h3><Link to="/project-details">Breathtaking landscape</Link></h3>
                                      </div>
                                  </div>
                              </div>
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
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/15.jpg" alt="img" />
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
                                          <img src="/assets/img/project/16.jpg" alt="img" />
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
                              <div className="col-xl-4 col-lg-6 col-md-6">
                                  <div className="portfolio-card-items">
                                      <div className="portfolio-image">
                                          <img src="/assets/img/project/17.jpg" alt="img" />
                                          <Link to="/contact" className="lets-circle">
                                              <i className="fa-sharp fa-regular fa-arrow-up-right"></i> <br />
                                              Project
                                              details
                                          </Link>
                                      </div>
                                      <div className="portfolio-content">
                                          <h6><span>//</span> creative art</h6>
                                          <h3><Link to="/project-details">Futuristic stylish model</Link></h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="page-nav-wrap pt-5 text-center wow fadeInUp" data-wow-delay=".3s">
                      <ul>
                          <li><a className="page-numbers icon" href="#"><i className="fa-solid fa-arrow-left-long"></i></a></li>
                          <li><a className="page-numbers" href="#">01</a></li>
                          <li><a className="page-numbers" href="#">02</a></li>
                          <li><a className="page-numbers" href="#">03</a></li>
                          <li><a className="page-numbers icon" href="#"><i className="fa-solid fa-arrow-right-long"></i></a></li>
                      </ul>
                  </div>
              </div>
          </section>

    
          <div className="counter-section section-padding fix">
              <div className="container">
                  <div className="counter-wrapper">
                      <div className="counter-items wow fadeInUp" data-wow-delay=".3s">
                          <div className="icon">
                              <img src="/assets/img/icon/01.svg" alt="img" />
                          </div>
                          <div className="content">
                              <h2><span className="count">236</span></h2>
                              <p>Finished Projects</p>
                          </div>
                      </div>
                      <div className="counter-items wow fadeInUp" data-wow-delay=".5s">
                          <div className="icon">
                              <img src="/assets/img/icon/01.svg" alt="img" />
                          </div>
                          <div className="content">
                              <h2><span className="count">236</span></h2>
                              <p>Finished Projects</p>
                          </div>
                      </div>
                      <div className="counter-items wow fadeInUp" data-wow-delay=".7s">
                          <div className="icon">
                              <img src="/assets/img/icon/01.svg" alt="img" />
                          </div>
                          <div className="content">
                              <h2><span className="count">236</span></h2>
                              <p>Finished Projects</p>
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
                          Let’s discuss how we <br />
                          <span>support <b>creative</b> vision</span>
                      </h2>
                      <p>
                          Unlock the power of AI to generate the
                          high-quality images and videos in few seconds
                      </p>
                      <Link to="/contact" className="theme-btn">contact us <i
                              className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                  </div>
              </div>
          </section>
      <Footer />
    </>
  );
}
