import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function News() {
  useEffect(() => {
    document.title = "Blog | AiLogiQs";
  }, []);

  return (
    <>
      <Header />
      <section className="news-hero-section bg-cover" style={{backgroundImage: 'url(\'/assets/img/news/bg.jpg\')'}}>
              <div className="array-button">
                  <button className="array-prev"><i className="fa-regular fa-arrow-left"></i></button>
                  <button className="array-next"><i className="fa-regular fa-arrow-right"></i></button>
              </div>
              <div className="container">
                  <div className="swiper news-hero-slider">
                      <div className="swiper-wrapper">
                          <div className="swiper-slide">
                              <div className="hero-content">
                                  <ul data-animation="fadeInUp" data-delay="1.3s">
                                      <li>
                                          <i className="fa-regular fa-user"></i>
                                          20 jul. 2024
                                      </li>
                                      <li>
                                          <i className="fa-regular fa-folder-open"></i>
                                          digital art
                                      </li>
                                  </ul>
                                  <h1 data-animation="fadeInUp" data-delay="1.5s">
                                      Blending revolutionize
                                      technology and
                                      creativity visual media
                                  </h1>
                                  <div className="hero-button">
                                      <Link to="/" data-animation="fadeInUp" data-delay="1.7s" className="theme-btn">read
                                          more <i className="fa-solid fa-arrow-right-long"></i></Link>
                                  </div>
                              </div>
                          </div>
                          <div className="swiper-slide">
                              <div className="hero-content">
                                  <ul data-animation="fadeInUp" data-delay="1.3s">
                                      <li>
                                          <i className="fa-regular fa-user"></i>
                                          20 jul. 2024
                                      </li>
                                      <li>
                                          <i className="fa-regular fa-folder-open"></i>
                                          digital art
                                      </li>
                                  </ul>
                                  <h1 data-animation="fadeInUp" data-delay="1.5s">
                                      Blending revolutionize
                                      technology and
                                      creativity visual media
                                  </h1>
                                  <div className="hero-button">
                                      <Link to="/" data-animation="fadeInUp" data-delay="1.7s" className="theme-btn">read
                                          more <i className="fa-solid fa-arrow-right-long"></i></Link>
                                  </div>
                              </div>
                          </div>
                          <div className="swiper-slide">
                              <div className="hero-content">
                                  <ul data-animation="fadeInUp" data-delay="1.3s">
                                      <li>
                                          <i className="fa-regular fa-user"></i>
                                          20 jul. 2024
                                      </li>
                                      <li>
                                          <i className="fa-regular fa-folder-open"></i>
                                          digital art
                                      </li>
                                  </ul>
                                  <h1 data-animation="fadeInUp" data-delay="1.5s">
                                      Blending revolutionize
                                      technology and
                                      creativity visual media
                                  </h1>
                                  <div className="hero-button">
                                      <Link to="/" data-animation="fadeInUp" data-delay="1.7s" className="theme-btn">read
                                          more <i className="fa-solid fa-arrow-right-long"></i></Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    
          <section className="news-standard fix section-padding">
              <div className="container">
                  <div className="row g-4">
                      <div className="col-12 col-lg-8">
                          <div className="news-standard-wrapper">
                              <div className="news-standard-items">
                                  <div className="news-thumb">
                                      <img src="/assets/img/news/post-1.jpg" alt="img" />
                                  </div>
                                  <div className="news-content">
                                      <ul>
                                          <li>
                                              <i className="fa-regular fa-user"></i>
                                              20 jul. 2024
                                          </li>
                                          <li>
                                              <i className="fa-regular fa-folder-open"></i>
                                              digital art
                                          </li>
                                      </ul>
                                      <h3>
                                          <Link to="/news-details">Focusing pixel clean lines</Link>
                                      </h3>
                                      <p>
                                          Love how easy it is to use this chatbot whether looking for product recommendations
                                          just need help with a task, it’s always there with the perfect response. generated
                                          arts used to visualize ideas to often for movies, games, or other creative projects.
                                      </p>
                                      <Link to="/news-details" className="theme-btn mt-4">
                                          Read More
                                          <i className="fa-solid fa-arrow-right-long"></i>
                                      </Link>
                                  </div>
                              </div>
                              <div className="news-standard-items">
                                  <div className="news-thumb">
                                      <img src="/assets/img/news/post-2.jpg" alt="img" />
                                  </div>
                                  <div className="news-content">
                                      <ul>
                                          <li>
                                              <i className="fa-regular fa-user"></i>
                                              20 jul. 2024
                                          </li>
                                          <li>
                                              <i className="fa-regular fa-folder-open"></i>
                                              digital art
                                          </li>
                                      </ul>
                                      <h3>
                                          <Link to="/news-details">Information on data privacy</Link>
                                      </h3>
                                      <p>
                                          Love how easy it is to use this chatbot whether looking for product recommendations
                                          just need help with a task, it’s always there with the perfect response. generated
                                          arts used to visualize ideas to often for movies, games, or other creative projects.
                                      </p>
                                      <Link to="/news-details" className="theme-btn mt-4">
                                          Read More
                                          <i className="fa-solid fa-arrow-right-long"></i>
                                      </Link>
                                  </div>
                              </div>
                              <div className="news-standard-items">
                                  <div className="news-thumb">
                                      <img src="/assets/img/news/post-3.jpg" alt="img" />
                                  </div>
                                  <div className="news-content">
                                      <ul>
                                          <li>
                                              <i className="fa-regular fa-user"></i>
                                              20 jul. 2024
                                          </li>
                                          <li>
                                              <i className="fa-regular fa-folder-open"></i>
                                              digital art
                                          </li>
                                      </ul>
                                      <h3>
                                          <Link to="/news-details">Explanation content storage</Link>
                                      </h3>
                                      <p>
                                          Love how easy it is to use this chatbot whether looking for product recommendations
                                          just need help with a task, it’s always there with the perfect response. generated
                                          arts used to visualize ideas to often for movies, games, or other creative projects.
                                      </p>
                                      <Link to="/news-details" className="theme-btn mt-4">
                                          Read More
                                          <i className="fa-solid fa-arrow-right-long"></i>
                                      </Link>
                                  </div>
                              </div>
                              <div className="news-standard-items">
                                  <div className="news-thumb">
                                      <img src="/assets/img/news/post-4.jpg" alt="img" />
                                  </div>
                                  <div className="news-content">
                                      <ul>
                                          <li>
                                              <i className="fa-regular fa-user"></i>
                                              20 jul. 2024
                                          </li>
                                          <li>
                                              <i className="fa-regular fa-folder-open"></i>
                                              digital art
                                          </li>
                                      </ul>
                                      <h3>
                                          <Link to="/news-details">Details on licensing usage</Link>
                                      </h3>
                                      <p>
                                          Love how easy it is to use this chatbot whether looking for product recommendations
                                          just need help with a task, it’s always there with the perfect response. generated
                                          arts used to visualize ideas to often for movies, games, or other creative projects.
                                      </p>
                                      <Link to="/news-details" className="theme-btn mt-4">
                                          Read More
                                          <i className="fa-solid fa-arrow-right-long"></i>
                                      </Link>
                                  </div>
                              </div>
                              <div className="news-standard-items">
                                  <div className="news-thumb">
                                      <img src="/assets/img/news/post-5.jpg" alt="img" />
                                  </div>
                                  <div className="news-content">
                                      <ul>
                                          <li>
                                              <i className="fa-regular fa-user"></i>
                                              20 jul. 2024
                                          </li>
                                          <li>
                                              <i className="fa-regular fa-folder-open"></i>
                                              digital art
                                          </li>
                                      </ul>
                                      <h3>
                                          <Link to="/news-details">Steps permanent removing</Link>
                                      </h3>
                                      <p>
                                          Love how easy it is to use this chatbot whether looking for product recommendations
                                          just need help with a task, it’s always there with the perfect response. generated
                                          arts used to visualize ideas to often for movies, games, or other creative projects.
                                      </p>
                                      <Link to="/news-details" className="theme-btn mt-4">
                                          Read More
                                          <i className="fa-solid fa-arrow-right-long"></i>
                                      </Link>
                                  </div>
                              </div>
                              <div className="page-nav-wrap pt-5 text-center">
                                  <ul>
                                      <li><a className="page-numbers" href="#">1</a></li>
                                      <li><a className="page-numbers" href="#">2</a></li>
                                      <li><a className="page-numbers" href="#">3</a></li>
                                      <li><a className="page-numbers" href="#"><i className="fa-solid fa-arrow-right-long"></i></a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="col-12 col-lg-4">
                          <div className="main-sidebar">
                              <div className="single-sidebar-widget">
                                  <div className="wid-title">
                                      <h3><img src="/assets/img/star-3.png" alt="img" />Search</h3>
                                  </div>
                                  <div className="search-widget">
                                      <form action="#">
                                          <input type="text" placeholder="Search here" />
                                          <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                                      </form>
                                  </div>
                              </div>
                              <div className="single-sidebar-widget">
                                  <div className="wid-title">
                                      <h3><img src="/assets/img/star-3.png" alt="img" />Categories</h3>
                                  </div>
                                  <div className="news-widget-categories">
                                      <ul>
                                          <li><Link to="/news-details">Creative Art</Link> <span>(08)</span></li>
                                          <li><Link to="/news-details">Experimental</Link> <span>(11)</span></li>
                                          <li className="active"><Link to="/news-details">Mixed Media</Link><span>(12)</span></li>
                                          <li><Link to="/news-details">AI Animation</Link> <span>(18)</span></li>
                                          <li><Link to="/news-details">Digital Painting</Link> <span>(07)</span></li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="single-sidebar-widget">
                                  <div className="wid-title">
                                      <h3><img src="/assets/img/star-3.png" alt="img" /> Recent Post</h3>
                                  </div>
                                  <div className="recent-post-area">
                                      <div className="recent-items">
                                          <div className="recent-thumb">
                                              <img src="/assets/img/news/pp3.jpg" alt="img" />
                                          </div>
                                          <div className="recent-content">
                                              <span>digital</span>
                                              <h6>
                                                  <Link to="/news-details">
                                                      Forms without realistic
                                                      represent areterm
                                                  </Link>
                                              </h6>
                                              <ul>
                                                  <li>
                                                      <i className="fa-solid fa-calendar-days"></i>
                                                      18 Dec, 2024
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className="recent-items">
                                          <div className="recent-thumb">
                                              <img src="/assets/img/news/pp4.jpg" alt="img" />
                                          </div>
                                          <div className="recent-content">
                                              <span>digital</span>
                                              <h6>
                                                  <Link to="/news-details">
                                                      Depicting people anima
                                                      or the characters
                                                  </Link>
                                              </h6>
                                              <ul>
                                                  <li>
                                                      <i className="fa-solid fa-calendar-days"></i>
                                                      18 Dec, 2024
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className="recent-items">
                                          <div className="recent-thumb">
                                              <img src="/assets/img/news/pp5.jpg" alt="img" />
                                          </div>
                                          <div className="recent-content">
                                              <span>digital</span>
                                              <h6>
                                                  <Link to="/news-details">
                                                      Blends realitys fantasy
                                                      through be care
                                                  </Link>
                                              </h6>
                                              <ul>
                                                  <li>
                                                      <i className="fa-solid fa-calendar-days"></i>
                                                      18 Dec, 2024
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="news-banner-img">
                                  <img src="/assets/img/news/Banner.png" alt="img" />
                              </div>
                              <div className="single-sidebar-widget">
                                  <div className="wid-title">
                                      <h3><img src="/assets/img/star-3.png" alt="img" /> Tags Clouds</h3>
                                  </div>
                                  <div className="news-widget-categories">
                                      <div className="tagcloud">
                                          <Link to="/news">creativity</Link>
                                          <Link to="/news-details">reality</Link>
                                          <Link to="/news-details">focus</Link>
                                          <Link to="/news-details">movies</Link>
                                          <Link to="/news-details">games</Link>
                                          <Link to="/news-details">Media</Link>
                                      </div>
                                  </div>
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
