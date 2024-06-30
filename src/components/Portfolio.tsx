import React from "react";
import PortfolioItem from "./PortfolioItem";

const portfolioItems = [
  {
    category: "app",
    title: "App 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/app-1.jpg",
    detailsLink: "portfolio-details.html",
    gallery: "portfolio-gallery-app",
  },
  {
    category: "product",
    title: "Product 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/product-1.jpg",
    detailsLink: "portfolio-details.html",
    gallery: "portfolio-gallery-product",
  },
  {
    category: "branding",
    title: "Branding 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/branding-1.jpg",
    detailsLink: "portfolio-details.html",
    gallery: "portfolio-gallery-branding",
  },
  {
    category: "books",
    title: "Books 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/books-1.jpg",
    detailsLink: "portfolio-details.html",
    gallery: "portfolio-gallery-book",
  },
  {
    category: "app",
    title: "App 2",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/app-2.jpg",
    detailsLink: "portfolio-details.html",
    gallery: "portfolio-gallery-app",
  },
  {
    category: "product",
    title: "Product 2",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/product-2.jpg",
    detailsLink: "portfolio-details.html",
    gallery: "portfolio-gallery-product",
  },
  {
    category: "branding",
    title: "Branding 2",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/branding-2.jpg",
    detailsLink: "portfolio-details.html",
    gallery: "portfolio-gallery-branding",
  },
  {
    category: "books",
    title: "Books 2",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/books-2.jpg",
    detailsLink: "portfolio-details.html",
    gallery: "portfolio-gallery-book",
  },
  {
    category: "app",
    title: "App 3",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/app-3.jpg",
    detailsLink: "portfolio-details.html",
    gallery: "portfolio-gallery-app",
  },
  {
    category: "product",
    title: "Product 3",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/product-3.jpg",
    detailsLink: "portfolio-details.html",
    gallery: "portfolio-gallery-product",
  },
  {
    category: "branding",
    title: "Branding 3",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/branding-3.jpg",
    detailsLink: "portfolio-details.html",
    gallery: "portfolio-gallery-branding",
  },
  {
    category: "books",
    title: "Books 3",
    description: "Lorem ipsum, dolor sit amet consectetur",
    image: "/assets/img/portfolio/books-3.jpg",
    detailsLink: "portfolio-details.html",
    gallery: "portfolio-gallery-book",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="portfolio section">
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
            <li data-filter="*" className="filter-active">
              All
            </li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Product</li>
            <li data-filter=".filter-branding">Branding</li>
            <li data-filter=".filter-books">Books</li>
          </ul>

          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {portfolioItems.map((item, index) => (
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
    </section>
  );
};

export default Portfolio;
