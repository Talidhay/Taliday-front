import React from "react";

const TeamPageMembers = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Julia Marie Ladrera",
      role: "President",
      description: "Visionary leader with 10+ years in community development",
    },
    {
      id: 2,
      name: "Tania Virgino",
      role: "Vice President (External)",
      description: "Expert in sustainable development and social impact",
    },
    {
      id: 3,
      name: "Marylyne Vargas",
      role: "Secretary",
      description: "Innovation specialist with expertise in digital solutions",
    },
    {
      id: 4,
      name: "Angel Macabale",
      role: "Treasurer",
      description: "Passionate about building strong community connections",
    },
    {
      id: 5,
      name: "Cyril Lagdameo",
      role: "Auditor",
      description: "Ensuring smooth operations and project execution",
    },
    {
      id: 6,
      name: "Mark Ryan Benlot",
      role: "P.R.O",
      description: "Creative storyteller promoting community initiatives",
    },
  ];

  return (
    <section id="teampagemembers" className="pt-20 bg-white pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h3
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ color: "#8F2901" }}
          >
            The Members
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            The heart of our movement. Talidhay’s members are the lifeblood of
            our initiatives—active, compassionate, and collaborative. From ideas
            to action, they bring energy and soul to everything we do.
          </p>
        </div>

        {/* Officers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#FAD374] p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-gray-100 text-center flex flex-col items-center"
            >
              <div className="w-full mb-6">
                <img
                  src={`/images/team/${member.name
                    .charAt(0)
                    .toUpperCase()}.jpg`}
                  alt={member.name}
                  className="w-full aspect-square object-cover rounded-xl border-2 border-yellow-700 bg-white"
                  style={{ maxHeight: "220px" }}
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h4>
                <p className="text-indigo-600 font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPageMembers;
