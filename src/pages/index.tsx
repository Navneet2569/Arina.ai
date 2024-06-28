// src/pages/index.tsx

import React from "react";
import Layout from "../layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Stats from "../components/Stats";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Clients />
      <About />
      <Stats />
      <Services />
    </Layout>
  );
};

export default HomePage;
