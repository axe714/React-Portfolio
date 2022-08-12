import React from "react";
import { motion } from "framer-motion";
import OldEggImg from "../images/oldegg-landing-page.png";
import StargazerImg from "../images/stargazer-demo.PNG";
import TechSpotImg from "../images/tech-spot-demo.jpg";
import TeamGeneratorImg from "../images/team-generator-demo.png";
import EmployeeTrackerImg from "../images/employee-tracker-demo.jpg";
import WeatherTrackerImg from "../images/weathertracker-demo.png";

const projects = [
  {
    name: "OldEgg",
    image: OldEggImg,
    description: "E-commerce website that sells computer parts.",
    link: "https://oldegg.herokuapp.com/",
  },
  {
    name: "Stargazer",
    image: StargazerImg,
    description: `NASA's view of the galaxy. Utilizes NASA's APOD API to deliver
    pictures for you to enjoy.`,
    link: "https://github.com/axe714/StarGazer",
  },
  {
    name: "TechSpot",
    image: TechSpotImg,
    description:
      "A place for tech enthusiasts to share their ideas among themselves.",
    link: "https://peaceful-sands-08318.herokuapp.com/",
  },
  {
    name: "Team Profile Generator",
    image: TeamGeneratorImg,
    description:
      "Generates a team profile for your software company using a CLI.",
    link: "https://github.com/axe714/Team-Profile-Generator",
  },
  {
    name: "Employee Tracker",
    image: EmployeeTrackerImg,
    description:
      "Keep track of your employees using this CLI application built entirely using Node.",
    link: "https://github.com/axe714/Employee-Tracker",
  },
  {
    name: "Weather Tracker",
    image: WeatherTrackerImg,
    description:
      "View the 7-day weather forecast of the city of your choosing.",
    link: "https://github.com/axe714/Weather-Tracker",
  },
];

const projectsVariant = {
  hidden: {
    opacity: 0,
    x: -100,
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
};

const works = projects.map((work) => (
  <motion.div
    className="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    initial={projectsVariant.hidden}
    whileInView={projectsVariant.show}
    viewport={{once:true}}
  >
    <a href={work.link}>
      <img className="min-w-md rounded-t-lg" src={work.image} alt={work.name} />
    </a>
    <div className="p-5">
      <a href={work.link}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {work.name}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {work.description}
      </p>
      <a
        href={work.link}
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
));

export default function Projects() {
  return (
    <div id="projects-container" className="mt-16 md:mt-24 md:mx-16">
      <div className="flex justify-center text-center">
        <h2
          id="projects-header"
          className="mb-16 font-['Manrope'] font-bold text-blue-900 leading-tight"
        >
          <motion.span className="text-2xl">My Recent Work</motion.span>
        </h2>
      </div>

      <div className="grid grid-row place-items-center mx-8 gap-y-4 gap-x-4 md:grid-cols-3 md:mx-2">
        {works}
      </div>
    </div>
  );
}
