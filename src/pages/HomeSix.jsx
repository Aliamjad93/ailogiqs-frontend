import { useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderHome6 from "../components/HeaderHome6";
import FooterHome6 from "../components/FooterHome6";

export default function HomeSix() {
  useEffect(() => {
    document.title = "Home 06 | AiLogiQs";
  }, []);

  return (
    <>
      <HeaderHome6 />
      <section className="hero-section hero-6 fix bg-cover"  style={{backgroundImage: 'url(assets/img/home-6/hero/bg.jpg)'}}>
              <div className="container-fluid">
                  <div className="row g-4 align-items-center">
                      <div className="col-lg-6">
                          <div className="hero-content">
                              <div className="text">
                                  <span></span>
                                  <h6>Future of Learning</h6>
                              </div>
                              <h1 className="wow img-custom-anim-left" data-wow-duration="1.3s" data-wow-delay="0.3s">
                                 Redefining Classrooms with Smart Technology
                              </h1>
                              <p className="wow fadeInUp" data-wow-delay=".3s">
                                 We harness the power of AI to create personalized, engaging, and efficient learning experiences—empowering students and educators with tools that adapt, evolve, and elevate the way we teach and learn.
                              </p>
                              <Link to="/contact" className="theme-btn wow fadeInUp" data-wow-delay=".5s">Get Started Free</Link>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="hero-image">
                              <img src="/assets/img/home-6/hero/01.png" alt="img" className="wow img-custom-anim-left" data-wow-duration="1.3s" data-wow-delay="0.3s" />
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <div className="marquee-section">
              <div className="mycustom-marque marque-bg">
                  <div className="scrolling-wrap-6">
                      <div className="comm">
                          <div></div>
                          <div className="cmn-textslide"><i className="fa-solid fa-star"></i> Image generator</div>
                          <div className="cmn-textslide"><i className="fa-solid fa-star"></i> anime</div>
                          <div className="cmn-textslide"><i className="fa-solid fa-star"></i> text to image</div>
                          <div className="cmn-textslide"><i className="fa-solid fa-star"></i> artist</div>
                          <div className="cmn-textslide"><i className="fa-solid fa-star"></i> image to image</div>
                      </div>
                      <div className="comm">
                          <div></div>
                          <div className="cmn-textslide"><i className="fa-solid fa-star"></i> Image generator</div>
                          <div className="cmn-textslide"><i className="fa-solid fa-star"></i> anime</div>
                          <div className="cmn-textslide"><i className="fa-solid fa-star"></i> text to image</div>
                          <div className="cmn-textslide"><i className="fa-solid fa-star"></i> artist</div>
                          <div className="cmn-textslide"><i className="fa-solid fa-star"></i> image to image</div>
                      </div>
                      <div className="comm">
                          <div></div>
                          <div className="cmn-textslide"><i className="fa-solid fa-star"></i> Image generator</div>
                          <div className="cmn-textslide"><i className="fa-solid fa-star"></i> anime</div>
                          <div className="cmn-textslide"><i className="fa-solid fa-star"></i> text to image</div>
                          <div className="cmn-textslide"><i className="fa-solid fa-star"></i> artist</div>
                          <div className="cmn-textslide"><i className="fa-solid fa-star"></i> image to image</div>
                      </div>
                  </div>
              </div>
          </div>

    
          <section className="about-section section-padding fix bg-cover" style={{backgroundImage: 'url(assets/img/home-6/about/bg.jpg)'}}>
              <div className="container">
                  <div className="about-wrapper-6">
                      <div className="row g-4">
                          <div className="col-lg-6">
                              <div className="about-image">
                                  <img src="/assets/img/home-6/about/01.jpg" alt="img" className="wow img-custom-anim-top" data-wow-duration="1.3s" data-wow-delay="0.3s" />
                                  <div className="about-image-2 wow img-custom-anim-right" data-wow-duration="1.3s" data-wow-delay="0.3s">
                                      <img src="/assets/img/home-6/about/02.jpg" alt="img" />
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="about-content">
                                  <div className="section-title style-6 mb-0">
                                      <h6 className="wow fadeInUp" data-wow-delay=".3s">
                                          About Us
                                      </h6>
                                      <h2 className="text-white wow fadeInUp" data-wow-delay=".5s">
                                          Building the Future of Education
                                      </h2>
                                  </div>
                                  <p className="text wow fadeInUp" data-wow-delay=".3s">
                                      We combine artificial intelligence with educational expertise to create smart, adaptive learning environments that inspire growth, personalize instruction, and prepare students for a rapidly changing world.
                                  </p>
                                  <div className="about-content-item wow fadeInUp" data-wow-delay=".5s">
                                      <div className="count-item">
                                          <h2><span className="count">590</span>+</h2>
                                          <p>
                                              Satisfied <br /> Students
                                          </p>
                                      </div>
                                      <div className="about-item">
                                          <div className="about-icon-item">
                                          <div className="icon">
                                              <i className="fa fa-graduation-cap"></i>
                                          </div>
                                          <div className="content">
                                              <h5>Skill Scholarships</h5>
                                              <p>
                                                  After all, what's the issue with bad rent by real in? However, she lived despite the fact that
                                              </p>
                                          </div>
                                      </div>
                                      <div className="about-icon-item mb-0">
                                          <div className="icon">
                                              <i className="fas fa-handshake"></i>
                                          </div>
                                          <div className="content">
                                              <h5>Our Commitment</h5>
                                              <p>
                                                  After all, what's the issue with bad rent by real in? However, she lived despite the fact that
                                              </p>
                                          </div>
                                       </div>
                                      </div>
                                  </div>
                                  <Link to="/about" className="theme-btn wow fadeInUp" data-wow-delay=".3s">
                                      More about us <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="what-offer-section section-padding fix header-bg-6">
              <div className="container">
                  <div className="offer-wrapper-6">
                      <div className="row g-4">
                          <div className="col-xl-4">
                              <div className="offer-content">
                                  <div className="section-title style-6 mb-0">
                                      <h6 className="wow fadeInUp">
                                          What We Offer
                                      </h6>
                                      <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                          Smart Education Services
                                      </h2>
                                  </div>
                                  <p className="text wow fadeInUp" data-wow-delay=".5s">
                                      Our AI-driven education services deliver personalized learning, real-time insights, and adaptive tools that support students, 
                                  </p>
                                  <div className="array-buttons wow fadeInUp" data-wow-delay=".3s">
                                      <button className="array-prev"><i className="fas fa-arrow-left"></i></button>
                                      <button className="array-next"><i className="fas fa-arrow-right"></i></button>
                                  </div>
                              </div>
                          </div>
                          <div className="col-xl-8">
                              <div className="swiper offer-slider">
                                  <div className="swiper-wrapper">
                                      <div className="swiper-slide">
                                          <div className="offer-box-item-6">
                                              <div className="icon">
                                                  <img src="/assets/img/home-6/icon/01.svg" alt="img" />
                                              </div>
                                              <div className="content">
                                                  <h4>
                                                      Personalized Learning <br /> Paths
                                                  </h4>
                                                  <p>
                                                      AI tailors course content and pace to each student's 
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="swiper-slide">
                                          <div className="offer-box-item-6 style-6">
                                              <div className="icon">
                                                  <img src="/assets/img/home-6/icon/02.svg" alt="img" />
                                              </div>
                                              <div className="content">
                                                  <h4>
                                                      Intelligent Tutoring <br /> Systems
                                                  </h4>
                                                  <p>
                                                      Virtual tutors that provide instant feedback 
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="swiper-slide">
                                          <div className="offer-box-item-6 style-6">
                                              <div className="icon">
                                                  <img src="/assets/img/home-6/icon/03.svg" alt="img" />
                                              </div>
                                              <div className="content">
                                                  <h4>
                                                      AI-Powered Content <br /> Creation
                                                  </h4>
                                                  <p>
                                                      Generate custom quizzes, study materials, and lesson.
                                                  </p>
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

    
          <section className="project-section-6 section-padding fix header-bg-6">
              <div className="section-title style-6 text-center">
                  <h6 className="wow fadeInUp">
                     Project MindSync
                  </h6>
                  <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                      Project EduAI
                  </h2>
              </div>
              <div className="container">
                  <div className="row">
                      <div className="col-xl-4 col-lg-6 col-md-6">
                          <div className="prpject-card-items-6">
                              <div className="project-image">
                                  <img src="/assets/img/home-6/project/01.jpg" alt="img" />
                                  <div className="project-content">
                                      <p>Concept Art</p>
                                      <h3>
                                          <Link to="/project-details">Military artistic women</Link>
                                      </h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6">
                          <div className="prpject-card-items-6">
                              <div className="project-image">
                                  <img src="/assets/img/home-6/project/02.jpg" alt="img" />
                                  <div className="project-content">
                                      <p>Concept Art</p>
                                      <h3>
                                          <Link to="/project-details">Military artistic women</Link>
                                      </h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6">
                          <div className="prpject-card-items-6">
                              <div className="project-image">
                                  <img src="/assets/img/home-6/project/03.jpg" alt="img" />
                                  <div className="project-content">
                                      <p>Concept Art</p>
                                      <h3>
                                          <Link to="/project-details">Military artistic women</Link>
                                      </h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="testimonial-section-6 section-padding fix bg-color-6 pb-0">
              <div className="client-1">
                  <img src="/assets/img/home-6/testimonial/client-1.png" alt="img" />
              </div>
              <div className="client-2">
                  <img src="/assets/img/home-6/testimonial/client-2.png" alt="img" />
              </div>
               <div className="client-3">
                  <img src="/assets/img/home-6/testimonial/client-3.png" alt="img" />
              </div>
               <div className="client-4">
                  <img src="/assets/img/home-6/testimonial/client-4.png" alt="img" />
              </div>
              <div className="client-5">
                  <img src="/assets/img/home-6/testimonial/client-5.png" alt="img" />
              </div>
              <div className="container">
                  <div className="section-title-area">
                       <div className="section-title style-6">
                          <h6 className="wow fadeInUp">
                             What Our Users Say
                          </h6>
                          <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                              Student & Educator Feedback
                          </h2>
                      </div>
                      <div className="array-buttons mt-0 wow fadeInUp" data-wow-delay=".5s">
                          <button className="array-prev"><i className="fas fa-arrow-left"></i></button>
                          <button className="array-next"><i className="fas fa-arrow-right"></i></button>
                      </div>
                  </div>
                  <div className="testimonial-wrapper-6">
                      <div className="row g-4 align-items-center">
                          <div className="col-lg-4">
                              <div className="swiper swiper-image">
                                  <div className="swiper-wrapper">
                                      <div className="swiper-slide">
                                          <div className="testimonial-image">
                                              <img src="/assets/img/home-6/testimonial/01.jpg" alt="img" />
                                          </div>
                                      </div>
                                      <div className="swiper-slide">
                                          <div className="testimonial-image">
                                              <img src="/assets/img/home-6/testimonial/02.jpg" alt="img" />
                                          </div>
                                      </div>
                                      <div className="swiper-slide">
                                          <div className="testimonial-image">
                                              <img src="/assets/img/home-6/testimonial/03.jpg" alt="img" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-8">
                              <div className="testimonial-card-item-6">
                                  <div className="swiper testimonial-slider-6">
                                      <div className="swiper-wrapper">
                                          <div className="swiper-slide">
                                              <div className="testimonial-content">
                                                  <div className="star">
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star"></i>
                                                 </div>
                                                 <p>
                                                  Luctus dignissim ornare suscipt penatibus suspendisse faciliy placera eleifend duise quam enimes egeter platea consectetuer malesuada an hack blandit proin suscipit porta vitae enter an ultricies tempor ultrices duisentis a auctor tempor neque cubilia psum risus commodo pulvina  aliquam donec arcu augue massa sagittis.
                                                 </p>
                                                 <h3>
                                                    Herbert Martinez
                                                 </h3>
                                                 <span>
                                                   HR Manager
                                                 </span>
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

    
          <section className="our-process-section-6 section-padding bg-color-6 fix">
              <div className="container">
                  <div className="section-title style-6 text-center">
                      <h6 className="wow fadeInUp">
                         Our Process
                      </h6>
                      <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                          Learning Powered by AI
                      </h2>
                  </div>
                 <div className="our-process-wrapper-6">
                  <div className="line-shape">
                      <img src="/assets/img/home-6/line.png" alt="img" />
                  </div>
                  <div className="row">
                      <div className="col-xl-4 col-lg-6 col-md-6">
                          <div className="our-process-item-6">
                              <h2 className="number">01</h2>
                              <h3>Data Collection & Analysis</h3>
                              <p>
                                  We gather data on student performance, learning style, and behavior to build accurate learner profiles.
                              </p>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6">
                          <div className="our-process-item-6">
                              <h2 className="number">02</h2>
                              <h3> Intelligent Content Delivery</h3>
                              <p>
                                  We gather data on student performance, learning style, and behavior to build accurate learner profiles.
                              </p>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6">
                          <div className="our-process-item-6">
                              <h2 className="number">03</h2>
                              <h3>AI-Powered Tutoring Support</h3>
                              <p>
                                  We gather data on student performance, learning style, and behavior to build accurate learner profiles.
                              </p>
                          </div>
                      </div>
                  </div>
                 </div>
              </div>
          </section>

    
          <section className="faq-section section-padding fix header-bg-6">
              <div className="container">
                  <div className="faq-wrapper-6">
                      <div className="row g-4">
                          <div className="col-lg-6">
                              <div className="faq-content">
                                  <div className="section-title style-6 mb-0">
                                      <h6 className="wow fadeInUp">
                                         Need Help?
                                      </h6>
                                      <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                          Frequently Asked Questions About AI in Education
                                      </h2>
                                  </div>
                                  <p className="text wow fadeInUp" data-wow-delay=".5s">
                                      Explore common questions about AI in education, its benefits, safety, and how it enhances learning for students, supports teachers, and transforms classrooms effectively.
                                  </p>
                                  <Link to="/contact" className="theme-btn style-6 wow fadeInUp" data-wow-delay=".5s">
                                      CONTACT US <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                  </Link>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="faq-items-6">
                                  <div className="faq-accordion">
                                      <div className="accordion" id="accordion">
                                          <div className="accordion-item wow fadeInUp" data-wow-delay=".2s">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button collapsed" type="button"
                                                      data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false"
                                                      aria-controls="faq2">
                                                      What are examples of AI tools in education?
                                                  </button>
                                              </h5>
                                              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                  <div className="accordion-body">
                                                      AI offers personalized learning, smart tutoring, instant feedback, and adaptive learning paths to suit each student’s pace and ability.
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="accordion-item  wow fadeInUp" data-wow-delay=".4s">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                      data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                                      How does AI help students learn better?
                                                  </button>
                                              </h5>
                                              <div id="faq1" className="accordion-collapse show" data-bs-parent="#accordion">
                                                  <div className="accordion-body">
                                                      AI offers personalized learning, smart tutoring, instant feedback, and adaptive learning paths to suit each student’s pace and ability.
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="accordion-item wow fadeInUp" data-wow-delay=".6s">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button collapsed" type="button"
                                                      data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false"
                                                      aria-controls="faq3">
                                                      Can AI be used for online and hybrid learning?
                                                  </button>
                                              </h5>
                                              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                  <div className="accordion-body">
                                                      AI offers personalized learning, smart tutoring, instant feedback, and adaptive learning paths to suit each student’s pace and ability.
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="accordion-item mb-0 wow fadeInUp" data-wow-delay=".6s">
                                              <h5 className="accordion-header">
                                                  <button className="accordion-button collapsed" type="button"
                                                      data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false"
                                                      aria-controls="faq4">
                                                      What are the benefits of AI for teachers?
                                                  </button>
                                              </h5>
                                              <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                  <div className="accordion-body">
                                                      AI offers personalized learning, smart tutoring, instant feedback, and adaptive learning paths to suit each student’s pace and ability.
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

     
           <section className="funfact-section-6 fix bg-color-6">
              <div className="container">
                  <div className="funfact-wrapper-6">
                      <div className="funfact-content wow fadeInUp" data-wow-delay=".2s">
                          <h2><span className="count">52</span>k</h2>
                          <p>Happy Customer</p>
                      </div>
                      <div className="funfact-content wow fadeInUp" data-wow-delay=".4s">
                          <h2><span className="count">52</span>M</h2>
                          <p>Generated Image</p>
                      </div>
                      <div className="funfact-content wow fadeInUp" data-wow-delay=".6s">
                          <h2><span className="count">10</span>+</h2>
                          <p>Customer Rating</p>
                      </div>
                      <div className="funfact-content style-6 wow fadeInUp" data-wow-delay=".8s">
                          <h2><span className="count">8</span>k+</h2>
                          <p>Satisfied Clients</p>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="latest-update-section section-padding pt-0 bg-color-6 fix">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-xl-10">
                          <div className="lates-input-content">
                              <div className="section-title style-6 text-center mb-0">
                                  <h6 className="wow fadeInUp">
                                    Latest in EdTech
                                  </h6>
                                  <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                     SmartClass Update
                                  </h2>
                              </div>
                              <p className="text wow fadeInUp" data-wow-delay=".5s">
                                  SmartClass Update brings you the latest innovations, success stories, and insights from the world of AI-powered education—helping educators, students, and institutions stay ahead in the digital learning era.
                              </p>
                               <div className="latest-input wow fadeInUp" data-wow-delay=".3s">
                                  <input type="email" id="email" placeholder="Enter Your Email" />
                                  <button className="theme-btn" type="submit">
                                      SUBMIT NOW <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="news-section-6 section-padding fix header-bg-6">
              <div className="container">
                  <div className="section-title-area">
                       <div className="section-title style-6">
                          <h6 className="wow fadeInUp">
                             Insights & Ideas
                          </h6>
                          <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                              The Future Learner Blog
                          </h2>
                      </div>
                      <Link to="/news" className="theme-btn style-6 wow fadeInUp" data-wow-delay=".3s">
                         VIEW ALL BLOG <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                      </Link>
                  </div>
                  <div className="row">
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                          <div className="news-card-items-6">
                              <div className="news-image">
                                  <img src="/assets/img/home-6/news/01.jpg" alt="img" />
                              </div>
                              <div className="news-content">
                                  <ul className="news-meta">
                                      <li>
                                          <i className="fa-solid fa-calendar-days"></i>
                                          11 March 2025
                                      </li>
                                  </ul>
                                  <h3>
                                      <Link to="/news-details">
                                          From Chalkboards to Chatbots: The Evolution of Smart Classrooms
                                      </Link>
                                  </h3>
                                  <Link to="/news" className="link-btn-6">
                                     Read More <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                  </Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                          <div className="news-card-items-6">
                              <div className="news-image">
                                  <img src="/assets/img/home-6/news/02.jpg" alt="img" />
                              </div>
                              <div className="news-content">
                                  <ul className="news-meta">
                                      <li>
                                          <i className="fa-solid fa-calendar-days"></i>
                                          11 March 2025
                                      </li>
                                  </ul>
                                  <h3>
                                      <Link to="/news-details">
                                          From Chalkboards to Chatbots: The Evolution of Smart Classrooms
                                      </Link>
                                  </h3>
                                  <Link to="/news" className="link-btn-6">
                                     Read More <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      <FooterHome6 />
    </>
  );
}
