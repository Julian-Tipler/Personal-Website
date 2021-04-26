import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div>
      <h1>AboutMe</h1>
      <div className="about-me-top">
        <div className="about-me-left">
          <h1>I'm Julian Tipler!</h1>
          <div>
            <div>text about me</div>
          </div>
        </div>
        <div className="about-me-right">
          <img alt="myself here"></img>
        </div>
      </div>

    </div>
  );
}

export default AboutMe;
