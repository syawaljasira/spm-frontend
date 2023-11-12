import React, { useRef } from "react";
import "./Plaloc.scss";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import ProductHeader from "../../components/product/ProductHeader";
import { useInView } from "framer-motion";

const animation = (isInView, delay) => {
  let style = {
    transform: isInView ? "none" : "translateX(-30px)",
    WebkitTransform: isInView ? "none" : "translateX(-30px)",
    MozTransform: isInView ? "none" : "translateX(-30px)",
    msTransform: isInView ? "none" : "translateX(-30px)",
    OTransform: isInView ? "none" : "translateX(-30px)",
    opacity: isInView ? 1 : 0,
    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay + 0.4}s`,
  };
  return style;
};

const Plaloc = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });

  const subtitle = [
    "PLALOC™ is a zipper tape with excellent economic efficiency, functionality, and rationality that meet the needs of today. It allows you to easily reseal the package after each use. You can efficiently use the contents after initial opening without any content's waste.",
  ];

  return (
    <Layout>
      <div className="plaloc">
        <ProductHeader
          title="Idemitsu Plaloc"
          image="https://iconape.com/wp-content/files/op/164360/svg/164360.svg"
          subtitle={subtitle}
        />
        <main ref={ref} className="plaloc__main">
          <div style={animation(isInView, 0.1)} className="product__card">
            <h3 className="product__card-title">
              1. General Zipper Profiles (For Polyethylene/Polypropylene Film)
            </h3>
            <span className="product__card-header">
              <img
                src="/images/products/idemitsu-plaloc-zipper-profiles.png"
                alt="Plaloc Product 1"
              />
            </span>
            <div className="product__card-body">
              <p className="product__card-body-paragraph">
                Zipper tape for both polyethylene and polypropylene film with
                special sealing layer.
              </p>
              <ul className="product__card-body-list">
                <li>Super low temp. sealability</li>
                <li>Anti wrinkle by melting gap(Sealant & Main layer)</li>
                <li>High rigidity (Hard to deform, Good snap)</li>
                <li>Sealable for both sealant</li>
              </ul>
            </div>
          </div>

          <hr ref={ref2} />

          <div style={animation(isInView2, 0.1)} className="product__card">
            <h3 className="product__card-title">2. POCKETZIP™</h3>
            <span className="product__card-header">
              <img
                src="/images/products/idemitsu-plaloc-pocketzip.png"
                alt="Plaloc Product 2"
              />
            </span>
            <div className="product__card-body">
              <p className="product__card-body-paragraph">
                Excellent in pouch design with POCKETZIP techonology. Almost no
                load is added to a zipper part ensures that Applicable to heavy,
                powder products.
              </p>
              <ul className="product__card-body-list">
                <li>
                  Easy Open, Tab pulled off over zipper, No need to use scissors
                </li>
                <li>Easy top filling behind the zipper</li>
              </ul>
            </div>
          </div>

          <hr ref={ref3} />

          <div style={animation(isInView3, 0.1)} className="product__card">
            <h3 className="product__card-title">3. Linear Tear Zipper</h3>
            <span className="product__card-header">
              <img
                src="https://www.idemitsu.com/en/content/100031195.jpg"
                alt="Plaloc Product 3"
              />
            </span>
            <div className="product__card-body">
              <p className="product__card-body-paragraph">
                A special cut tape which enables linear opening simply by
                attaching to a bag.
              </p>
              <ul className="product__card-body-list">
                <li>
                  Linear tear due to design of zipper (Idemitsu Unitech patented
                  technology)
                </li>
                <li>Does not rely on film properties</li>
                <li>
                  No need for laser perforation. No damage to the film; No
                  leakage
                </li>
              </ul>
            </div>
          </div>

          <hr ref={ref4} />

          <div style={animation(isInView4, 0.1)} className="product__card">
            <h3 className="product__card-title">
              4. PLALOC™ Eco-friendly zipper
            </h3>
            <span className="product__card-header">
              <img
                src="https://www.idemitsu.com/en/content/100031196.jpg"
                alt="Plaloc Product 4"
              />
            </span>
            <div className="product__card-body">
              <p className="product__card-body-paragraph">
                Plastic packaging is an essential for "reduction of food loss".
                On the other hand, as the problem of marine plastic waste is
                raised, Idemitsu Unitech has positioned the reduction of
                environmental impact as one of the most important issues for
                packaging material manufacturers and is actively working on it.
              </p>
              <p className="product__card-body-paragraph">
                PLALOC™ Eco-friendly zipper has Recyclable", "Biomass", and
                "Biodegradability" features
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
