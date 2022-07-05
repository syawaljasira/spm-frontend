import React from "react";
import "./Scitech.scss";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import ProductHeader from "../../components/product/ProductHeader";

const Scitech = () => {
  const subtitle = [
    "Founded in 2002 out of Flint, Wales, Scitech Adhesive Systems specialise in polymer technology and manufacture high-performance adhesives and coatings. We work with our customers to create tailored products by offering a complete design and development service.",

    "Our vast experience and evolving expertise allow us to solve your problems efficiently and successfully. We provide assistance with product trials and offer a complete design and build service.",

    "As well as having vast experience in standard adhesives and coatings, Scitech have become one of the leading formulators of compostable adhesives and coatings for a range of different markets.",
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
