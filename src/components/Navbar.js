import React from 'react'
import { useRef, useState } from 'react'

export default function Navbar() {
  const menuRef = useRef(null)
  const mobileMenu = menuRef.current

  const [isActive, setActive] = useState("false")

  const mobileBtnHandler = () => {
    setActive(!isActive)
  };

  const lgNav = `font-['Manrope'] text-lg py-5 px-12 text-gray-700 transform hover:scale-110 hover:text-blue-500 transition-all`
  const smNav = `font-['Manrope'] text-md md:text-lg block py-2 px-4 hover:bg-sky-100 hover:text-blue-900 transition-all`

  return (
    <nav className="bg-white">
        <div className="mx-auto px-3">
            <div className="flex items-center justify-between">
                <div className="flex space-x-3">
                    <a id="navbar-logo" href="#" className="flex items-center py-5 px-2 text-gray-800 md:pr-12">
                        <span className="font-['Pacifico'] text-3xl font-black hover:text-blue-900 transition-all">Allec Arzadon</span>
                    </a>
                </div>

                {/* large screen nav */}
                <div id="main-navbar" className="hidden space-x-5 lg:flex">
                    <a href="#" id="navbar-1" className={lgNav}>About Me</a>
                    <a href="#" id="navbar-2" className={lgNav}>Skills</a>
                    <a href="#" id="navbar-3" className={lgNav}>Projects</a>
                    <a href="#" id="navbar-4" className={lgNav}>Resume</a>
                    <a href="#" id="navbar-5" className={lgNav}>Contact Me</a>
                </div>

                {/* mobile button */}
                <div className="flex items-center lg:hidden">
                    <button onClick={mobileBtnHandler} className="mobile-menu-button">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>  
            </div>
        </div>

        {/* mobile nav */}
        <div ref={mobileMenu} className={isActive ? "hidden lg:hidden" : "lg:hidden"}>
            <a href="#" className={smNav}>About Me</a>
            <a href="#" className={smNav}>Skills</a>
            <a href="#" className={smNav}>Projects</a>
            <a href="#" className={smNav}>Resume</a>
            <a href="#" className={smNav}>Contact Me</a>
        </div>
    </nav>
  )
}
