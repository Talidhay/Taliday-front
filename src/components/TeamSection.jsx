import React from "react";

const TeamSection = () => {
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
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ color: "#8F2901" }}
          >
            <span>The People Behind Talidhay</span>
          </h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            Talidhay is made possible by a passionate team of volunteers,
            organizers, and community builders. United by shared values and a
            heart for service, our officers and members work together to turn
            small acts into meaningful change—one initiative at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-gray-100 text-center flex flex-col items-center"
            >
              <div className="w-full mb-6">
                <img
                  src={`/images/team/${member.name
                    .charAt(0)
                    .toUpperCase()}.jpg`}
                  alt={member.name}
                  className="w-full aspect-square object-cover rounded-xl border-2 border-yellow-700 bg-yellow-100"
                  style={{ maxHeight: "220px" }}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className=" leading-relaxed text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-[#4B1E06] via-[#8F2901] to-[#4B1E06] text-white px-10 py-4 rounded-4xl font-bold text-lg hover:from-[#B05C24] hover:via-[#8F2901] hover:to-[#B05C24] transform hover:-translate-y-1 transition duration-300 shadow-lg hover:shadow-xl w-70 max-w-full">
            See All
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
