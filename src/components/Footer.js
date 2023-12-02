import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer center flex p">
      <div className=" footer-container flex">
        <section className="flex ">
          <div className="flex">
            <div className="flex">
              <div className="flex">
                <section >
                  <div className="footer-inner-container flex">
                    <div>
                      <div>
                        <div className="footer-img-container">
                          <div className="footer-img">
                            <img
                              width="150"
                              height="69"
                              src="https://azoozexpress.com/wp-content/uploads/2023/07/Englishlogopngblackpng-e1668090686281-1.png"
                              className="attachment-full size-full wp-image-2890"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="social-footer-link">
                            <div className="flex center">
                              <span className="elementor-grid-item">
                                <Link
                                  className="flex center"
                                  to="https://www.facebook.com/azoozexpressmuscat"
                                  target="_blank"
                                >
                                  <span className="sr-only">
                                    Facebook
                                  </span>
                                  <svg
                                    className="e-font-icon-svg e-fab-facebook"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                                  </svg>
                                </Link>
                              </span>
                              <span className="elementor-grid-item">
                                <Link
                                  className="flex center"
                                  to="https://twitter.com/AzoozExpress"
                                  target="_blank"
                                >
                                  <span className="sr-only">
                                    Twitter
                                  </span>
                                  <svg
                                    className="e-font-icon-svg e-fab-twitter"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                  </svg>
                                </Link>
                              </span>
                              <span className="elementor-grid-item">
                                <Link
                                  className="flex center"
                                  to="https://www.instagram.com/azooz_express/"
                                  target="_blank"
                                >
                                  <span className="sr-only">
                                    Instagram
                                  </span>
                                  <svg
                                    className="e-font-icon-svg e-fab-instagram"
                                    viewBox="0 0 448 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                  </svg>
                                </Link>
                              </span>
                              <span className="elementor-grid-item">
                                <Link
                                  className="flex center"
                                  to="https://www.linkedin.com/company/azooz-express/"
                                  target="_blank"
                                >
                                  <span className="sr-only">
                                    Linkedin
                                  </span>
                                  <svg
                                    className="e-font-icon-svg e-fab-linkedin"
                                    viewBox="0 0 448 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                  </svg>
                                </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex col footer-middle-container-inner">
                        <div>
                          <div className="m-b-3">
                            <h6 className="elementor-heading-title">
                              Company
                            </h6>
                          </div>
                        </div>
                        <div>
                          <div>
                            <nav className="footer-nav-p">
                              <ul className="flex col footer-middle-container">
                                <li>
                                  <Link
                                    to="https://azoozexpress.com/"
                                    className="elementor-item"
                                  >
                                    Home
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="https://azoozexpress.com/azooz-about-page/"
                                    className="elementor-item"
                                  >
                                    About
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="https://azoozexpress.com/azooz-contact-page/"
                                    className="elementor-item"
                                  >
                                    Contact
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="elementor-item elementor-item-anchor"
                                  >
                                    Services
                                  </Link>
                                </li>
                              </ul>
                            </nav>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div>
                          <div className="address-heading-title">
                            <h6>Reach Out to us</h6>
                          </div>
                        </div>
                        <div>
                          <div className="address">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <svg
                                    aria-hidden="true"
                                    className="e-font-icon-svg e-fas-map-pin"
                                    viewBox="0 0 288 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"></path>
                                  </svg>
                                </span>
                                <span className="elementor-icon-list-text">
                                  PO BOX 84, Postal code 101, Sultanate of Oman.
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <i
                                    className="icon icon-email1"
                                  ></i>
                                </span>
                                <span className="elementor-icon-list-text">
                                  info@azoozexpress.com
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span className="elementor-icon-list-icon">
                                  <i
                                    aria-hidden="true"
                                    className="icon icon-phone-call1"
                                  ></i>
                                </span>
                                <span className="elementor-icon-list-text">
                                  +968 22700 070
                                </span>
                              </li>
                              
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="get-quote">
                          <div className="flex center">
                            <div className="footer-button-wrapper ">
                              <div className="footer-button-content-wrapper">
                                <Link className="elementor-button-text">
                                  GET A QUOTE
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        {/* <section>
          <div className="elementor-container elementor-column-gap-default">
            <div>
              <div className="elementor-widget-wrap elementor-element-populated">
                <section>
                  <div className="elementor-container elementor-column-gap-default">
                    <div>
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div>
                          <div className="">
                            <p>Copyright © 2022 All Rights Reserved.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div>
                          <div className="">
                            <p>
                              <Link to="http://azoozexpress.com/privacy-policy/">
                                Privacy Policy
                              </Link>
                              |
                              <Link to="http://azoozexpress.com/terms-of-service/">
                                Terms of Service
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div>
                  <div className="">
                    <p>
                      Website Designed &amp; Developed By
                      <Link to="https://www.fielmente.com/">Fielmente.com</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}

export default Footer;
