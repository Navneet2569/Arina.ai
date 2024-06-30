import React from "react";
import Layout from "../layout";
import Hero from "../components/Hero";
import LazyLoad from "react-lazyload";
import About from "../components/About";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Stats from "../components/Stats";
import AltServicesSection from "../components/AltServicesSection";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Portfolio from "../components/Portfolio";
import Team from "../components/Team";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <LazyLoad height={200} offset={100}>
        <Hero />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <Clients />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <About />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <Stats />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <Services />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <AltServicesSection />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <Features />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <Testimonials />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <Portfolio />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <Team />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <Pricing />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <FAQ />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <Contact />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <Footer />
      </LazyLoad>
    </Layout>
  );
};

export default HomePage;
