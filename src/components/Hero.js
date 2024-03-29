import React, { useEffect, useRef, useState } from "react";
import "./Hero.scss";
// animation
import Lottie from "lottie-react";
import packagingAnimation from "../animation/packaging-delivery.json";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";

const animation = (isInView, delay) => {
  let style = {
    transform: isInView ? "none" : "translateX(-50px)",
    WebkitTransform: isInView ? "none" : "translateX(-50px)",
    MozTransform: isInView ? "none" : "translateX(-50px)",
    msTransform: isInView ? "none" : "translateX(-50px)",
    OTransform: isInView ? "none" : "translateX(-50px)",
    opacity: isInView ? 1 : 0,
    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay + 0.4}s`,
  };
  return style;
};

const animation2 = (isInView, delay) => {
  let style = {
    transform: isInView ? "none" : "scale(0.75)",
    WebkitTransform: isInView ? "none" : "scale(0.75)",
    MozTransform: isInView ? "none" : "scale(0.75)",
    msTransform: isInView ? "none" : "scale(0.75)",
    OTransform: isInView ? "none" : "scale(0.75)",
    opacity: isInView ? 1 : 0,
    transition: `all 1s cubic-bezier(0.17, 1.5, 0.45, 1) ${delay + 0.4}s`,
  };
  return style;
};

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [changeBg, setChangeBg] = useState(1);

  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    const getScrollPosition = () => {
      if (isBrowser && window.innerWidth > 992) {
        if (window.scrollY > 2 * window.innerHeight + 240) {
          setChangeBg(3);
        } else if (window.scrollY > window.innerHeight) {
          setChangeBg(2);
        } else {
          setChangeBg(1);
        }
      } else {
        if (window.scrollY > 2 * window.innerHeight + 240) {
          setChangeBg(3);
        } else if (window.scrollY > window.innerHeight) {
          setChangeBg(2);
        } else {
          setChangeBg(1);
        }
      }
    };

    window.addEventListener("scroll", getScrollPosition);

    return () => {
      window.removeEventListener("scroll", getScrollPosition);
    };
  }, [isBrowser]);

  return (
    <header className="hero">
      <div
        className="hero__bg"
        style={{
          backgroundImage: `url(/images/products/scitech-store.jpg)`,
          display: changeBg === 1 ? "block" : "none",
        }}
      ></div>
      <div
        className="hero__bg"
        style={{
          backgroundImage: `url(/images/products/primeblade.jpg)`,
          display: changeBg === 2 ? "block" : "none",
        }}
      ></div>
      <div
        className="hero__bg"
        style={{
          backgroundImage: `url(http://img2.yun300.cn/repository/image/X6U6cuFbQoaUAaZIPcJBqg.jpg?tenantId=51910&viewType=1)`,
          display: changeBg === 3 ? "block" : "none",
        }}
      ></div>
      <div className="hero__content" ref={ref}>
        <div className="hero__content-left">
          <span
            style={animation(isInView, 0)}
            className="hero__content-left-brand"
          >
            <span className="line"></span>
            <h6>PT. SSI Prima Mas</h6>
          </span>
          <h1 style={animation(isInView, 0.25)}>
            We Specialized in Supplying Product and Services for the Flexible
            Packaging Industries.
          </h1>
          <p style={animation(isInView, 0.5)}>
            Providing excellent service, support and premium quality products.
          </p>
          <span
            style={animation(isInView, 0.75)}
            className="hero__content-left-btn"
          >
            <Link to="/products">
              <button type="button">Check Our Products</button>
            </Link>
          </span>
        </div>
        <div className="hero__content-right">
          <div className="hero__content-right-anim">
            <div style={animation2(isInView, 1)} id="packaging-animation">
              <Lottie animationData={packagingAnimation} loop autoplay />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
