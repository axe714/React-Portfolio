import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar({ navItems }) {
  const [isActive, setActive] = useState("false");

  const mobileBtnHandler = () => {
    setActive(!isActive);
  };

  const lgNavClass = `font-['Manrope'] text-lg py-5 px-12 text-gray-700 transform hover:underline hover:underline-offset-8 hover:scale-110 hover:underline-blue-500 transition-all`;
  const smNavClass = `font-['Manrope'] text-md md:text-lg block py-2 px-4 hover:bg-sky-100 hover:text-blue-900 transition-all`;

  const navVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const childrenVariant = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tweening",
        staggerChildren: 0.25,
      },
    },
  };

  const largeNav = navItems.map((lgNav) =>
    lgNav?.link.includes("/") ? (
      <Link className={lgNavClass} to={lgNav.link}>
        <motion.span variants={childrenVariant}>
          {lgNav.name}
        </motion.span>
      </Link>
    ) : (
      <motion.a
        href={lgNav.link}
        className={lgNavClass}
        variants={childrenVariant}
      >
        {lgNav.name}
      </motion.a>
    )
  );

  const mobileNav = navItems.map((smNav) => (
    <a href={smNav.link} className={smNavClass}>
      {smNav.name}
    </a>
  ));

  return (
    <nav className="bg-white">
      <motion.div
        className="mx-auto px-3"
        variants={navVariants}
        initial="hidden"
        whileInView="show"
      >
        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            <Link
              id="navbar-logo"
              to="/"
              className="flex items-center py-5 px-2 text-gray-800 md:pr-12"
            >
              <motion.span
                className="font-['Pacifico'] text-3xl font-black hover:text-blue-900 transition-all"
                variants={childrenVariant}
              >
                Allec Arzadon
              </motion.span>
            </Link>
          </div>

          {/* large screen nav */}
          <div id="main-navbar" className="hidden lg:flex md:space-x-5">
            {largeNav}
          </div>

          {/* mobile hamburger button */}
          <div className="flex items-center lg:hidden">
            <button onClick={mobileBtnHandler} className="mobile-menu-button">
              <svg
                className="w-6 h-6 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </motion.div>

      {/* mobile nav */}
      <div className={isActive ? "hidden lg:hidden" : "lg:hidden"}>
        {mobileNav}
      </div>
    </nav>
  );
}
