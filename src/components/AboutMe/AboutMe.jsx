import React from "react";
import "./AboutMe.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import pdf from "../../assets/Frontend_Arthur_Buriak.pdf";

function AboutMe() {
  return (
    <>
      <div className="aboutme">
        <div className="personal">
          <div className="avatar"></div>
          <div className="name">Артур Буряк</div>
          <div className="position">Full stack JavaScript developer</div>
          <div className="socials">
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/codingwithragnrayn/"
                  target={"_blank"}
                >
                  <Instagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/arthurburiak/"
                  target={"_blank"}
                >
                  <Linkedin />
                </a>
              </li>
              <li>
                <a href="https://github.com/ragnrayn" target={"_blank"}>
                  <Github />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="line"></div>
        <div className="basic-info">
          <div className="basic-info-block">
            <div className="block-title">Вік</div>
            <div className="block-value">22</div>
          </div>
          <div className="basic-info-block">
            <div className="block-title">Контакти</div>
            <div className="block-value">096 991 12 43</div>
          </div>
          <div className="basic-info-block">
            <div className="block-title">Адреса</div>
            <div className="block-value">Україна, Київ</div>
          </div>
        </div>
        <div className="line"></div>
        <div className="languages">
          <div className="title">Мови</div>
          <div className="language">
            <div className="progress-labels">
              <div className="label-title">English</div>
              <div className="label-value">75%</div>
            </div>
            <ProgressBar
              className="wrapper"
              barContainerClassName="container"
              completedClassName="barCompleted english"
              labelClassName="label"
            />
          </div>
          <div className="language">
            <div className="progress-labels">
              <div className="label-title">Українська</div>
              <div className="label-value">100%</div>
            </div>
            <ProgressBar
              className="wrapper"
              barContainerClassName="container"
              completedClassName="barCompleted"
              labelClassName="label"
            />
          </div>
        </div>
        <div className="line"></div>
        <div className="skill">
          <div className="title">Навички</div>
          <div className="skills">
            <div className="skill-item">HTML5</div>
            <div className="skill-item">CSS3</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">ReactJS</div>
            <div className="skill-item">Bootstrap 4/5</div>
            <div className="skill-item">MUI</div>
            <div className="skill-item">Redux</div>
            <div className="skill-item">JQuery</div>
            <div className="skill-item">NodeJS</div>
            <div className="skill-item">MongoDB</div>
            <div className="skill-item">Moongose</div>
            <div className="skill-item">Express</div>
          </div>
        </div>
        <div className="line"></div>
        <div className="cv-btn">
          <a href={pdf} download>Завантажити резюме</a>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
