import React from "react";

export default function AboutMe() {
  return (
    <div className="z-0 bg-blue-900 pt-24 pb-64 sm:pb-80 px-8 flex-col">
      <div className="flex justify-center text-center">
        <h2 className="text-4xl font-bold font-['Poppins'] text-white leading-tight">
          <span id="about-me-name" className="text-4xl">
            Hi, I'm Allec. Nice to meet you.
          </span>
        </h2>
      </div>
      <span
        id="about-me-text"
     className="flex justify-center font-['Poppins'] text-xl text-black"
      >
        <p className="pt-4 lg:px-64 text-center font-bold text-white leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          molestias, consectetur odio fugiat hic quasi nostrum facilis rerum
          velit ut!
        </p>
      </span>
    </div>
  );
}
