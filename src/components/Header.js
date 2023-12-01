import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header-section">
      <Navbar />
      {/* header */}
      <section className="header-container">
        <div className="flex  header-container-inner">
          <div className="header-container-inner-left flex">
            <div>
              <div className="header-container-inner-left-inner">
                <h2 className="elementor-heading-title">
                  <font color="#FDC902">Freight</font> Forwarding
                </h2>
              </div>
            </div>
          </div>

          <div className="header-form flex col gap">
            <div className="header-form-inner">
              <div>
                <div>
                  <h2 class="elementor-heading-title ">
                    Ready to Get Started?
                  </h2>
                </div>
              </div>
              <div>
                <div>
                  <form>
                    <div className="flex col ">
                      <div >
                        <input placeholder="Full Name" />
                      </div>
                      <div>
                        <input placeholder="Email Address" />
                      </div>
                      <div>
                        <input placeholder="Pick-Up From" />
                      </div>
                      <div>
                        <input placeholder="Delivering to" />
                      </div>
                      <div >
                        <button type="submit" className="elementor-button">
                         
                            <span className="elementor-button-text">Get Delivered Today</span>
                          
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
