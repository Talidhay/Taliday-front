import React from "react";

const EventsViewReport = ({ event }) => {
  const items = event?.report ?? [];

  if (items.length === 0) {
    return (
      <section id="eventsviewreport" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-3">
          <p className="text-gray-400 text-center italic">
            Report coming soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="eventsviewreport" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-3">

        {/* 3 Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {items.map((promo, idx) => (
            <a
              key={idx}
              href={promo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                bg-[#FAD374]
                rounded-2xl
                px-5 py-5
                min-h-[100px]
                flex items-center
                gap-4
                shadow-md
                hover:shadow-xl
                hover:-translate-y-1
                transition-all duration-300
                no-underline
              "
            >
              {/* Link Icon */}
              <div className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="
                    w-14 h-
                    text-[#9B2D05]
                    group-hover:scale-110
                    transition-transform duration-300
                  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.828 10.172a4 4 0 0 0-5.656 0l-4 4a4 4 0 1 0 5.656 5.656l2-2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.172 13.828a4 4 0 0 0 5.656 0l4-4a4 4 0 1 0-5.656-5.656l-2 2"
                  />
                </svg>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="text-[#9B2D05] font-bold text-lg leading-tight">
                  {promo.text || "Click to View"}
                </h3>

                <p className="text-[#9B2D05] text-sm mt-1 leading-snug line-clamp-2">
                  {promo.description ||
                    "Click here to view the full report."}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="
                    w-6 h-6
                    text-[#9B2D05]
                    group-hover:translate-x-1
                    transition-transform duration-300
                  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m13 6 6 6-6 6"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EventsViewReport;