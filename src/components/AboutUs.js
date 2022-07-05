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
          PT. SSI Prima Mas was established in the year 2009. SPM is a trading
          company specialized in providing product and services for flexible
          packaging industries. SPM is company with professional management and
          always providing excellent service, support and premium quality
          products.
        </p>
      </div>
      <div className="aboutUs__footer">
        <div className="aboutUs__footer-item footer-item-1">
          <MdEco className="icon-eco" />
          <span>
            <h4>Lorem, ipsum dolor.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              iure
            </p>
          </span>
        </div>
        <div className="aboutUs__footer-item footer-item-2">
          <MdOutlinePrecisionManufacturing className="icon-manufacture" />
          <span>
            <h4>Lorem, ipsum</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur
            </p>
          </span>
        </div>
        <div className="aboutUs__footer-item footer-item-3">
          <BsBoxSeam className="icon-box" />
          <span>
            <h4>Lorem ipsum dolor</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ad
              asperiores
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
