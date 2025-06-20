import React from "react";

const AboutServe = () => {
  return (
    <section id="about-serve" className="pt-10 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Objectives Header */}
        <div className="mb-10">
          <h3
            className="text-2xl text-center font-bold mb-4"
            style={{ color: "#8F2901" }}
          >
            Who We Serve
          </h3>
        </div>
        {/* Two column cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left column: Image or illustration */}
          <div className="flex justify-center">
            <img
              src="/images/image 27.jpg"
              alt="About Talidhay"
              className="w-full max-w-md rounded-3xl shadow-lg object-cover"
            />
          </div>
          {/* Right column: Text */}
          <div>
            <p className="text-xl text-gray-600 leading-relaxed mb-6 text-justify">
              Our organization primarily focuses on uplifting individuals and
              communities in <b>Barangay Amihan, Quezon City,</b> with plans to
              extend our reach to neighboring areas and eventually the entire
              Philippines. We aim to serve a wide range of demographics,
              including children, youth, adults, senior citizens and also nature
              and animals. Our programs and activities are designed to foster
              inclusivity, promote joy, and provide opportunities for meaningful
              connections for all members of the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServe;
