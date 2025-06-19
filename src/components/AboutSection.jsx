import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const cards = [
    {
      title: "Mission",
      icon: "🎯",
      description:
        "To create uplifting experiences that bring joy to individuals and communities through meaningful moments and connections.",
    },
    {
      title: "Vision",
      icon: "👁️",
      description:
        "To become a  community where every individual feels the warmth of joy and connection, fostering a positive impact on people’s lives.",
    },
    {
      title: "Core Values",
      icon: "💎",
      description: (
        <>
          Joy and Positivity
          <br />
          Genuine Service
          <br />
          Shared Growth
        </>
      ),
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {" "}
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ color: "#8F2901" }}
          >
            <span>Our Heart and Purpose</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            At the core of Talidhay is a shared dream—to build a kinder, more
            connected world through simple acts of joy. Guided by our mission,
            vision, and values, we create safe, inclusive spaces where children
            and communities can grow, play, and thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-gray-100 ${
                card.title === "Mission" ? "bg-[#FFFAEE]" : "bg-[#FFFAEE]"
              }`}
            >
              <div className="text-5xl mb-4 text-center">{card.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/aboutpage"
            className="inline-block bg-gradient-to-r from-[#8F2901] via-[#B05C24] to-[#8F2901] text-white px-10 py-4 rounded-4xl font-bold text-lg hover:from-[#B05C24] hover:via-[#8F2901] hover:to-[#B05C24] transform hover:-translate-y-1 transition duration-300 shadow-lg hover:shadow-xl w-70 max-w-full"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
