import React from "react";
import "./Ochem.scss";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import ProductHeader from "../../components/product/ProductHeader";

const Ochem = () => {
  const subtitle = [
    "Huzhou Ochem Chemical Co., Ltd. relies on the strong research and development capabilities and technical resources of Carbon Materials, LLC, through continuous increasing in R & D investment, unremittingly develops products to meet the needs of customers, its flexible packaging laminating adhesive products have become the leading products in China with 4 major categories of products: solvent free adhesive, ester based adhesive, alcohol based adhesive and water based adhesive. and its engineering structure adhesive products include door adhesive, iron cover adhesive, battery sealing adhesive also have obtained high favorable market comments. That makes the company become the most complete supplier of product lines in the industry of laminating adhesive.",
    "At present, Ochem brand adhesive series have become the industry's first choice. The company follows the business philosophy of “Honesty, Exquisiteness and Innovation”, and \"Innovation balance human demand for energy and the environment\" as the company's development vision, through in-depth research and development and continuous innovation on products and application technologies, committed itself to create a greener world!",
  ];

  return (
    <Layout>
      <div className="ochem">
        <ProductHeader
          title="Ochem"
          image="/images/logo/ochem-logo.png"
          subtitle={subtitle}
        />
        <main className="ochem__main">
          <img
            className="ochem__main-product-1"
            src="/images/products/ochem-product-1.png"
            alt="Ochem Product 1"
          />
          <img
            className="ochem__main-product-2"
            src="/images/products/ochem-product-2.png"
            alt="Ochem Product 2"
          />
          <img
            className="ochem__main-product-3"
            src="/images/products/ochem-product-3.png"
            alt="Ochem Product 3"
          />
          <img
            className="ochem__main-product-4"
            src="/images/products/ochem-product-4.png"
            alt="Ochem Product 4"
          />
          <img
            className="ochem__main-product-5"
            src="/images/products/ochem-product-5.png"
            alt="Ochem Product 5"
          />
        </main>
        <Footer />
      </div>
    </Layout>
  );
};

export default Ochem;
