// src/components/StatsSection.tsx
import React from "react";
import Image from "next/image";
import CountUp from "react-countup";

const Stats: React.FC = () => {
  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-5">
            <Image
              src="/assets/img/stats-img.svg"
              alt="Stats Image"
              className="img-fluid"
              width={500}
              height={500}
            />
          </div>
          <div className="col-lg-7">
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="stats-item d-flex">
                  <i className="bi bi-emoji-smile flex-shrink-0"></i>
                  <div>
                    <CountUp end={232} duration={1} className="purecounter" />
                    <p>
                      <strong>Happy Clients</strong>{" "}
                      <span>consequuntur quae</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="stats-item d-flex">
                  <i className="bi bi-journal-richtext flex-shrink-0"></i>
                  <div>
                    <CountUp end={521} duration={1} className="purecounter" />
                    <p>
                      <strong>Projects</strong>{" "}
                      <span>adipisci atque cum quia aut</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="stats-item d-flex">
                  <i className="bi bi-headset flex-shrink-0"></i>
                  <div>
                    <CountUp end={1453} duration={1} className="purecounter" />
                    <p>
                      <strong>Hours Of Support</strong>{" "}
                      <span>aut commodi quaerat</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="stats-item d-flex">
                  <i className="bi bi-people flex-shrink-0"></i>
                  <div>
                    <CountUp end={32} duration={1} className="purecounter" />
                    <p>
                      <strong>Hard Workers</strong>{" "}
                      <span>rerum asperiores dolor</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
