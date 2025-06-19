import React from "react";

const AboutObjectives = () => {
  return (
    <section id="about-objectives" className="pt-10 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Objectives Header */}
        <div className="mb-10">
          <h3
            className="text-2xl text-center font-bold mb-4"
            style={{ color: "#8F2901" }}
          >
            Our Objectives
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
            As an organization committed to spreading happiness and building
            lasting camaraderie, our objectives reflect our passion for creating
            a joyful and connected community through meaningful service and
            shared experiences.
          </p>
        </div>

        {/* Two column cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-[#FAD374] rounded-2xl shadow-lg p-8 flex flex-col items-center">
            <h4 className="text-xl font-bold mb-3 text-[#8F2901] text-center">
              Create a Culture of Joy
            </h4>
            <p className="text-gray-700 text-center">
              We aim to inspire a positive cultural shift by making joy a shared
              value within the community. Through uplifting programs and
              accessible resources, we help individuals cultivate happiness in
              everyday life—fostering an environment where joy is not only
              experienced but also generously shared.
            </p>
          </div>
          <div className="bg-[#FAD374] rounded-2xl shadow-lg p-8 flex flex-col items-center">
            <h4 className="text-xl font-bold mb-3 text-[#8F2901] text-center">
              Leave a Legacy of Joy
            </h4>
            <p className="text-gray-700 text-center">
              We strive to create memorable, joy-filled experiences through
              events, activities, and initiatives that bring people together.
              These moments are designed to spark happiness, strengthen
              relationships, and leave a lasting, joyful imprint on everyone
              involved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutObjectives;
