import React, { useRef } from "react";
import "./AboutUs.scss";
import { MdOutlinePrecisionManufacturing, MdEco } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
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

export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} id="about-us" className="aboutUs">
      <div className="w-full flex flex-col sm:flex-row justify-center items-center">
        <div className="aboutUs__image">
          <img
            style={animation(isInView, 0.75)}
            src="/images/illustrations/hero.jpg"
            alt="About Us"
          />
        </div>
        <div className="aboutUs__content">
          <h4 style={animation(isInView, 1)}>About Us</h4>
          <p style={animation(isInView, 1.25)}>
            Established in the year 2009, PT. SSI Prima Mas is a trading company
            specializing in supplying product and services for flexible
            packaging industries.
          </p>
        </div>
      </div>
      <span id="environment"></span>
      <div className="w-full flex flex-col-reverse sm:flex-row justify-center items-center">
        <div className="aboutUs__content">
          <h4 style={animation(isInView, 1)}>For a Better Tomorrow</h4>
          <p style={animation(isInView, 1.25)}>
            We are committed to sustainability by reducing waste, optimizing
            energy use, and supporting renewable resources. By integrating
            sustainable practices into our business model, we aim to create a
            positive impact on the planet. We strive to continually enhance our
            environmental impact and foster a greener future through responsible
            actions and innovations.
          </p>
        </div>
        <div className="aboutUs__image">
          <img
            className="p-6"
            style={animation(isInView, 0.75)}
            src="/images/illustrations/environments.png"
            alt="Environments"
          />
        </div>
      </div>
      <div className="aboutUs__footer">
        <div className="aboutUs__footer-item footer-item-1">
          <MdEco style={animation(isInView, 1.5)} className="icon-eco" />
          <span>
            <h4 style={animation(isInView, 1.75)}>Issues</h4>
            <p style={animation(isInView, 2)}>
              Learn and understand problems and needs
            </p>
          </span>
        </div>
        <div className="aboutUs__footer-item footer-item-2">
          <MdOutlinePrecisionManufacturing
            style={animation(isInView, 1.5)}
            className="icon-manufacture"
          />
          <span>
            <h4 style={animation(isInView, 1.75)}>Development</h4>
            <p style={animation(isInView, 2)}>
              Develop a suitable solution and knowledge
            </p>
          </span>
        </div>
        <div className="aboutUs__footer-item footer-item-3">
          <BsBoxSeam style={animation(isInView, 1.5)} className="icon-box" />
          <span>
            <h4 style={animation(isInView, 1.75)}>Values</h4>
            <p style={animation(isInView, 2)}>Deliver necessary values</p>
          </span>
        </div>
      </div>
    </div>
  );
}
