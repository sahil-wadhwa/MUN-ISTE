import React, { useState, useRef, useEffect } from "react";

const Hero = () => {
  const videoList = [
    "/assets/clip2.mp4",
    "/assets/clip3.mp4",
    "/assets/clip4.mp4",
    "/assets/clip5.mp4",
    "/assets/clip6.mp4",
    "/assets/clip7.mp4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoList.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((e) => {
        console.error("Autoplay error:", e);
      });
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        onEnded={handleVideoEnd}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={videoList[currentIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10" />

      {/* Content Layer */}
      <div className="relative z-20 flex flex-col items-center justify-center h-[90vh] pt-[9vh] text-white text-center px-4">
        <img
          src="/assets/cumun_logo.png"
          alt="Logo"
          className="w-28 h-28 sm:w-36 sm:h-36 mb-5"
        />
        <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold">
          <span className="text-red-600">CHANDIGARH</span> UNIVERSITY
        </h1>
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mt-2">
          MODEL UNITED NATIONS
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold mt-1">
          Edition 4.0
        </h3>
        <p className="mt-8 text-lg sm:text-xl md:text-2xl font-medium">
          10th - 12th SEPTEMBER 2025
        </p>
      </div>

      {/* Ticker Bar */}
      <div className="absolute bottom-0 z-30 w-full bg-white border-y border-gray-300 py-2">
        <div className="overflow-hidden w-full whitespace-nowrap relative h-8 sm:h-10">
          <div className="absolute animate-marquee flex text-black text-sm sm:text-base md:text-lg font-medium gap-10 px-4">
            <span>🚀 Welcome to Technicia'25!</span>
            <span>🌟 Register now for the Hackathon</span>
            <span>🎤 Keynote by global leaders</span>
            <span>🎵 Live music night with top artists</span>
            <span>🧠 Innovation meets impact at CU!</span>
            {/* Duplicate for seamless loop */}
            <span>🚀 Welcome to Technicia'25!</span>
            <span>🌟 Register now for the Hackathon</span>
            <span>🎤 Keynote by global leaders</span>
            <span>🎵 Live music night with top artists</span>
            <span>🧠 Innovation meets impact at CU!</span>
          </div>
        </div>

        <div
          className="flex items-center justify-center gap-2 sm:gap-4 mt-1 text-center text-gray-800 font-semibold text-xs sm:text-sm md:text-base tracking-wide"
          style={{
            fontFamily: '"Merriweather", serif',
            letterSpacing: "0.05em",
          }}
        >
          <img
            src="/assets/iste.png"
            alt="ISTE Logo"
            className="h-5 sm:h-6 md:h-7 w-auto"
          />
          <span>PRESENTED BY ISTE STUDENT CHAPTER</span>
          <img
            src="/assets/iste.png"
            alt="CU Logo"
            className="h-5 sm:h-6 md:h-7 w-auto"
          />
        </div>

        {/* Custom Marquee Animation */}
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }

            .animate-marquee {
              animation: marquee 25s linear infinite;
              min-width: 200%;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Hero;
