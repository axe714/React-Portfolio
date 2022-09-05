import React from "react";
import linkedInLogo from "../images/icons/linkedinlogo.svg"
import githubLogo from "../images/icons/github.svg"
import portfolioLogo from "../images/icons/portfolio.svg"

const footerIcons = [
  {
    name: "Portfolio",
    image: portfolioLogo,
    link: "https://docs.google.com/document/d/1GlX9IWj3oIDwtuRV4WDJiATRKh3HPzcI/edit?usp=sharing&ouid=117977372573934894868&rtpof=true&sd=true"
  },
  {
    name: "Github",
    image: githubLogo,
    link: "https://github.com/axe714"
  },
  {
    name: "Linkedin",
    image: linkedInLogo,
    link: "https://www.linkedin.com/in/allec-arzadon-222b9a249/"
  }
]

const footerItems = footerIcons.map((footer, i) => (
  <a
  href={footer.link}
  key={`Footer item ${i}`}
  className="text-gray-500 hover:text-black dark:hover:text-white"
>
  <img src={footer.image} className="w-5 h-5" alt={`footer logo ${i}`}/>
  <span className="sr-only">{footer.name + " account"}</span>
</a>
))

export default function Footer() {
  return (
    <footer className="p-4 bg-white sm:p-6">
      <hr className="my-6 border-blue-700 sm:mx-auto dark:border-blue-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-black sm:text-center">
          Allec Arzadon © 2022. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          {footerItems}
        </div>
      </div>
    </footer>
  );
}
