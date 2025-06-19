import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const EventsSection = () => {
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
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            From heartfelt community programs to vibrant collaborations and
            creative fundraisers, every Talidhay event is a step toward our
            vision—spreading joy, building connections, and making a lasting
            impact. Whether big or small, each activity reflects our commitment
            to compassion, creativity, and community care.
          </p>
        </div>

        {/* Card with two columns: text left, image right */}
        <div className="text-center bg-[#FAD374] rounded-2xl shadow-lg p-8 mb-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <div>
            <div className="flex flex-col items-center mb-4">
              <span className="mb-2">
                <FontAwesomeIcon
                  icon={faPalette}
                  className="text-[#8F2901] text-7xl mb-4"
                />
              </span>
              <h3
                className="text-2xl font-bold text-center"
                style={{ color: "#8F2901" }}
              >
                Art From The Heart (AFTH)
              </h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 text-center">
              Our first-ever event, Art from the Heart, marked the beginning of
              Talidhay’s journey. Through art, laughter, and creative
              expression, we brought children together to celebrate joy,
              imagination, and community—one heartfelt stroke at a time.
            </p>
          </div>
          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="/images/image 27.png"
              alt="Talidhay Event"
              className="w-full rounded-2xl shadow-md object-cover"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-4">
          <button
            className="w-15 h-15 flex items-center justify-center rounded-full bg-[#8F2901] text-[#FAD374] shadow-md transition hover:bg-[#B05C24]"
            aria-label="Previous"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-3xl" />
          </button>
          <button
            className="w-15 h-15 flex items-center justify-center rounded-full bg-[#8F2901] text-[#FAD374] shadow-md transition hover:bg-[#B05C24]"
            aria-label="Next"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-3xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
