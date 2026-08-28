import React, { useState } from "react";

const AboutGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryColumns = [
    [
      {
        src: "/images/Events/Art_From_The_Heart_021525/27.jpg",
        alt: "Talidhay Community Activity",
      },
      {
        src: "/images/Events/Art_From_The_Heart_021525/28.jpg",
        alt: "Talidhay Community Event",
      },
    ],
    [
      {
        src: "/images/Events/Art_From_The_Heart_021525/29.jpg",
        alt: "Talidhay Volunteers",
      },
      {
        src: "/images/Events/Art_From_The_Heart_021525/30.jpg",
        alt: "Talidhay Outreach Activity",
      },
    ],
    [
      {
        src: "/images/Events/Art_From_The_Heart_021525/31.jpg",
        alt: "Talidhay Community",
      },
    ],
    [
      {
        src: "/images/Events/Art_From_The_Heart_021525/32.jpg",
        alt: "Talidhay Community Members",
      },
      {
        src: "/images/Events/Art_From_The_Heart_021525/33.jpg",
        alt: "Talidhay Event",
      },
    ],
    [
      {
        src: "/images/Events/Art_From_The_Heart_021525/27.jpg",
        alt: "Talidhay Volunteers",
      },
      {
        src: "/images/Events/Art_From_The_Heart_021525/27.jpg",
        alt: "Talidhay Community Activity",
      },
    ],
  ];

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

          <p className="text-base text-gray-700 leading-relaxed max-w-5xl mx-auto">
            As an organization committed to spreading happiness and building
            lasting camaraderie, our gallery showcases the joyful moments and
            shared experiences that define our community.
          </p>
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
              {column.map((image, imageIndex) => (
                <button
                  key={imageIndex}
                  type="button"
                  onClick={() => setSelectedImage(image)}
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
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="
              absolute
              top-4
              right-5
              sm:top-6
              sm:right-8
              text-white
              text-4xl
              hover:text-[#FAD374]
              transition
              z-10
            "
            aria-label="Close image"
          >
            &times;
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default AboutGallery;