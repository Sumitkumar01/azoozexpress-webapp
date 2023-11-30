import React from "react";

function TopSection() {
  return (
    <div>
      <section className="top-section-outer flex">
        <div className="top-section-inner-container flex">
          <div>
            <div className="top-section-deteles-container">
              <div style={{ paddingBottom: "1.5rem" }}>
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title">
                    Instant Freight Forwarding Solutions <br />
                    with
                    <font color="#E01C2C">Azooz Express</font>
                  </h2>
                </div>
              </div>
              <div style={{ paddingBottom: "1.5rem" }}>
                <div className="elementor-widget-container">
                  <p>
                    <span style={{ color: "#e01c2c" }}>Oman’s leading</span>
                    last-mile delivery company, delivering the best freight
                    courier service. With a commitment to speed, security, and
                    reliability, Azooz Express is your trusted partner for
                    global logistics.
                  </p>
                </div>
              </div>
              <div style={{ paddingBottom: "1.5rem" }}>
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title ">
                    21% of Global packages are found damaged, hampered, or
                    exchanged <font color="#E01C2C">at delivery time.</font>
                  </h2>
                </div>
              </div>
              <div>
                <div className="elementor-widget-container">
                  <p>
                    <span style={{ color: "#e01c2c" }}>To make sure</span> this
                    doesn’t happen to you, Choose Azzoz Express for Freight
                    Forwarding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TopSection;
