import React from "react";
import ServiceItem from "./ServiceItem";
import LazyLoad from "react-lazyload";

const services = [
  {
    icon: "bi-activity",
    title: "Lorem Ipsum",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    delay: 100,
  },
  {
    icon: "bi-bounding-box-circles",
    title: "Sed ut perspici",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    delay: 200,
  },
  {
    icon: "bi-calendar4-week",
    title: "Magni Dolores",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    delay: 300,
  },
  {
    icon: "bi-broadcast",
    title: "Nemo Enim",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    delay: 400,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="services section">
      <LazyLoad height={200} offset={800}>
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container">
          <div className="row gy-4">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={service.delay}
              />
            ))}
          </div>
        </div>
      </LazyLoad>
    </section>
  );
};

export default Services;
