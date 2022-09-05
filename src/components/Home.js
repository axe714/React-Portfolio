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
    link: "https://docs.google.com/document/d/1GlX9IWj3oIDwtuRV4WDJiATRKh3HPzcI/edit?usp=sharing&ouid=117977372573934894868&rtpof=true&sd=true"
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
