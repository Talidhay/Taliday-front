import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16"
      style={{
        backgroundImage: `url('/images/image 34.jpg')`, // Change to your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(51,10,0,0.6)" }}
      ></div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <h1 className="protest-riot-regular text-6xl sm:text-8xl lg:text-9xl font-bold text-white leading-tight mb-6">
            TALIDHAY
          </h1>
          <p className="font-medium text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl">
            Whether it's through volunteering, sharing your skills, or
            contributing a small donation—every bit of support helps us bring
            more light and laughter to the lives we touch.
          </p>

          {/* Card with text left and button right */}
          <div className="w-full rounded-[3rem] max-w-xl bg-[#46522E]/80 rounded-4xl shadow-lg border-2 border-gray-300 flex flex-col sm:flex-row items-center justify-between px-4 py-3 gap-4 mb-4">
            <span className="ps-4 text-gray-100 text-lg font-medium text-center sm:text-left">
              Your kindness plants seeds of joy.
            </span>
            <button
              className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 px-8 py-4 rounded-4xl font-bold text-lg hover:from-yellow-500 hover:to-yellow-400 transform hover:-translate-y-1 transition duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
              style={{ color: "#8F2901" }}
            >
              DONATE
            </button>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
