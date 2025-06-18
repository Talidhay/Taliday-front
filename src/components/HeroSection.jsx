import React from 'react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 pt-16"
    >
      {/* Background overlay with pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">Talidhay</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl">
              Empowering communities through innovation, collaboration, and sustainable development.
              Join us in creating a better future for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-pink-600 transform hover:-translate-y-1 transition duration-300 shadow-lg hover:shadow-xl">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transform hover:-translate-y-1 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              {/* Main image container with sample background */}
              <div 
                className="w-full h-96 lg:h-[500px] rounded-3xl shadow-2xl transform hover:scale-105 transition duration-300 bg-cover bg-center relative overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(99, 102, 241, 0.8), rgba(168, 85, 247, 0.8)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'%3E%3Cpath fill='%23667eea' d='M0 0h1000v1000H0z'/%3E%3Cpath fill='%23764ba2' d='M0 0h500v500H0z'/%3E%3Cpath fill='%235a67d8' d='M500 500h500v500H500z'/%3E%3Cpath fill='%23ed8936' d='M250 250h250v250H250z'/%3E%3Cpath fill='%23f56565' d='M750 750h250v250H750z'/%3E%3C/svg%3E")`
                }}
              >
                {/* Content overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="mb-4">
                      <svg className="w-16 h-16 mx-auto mb-4 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Community in Action</h3>
                    <p className="text-lg opacity-90">Building stronger communities together</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-yellow-400/20 rounded-full"></div>
                <div className="absolute top-1/2 left-4 w-6 h-6 bg-pink-400/20 rounded-full"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
