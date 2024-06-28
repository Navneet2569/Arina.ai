// src/components/About.tsx
"use client";

import React from "react";
import Image from "next/image";

const Clients: React.FC = () => {
  return (
    <section id="clients" className="clients section">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <Image
              src="/assets/img/clients/client-1.png"
              className="img-fluid"
              alt="Client 1"
              width={500}
              height={500}
            />
          </div>
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <Image
              src="/assets/img/clients/client-2.png"
              className="img-fluid"
              alt="Client 2"
              width={500}
              height={500}
            />
          </div>
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <Image
              src="/assets/img/clients/client-3.png"
              className="img-fluid"
              alt="Client 3"
              width={500}
              height={500}
            />
          </div>
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <Image
              src="/assets/img/clients/client-4.png"
              className="img-fluid"
              alt="Client 4"
              width={500}
              height={500}
            />
          </div>
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <Image
              src="/assets/img/clients/client-5.png"
              className="img-fluid"
              alt="Client 5"
              width={500}
              height={500}
            />
          </div>
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <Image
              src="/assets/img/clients/client-6.png"
              className="img-fluid"
              alt="Client 6"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
