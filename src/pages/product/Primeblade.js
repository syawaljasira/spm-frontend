import React from "react";
import "./Primeblade.scss";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import ProductHeader from "../../components/product/ProductHeader";

const Primeblade = () => {
  const subtitle = [
    "PrimeBlade Sweden AB is a global manufacturer and supplier of Doctor Blades for flexo, gravure, offset printers, and coating applications. Together with our Swedish raw material supplier and end users the doctor blade was produced to improve production quality, blade life, and to increase machine speeds.",

    "Our Doctor Blades are available in all different edge types, standard thicknesses and widths. They are supplied in 100 meter / 328 foot rolls in easy-to-use cassettes, or cut in lengths to meet your needs.",

    "The pre-ground blades have radius-ground edges, enhancing blade functionality. The blade and cylinders last longer than conventional blades. The pressure exerted by the blade on the cylinders is constant, eliminating uneven blade wear.",
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
