import React from "react";
import "./Home.scss";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import VisionAndMission from "../components/VisionAndMission";

const Home = () => {
  return (
    <Layout changeNavbar>
      <div className="home">
        <Hero />
        <main className="home__main">
          <AboutUs />
          <VisionAndMission />
        </main>
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
