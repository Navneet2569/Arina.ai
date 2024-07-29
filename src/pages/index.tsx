"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";
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
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, check if they are an admin
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists() && userDoc.data().role === "admin") {
          // User is an admin, redirect to admin dashboard
          router.push("/admindashboard");
        } else {
          // User is not an admin, allow to stay on the homepage
          setLoading(false);
        }
      } else {
        // No user is signed in, allow to stay on the homepage
        setLoading(false);
      }
    });
  }, [router]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking the user's role
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
