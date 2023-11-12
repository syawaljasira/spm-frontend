import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import PRODUCTS from "../utils/products";
import "./Products.scss";
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

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Layout>
      <div ref={ref} className="products">
        <header className="products__header">
          <h1 style={animation(isInView, 0)}>Products</h1>
        </header>
        <main className="products__main">
          {PRODUCTS.map((item, index) => {
            return (
              <div
                className="productCard"
                key={item.product_id}
                to={`/product/${item.slug}`}
                style={animation(isInView, (index + 1) * 0.25)}
              >
                <span className="productCard__image">
                  <img src={item.image_product} alt="Auclean" />
                </span>
                <h3 className="productCard__title">{item.name_product}</h3>
                <Link className="productCard__btn" to={`/product/${item.slug}`}>
                  More info
                </Link>
              </div>
            );
          })}
        </main>
        <Footer />
      </div>
    </Layout>
  );
};

export default Products;
