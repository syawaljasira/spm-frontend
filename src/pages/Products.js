import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import PRODUCTS from "../utils/products";
import "./Products.scss";

const Products = () => {
  return (
    <Layout>
      <div className="products">
        <header className="products__header">
          <h1>Products</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
            ducimus doloremque quas cum architecto voluptas aliquam corporis
            amet quia nobis asperiores dolorum omnis quisquam, natus temporibus
            repudiandae distinctio consequuntur voluptatibus ad, recusandae
            maxime nemo? Architecto.
          </p>
        </header>
        <main className="products__main">
          {PRODUCTS.map((item) => {
            return (
              <div
                className="productCard"
                key={item.product_id}
                to={`/product/${item.slug}`}
              >
                <span className="productCard__image">
                  <img src={item.image_product} alt="Auclean" />
                </span>
                <h3 className="productCard__title">{item.name_product}</h3>
                <Link className="productCard__btn" to={`/product/${item.slug}`}>
                  More info
                </Link>
                <p className="productCard__subtitle">{item.subtitle}</p>
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
