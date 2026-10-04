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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {organizers.map((org, idx) => (
            <div
              key={idx}
              className="
                group
                bg-[#FFFAEE]
                border-2 border-gray-200
                rounded-2xl
                px-6 py-5
                shadow-sm
                hover:border-[#FAD374]
                hover:shadow-lg
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              {/* Name */}
              <h3
                className="
                  text-lg sm:text-xl
                  font-bold
                  text-[#8F2901]
                  leading-tight
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              >
                {org.title || "NAME"}
              </h3>

              {/* Position */}
              <p className="text-sm text-gray-500 mt-1">
                {org.position || org.description || "POSITION"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsViewOrganizers;