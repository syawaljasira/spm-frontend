import React from "react";
import "./Plaloc.scss";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import ProductHeader from "../../components/product/ProductHeader";

const Plaloc = () => {
  const subtitle = [
    "Idemitsu Unitech Co., Ltd. was formed as a new company on April 1, 2000 following the integration of the plastic products business department and Uni Kako Co., Ltd., which was the production department of packing materials.As a result, we successfully integrated the research, production and distribution departments to form a group of plastic processed product specialists. We now commit to our business and our marketing attitude with the motto, \"Quickly respond to our customers' needs for economical efficiency, environment friendliness and convenience by looking from our customers' point of view.\"We, as a company specializing in collaborative value creation, will contribute to society by creating new additional values on the basis of furthering our technical capabilities, mobility and strong partnerships with our customers.",
  ];

  return (
    <Layout>
      <div className="plaloc">
        <ProductHeader
          title="Idemitsu Plaloc"
          image="/images/logo/idemitsu-logo.png"
          subtitle={subtitle}
        />
        <main className="plaloc__main">
          <div className="product__card">
            <h3 className="product__card-title">1. Zipper Profiles PLALOC™</h3>
            <span className="product__card-header">
              <img
                src="/images/products/idemitsu-plaloc-zipper-profiles.png"
                alt="Plaloc Product 1"
              />
            </span>
            <div className="product__card-body">
              <p className="product__card-body-paragraph">
                That supports a leading brand name of extreme quality. PLALOC™
                is a zipper tape with excellent economic efficiency,
                functionality, and rationality that meet the needs of today. It
                allows you to easily reseal the package after each use. You can
                efficiently use the contents after initial opening without any
                content's waste.
              </p>
            </div>
          </div>
          <hr />
          <div className="product__card">
            <h3 className="product__card-title">2. PLALOC™ Pocket Zip™</h3>
            <span className="product__card-header">
              <img
                src="/images/products/idemitsu-plaloc-pocketzip.png"
                alt="Plaloc Product 2"
              />
            </span>
            <div className="product__card-body">
              <p className="product__card-body-paragraph">
                Our patented technology, Front panel zipper POCKETZIP™.
                POCKETZIP™ is even when opening the pouch, excellent in pouch
                design because the upper part of the bag remains. New shaped
                pouch with one-side structure and a pocket open. Almost no load
                is added to a zipper part ensures that Applicable to heavy,
                powder products.
              </p>
              <p className="product__card-body-paragraph"></p>
              <ul className="product__card-body-list">
                <li>
                  Easy Open, Tab pulled off over zipper, No need to use scissors
                </li>
                <li>Easy top filling behind the zipper</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="product__card">
            <h3 className="product__card-title">3. Easy-opening UNICUT</h3>
            <span className="product__card-header">
              <img
                src="/images/products/idemitsu-plaloc-easy-opening-unicut.png"
                alt="Plaloc Product 3"
              />
            </span>
            <div className="product__card-body">
              <p className="product__card-body-paragraph">
                This is special cut tape which enables linear opening simply by
                attaching to a bag.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Layout>
  );
};

export default Plaloc;
