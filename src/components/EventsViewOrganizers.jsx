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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizers.map((org, idx) => (
            <div
              key={idx}
              className="bg-[#FAD374] p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-gray-100 flex flex-col items-center text-center"
            >
              <img
                src={org.img}
                alt={org.title}
                className="w-full aspect-square object-cover rounded-xl border-2 border-yellow-700 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {org.title}
              </h3>
              <p className="text-gray-700 text-sm mb-2">{org.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsViewOrganizers;
