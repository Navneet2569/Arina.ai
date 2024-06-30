// components/FeaturesSection.tsx

import React from "react";

interface FeatureItemProps {
  iconClass: string;
  color: string;
  title: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  iconClass,
  color,
  title,
}) => (
  <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100">
    <div className="features-item">
      <i className={`bi ${iconClass}`} style={{ color }}></i>
      <h3>
        <a href="#" className="stretched-link">
          {title}
        </a>
      </h3>
    </div>
  </div>
);

const FeaturesSection: React.FC = () => {
  const featureItems: FeatureItemProps[] = [
    { iconClass: "bi-eye", color: "#ffbb2c", title: "Lorem Ipsum" },
    { iconClass: "bi-infinity", color: "#5578ff", title: "Dolor Sitema" },
    {
      iconClass: "bi-mortarboard",
      color: "#e80368",
      title: "Sed perspiciatis",
    },
    { iconClass: "bi-nut", color: "#e361ff", title: "Magni Dolores" },
    { iconClass: "bi-shuffle", color: "#47aeff", title: "Nemo Enim" },
    { iconClass: "bi-star", color: "#ffa76e", title: "Eiusmod Tempor" },
    { iconClass: "bi-x-diamond", color: "#11dbcf", title: "Midela Teren" },
    { iconClass: "bi-camera-video", color: "#4233ff", title: "Pira Neve" },
    { iconClass: "bi-command", color: "#b2904f", title: "Dirada Pack" },
    { iconClass: "bi-dribbble", color: "#b20969", title: "Moton Ideal" },
    { iconClass: "bi-activity", color: "#ff5828", title: "Verdo Park" },
    {
      iconClass: "bi-brightness-high",
      color: "#29cc61",
      title: "Flavor Nivelanda",
    },
  ];

  return (
    <section id="features" className="features section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Features</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-4">
          {featureItems.map((item, index) => (
            <FeatureItem
              key={index}
              iconClass={item.iconClass}
              color={item.color}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
