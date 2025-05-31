import React from 'react';

const facultyMembers = [
  {
    id: 1,
    name: "Prof. Anjali Sharma",
    position: "Faculty Advisor & Conference Director",
    department: "School of International Affairs",
    bio: "Professor Sharma has over 15 years of experience in international relations and has served as a consultant to the United Nations Development Programme.",
    image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Dr. Rajiv Mehta",
    position: "Faculty Advisor",
    department: "School of Law",
    bio: "Dr. Mehta specializes in international law and human rights. He has published extensively on the legal frameworks of international organizations.",
    image: "https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Prof. Sarah Johnson",
    position: "Academic Advisor",
    department: "School of Government and Public Policy",
    bio: "Prof. Johnson's research focuses on global governance and multilateral diplomacy. She previously worked with the World Bank on policy reform projects.",
    image: "https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const secretariatMembers = [
  {
    id: 1,
    name: "Aryan Patel",
    position: "Secretary-General",
    department: "International Relations, 4th Year",
    bio: "Aryan has participated in over 20 MUNs across the country and has served as a chairperson in 8 conferences.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Priya Singh",
    position: "Deputy Secretary-General",
    department: "Political Science, 3rd Year",
    bio: "Priya has been actively involved in MUNs since high school and has won Best Delegate awards at multiple conferences.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Vikram Reddy",
    position: "Director-General",
    department: "Law, 4th Year",
    bio: "Vikram specializes in Security Council simulations and has represented his university at international MUN conferences.",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "Aisha Khan",
    position: "Chief of Staff",
    department: "Economics, 3rd Year",
    bio: "Aisha has extensive experience in conference organization and has previously served as USG for the JGU MUN 2024.",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    name: "Rahul Verma",
    position: "USG - Delegate Affairs",
    department: "Diplomacy, 2nd Year",
    bio: "Rahul has participated in numerous MUNs across Asia and is passionate about making MUN accessible to first-time delegates.",
    image: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    name: "Neha Gupta",
    position: "USG - Logistics",
    department: "Management, 3rd Year",
    bio: "Neha has exceptional organizational skills and has coordinated multiple university-level events successfully.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Faculty = () => {
  return (
    <section id="faculty" className="py-20 bg-gradient-to-br from-white to-slate-100 font-[Merriweather]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            Faculty & Secretariat
          </h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto text-base">
            Meet the dedicated team of faculty advisors and student leaders who make the CU MUN Conference possible.
          </p>
        </div>

        {/* Faculty Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-rose-600 mb-10 text-center">
            Faculty Advisors
          </h3>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {facultyMembers.map(member => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transform transition duration-500 hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-60 w-full object-cover rounded-t-xl"
                />
                <div className="p-5">
                  <h4 className="text-xl text-rose-700 font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-rose-500 font-medium">{member.position}</p>
                  <p className="text-sm text-gray-500 italic">{member.department}</p>
                  <p className="text-sm text-gray-700 mt-3">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secretariat Section */}
        <div>
          <h3 className="text-2xl font-bold text-rose-600 mb-10 text-center ">
            Secretariat
          </h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {secretariatMembers.map(member => (
              <div
                key={member.id}
                className="flex bg-white rounded-xl shadow-md hover:shadow-lg transition duration-500 hover:scale-[1.02]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-1/3 object-cover rounded-l-xl"
                />
                <div className="w-2/3 p-4">
                  <h4 className="text-lg text-rose-700 font-bold">{member.name}</h4>
                  <p className="text-sm text-rose-500 font-medium">{member.position}</p>
                  <p className="text-xs text-gray-500 italic mb-2">{member.department}</p>
                  <p className="text-sm text-gray-700 line-clamp-3">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
