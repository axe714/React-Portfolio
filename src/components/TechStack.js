import React from "react";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HtmlLogo from "../images/icons/html.svg";
import CSSLogo from "../images/icons/css.svg";
import JavascriptLogo from "../images/icons/javascript.svg";
import BootstrapLogo from "../images/icons/bootstrap.svg";
import HandlebarsLogo from "../images/icons/handlebars.svg";
import TailwindLogo from "../images/icons/tailwind.png";
import ExpressLogo from "../images/icons/express.svg";
import NodeLogo from "../images/icons/nodejs.svg";
import MySqlLogo from "../images/icons/mysql.svg";
import MongoDbLogo from "../images/icons/mongodb.svg";
import GithubLogo from "../images/icons/github.svg";
import SlackLogo from "../images/icons/slack.svg";

export default function TechStack() {
  // we use this use in view hook that sets a boolean to TRUE or FALSE if element that has ref={ref} is in view or not
  const { ref, inView } = useInView({
    // 20% of the element must be present for animation to start
    threshold: 0.2,
  });
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

  //we use the useEffect hook here to invoke a function when the state of an element CHANGES. We set [inView] as the parameter to monitor
  // so that ONLY when an element is [inView] === true, then the function below is invoked.
  useEffect(() => {
    if (inView) {
      animation1.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
          damping: 20
        },
      });
      animation2.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
          delay: 0.25,
          damping: 20
        },
      });
      animation3.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
          delay: 0.5,
          damping: 20
        },
      });
    }
    // elements are hidden when NOT in view (-100vw = pushed LEFT, 100vw = pushed RIGHT).
    if (!inView) {
      animation1.start({ x: "-100vw" });
      animation2.start({ x: "100vw" });
      animation3.start({ x: "-100vw" });
    }
  }, [inView]);

  return (
    <div id="tech-stack-container" className="bg-white grid grid-rows-3 -mt-48 mx-8 divide-y md:grid-rows-none md:grid-cols-3 md:mx-16 md:divide-x rounded-lg outline outline-sky-100">
      <div className="flex flex-col place-items-center md:justify-center md:items-center text-center h-auto py-5 px-5">
        <span
          ref={ref}
          id="stack-title-1"
          className="font-['Manrope'] font-bold text-blue-900 pb-8 text-2xl"
        >
          Front-End
        </span>
        <motion.div
          id="stack-icons-1"
          className="grid grid-cols-2 gap-x-10 gap-y-5 md:gap-x-14 md:gap-y-5"
          animate={animation1}
        >
          <motion.img
            src={HtmlLogo}
            alt="HTML-Logo"
            className="max-h-20 md:max-h-20"
            whileHover={{ scale: 1.2 }}
          />
          <motion.img
            src={CSSLogo}
            alt="CSS-Logo"
            className="max-h-20 md:max-h-20"
            whileHover={{ scale: 1.2 }}
          />
          <motion.img
            src={JavascriptLogo}
            alt="Javascript-Logo"
            className="max-h-16 md:max-h-16"
            whileHover={{ scale: 1.2 }}
          />
          <motion.img
            src={BootstrapLogo}
            alt="Bootstrap-Logo"
            className="max-h-16 md:max-h-16"
            whileHover={{ scale: 1.2 }}
          />
          <motion.img
            src={HandlebarsLogo}
            alt="Handlebars-Logo"
            className="w-20 h-16"
            whileHover={{ scale: 1.2 }}
          />
          <motion.img
            src={TailwindLogo}
            alt="Tailwind-Logo"
            className="max-h-16 md:max-h-16"
            whileHover={{ scale: 1.2 }}
          />
        </motion.div>
      </div>

      <div
        ref={ref}
        className="flex flex-col place-items-center text-center h-auto px-5"
      >
        <span
          id="stack-title-2"
          className="font-['Manrope'] font-bold text-blue-900 text-2xl pt-5 pb-10"
        >
          Back-End
        </span>
        <motion.div
          id="stack-icons-2"
          className="grid grid-cols-2 gap-x-8 md:gap-x-12 gap-y-5"
          animate={animation2}
        >
          <motion.img
            src={ExpressLogo}
            alt="Express-Logo"
            className="h-12 w-24 md:max-w-24 md:max-h-20"
            whileHover={{ scale: 1.2 }}
          />
          <motion.img
            src={NodeLogo}
            alt="NodeJS-Logo"
            className="max-h-16 max-w-24 md:max-w-16 md:max-h-16"
            whileHover={{ scale: 1.2 }}
          />
          <motion.img
            src={MongoDbLogo}
            alt="MongoDB-Logo"
            className="max-h-16 md:max-h-20"
            whileHover={{ scale: 1.2 }}
          />
          <motion.img
            src={MySqlLogo}
            alt="MySQL-Logo"
            className="max-h-16 md:max-h-16"
            whileHover={{ scale: 1.2 }}
          />
        </motion.div>
      </div>

      <div
        ref={ref}
        className="flex flex-col place-items-center text-center h-auto px-5"
      >
        <span
          id="stack-title-3"
          className="font-['Manrope'] font-bold text-blue-900 text-2xl pt-5 pb-10"
        >
          Dev Tools
        </span>
        <motion.div
          id="stack-icons-3"
          className="grid grid-cols-2 gap-x-12 gap-y-5"
          animate={animation3}
        >
          <motion.img
            src={GithubLogo}
            alt="Github-Logo"
            className="max-h-16 md:max-h-16"
            whileHover={{ scale: 1.2 }}
          />
          <motion.img
            src={SlackLogo}
            alt="Slack-Logo"
            className="max-h-16 md:max-h-16"
            whileHover={{ scale: 1.2 }}
          />
        </motion.div>
      </div>
    </div>
  );
}
