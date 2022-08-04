import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function renderHome() {
    return (
        <div className="bg-white">
          <Navbar />
          <Hero />
        </div>
      );
}