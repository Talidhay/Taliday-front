import React from 'react';

const AboutSection = () => {
  const cards = [
    {
      title: 'Mission',
      icon: '🎯',
      description: 'To empower communities through innovative solutions that promote sustainable development and social progress.'
    },
    {
      title: 'Vision',
      icon: '👁️',
      description: 'A world where every community has the resources and opportunities to thrive and create positive change.'
    },
    {
      title: 'Core Values',
      icon: '💎',
      description: 'Integrity, Innovation, Collaboration, Sustainability, and Community-driven excellence in all our endeavors.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">
              About Talidhay
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            We are dedicated to building stronger communities through innovative programs, 
            collaborative partnerships, and sustainable initiatives that create lasting positive impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cards.map((card, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-gray-100">
              <div className="text-5xl mb-4 text-center">{card.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center">{card.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-1 transition duration-300 shadow-lg hover:shadow-xl">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
