import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const EventsNextPrev = () => {
  return (
    <section id="EventsNextPrev" className="pb-5 bg-white">
      <div className="flex justify-center items-center gap-4 mb-8">
        {/* Previous Button */}
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#8F2901] text-white shadow-md hover:bg-[#B05C24] transition"
          aria-label="Previous"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {/* Page Numbers */}
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className="w-10 h-10 flex items-center justify-center rounded-full font-bold text-[#8F2901] bg-[#FFD966]/50 hover:bg-[#FAD374] transition"
            >
              {num}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#8F2901] text-white shadow-md hover:bg-[#B05C24] transition"
          aria-label="Next"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
};

export default EventsNextPrev;
