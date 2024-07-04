import React from "react";
import Link from "next/link";
import Image from "next/image";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "@/_components/Footer";
import Header from "@/_components/Header";
import Script from "next/script";

SwiperCore.use([Pagination, Autoplay]);

const PortfolioDetails: React.FC = () => {
  const portfolioImages = [
    {
      src: "/assets/img/portfolio/app-1.jpg",
      alt: "Portfolio Image 1",
    },
    {
      src: "/assets/img/portfolio/product-1.jpg",
      alt: "Portfolio Image 2",
    },
    {
      src: "/assets/img/portfolio/branding-1.jpg",
      alt: "Portfolio Image 3",
    },
    {
      src: "/assets/img/portfolio/books-1.jpg",
      alt: "Portfolio Image 4",
    },
  ];

  return (
    <>
      <Script src="/main.js" />

      <Header />

      <div className="page-title" data-aos="fade">
        <div className="container">
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="current">Portfolio Details</li>
            </ol>
          </nav>
          <h1>Portfolio Details</h1>
        </div>
      </div>

      <section
        id="portfolio-details"
        className="portfolio-details section"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8 portfolio-details-slider swiper init-swiper">
              <Swiper
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                slidesPerView={1}
                spaceBetween={30}
              >
                {portfolioImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="portfolio-image">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={550}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-lg-4">
              <div
                className="portfolio-info"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: Web design
                  </li>
                  <li>
                    <strong>Client</strong>: ASU Company
                  </li>
                  <li>
                    <strong>Project date</strong>: 01 March, 2020
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <Link
                      href="http://www.example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.example.com
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="portfolio-description"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <h2>Exercitationem repudiandae officiis neque suscipit</h2>
                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                  itaque inventore commodi labore quia quia. Exercitationem
                  repudiandae officiis neque suscipit non officia eaque itaque
                  enim. Voluptatem officia accusantium nesciunt est omnis
                  tempora consectetur dignissimos. Sequi nulla at esse enim cum
                  deserunt eius.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PortfolioDetails;
