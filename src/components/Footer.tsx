// components/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="copyright text-center">
          <p>
            © {new Date().getFullYear()}{" "}
            <strong className="px-1 sitename">Vesperr</strong> All Rights
            Reserved
          </p>
        </div>
        <div className="social-links d-flex justify-content-center">
          <a href="#" aria-label="Twitter">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <div className="credits text-center">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
