import React, { useRef } from "react";
import "./Huitong.scss";
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

const Huitong = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  const subtitle = [
    "The largest manufacturer of flexible packing and printing equipment in China, majoring advanced series of soft packaging.",
  ];

  return (
    <Layout>
      <div className="huitong">
        <ProductHeader
          title="Huitong"
          image="/images/logo/huitong-logo.png"
          subtitle={subtitle}
        />
        <main ref={ref} className="huitong__main">
          <div style={animation(isInView, 0.5)} className="product__card">
            <h3 className="product__card-title">
              1. HuiTong HT Bag Making Machine
            </h3>
            <span className="product__card-header">
              <img
                src="/images/products/huitong-ht-bag-making-machine.jpg"
                alt="Huitong Product 1"
              />
            </span>
            <div className="product__card-body">
              <div className="product__card-body-item">
                <h6>Roll size</h6>
                <p>: f600mm</p>
              </div>
              <div className="product__card-body-item">
                <h6>Bag-making speed</h6>
                <p>20 ~ 80cpm</p>
              </div>
              <div className="product__card-body-item">
                <h6>Bag Making Form and Size</h6>
                <p>: Transverse bag-making Feeding direction</p>
              </div>
              <div className="product__card-body-item">
                <h6>Bottom Sealing</h6>
                <p>: Max.80mm</p>
              </div>
              <div className="product__card-body-item">
                <h6>Side Sealing</h6>
                <p>: Max.60mm</p>
              </div>
              <div className="product__card-body-item">
                <h6>Total Output</h6>
                <p>: 65kw</p>
              </div>
              <div className="product__card-body-item">
                <h6>Pueumatic Source</h6>
                <p>: 0.8Mpa</p>
              </div>
              <div className="product__card-body-item">
                <h6>Cooling Water</h6>
                <p>: 5L</p>
              </div>
              <div className="product__card-body-item">
                <h6>Weight</h6>
                <p>: 9T</p>
              </div>
              <div className="product__card-body-item">
                <h6>Machine Size</h6>
                <p>: (L &#215; W &#215; H) 20000&#215;2500&#215;1900 (mm)</p>
              </div>
            </div>
          </div>

          <hr ref={ref2} />

          <div style={animation(isInView2, 0.1)} className="product__card">
            <h3 className="product__card-title">
              2. HuiTong Laminating Machine
            </h3>
            <span className="product__card-header">
              <img
                src="/images/products/huitong-laminating.jpg"
                alt="Huitong Product 2"
              />
            </span>
            <div className="product__card-body">
              <div className="product__card-body-item">
                <h6>Laminating Material</h6>
                <p>: Plastic film, Paper, Aluminium, etc.</p>
              </div>
              <div className="product__card-body-item">
                <h6>Laminating Width</h6>
                <p>: 1250mm</p>
              </div>
              <div className="product__card-body-item">
                <h6>Mechanical Speed</h6>
                <p>: 450m/min</p>
              </div>
              <div className="product__card-body-item">
                <h6>Unwind, Rewind Web Diameter</h6>
                <p>: f800mm</p>
              </div>
            </div>
          </div>

          <hr ref={ref3} />

          <div style={animation(isInView3, 0.1)} className="product__card">
            <h3 className="product__card-title">
              3. HuiTong Printing Press Machine
            </h3>
            <span className="product__card-header">
              <img
                src="/images/products/huitong-printing-press.jpg"
                alt="Huitong Product 3"
              />
            </span>
            <div className="product__card-body">
              <div className="product__card-body-item">
                <h6>Print Material</h6>
                <p>: BOPP, PET, PVC, PE, NY, Paper</p>
              </div>
              <div className="product__card-body-item">
                <h6>Print Width</h6>
                <p>: 1100 - 1300mm</p>
              </div>
              <div className="product__card-body-item">
                <h6>Mechanical Speed</h6>
                <p>: 400m/min</p>
              </div>
              <div className="product__card-body-item">
                <h6>Plate Cylinder</h6>
                <p>: f120mm ~ f320mm</p>
              </div>
              <div className="product__card-body-item">
                <h6>Unwind, Rewind Web Diameter</h6>
                <p>: f800mm</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Layout>
  );
};

export default Huitong;
