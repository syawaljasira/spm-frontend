import React, { useRef } from "react";
import "./VisionAndMission.scss";
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

const animation2 = (isInView, delay) => {
  let style = {
    transform: isInView ? "none" : "translateX(30px)",
    WebkitTransform: isInView ? "none" : "translateX(30px)",
    MozTransform: isInView ? "none" : "translateX(30px)",
    msTransform: isInView ? "none" : "translateX(30px)",
    OTransform: isInView ? "none" : "translateX(30px)",
    opacity: isInView ? 1 : 0,
    transition: `all 1s cubic-bezier(0.17, 1.5, 0.45, 1) ${delay + 0.4}s`,
  };
  return style;
};

export default function VisionAndMission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="vision-n-mission">
      <div className="vision">
        <div className="vision__content">
          <div style={animation(isInView, 0)}>
            <span></span>
            <h4>Our Vision</h4>
          </div>
          <p style={animation(isInView, 0.25)}>
            To accelerate packaging industry development in Indonesia by
            providing new technology to our customers
          </p>
        </div>
        <div style={animation2(isInView, 0.5)} className="vision__image">
          <img
            style={animation2(isInView, 0.75)}
            src="/images/banner/working-man.jpg"
            alt="Vision"
          />
        </div>
      </div>
      <div className="mission">
        <div style={animation(isInView, 1)} className="mission__image">
          <img
            style={animation(isInView, 1.25)}
            src="/images/banner/warehouse.jpg"
            alt="Mission"
          />
        </div>
        <div className="mission__content">
          <div style={animation(isInView, 1.5)}>
            <span></span>
            <h4>Our Mission</h4>
          </div>
          <p style={animation(isInView, 1.75)}>
            Introducing and delivering values towards our customers in the form
            of:
          </p>
          <ul
            style={animation(isInView, 1.75)}
            className="mission__content-list"
          >
            <li>Premium quality product</li>
            <li>On time delivery</li>
            <li>Extensive product training</li>
            <li>Extended product support and services</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
