"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Grow your business with Vesperr</h1>
            <p>
              We are a team of talented designers making websites with Bootstrap
            </p>
            <div className="d-flex">
              <a href="#about" className="btn-get-started">
                Get Started
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img
              src="/assets/img/hero-img.png"
              className="img-fluid animated"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
