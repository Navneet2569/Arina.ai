import React from "react";
import Image from "next/image";
import Link from "next/link";
import LazyLoad from "react-lazyload";

const services = [
  {
    imageUrl: "/assets/img/services-1.jpg",
    alt: "Service 1",
    title: "Nesciunt Mete",
    description:
      "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.",
  },
  {
    imageUrl: "/assets/img/services-2.jpg",
    alt: "Service 2",
    title: "Eosle Commodi",
    description:
      "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
  },
  {
    imageUrl: "/assets/img/services-3.jpg",
    alt: "Service 3",
    title: "Ledo Markt",
    description:
      "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
  },
  {
    imageUrl: "/assets/img/services-4.jpg",
    alt: "Service 4",
    title: "Asperiores Commodit",
    description:
      "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
  },
];

const AltServicesSection: React.FC = () => {
  return (
    <section id="alt-services" className="alt-services section">
      <LazyLoad height={200} offset={800}>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-lg-6"
                data-aos="zoom-in"
                data-aos-delay={`${200 + index * 100}`}
              >
                <div className="service-item position-relative">
                  <div className="img">
                    <img src={service.imageUrl} alt={service.alt} />
                  </div>
                  <div className="details">
                    <Link href="/service-details">
                      <h3 className="stretched-link">{service.title}</h3>
                    </Link>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LazyLoad>
    </section>
  );
};

export default AltServicesSection;
