import React from "react";

const AboutLogoMeaning = () => {
  return (
    <section id="about-logo-meaning" className="pt-10 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h3
            className="text-2xl text-center font-bold mb-4"
            style={{ color: "#8F2901" }}
          >
            Meaning in Every Detail
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-16">
          <div className="flex flex-col items-center">
            <a
              href="/files/Talidhay_Profile.pdf"
              download
              className="inline-flex items-center bg-gradient-to-r from-[#8F2901] via-[#B05C24] to-[#8F2901] text-white px-8 py-4 rounded-4xl font-bold text-lg mb-4 md:mb-0 hover:from-[#B05C24] hover:via-[#8F2901] hover:to-[#B05C24] transition duration-300 shadow-lg hover:shadow-xl"
            >
              Download Logo Meaning (PDF)
              <svg
                className="ml-2 w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="/files/Talidhay_Profile.pdf"
              download
              className="inline-flex items-center bg-gradient-to-r from-[#8F2901] via-[#B05C24] to-[#8F2901] text-white px-8 py-4 rounded-4xl font-bold text-lg hover:from-[#B05C24] hover:via-[#8F2901] hover:to-[#B05C24] transition duration-300 shadow-lg hover:shadow-xl"
            >
              Download Talidhay Branding (PDF)
              <svg
                className="ml-2 w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLogoMeaning;
