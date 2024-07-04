import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About Us</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

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
              <IconBox icon="bi-briefcase" title="Corporis voluptates sit">
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                laboris nisi ut aliquip
              </IconBox>

              <IconBox icon="bi-gem" title="Ullamco laboris nisi">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt
              </IconBox>

              <IconBox icon="bi-broadcast" title="Labore consequatur">
                Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                maiores omnis facere
              </IconBox>

              <IconBox icon="bi-easel" title="Beatae veritatis">
                Expedita veritatis consequuntur nihil tempore laudantium vitae
                denat pacta
              </IconBox>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type IconBoxProps = {
  icon: string;
  title: string;
  children: React.ReactNode;
};

const IconBox: React.FC<IconBoxProps> = ({ icon, title, children }) => {
  return (
    <div className="col-md-6 icon-box position-relative" data-aos="fade-up">
      <i className={`bi ${icon}`}></i>
      <h4>
        <a href="#" className="stretched-link">
          {title}
        </a>
      </h4>
      <p>{children}</p>
    </div>
  );
};

export default AboutSection;
