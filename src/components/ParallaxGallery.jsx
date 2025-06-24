import React from "react";
import { useNavigate } from "react-router-dom";

const ParallaxGallery = () => {
  const navigate = useNavigate();

  const sections = [
    {
      image: "/assets/gallery2.jpeg",
      title: "Explore Committees",
      desc: "Explore the committees and their agendas.",
      buttonText: "Explore Now",
      path: "/committees",
    },
    {
      image: "/assets/mun33.jpg",
      title: "See the Schedule",
      desc: "See the 3 Day Itinerary.",
      buttonText: "Go to Itinerary",
      path: "/schedule",
    },
    {
      image: "/assets/mun2.jpg",
      title: "Delegate Registrations",
      desc: "Fill out the delegate registration form.",
      buttonText: "Registration",
      path: "/registration",
    },
  ];

  return (
    <div className="w-screen h-full relative overflow-hidden">
      {sections.map((section, index) => (
        <div
          key={index}
          className="relative w-screen h-screen bg-fixed bg-center bg-cover filter brightness-110 contrast-105 saturate-110"
          style={{
            backgroundImage: `url(${section.image})`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-60 z-10" />

          {/* Foreground Content */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
              {section.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-xl px-2">
              {section.desc}
            </p>
            <button
              className="mt-6 w-auto px-6 py-3 text-base sm:text-lg border-2 border-white text-white rounded-lg hover:bg-red-700 transition duration-300 flex items-center justify-center"
              onClick={() => navigate(section.path)}
            >
              {section.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParallaxGallery;