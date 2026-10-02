import React from "react";
import { Link } from "react-router-dom";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Julia Marie Ladrera",
      role: "President",
      description: "Strategic Planning Committee (SPC) - Head",
    },
    {
      id: 2,
      name: "Tania Virgino",
      role: "Vice President (External)",
      description: "Media and Documentation Committee (MDC) - Head",
    },
    {
      id: 3,
      name: "Marylyne Vargas",
      role: "Secretary",
      description: "Visual Content Committee (VCC) - Head",
    },
    {
      id: 4,
      name: "Angel Macabale",
      role: "Treasurer",
      description: "Logistics Committee (LOC) - Head",
    },
    {
      id: 5,
      name: "Cyril Lagdameo",
      role: "Auditor",
      description: "SPC and MDC Member",
    },
    {
      id: 6,
      name: "Mark Ryan Benlot",
      role: "P.R.O",
      description: "LOC Member",
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ color: "#8F2901" }}
          >
            <span>The People Behind Talidhay</span>
          </h2>
          <p className="text-s leading-relaxed max-w-4xl mx-auto">
            A movement made possible by passionate volunteers, organizers, and
            community builders who work together to turn small acts into
            meaningful change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#FAD374] p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-gray-100 text-center flex flex-col items-center"
            >
              {/* <div className="w-full mb-6">
                <img
                  src={`/images/team/${member.name
                    .charAt(0)
                    .toUpperCase()}.jpg`}
                  alt={member.name}
                  className="w-full aspect-square object-cover rounded-xl border-2 border-yellow-700 bg-white"
                  style={{ maxHeight: "220px" }}
                />
              </div> */}
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-2" style={{ color: "#8F2901" }}>
                  {member.name}
                </h4>
                <p className="text-amber-800 font-medium mb-4">
                  {member.role}
                </p>
                <p className="leading-relaxed text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/teampage"
            className="inline-block bg-gradient-to-r from-[#4B1E06] via-[#8F2901] to-[#4B1E06] text-white px-10 py-4 rounded-4xl font-bold text-lg hover:from-[#B05C24] hover:via-[#8F2901] hover:to-[#B05C24] transform hover:-translate-y-1 transition duration-300 shadow-lg hover:shadow-xl w-70 max-w-full"
          >
            See More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
