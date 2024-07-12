"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/router";
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
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebaseConfig";

const HomePage: React.FC = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    const userSession = sessionStorage.getItem("user");

    if (!user && !userSession && !loading) {
      router.push("/signup");
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

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
