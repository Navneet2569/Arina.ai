import React from "react";

interface PricingItemProps {
  title: string;
  price: number;
  features: string[];
  isFeatured: boolean;
  delay: number;
}

const PricingItem: React.FC<PricingItemProps> = ({
  title,
  price,
  features,
  isFeatured,
  delay,
}) => {
  return (
    <div
      className={`col-lg-4 ${isFeatured ? "featured" : ""}`}
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <div className="pricing-item">
        <h3>{title}</h3>
        <h4>
          <sup>$</sup>
          {price}
          <span> / month</span>
        </h4>
        <ul>
          {features.map((feature, index) => (
            <li key={index} className={feature.includes("x") ? "na" : ""}>
              <i
                className={`bi bi-${feature.includes("x") ? "x" : "check"}`}
              ></i>
              <span>{feature.replace("x", "")}</span>
            </li>
          ))}
        </ul>
        <a href="#" className="buy-btn">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default PricingItem;
