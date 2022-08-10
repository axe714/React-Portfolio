import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

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
    link: "#"
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
