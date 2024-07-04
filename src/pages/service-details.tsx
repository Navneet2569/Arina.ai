import React from "react";
import Footer from "@/_components/Footer";
import Header from "@/_components/Header";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const ServiceDetails: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="page-title" data-aos="fade">
          <div className="container">
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="current">Service Details</li>
              </ol>
            </nav>
            <h1>Service Details</h1>
          </div>
        </div>

        <section id="service-details" className="service-details section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                <div className="services-list">
                  <Link href="#" className="active">
                    Web Design
                  </Link>
                  <Link href="#">Software Development</Link>
                  <Link href="#">Product Management</Link>
                  <Link href="#">Graphic Design</Link>
                  <Link href="#">Marketing</Link>
                </div>
                <h4>Enim qui eos rerum in delectus</h4>
                <p>
                  Nam voluptatem quasi numquam quas fugiat ex temporibus quo
                  est. Quia aut quam quod facere ut non occaecati ut aut.
                  Nesciunt mollitia illum tempore corrupti sed eum reiciendis.
                  Maxime modi rerum.
                </p>
              </div>

              <div className="col-lg-8" data-aos="fade-up" data-aos-delay={200}>
                <Image
                  src="/assets/img/services.jpg"
                  alt="Services Image"
                  className="img-fluid services-img"
                  width={800}
                  height={600}
                />
                <h3>
                  Temporibus et in vero dicta aut eius lidero plastis trand
                  lined voluptas dolorem ut voluptas
                </h3>
                <p>
                  Blanditiis voluptate odit ex error ea sed officiis deserunt.
                  Cupiditate non consequatur et doloremque consequuntur.
                  Accusantium labore reprehenderit error temporibus saepe
                  perferendis fuga doloribus vero. Qui omnis quo sit. Dolorem
                  architecto eum et quos deleniti officia qui.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i>{" "}
                    <span>Aut eum totam accusantium voluptatem.</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{" "}
                    <span>
                      Assumenda et porro nisi nihil nesciunt voluptatibus.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{" "}
                    <span>Ullamco laboris nisi ut aliquip ex ea</span>
                  </li>
                </ul>
                <p>
                  Est reprehenderit voluptatem necessitatibus asperiores neque
                  sed ea illo. Deleniti quam sequi optio iste veniam repellat
                  odit. Aut pariatur itaque nesciunt fuga.
                </p>
                <p>
                  Sunt rem odit accusantium omnis perspiciatis officia.
                  Laboriosam aut consequuntur recusandae mollitia doloremque est
                  architecto cupiditate ullam. Quia est ut occaecati fuga.
                  Distinctio ex repellendus eveniet velit sint quia sapiente
                  cumque. Et ipsa perferendis ut nihil. Laboriosam vel
                  voluptates tenetur nostrum. Eaque iusto cupiditate et totam et
                  quia dolorum in. Sunt molestiae ipsum at consequatur vero.
                  Architecto ut pariatur autem ad non cumque nesciunt qui
                  maxime. Sunt eum quia impedit dolore alias explicabo ea.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServiceDetails;
