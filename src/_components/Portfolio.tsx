"use client";

import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import LazyLoad from "react-lazyload";

const portfolioItems = [
  {
    category: "app",
    title: "App 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/app-1.jpg",
    detailsLink: "/portfolio-details",
    gallery: "portfolio-gallery-app",
  },
  {
    category: "product",
    title: "Product 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/product-1.jpg",
    detailsLink: "/portfolio-details",
    gallery: "portfolio-gallery-product",
  },
  {
    category: "branding",
    title: "Branding 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/branding-1.jpg",
    detailsLink: "/portfolio-details",
    gallery: "portfolio-gallery-branding",
  },
  {
    category: "books",
    title: "Books 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/books-1.jpg",
    detailsLink: "/portfolio-details",
    gallery: "portfolio-gallery-book",
  },
  {
    category: "app",
    title: "App 2",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/app-2.jpg",
    detailsLink: "/portfolio-details",
    gallery: "portfolio-gallery-app",
  },
  {
    category: "product",
    title: "Product 2",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/product-2.jpg",
    detailsLink: "/portfolio-details",
    gallery: "portfolio-gallery-product",
  },
  {
    category: "branding",
    title: "Branding 2",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/branding-2.jpg",
    detailsLink: "/portfolio-details",
    gallery: "portfolio-gallery-branding",
  },
  {
    category: "books",
    title: "Books 2",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/books-2.jpg",
    detailsLink: "/portfolio-details",
    gallery: "portfolio-gallery-book",
  },
  {
    category: "app",
    title: "App 3",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/app-3.jpg",
    detailsLink: "/portfolio-details",
    gallery: "portfolio-gallery-app",
  },
  {
    category: "product",
    title: "Product 3",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/product-3.jpg",
    detailsLink: "/portfolio-details",
    gallery: "portfolio-gallery-product",
  },
  {
    category: "branding",
    title: "Branding 3",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/branding-3.jpg",
    detailsLink: "/portfolio-details",
    gallery: "portfolio-gallery-branding",
  },
  {
    category: "books",
    title: "Books 3",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/books-3.jpg",
    detailsLink: "/portfolio-details",
    gallery: "portfolio-gallery-book",
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterClick = (category: string) => {
    setFilter(category);
  };

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="portfolio section">
      <LazyLoad height={200} offset={800}>
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container">
          <div
            className="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
          >
            <ul
              className="portfolio-filters isotope-filters"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <li
                onClick={() => handleFilterClick("all")}
                className={filter === "all" ? "filter-active" : ""}
              >
                All
              </li>
              <li
                onClick={() => handleFilterClick("app")}
                className={filter === "app" ? "filter-active" : ""}
              >
                App
              </li>
              <li
                onClick={() => handleFilterClick("product")}
                className={filter === "product" ? "filter-active" : ""}
              >
                Product
              </li>
              <li
                onClick={() => handleFilterClick("branding")}
                className={filter === "branding" ? "filter-active" : ""}
              >
                Branding
              </li>
              <li
                onClick={() => handleFilterClick("books")}
                className={filter === "books" ? "filter-active" : ""}
              >
                Books
              </li>
            </ul>

            <div
              className="row gy-4 isotope-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {filteredItems.map((item, index) => (
                <PortfolioItem
                  key={index}
                  category={item.category}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  detailsLink={item.detailsLink}
                  gallery={item.gallery}
                />
              ))}
            </div>
          </div>
        </div>
      </LazyLoad>
    </section>
  );
};

export default Portfolio;
