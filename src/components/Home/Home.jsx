import React from "react";
import ContactMe from "./ContactMe";
import "./Home.css";

function Home() {


  return (
    <div className="home">
      <div className="home-top">
        <div className="home-left">
          <h1>I'm Julian Tipler!</h1>
          <div>
            <div>text about me</div>
          </div>
        </div>
        <div className="home-right">
          <img alt="myself here"></img>
        </div>
      </div>
      <div className="home-bottom">
        <ContactMe/>
      </div>
    </div>
  );
}

export default Home;
