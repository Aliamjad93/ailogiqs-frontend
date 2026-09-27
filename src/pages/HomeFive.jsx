import { useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderHome5 from "../components/HeaderHome5";
import FooterHome5 from "../components/FooterHome5";

export default function HomeFive() {
  useEffect(() => {
    document.title = "Home 05 | AiLogiQs";
  }, []);

  return (
    <>
      <HeaderHome5 />
      <section className="hero-section hero-5 fix">
              <div className="social-icon-list d-flex align-items-center">
                  <a href="#"> linkedin</a>
                  <a href="#">twitter </a>
                  <a href="#">facebook</a>
              </div>
              <div className="container-fluid">
                  <div className="row g-4">
                      <div className="col-lg-6">
                          <div className="hero-image">
                              <img src="/assets/img/home-5/hero/hero-1.jpg" alt="img" className="wow img-custom-anim-left" data-wow-duration="1.3s" data-wow-delay="0.3s" />
                              <div className="hero-image-2">
                                  <img src="/assets/img/home-5/hero/hero-2.jpg" alt="img" className="wow img-custom-anim-top" data-wow-duration="1.3s" data-wow-delay="0.3s" />
                                  <div className="hero-text">
                                      <div className="icon">
                                          <img src="/assets/img/home-5/hero/arrow.png" alt="img" />
                                      </div>
                                      <h4>
                                          20 years <br />
                                          experience
                                      </h4>
                                  </div>
                                  <div className="shape-image">
                                      <img src="/assets/img/home-5/hero/shape.png" alt="img" className="wow img-custom-anim-right" data-wow-duration="1.3s" data-wow-delay="0.3s" />
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="hero-content">
                              <h1 className="wow img-custom-anim-left" data-wow-duration="1.3s" data-wow-delay="0.3s">
                                  AI-Powered Interior Design Made Easy <img src="/assets/img/home-5/hero/star.png" alt="img" className="float-bob-y" />
                              </h1>
                              <p className="wow fadeInUp" data-wow-delay=".3s">
                                  Bonubia cumis accumsan massa mattis curae convallis parturient massa semper quam fermentum facilis mauris many dolor see after
                              </p>
                              <div className="hero-button-item wow fadeInUp" data-wow-delay=".5s">
                                  <a href="#" className="circle-button">
                                     <span className="btn-text">Learn <br /> more</span>
                                     <i className="fa-solid fa-arrow-right-long"></i>
                                  </a>
                                  <div className="hero-cont">
                                      <h3>W.</h3>
                                      <h4>
                                          Award winner <br />
                                          company
                                      </h4>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="why-choose-us-section section-padding fix">
              <div className="container">
                  <div className="section-title style-5 text-center">
                      <h6 className="text-primary wow fadeInUp" data-wow-delay=".3s">
                          Why Choose Us 
                      </h6>
                      <h2 className="text-black wow fadeInUp" data-wow-delay=".5s">
                          Design Meets Technology
                      </h2>
                  </div>
                  <div className="row g-0">
                      <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                          <div className="why-choose-us-item-5 style-5">
                              <div className="icon">
                                  <img src="/assets/img/home-5/icon/01.svg" alt="img" />
                              </div>
                              <div className="content">
                                  <h3>
                                      AI-Powered Room Design
                                  </h3>
                                  <p>
                                      Generate personalized layouts and decor suggestions
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                          <div className="why-choose-us-item-5">
                              <div className="icon">
                                  <img src="/assets/img/home-5/icon/02.svg" alt="img" />
                              </div>
                              <div className="content">
                                  <h3>
                                       Budget-Friendly Planning
                                  </h3>
                                  <p>
                                      Generate personalized layouts and decor suggestions
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                          <div className="why-choose-us-item-5 style-5">
                              <div className="icon">
                                  <img src="/assets/img/home-5/icon/03.svg" alt="img" />
                              </div>
                              <div className="content">
                                  <h3>
                                       Smart Color Palette Generator
                                  </h3>
                                  <p>
                                      Generate personalized layouts and decor suggestions
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                          <div className="why-choose-us-item-5">
                              <div className="icon">
                                  <img src="/assets/img/home-5/icon/04.svg" alt="img" />
                              </div>
                              <div className="content">
                                  <h3>
                                       Personalized Mood Boards
                                  </h3>
                                  <p>
                                      Generate personalized layouts and decor suggestions
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="feature-ai-section section-padding fix pt-0">
              <div className="container">
                  <div className="feature-ai-wrapper-5">
                      <div className="row g-4 align-content-center">
                          <div className="col-lg-6">
                              <div className="feature-ai-content">
                                  <div className="section-title style-5 mb-0">
                                      <h6 className="style-new text-primary wow fadeInUp" data-wow-delay=".3s">
                                          Who We Are
                                      </h6>
                                      <h2 className="wow fadeInUp text-black" data-wow-delay=".5s">
                                          Where AI Meets Interior Design
                                      </h2>
                                  </div>
                                  <p className="text wow fadeInUp" data-wow-delay=".3s">
                                      We combine advanced AI technology with creative design to craft personalized, stylish, and functional living spaces—making interior design effortless and accessible for everyone.
                                  </p>
                                  <div className="feature-ai-item wow fadeInUp" data-wow-delay=".5s">
                                      <div className="icon">
                                          <img src="/assets/img/home-5/icon/05.svg" alt="img" />
                                      </div>
                                      <div className="content">
                                          <h5>
                                              modern Design
                                          </h5>
                                          <p>
                                              After all, what's the issue with bad rent by real in? However, she lived despite the fact that
                                          </p>
                                      </div>
                                  </div>
                                  <div className="feature-ai-item wow fadeInUp" data-wow-delay=".3s">
                                      <div className="icon">
                                          <img src="/assets/img/home-5/icon/06.svg" alt="img" />
                                      </div>
                                      <div className="content">
                                          <h5>
                                              quality work
                                          </h5>
                                          <p>
                                              After all, what's the issue with bad rent by real in? However, she lived despite the fact that
                                          </p>
                                      </div>
                                  </div>
                                  <Link to="/contact" className="theme-btn style-5 wow fadeInUp" data-wow-delay=".5s">
                                      Learn more <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                  </Link>
                              </div>
                          </div>
                         <div className="col-lg-6">
                              <div className="feature-ai-image">
                                 <img src="/assets/img/home-5/feature/01.jpg" alt="img" className="wow img-custom-anim-right" data-wow-duration="1.3s" data-wow-delay="0.3s" />
                                 <div className="video-bg bg-cover wow img-custom-anim-top" data-wow-duration="1.3s" data-wow-delay="0.3s" style={{backgroundImage: 'url(assets/img/home-5/feature/02.jpg)'}}>
                                     <div className="video-content">
                                           <div className="video-button">
                                              <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn video-popup">
                                               <i className="fa-solid fa-play"></i>
                                             </a>
                                          </div>
                                          <h3>
                                              founded <br />
                                              in 1965
                                          </h3>
                                          <p>
                                              Meat It so fish a morning, may night for grass shall moved 
                                          </p>
                                     </div>
                                 </div>
                            </div>
                         </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="video-bg-section fix">
              <div className="vector-shape">
                  <img src="/assets/img/home-5/Vector.png" alt="img" />
              </div>
              <div className="container-fluid">
                  <div className="video-wrapper bg-cover" style={{backgroundImage: 'url(assets/img/home-5/video.jpg)'}}>
                      <div className="video-button">
                          <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                              <i className="fa-solid fa-play"></i>
                          </a>
                      </div>
                  </div>
                  <div className="brand-wrapper-5">
                      <div className="swiper brand-slider">
                          <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                  <div className="brand-image text-center">
                                      <img src="/assets/img/home-5/brand/01.png" alt="img" />
                                  </div>
                                  </div>
                                  <div className="swiper-slide">
                                      <div className="brand-image text-center">
                                          <img src="/assets/img/home-5/brand/02.png" alt="img" />
                                      </div>
                                  </div>
                                  <div className="swiper-slide">
                                      <div className="brand-image text-center">
                                          <img src="/assets/img/home-5/brand/03.png" alt="img" />
                                      </div>
                                  </div>
                                  <div className="swiper-slide">
                                      <div className="brand-image text-center">
                                          <img src="/assets/img/home-5/brand/04.png" alt="img" />
                                      </div>
                                  </div>
                                  <div className="swiper-slide">
                                      <div className="brand-image text-center">
                                      <img src="/assets/img/home-5/brand/05.png" alt="img" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="project-section-5 section-padding">
              <div className="container">
                  <div className="section-title-area">
                      <div className="section-title style-5">
                          <h6 className="text-primary wow fadeInUp" data-wow-delay=".3s">
                              Featured Projects
                          </h6>
                          <h2 className="text-black wow fadeInUp" data-wow-delay=".5s">
                              AI Home Makeover Gallery
                          </h2>
                    </div>
                    <Link to="/project" className="theme-btn style-5 wow fadeInUp" data-wow-delay=".5s">
                          view all project <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                      </Link>
                  </div>
                  <div className="row">
                      <div className="col-xl-12">
                          <div className="project-image-item-5">
                              <div className="project-image">
                                  <img src="/assets/img/home-5/project/01.jpg" alt="img" />
                                  <div className="project-content">
                                      <h2>
                                          <Link to="/project-details">Luxurious Home</Link>
                                      </h2>
                                      <p>
                                          _Interior Design
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div className="project-image-item-5">
                              <div className="project-image">
                                  <img src="/assets/img/home-5/project/02.jpg" alt="img" />
                                  <div className="project-content">
                                      <h2>
                                          <Link to="/project-details">Soft Minimalism</Link>
                                      </h2>
                                      <p>
                                          _Interior Design
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div className="project-image-item-5">
                              <div className="project-image">
                                  <img src="/assets/img/home-5/project/03.jpg" alt="img" />
                                  <div className="project-content">
                                      <h2>
                                          <Link to="/project-details">Modern Kitchen</Link>
                                      </h2>
                                      <p>
                                          _Interior Design
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
         <section className="achievement-section section-padding bg-color fix">
              <div className="container">
                  <div className="section-title style-5 text-center">
                      <h6 className="text-primary wow fadeInUp" data-wow-delay=".3s">
                           our achievement
                      </h6>
                      <h2 className="text-black wow fadeInUp" data-wow-delay=".5s">
                          international awards
                      </h2>
                    </div>
                  <div className="row">
                      <div className="col-xl-12">
                          <div className="achievement-box-items wow fadeInUp" data-wow-delay=".3s">
                              <div className="accordion-single">
                                  <div className="header-area">
                                      <div className="accordion-btn">
                                          <div className="logo-item">
                                            <div className="logo">
                                              <img src="/assets/img/home-5/feature/logo-1.png" alt="" />
                                            </div>
                                              <h3>
                                                  Modern Minimalist <br /> Living Room
                                              </h3>
                                          </div>
                                          <div className="content-item">
                                          <p>
                                              A sleek, clutter-free space optimized by AI for natural light and comfort, featuring smart furniture placement 
                                          </p>
                                          <div className="achievement-image">
                                              <img src="/assets/img/home-5/feature/03.jpg" alt="img" />
                                          </div>
                                          <ul className="button-list">
                                              <li>
                                                  <i className="fa-solid fa-calendar-days"></i>
                                                  December 2022
                                              </li>
                                          </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="achievement-box-items wow fadeInUp" data-wow-delay=".5s">
                              <div className="accordion-single">
                                  <div className="header-area">
                                      <div className="accordion-btn">
                                          <div className="logo-item">
                                            <div className="logo">
                                              <img src="/assets/img/home-5/feature/logo-2.png" alt="" />
                                            </div>
                                              <h3>
                                                  Modern Minimalist <br /> Living Room
                                              </h3>
                                          </div>
                                          <div className="content-item">
                                          <p>
                                              A sleek, clutter-free space optimized by AI for natural light and comfort, featuring smart furniture placement 
                                          </p>
                                          <div className="achievement-image">
                                              <img src="/assets/img/home-5/feature/04.jpg" alt="img" />
                                          </div>
                                          <ul className="button-list">
                                              <li>
                                                  <i className="fa-solid fa-calendar-days"></i>
                                                  December 2022
                                              </li>
                                          </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="achievement-box-items wow fadeInUp" data-wow-delay=".7s">
                              <div className="accordion-single">
                                  <div className="header-area">
                                      <div className="accordion-btn">
                                          <div className="logo-item">
                                            <div className="logo">
                                              <img src="/assets/img/home-5/feature/logo-3.png" alt="" />
                                            </div>
                                              <h3>
                                                  Modern Minimalist <br /> Living Room
                                              </h3>
                                          </div>
                                          <div className="content-item">
                                          <p>
                                              A sleek, clutter-free space optimized by AI for natural light and comfort, featuring smart furniture placement 
                                          </p>
                                          <div className="achievement-image">
                                              <img src="/assets/img/home-5/feature/03.jpg" alt="img" />
                                          </div>
                                          <ul className="button-list">
                                              <li>
                                                  <i className="fa-solid fa-calendar-days"></i>
                                                  December 2022
                                              </li>
                                          </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
         </section>

   
          <section className="team-section-5 section-padding fix">
              <div className="container">
                  <div className="section-title-area">
                      <div className="section-title style-5">
                          <h6 className="text-primary wow fadeInUp" data-wow-delay=".3s">
                              team member
                          </h6>
                          <h2 className="text-black wow fadeInUp" data-wow-delay=".5s">
                              expert interior designers
                          </h2>
                    </div>
                     <div className="array-buttons wow fadeInUp" data-wow-delay=".5s">
                          <button className="array-prev"><i className="fas fa-arrow-left"></i></button>
                          <button className="array-next"><i className="fas fa-arrow-right"></i></button>
                      </div>
                  </div>
                  <div className="swiper team-slider">
                      <div className="swiper-wrapper">
                          <div className="swiper-slide">
                              <div className="team-card-item-5">
                                 <div className="team-image">
                                  <img src="/assets/img/home-5/team/01.jpg" alt="img" />
                                  <div className="social-profile">
                                      <ul>
                                          <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                                          <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                          <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                      </ul>
                                      <span className="plus-btn"><i className="fa-solid fa-share-nodes"></i></span>
                                  </div>
                              </div>
                              <div className="team-content">
                                  <h5>
                                      <Link to="/team">Phillip Michael</Link>
                                  </h5>
                                  <p>
                                      Chief Executive
                                  </p>
                              </div>
                             </div>
                          </div>
                          <div className="swiper-slide">
                              <div className="team-card-item-5">
                                 <div className="team-image">
                                  <img src="/assets/img/home-5/team/02.jpg" alt="img" />
                                  <div className="social-profile">
                                      <ul>
                                          <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                                          <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                          <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                      </ul>
                                      <span className="plus-btn"><i className="fa-solid fa-share-nodes"></i></span>
                                  </div>
                              </div>
                              <div className="team-content">
                                  <h5>
                                      <Link to="/team">Heath Martin</Link>
                                  </h5>
                                  <p>
                                      Senior Architect
                                  </p>
                              </div>
                             </div>
                          </div>
                          <div className="swiper-slide">
                              <div className="team-card-item-5">
                                 <div className="team-image">
                                  <img src="/assets/img/home-5/team/03.jpg" alt="img" />
                                  <div className="social-profile">
                                      <ul>
                                          <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                                          <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                          <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                      </ul>
                                      <span className="plus-btn"><i className="fa-solid fa-share-nodes"></i></span>
                                  </div>
                              </div>
                              <div className="team-content">
                                  <h5>
                                      <Link to="/team">Richad Shatle</Link>
                                  </h5>
                                  <p>
                                      Chief Executive
                                  </p>
                              </div>
                             </div>
                          </div>
                           <div className="swiper-slide">
                              <div className="team-card-item-5">
                                 <div className="team-image">
                                  <img src="/assets/img/home-5/team/04.jpg" alt="img" />
                                  <div className="social-profile">
                                      <ul>
                                          <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                                          <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                          <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                      </ul>
                                      <span className="plus-btn"><i className="fa-solid fa-share-nodes"></i></span>
                                  </div>
                              </div>
                              <div className="team-content">
                                  <h5>
                                      <Link to="/team">Andrew Schitz</Link>
                                  </h5>
                                  <p>
                                      Chief Executive
                                  </p>
                              </div>
                             </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="testimonial-section-5 section-padding fix pt-0">
               <div className="array-buttons">
                  <button className="array-prev"><i className="fas fa-arrow-left"></i></button>
                  <button className="array-next"><i className="fas fa-arrow-right"></i></button>
              </div>
              <div className="testimonial-wrapper-5">
                  <div className="swiper testimonial-slider-5">
                      <div className="swiper-wrapper">
                          <div className="swiper-slide">
                              <div className="testimonial-box-item-5">
                                  <div className="testimonial-image">
                                      <img src="/assets/img/home-5/team/01.jpg" alt="img" />
                                  </div>
                                  <div className="testimonial-content">
                                      <p>
                                          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula
                                      </p>
                                      <div className="client-info-item">
                                          <div className="content">
                                              <h5>
                                                  Alexsia Jorgina
                                              </h5>
                                              <span>
                                                  From USA
                                              </span>
                                          </div>
                                          <div className="icon">
                                              <img src="/assets/img/home-5/testimonial/Frame.svg" alt="img" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="swiper-slide">
                              <div className="testimonial-box-item-5">
                                  <div className="testimonial-image">
                                      <img src="/assets/img/home-5/team/02.jpg" alt="img" />
                                  </div>
                                  <div className="testimonial-content">
                                      <p>
                                          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula
                                      </p>
                                      <div className="client-info-item">
                                          <div className="content">
                                              <h5>
                                                  Alexsia Jorgina
                                              </h5>
                                              <span>
                                                  From USA
                                              </span>
                                          </div>
                                          <div className="icon">
                                              <img src="/assets/img/home-5/testimonial/Frame.svg" alt="img" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                           <div className="swiper-slide">
                              <div className="testimonial-box-item-5">
                                  <div className="testimonial-image">
                                      <img src="/assets/img/home-5/team/03.jpg" alt="img" />
                                  </div>
                                  <div className="testimonial-content">
                                      <p>
                                          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula
                                      </p>
                                      <div className="client-info-item">
                                          <div className="content">
                                              <h5>
                                                  Alexsia Jorgina
                                              </h5>
                                              <span>
                                                  From USA
                                              </span>
                                          </div>
                                          <div className="icon">
                                              <img src="/assets/img/home-5/testimonial/Frame.svg" alt="img" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

     
          <section className="news-section-5 section-padding fix bg-color-2">
              <div className="container">
                  <div className="section-title style-5 text-center">
                      <h6 className="text-primary wow fadeInUp" data-wow-delay=".3s">
                          recent post
                      </h6>
                      <h2 className="text-white wow fadeInUp" data-wow-delay=".5s">
                          expert interior designers
                      </h2>
                    </div>
                  <div className="row">
                      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                          <div className="news-card-items-5">
                              <div className="news-image">
                                  <img src="/assets/img/home-5/news/01.jpg" alt="img" />
                                  <Link to="/news-details" className="arrow-icon">
                                      <i className="fas fa-arrow-right"></i>
                                  </Link>
                              </div>
                              <div className="news-content">
                                  <ul className="news-meta">
                                      <li>
                                          <i className="fa-regular fa-file"></i>
                                          Architecture
                                      </li>
                                      <li className="style-2">
                                          May 26, 2024
                                      </li>
                                  </ul>
                                  <h3>
                                      <Link to="/news-details">
                                          Designing Small Spaces How AI Maximizes Every Inch
                                      </Link>
                                  </h3>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                          <div className="news-card-items-5">
                              <div className="news-image">
                                  <img src="/assets/img/home-5/news/02.jpg" alt="img" />
                                  <Link to="/news-details" className="arrow-icon">
                                      <i className="fas fa-arrow-right"></i>
                                  </Link>
                              </div>
                              <div className="news-content">
                                  <ul className="news-meta">
                                      <li>
                                          <i className="fa-regular fa-file"></i>
                                          Architecture
                                      </li>
                                      <li className="style-2">
                                          May 26, 2024
                                      </li>
                                  </ul>
                                  <h3>
                                      <Link to="/news-details">
                                          Virtual Reality & AI The New Frontier of Home Design
                                      </Link>
                                  </h3>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                          <div className="news-card-items-5">
                              <div className="news-image">
                                  <img src="/assets/img/home-5/news/03.jpg" alt="img" />
                                  <Link to="/news-details" className="arrow-icon">
                                      <i className="fas fa-arrow-right"></i>
                                  </Link>
                              </div>
                              <div className="news-content">
                                  <ul className="news-meta">
                                      <li>
                                          <i className="fa-regular fa-file"></i>
                                          Architecture
                                      </li>
                                      <li className="style-2">
                                          May 26, 2024
                                      </li>
                                  </ul>
                                  <h3>
                                      <Link to="/news-details">
                                          AI and Home Renovations What You Need to Know
                                      </Link>
                                  </h3>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      <FooterHome5 />
    </>
  );
}
