import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBook } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faSquareInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Donate = () => {
  return (
    <section id="donate" className="py-5 pt-40 pb-20 bg-white">
      <div className="text-center mb-8 px-4 sm:px-0">
        <h2
          className="text-4xl sm:text-5xl font-bold mb-6"
          style={{ color: "#8F2901" }}
        >
          <span>Every Contribution Counts</span>
        </h2>
        <p className="text-base leading-relaxed max-w-2xl mx-auto">
          Your donation helps us reach more communities, support more children,
          and bring our projects to life. With every peso, you help us weave
          kindness, opportunity, and lasting change—one act of generosity at a
          time.
        </p>
        <p className="pt-5 text-base leading-relaxed max-w-2xl mx-auto">
          You may send your monetary donations by scanning the GCash QR code
          below. For in-kind donations or other forms of support, feel free to
          communicate with us through our official email or any of our social
          media channels listed below.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex items-center justify-center h-full">
            <img
              src="/images/image 27.jpg"
              alt="Talidhay Community"
              className="w-full h-full object-cover rounded-3xl border border-white/20 shadow-lg"
            />
          </div>
          <div className="flex items-center h-full">
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-[#FAD374] rounded-2xl flex items-center justify-center backdrop-blur-md">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-3xl text-[#8F2901]"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[#8F2901]">
                    Gmail
                  </h4>
                  <p className="text-gray-500">
                    Network with like-minded individuals
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-[#FAD374] rounded-2xl flex items-center justify-center backdrop-blur-md">
                  <FontAwesomeIcon
                    icon={faBook}
                    className="text-3xl text-[#8F2901]"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[#8F2901]">
                    Facebook
                  </h4>
                  <p className="text-gray-500">
                    Access exclusive workshops and resources
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-[#FAD374] rounded-2xl flex items-center justify-center backdrop-blur-md">
                  <FontAwesomeIcon
                    icon={faSquareInstagram}
                    className="text-3xl text-[#8F2901]"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[#8F2901]">
                    Instagram
                  </h4>
                  <p className="text-gray-500">
                    Make a real difference in your community
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-[#FAD374] rounded-2xl flex items-center justify-center backdrop-blur-md">
                  <FontAwesomeIcon
                    icon={faTiktok}
                    className="text-3xl text-[#8F2901]"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[#8F2901]">
                    Tiktok
                  </h4>
                  <p className="text-gray-500">
                    Make a real difference in your community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
