import React from "react";
import Home from "./Home";
import ContactMe from "./components/ContactForm";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const navItems = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "Resume",
      link: "https://docs.google.com/document/d/1GlX9IWj3oIDwtuRV4WDJiATRKh3HPzcI/edit?usp=sharing&ouid=117977372573934894868&rtpof=true&sd=true"
    },
    {
      name: "Contact Me",
      link: "/contactme"
    }
  ]

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contactme" element={<ContactMe navItems={navItems} />} />
    </Routes>
  </Router>
);

export default App;
