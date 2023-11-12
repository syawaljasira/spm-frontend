import React, { useRef } from "react";
import "./Auclean.scss";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import ProductHeader from "../../components/product/ProductHeader";
import { useInView } from "framer-motion";

const animation = (isInView, delay) => {
  let style = {
    opacity: isInView ? 1 : 0,
    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay + 0.4}s`,
  };
  return style;
};

const Auclean = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  const subtitle = [
    "Concentrating on researching and producing premium plater mounter, chamber doctor blade system, anilox cleaning machine and other printing supporting equipment.",
  ];

  return (
    <Layout>
      <div className="auclean">
        <ProductHeader
          title="Auclean"
          image="/images/logo/auclean-logo.png"
          subtitle={subtitle}
        />
        <main ref={ref} className="auclean__main">
          <div style={animation(isInView, 0.5)} className="product__card">
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
                <p>: 5S230A</p>
              </div>
              <div className="product__card-body-item">
                <h6>Plate roll length</h6>
                <p>: 2300 mm</p>
              </div>
              <div className="product__card-body-item">
                <h6>Maximum diameter of the plate roll (circumference)</h6>
                <p>: 446 mm</p>
              </div>
              <div className="product__card-body-item">
                <h6>Machine Size</h6>
                <p>: (L &#215; W &#215; H) 3250&#215;830&#215;1870 (mm)</p>
              </div>
              <div className="product__card-body-item">
                <h6>Power Input</h6>
                <p>: AC220V, 50/60Hz, 1phase, 1kW</p>
              </div>
            </div>
          </div>

          <hr ref={ref2} />

          <div style={animation(isInView2, 0.1)} className="product__card">
            <h3 className="product__card-title">
              2. AC-2100WW High Pressure Water Roller Cleaner
            </h3>
            <span className="product__card-header">
              <img
                src="/images/products/auclean-ac-2100ww-high-pressure-water-roller-cleaner.png"
                alt="Auclean Product 2"
              />
            </span>
            <div className="product__card-body">
              <div className="product__card-body-item">
                <h6>Maximum Length</h6>
                <p>: 1600 mm</p>
              </div>
              <div className="product__card-body-item">
                <h6>Maximum Diameter</h6>
                <p>: 300 mm</p>
              </div>
              <div className="product__card-body-item">
                <h6>Control System</h6>
                <p>: PLC</p>
              </div>
              <div className="product__card-body-item">
                <h6>Size</h6>
                <p>: (L &#215; W &#215; H) 2810&#215;880&#215;1250 (mm)</p>
              </div>
              <div className="product__card-body-item">
                <h6>Air Pressure</h6>
                <p>: 0.6~1.2 MPa</p>
              </div>
              <div className="product__card-body-item">
                <h6>Power Source</h6>
                <p>: 11kW / AC380V / 30A / 50Hz</p>
              </div>
              <div className="product__card-body-item">
                <h6>Water Supply</h6>
                <p>: Tap water</p>
              </div>
              <div className="product__card-body-item">
                <h6>Weight</h6>
                <p>: 480kg</p>
              </div>
            </div>
          </div>

          <hr ref={ref3} />

          <div style={animation(isInView3, 0.1)} className="product__card">
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
                equipment that uses anilox rolls to transfer ink or paint.
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
