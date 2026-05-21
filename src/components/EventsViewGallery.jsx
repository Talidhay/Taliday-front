import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const EventsViewGallery = ({ images = [] }) => {
  const [zoomedIdx, setZoomedIdx] = useState(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setZoomedIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setZoomedIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

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

// Legacy reference data (unused)
const _eventGalleries = [
  {
    title: "Art From The Heart",
    images: [
      {
        src: "/images/Events/Art_From_The_Heart_021525/26.JPG",
        alt: "Art From The Heart 1",
      },
      {
        src: "/images/Events/Art_From_The_Heart_021525/27.jpg",
        alt: "Art From The Heart 2",
      },
      {
        src: "/images/Events/Art_From_The_Heart_021525/28.jpg",
        alt: "Art From The Heart 3",
      },
      {
        src: "/images/Events/Art_From_The_Heart_021525/29.jpg",
        alt: "Art From The Heart 4",
      },
      {
        src: "/images/Events/Art_From_The_Heart_021525/30.jpg",
        alt: "Art From The Heart 5",
      },
      {
        src: "/images/Events/Art_From_The_Heart_021525/31.jpg",
        alt: "Art From The Heart 6",
      },
      {
        src: "/images/Events/Art_From_The_Heart_021525/32.jpg",
        alt: "Art From The Heart 7",
      },
      {
        src: "/images/Events/Art_From_The_Heart_021525/33.jpg",
        alt: "Art From The Heart 8",
      },
    ],
  },
  {
    title: "A Timeless Carol",
    images: [
      {
        src: "/images/Events/A_Timeless_Carol_122725/img1.jpg",
        alt: "A Timeless Carol 1",
      },
      {
        src: "/images/Events/A_Timeless_Carol_122725/img2.jpg",
        alt: "A Timeless Carol 2",
      },
      {
        src: "/images/Events/A_Timeless_Carol_122725/img3.jpg",
        alt: "A Timeless Carol 3",
      },
      {
        src: "/images/Events/A_Timeless_Carol_122725/img4.jpg",
        alt: "A Timeless Carol 4",
      },
      {
        src: "/images/Events/A_Timeless_Carol_122725/img5.jpg",
        alt: "A Timeless Carol 5",
      },
    ],
  },
  {
    title: "Bangchetto",
    images: [
      { src: "/images/Events/Bangchetto_0425/0727.HEIC", alt: "Bangchetto 1" },
      { src: "/images/Events/Bangchetto_0425/0728.HEIC", alt: "Bangchetto 2" },
      { src: "/images/Events/Bangchetto_0425/0729.HEIC", alt: "Bangchetto 3" },
      { src: "/images/Events/Bangchetto_0425/0730.HEIC", alt: "Bangchetto 4" },
      { src: "/images/Events/Bangchetto_0425/0731.HEIC", alt: "Bangchetto 5" },
    ],
  },
  {
    title: "Bata! Bata! Laro Tayo!",
    images: [
      {
        src: "/images/Events/BataBataLaroTayo_061425/082106.jpg",
        alt: "Bata Bata Laro Tayo 1",
      },
      {
        src: "/images/Events/BataBataLaroTayo_061425/082107.jpg",
        alt: "Bata Bata Laro Tayo 2",
      },
      {
        src: "/images/Events/BataBataLaroTayo_061425/082115.jpg",
        alt: "Bata Bata Laro Tayo 3",
      },
      {
        src: "/images/Events/BataBataLaroTayo_061425/082118.jpg",
        alt: "Bata Bata Laro Tayo 4",
      },
      {
        src: "/images/Events/BataBataLaroTayo_061425/108.jpg",
        alt: "Bata Bata Laro Tayo 5",
      },
    ],
  },
  {
    title: "BrewKada Hub (April 2025)",
    images: [
      {
        src: "/images/Events/BrewKadaHub_041225/151324.jpg",
        alt: "BrewKada Hub Apr 1",
      },
      {
        src: "/images/Events/BrewKadaHub_041225/151327.jpg",
        alt: "BrewKada Hub Apr 2",
      },
      {
        src: "/images/Events/BrewKadaHub_041225/151328.jpg",
        alt: "BrewKada Hub Apr 3",
      },
      {
        src: "/images/Events/BrewKadaHub_041225/151331.jpg",
        alt: "BrewKada Hub Apr 4",
      },
      {
        src: "/images/Events/BrewKadaHub_041225/151332.jpg",
        alt: "BrewKada Hub Apr 5",
      },
    ],
  },
  {
    title: "BrewKada Hub (November 2025)",
    images: [
      {
        src: "/images/Events/BrewKadaHub_1125/1.jpeg",
        alt: "BrewKada Hub Nov 1",
      },
      {
        src: "/images/Events/BrewKadaHub_1125/2.jpeg",
        alt: "BrewKada Hub Nov 2",
      },
      {
        src: "/images/Events/BrewKadaHub_1125/3.jpeg",
        alt: "BrewKada Hub Nov 3",
      },
      {
        src: "/images/Events/BrewKadaHub_1125/4.HEIC",
        alt: "BrewKada Hub Nov 4",
      },
      {
        src: "/images/Events/BrewKadaHub_1125/5.HEIC",
        alt: "BrewKada Hub Nov 5",
      },
    ],
  },
  {
    title: "Cheerful Draw 2025",
    images: [
      {
        src: "/images/Events/CheerfulDraw_25/1.jpeg",
        alt: "Cheerful Draw 2025 1",
      },
      {
        src: "/images/Events/CheerfulDraw_25/0388.HEIC",
        alt: "Cheerful Draw 2025 2",
      },
      {
        src: "/images/Events/CheerfulDraw_25/0389.HEIC",
        alt: "Cheerful Draw 2025 3",
      },
      {
        src: "/images/Events/CheerfulDraw_25/0390.HEIC",
        alt: "Cheerful Draw 2025 4",
      },
      {
        src: "/images/Events/CheerfulDraw_25/0391.HEIC",
        alt: "Cheerful Draw 2025 5",
      },
    ],
  },
  {
    title: "Cheerful Draw 2024",
    images: [
      {
        src: "/images/Events/Cheerful_Draw_2024/1.jpg",
        alt: "Cheerful Draw 2024 1",
      },
      {
        src: "/images/Events/Cheerful_Draw_2024/2.jpg",
        alt: "Cheerful Draw 2024 2",
      },
      {
        src: "/images/Events/Cheerful_Draw_2024/3.jpg",
        alt: "Cheerful Draw 2024 3",
      },
      {
        src: "/images/Events/Cheerful_Draw_2024/4.jpg",
        alt: "Cheerful Draw 2024 4",
      },
      {
        src: "/images/Events/Cheerful_Draw_2024/5.jpg",
        alt: "Cheerful Draw 2024 5",
      },
    ],
  },
  {
    title: "Donation Drive: Daan Tubo",
    images: [
      {
        src: "/images/Events/Donation_Drive/DaanTubo/1.jpg",
        alt: "Daan Tubo 1",
      },
      {
        src: "/images/Events/Donation_Drive/DaanTubo/2.jpg",
        alt: "Daan Tubo 2",
      },
      {
        src: "/images/Events/Donation_Drive/DaanTubo/3.jpg",
        alt: "Daan Tubo 3",
      },
      {
        src: "/images/Events/Donation_Drive/DaanTubo/4.jpg",
        alt: "Daan Tubo 4",
      },
      {
        src: "/images/Events/Donation_Drive/DaanTubo/5.jpg",
        alt: "Daan Tubo 5",
      },
    ],
  },
  {
    title: "Donation Drive: Happyland Tondo",
    images: [
      {
        src: "/images/Events/Donation_Drive/HappylandTondo/1.jpg",
        alt: "Happyland Tondo 1",
      },
      {
        src: "/images/Events/Donation_Drive/HappylandTondo/2.jpg",
        alt: "Happyland Tondo 2",
      },
      {
        src: "/images/Events/Donation_Drive/HappylandTondo/3.jpg",
        alt: "Happyland Tondo 3",
      },
      {
        src: "/images/Events/Donation_Drive/HappylandTondo/4.jpg",
        alt: "Happyland Tondo 4",
      },
      {
        src: "/images/Events/Donation_Drive/HappylandTondo/5.jpg",
        alt: "Happyland Tondo 5",
      },
    ],
  },
  {
    title: "Donation Drive: Typhoon Kristene",
    images: [
      {
        src: "/images/Events/Donation_Drive/TyphoonKristene/1.jpg",
        alt: "Typhoon Kristene 1",
      },
      {
        src: "/images/Events/Donation_Drive/TyphoonKristene/2.jpg",
        alt: "Typhoon Kristene 2",
      },
      {
        src: "/images/Events/Donation_Drive/TyphoonKristene/3.jpg",
        alt: "Typhoon Kristene 3",
      },
      {
        src: "/images/Events/Donation_Drive/TyphoonKristene/4.jpg",
        alt: "Typhoon Kristene 4",
      },
      {
        src: "/images/Events/Donation_Drive/TyphoonKristene/5.jpg",
        alt: "Typhoon Kristene 5",
      },
    ],
  },
  {
    title: "Pitaka Talks",
    images: [
      { src: "/images/Events/PitakaTalks_0925/1.jpg", alt: "Pitaka Talks 1" },
      { src: "/images/Events/PitakaTalks_0925/2.jpg", alt: "Pitaka Talks 2" },
      { src: "/images/Events/PitakaTalks_0925/3.jpg", alt: "Pitaka Talks 3" },
      { src: "/images/Events/PitakaTalks_0925/4.jpg", alt: "Pitaka Talks 4" },
      { src: "/images/Events/PitakaTalks_0925/5.jpg", alt: "Pitaka Talks 5" },
    ],
  },
];
