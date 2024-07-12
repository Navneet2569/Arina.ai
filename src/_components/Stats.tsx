import React from "react";
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
  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-5">
            <img
              src="/assets/img/stats-img.svg"
              alt="Stats Image"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-7">
            <div className="row gy-4">
              {statsData.map((stat, index) => (
                <StatItem
                  key={index}
                  icon={stat.icon}
                  end={stat.end}
                  title={stat.title}
                  description={stat.description}
                  duration={stat.end > 700 ? 100 : 300} // Pass the duration prop
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
