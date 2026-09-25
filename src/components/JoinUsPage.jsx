import React from "react";

const JoinUsPage = () => {
  return (
    <section id="joinuspage" className="pt-40 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Objectives Header */}
        <div className="text-center mb-8 px-4 sm:px-0">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ color: "#8F2901" }}
          >
            <span>Lend a Hand, Leave a Mark</span>
          </h2>
          <p className="text-base leading-relaxed max-w-5xl mx-auto">
            Your time, voice, and presence matter. By registering with Talidhay,
            you become part of a growing community committed to compassion,
            creativity, and collective action. Whether you choose to be a full
            member or join us as a volunteer, your contribution helps us weave
            stories of impact—one thread, one act, one story at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <a
            href="https://forms.gle/XtGZVesn4QcTcA8m9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Membership - Open Google Sheet"
            className="bg-[#FAD374] rounded-2xl shadow-lg p-6 pb-4 flex flex-col items-center hover:-translate-y-2 transition duration-300 hover:shadow-xl"
          >
            <img
              src="/images/image 27.jpg"
              alt="Event"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold text-[#8F2901] mb-2 text-center">
              Membership
            </h3>
          </a>

          <a
            href="https://forms.gle/LUutAmvTuRjyYvU68"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Volunteer - Open Google Sheet"
            className="bg-[#FAD374] rounded-2xl shadow-lg p-6 pb-4 flex flex-col items-center hover:-translate-y-2 transition duration-300 hover:shadow-xl"
          >
            <img
              src="/images/image 27.jpg"
              alt="Event"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold text-[#8F2901] mb-2 text-center">
              Volunteer
            </h3>
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinUsPage;
