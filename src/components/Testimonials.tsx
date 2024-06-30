import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

// Install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      imgSrc: "/assets/img/testimonials/testimonials-1.jpg",
      name: "Saul Goodman",
      role: "CEO & Founder",
      stars: 5,
      quote:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    },
    {
      imgSrc: "/assets/img/testimonials/testimonials-2.jpg",
      name: "Sara Wilsson",
      role: "Designer",
      stars: 5,
      quote:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
    {
      imgSrc: "/assets/img/testimonials/testimonials-3.jpg",
      name: "Jena Karlis",
      role: "Store Owner",
      stars: 5,
      quote:
        "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    },
    {
      imgSrc: "/assets/img/testimonials/testimonials-4.jpg",
      name: "Matt Brandon",
      role: "Freelancer",
      stars: 5,
      quote:
        "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    },
    {
      imgSrc: "/assets/img/testimonials/testimonials-5.jpg",
      name: "John Larson",
      role: "Entrepreneur",
      stars: 5,
      quote:
        "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <Image
                    src={testimonial.imgSrc}
                    className="testimonial-img"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.role}</h4>
                  <div className="stars">
                    {[...Array(testimonial.stars)].map((star, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>{testimonial.quote}</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
