import React from "react";

const TeamPageOfficers = () => {
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
    <section id="teampageofficers" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h3
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ color: "#8F2901" }}
          >
            The Officers
          </h3>
          <p className="text-m text-gray-700 leading-relaxed max-w-5xl mx-auto">
            Guiding with heart, leading with purpose. Talidhay’s officers are
            the core decision-makers and facilitators who ensure every effort
            aligns with our mission. They help keep the vision clear, the plans
            organized, and the community inspired.
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
                  src={`/images/team/${member.name.charAt(0).toUpperCase()}.jpg`}
                  alt={member.name}
                  className="w-full aspect-square object-cover rounded-xl border-2 border-yellow-700 bg-white"
                  style={{ maxHeight: "220px" }}
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h4>
                <p className="text-indigo-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="leading-relaxed text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPageOfficers;
