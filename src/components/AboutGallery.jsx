import React, { useState, useEffect, useRef } from "react";

const AboutGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Panning
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const dragStart = useRef({ x: 0, y: 0 });
  const startPosition = useRef({ x: 0, y: 0 });

  const MIN_ZOOM = 1;
  const MAX_ZOOM = 5;

  const galleryColumns = [
    [
      {
        src: "/images/AboutGallery/9.jpg",
        alt: "Talidhay Community Activity",
      },
      {
        src: "/images/AboutGallery/2.jpg",
        alt: "Talidhay Community Event",
      },
    ],
    [
      {
        src: "/images/AboutGallery/3.jpg",
        alt: "Talidhay Volunteers",
      },
      {
        src: "/images/AboutGallery/4.jpg",
        alt: "Talidhay Outreach Activity",
      },
    ],
    [
      {
        src: "/images/AboutGallery/8.jpg",
        alt: "Talidhay Community",
      },
    ],
    [
      {
        src: "/images/AboutGallery/7.jpg",
        alt: "Talidhay Community Members",
      },
      {
        src: "/images/AboutGallery/6.jpg",
        alt: "Talidhay Event",
      },
    ],
    [
      {
        src: "/images/AboutGallery/5.jpg",
        alt: "Talidhay Volunteers",
      },
      {
        src: "/images/AboutGallery/1.jpg",
        alt: "Talidhay Community Activity",
      },
    ],
  ];

  // Combine all gallery images into one array
  const allImages = galleryColumns.flat();

  // Reset zoom and position
  const resetZoom = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
    setIsDragging(false);
  };

  // Open previous image
  const showPrevious = (event) => {
    event.stopPropagation();

    resetZoom();

    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === 0) {
        return allImages.length - 1;
      }

      return currentIndex - 1;
    });
  };

  // Open next image
  const showNext = (event) => {
    event.stopPropagation();

    resetZoom();

    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === allImages.length - 1) {
        return 0;
      }

      return currentIndex + 1;
    });
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImageIndex(null);
    resetZoom();
  };

  // Zoom in
  const zoomIn = (event) => {
    event.stopPropagation();

    setZoomLevel((currentZoom) =>
      Math.min(currentZoom + 1, MAX_ZOOM)
    );
  };

  // Zoom out
  const zoomOut = (event) => {
    event.stopPropagation();

    setZoomLevel((currentZoom) => {
      const newZoom = Math.max(currentZoom - 1, MIN_ZOOM);

      if (newZoom === 1) {
        setPosition({ x: 0, y: 0 });
      }

      return newZoom;
    });
  };

  // Start dragging
  const handleMouseDown = (event) => {
    if (zoomLevel === 1) return;

    event.preventDefault();
    event.stopPropagation();

    setIsDragging(true);

    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
    };

    startPosition.current = {
      x: position.x,
      y: position.y,
    };
  };

  // Move image while dragging
  const handleMouseMove = (event) => {
    if (!isDragging || zoomLevel === 1) return;

    event.preventDefault();

    const deltaX = event.clientX - dragStart.current.x;
    const deltaY = event.clientY - dragStart.current.y;

    setPosition({
      x: startPosition.current.x + deltaX,
      y: startPosition.current.y + deltaY,
    });
  };

  // Stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Keyboard navigation and zoom
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImageIndex === null) return;

      // Previous
      if (event.key === "ArrowLeft") {
        resetZoom();

        setSelectedImageIndex((currentIndex) => {
          if (currentIndex === 0) {
            return allImages.length - 1;
          }

          return currentIndex - 1;
        });
      }

      // Next
      if (event.key === "ArrowRight") {
        resetZoom();

        setSelectedImageIndex((currentIndex) => {
          if (currentIndex === allImages.length - 1) {
            return 0;
          }

          return currentIndex + 1;
        });
      }

      // Close
      if (event.key === "Escape") {
        closeLightbox();
      }

      // Zoom in
      if (event.key === "+" || event.key === "=") {
        setZoomLevel((currentZoom) =>
          Math.min(currentZoom + 1, MAX_ZOOM)
        );
      }

      // Zoom out
      if (event.key === "-" || event.key === "_") {
        setZoomLevel((currentZoom) => {
          const newZoom = Math.max(
            currentZoom - 1,
            MIN_ZOOM
          );

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
  }, [selectedImageIndex, allImages.length]);

  // Reset zoom whenever selected image changes
  useEffect(() => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
    setIsDragging(false);
  }, [selectedImageIndex]);

  const selectedImage =
    selectedImageIndex !== null
      ? allImages[selectedImageIndex]
      : null;

  return (
    <section id="about-gallery" className="pt-10 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Gallery Header */}
        <div className="mb-10 text-center">
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: "#8F2901" }}
          >
            Our History and Gallery
          </h3>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {galleryColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`
                flex flex-col gap-3 sm:gap-4
                ${columnIndex === 2 ? "col-span-2 lg:col-span-1" : ""}
              `}
            >
              {column.map((image) => {
                // Find image position in the combined array
                const imageIndex = allImages.findIndex(
                  (item) => item.src === image.src
                );

                return (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() =>
                      setSelectedImageIndex(imageIndex)
                    }
                    className="
                      relative
                      overflow-hidden
                      rounded-xl
                      group
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#FAD374]
                    "
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        ease-in-out
                        group-hover:scale-110
                        ${
                          columnIndex === 2
                            ? "h-[360px] sm:h-[440px] lg:h-[600px]"
                            : "h-[180px] sm:h-[220px] lg:h-[290px]"
                        }
                      `}
                    />

                    {/* Hover Overlay */}
                    <div className="
                      absolute
                      inset-0
                      bg-black/0
                      group-hover:bg-black/20
                      transition
                      duration-300
                    " />
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Image Lightbox */}
      {selectedImage && (
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
          onClick={closeLightbox}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >

          {/* Close Button */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
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
            aria-label="Close image"
          >
            &times;
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
            onClick={(event) => event.stopPropagation()}
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
              −
            </button>

            {/* Zoom Level */}
            <span className="
              text-white
              text-sm
              font-medium
              min-w-[40px]
              text-center
            ">
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
              +
            </button>
          </div>

          {/* Previous Button */}
          <button
            type="button"
            onClick={showPrevious}
            className="
              absolute
              left-3
              sm:left-6
              md:left-10
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
              bg-black/50
              text-white
              text-3xl
              hover:bg-[#FAD374]
              hover:text-[#4B1E06]
              transition
              z-30
            "
            aria-label="Previous image"
          >
            &#10094;
          </button>

          {/* Image Container */}
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
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              draggable="false"
              onMouseDown={handleMouseDown}
              className={`
                max-w-[80vw]
                max-h-[82vh]
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
                transform: `
                  translate(${position.x}px, ${position.y}px)
                  scale(${zoomLevel})
                `,
                transformOrigin: "center center",
                transition: isDragging
                  ? "none"
                  : "transform 0.3s ease",
              }}
            />
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={showNext}
            className="
              absolute
              right-3
              sm:right-6
              md:right-10
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
              bg-black/50
              text-white
              text-3xl
              hover:bg-[#FAD374]
              hover:text-[#4B1E06]
              transition
              z-30
            "
            aria-label="Next image"
          >
            &#10095;
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
            {selectedImageIndex + 1} / {allImages.length}
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
            {zoomLevel > 1
              ? "Drag image to move"
              : "Use + / − to zoom"}
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutGallery;