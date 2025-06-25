import React from "react";

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

            {/* <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-2xl backdrop-blur-md">
                  🤝
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Connect</h4>
                  <p className="text-indigo-100">
                    Network with like-minded individuals
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-2xl backdrop-blur-md">
                  📚
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Learn</h4>
                  <p className="text-indigo-100">
                    Access exclusive workshops and resources
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-2xl backdrop-blur-md">
                  🌟
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Impact</h4>
                  <p className="text-indigo-100">
                    Make a real difference in your community
                  </p>
                </div>
              </div>
            </div> */}

            <div>
              <button className="bg-gradient-to-r from-[#4B1E06] via-[#8F2901] to-[#4B1E06] text-white px-10 py-4 rounded-4xl font-bold text-lg hover:from-[#B05C24] hover:via-[#8F2901] hover:to-[#B05C24] transform hover:-translate-y-1 transition duration-300 shadow-lg hover:shadow-xl w-70 max-w-full">
                Join Us Today
              </button>
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
