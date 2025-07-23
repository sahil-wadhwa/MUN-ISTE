"use client";

import { useState, useEffect } from "react";
import {
  ChevronDown,
  Code,
  Palette,
  Megaphone,
  Users,
  DollarSign,
  BookOpen,
  Newspaper,
  Crown,
  Shield,
  Star,
  Zap,
  Sparkles,
  Mail,
  Phone,
} from "lucide-react";

const secretariatBoard = [
  {
    id: 1,
    name: "Sahil Wadhwa",
    position: "Secretary General",
    department: "",
    bio: "Leading the conference with vision and dedication, ensuring excellence in every aspect of the MUN experience.",
    image: "/assets/sahil.jpg",
    icon: Crown,
  },
  {
    id: 2,
    name: "Yatin Berry",
    position: "Deputy Secretary General",
    department: "",
    bio: "Supporting the Secretary General in strategic planning and operational oversight.",
    image: "/assets/Yatin Berry.jpg",
    icon: Star,
  },
  {
    id: 3,
    name: "Srishti Nautiyal",
    position: "Director General",
    department: "",
    bio: "Overseeing committee operations and ensuring seamless conference execution.",
    image: "/assets/Srishti.JPG",
    icon: Sparkles,
  },
  {
    id: 4,
    name: "Jatin Mittal",
    position: "Deputy Director General",
    department: "",
    bio: "Coordinating between committees and ensuring seamless operational excellence.",
    image: "/assets/Jatin Mittal.png",
    icon: Zap,
  },
];

const advisorBoard = [
  {
    id: 5,
    name: "Animesh",
    position: "Advisor to Secretariat",
    department: "",
    bio: "Providing strategic guidance and mentorship to ensure the highest standards of conference execution.",
    image: "/assets/ani.jpg",
    icon: Shield,
  },
];


const usgPositions = [
  {
    id: 1,
    name: "Dinky Khurrana",
    position: "USG Delegate Affairs",
    department: "",
    bio: "Managing delegate experience and ensuring smooth committee proceedings.",
    image: "/assets/Dinky.jpg",
    icon: Users,
  },
  {
    id: 2,
    name: "Shreyanshi Soor",
    position: "USG Delegate Affairs",
    department: "",
    bio: "Managing delegate experience and ensuring smooth committee proceedings.",
    image: "/assets/Shreyanshi.jpg",
    icon: Users,
  },
  {
    id: 3,
    name: "Tanisha Goyal",
    position: "USG Outreach and Marketing",
    department: "",
    bio: "Building partnerships and expanding conference reach through strategic marketing.",
    image: "/assets/Tanisha Goyal_.jpg",
    icon: Megaphone,
  },
  {
    id: 4,
    name: "Krishnam Gupta",
    position: "USG Finance",
    department: "",
    bio: "Managing conference budget and financial operations with precision.",
    image: "/assets/Krishnam Gupta.jpg",
    icon: DollarSign,
  },
  {
    id: 5,
    name: "Amit Kumar",
    position: "USG Training and Workshop",
    department: "",
    bio: "Conducting delegate training sessions and educational workshops.",
    image: "/assets/Amit Kumar.png",
    icon: BookOpen,
  },
  {
    id: 6,
    name: "Avleenjot Kaur",
    position: "USG Public Relations and Media",
    department: "",
    bio: "Managing media relations and public communications for the conference.",
    image: "/assets/Avleen.jpg",
    icon: Newspaper,
  },
  {
    id: 7,
    name: "Khushi",
    position: "USG Press and Journalism",
    department: "",
    bio: "Overseeing press coverage and journalistic documentation of proceedings.",
    image: "/assets/Khushi.jpg",
    icon: Newspaper,
  },
  {
    id: 8,
    name: "Abhay Bansal",
    position: "USG IT/Tech",
    department: "",
    bio: "Managing technical infrastructure and digital systems for the conference.",
    image: "/assets/Abhay Bansal.jpg",
    icon: Code,
  },
];

const departments = [
  {
    id: "creatives",
    name: "Creatives Department",
    icon: Palette,
    lead: {
      name: "Aditi Anand",
      position: "USG Creatives",
      department: "",
      image: "/assets/Aditi Anand .jpg",
    },
    team: [
      {
        name: "Anjani",
        position: "Creative Designer",
        department: "Design Team",
        image: "/assets/Anjani thakur_.jpg",
      },
      {
        name: "Soham",
        position: "Visual Content Creator",
        department: "Design Team",
        image: "/assets/SOHAM THAKER.png",
      },
    ],
  },
  {
    id: "tech",
    name: "Technology Department",
    icon: Code,
    lead: {
      name: "Gaurav Thakur",
      position: "Web Developer",
      department: "Tech Team",
      image: "/assets/Gaurav Thakur.jpg",
    },
    team: [
      {
        name: "Abhay Bansal",
        position: "USG IT/Tech",
        department: "",
        image: "/assets/Abhay Bansal.jpg",
      },
      {
        name: "Piyush",
        position: "Web Developer",
        department: "Tech Team",
        image: "/assets/Piyush Aggarwal_.jpg",
      },
    ],
  },
  {
    id: "outreach",
    name: "Outreach & Marketing",
    icon: Megaphone,
    lead: {
      name: "Tanisha Goyal",
      position: "USG Outreach and Marketing",
      department: "",
      image: "/assets/Tanisha Goyal_.jpg",
    },
    team: [
      {
        name: "Jay Thakur",
        position: "Outreach Coordinator",
        department: "Outreach Team",
        image: "/assets/Jay.png",
      },
      {
        name: "Prashant",
        position: "Partnership Manager",
        department: "Outreach Team",
        image: "/assets/Prashant.png",
      },
    ],
  },
];

const OrganizationalStructure = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [expandedDept, setExpandedDept] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleDepartment = (deptId: string) => {
    setExpandedDept(expandedDept === deptId ? null : deptId);
  };

  const MemberCard = ({
    member,
    index,
    size = "large",
  }: {
    member: any;
    index: number;
    size?: "large" | "default" | "small";
  }) => {
    const IconComponent = member.icon;

    const sizeClasses = {
      large: "p-8",
      default: "p-6",
      small: "p-4",
    };

    const imageHeights = {
      large: "h-90",
      default: "h-56",
      small: "h-48",
    };

    const iconSizes = {
      large: "w-8 h-8",
      default: "w-6 h-6",
      small: "w-5 h-5",
    };

    return (
      <div
        className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-red-100 hover:border-red-300 cursor-pointer transform hover:-translate-y-2 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
        onClick={() => setSelectedMember(member)}
      >
        {/* Card Header with Full Image */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <div className={`${imageHeights[size]} relative`}>
            <img
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

            {/* Icon Badge */}
            {IconComponent && (
              <div className="absolute top-4 right-4 bg-red-600 rounded-full p-3 shadow-lg">
                <IconComponent className={`${iconSizes[size]} text-white`} />
              </div>
            )}

            {/* Status Badge */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
              Active
            </div>

            {/* Name Overlay for better visibility */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3
                className={`font-bold text-white mb-1 drop-shadow-lg ${
                  size === "large"
                    ? "text-2xl"
                    : size === "small"
                    ? "text-lg"
                    : "text-xl"
                }`}
              >
                {member.name}
              </h3>
              <p
                className={`text-white/90 font-semibold drop-shadow ${
                  size === "large" ? "text-lg" : "text-base"
                }`}
              >
                {member.position}
              </p>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className={sizeClasses[size]}>
          <div className="text-center">
            <div className="mb-4">
              <p className="text-gray-500 text-sm">{member.department}</p>
            </div>

            {member.bio && (
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {member.bio}
              </p>
            )}

            {/* Action Buttons */}
            <div className="flex justify-center space-x-2 pt-4 border-t border-gray-100">
              <button className="flex items-center space-x-1 px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors text-sm">
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </button>
              <button className="flex items-center space-x-1 px-3 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-red-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
          <div className="text-center"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        {/* Executive Board */}
        {/* Secretariat Main Line */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px bg-red-300 flex-1 max-w-20 sm:max-w-32"></div>
              <h1 className="px-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600">
                Secretariat
              </h1>
              <div className="h-px bg-red-300 flex-1 max-w-20 sm:max-w-32"></div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The core leadership team driving coordination and strategic
              excellence of the conference.
            </p>
          </div>

          {/* Row of 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {secretariatBoard.map((member, index) => (
              <MemberCard
                key={member.id}
                member={member}
                index={index}
                size="large"
              />
            ))}
          </div>
        </section>
        {/* Deputy Board */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px bg-red-300 flex-1 max-w-20 sm:max-w-32"></div>
              <h2 className="px-6 text-2xl sm:text-3xl font-bold text-red-600">
                Advisory Board
              </h2>
              <div className="h-px bg-red-300 flex-1 max-w-20 sm:max-w-32"></div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guiding strategic direction and ensuring operational excellence at
              the executive level.
            </p>
          </div>

          <div className="w-full flex justify-center">
            <div className="w-full max-w-sm">
              {advisorBoard.map((member, index) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  index={index}
                  size="large"
                />
              ))}
            </div>
          </div>
        </section>

        {/* USG Positions */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px bg-red-300 flex-1 max-w-20 sm:max-w-32"></div>
              <h2 className="px-6 text-2xl sm:text-3xl font-bold text-red-600">
                Under Secretary Generals
              </h2>
              <div className="h-px bg-red-300 flex-1 max-w-20 sm:max-w-32"></div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized leaders managing specific departments and ensuring
              seamless conference operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {usgPositions.map((member, index) => (
              <MemberCard
                key={member.id}
                member={member}
                index={index}
                size="large"
              />
            ))}
          </div>
        </section>

        {/* Department Teams */}
        <section>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px bg-red-300 flex-1 max-w-20 sm:max-w-32"></div>
              <h2 className="px-6 text-2xl sm:text-3xl font-bold text-red-600">
                Department Teams
              </h2>
              <div className="h-px bg-red-300 flex-1 max-w-20 sm:max-w-32"></div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated teams working behind the scenes to bring the conference
              vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => {
              const IconComponent = dept.icon;
              const isExpanded = expandedDept === dept.id;

              return (
                <div
                  key={dept.id}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-red-100 overflow-hidden ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${800 + index * 150}ms` }}
                >
                  {/* Department Header */}
                  <div
                    className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 cursor-pointer hover:from-red-700 hover:to-red-800 transition-all duration-300"
                    onClick={() => toggleDepartment(dept.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{dept.name}</h3>
                          <p className="text-red-100 text-sm">
                            {dept.team.length + 1} Members
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Department Lead */}
                  <div className="p-6 border-b border-red-50 bg-red-25">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img
                          src={dept.lead.image || "/placeholder.svg"}
                          alt={dept.lead.name}
                          className="w-16 h-16 rounded-full object-cover ring-4 ring-red-100"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                          <IconComponent className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800">
                          {dept.lead.name}
                        </h4>
                        <p className="text-red-600 font-semibold text-sm">
                          {dept.lead.position}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {dept.lead.department}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          Lead
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Team Members */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6">
                      <h5 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4 flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        Team Members
                      </h5>
                      <div className="space-y-4">
                        {dept.team.map((member, memberIndex) => (
                          <div
                            key={memberIndex}
                            className="flex items-center space-x-4 p-4 rounded-xl hover:bg-red-50 transition-all duration-300 cursor-pointer border border-transparent hover:border-red-200"
                            onClick={() =>
                              setSelectedMember({
                                ...member,
                                department: dept.name,
                              })
                            }
                          >
                            <img
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              className="w-12 h-12 rounded-full object-cover ring-2 ring-red-100"
                            />
                            <div className="flex-1">
                              <h6 className="font-semibold text-gray-800">
                                {member.name}
                              </h6>
                              <p className="text-red-600 text-sm font-medium">
                                {member.position}
                              </p>
                              <p className="text-gray-500 text-xs">
                                {member.department}
                              </p>
                            </div>
                            <div className="flex space-x-2">
                              <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors">
                                <Mail className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative max-w-lg w-full bg-white rounded-2xl shadow-2xl border border-red-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 hover:bg-red-200 transition-colors z-10"
            >
              ×
            </button>

            {/* Modal Header */}
            <div className="relative h-48 bg-gradient-to-br from-red-500 to-red-700 rounded-t-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <img
                    src={selectedMember.image || "/placeholder.svg"}
                    alt={selectedMember.name}
                    className="w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-lg"
                  />
                  {selectedMember.icon && (
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <selectedMember.icon className="w-4 h-4 text-red-600" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedMember.name}
                </h2>
                <p className="text-red-600 font-semibold text-lg mb-1">
                  {selectedMember.position}
                </p>
                <p className="text-gray-500 mb-4">
                  {selectedMember.department}
                </p>

                {selectedMember.bio && (
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {selectedMember.bio}
                  </p>
                )}

                {/* Contact Actions */}
                <div className="flex justify-center space-x-4">
                  <button className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>Send Email</span>
                  </button>
                  <button className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors">
                    <Phone className="w-5 h-5" />
                    <span>Call</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganizationalStructure;
