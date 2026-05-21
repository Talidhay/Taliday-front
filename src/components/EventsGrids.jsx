import React, { useState } from "react";
import { Link } from "react-router-dom";
import { events } from "./eventsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const EVENTS_PER_PAGE = 2;

const EventsGrids = ({ query = "" }) => {
  const [page, setPage] = useState(0);

  const filtered = query
    ? events.filter(
        (e) =>
          e.title.toLowerCase().includes(query.toLowerCase()) ||
          e.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())),
      )
    : events;

  // Reset to page 0 whenever the filtered list changes length
  React.useEffect(() => {
    setPage(0);
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / EVENTS_PER_PAGE));
  const start = page * EVENTS_PER_PAGE;
  const visibleEvents = filtered.slice(start, start + EVENTS_PER_PAGE);

  return (
    <section id="about-objectives" className="pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* No results message */}
        {filtered.length === 0 && (
          <p className="text-center text-gray-400 italic mb-16">
            No events found for &ldquo;{query}&rdquo;.
          </p>
        )}

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {visibleEvents.map((event) => (
            <Link
              key={event.slug}
              to={`/eventsview/${event.slug}`}
              className="bg-[#FAD374] rounded-2xl shadow-lg p-6 pb-4 flex flex-col items-center hover:-translate-y-2 transition duration-300 hover:shadow-xl"
            >
              <img
                src={event.image ?? event.coverImage}
                alt={event.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold text-[#8F2901] mb-2 text-center">
                {event.title}
              </h3>
              {event.date && (
                <p className="text-sm mb-1 text-center">{event.date}</p>
              )}
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 pb-8">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className={`w-10 h-10 flex items-center justify-center rounded-full text-white shadow-md transition ${
              page === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#8F2901] hover:bg-[#B05C24]"
            }`}
            aria-label="Previous page"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-10 h-10 flex items-center justify-center rounded-full font-bold transition ${
                  page === i
                    ? "bg-[#8F2901] text-white"
                    : "text-[#8F2901] bg-[#FFD966]/50 hover:bg-[#FAD374]"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className={`w-10 h-10 flex items-center justify-center rounded-full text-white shadow-md transition ${
              page === totalPages - 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#8F2901] hover:bg-[#B05C24]"
            }`}
            aria-label="Next page"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsGrids;
