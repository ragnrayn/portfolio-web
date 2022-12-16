import React from "react";
import "./PricePlan.css";
import CheckImg from "../../assets/Check.png";

function PricePlan() {
  return (
    <div className="price">
      <div className="block-header">
        <div className="header-title">Price Plans</div>
        <div className="header-subtitle">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </div>
      </div>
      <div className="price-content">
        <div className="price-item">
          <div className="price-title">Mentoring</div>
          <div className="price-money">
            <span>$10.00</span>/hour
          </div>
          <div className="price-description">
            For most businesses that want to optimize web queries
          </div>
          <div className="price-services">
            <ul>
              <li><img src={CheckImg} alt="" />Text</li>
              <li><img src={CheckImg} alt="" />Text</li>
              <li><img src={CheckImg} alt="" />Text</li>
              <li><img src={CheckImg} alt="" />Text</li>
              <li><img src={CheckImg} alt="" />Text</li>
            </ul>
          </div>
        </div>
        <div className="price-item">
          <div className="price-title">Freelance</div>
          <div className="price-money">
            <span>$20.00</span>/hour
          </div>
          <div className="price-description">
            For most businesses that want to optimize web queries
          </div>
          <div className="price-services">
            <ul>
              <li><img src={CheckImg} alt="" />Text</li>
              <li><img src={CheckImg} alt="" />Text</li>
              <li><img src={CheckImg} alt="" />Text</li>
              <li><img src={CheckImg} alt="" />Text</li>
              <li><img src={CheckImg} alt="" />Text</li>
            </ul>
          </div>
        </div>
        <div className="price-item">
          <div className="price-title">PSD TO HTML</div>
          <div className="price-money">
            <span>$15.00</span>/hour
          </div>
          <div className="price-description">
            For most businesses that want to optimize web queries
          </div>
          <div className="price-services">
            <ul>
              <li><img src={CheckImg} alt="" />Text</li>
              <li><img src={CheckImg} alt="" />Text</li>
              <li><img src={CheckImg} alt="" />Text</li>
              <li><img src={CheckImg} alt="" />Text</li>
              <li><img src={CheckImg} alt="" />Text</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricePlan;
