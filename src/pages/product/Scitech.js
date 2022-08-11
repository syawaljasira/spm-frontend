import React from "react";
import "./Scitech.scss";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import ProductHeader from "../../components/product/ProductHeader";

const Scitech = () => {
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
        <main className="scitech__main">
          <img
            className="scitech__main-product"
            src="/images/products/scitech-home-barrels.jpg"
            alt="Scitech Product 1"
          />
          <img
            className="scitech__main-product"
            src="/images/products/scitech-lab.jpg"
            alt="Scitech Product 2"
          />
          <img
            className="scitech__main-product"
            src="/images/products/scitech-lab-1.jpg"
            alt="Scitech Product 3"
          />
          <img
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
