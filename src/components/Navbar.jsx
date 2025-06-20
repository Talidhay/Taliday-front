import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#4B1E06] via-[#8F2901] to-[#4B1E06] backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Left side nav items */}
          <div className="hidden md:flex space-x-10">
            <Link
              to="/aboutpage"
              className="text-white hover:text-[#FFD966] px-4 py-3 rounded-md text-base font-medium transition duration-300 hover:bg-[#8F2901]/30"
            >
              ABOUT
            </Link>
            <Link
              to="/eventspage"
              className="text-white hover:text-[#FFD966] px-4 py-3 rounded-md text-base font-medium transition duration-300 hover:bg-[#8F2901]/30"
            >
              EVENTS
            </Link>
          </div>
          {/* Center logo */}
          <div className="flex-shrink-0 flex justify-center w-1/3">
            <Link to="/" className="flex items-center justify-center w-full">
              <img
                src="/images/1.png"
                alt="Talidhay Logo"
                className="h-20 w-auto"
              />
            </Link>
          </div>
          {/* Right side nav items */}
          <div className="hidden md:flex space-x-10">
            <a
              href="#team"
              className="text-white hover:text-[#FFD966] px-4 py-3 rounded-md text-base font-medium transition duration-300 hover:bg-[#8F2901]/30"
            >
              OUR TEAM
            </a>
            <a
              href="#register"
              className="text-white hover:text-[#FFD966] px-4 py-3 rounded-md text-base font-medium transition duration-300 hover:bg-[#8F2901]/30"
            >
              REGISTER
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#FFD966] focus:outline-none focus:text-[#FFD966]"
            >
              <svg
                className="h-8 w-8"
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
        <div className="md:hidden bg-gradient-to-r from-[#4B1E06] via-[#8F2901] to-[#4B1E06] backdrop-blur-lg border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/aboutpage"
              className="text-white hover:text-[#FFD966] block px-3 py-2 rounded-md text-base font-medium hover:bg-[#8F2901]/30"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              to="/eventspage"
              className="text-white hover:text-[#FFD966] block px-3 py-2 rounded-md text-base font-medium hover:bg-[#8F2901]/30"
              onClick={() => setIsMenuOpen(false)}
            >
              EVENTS
            </Link>
            <a
              href="#team"
              className="text-white hover:text-[#FFD966] block px-3 py-2 rounded-md text-base font-medium hover:bg-[#8F2901]/30"
              onClick={() => setIsMenuOpen(false)}
            >
              OUR TEAM
            </a>
            <a
              href="#register"
              className="text-white hover:text-[#FFD966] block px-3 py-2 rounded-md text-base font-medium hover:bg-[#8F2901]/30"
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
