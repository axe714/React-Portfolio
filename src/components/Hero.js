import React from "react";
import { motion } from "framer-motion";

const parentVariant = {
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
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.3,
      damping: 15,
    },
  },
};

export default function Hero() {
  return (
    <div className="bg-white py-12 md:py-24">
      <div className="w-full max-w-screen-xl mx-auto px-12 py-12">
        <motion.div
          variants={parentVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:flex md:flex-col md:items-center md:justify-between"
        >
          <div className="flex-1 min-w-0 lg:pb-12">
            <h2
              id="hero-title"
              className="flex justify-center text-xl font-['Overpass'] text-blue-900 tracking-wide leading-tight mb-3"
            >
              <div className="text-center text-3xl lg:text-4xl font-black">
                <motion.span variants={childrenVariant}>
                  Problem solver,{"  "}
                </motion.span>
                <motion.span variants={childrenVariant}>Creator, </motion.span>
                <motion.span variants={childrenVariant}>
                  Collaborator{"  "}
                </motion.span>
                <motion.span variants={childrenVariant}>
                  {"  "}
                  {"&"} Developer.{"  "}
                </motion.span>
              </div>
            </h2>
            <p
              id="hero-sub-text"
              className="flex justify-center pt-8 font-black md:pt-4"
            >
              <motion.span
                variants={childrenVariant}
                className="font-['Poppins'] break-words text-lg font-extrabold text-center md:pt-4 lg:text-xl"
              >
                A full stack developer with a passion for collaborating with
                others to construct and refine various applications for the
                world to enjoy.
              </motion.span>
            </p>
          </div>
          <motion.div
            variants={childrenVariant}
            id="hero-img"
            className="flex-1 px-12 pt-24 pb-8 lg:pt-12 lg:pb-5"
          >
            <img
              className="flex justify-center rounded-full md:max-w-md md:rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1696&q=80"
              alt="Hero image"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
