import React from "react";
import EventsView from "./EventsView";
import { Link } from "react-router-dom";

const EventsGrids = () => {
  return (
    <section id="about-objectives" className="pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two column cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <Link
            to="/eventsview"
            className="bg-[#FAD374] rounded-2xl shadow-lg p-6 pb-4 flex flex-col items-center hover:-translate-y-2 transition duration-300 hover:shadow-xl"
          >
            <img
              src="/images/image 27.jpg"
              alt="Event"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold text-[#8F2901] mb-2 text-center">
              Art From The Heart
            </h3>
            <p className="text-sm mb-1 text-center">March 15, 2025</p>
          </Link>
          <Link
            to="/eventsview"
            className="bg-[#FAD374] rounded-2xl shadow-lg p-6 pb-4 flex flex-col items-center hover:-translate-y-2 transition duration-300 hover:shadow-xl"
          >
            <img
              src="/images/image 28.jpg"
              alt="Event"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold text-[#8F2901] mb-2 text-center">
              Bata! Bata! Laro Tayo!
            </h3>
            <p className="text-sm mb-1 text-center">June 14, 2025</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsGrids;
