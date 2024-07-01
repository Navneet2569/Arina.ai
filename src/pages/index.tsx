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
      <Hero />

      <Clients />

      <About />

      <Stats />

      <Services />

      <AltServicesSection />

      <Features />

      <Testimonials />

      <Portfolio />

      <Team />

      <Pricing />

      <FAQ />

      <Contact />

      <Footer />
    </Layout>
  );
};

export default HomePage;
