import React from "react";
import "./ProductHeader.scss";

const ProductHeader = (props) => {
  return (
    <header className="product__header">
      <span className="product__header-image">
        <img src={props.image} alt={`${props.title} Logo"`} />
      </span>
      <div className="product__header-content">
        <h1 className="product__header-content-title">{props.title}</h1>
        {props.subtitle.map((item, index) => {
          return (
            <p key={index} className="product__header-content-subtitle">
              {item}
            </p>
          );
        })}
      </div>
    </header>
  );
};

export default ProductHeader;
