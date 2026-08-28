import React from "react";

const EventsViewOrganizers = ({ event }) => {
  const organizers = event?.organizers ?? [];

  if (organizers.length === 0) {
    return (
      <section id="eventsvieworganizers" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-3">
          <p className="text-gray-400 text-center italic">
            Organizers coming soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="eventsvieworganizers" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {organizers.map((org, idx) => (
            <div
              key={idx}
              className="
                flex items-center gap-3
                rounded-xl
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_8px_22px_rgba(0,0,0,0.18)]
              "
            >
              {/* Profile Icon */}
              <div
                className="
                  w-20 h-20 sm:w-24 sm:h-24
                  shrink-0
                  bg-[#FAD374]
                  rounded-xl
                  flex items-center justify-center
                "
              >
                <div className="relative w-14 h-14">
                  {/* Head */}
                  <div
                    className="
                      absolute top-0 left-1/2
                      -translate-x-1/2
                      w-6 h-6
                      bg-[#A52B05]
                      rounded-full
                    "
                  />

                  {/* Body */}
                  <div
                    className="
                      absolute bottom-0 left-1/2
                      -translate-x-1/2
                      w-12 h-8
                      bg-[#A52B05]
                      rounded-t-full
                    "
                  />
                </div>
              </div>

              {/* Organizer Info */}
              <div
                className="
                  flex-1 min-w-0
                  bg-[#FAD374]
                  rounded-xl
                  px-4 py-4
                "
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#A52B05] uppercase leading-tight truncate">
                  {org.title || "NAME"}
                </h3>

                <p className="text-xs sm:text-sm font-semibold italic text-[#A52B05] uppercase mt-1 truncate">
                  {org.position || org.description || "POSITION"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsViewOrganizers;
