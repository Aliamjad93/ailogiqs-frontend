import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import FooterHome3 from "../components/FooterHome3";

export default function HomeThree() {
  useEffect(() => {
    document.title = "Home 03 | AiLogiQs";
  }, []);

  return (
    <>
      <Header />
      <section className="hero-secton hero-3 bg-cover" style={{backgroundImage: 'url(\'/assets/img/hero/hero-4.jpg\')'}}>
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-7">
                          <div className="hero-content">
                              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                  <span>Create</span> unique
                                  content <span>in</span> second
                              </h1>
                              <p className="wow fadeInUp" data-wow-delay=".5s">
                                  Unlock the power of AI to generate high-quality images and videos in few seconds
                              </p>
                              <div className="hero-button wow fadeInUp" data-wow-delay=".7s">
                                  <Link to="/contact" className="theme-btn style-2">explore now <i
                                          className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="hero-image-items">
                      <div className="hero-image style-2 wow fadeInUp" data-wow-delay=".3s">
                          <img src="/assets/img/hero/02.jpg" alt="img" />
                      </div>
                      <div className="hero-image wow fadeInUp" data-wow-delay=".5s">
                          <img src="/assets/img/hero/03.jpg" alt="img" />
                      </div>
                      <div className="hero-image style-3 wow fadeInUp" data-wow-delay=".7s">
                          <img src="/assets/img/hero/04.jpg" alt="img" />
                      </div>
                  </div>
              </div>
          </section>

    
          <div className="brand-section section-padding section-bg bg-cover"
              style={{backgroundImage: 'url(\'/assets/img/brand/brand-bg.png\')'}}>
              <div className="container">
                  <h3 className="brand-title-2 style-2 text-center wow fadeInUp">Trusted by the great company</h3>
                  <div className="swiper brand-slider">
                      <div className="swiper-wrapper">
                          <div className="swiper-slide">
                              <div className="brand-image text-center">
                                  <img src="/assets/img/brand/01.png" alt="img" />
                              </div>
                          </div>
                          <div className="swiper-slide">
                              <div className="brand-image text-center">
                                  <img src="/assets/img/brand/02.png" alt="img" />
                              </div>
                          </div>
                          <div className="swiper-slide">
                              <div className="brand-image text-center">
                                  <img src="/assets/img/brand/03.png" alt="img" />
                              </div>
                          </div>
                          <div className="swiper-slide">
                              <div className="brand-image text-center">
                                  <img src="/assets/img/brand/04.png" alt="img" />
                              </div>
                          </div>
                          <div className="swiper-slide">
                              <div className="brand-image text-center">
                                  <img src="/assets/img/brand/05.png" alt="img" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

    
          <section className="about-section fix section-padding-2">
              <div className="vector-shape">
                  <img src="/assets/img/Vector.png" alt="img" />
              </div>
              <div className="vector-shape-2">
                  <img src="/assets/img/Vector-2.png" alt="img" />
              </div>
              <div className="container">
                  <div className="about-wrapper-3">
                      <div className="section-title-area">
                          <div className="section-title">
                              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                  Create <b>stunning</b> image <br />
                                  and video instantly <br />
                                  no <b>extra skills</b> needed
                              </h2>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-lg-5">
                              <div className="about-items">
                                  <div className="about-image img-custom-anim-top">
                                      <img src="/assets/img/about/02.jpg" alt="img" />
                                  </div>
                                  <div className="about-content">
                                      <h3 className="wow fadeInUp" data-wow-delay=".3s">
                                          Instant creativity
                                          at your <span>fingertips</span>
                                      </h3>
                                      <p className="wow fadeInUp" data-wow-delay=".5s">
                                          Duise sagittis accumsan magna over adipiscing laoreet ultrices magna consectetuer
                                          the iaculis rutrum morbi habitasse orci libero porttitor scelerisque acid vivamus
                                          molestie mollise ultrices egestas suscip
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-7">
                              <div className="about-image-items-2">
                                  <p className="about-text wow fadeInUp" data-wow-delay=".3s">
                                      Duise sagittis accumsan magna on adipiscing laoreet ultrices magna consectetuer eiaculis
                                      rutrum morbie habitasse orci libero porttitor scelerisque acid vivamus molestie mollise
                                  </p>
                                  <div className="row g-4">
                                      <div className="col-lg-12">
                                          <div className="about-image-2 img-custom-anim-top wow fadeInUp" data-wow-delay=".3s">
                                              <img src="/assets/img/about/03.jpg" alt="img" />
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="about-image-2 img-custom-anim-left wow fadeInUp" data-wow-delay=".3s">
                                              <img src="/assets/img/about/04.jpg" alt="img" />
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="about-image-2 img-custom-anim-right wow fadeInUp" data-wow-delay=".5s">
                                              <img src="/assets/img/about/05.jpg" alt="img" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <div className="marquee-section fix section-padding pt-0 margin-bottom-8 margin-top-5">
              <div className="mycustom-marque">
                  <div className="scrolling-wrap gap-100">
                      <div className="comm">
                          <div className="cmn-textslide textitalick text-custom-storke">design</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                          <div className="cmn-textslide textitalick text-custom-storke">image</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                          <div className="cmn-textslide textitalick text-custom-storke">video</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                      </div>
                      <div className="comm">
                          <div className="cmn-textslide textitalick text-custom-storke">design</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                          <div className="cmn-textslide textitalick text-custom-storke">image</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                          <div className="cmn-textslide textitalick text-custom-storke">video</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                      </div>
                      <div className="comm">
                          <div className="cmn-textslide textitalick text-custom-storke">design</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                          <div className="cmn-textslide textitalick text-custom-storke">image</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                          <div className="cmn-textslide textitalick text-custom-storke">video</div>
                          <img src="/assets/img/has-2.png" alt="img" />
                      </div>
                  </div>
              </div>
          </div>

    
          <section className="project-secton fix section-padding-2 pt-0">
              <div className="vector-shape">
                  <img src="/assets/img/Vector-3.png" alt="img" />
              </div>
              <div className="container">
                  <div className="row g-5 align-items-center">
                      <div className="col-lg-6">
                          <div className="project-box-image img-custom-anim-left">
                              <img src="/assets/img/project/04.jpg" alt="img" />
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="project-box-content">
                              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                  Text to video &
                                  Image <span>generate</span> easy ways
                              </h2>
                              <p className="wow fadeInUp" data-wow-delay=".5s">
                                  Duise sagittis accumsan magna on adipiscing laoreet ultrices magna consectetuer eiaculis
                                  rutrum morbie habitasse orci libero porttitor scelerisque acid vivamus molestie best mollise
                              </p>
                              <Link to="/project-details" className="theme-btn style-2">Generate now <i
                                      className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="project-box-content style-2">
                              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                  Easily upscaling and  <span>enhance</span> any image & video
                              </h2>
                              <p className="wow fadeInUp" data-wow-delay=".5s">
                                  Duise sagittis accumsan magna on adipiscing laoreet ultrices magna consectetuer eiaculis
                                  rutrum morbie habitasse orci libero porttitor scelerisque acid vivamus molestie best mollise
                              </p>
                              <Link to="/project-details" className="theme-btn style-2 wow fadeInUp"
                                  data-wow-delay=".7s">Generate now <i className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="project-box-image img-custom-anim-right">
                              <img src="/assets/img/project/05.jpg" alt="img" />
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="work-process-section fix section-padding-2 bg-cover"
              style={{backgroundImage: 'url(\'/assets/img/work-process-bg.jpg\')'}}>
              <div className="container">
                  <div className="section-title text-center">
                      <img src="/assets/img/title-icon.png" alt="img" className="wow fadeInUp mb-3" />
                      <h2 className="mb-3 wow fadeInUp" data-wow-delay=".3s">
                          Working <b>process</b>
                      </h2>
                      <p className="wow fadeInUp" data-wow-delay=".7s">Our professional grade visuals content created effortlessly
                      </p>
                  </div>
                  <div className="row">
                      <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                          <div className="work-process-items">
                              <div className="icon">
                                  <img src="/assets/img/icon/19.svg" alt="img" />
                              </div>
                              <div className="number">
                                  01
                              </div>
                              <div className="content">
                                  <h3>Choose style</h3>
                                  <p>
                                      Nullam purus egesta magna fames volutpat morbi torquent over theese ligula.
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                          <div className="work-process-items">
                              <div className="icon">
                                  <img src="/assets/img/icon/20.svg" alt="img" />
                              </div>
                              <div className="number">
                                  02
                              </div>
                              <div className="content">
                                  <h3>Write prompt</h3>
                                  <p>
                                      Nullam purus egesta magna fames volutpat morbi torquent over theese ligula.
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                          <div className="work-process-items">
                              <div className="icon">
                                  <img src="/assets/img/icon/21.svg" alt="img" />
                              </div>
                              <div className="number">
                                  03
                              </div>
                              <div className="content">
                                  <h3>Generate now</h3>
                                  <p>
                                      Nullam purus egesta magna fames volutpat morbi torquent over theese ligula.
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                          <div className="work-process-items">
                              <div className="icon">
                                  <img src="/assets/img/icon/22.svg" alt="img" />
                              </div>
                              <div className="number">
                                  04
                              </div>
                              <div className="content">
                                  <h3>Upscale image</h3>
                                  <p>
                                      Nullam purus egesta magna fames volutpat morbi torquent over theese ligula.
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-12">
                          <div className="cta-wrapper bg-cover" style={{backgroundImage: 'url(\'/assets/img/cta-bg.jpg\')'}}>
                              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                  Experience the future of <br />
                                  <span></span> creation
                              </h2>
                              <Link to="/contact" className="theme-btn style-2 wow fadeInUp" data-wow-delay=".5s">free generate
                                  <i className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="showcase-section fix section-padding-2 section-bg">
              <div className="container">
                  <div className="section-title-area">
                      <div className="section-title">
                          <h2 className="wow fadeInUp" data-wow-delay=".3s">
                              Explore best creation <br />
                              listed <b>showcase</b>
                          </h2>
                      </div>
                      <p className="text-width wow fadeInUp" data-wow-delay="/5s">
                          Duise sagittis accumsan magna adipiscing laoreet ultrices magna consectetuer eiaculis rutrum morbie
                          habitasse libero
                      </p>
                  </div>
              </div>
              <div className="container-fluid">
                  <div className="swiper showcase-slider">
                      <div className="swiper-wrapper">
                          <div className="swiper-slide">
                              <div className="showcase-items">
                                  <img src="/assets/img/project/06.jpg" alt="img" />
                              </div>
                          </div>
                          <div className="swiper-slide">
                              <div className="showcase-items">
                                  <img src="/assets/img/project/07.jpg" alt="img" />
                              </div>
                          </div>
                          <div className="swiper-slide">
                              <div className="showcase-items">
                                  <img src="/assets/img/project/08.jpg" alt="img" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="testimonial-section style-2 fix section-padding-2 pt-0">
              <div className="array-button">
                  <button className="array-prev"><i className="fa-regular fa-arrow-left"></i></button>
                  <button className="array-next"><i className="fa-regular fa-arrow-right"></i></button>
              </div>
              <div className="circle-shape">
                  <img src="/assets/img/testimonial/circle.png" alt="img" />
              </div>
              <div className="radius-shape">
                  <img src="/assets/img/testimonial/radius-circle.png" alt="img" />
              </div>
              <div className="circle-shape-2">
                  <img src="/assets/img/testimonial/circle-2.png" alt="img" />
              </div>
              <div className="circle-shape-3">
                  <img src="/assets/img/testimonial/circle-3.png" alt="img" />
              </div>
              <div className="vector-shape">
                  <img src="/assets/img/testimonial/vector.png" alt="img" />
              </div>
              <div className="container">
                  <div className="section-title text-center">
                      <img src="/assets/img/title-icon.png" alt="img" className="mb-3" />
                      <h2 className="mb-3 wow fadeInUp" data-wow-delay=".3s">
                          Clients <b>feedback</b>
                      </h2>
                      <p className="wow fadeInUp" data-wow-delay=".5s">Our professional grade visuals content created effortlessly
                      </p>
                  </div>
                  <div className="testimonial-wrapper-2">
                      <div className="client-image-items">
                          <div className="client-img">
                              <img src="/assets/img/testimonial/client-7.png" alt="img" />
                          </div>
                          <div className="client-img text-center">
                              <img src="/assets/img/testimonial/client-8.png" alt="img" />
                              <div className="star">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                              </div>
                          </div>
                          <div className="client-img">
                              <img src="/assets/img/testimonial/client-9.png" alt="img" />
                          </div>
                      </div>
                      <div className="swiper testimonial-slider-2">
                          <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                  <div className="testimonial-content">
                                      <p>
                                          Potenti might turpis dictumst Ridiculus pellentesque molestie consequat
                                          at egestas eleifend nisle montes duis. Hack leo pellentesque malesuada, orcide
                                          pretium blandit class sociosqu habitant duis convallis sed seme. Suscipit one
                                          senectus nonum rhoncus orci torquent ultricies congue facilisi nonummy sapien ipsum
                                          suspendisse feugiat at never dictumst massa.
                                      </p>
                                      <div className="client-info">
                                          <h3>Maryad C. Garcia</h3>
                                          <span>Ceo of nural</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="testimonial-content">
                                      <p>
                                          Potenti might turpis dictumst Ridiculus pellentesque molestie consequat
                                          at egestas eleifend nisle montes duis. Hack leo pellentesque malesuada, orcide
                                          pretium blandit class sociosqu habitant duis convallis sed seme. Suscipit one
                                          senectus nonum rhoncus orci torquent ultricies congue facilisi nonummy sapien ipsum
                                          suspendisse feugiat at never dictumst massa.
                                      </p>
                                      <div className="client-info">
                                          <h3>Maryad C. Garcia</h3>
                                          <span>Ceo of nural</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="testimonial-content">
                                      <p>
                                          Potenti might turpis dictumst Ridiculus pellentesque molestie consequat
                                          at egestas eleifend nisle montes duis. Hack leo pellentesque malesuada, orcide
                                          pretium blandit class sociosqu habitant duis convallis sed seme. Suscipit one
                                          senectus nonum rhoncus orci torquent ultricies congue facilisi nonummy sapien ipsum
                                          suspendisse feugiat at never dictumst massa.
                                      </p>
                                      <div className="client-info">
                                          <h3>Maryad C. Garcia</h3>
                                          <span>Ceo of nural</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <div className="paralax-section-2 fix bg-cover" style={{backgroundImage: 'url(\'/assets/img/paralax-bg-2.jpg\')'}}>
              <div className="video-text">
                  <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                      <i className="fas fa-play"></i>
                  </a>
                  <h3>Free training</h3>
              </div>
          </div>

    
          <section className="news-section fix section-padding-2">
              <div className="container">
                  <div className="section-title text-center">
                      <img src="/assets/img/title-icon.png" alt="img" className="mb-3" />
                      <h2 className="mb-3 wow fadeInUp" data-wow-delay=".3s">
                          Recent <b>article</b>
                      </h2>
                      <p className="wow fadeInUp" data-wow-delay=".3s">Our professional grade visuals content created effortlessly
                      </p>
                  </div>
                  <div className="row">
                      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                          <div className="news-box-items-2">
                              <div className="news-image">
                                  <img src="/assets/img/news/04.jpg" alt="img" />
                              </div>
                              <div className="news-content">
                                  <ul className="post-cat">
                                      <li>
                                          <i className="fa-regular fa-calendar-days"></i>
                                          20 jul. 2024
                                      </li>
                                      <li>
                                          <i className="fa-regular fa-folder-open"></i>
                                          digital art
                                      </li>
                                  </ul>
                                  <h3><Link to="/news-details">Name fames pellen tesque
                                          tincidunt an vivamu duis
                                          tortor distract from the velie</Link></h3>
                                  <Link to="/news-details" className="icon">
                                      <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                  </Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                          <div className="news-box-items-2">
                              <div className="news-image">
                                  <img src="/assets/img/news/05.jpg" alt="img" />
                              </div>
                              <div className="news-content">
                                  <ul className="post-cat">
                                      <li>
                                          <i className="fa-regular fa-calendar-days"></i>
                                          20 jul. 2024
                                      </li>
                                      <li>
                                          <i className="fa-regular fa-folder-open"></i>
                                          digital art
                                      </li>
                                  </ul>
                                  <h3><Link to="/news-details">Suspen duine feugiat dolor
                                          behicula over interdum
                                          there wasd over page break </Link></h3>
                                  <Link to="/news-details" className="icon">
                                      <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                  </Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                          <div className="news-box-items-2">
                              <div className="news-image">
                                  <img src="/assets/img/news/05.jpg" alt="img" />
                              </div>
                              <div className="news-content">
                                  <ul className="post-cat">
                                      <li>
                                          <i className="fa-regular fa-calendar-days"></i>
                                          20 jul. 2024
                                      </li>
                                      <li>
                                          <i className="fa-regular fa-folder-open"></i>
                                          digital art
                                      </li>
                                  </ul>
                                  <h3><Link to="/news-details">Penatibus ipsum urna matis
                                          porttitor consequat risus
                                          elementum produse sodales</Link></h3>
                                  <Link to="/news-details" className="icon">
                                      <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      <FooterHome3 />
    </>
  );
}
