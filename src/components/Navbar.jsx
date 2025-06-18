import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-indigo-600 to-purple-600 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side nav items */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-indigo-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-white/10">
              About
            </a>
            <a href="#events" className="text-white hover:text-indigo-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-white/10">
              Events
            </a>
          </div>
          
          {/* Center logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-white text-2xl font-bold tracking-wider hover:text-indigo-200 transition duration-300">
              Talidhay
            </a>
          </div>
          
          {/* Right side nav items */}
          <div className="hidden md:flex space-x-8">
            <a href="#team" className="text-white hover:text-indigo-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-white/10">
              Our Team
            </a>
            <a href="#register" className="text-white hover:text-indigo-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-white/10">
              Register
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-indigo-200 focus:outline-none focus:text-indigo-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-indigo-600 to-purple-600 border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="text-white hover:text-indigo-200 block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#events" className="text-white hover:text-indigo-200 block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
              Events
            </a>
            <a href="#team" className="text-white hover:text-indigo-200 block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
              Our Team
            </a>
            <a href="#register" className="text-white hover:text-indigo-200 block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
