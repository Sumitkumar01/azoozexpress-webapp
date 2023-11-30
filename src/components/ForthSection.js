import { Link } from 'react-router-dom'

function ForthSection() {
  return (
    <div>
      <section className="contact-us-section flex">
        <div className="contact-us-section-container elementor-column-gap-default flex">
          <div>
            <div className="elementor-widget-wrap p">
              <div>
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title">
                    Get Your Freight Moving Today!
                  </h2>
                </div>
              </div>
              <div>
                <div className="elementor-widget-container">
                  Ready for a freight forwarding experience that goes beyond
                  expectations? Contact Azzoz Express for professional cargo
                  services in Muscat.&nbsp;
                </div>
              </div>
              <div>
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Link
                      className="elementor-button elementor-button-link elementor-size-xl"
                      to="https://azoozexpress.com/azooz-contact-page/"
                    >
                      <span className="">
                        <span className="elementor-button-text">
                          Contact Us
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="elementor-widget-wrap elementor-element-populated">
              <div>
                <div className="elementor-widget-container">
                  <img
                    src="https://azoozexpress.com/wp-content/uploads/2023/11/pp2-2-1.png"
                    className="attachment-large size-large wp-image-3748"
                    alt=""
                    srcSet="
                https://azoozexpress.com/wp-content/uploads/2023/11/pp2-2-1.png ,
                https://azoozexpress.com/wp-content/uploads/2023/11/pp2-2-1-300x226.png
              "
                    sizes="(max-width: 426px) 100vw, 426px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForthSection;
