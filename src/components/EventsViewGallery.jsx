import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const images = [
  { src: "/images/image 27.jpg", alt: "Gallery 1" },
  { src: "/images/image 28.jpg", alt: "Gallery 2" },
  { src: "/images/image 29.jpg", alt: "Gallery 3" },
  { src: "/images/image 30.jpg", alt: "Gallery 4" },
  { src: "/images/image 32.jpg", alt: "Gallery 5" },
  { src: "/images/image 33.jpg", alt: "Gallery 6" },
];

const EventsViewGallery = () => {
  const [zoomedIdx, setZoomedIdx] = useState(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setZoomedIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setZoomedIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="eventsviewgallery" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <button
              key={idx}
              className="focus:outline-none"
              onClick={() => setZoomedIdx(idx)}
              aria-label={`Zoom ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200"
              />
            </button>
          ))}
        </div>
      </div>
      {/* Zoom Modal with Carousel */}
      {zoomedIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setZoomedIdx(null)}
        >
          <button
            className="absolute top-6 right-8 text-white text-3xl focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
              setZoomedIdx(null);
            }}
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          {/* Previous Button */}
          <button
            className="w-15 h-15 flex items-center justify-center rounded-full bg-[#8F2901]/30 text-white shadow-md hover:bg-[#B05C24] transition absolute left-4 md:left-16"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <img
            src={images[zoomedIdx].src}
            alt={images[zoomedIdx].alt}
            className="w-[95vw] h-[95vh] max-w-none max-h-none rounded-3xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {/* Next Button */}
          <button
            className="w-15 h-15 flex items-center justify-center rounded-full bg-[#8F2901]/30 text-white shadow-md hover:bg-[#B05C24] transition absolute right-4 md:right-16"
            onClick={handleNext}
            aria-label="Next"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
    </section>
  );
};

export default EventsViewGallery;
