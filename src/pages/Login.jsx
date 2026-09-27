import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
  useEffect(() => {
    document.title = "Login | AiLogiQs";
  }, []);

  return (
    <>
      <Header />
      <section className="login-section section-padding fix  bg-cover"
              style={{backgroundImage: 'url(\'/assets/img/service/Pattern.png\')'}}>
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-12">
                          <div className="login-wrapper">
                              <div className="row">
                                  <div className="col-xl-6">
                                      <div className="sign-img">
                                          <img src="/assets/img/sign-image.jpg" alt="img" />
                                      </div>
                                  </div>
                                  <div className="col-xl-6">
                                      <div className="signin-item">
                                          <div className="sign-header">
                                              <h3>Sign in AiLogiQs</h3>
                                              <p>Choose on following sign in method</p>
                                          </div>
                                          <div className="social-icon">
                                              <a href="#"><i className="fa-brands fa-google"></i> Sign in with google</a>
                                              <a href="#"><i className="fa-brands fa-apple"></i></a>
                                              <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                          </div>
                                          <h5>
                                              or sign in using your email
                                          </h5>
                                          <form action="#" className="mt-4">
                                              <div className="input-item">
                                                  <span className="lable-text">Email Address</span>
                                                  <input id="email1" type="email" placeholder="info@example.com" />
                                                  <div className="icon">
                                                      <i className="fa-regular fa-envelope"></i>
                                                  </div>
                                              </div>
                                              <div className="input-item">
                                                  <span className="lable-text">Password</span>
                                                  <input id="password" type="password" placeholder="Password" />
                                                  <div className="icon">
                                                      <i className="fa-solid fa-eye-slash"></i>
                                                  </div>
                                              </div>
                                              <div className="form-check">
                                                  <div className="">
                                                      <input id="reviewcheck" name="reviewcheck" type="checkbox" />
                                                      <label className="form-check-label" htmlFor="reviewcheck">
                                                          Remember Me
                                                      </label>
                                                  </div>
                                                  <span>Forgot your password?</span>
                                              </div>
                                              <div className="button-items">
                                                  <button type="submit" className="theme-btn">Sign in <i
                                                          className="fa-sharp fa-regular fa-arrow-up-right"></i></button>
                                              </div>
                                              <p>Don’t have an account?<Link to="/login">Sign Up</Link></p>
                                          </form>
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
