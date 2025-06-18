import React from 'react';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-3">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Talidhay
              </span>
            </h3>
            <p className="text-gray-400">Building stronger communities together</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-indigo-400 transition duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-indigo-400 transition duration-300">About</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-indigo-400 transition duration-300">Events</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-indigo-400 transition duration-300">Our Team</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">Community Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">Workshops</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">Volunteer Opportunities</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">Innovation Lab</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📧 info@talidhay.org</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Community St, City, State</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Follow Us</h4>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-12 h-12 bg-indigo-600/10 border border-indigo-600/20 rounded-xl flex items-center justify-center text-xl hover:bg-indigo-600/20 transform hover:-translate-y-1 transition duration-300"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2025 Talidhay. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
