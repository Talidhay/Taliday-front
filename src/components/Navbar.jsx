import React, { useState } from "react";
import { Link } from "react-router-dom"; // Add this import

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#8F2901] via-[#B05C24] to-[#8F2901] backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {" "}
          {/* Increased height */}
          {/* Left side nav items */}
          <div className="hidden md:flex space-x-10">
            {" "}
            {/* More spacing */}
            <a
              href="/aboutpage"
              className="text-white hover:text-indigo-200 px-4 py-3 rounded-md text-base font-medium transition duration-300 hover:bg-white/10"
            >
              ABOUT
            </a>
            <a
              href="/events"
              className="text-white hover:text-indigo-200 px-4 py-3 rounded-md text-base font-medium transition duration-300 hover:bg-white/10"
            >
              EVENTS
            </a>
          </div>
          {/* Center logo */}
          <div className="flex-shrink-0 flex justify-center w-1/3">
            <Link to="/" className="flex items-center justify-center w-full">
              <img
                src="/images/1.png"
                alt="Talidhay Logo"
                className="h-20 w-auto" // Increased logo size
              />
            </Link>
          </div>
          {/* Right side nav items */}
          <div className="hidden md:flex space-x-10">
            {" "}
            {/* More spacing */}
            <a
              href="#team"
              className="text-white hover:text-indigo-200 px-4 py-3 rounded-md text-base font-medium transition duration-300 hover:bg-white/10"
            >
              OUR TEAM
            </a>
            <a
              href="#register"
              className="text-white hover:text-indigo-200 px-4 py-3 rounded-md text-base font-medium transition duration-300 hover:bg-white/10"
            >
              REGISTER
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-indigo-200 focus:outline-none focus:text-indigo-200"
            >
              <svg
                className="h-8 w-8" // Larger icon
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#8F2901] via-[#B05C24] to-[#8F2901] backdrop-blur-lg border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="text-white hover:text-indigo-200 block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </a>
            <a
              href="#events"
              className="text-white hover:text-indigo-200 block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              EVENTS
            </a>
            <a
              href="#team"
              className="text-white hover:text-indigo-200 block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              OUR TEAM
            </a>
            <a
              href="#register"
              className="text-white hover:text-indigo-200 block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              REGISTER
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
