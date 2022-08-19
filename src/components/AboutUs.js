import React from "react";
import "./AboutUs.scss";
import { MdOutlinePrecisionManufacturing, MdEco } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";

export default function AboutUs() {
  return (
    <div id="about-us" className="aboutUs">
      <div className="aboutUs__image">
        <img src="/images/illustrations/hero.jpg" alt="About Us" />
      </div>
      <div className="aboutUs__content">
        <h4>About Us</h4>
        <p>
          Established in the year 2009, PT. SSI Prima Mas is a trading company
          specializing in supplying product and services for flexible packaging
          industries.
        </p>
      </div>
      <div className="aboutUs__footer">
        <div className="aboutUs__footer-item footer-item-1">
          <MdEco className="icon-eco" />
          <span>
            <h4>Issues</h4>
            <p>Learn and understand problems and needs</p>
          </span>
        </div>
        <div className="aboutUs__footer-item footer-item-2">
          <MdOutlinePrecisionManufacturing className="icon-manufacture" />
          <span>
            <h4>Development</h4>
            <p>Develop a suitable solution and knowledge</p>
          </span>
        </div>
        <div className="aboutUs__footer-item footer-item-3">
          <BsBoxSeam className="icon-box" />
          <span>
            <h4>Values</h4>
            <p>Deliver necessary values</p>
          </span>
        </div>
      </div>
    </div>
  );
}
