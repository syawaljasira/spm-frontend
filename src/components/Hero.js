import React, { useEffect, useState } from "react";
import "./Hero.scss";
// animation
import Lottie from "lottie-react";
import packagingAnimation from "../animation/packaging-delivery.json";
import { Link } from "react-router-dom";

const Hero = () => {
  const [changeBg, setChangeBg] = useState("scitech-store.jpg");

  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    const getScrollPosition = () => {
      if (isBrowser) {
        if (window.scrollY > window.innerHeight) {
          setChangeBg("primeblade.jpg");
        } else {
          setChangeBg("scitech-store.jpg");
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
          backgroundImage: `url(/images/products/${changeBg})`,
        }}
      ></div>
      <div className="hero__content">
        <div className="hero__content-left">
          <span className="hero__content-left-brand">
            <span className="line"></span>
            <h6>PT. SSI Prima Mas</h6>
          </span>
          <h1>
            We Specialized in Providing Product and Services for Flexible
            Packaging Industries.
          </h1>
          <p>
            Professional management and always providing excellent service,
            support and premium quality products.
          </p>
          <span className="hero__content-left-btn">
            <Link to="/products">
              <button type="button">Check Our Products</button>
            </Link>
          </span>
        </div>
        <div className="hero__content-right">
          <div className="hero__content-right-anim">
            <div id="packaging-animation">
              <Lottie animationData={packagingAnimation} loop autoplay />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
