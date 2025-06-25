import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const events = [
  {
    title: "Art From The Heart (AFTH)",
    description:
      "Our first-ever event, Art from the Heart, marked the beginning of Talidhay’s journey. Through art, laughter, and creative expression, we brought children together to celebrate joy, imagination, and community—one heartfelt stroke at a time.",
    image: "/images/image 27.jpg",
    icon: faPalette,
    link: "/eventsview",
  },
  {
    title: "Joyful Connections",
    description:
      "A collaborative event designed to foster new friendships and strengthen community bonds through fun activities and shared experiences.",
    image: "/images/image 28.jpg",
    icon: faPalette,
    link: "/eventsview",
  },
  {
    title: "Creative Fundraiser",
    description:
      "An inspiring fundraiser where creativity meets compassion, supporting local causes through art auctions and performances.",
    image: "/images/image 29.jpg",
    icon: faPalette,
    link: "/eventsview",
  },
];

const EventsSection = () => {
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="eventssection"
      className="py-20"
      style={{ backgroundColor: "#FFF9E3" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ color: "#8F2901" }}
          >
            <span>Moments that Matter</span>
          </h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            From heartfelt community programs to vibrant collaborations and
            creative fundraisers, every Talidhay event is a step toward our
            vision—spreading joy, building connections, and making a lasting
            impact. Whether big or small, each activity reflects our commitment
            to compassion, creativity, and community care.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="relative">
          {events.map((event, idx) => (
            <button
              key={idx}
              onClick={() => navigate(event.link)}
              className={`w-full text-left bg-[#FAD374] rounded-2xl shadow-lg p-0 mb-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center hover:shadow-xl transition group border-0 ${
                idx === activeIdx ? "block" : "hidden"
              }`}
              style={{ border: "none" }}
            >
              {/* Left: Text */}
              <div className="p-8">
                <div className="flex flex-col items-center mb-4">
                  <span className="mb-2">
                    <FontAwesomeIcon
                      icon={event.icon}
                      className="text-[#8F2901] text-7xl mb-4"
                    />
                  </span>
                  <h3
                    className="text-2xl font-bold text-center"
                    style={{ color: "#8F2901" }}
                  >
                    {event.title}
                  </h3>
                </div>
                <p className="text-lg leading-relaxed mb-4 text-center">
                  {event.description}
                </p>
              </div>
              {/* Right: Image */}
              <div className="flex justify-center p-8">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full rounded-2xl shadow-md object-cover"
                />
              </div>
            </button>
          ))}

          {/* Carousel Navigation Buttons */}
          <div className="flex justify-center gap-6 mt-4">
            <button
              className="w-15 h-15 flex items-center justify-center rounded-full bg-[#8F2901] text-[#FAD374] shadow-md transition hover:bg-[#B05C24]"
              aria-label="Previous"
              onClick={handlePrev}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-3xl" />
            </button>
            <button
              className="w-15 h-15 flex items-center justify-center rounded-full bg-[#8F2901] text-[#FAD374] shadow-md transition hover:bg-[#B05C24]"
              aria-label="Next"
              onClick={handleNext}
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
