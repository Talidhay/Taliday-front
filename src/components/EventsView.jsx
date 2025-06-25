import React from "react";
import EventsViewDescription from "./EventsViewDescription";
import EventsViewPromotions from "./EventsViewPromotions";
import EventsViewGallery from "./EventsViewGallery";
import EventsViewReport from "./EventsViewReport";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const EventsView = () => {
  const [activeTab, setActiveTab] = React.useState("Description");

  const tabs = ["Description", "Promotions", "Gallery", "Report", "Organizers"];

  return (
    <section id="eventsview" className="pt-40 bg-white">
      <div className="flex items-center justify-between max-w-3xl mx-auto mb-8 px-4">
        {/* Previous Button (left) */}
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#8F2901] text-white shadow-md hover:bg-[#B05C24] transition"
          aria-label="Previous"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {/* Centered Text */}
        <div className="flex-1 text-center">
          <p className="leading-relaxed pb-3">
            <i>February 14, 2025</i>
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ color: "#8F2901" }}
          >
            Art From The Heart
          </h2>
        </div>

        {/* Next Button (right) */}
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#8F2901] text-white shadow-md hover:bg-[#B05C24] transition"
          aria-label="Next"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      {/* Chips Row */}
      <div className="flex justify-center gap-4 mb-6">
        <span className="px-4 py-2 rounded-full bg-[#B05C24] text-white font-semibold text-sm shadow">
          #ArtFromTheheart
        </span>
        <span className="px-4 py-2 rounded-full bg-[#B05C24] text-white font-semibold text-sm shadow">
          #ChalkPaint
        </span>
        <span className="px-4 py-2 rounded-full bg-[#B05C24] text-white font-semibold text-sm shadow">
          #HaveFunDay
        </span>
      </div>
      {/* Event Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-15">
        <img
          src="/images/image 33.jpg"
          alt="Event"
          className="w-full h-64 object-cover rounded-2xl shadow-md"
        />
      </div>
      {/* Event Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-6 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-base sm:text-lg font-bold px-3 py-2 rounded-md ${
                activeTab === tab
                  ? "text-[#8F2901] underline decoration-[#8F2901] decoration-4 underline-offset-8"
                  : "text-gray-500 hover:text-[#8F2901] hover:bg-[#FAD374]/20"
              } transition`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        <div className="overflow-hidden">
          {activeTab === "Description" && <EventsViewDescription />}
          {activeTab === "Promotions" && <EventsViewPromotions />}
          {activeTab === "Gallery" && <EventsViewGallery />}
          {activeTab === "Report" && <EventsViewReport />}
          {activeTab === "Organizers" && (
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              Organizers content goes here.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsView;
