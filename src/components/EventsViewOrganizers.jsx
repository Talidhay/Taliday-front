import React from "react";

const promotions = [
  {
    img: "/images/imge 34 (1).jpg",
    title: "Name",
    description: "Role",
  },
  {
    img: "/images/imge 34 (2).jpg",
    title: "Name",
    description: "Role",
  },
  {
    img: "/images/imge 34 (3).jpg",
    title: "Name",
    description: "Role",
  },
];

const EventsViewOrganizers = () => {
  return (
    <section id="eventsvieworganizers" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo, idx) => (
            <a
              key={idx}
              href={promo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FAD374] p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-gray-100 flex flex-col items-center text-center"
            >
              <img
                src={promo.img}
                alt={promo.alt}
                className="w-full aspect-square object-cover rounded-xl border-2 border-yellow-700 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {promo.title}
              </h3>
              <p className="text-gray-700 text-sm mb-2">{promo.description}</p>
            </a>
          ))}
        </div>

        {/* centered divider with "Volunteers" label */}
        <div className="flex items-center my-12">
          <div className="flex-grow border-t border-[#8F2901]" />
          <span className="px-6 text-[#8F2901] font-semibold">Volunteers</span>
          <div className="flex-grow border-t border-[#8F2901]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo, idx) => (
            <a
              key={idx}
              href={promo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FAD374] p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-gray-100 flex flex-col items-center text-center"
            >
              <img
                src={promo.img}
                alt={promo.alt}
                className="w-full aspect-square object-cover rounded-xl border-2 border-yellow-700 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {promo.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsViewOrganizers;
