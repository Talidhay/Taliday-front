import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

const EventsViewGallery = ({ images = [] }) => {
  const [zoomedIdx, setZoomedIdx] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Panning
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const dragStart = useRef({ x: 0, y: 0 });
  const startPosition = useRef({ x: 0, y: 0 });

  const MIN_ZOOM = 1;
  const MAX_ZOOM = 5;

  const resetZoom = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
    setIsDragging(false);
  };

  const handlePrev = (e) => {
    e.stopPropagation();

    resetZoom();

    setZoomedIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();

    resetZoom();

    setZoomedIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleClose = () => {
    setZoomedIdx(null);
    resetZoom();
  };

  // Increase zoom
  const zoomIn = (e) => {
    e.stopPropagation();

    setZoomLevel((prev) => Math.min(prev + 1, MAX_ZOOM));
  };

  // Decrease zoom
  const zoomOut = (e) => {
    e.stopPropagation();

    setZoomLevel((prev) => {
      const newZoom = Math.max(prev - 1, MIN_ZOOM);

      // Reset position when returning to normal size
      if (newZoom === 1) {
        setPosition({ x: 0, y: 0 });
      }

      return newZoom;
    });
  };

  // Start dragging
  const handleMouseDown = (e) => {
    if (zoomLevel === 1) return;

    e.preventDefault();
    e.stopPropagation();

    setIsDragging(true);

    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
    };

    startPosition.current = {
      x: position.x,
      y: position.y,
    };
  };

  // Move image while dragging
  const handleMouseMove = (e) => {
    if (!isDragging || zoomLevel === 1) return;

    e.preventDefault();

    const deltaX = e.clientX - dragStart.current.x;
    const deltaY = e.clientY - dragStart.current.y;

    setPosition({
      x: startPosition.current.x + deltaX,
      y: startPosition.current.y + deltaY,
    });
  };

  // Stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (zoomedIdx === null) return;

      if (e.key === "ArrowLeft") {
        resetZoom();

        setZoomedIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }

      if (e.key === "ArrowRight") {
        resetZoom();

        setZoomedIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }

      if (e.key === "Escape") {
        handleClose();
      }

      if (e.key === "+" || e.key === "=") {
        setZoomLevel((prev) => Math.min(prev + 1, MAX_ZOOM));
      }

      if (e.key === "-" || e.key === "_") {
        setZoomLevel((prev) => {
          const newZoom = Math.max(prev - 1, MIN_ZOOM);

          if (newZoom === 1) {
            setPosition({ x: 0, y: 0 });
          }

          return newZoom;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomedIdx, images.length]);

  // Reset zoom whenever the selected image changes
  useEffect(() => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
    setIsDragging(false);
  }, [zoomedIdx]);

  if (images.length === 0) {
    return (
      <section id="eventsviewgallery" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-3">
          <p className="text-gray-400 text-center italic">
            Gallery coming soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="eventsviewgallery" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-3">
        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              className="focus:outline-none"
              onClick={() => setZoomedIdx(idx)}
              aria-label={`View ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="
                  w-full
                  h-48
                  object-cover
                  rounded-2xl
                  shadow-lg
                  hover:scale-105
                  transition-transform
                  duration-200
                "
              />
            </button>
          ))}
        </div>
      </div>

      {/* Image Lightbox */}
      {zoomedIdx !== null && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/80
            p-4
            overflow-hidden
          "
          onClick={handleClose}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Close Button */}
          <button
            type="button"
            className="
              absolute
              top-5
              right-5
              sm:top-6
              sm:right-8
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-full
              bg-black/50
              text-white
              text-xl
              hover:bg-[#B05C24]
              transition
              z-30
            "
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          {/* Zoom Controls */}
          <div
            className="
              absolute
              top-5
              left-1/2
              -translate-x-1/2
              flex
              items-center
              gap-2
              bg-black/60
              rounded-full
              px-2
              py-2
              z-30
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Zoom Out */}
            <button
              type="button"
              onClick={zoomOut}
              disabled={zoomLevel === MIN_ZOOM}
              className={`
                w-9
                h-9
                flex
                items-center
                justify-center
                rounded-full
                text-white
                transition
                ${
                  zoomLevel === MIN_ZOOM
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:bg-[#B05C24]"
                }
              `}
              aria-label="Zoom out"
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>

            {/* Zoom Level */}
            <span className="text-white text-sm font-medium min-w-[40px] text-center">
              {zoomLevel}×
            </span>

            {/* Zoom In */}
            <button
              type="button"
              onClick={zoomIn}
              disabled={zoomLevel === MAX_ZOOM}
              className={`
                w-9
                h-9
                flex
                items-center
                justify-center
                rounded-full
                text-white
                transition
                ${
                  zoomLevel === MAX_ZOOM
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:bg-[#B05C24]"
                }
              `}
              aria-label="Zoom in"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          {/* Previous Button */}
          <button
            type="button"
            className="
              absolute
              left-3
              sm:left-6
              md:left-16
              top-1/2
              -translate-y-1/2
              w-12
              h-12
              sm:w-14
              sm:h-14
              flex
              items-center
              justify-center
              rounded-full
              bg-[#8F2901]/50
              text-white
              shadow-md
              hover:bg-[#B05C24]
              transition
              z-30
            "
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Image */}
          <div
            className="
              relative
              max-w-[80vw]
              max-h-[82vh]
              flex
              items-center
              justify-center
              overflow-hidden
              rounded-3xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[zoomedIdx].src}
              alt={images[zoomedIdx].alt}
              draggable="false"
              onMouseDown={handleMouseDown}
              className={`
                max-h-[82vh]
                max-w-[80vw]
                object-contain
                rounded-3xl
                shadow-2xl
                select-none
                ${
                  zoomLevel > 1
                    ? isDragging
                      ? "cursor-grabbing"
                      : "cursor-grab"
                    : "cursor-default"
                }
              `}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`,
                transformOrigin: "center center",
                transition: isDragging ? "none" : "transform 0.3s ease",
              }}
            />
          </div>

          {/* Next Button */}
          <button
            type="button"
            className="
              absolute
              right-3
              sm:right-6
              md:right-16
              top-1/2
              -translate-y-1/2
              w-12
              h-12
              sm:w-14
              sm:h-14
              flex
              items-center
              justify-center
              rounded-full
              bg-[#8F2901]/50
              text-white
              shadow-md
              hover:bg-[#B05C24]
              transition
              z-30
            "
            onClick={handleNext}
            aria-label="Next image"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          {/* Image Counter */}
          <div
            className="
              absolute
              bottom-5
              left-1/2
              -translate-x-1/2
              bg-black/60
              text-white
              px-4
              py-2
              rounded-full
              text-sm
              font-medium
              z-30
            "
          >
            {zoomedIdx + 1} / {images.length}
          </div>

          {/* Zoom / Pan Hint */}
          <div
            className="
              absolute
              bottom-5
              right-5
              sm:right-8
              text-white/70
              text-xs
              hidden
              sm:block
            "
          >
            {zoomLevel > 1 ? "Drag image to move" : "Use + / − to zoom"}
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsViewGallery;
