import React from 'react';

const JoinUsSection = () => {
  return (
    <section id="register" className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-indigo-100 leading-relaxed mb-8">
              Be part of something bigger. Join thousands of individuals who are making 
              a difference in their communities. Together, we can create lasting positive 
              change and build a better future for everyone.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-2xl backdrop-blur-md">
                  🤝
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Connect</h4>
                  <p className="text-indigo-100">Network with like-minded individuals</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-2xl backdrop-blur-md">
                  📚
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Learn</h4>
                  <p className="text-indigo-100">Access exclusive workshops and resources</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-2xl backdrop-blur-md">
                  🌟
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Impact</h4>
                  <p className="text-indigo-100">Make a real difference in your community</p>
                </div>
              </div>
            </div>
            
            <div>
              <button className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transform hover:-translate-y-1 transition duration-300 shadow-lg hover:shadow-xl">
                Join Us Today
              </button>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="w-full h-96 bg-white/10 rounded-3xl flex items-center justify-center text-2xl font-semibold backdrop-blur-md border border-white/20">
              Community Image
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
