import React, { useRef } from "react";
import "./Ochem.scss";
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

const Ochem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const subtitle = [
    "Specializing on adhesive products for flexible packaging laminating. Leading products for adhesives in China with 4 major categories of products: solvent free adhesive, ester based adhesive, alcohol based adhesive and water based adhesive.",
  ];

  return (
    <Layout>
      <div className="ochem">
        <ProductHeader
          title="Ochem"
          image="/images/logo/ochem-logo.png"
          subtitle={subtitle}
        />
        <main ref={ref} className="ochem__main">
          <img
            style={animation(isInView, 0.5)}
            className="ochem__main-product-1"
            src="https://image.made-in-china.com/43f34j00CoDhVdrRhvpg/Ochem-Two-Component-Solvent-Base-Adhesive-for-High-Speed-Applications.jpg"
            alt="Ochem Product 1"
          />
          <img
            style={animation(isInView, 0.75)}
            className="ochem__main-product-2"
            src="https://image.made-in-china.com/2f0j00bkHlejrWHoga/Ochem-Sf9180A-Sf9180b-Solvent-Free-Polyurethane-Adhesive-for-Wide-Applications-with-High-Speed.jpg"
            alt="Ochem Product 2"
          />
          <img
            style={animation(isInView, 1)}
            className="ochem__main-product-3"
            src="/images/products/ochem-product-1.png"
            alt="Ochem Product 3"
          />
        </main>
        <Footer />
      </div>
    </Layout>
  );
};

export default Ochem;
