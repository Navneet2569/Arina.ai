import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PortfolioItemProps {
  category: string;
  title: string;
  description: string;
  image: string;
  detailsLink: string;
  gallery: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  category,
  title,
  description,
  image,
  detailsLink,
  gallery,
}) => {
  return (
    <div
      className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${category}`}
    >
      <div className="portfolio-content h-100">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="img-fluid"
        />
        <div className="portfolio-info">
          <h4>{title}</h4>
          <p>{description}</p>
          <a
            href={image}
            title={title}
            data-gallery={gallery}
            className="glightbox preview-link"
          >
            <i className="bi bi-zoom-in"></i>
          </a>
          <Link href={detailsLink} legacyBehavior>
            <a title="More Details" className="details-link">
              <i className="bi bi-link-45deg"></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
