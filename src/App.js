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
      link: "#"
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
      <Route path="/contactme" element={<ContactMe navItems={navItems} />} />
    </Routes>
  </Router>
);

export default App;
