import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 | AiLogiQs";
  }, []);

  return (
    <>
      <Header />
      <section className="error-section section-padding style-padding fix">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-9">
                          <div className="error-items">
                              <div className="error-image wow fadeInUp">
                                  <img src="/assets/img/404.png" alt="img" />
                              </div>
                              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                  Page not found
                              </h2>
                              <p className="wow fadeInUp" data-wow-delay=".5s">Sorry, we couldn't find your page.</p>
                              <Link to="/" className="theme-btn wow fadeInUp" data-wow-delay=".7">
                                  Go Back Home
                                  <i className="fa-solid fa-arrow-right-long"></i>
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      <Footer />
    </>
  );
}
