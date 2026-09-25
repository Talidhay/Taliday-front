import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import EventsGrids from "./EventsGrids";

const EventsPage = () => {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSearch = () => setSubmitted(query.trim());

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <section id="eventspage" className="pt-40 bg-white">
      <div className="text-center mb-8 px-4 sm:px-0">
        <h2
          className="text-4xl sm:text-5xl font-bold mb-6"
          style={{ color: "#8F2901" }}
        >
          <span>Moments That Move Us</span>
        </h2>
        <p className="text-base leading-relaxed max-w-5xl mx-auto">
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
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow ps-3 text-lg font-medium text-left outline-none min-w-0"
        />
        <button
          onClick={handleSearch}
          className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 px-4 py-3 rounded-full font-bold text-sm hover:from-yellow-500 hover:to-yellow-400 transform hover:-translate-y-1 transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
          style={{ color: "#8F2901" }}
          aria-label="Search"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <EventsGrids query={submitted} />
    </section>
  );
};

export default EventsPage;
