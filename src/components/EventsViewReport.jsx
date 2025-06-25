import React from "react";

const promotions = [
  {
    href: "https://www.facebook.com/share/p/1EyCRZEabe/",
    img: "/images/imge 34 (1).jpg",
    alt: "Promotion 1",
    text: "View on Facebook",
  },
  {
    href: "https://www.facebook.com/share/p/1EyCRZEabe/",
    img: "/images/imge 34 (2).jpg",
    alt: "Promotion 2",
    text: "View on Facebook",
  },
];

const EventsViewReport = () => {
  return (
    <section id="eventsviewreport" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {promotions.map((promo, idx) => (
            <a
              key={idx}
              href={promo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-[#FAD374] rounded-2xl shadow-lg p-0 flex flex-col items-center overflow-hidden group hover:-translate-y-2 transition duration-300"
            >
              <img
                src={promo.img}
                alt={promo.alt}
                className="w-full h-64 object-cover rounded-2xl transition duration-300 group-hover:brightness-50"
              />
              <span className="font-bold px-6 py-3 rounded-lg text-white text-xl absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                {promo.text}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsViewReport;
