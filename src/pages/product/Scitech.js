import React, { useRef } from "react";
import "./Scitech.scss";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import ProductHeader from "../../components/product/ProductHeader";
import { useInView } from "framer-motion";

const animation = (isInView, delay) => {
  let style = {
    transform: isInView ? "none" : "translateX(-30px)",
    WebkitTransform: isInView ? "none" : "translateX(-30px)",
    MozTransform: isInView ? "none" : "translateX(-30px)",
    msTransform: isInView ? "none" : "translateX(-30px)",
    OTransform: isInView ? "none" : "translateX(-30px)",
    opacity: isInView ? 1 : 0,
    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay + 0.4}s`,
  };
  return style;
};

const Scitech = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const subtitle = [
    "Specializing in polymer technology and manufacture of high-performance adhesives and coatings. With vast experience in standard adhesives and coatings, Scitech have become one of the leading formulators of compostable adhesives and coatings for a range of different markets.",
  ];

  return (
    <Layout>
      <div className="scitech">
        <ProductHeader
          title="Scitech"
          image="/images/logo/scitech-logo.png"
          subtitle={subtitle}
        />
        <main ref={ref} className="scitech__main">
          <img
            style={animation(isInView, 0.75)}
            className="scitech__main-product"
            src="/images/products/scitech-home-barrels.jpg"
            alt="Scitech Product 1"
          />
          <img
            style={animation(isInView, 1)}
            className="scitech__main-product"
            src="/images/products/scitech-lab.jpg"
            alt="Scitech Product 2"
          />
          <img
            style={animation(isInView, 1.25)}
            className="scitech__main-product"
            src="/images/products/scitech-lab-1.jpg"
            alt="Scitech Product 3"
          />
          <img
            style={animation(isInView, 1.5)}
            className="scitech__main-product"
            src="/images/products/scitech-store.jpg"
            alt="Scitech Product 4"
          />
        </main>
        <Footer />
      </div>
    </Layout>
  );
};

export default Scitech;
