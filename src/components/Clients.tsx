import React from "react";
import Image from "next/image";
import LazyLoad from "react-lazyload";

const Clients: React.FC = () => {
  return (
    <section id="clients" className="clients section">
      <LazyLoad height={200} offset={800}>
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="col-xl-2 col-md-3 col-6 client-logo"
                data-aos="zoom-in"
                data-aos-delay={`${100 * index}`}
              >
                <Image
                  src={`/assets/img/clients/client-${index + 1}.png`}
                  alt={`Client ${index + 1}`}
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </div>
            ))}
          </div>
        </div>
      </LazyLoad>
    </section>
  );
};

const clientLogos = [
  { id: 1, name: "Client 1" },
  { id: 2, name: "Client 2" },
  { id: 3, name: "Client 3" },
  { id: 4, name: "Client 4" },
  { id: 5, name: "Client 5" },
  { id: 6, name: "Client 6" },
];

export default Clients;
