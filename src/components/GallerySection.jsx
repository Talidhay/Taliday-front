import React from 'react';

const GallerySection = () => {
  const galleryItems = [
    { id: 1, type: 'image', title: 'Community Event 1' },
    { id: 2, type: 'image', title: 'Workshop Session' },
    { id: 3, type: 'image', title: 'Team Building' },
    { id: 4, type: 'image', title: 'Volunteer Work' },
    { id: 5, type: 'image', title: 'Community Outreach' },
    { id: 6, type: 'image', title: 'Innovation Lab' },
    { id: 7, type: 'image', title: 'Collaboration Meeting' },
    { id: 8, type: 'image', title: 'Project Launch' }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">
              Our Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Explore the moments that define our community's growth, achievements, 
            and the positive impact we've made together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 cursor-pointer">
              <div className="h-48 flex items-center justify-center text-white font-semibold text-center p-4">
                {item.title}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h4 className="text-white text-xl font-semibold text-center px-4">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
