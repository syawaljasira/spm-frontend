import React, { useRef } from "react";
import "./ProductHeader.scss";
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

const ProductHeader = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <header ref={ref} className="product__header">
      <span className="product__header-image">
        <img
          style={animation(isInView, 0)}
          src={props.image}
          alt={`${props.title} Logo"`}
        />
      </span>
      <div
        style={animation(isInView, 0.25)}
        className="product__header-content"
      >
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
