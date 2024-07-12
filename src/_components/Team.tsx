import React from "react";
import Image from "next/image";
import { Lazy } from "swiper/modules";
import LazyLoad from "react-lazyload";

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Walter White",
      role: "Chief Executive Officer",
      imgSrc: "/assets/img/team/team-1.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      imgSrc: "/assets/img/team/team-2.jpg",
    },
    {
      name: "William Anderson",
      role: "CTO",
      imgSrc: "/assets/img/team/team-3.jpg",
    },
    {
      name: "Amanda Jepson",
      role: "Accountant",
      imgSrc: "/assets/img/team/team-4.jpg",
    },
  ];

  return (
    <section id="team" className="team section">
      <LazyLoad height={200} offset={800}>
        <div className="container section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="container">
          <div className="row gy-4">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                imgSrc={member.imgSrc}
              />
            ))}
          </div>
        </div>
      </LazyLoad>
    </section>
  );
};

export default Team;

interface TeamMemberProps {
  name: string;
  role: string;
  imgSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imgSrc }) => {
  return (
    <div
      className="col-lg-3 col-md-6 d-flex align-items-stretch"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="team-member">
        <div className="member-img">
          <img src={imgSrc} alt={`Team Member ${name}`} className="img-fluid" />
          <div className="social">
            <a href="#">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="member-info">
          <h4>{name}</h4>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
};
