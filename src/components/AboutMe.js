import React from "react";
import { motion } from "framer-motion";

const aboutMeVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.3,
      damping: 15,
    },
  },
  show2: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.3,
      damping: 15,
      delay: 0.5,
    },
  },
};

export default function AboutMe() {
  return (
    <div
      id="about-me-container"
      className="z-0 bg-blue-900 pt-24 pb-56 px-8 flex-col"
      variants={aboutMeVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="flex justify-center text-center">
        <h2 className="font-semibold text-white leading-tight">
          <motion.span
            className="font-['Overpass'] text-3xl"
            variants={aboutMeVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Hi, I'm Allec. Nice to meet you.
          </motion.span>
        </h2>
      </div>
      <motion.span
        id="about-me-text"
        className="pt-16 flex justify-center font-['Poppins'] text-lg text-black"
        variants={aboutMeVariants}
        initial="hidden"
        whileInView="show2"
        viewport={{ once: true }}
      >
        <p className="leading-8 tracking-wide lg:px-64 text-center font-bold text-white">
          Stepping out of my comfort zone in March 2022, I transitioned from the medical field
          to software/web development, fell in love with the process of
          learning, creating, experimenting {'&'} even failing.... and haven't
          looked back since.
        </p>
      </motion.span>
    </div>
  );
}
