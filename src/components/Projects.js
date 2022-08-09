import React from "react";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import OldEggImg from "../images/oldegg-landing-page.png";
import StargazerImg from "../images/stargazer-demo.png";
import TechSpotImg from "../images/tech-spot-demo.jpg";
import TeamGeneratorImg from "../images/team-generator-demo.png";
import EmployeeTrackerImg from "../images/employee-tracker-demo.jpg";
import WeatherTrackerImg from "../images/weathertracker-demo.png";

export default function Projects() {
  // we use this use in view hook that sets a boolean to TRUE or FALSE if element that has ref={ref} is in view or not
  const { ref, inView } = useInView({
    // 10% of the element must be present for animation to start
    threshold: .10,
  });
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();
  const animation6 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation1.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
          damping: 15
        },
      });
      animation2.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
          delay: 0.25,
          damping: 15
        },
      });
      animation3.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
          delay: 0.5,
          damping: 15
        },
      });
      animation4.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
          delay: 0.75,
          damping: 15
        },
      });
      animation5.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
          delay: 1,
          damping: 15
        },
      });
      animation6.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
          delay: 1.25,
          damping: 15
        },
      });
    }
    if (!inView) {
      animation1.start({ x: "-100vw" });
      animation2.start({ x: "-100vw" });
      animation3.start({ x: "-100vw" });
      animation4.start({ x: "-100vw" });
      animation5.start({ x: "-100vw" });
      animation6.start({ x: "-100vw" });
    }
  }, [inView]);

  return (
    <div id="projects-container" className="mt-16 md:mt-24 md:mx-16">
      <div className="flex justify-center text-center">
        <h2
          id="projects-header"
          className="mb-16 text-4xl font-['Manrope'] font-bold text-blue-900 leading-tight"
        >
          <span className="text-3xl">My Recent Work</span>
        </h2>
      </div>

      <div
        ref={ref}
        className="grid grid-row place-items-center mx-8 gap-y-4 gap-x-4 md:grid-cols-3 md:mx-2"
      >
        <motion.div
          id="project-1"
          className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          animate={animation1}
        >
          <a href="https://oldegg.herokuapp.com/">
            <img
              className="min-w-md rounded-t-lg"
              src={OldEggImg}
              alt="Old Egg Demo"
            />
          </a>
          <div className="p-5">
            <a href="https://oldegg.herokuapp.com/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Old Egg
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              E-commerce website that sells computer parts.
            </p>
            <a
              href="https://oldegg.herokuapp.com/"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Project
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          id="project-2"
          className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          animate={animation2}
        >
          <a href="https://github.com/axe714/StarGazer">
            <img
              className="min-h-lg min-w-md rounded-t-lg"
              src={StargazerImg}
              alt="Stargazer Demo"
            />
          </a>
          <div className="p-5">
            <a href="https://github.com/axe714/StarGazer">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Stargazer
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              NASA's view of the galaxy. Utilizes NASA's APOD API to deliver
              pictures for you to enjoy.
            </p>
            <a
              href="https://github.com/axe714/StarGazer"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Project
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          id="project-3"
          className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          animate={animation3}
        >
          <a href="https://peaceful-sands-08318.herokuapp.com/">
            <img
              className="min-h-lg min-w-md rounded-t-lg"
              src={TechSpotImg}
              alt="Tech Spot Demo"
            />
          </a>
          <div className="p-5">
            <a href="https://peaceful-sands-08318.herokuapp.com/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                The Tech Spot
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A place for tech enthusiasts to share their ideas among
              themselves.
            </p>
            <a
              href="https://peaceful-sands-08318.herokuapp.com/"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Project
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          id="project-4"
          className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          animate={animation4}
        >
          <a href="https://github.com/axe714/Team-Profile-Generator">
            <img
              className="min-h-lg min-w-md rounded-t-lg"
              src={TeamGeneratorImg}
              alt="Team Generator Demo"
            />
          </a>
          <div className="p-5">
            <a href="https://github.com/axe714/Team-Profile-Generator">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Team Profile Generator
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Generates a team profile for your software company using a CLI.
            </p>
            <a
              href="https://github.com/axe714/Team-Profile-Generator"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Project
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          id="project-5"
          className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          animate={animation5}
        >
          <a href="https://github.com/axe714/Employee-Tracker">
            <img
              className="min-h-lg min-w-md rounded-t-lg"
              src={EmployeeTrackerImg}
              alt="Employee Tracker Demo"
            />
          </a>
          <div className="p-5">
            <a href="https://github.com/axe714/Employee-Tracker">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Employee Tracker
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Keep track of your employees using this CLI application built
              entirely using Node.
            </p>
            <a
              href="https://github.com/axe714/Employee-Tracker"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Project
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          id="project-6"
          className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          animate={animation6}
        >
          <a href="https://github.com/axe714/Weather-Tracker">
            <img
              className="min-h-lg min-w-md rounded-t-lg"
              src={WeatherTrackerImg}
              alt="Weather Tracker Demo"
            />
          </a>
          <div className="p-5">
            <a href="https://github.com/axe714/Weather-Tracker">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Weather Application
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              View the 7-day weather forecast of the city of your choosing.{" "}
            </p>
            <a
              href="https://github.com/axe714/Weather-Tracker"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Project
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
