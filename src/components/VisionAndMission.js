import React from "react";
import "./VisionAndMission.scss";
import { Link } from "react-router-dom";

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
            Introduce, promote, educate, provide and give satisfaction to
            customers in the form of premium product quality, on time delivery,
            training, best support and service in accordance with customer
            needs.
          </p>
        </div>
      </div>
      <div className="callback">
        <h5 className="callback__title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          nihil adipisci minima!
        </h5>
        <p className="callback__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          impedit repudiandae, laudantium corporis libero sequi quidem possimus
          unde, aliquid eum exercitationem veritatis laboriosam velit eius?
        </p>
        <span className="callback__btn">
          <Link to="/products">
            <button type="button">Check Our Products</button>
          </Link>
        </span>
      </div>
    </div>
  );
}
