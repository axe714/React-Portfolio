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
      className="z-0 bg-blue-900 pt-24 pb-64 sm:pb-80 px-8 flex-col"
      variants={aboutMeVariants}
      initial="hidden"
      whileInView="show"
      viewport={{once:true}}
    >
      <div className="flex justify-center text-center">
        <h2 className="text-4xl font-bold font-['Poppins'] text-white leading-tight">
          <motion.span
            className="text-4xl"
            variants={aboutMeVariants}
            initial="hidden"
            whileInView="show"
            viewport={{once:true}}
          >
            Hi, I'm Allec. Nice to meet you.
          </motion.span>
        </h2>
      </div>
      <motion.span
        id="about-me-text"
        className="flex justify-center font-['Poppins'] text-xl text-black"
        variants={aboutMeVariants}
        initial="hidden"
        whileInView="show2"
        viewport={{once:true}}
      >
        <p className="pt-4 lg:px-64 text-center font-bold text-white leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          molestias, consectetur odio fugiat hic quasi nostrum facilis rerum
          velit ut!
        </p>
      </motion.span>
    </div>
  );
}
