import React from "react";
import Layout from "../layout";
import Hero from "../_components/Hero";
import About from "../_components/About";
import Services from "../_components/Services";
import Clients from "../_components/Clients";
import Stats from "../_components/Stats";
import AltServicesSection from "../_components/AltServicesSection";
import Features from "../_components/Features";
import Testimonials from "../_components/Testimonials";
import Portfolio from "../_components/Portfolio";
import Team from "../_components/Team";
import Pricing from "../_components/Pricing";
import FAQ from "../_components/FAQ";
import Contact from "../_components/Contact";
import Footer from "../_components/Footer";

const HomePage: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage;
