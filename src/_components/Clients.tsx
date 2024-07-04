import React from "react";
import Image from "next/image";
import LazyLoad from "react-lazyload";

const clientLogos = [
  { id: 1, imageUrl: "/assets/img/clients/client-1.png" },
  { id: 2, imageUrl: "/assets/img/clients/client-2.png" },
  { id: 3, imageUrl: "/assets/img/clients/client-3.png" },
  { id: 4, imageUrl: "/assets/img/clients/client-4.png" },
  { id: 5, imageUrl: "/assets/img/clients/client-5.png" },
  { id: 6, imageUrl: "/assets/img/clients/client-6.png" },
];

const Clients: React.FC = () => {
  return (
    <section id="clients" className="clients section">
      <LazyLoad height={200} offset={800}>
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            {clientLogos.map((client, index) => (
              <div
                key={client.id}
                className="col-xl-2 col-md-3 col-6 client-logo"
                data-aos="zoom-in"
                data-aos-delay={`${100 * index}`}
              >
                <Image
                  src={client.imageUrl}
                  alt={`Client ${client.id}`}
                  width={0}
                  height={0}
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

export default Clients;
