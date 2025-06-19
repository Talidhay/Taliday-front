import React from "react";

const AboutCoreValues = () => {
  return (
    <section id="about-core-values" className="pt-10 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Objectives Header */}
        <div className="mb-10">
          <h3
            className="text-2xl text-center font-bold mb-4"
            style={{ color: "#8F2901" }}
          >
            Our Core Values
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
            Our core values reflect the heart of Talidhay—grounded in service,
            shaped by joy, and strengthened by community. They serve as the
            foundation for how we act, connect, and grow together. Each value is
            a reminder that real impact starts with intention, and that even the
            smallest moments can leave a lasting impression.
          </p>
        </div>

        {/* Three column cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="bg-[#FAD374] rounded-2xl shadow-lg p-8 flex flex-col items-center">
            <h4 className="text-xl font-bold mb-3 text-[#8F2901] text-center">
              Joy and Positivity
            </h4>
            <p className="text-gray-700 text-center">
              We believe in the power of happiness to transform lives. Every
              action we take is rooted in the desire to create uplifting
              experiences that inspire optimism and joy in individuals and
              communities alike.
            </p>
          </div>
          <div className="bg-[#FAD374] rounded-2xl shadow-lg p-8 flex flex-col items-center">
            <h4 className="text-xl font-bold mb-3 text-[#8F2901] text-center">
              Genuine Service
            </h4>
            <p className="text-gray-700 text-center">
              We serve with heart. Our goal is to make a real, positive impact
              by showing up with sincerity, compassion, and care in everything
              we do.
            </p>
          </div>
          <div className="bg-[#FAD374] rounded-2xl shadow-lg p-8 flex flex-col items-center">
            <h4 className="text-xl font-bold mb-3 text-[#8F2901] text-center">
              Shared Growth
            </h4>
            <p className="text-gray-700 text-center">
              We are committed to growing together, empowering each other
              through mutual support, learning, and collaboration. Every
              individual’s development contributes to the collective strength
              and success of the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCoreValues;
