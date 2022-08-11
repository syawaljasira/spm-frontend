import React from "react";
import "./VisionAndMission.scss";

export default function VisionAndMission() {
  return (
    <div className="vision-n-mission">
      <div className="vision">
        <div className="vision__content">
          <div>
            <span></span>
            <h4>Our Vision</h4>
          </div>
          <p>
            To accelerate packaging industry development in Indonesia by
            providing new technology to our customers
          </p>
        </div>
        <div className="vision__image">
          <img src="/images/banner/working-man.jpg" alt="Vision" />
        </div>
      </div>
      <div className="mission">
        <div className="mission__image">
          <img src="/images/banner/warehouse.jpg" alt="Mission" />
        </div>
        <div className="mission__content">
          <div>
            <span></span>
            <h4>Our Mission</h4>
          </div>
          <p>
            Introducing and delivering values towards our customers in the form
            of:
          </p>
          <ul className="mission__content-list">
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
