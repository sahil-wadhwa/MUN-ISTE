"use client";

import type React from "react";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import {
  Trophy,
  Award,
  Star,
  Sparkles,
  Crown,
  Medal,
  Gift,
} from "lucide-react";

interface AwardData {
  position: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  podiumHeight: string;
  delay: number;
}

const awards: AwardData[] = [
  {
    position: 1,
    title: "Best Delegate",
    description:
      "Outstanding performance in diplomatic negotiations, exceptional research, and exemplary representation of assigned country's interests.",
    icon: <Crown className="w-12 h-12" />,
    gradient: "from-yellow-400 via-yellow-500 to-yellow-600",
    podiumHeight: "h-64",
    delay: 0.2,
  },
  {
    position: 2,
    title: "High Commendation",
    description:
      "Excellent diplomatic skills, strong research foundation, and effective contribution to committee discussions and resolutions.",
    icon: <Trophy className="w-10 h-10" />,
    gradient: "from-gray-300 via-gray-400 to-gray-500",
    podiumHeight: "h-48",
    delay: 0.4,
  },
  {
    position: 3,
    title: "Special Mention",
    description:
      "Notable participation, good understanding of issues, and meaningful contributions to the committee proceedings.",
    icon: <Medal className="w-8 h-8" />,
    gradient: "from-amber-600 via-amber-700 to-amber-800",
    podiumHeight: "h-40",
    delay: 0.6,
  },
];

export default function AwardsCertifications() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAward, setSelectedAward] = useState<AwardData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-bounce">
          <Sparkles className="w-6 h-6 text-red-400 opacity-70" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <Star className="w-8 h-8 text-red-500 opacity-60" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-bounce delay-1000">
          <Award className="w-5 h-5 text-red-600 opacity-50" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-pulse delay-500">
          <Sparkles className="w-4 h-4 text-red-400 opacity-40" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-screen-xl mx-auto px-8 text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center mb-6">
              <Gift className="w-8 h-8 text-red-600 mr-3 animate-pulse" />
              <h1 className="text-4xl md:text-6xl font-bold text-red-600">
                Awards & Recognition
              </h1>
              <Gift className="w-8 h-8 text-red-600 ml-3 animate-pulse" />
            </div>
            <div className="w-32 h-1 bg-yellow-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
              Celebrating Excellence in Model United Nations
            </p>

            {/* Prize Pool Banner */}
            <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-2xl p-8 max-w-lg mx-auto shadow-2xl transform hover:scale-105 transition-all duration-300 mb-1">
              <div className="flex items-center justify-center mb-4">
                <Trophy className="w-8 h-8 text-white mr-3 animate-bounce" />
                <span className="text-white font-bold text-2xl">
                  Total Prize Pool
                </span>
                <Trophy className="w-8 h-8 text-white ml-3 animate-bounce" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                ₹1,50,000
              </div>
              <div className="text-lg text-yellow-100">
                One Lakh Fifty Thousand
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podium Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            {/* Mobile Layout - Stacked */}
            <div className="block lg:hidden space-y-6">
              {/* 1st Place */}
              {/* 1st Place - Center (Highest) */}
              <div
                className={`transform transition-all duration-1000 delay-100 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ width: "280px" }}
              >
                <div
                  className="bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-t-3xl p-6 text-center relative overflow-visible cursor-pointer group hover:shadow-2xl transition-all duration-500"
                  style={{ height: "280px" }}
                  onClick={() => setSelectedAward(awards[0])}
                >
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                      WINNER
                    </div>
                  </div>
                  <div className="relative z-10 flex flex-col justify-center h-full pt-4">
                    <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="text-yellow-600 animate-bounce">
                        {awards[0].icon}
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">
                      1st
                    </div>
                    <div className="text-white font-semibold text-lg">
                      {awards[0].title}
                    </div>
                  </div>
                </div>
                <div className="h-6 bg-gradient-to-r from-yellow-800 to-yellow-600 rounded-b-lg shadow-lg"></div>
              </div>

              {/* 2nd Place */}
              <div
                className={`transform transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
              >
                <div
                  className="bg-gradient-to-t from-gray-600 to-gray-400 rounded-3xl p-8 text-center relative overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-500 mx-auto max-w-sm"
                  onClick={() => setSelectedAward(awards[1])}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-700 to-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="text-gray-600 animate-pulse">
                        {awards[1].icon}
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">
                      2nd
                    </div>
                    <div className="text-white font-semibold text-lg">
                      {awards[1].title}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3rd Place */}
              <div
                className={`transform transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
              >
                <div
                  className="bg-gradient-to-t from-amber-800 to-amber-600 rounded-3xl p-8 text-center relative overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-500 mx-auto max-w-sm"
                  onClick={() => setSelectedAward(awards[2])}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="text-amber-700 animate-pulse">
                        {awards[2].icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      3rd
                    </div>
                    <div className="text-white font-semibold text-base">
                      {awards[2].title}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Podium Style */}
            <div className="hidden lg:block">
              <div className="flex items-end justify-center gap-8">
                {/* 2nd Place - Left */}
                <div
                  className={`transform transition-all duration-1000 delay-300 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-20 opacity-0"
                  }`}
                  style={{ width: "280px" }}
                >
                  <div
                    className="bg-gradient-to-t from-gray-600 to-gray-400 rounded-t-3xl p-6 text-center relative overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-500"
                    style={{ height: "200px" }}
                    onClick={() => setSelectedAward(awards[1])}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-700 to-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col justify-center h-full">
                      <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <div className="text-gray-600 animate-pulse">
                          {awards[1].icon}
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">
                        2nd
                      </div>
                      <div className="text-white font-semibold text-base">
                        {awards[1].title}
                      </div>
                    </div>
                  </div>
                  <div className="h-6 bg-gradient-to-r from-gray-800 to-gray-600 rounded-b-lg shadow-lg"></div>
                </div>

                {/* 1st Place - Center (Highest) */}
                {/* 1st Place */}
                <div
                  className={`transform transition-all duration-1000 delay-100 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-20 opacity-0"
                  }`}
                >
                  <div
                    className="bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-3xl p-8 text-center relative overflow-visible cursor-pointer group hover:shadow-2xl transition-all duration-500 mx-auto w-[320px]"
                    onClick={() => setSelectedAward(awards[0])}
                  >
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                      <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                        WINNER
                      </div>
                    </div>
                    <div className="relative z-10 pt-4">
                      <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <div className="text-yellow-600 animate-bounce">
                          {awards[0].icon}
                        </div>
                      </div>
                      <div className="text-5xl font-bold text-white mb-2">
                        1st
                      </div>
                      <div className="text-white font-semibold text-xl">
                        {awards[0].title}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3rd Place - Right */}
                <div
                  className={`transform transition-all duration-1000 delay-500 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-20 opacity-0"
                  }`}
                  style={{ width: "280px" }}
                >
                  <div
                    className="bg-gradient-to-t from-amber-800 to-amber-600 rounded-t-3xl p-6 text-center relative overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-500"
                    style={{ height: "160px" }}
                    onClick={() => setSelectedAward(awards[2])}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col justify-center h-full">
                      <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <div className="text-amber-700 animate-pulse">
                          {awards[2].icon}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">
                        3rd
                      </div>
                      <div className="text-white font-semibold text-sm">
                        {awards[2].title}
                      </div>
                    </div>
                  </div>
                  <div className="h-6 bg-gradient-to-r from-amber-900 to-amber-700 rounded-b-lg shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
              Recognition Categories
            </h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Each award recognizes different levels of excellence in diplomatic
              skills, research quality, and committee participation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {awards.map((award, index) => (
              <div
                key={award.position}
                className={`transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="bg-white rounded-2xl p-6 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300 border border-gray-200">
                  <div
                    className={`bg-gradient-to-r ${award.gradient} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}
                  >
                    <div className="text-white">{award.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                    {award.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
            Celebrating Diplomatic Excellence
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            These awards recognize the outstanding delegates who demonstrated
            exceptional skills in diplomacy, research, and international
            relations during our Model United Nations conference.
          </p>
          

        </div>
      </section>

      {/* Modal */}
      {selectedAward && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative transform animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setSelectedAward(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition-colors"
            >
              ✕
            </button>

            <div className="p-8">
              <div
                className={`bg-gradient-to-r ${selectedAward.gradient} rounded-2xl p-6 text-center mb-6`}
              >
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <div className="text-gray-700">{selectedAward.icon}</div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedAward.title}
                </h2>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Award Criteria
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {selectedAward.description}
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    What This Award Represents:
                  </h4>
                  <ul className="text-sm text-gray-600 text-left space-y-1">
                    <li>• Excellence in diplomatic negotiations</li>
                    <li>• Outstanding research and preparation</li>
                    <li>• Effective communication and leadership</li>
                    <li>• Meaningful contribution to resolutions</li>
                  </ul>
                </div>

                <button
                  onClick={() => setSelectedAward(null)}
                  className="bg-red-600 text-white py-2 px-6 rounded-md font-medium hover:bg-red-500 transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
