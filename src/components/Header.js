import React from "react";
import Navbar from "../navbar/Navbar";

function Header() {
  return (
    <div className="header-section">
      <Navbar />
      {/* header */}
      <section className="header-container flex">
        <div className="flex  header-container-inner">
          <div className="header-container-inner-left flex">
            <div className="p-1 flex center">
              <div className="header-container-inner-left-inner">
                <h2 className="header-heading-title">
                  <font color="#FDC902">Freight</font> Forwarding
                </h2>
              </div>
            </div>
          </div>
          <div className="header-container-inner-right flex center">
            <div className="header-container-inner-right-inner flex col center">
              <div className="left-element flex center">
                <div className="">
                  <h2 className="elementor-heading-title">Ready to Get Started?</h2>
                </div>
              </div>
              <div className="flex">
                <div className="form-widget-container flex">
                  <form className="form">
                    <div className="elementor-form-fields-wrapper flex col">
                      <div className="elementor-field-type-text elementor-field-group">
                        <input
                          type="text"
                          className="elementor-field "
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="elementor-field-type-email elementor-field-group ">
                        <input
                          type="email"
                          className="elementor-field "
                          placeholder="Email Address"
                          required="required"
                          aria-required="true"
                        />
                      </div>
                      <div className="elementor-field-type-text elementor-field-group ">
                        <input
                          type="text"
                          className="elementor-field "
                          placeholder="Pick-Up From"
                          required="required"
                          aria-required="true"
                        />
                      </div>
                      <div className="elementor-field-type-text elementor-field-group ">
                        <input
                          type="text"
                          className="elementor-field "
                          placeholder="Delivering to"
                        />
                      </div>
                      <div className="elementor-field-group elementor-column flex center">
                        <button type="submit" className="form-button">
                          <span>
                            <span className="elementor-button-icon"> </span>
                            <span className="elementor-button-text">
                              Get Delivered Today
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* header */}
    </div>
  );
}

export default Header;
