import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-white">
    <div className="mx-auto px-3">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <a id="navbar-logo" href="#" className="flex items-center py-5 px-2 text-gray-800 md:pr-12">
                <span className="font-['Pacifico'] text-2xl font-black hover:text-blue-900 transition-all">Allec Arzadon</span>
                </a>
            </div>
            {/* large screen nav */}
            <div id="main-navbar" className="hidden md:flex">
              <a href="#" id="navbar-1" className="font-['Manrope'] py-5 px-12 text-gray-700 transform hover:scale-110 hover:text-blue-500 transition-all">About Me</a>
              <a href="#" id="navbar-2" className="font-['Manrope'] py-5 px-12 text-gray-700 transform hover:scale-110 hover:text-blue-500 transition-all">Skills</a>
              <a href="#" id="navbar-3" className="font-['Manrope'] py-5 px-12 text-gray-700 transform hover:scale-110 hover:text-blue-500 transition-all">Projects</a>
              <a href="#" id="navbar-4" className="font-['Manrope'] py-5 px-12 text-gray-700 transform hover:scale-110 hover:text-blue-500 transition-all">Resume</a>
              <a href="#" id="navbar-5" className="font-['Manrope'] py-5 px-12 text-gray-700 transform hover:scale-110 hover:text-blue-500 transition-all">Contact Me</a>
            </div>

        {/* mobile button */}
        <div className="inline-flex items-center md:hidden">
            <button className="mobile-menu-button">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
        </div>  
        </div>
    </div>
    
    {/* mobile nav */}
    <div className="bg-white mobile-menu  hidden md:hidden">
        <a href="#" className="font-['Manrope'] block py-2 px-4 text-sm hover:bg-sky-100 hover:text-blue-900 transition-all">About Me</a>
        <a href="#" className="font-['Manrope'] block py-2 px-4 text-sm hover:bg-sky-100 hover:text-blue-900 transition-all">Skills</a>
        <a href="#" className="font-['Manrope'] block py-2 px-4 text-sm hover:bg-sky-100 hover:text-blue-900 transition-all">Projects</a>
        <a href="#" className="font-['Manrope'] block py-2 px-4 text-sm hover:bg-sky-100 hover:text-blue-900 transition-all">Resume</a>
        <a href="#" className="font-['Manrope'] block py-2 px-4 text-sm hover:bg-sky-100 hover:text-blue-900 transition-all">Contact Me</a>
      </div>
    </nav>
  )
}
