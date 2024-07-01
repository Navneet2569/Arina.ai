import React from "react";
import PricingItem from "./PricingItem";
import LazyLoad from "react-lazyload";

const pricingPlans = [
  {
    title: "Free Plan",
    price: 0,
    features: [
      "Quam adipiscing vitae proin",
      "Nec feugiat nisl pretium",
      "Nulla at volutpat diam uteera",
      "Pharetra massa massa ultricies x",
      "Massa ultricies mi quis hendrerit x",
    ],
    isFeatured: false,
    delay: 100,
  },
  {
    title: "Business Plan",
    price: 29,
    features: [
      "Quam adipiscing vitae proin",
      "Nec feugiat nisl pretium",
      "Nulla at volutpat diam uteera",
      "Pharetra massa massa ultricies",
      "Massa ultricies mi quis hendrerit",
    ],
    isFeatured: true,
    delay: 200,
  },
  {
    title: "Developer Plan",
    price: 49,
    features: [
      "Quam adipiscing vitae proin",
      "Nec feugiat nisl pretium",
      "Nulla at volutpat diam uteera",
      "Pharetra massa massa ultricies",
      "Massa ultricies mi quis hendrerit",
    ],
    isFeatured: false,
    delay: 300,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing section">
      <LazyLoad height={200} offset={800}>
        <div className="container section-title" data-aos="fade-up">
          <h2>Pricing</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container">
          <div className="row gy-4">
            {pricingPlans.map((plan, index) => (
              <PricingItem
                key={index}
                title={plan.title}
                price={plan.price}
                features={plan.features}
                isFeatured={plan.isFeatured}
                delay={plan.delay}
              />
            ))}
          </div>
        </div>
      </LazyLoad>
    </section>
  );
};

export default Pricing;
