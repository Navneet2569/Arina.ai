import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import StatItem from "./StatItem";

const statsData = [
  {
    icon: "bi-emoji-smile",
    end: 232,
    title: "Happy Clients",
    description: "consequuntur quae",
  },
  {
    icon: "bi-journal-richtext",
    end: 521,
    title: "Projects",
    description: "adipisci atque cum quia aut",
  },
  {
    icon: "bi-headset",
    end: 1453,
    title: "Hours Of Support",
    description: "aut commodi quaerat",
  },
  {
    icon: "bi-people",
    end: 32,
    title: "Hard Workers",
    description: "rerum asperiores dolor",
  },
];

const Stats: React.FC = () => {
  const [startCounting, setStartCounting] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCounting(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section id="stats" className="stats section">
      <div
        ref={statsRef}
        className="container"
        data-aos="fade-up"
        data-aos-delay="100"
      >
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
              {statsData.map((stat, index) => (
                <StatItem
                  key={index}
                  icon={stat.icon}
                  end={startCounting ? stat.end : 0}
                  title={stat.title}
                  description={stat.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
