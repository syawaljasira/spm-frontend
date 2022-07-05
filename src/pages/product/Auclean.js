import React from "react";
import "./Auclean.scss";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import ProductHeader from "../../components/product/ProductHeader";

const Auclean = () => {
  const subtitle = [
    "Affiliated to Auclean group, Shanghai Auclean Printing Machine Co. ltd was established in 1995, specializing in researching and producing premium plater mounter, chamber doctor blade system, anilox cleaning machine and other printing supporting equipment. Meanwhile, we found Auclean Roller Technologies (Shanghai) Co, ltd, a new member of Auclean group, to employ better divided and specialized grow up, it will focus on the research, production and development of different kinds of high-tech rollers.",
  ];

  return (
    <Layout>
      <div className="auclean">
        <ProductHeader
          title="Auclean"
          image="/images/logo/auclean-logo.png"
          subtitle={subtitle}
        />
        <main className="auclean__main">
          <div className="product__card">
            <h3 className="product__card-title">
              1. 5S Sleeve Type (Cantilever) Press Machine
            </h3>
            <span className="product__card-header">
              <img
                src="/images/products/auclean-5s-cnc-sleeve-type-plate-mounter.png"
                alt="Auclean Product 1"
              />
            </span>
            <div className="product__card-body">
              <div className="product__card-body-item">
                <h6>Machine model</h6>
                <p>: 5S150A; 5S190A; 5S230A</p>
              </div>
              <div className="product__card-body-item">
                <h6>Plate roll length</h6>
                <p>: 1500mm; 1900mm; 2300mm;</p>
              </div>
              <div className="product__card-body-item">
                <h6>Maximum diameter of the plate roll (circumference)</h6>
                <p>: Ф446 mm (1400 mm)</p>
              </div>
              <div className="product__card-body-item">
                <h6>Machine size: length x width x height (mm)</h6>
                <p>
                  : 2450&#215;830&#215;1870; 2850&#215;830&#215;1870;
                  3250&#215;830&#215;1870;
                </p>
              </div>
              <div className="product__card-body-item">
                <h6>Power input</h6>
                <p>: AC220V, 50/60Hz, 1phase, 1kW</p>
              </div>
              <div className="product__card-body-item">
                <h6>Gas source</h6>
                <p>: input pressure {">"}0.8MPa; use pressure 0.75-0.8MPa</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="product__card">
            <h3 className="product__card-title">
              2. Ac-2100ww High Pressure Water Roller Cleaner
            </h3>
            <span className="product__card-header">
              <img
                src="/images/products/auclean-ac-2100ww-high-pressure-water-roller-cleaner.png"
                alt="Auclean Product 2"
              />
            </span>
            <div className="product__card-body">
              <div className="product__card-body-item">
                <h6>Maximum length</h6>
                <p>: 1600mm / 63 inch</p>
              </div>
              <div className="product__card-body-item">
                <h6>Maximum diameter</h6>
                <p>: 300mm / 11.8 inch</p>
              </div>
              <div className="product__card-body-item">
                <h6>Control system</h6>
                <p>: PLC</p>
              </div>
              <div className="product__card-body-item">
                <h6>Size</h6>
                <p>: 2810mm X 880mm X 1250mm</p>
              </div>
              <div className="product__card-body-item">
                <h6>Air pressure</h6>
                <p>: 0.6~0.8MPa, maximum 1.2MPa</p>
              </div>
              <div className="product__card-body-item">
                <h6>Power source</h6>
                <p>: 11kW / AC380V / 30A / 50Hz</p>
              </div>
              <div className="product__card-body-item">
                <h6>Water supply</h6>
                <p>: tap water / 1/2-3/4 inch</p>
              </div>
              <div className="product__card-body-item">
                <h6>Weight</h6>
                <p>: 480kg</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="product__card">
            <h3 className="product__card-title">3. Chamber Docter</h3>
            <span className="product__card-header">
              <img
                src="/images/products/auclean-chamber-doctor.png"
                alt="Auclean Product 3"
              />
            </span>
            <div className="product__card-body">
              <p className="product__card-body-paragraph">
                The chamber docter system is suitable for any format of flexo
                presses, corrugated box presses, glazing machines, coaters and
                equipment that uses anilox rolls to transfer ink or paint. It
                can provide new products and services for printing and coating,
                glazing equipment manufacturers and old equipment for scraping
                existing rubber rollers.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Layout>
  );
};

export default Auclean;
