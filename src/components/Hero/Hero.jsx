import React from "react";
import "./Hero.css";
import { ReactComponent as BtnArrow } from "../../assets/btn-arrow.svg";
import Person from "../../assets/person.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <div className="hero-name">Артур Буряк</div>
        <div className="hero-position">Full stack JavaScript developer</div>
        <div className="hero-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </div>
        <div className="hero-hire">
          <a href="#">Запропонувати роботу <span><BtnArrow /></span></a>
        </div>
      </div>
      <div className="hero-image">
        <img src={Person} alt="" />
      </div>
    </section>
  );
}

export default Hero;
