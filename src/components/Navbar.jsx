import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ setNav }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div to="/" className="nav-logo-container nav-left">
          <div onClick={()=> setNav('home')} className='logo'>logo</div>
          <img />
        </div>
      </div>
      <div className="nav-right">
        {/* here is where I would put the drag and drop thing (up front) */}
        <div onClick={() => setNav("home")} className="nav-link">
          Home
        </div>
        <div onClick={() => setNav("about-me")} className="nav-link">
          About Me
        </div>
        <div onClick={() => setNav("portfolio")} className="nav-link">
          Portfolio
        </div>
        <div onClick={() => setNav("testimonials")} className="nav-link">
          Testimonials
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
