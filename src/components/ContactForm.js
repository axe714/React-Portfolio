import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Resume",
    link: "#",
  },
  {
    name: "Contact Me",
    link: "/contactme",
  },
];

const contactVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const childrenVariants = {
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
};

export default function ContactForm() {
  const [msgSent, setMsgSent] = useState(false);

  const emailHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_4zxrppg", e.target, "iI99-_hxfIAExIwiM")
      .then(
        (result) => {
          if (result.text === "OK") {
            setMsgSent(true);
          }
        },
        (error) => {
          if (error) {
            console.log("Something went wrong. Please try again!");
          }
        }
      );

    e.target.reset();
  };

  return (
    <>
      <Navbar navItems={navItems} />
      <motion.div
        id="contact-me-container"  
        className="min-h-xl pt-10 pb-36 lg:min-h-screen bg-white flex flex-col justify-center"
        variants={contactVariants}
        initial="hidden"
        whileInView="show"
      >
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-blue-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <motion.div variants={childrenVariants}>
                <h1 className="text-3xl font-extrabold">Contact</h1>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam nec auctor lectus. Nulla mattis tempus tellus, vel
                  pulvinar risus efficitur at. Sed condimentum nunc vel nisl
                  luctus, sit amet blandit.
                </p>
                <hr className="mt-3 border-gray-300" />
              </motion.div>
              <div className="divide-y divide-gray-200">
                <form
                  onSubmit={emailHandler}
                  className="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 -mb-8"
                >
                  <motion.label
                    variants={childrenVariants}
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Name <span className="text-red-500">*</span>
                  </motion.label>
                  <input
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />

                  <motion.label
                    variants={childrenVariants}
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Email <span className="text-red-500">*</span>
                  </motion.label>
                  <input
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />

                  <motion.label
                    variants={childrenVariants}
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Message <span className="text-red-500">*</span>
                  </motion.label>
                  <textarea
                    required
                    className="resize-y py-3 px-4 border focus:outline-none rounded-md w-full bg-gray-200"
                    placeholder="Your message..."
                    name="message"
                  ></textarea>

                  <div className="flex justify-items-center items-end justify-end">
                    <div className="pl-4 pr-2 pb-2 lg:mr-20">
                      <motion.span
                        className="text-red-800 font-medium"
                        animate={msgSent ? "show" : "hidden"}
                        variants={childrenVariants}
                      >
                        Thank you for the message! I will respond back as soon
                        as I can.
                      </motion.span>
                    </div>
                    <div className="pb-3 pr-3">
                      <motion.button
                        variants={childrenVariants}
                        className="bg-blue-500 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded"
                        type={msgSent ? null : "submit"}
                      >
                        {msgSent ? null : "Send"}
                        <a href={msgSent ? "/" : null}>
                          {msgSent ? "Home" : null}
                        </a>
                      </motion.button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
