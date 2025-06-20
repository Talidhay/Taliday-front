import React from "react";

const AboutJournalJoy = () => {
  return (
    <section id="about-journal-joy" className="pt-10 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h3
            className="text-2xl text-center font-bold mb-4"
            style={{ color: "#8F2901" }}
          >
            Journal of Joy
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
            Take a deeper look into our journey. The Journal of Joy is a
            collection of Talidhay’s milestones, stories, and heartfelt
            moments—from our humble beginnings to the memories we continue to
            create. Download and relive the timeline that weaves our purpose
            into every step.
          </p>
        </div>
        <div className="flex flex-col items-center mb-16 hover:-translate-y-2 transition duration-300">
          <a
            href="/files/Talidhay_Journal_of_Joy.pdf"
            download
            className="inline-flex items-center bg-gradient-to-r from-[#4B1E06] via-[#8F2901] to-[#4B1E06] text-white px-8 py-4 rounded-4xl font-bold text-lg hover:from-[#B05C24] hover:via-[#8F2901] hover:to-[#B05C24] transition duration-300 shadow-lg hover:shadow-xl"
          >
            Download Journal of Joy [2024 - Present] (PDF)
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
    </section>
  );
};

export default AboutJournalJoy;
