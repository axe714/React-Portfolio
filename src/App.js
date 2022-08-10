import React from "react";
import Home from "./Home";
import ContactMe from "./components/ContactForm";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactme" element={<ContactMe />} />
    </Routes>
  </Router>
);

export default App;
