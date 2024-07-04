import React from "react";

interface ServiceItemProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  icon,
  title,
  description,
  delay,
}) => {
  return (
    <div
      className="col-xl-3 col-md-6 d-flex"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="service-item position-relative">
        <i className={`bi ${icon}`}></i>
        <h4>
          <a href="" className="stretched-link">
            {title}
          </a>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
