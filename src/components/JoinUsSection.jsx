import React from "react";
import { Link } from "react-router-dom";

const JoinUsSection = () => {
  return (
    <section
      id="register"
      className="py-20"
      style={{ backgroundColor: "#FFF9E3" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6"
              style={{ color: "#8F2901" }}
            >
              Be Part of the Movement
            </h2>
            <p className="text-xl leading-relaxed mb-8">
              Whether you're ready to lend a hand, share your skills, or simply
              want to grow with a purpose-driven community—there’s a place for
              you here at Talidhay. Sign up as a member or volunteer and help us
              continue spreading joy, one moment at a time.
            </p>
            <div>
              <Link
                to="/joinuspage"
                className="inline-block bg-gradient-to-r from-[#4B1E06] via-[#8F2901] to-[#4B1E06] text-white px-10 py-4 rounded-4xl font-bold text-lg hover:from-[#B05C24] hover:via-[#8F2901] hover:to-[#B05C24] transform hover:-translate-y-1 transition duration-300 shadow-lg hover:shadow-xl w-70 max-w-full"
              >
                <span className="block w-full text-center">Join Us Today</span>
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              src="/images/image 27.jpg"
              alt="Talidhay Community"
              className="w-full h-96 object-cover rounded-3xl border border-white/20 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
