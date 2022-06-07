import React from "react";
import Layout from "../components/Layout";
import "./Home.scss";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <header className="hero">
          <div className="hero__left">
            <span className="hero__left-brand">
              <span className="line"></span>
              <h6>PT. SSI Prima Mas</h6>
            </span>
            <h1>
              We Specialized in Providing Product and Services for Flexible
              Packaging Industries.
            </h1>
            <p>
              <strong>SSI Prima Mas</strong> is company with professional
              management and always providing excellent service, support and
              premium quality products.
            </p>
          </div>
          <div className="hero__right">
            <img
              src="/images/products/auclean-5s-cnc-sleeve-type-plate-mounter.png"
              alt="Banner"
            />
          </div>
        </header>
      </div>
    </Layout>
  );
};

export default Home;
