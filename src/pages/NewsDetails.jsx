import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NewsDetails() {
  useEffect(() => {
    document.title = "Blog Details | AiLogiQs";
  }, []);

  return (
    <>
      <Header />
      <section className="news-details style-padding fix section-padding">
              <div className="container">
                  <div className="row g-4">
                      <div className="col-12 col-lg-8">
                          <div className="news-details-wrapper">
                              <div className="news-details-items">
                                  <div className="news-details-thumb">
                                      <img src="/assets/img/news/post-6.jpg" alt="img" />
                                  </div>
                                  <div className="news-details-content">
                                      <ul className="post-date">
                                          <li>
                                              <i className="fa-regular fa-user"></i>
                                              20 jul. 2024
                                          </li>
                                          <li>
                                              <i className="fa-regular fa-user"></i>
                                              by Marcus
                                          </li>
                                          <li>
                                              <i className="fa-regular fa-folder-open"></i>
                                              digital art
                                          </li>
                                      </ul>
                                      <h2>
                                          Short animations video clips
                                          generated using
                                      </h2>
                                      <p className="mt-3">
                                          Love how easy it is to use this chatbot whether looking for so product
                                          recommendations just need help with task, it’s always there with the perfect
                                          response. generated arts used to visualize ideas to often for movies games, or other
                                          creative projects. Lacus faucibus pede. Hac acid augue quam justo. Auctor hymenaeos
                                          nun sollicitudin tellus scelerisque sapien, fringilla libero lectus. Netus integer
                                          commodo nisi eternals proin curae venenatis diam pede massa cum
                                      </p>
                                      <p className="mt-3">
                                          For product recommendations just need help with task always there with thees perfect
                                          response generated arts used visualize ideas often for movies games, or other
                                          creative projects. Lacus faucibus pede told haces augue quam justo sollicitudin
                                          tellus scelerisque sapien
                                      </p>
                                      <h3 className="mt-5">Showcasing scenery and landscapes.</h3>
                                      <p className="mt-3">
                                          Eleifend netus volutpat purus purus augue nullam blandit, phasellus per vehicula
                                          dolor leis habitasse sapien curabitur enim eget vivamus odio ornare pair feugiat.
                                          Habitasse orc cubilia vestibulum duise magnis cubilia accumsan. Tempus quis urna
                                          hendrerit, pellentesque sociosqu lacinia in dolor porta condimentum ridiculus
                                          elementum aliquam facilisi parturient dolor est nisi habitasse luctus mattis.
                                      </p>
                                      <div className="hilight-text">
                                          <svg width="61" height="47" viewBox="0 0 61 47" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
                                              <path
                                                  d="M59.6692 1.25224L59.6707 1.25204C59.6833 1.25038 59.6926 1.24996 59.6988 1.25C59.7018 1.25341 59.7056 1.25833 59.7099 1.2651C59.7207 1.28192 59.7322 1.30599 59.7401 1.3359C59.7576 1.40145 59.7482 1.45104 59.7404 1.47046C59.7375 1.47776 59.7351 1.48072 59.7329 1.48304C59.7313 1.48476 59.7197 1.49712 59.6855 1.51294L59.6844 1.51344C53.2745 4.48629 49.6179 8.44563 49.1368 12.7372L49.1368 12.7373C48.9564 14.3477 49.2819 15.8826 49.9465 17.1051C50.6019 18.3108 51.6503 19.3137 52.9735 19.6457L52.9739 19.6458C54.8448 20.1147 56.534 21.6022 57.7801 23.8327C59.0199 26.0518 59.748 28.8898 59.748 31.7947C59.748 35.5122 58.3308 39.0676 55.8237 41.6811C53.3182 44.2929 49.9314 45.75 46.4115 45.75C42.5639 45.75 39.2685 44.1058 36.9103 41.2152C34.539 38.3085 33.0754 34.084 33.075 28.9159C33.1267 13.9684 43.8585 3.31477 59.6692 1.25224ZM59.7093 1.25072C59.7092 1.25073 59.7088 1.25069 59.708 1.25051L59.7093 1.25072ZM27.8442 1.25224L27.8457 1.25204C27.8583 1.25038 27.8675 1.24996 27.8738 1.25C27.8767 1.25341 27.8805 1.25833 27.8849 1.2651C27.8957 1.28192 27.9071 1.30599 27.9151 1.3359C27.9326 1.40145 27.9232 1.45104 27.9154 1.47046C27.914 1.47396 27.9127 1.47647 27.9115 1.47839C27.9102 1.48045 27.909 1.48183 27.9079 1.48304C27.9062 1.48476 27.8946 1.49712 27.8604 1.51294L27.8594 1.51344C21.4495 4.48629 17.7928 8.44563 17.3118 12.7372L17.3118 12.7373C17.1314 14.3477 17.4569 15.8826 18.1214 17.1051C18.7768 18.3108 19.8252 19.3137 21.1485 19.6457L21.1489 19.6458C23.0198 20.1147 24.709 21.6022 25.9551 23.8327C27.1949 26.0518 27.923 28.8898 27.923 31.7947C27.923 35.5122 26.5058 39.0676 23.9986 41.6811C21.4932 44.2929 18.1064 45.75 14.5865 45.75C10.7388 45.75 7.44347 44.1058 5.08527 41.2152C2.71395 38.3085 1.25037 34.084 1.25 28.9159C1.30163 13.9684 12.0335 3.31477 27.8442 1.25224Z"
                                                  stroke="#EFFB53" strokeWidth="2.5" />
                                          </svg>
                                          <p>
                                              Blending technology and creativity
                                              in the visual media
                                          </p>
                                      </div>
                                      <p className="mb-4">
                                          Phasellus per vehicula dolor habitasse sapien curabitur enim eget vivamus odio
                                          ornare one percent feugiat Habitasse orci cubilia vestibulum, duis magnis cubilia
                                          accumsan tempus quisen urna hendrerit pellentesque sociosqu lacinia dolor porta
                                          condimentum ridiculus elementum aliquam facilisi
                                      </p>
                                      <div className="row g-4">
                                          <div className="col-md-6">
                                              <div className="details-image">
                                                  <img src="/assets/img/news/post-7.jpg" alt="img" />
                                              </div>
                                          </div>
                                          <div className="col-md-6">
                                              <div className="details-image">
                                                  <img src="/assets/img/news/post-8.jpg" alt="img" />
                                              </div>
                                          </div>
                                      </div>
                                      <h3 className="mt-4">Visual content creation</h3>
                                      <p className="mt-3">
                                          Habitasse orc cubilia vestibulum duise magnis cubilia accumsan tempus quis urna
                                          hendrerit pellentesque sociosqu lacinia in dolor porta condimentum ridiculus
                                          elementum aliquam facilisi parturient dolor este nisie habitasse silent nation over
                                          danger luctus mattis.
                                      </p>
                                      <p className="mt-3">
                                          Nibh ultricies turpis pellentesque site fermentum aenean crase integer torquent for
                                          sodales dapibus augue fringilla eros lacus cras facilisi ligula cum arcu hendrerit
                                          mattis iaculis phasellus, netus adipiscing duiler neis parturient auctor.
                                      </p>
                                      <ul className="list-items">
                                          <li>
                                              <i className="fa-regular fa-check-double"></i>
                                              Lacinia cras quam primis pede aliquam iaculis dolor arcu ligula rhoncus lacinia
                                              pellente
                                          </li>
                                          <li>
                                              <i className="fa-regular fa-check-double"></i>
                                              Cras lorem orci netus etiam adipiscing velit eu metus purus blandit convallis
                                              sem lectus mollis
                                          </li>
                                          <li>
                                              <i className="fa-regular fa-check-double"></i>
                                              Eros nulla placerat augue primis purus scelerisque cras aenean eros justo
                                              cubilia
                                          </li>
                                      </ul>
                                      <div className="row g-4">
                                          <div className="col-md-12">
                                              <div className="details-image">
                                                  <img src="/assets/img/news/post-9.jpg" alt="img" />
                                              </div>
                                          </div>
                                      </div>
                                      <h3 className="mt-4">Maintain consistent design</h3>
                                      <p className="mt-3">
                                          Cubilia vulputate quisque suspendisse dui elite urna magna phasellus mi suscipit
                                          muse nostra elementum iaculis conubia ultrices. Dolor integer fringilla vulputate
                                          sociis felis establis luctus felis egestas per tristique ridiculus condimentum porta
                                          aliquet auctor ultricies dignissim aenean augue
                                      </p>
                                      <p className="mt-3">
                                          Nibh ultricies turpis pellentesque site fermentum aenean crase integer torquent for
                                          sodales dapibus augue fringilla eros lacus cras facilisi ligula cum arcu hendrerit
                                          mattis iaculis phasellus, netus adipiscing duiler neis parturient auctor.
                                      </p>
                                      <p className="mt-3">
                                          Aenean crase integer torquent for sodales dapibus augue fringilla eros lacus cras
                                          facilisie ligula cum arcu hendrerit mattis iaculis phasellus, netus adipiscing
                                          duiler neis parturient auctor.
                                      </p>
                                  </div>
                              </div>
                              <div className="row tag-share-wrap mt-5 align-items-center">
                                  <div className="col-lg-8 col-12">
                                      <p>#generate #creative #digital art</p>
                                  </div>
                                  <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                                      <div className="social-icon">
                                          <a href="#"><i className="fa-brands fa-discord"></i></a>
                                          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                          <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                      </div>
                                  </div>
                              </div>
                              <div className="prev-next-button">
                                  <Link to="/news-details" className="prev-button"><i
                                          className="fa-sharp fa-regular fa-arrow-up-left"></i> prev</Link>
                                  <Link to="/news-details" className="next-button">next <i
                                          className="fa-sharp fa-regular fa-arrow-up-right"></i></Link>
                              </div>
                              <div className="row">
                                  <h4 className="blog-title">Similar blog post</h4>
                                  <div className="col-xl-6 col-lg-6">
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
                                  <div className="col-xl-6 col-lg-6">
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
                                  <div className="col-xl-6 col-lg-6">
                                      <div className="news-box-items-2">
                                          <div className="news-image">
                                              <img src="/assets/img/news/06.jpg" alt="img" />
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
                                  <div className="col-xl-6 col-lg-6">
                                      <div className="news-box-items-2">
                                          <div className="news-image">
                                              <img src="/assets/img/news/07.jpg" alt="img" />
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
                              </div>
                              <div className="comments-area">
                                  <div className="comments-heading">
                                      <h3>Comments (03)</h3>
                                  </div>
                                  <div className="blog-single-comment d-flex gap-4 pt-4 pb-5">
                                      <div className="image">
                                          <img src="/assets/img/news/comment.jpg" alt="image" />
                                      </div>
                                      <div className="content">
                                          <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                              <div className="con">
                                                  <h5><Link to="/news-details">Marcus J. Alvarez</Link></h5>
                                                  <span>16 aug 2024</span>
                                              </div>
                                              <div className="star">
                                                  <i className="fa-solid fa-star"></i>
                                                  <i className="fa-solid fa-star"></i>
                                                  <i className="fa-solid fa-star"></i>
                                                  <i className="fa-solid fa-star"></i>
                                                  <i className="fa-solid fa-star"></i>
                                              </div>
                                          </div>
                                          <p className="mt-30 mb-4">Nonummy fusce pulvinar suspendisse sociosqu litora penatibus
                                              leo ullamcorper laoreet lobortis cursus justo facilisis laoreet serious ultrices
                                              morbi</p>
                                          <Link to="/news-details" className="reply">Reply</Link>
                                      </div>
                                  </div>
                                  <div className="blog-single-comment d-flex gap-4 pt-5 pb-5">
                                      <div className="image">
                                          <img src="/assets/img/news/comment-2.jpg" alt="image" />
                                      </div>
                                      <div className="content">
                                          <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                              <div className="con">
                                                  <h5><Link to="/news-details">Colleen F. Turner</Link></h5>
                                                  <span>March 20, 2024 at 2:37 pm</span>
                                              </div>
                                              <div className="star">
                                                  <i className="fa-solid fa-star"></i>
                                                  <i className="fa-solid fa-star"></i>
                                                  <i className="fa-solid fa-star"></i>
                                                  <i className="fa-solid fa-star"></i>
                                                  <i className="fa-solid fa-star"></i>
                                              </div>
                                          </div>
                                          <p className="mt-30 mb-4">Ridiculus viverra praesent ante magnis miets orci necessary
                                              natoque fermentum facilisis libero ultrices sapien sociis furious candidate
                                              sociosqu ultricies.</p>
                                          <Link to="/news-details" className="reply">Reply</Link>
                                      </div>
                                  </div>
                                  <div className="comment-form-wrap pt-5">
                                      <h3>Leave a reply</h3>
                                      <form action="#" id="contact-form" method="POST">
                                          <div className="row g-4">
                                              <div className="col-lg-6">
                                                  <div className="form-clt">
                                                      <span>Your Name*</span>
                                                      <input type="text" name="name" id="name" placeholder="Your Name" />
                                                  </div>
                                              </div>
                                              <div className="col-lg-6">
                                                  <div className="form-clt">
                                                      <span>Your Email*</span>
                                                      <input type="text" name="email" id="email2" placeholder="Your Email" />
                                                  </div>
                                              </div>
                                              <div className="col-lg-12">
                                                  <div className="form-clt">
                                                      <span>Message*</span>
                                                      <textarea name="message" id="message"
                                                          placeholder="Write Message"></textarea>
                                                  </div>
                                              </div>
                                              <div className="col-lg-6">
                                                  <button type="submit" className="theme-btn ">
                                                      submit now <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                                                  </button>
                                              </div>
                                          </div>
                                      </form>
                                  </div>
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
