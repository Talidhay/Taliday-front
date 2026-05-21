import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import EventsViewDescription from "./EventsViewDescription";
import EventsViewPromotions from "./EventsViewPromotions";
import EventsViewGallery from "./EventsViewGallery";
import EventsViewReport from "./EventsViewReport";
import EventsViewOrganizers from "./EventsViewOrganizers";
import { events } from "./eventsData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const EventsView = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState("Description");

  const tabs = ["Description", "Promotions", "Gallery", "Report", "Organizers"];

  const currentIndex = events.findIndex((e) => e.slug === slug);
  const event = events[currentIndex] ?? events[0];

  const prevEvent = currentIndex > 0 ? events[currentIndex - 1] : null;
  const nextEvent =
    currentIndex < events.length - 1 ? events[currentIndex + 1] : null;

  return (
    <section id="eventsview" className="pt-40 bg-white">
      <div className="flex items-center justify-between max-w-3xl mx-auto mb-8 px-4">
        {/* Previous Button */}
        <button
          className={`w-10 h-10 flex items-center justify-center rounded-full text-white shadow-md transition ${
            prevEvent
              ? "bg-[#8F2901] hover:bg-[#B05C24] cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          onClick={() => prevEvent && navigate(`/eventsview/${prevEvent.slug}`)}
          disabled={!prevEvent}
          aria-label="Previous"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {/* Centered Text */}
        <div className="flex-1 text-center">
          {event.date && (
            <p className="leading-relaxed pb-3">
              <i>{event.date}</i>
            </p>
          )}
          <h2
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ color: "#8F2901" }}
          >
            {event.title}
          </h2>
        </div>

        {/* Next Button */}
        <button
          className={`w-10 h-10 flex items-center justify-center rounded-full text-white shadow-md transition ${
            nextEvent
              ? "bg-[#8F2901] hover:bg-[#B05C24] cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          onClick={() => nextEvent && navigate(`/eventsview/${nextEvent.slug}`)}
          disabled={!nextEvent}
          aria-label="Next"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      {/* Tags Row */}
      <div className="flex flex-wrap justify-center gap-3 mb-6 px-4">
        {event.tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 rounded-full bg-[#B05C24] text-white font-semibold text-sm shadow"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Event Cover Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-15">
        <img
          src={event.coverImage}
          alt={event.title}
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
          {activeTab === "Description" && (
            <EventsViewDescription event={event} />
          )}
          {activeTab === "Promotions" && <EventsViewPromotions event={event} />}
          {activeTab === "Gallery" && (
            <EventsViewGallery images={event.gallery} />
          )}
          {activeTab === "Report" && <EventsViewReport event={event} />}
          {activeTab === "Organizers" && <EventsViewOrganizers event={event} />}
        </div>
      </div>
    </section>
  );
};

export default EventsView;
