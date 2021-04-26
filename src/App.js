import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { useState } from "react";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials/Testimonials";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  const [nav, setNav] = useState("home");
  return (
    <>
      <Navbar setNav={setNav} />
      <AboutMe />
      <Home />
      <Portfolio />
      <Testimonials />
      <ContactMe/>
      <Footer />
    </>
  );
}

export default App;
