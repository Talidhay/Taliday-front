import React from "react";
import AboutObjectives from "./AboutObjectives";
import AboutCoreValues from "./AboutCoreValues";
import AboutLogoMeaning from "./AboutLogoMeaning";
import AboutJournalJoy from "./AboutJournalJoy";
import AboutServe from "./AboutServe";

const AboutPage = () => {
  return (
    <>
      <section id="about-page" className="pt-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {" "}
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6"
              style={{ color: "#8F2901" }}
            >
              <span>Woven With Purpose</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left column: Text */}
            <div>
              <p className="text-xl text-gray-600 leading-relaxed mb-6 text-justify">
                Talidhay began with a simple act of kindness. In December 2023,
                a group of youth came together to give gifts to 100 children
                using donations and personal contributions. The joy it brought
                left a lasting impact and inspired them to do more. By September
                2024, they began planning to form an official organization. On
                September 29, 2024, Talidhay was formally established by Julia,
                Mark, Tania, Angel, and Len, grounded in the values of joy,
                unity, and genuine service.  
                <br />
                <br />
                Talidhay is a community-based organization with the aim of
                spreading happiness and forming lasting camaraderie through
                genuine service to the community and its people. The name
                Talidhay is derived from the Cebuano dialect, meaning “prolonged
                laughter,” which reflects the heart of the organization’s
                mission. With the tagline “Spreading Joy, One Moment at a Time,”
                Talidhay has grown into a vibrant community that brings people
                together through meaningful and joyful events.
              </p>
            </div>
            {/* Right column: Image or illustration */}
            <div className="flex justify-center">
              <video
                src="/images/Sample.MOV"
                controls
                className="w-full max-w-md rounded-3xl shadow-lg object-cover"
                alt="About Talidhay"
              />
            </div>
          </div>
        </div>
      </section>
      <AboutObjectives />
      <AboutCoreValues />
      <AboutServe />
      <AboutJournalJoy />
      <AboutLogoMeaning />
    </>
  );
};

export default AboutPage;
