import React from "react";
import "./Primeblade.scss";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import ProductHeader from "../../components/product/ProductHeader";

const Primeblade = () => {
  const subtitle = [
    "A global manufacturer and supplier of Doctor Blades for flexo, gravure, offset printers, and coating applications. Together with Swedish raw material supplier and end users the doctor blade was produced to improve production quality, blade life, and to increase machine speeds.",
  ];

  return (
    <Layout>
      <div className="primeblade">
        <ProductHeader
          title="Primeblade"
          image="/images/logo/primeblade-logo.png"
          subtitle={subtitle}
        />
        <main className="primeblade__main">
          <div className="primeblade__main-product">
            <h6>DOCTOR BLADES</h6>
            <img
              src="/images/products/primeblade-docter-blade.jpg"
              alt="Primeblade Product 1"
            />
          </div>
          <div className="primeblade__main-product">
            <h6>NANO PRODUCTS</h6>
            <img
              src="/images/products/primeblade-nano-blade.jpg"
              alt="Primeblade Product 2"
            />
          </div>
          <div className="primeblade__main-product">
            <h6>PRIMEBLADE PROFILES</h6>
            <img
              src="/images/products/primeblade-profiles.jpg"
              alt="Primeblade Product 3"
            />
          </div>
          <div className="primeblade__main-product">
            <h6>DOCTOR BLADE CUTTER</h6>
            <img
              src="/images/products/primeblade-doctor-blade-cutter.jpg"
              alt="Primeblade Product 4"
            />
          </div>
          <div className="primeblade__main-product">
            <h6>PRIMESEALS</h6>
            <img
              src="/images/products/primeblade-primeseals.jpg"
              alt="Primeblade Product 5"
            />
          </div>
          <div className="primeblade__main-product">
            <h6>ANGLE GAUGE</h6>
            <img
              src="/images/products/primeblade-angle-gauge.jpg"
              alt="Primeblade Product 6"
            />
          </div>
        </main>
        <Footer />
      </div>
    </Layout>
  );
};

export default Primeblade;
