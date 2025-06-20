import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faTiktok,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FontAwesomeIcon icon={faSquareFacebook} />,
      url: "https://www.facebook.com/profile.php?id=61566182330078",
    },
    {
      name: "Instagram",
      icon: <FontAwesomeIcon icon={faSquareInstagram} />,
      url: "https://www.instagram.com/talidhay2024/",
    },
    {
      name: "Tiktok",
      icon: <FontAwesomeIcon icon={faTiktok} />,
      url: "https://www.tiktok.com/@talidhay2024",
    },
    {
      name: "Threads",
      icon: <FontAwesomeIcon icon={faThreads} />,
      url: "https://shorturl.at/eoDqw",
    },
  ];

  return (
    <footer className="text-white py-12" style={{ backgroundColor: "#3A1504" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-3">
              <span className="bg-gradient-to-r from-[#C68642] via-[#FFD966] to-[#C68642] bg-clip-text text-transparent">
                Talidhay
              </span>
            </h3>
            <p className="text-white">
              An organization that aims to spread happiness and foster lasting
              camaraderie through genuine service to our community.
            </p>
          </div>

          <div className="flex flex-col lg:items-end lg:text-right">
            <h4 className="text-lg font-semibold mb-4 text-gray-200">
              Contact
            </h4>
            <ul className="space-y-2 text-white">
              <li>📧 talidhay2024@gmail.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 Baranggay Amihan, Q.C.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-4 text-gray-200">
              Follow Us
            </h4>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl hover:bg-indigo-600/20 transform hover:-translate-y-1 transition duration-300"
                  style={{ backgroundColor: "rgba(166, 122, 42, 0.8)" }}
                  title={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
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
