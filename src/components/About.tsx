// src/components/AboutSection.tsx
"use client";

import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure this is imported
import "aos/dist/aos.css"; // Ensure this is imported

const About: React.FC = () => {
  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About Us</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-5">
          <div
            className="content col-xl-5 d-flex flex-column"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>Voluptatem dignissimos provident quasi</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit
            </p>
            <a
              href="#"
              className="about-btn align-self-center align-self-xl-start"
            >
              <span>About us</span> <i className="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="col-xl-7" data-aos="fade-up" data-aos-delay="200">
            <div className="row gy-4">
              <div className="col-md-6 icon-box position-relative">
                <i className="bi bi-briefcase"></i>
                <h4>
                  <a href="#" className="stretched-link">
                    Corporis voluptates sit
                  </a>
                </h4>
                <p>
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                  laboris nisi ut aliquip
                </p>
              </div>
              {/* Icon-Box */}

              <div className="col-md-6 icon-box position-relative">
                <i className="bi bi-gem"></i>
                <h4>
                  <a href="#" className="stretched-link">
                    Ullamco laboris nisi
                  </a>
                </h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>
              {/* Icon-Box */}

              <div className="col-md-6 icon-box position-relative">
                <i className="bi bi-broadcast"></i>
                <h4>
                  <a href="#" className="stretched-link">
                    Labore consequatur
                  </a>
                </h4>
                <p>
                  Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                  maiores omnis facere
                </p>
              </div>
              {/* Icon-Box */}

              <div className="col-md-6 icon-box position-relative">
                <i className="bi bi-easel"></i>
                <h4>
                  <a href="#" className="stretched-link">
                    Beatae veritatis
                  </a>
                </h4>
                <p>
                  Expedita veritatis consequuntur nihil tempore laudantium vitae
                  denat pacta
                </p>
              </div>
              {/* Icon-Box */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
