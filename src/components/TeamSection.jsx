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
      name: "Jane Smith",
      role: "Program Director",
      description: "Expert in sustainable development and social impact",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Technical Lead",
      description: "Innovation specialist with expertise in digital solutions",
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Community Manager",
      description: "Passionate about building strong community connections",
    },
    {
      id: 5,
      name: "David Brown",
      role: "Operations Manager",
      description: "Ensuring smooth operations and project execution",
    },
    {
      id: 6,
      name: "Emily Davis",
      role: "Marketing Specialist",
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
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
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
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-gray-100 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                {member.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-[#8F2901] via-[#B05C24] to-[#8F2901] text-white px-10 py-4 rounded-4xl font-bold text-lg hover:from-[#B05C24] hover:via-[#8F2901] hover:to-[#B05C24] transform hover:-translate-y-1 transition duration-300 shadow-lg hover:shadow-xl w-70 max-w-full">
            See All
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
