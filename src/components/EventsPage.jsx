import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import EventsGrids from "./EventsGrids";
import EventsNextPrev from "./EventsNextPrev";

const EventsPage = () => {
  return (
    <section id="eventspage" className="pt-40 bg-white">
      <div className="text-center mb-8 px-4 sm:px-0">
        <h2
          className="text-2xl sm:text-3xl font-bold mb-4"
          style={{ color: "#8F2901" }}
        >
          <span>Moments that Move Us</span>
        </h2>
        <p className="text-base leading-relaxed max-w-2xl mx-auto">
          Every Talidhay event, program, and activity is crafted to uplift,
          connect, and inspire. From creative workshops to meaningful
          collaborations and community-led initiatives, each moment we share is
          a celebration of joy, compassion, and collective growth.
        </p>
      </div>
      <div
        className="mb-20 w-full max-w-md rounded-[3rem] shadow-md border border-[#8F2901] flex flex-row items-center justify-between px-2 sm:px-3 py-2 gap-2 mx-auto"
        style={{ boxSizing: "border-box" }}
      >
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow ps-3 text-lg font-medium text-left outline-none min-w-0"
          style={{ opacity: 0.5 }}
        />
        <button
          className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 px-4 py-3 rounded-full font-bold text-sm hover:from-yellow-500 hover:to-yellow-400 transform hover:-translate-y-1 transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
          style={{ color: "#8F2901" }}
          aria-label="Search"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <EventsGrids />
      <EventsNextPrev />
    </section>
  );
};

export default EventsPage;
