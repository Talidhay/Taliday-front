import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16"
      style={{
        backgroundImage: `url('/images/image 34.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(36, 8, 1, 0.61)" }}
      />

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center animate-fade-in">

          <h1 className="protest-riot-regular text-6xl sm:text-7xl lg:text-9xl font-bold text-white leading-none mb-4">
            TALIDHAY
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/95 max-w-2xl leading-snug mb-8">
            Spreading Joy, One Moment at a Time.
          </p>

          <Link
            to="/donate"
            aria-label="Donate to Talidhay"
            className="
              bg-[#FAD374]
              text-[#8F2901]
              px-8 py-3
              rounded-full
              font-bold text-lg
              shadow-lg
              hover:bg-[#f8c94d]
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            DONATE
          </Link>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-5 h-5 text-white/60"
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