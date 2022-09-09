import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Footer from "./Footer";

const navItems = [
  {
    name: "About Me",
    link: "#about-me-container"
  },
  {
    name: "Skills",
    link: "#tech-stack-container"
  },
  {
    name: "Projects",
    link: "#projects-container"
  },
  {
    name: "Resume",
    link: "https://docs.google.com/document/d/1Wqz3wxS2hD3IwVqkAK7fvU93CmIKVD9XtaVOhBSXG90/edit?usp=sharing"
  },
  {
    name: "Contact Me",
    link: "/contactme"
  }
]

export default function renderHome() {
  return (
    <div className="bg-white">
      <Navbar navItems={navItems}/>
      <Hero />
      <AboutMe />
      <TechStack />
      <Projects />
      <Footer />
    </div>
  );
}
