import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="flex-container light-text">
        <div className="flex-container">
          <div>
            <Link className="title title-lg" to="/">
              <span className="primary-text">X</span>
              <span className="light-text">enon</span>
            </Link>
          </div>
          <div className="sitemap-container gray-text">
            <h3 className="light-text">Sitemap</h3>
            <div>Home</div>
            <div>About us</div>
            <div>Products</div>
            <div>Cart</div>
          </div>
          <div className="sitemap-container gray-text">
            <h3 className="light-text">Informative</h3>
            <div>FAQ</div>
            <div>Privacy Policy</div>
            <div>Terms and Conditions</div>
          </div>
        </div>

        <div className="flex-container-verticle">
          <div className="dark-text flex-container">
            <strong className="gray-text">
              Made with <span className="warning-text">&lt;/&gt;</span> by
              <span className="secondary-text"> Vijay Tembugade</span>
            </strong>
          </div>
          <div className="gray-text ">&copy; Xenon 2022 </div>
          <div className="social-media-icons">
            <span>
              <a
                href="https://github.com/vijaytembugade"
                rel="noreferrer"
                target="_blank"
              >
                <img src="/assets/icons/github.svg" alt="github" />
              </a>
            </span>
            <span>
              <a
                href="https://linkedin.com/in/vijaytembugade"
                rel="noreferrer"
                target="_blank"
              >
                <img src="/assets/icons/linkedin.svg" alt="linkedin" />
              </a>
            </span>
            <span>
              <a
                href="https://twitter.com/vijaytembugade"
                rel="noreferrer"
                target="_blank"
              >
                <img src="/assets/icons/twitter.svg" alt="twitter" />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
