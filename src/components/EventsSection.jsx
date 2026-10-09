import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faChevronLeft,
  faChevronRight,
  faWallet,
  faGifts,
} from "@fortawesome/free-solid-svg-icons";
const events = [
  {
    title: "Art From The Heart (AFTH)",
    description:
      "Talidhay’s first-ever event brought children together through art, creativity, and laughter, marking the beginning of our journey as a community.",
    image: "/images/photo_39_2025-02-16_15-21-47.jpg",
    icon: faPalette,
    link: "/eventsview/art-from-the-heart",
  },
  {
    title: "PitakaTalks",
    description:
      "A financial literacy session that encouraged young people to make wiser money moves through conversations on financial planning, savings, and protection.",
    image: "/images/541541043_2905421582975258_3167540554380460539_n.jpg",
    icon: faWallet,
    link: "/eventsview/pitaka-talks",
  },
  {
    title: "A Timeless Carol",
    description:
      "A Christmas outreach program that brought warmth, music, and meaningful connections to elders while celebrating their stories, wisdom, and presence.",
    image: "/images/IMG_1178.jpg",
    icon: faGifts,
    link: "/eventsview/a-timeless-carol",
  },
];
const EventsSection = () => {
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState("next");
  const handlePrev = () => {
    setDirection("prev");
    setActiveIdx((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setDirection("next");
    setActiveIdx((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };
  return (
    <section
      id="eventssection"
      className="py-15"
      style={{ backgroundColor: "#FFF9E3" }}
    >
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="text-center mb-16">
          {" "}
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ color: "#8F2901" }}
          >
            {" "}
            <span>Moments that Matter</span>{" "}
          </h2>{" "}
          <p className="text-s leading-relaxed max-w-4xl mx-auto">
            {" "}
            Every Talidhay event brings people together through joy, creativity,
            and community.{" "}
          </p>{" "}
        </div>{" "}
        {/* Carousel Card */}{" "}
        <div className="relative">
          {" "}
          {/* Card wrapper - only added for transition positioning */}{" "}
          <div className="relative">
            {" "}
            {events.map((event, idx) => (
              <button
                key={idx}
                onClick={() => navigate(event.link)}
                className={` w-full text-left bg-[#FAD374] rounded-2xl shadow-lg p-0 grid grid-cols-1 md:grid-cols-2 items-center hover:shadow-xl border-0 transition-all duration-500 ease-in-out ${idx === activeIdx ? "opacity-100 translate-x-0 relative z-10" : direction === "next" ? "opacity-0 translate-x-6 absolute inset-0 pointer-events-none" : "opacity-0 -translate-x-6 absolute inset-0 pointer-events-none"} `}
                style={{ border: "none" }}
              >
                {" "}
                {/* Left: Text */}{" "}
                <div className="p-8">
                  {" "}
                  <div className="flex flex-col items-center mb-4">
                    {" "}
                    <span className="mb-2">
                      {" "}
                      <FontAwesomeIcon
                        icon={event.icon}
                        className="text-[#8F2901] text-7xl mb-4"
                      />{" "}
                    </span>{" "}
                    <h3
                      className="text-2xl font-bold text-center"
                      style={{ color: "#8F2901" }}
                    >
                      {" "}
                      {event.title}{" "}
                    </h3>{" "}
                  </div>{" "}
                  <p className="text-lg leading-relaxed mb-4 text-center">
                    {" "}
                    {event.description}{" "}
                  </p>{" "}
                </div>{" "}
                {/* Right: Image */}{" "}
                <div className="flex justify-center p-8">
                  {" "}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-80 rounded-2xl shadow-md object-cover"
                  />{" "}
                </div>{" "}
              </button>
            ))}{" "}
          </div>{" "}
          {/* Carousel Navigation Buttons */}{" "}
          <div className="flex justify-center gap-6 mt-8">
            {" "}
            <button
              className="w-15 h-15 flex items-center justify-center rounded-full bg-[#8F2901] text-[#FAD374] shadow-md transition hover:bg-[#B05C24]"
              aria-label="Previous"
              onClick={handlePrev}
            >
              {" "}
              <FontAwesomeIcon icon={faChevronLeft} className="text-3xl" />{" "}
            </button>{" "}
            <button
              className="w-15 h-15 flex items-center justify-center rounded-full bg-[#8F2901] text-[#FAD374] shadow-md transition hover:bg-[#B05C24]"
              aria-label="Next"
              onClick={handleNext}
            >
              {" "}
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-3xl"
              />{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default EventsSection;
