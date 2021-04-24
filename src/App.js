import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { useState } from "react";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials/Testimonials";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  const [nav, setNav] = useState("home");
  return (
    <>
      <Navbar setNav={setNav} />
      {nav === "home" && <Home />}
      {nav === "portfolio" && <Portfolio />}
      {nav === "testimonials" && <Testimonials />}
      {nav === "about-me" && <AboutMe/>}
      <Footer />
    </>
  );
}

export default App;
