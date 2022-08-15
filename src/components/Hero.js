import React, { useEffect, useState } from "react";
import "./Hero.scss";
// animation
import Lottie from "lottie-react";
import packagingAnimation from "../animation/packaging-delivery.json";
import { Link } from "react-router-dom";

const Hero = () => {
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
      <div className="hero__content">
        <div className="hero__content-left">
          <span className="hero__content-left-brand">
            <span className="line"></span>
            <h6>PT. SSI Prima Mas</h6>
          </span>
          <h1>
            We Specialized in Supplying Product and Services for the Flexible
            Packaging Industries.
          </h1>
          <p>
            Providing excellent service, support and premium quality products.
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
