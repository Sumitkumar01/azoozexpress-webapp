import React from "react";
import {Link}from "react-router-dom"

function Footer() {
  return (
    <div>
      <div className="footer">
        <section>
          <div >
            <div className="m">
              <div className="elementor-widget-wrap ">
                <section >
                  <div className="footer-elementor-container flex">
                    <div>
                      <div className="elementor-widget-wrap ">
                        <div>
                          <div className="elementor-widget-container">
                            <img
                              width={150}
                              height={69}
                              src="https://azoozexpress.com/wp-content/uploads/2023/07/Englishlogopngblackpng-e1668090686281-1.png"
                              className="attachment-full size-full wp-image-2890"
                              alt=""
                            />
                          </div>
                        </div>
                        <div>
                          
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="elementor-widget-wrap " style={{marginLeft:"10px"}}>
                        <div>
                          <div className="elementor-widget-container">
                            <h6 className="elementor-heading-title">
                              Company
                            </h6>
                          </div>
                        </div>
                        <div>
                          <div className="elementor-widget-container">
                            <nav >
                              <ul
                                className="text-white"
                              >
                                <li >
                                  <Link
                                    to="https://azoozexpress.com/"
                                    className="elementor-item"
                                  >
                                    Home
                                  </Link>
                                </li>
                                <li >
                                  <Link
                                    to="https://azoozexpress.com/azooz-about-page/"
                                    className="elementor-item"
                                  >
                                    About
                                  </Link>
                                </li>
                                <li >
                                  <Link
                                    to="https://azoozexpress.com/azooz-contact-page/"
                                    className="elementor-item"
                                  >
                                    Contact
                                  </Link>
                                </li>
                                <li >
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
                      <div className="elementor-widget-wrap " style={{ marginLeft: "10px" }}>
                        <div>
                          <div className="elementor-widget-container">
                            <h6 className="elementor-heading-title elementor-size-default">
                              Reach Out to us
                            </h6>
                          </div>
                        </div>
                        <div>
                          <div className="elementor-widget-container">
                           
                            <ul >
                              <li >
                                
                               
                                <span className="text-white text-p">
                                  PO BOX 84, Postal code 101, Sultanate of Oman.
                                </span>
                              </li>
                              <li >
                               
                                <span className="text-white text-p">
                                  info@azoozexpress.com
                                </span>
                              </li>
                              <li >
    
                                <span className="text-white text-p">
                                  +968 22700 070
                                </span>
                              </li>
                              <li >
                                <Link to="https://wa.me/+96896586404">
                                  
                                  <span className="text-white text-p">
                                    +968 9658 6404
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p">
                      <div className="elementor-widget-wrap">
                        <div>
                          <div className="elementor-widget-container">
                            <div >
                              <Link
                                className="elementor-button"
                                to="http://azoozexpress.com/azooz-contact-page/"
                              >
                                <span>
                                  <span className="elementor-button-text">
                                    GET A QUOTE
                                  </span>
                                </span>
                              </Link>
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
      </div>
    </div>
  );
}

export default Footer;
