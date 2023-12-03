import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseHover_Enter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseHover_Leave = () => {
    setHoveredItem(null);
  };
  const handleMouseEnter = () => {
    setShow(true);
  };
  const handleMouseLeave = () => {
    setShow(false);
  };
  const navClick = () => {
    if (!show) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  const handleclick = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }
  return (
    <div className="navbar-section flex">
      <div className="navbar-container flex">
        <div className="flex">
          <div className="p-1">
            <div className="p-r-10">
              <div>
                <img
                  width="140"
                  height="60"
                  src="https://azoozexpress.com/wp-content/uploads/2023/07/Englishlogopngblackpng-1-1.png"
                  className="attachment-large size-large wp-image-2951"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="p-1">
            <nav className="nav-p desktop-menu">
              <ul className="flex">
                <li className={`nav-item ${hoveredItem === 0 ? 'hovered' : ''}`}
                  onMouseEnter={() => handleMouseHover_Enter(0)}
                  onMouseLeave={handleMouseHover_Leave}>
                  <Link to="#">Home</Link>
                </li>
                <li className={`nav-item ${hoveredItem === 1 ? 'hovered' : ''}`}
                  onMouseEnter={() => handleMouseHover_Enter(1)}
                  onMouseLeave={handleMouseHover_Leave}>
                  <Link to="#">About</Link>
                </li>
                <li className={`nav-item ${hoveredItem === 2 ? 'hovered' : ''}`}
                  onMouseEnter={() => handleMouseHover_Enter(2)}
                  onMouseLeave={handleMouseHover_Leave}>
                  <Link to="#">Contact</Link>
                </li>
                <li className={`nav-item ${hoveredItem === 3 ? 'hovered' : ''}`}
                  onMouseEnter={() => handleMouseHover_Enter(3)}
                  onMouseLeave={handleMouseHover_Leave}>
                  <Link
                    to="#"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="flex center"
                  >
                    Services
                    <span className="sub-arrow">
                      <svg
                        className="e-font-icon-svg e-fas-caret-down"
                        viewBox="0 0 320 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                      </svg>
                    </span>
                  </Link>

                  {show && (
                    <ul className="sub-menu flex col">
                      <li className="menu-item ">
                        <Link
                          to="/"
                          aria-current="page"
                          className="elementor-sub-item elementor-item-active"
                        >
                          Freight Forwading
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="#" className="elementor-sub-item">
                          Customs Clearance
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="#" className="elementor-sub-item">
                          Fulfilment and Packaging
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="#" className="elementor-sub-item">
                          Storage (Temperature Controlled)
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
            {/* mobile manue */}
            <div
              className="elementor-menu-toggle"
              onClick={handleclick}
            >
              {!open ?(<svg
                aria-hidden="true"
                role="presentation"
                className="elementor-menu-toggle__icon--open elementor-animation-grow e-font-icon-svg e-eicon-menu-bar"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path>
              </svg>):
              (<svg
                aria-hidden="true"
                role="presentation"
                className="elementor-menu-toggle__icon--close elementor-animation-grow e-font-icon-svg e-eicon-close"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path>
              </svg>)}
              <span className="sr-only">Menu</span>
            </div>
            {open && (<nav
              className="elementor-nav-menu__container"
            >
              <ul id="menu-2-59307db" className="elementor-nav-menu flex col center">
                <li className="menu-item">
                  <Link
                    to="/"
                    className="elementor-item"
                  >
                    Home
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/"
                    className="elementor-item"
                  >
                    About
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/"
                    className="elementor-item"
                  >
                    Contact
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/"
                    className="elementor-item flex center"
                    onClick={navClick}
                  >
                    Services
                    <span className="sub-arrow">
                      <svg
                        className="e-font-icon-svg e-fas-caret-down"
                        viewBox="0 0 320 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                      </svg>
                    </span>
                  </Link>
                  {show && (<ul className="sub-menu flex col">
                    <li className="menu-item ">
                      <Link
                        to="/"
                        aria-current="page"
                        className="elementor-sub-item elementor-item-active"
                      >
                        Freight Forwading
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/" className="elementor-sub-item">
                        Customs Clearance
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/" className="elementor-sub-item">
                        Fulfilment and Packaging
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/" className="elementor-sub-item">
                        Storage (Temperature Controlled)
                      </Link>
                    </li>
                  </ul>)}
                </li>
              </ul>
            </nav>)}
          </div>
        </div>
        {/* social icon */}
        <div className="nav-social-icon">
          <div className="social-icon">
            <div className="flex p-1">
              <span className="elementor-grid-item">
                <Link className="flex center" to="#">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="e-font-icon-svg e-fab-facebook"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                </Link>
              </span>
              <span className="elementor-grid-item">
                <Link
                  className="flex center"
                  to="https://twitter.com/AzoozExpress"
                  target="_blank"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="e-font-icon-svg e-fab-twitter"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>
                </Link>
              </span>
              <span className="elementor-grid-item">
                <Link
                  className="flex center"
                  to="https://www.instagram.com/azooz_express/"
                  target="_blank"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="e-font-icon-svg e-fab-instagram"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </Link>
              </span>
              <span className="elementor-grid-item">
                <Link
                  className="flex center"
                  to="https://www.linkedin.com/company/azooz-express/"
                  target="_blank"
                >
                  <span className="sr-only">Linkedin</span>
                  <svg
                    className="e-font-icon-svg e-fab-linkedin"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </Link>
              </span>
            </div>
          </div>
        </div>
        {/* social-icon */}
        {/* get-quote-btn */}
        <div className="nav-social-icon">
          <div className="get-quote-btn">
            <div className="p-1">
              <div className="elementor-button-link flex">
                <div className="elementor-grid-item flex center">
                  <Link
                    className="elementor-button-text"
                    to="http://azoozexpress.com/azooz-contact-page/"
                  >
                    Get Your Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
