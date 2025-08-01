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
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoList.length);
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = false;
        audioRef.current
          .play()
          .catch((e) => console.warn("Play error after unmuting:", e));
      } else {
        audioRef.current.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((e) => {
        console.error("Video autoplay error:", e);
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.muted = false;
      audioRef.current.play().catch((e) => {
        console.warn(
          "Audio autoplay blocked. User interaction may be required:",
          e
        );
      });
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Audio */}
      <audio ref={audioRef} src="/assets/audio.mp3" loop preload="auto" />

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

      {/* Professional Floating Music Toggle Button */}
      <div className="absolute bottom-20 right-6 z-30">
        <button
          onClick={toggleAudio}
          className="text-white hover:text-gray-300 transition-colors duration-200"
          title={isMuted ? "Unmute Music" : "Mute Music"}
        >
          {isMuted ? (
            // Speaker Muted Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.5 12a4.5 4.5 0 00-4.5-4.5v9a4.5 4.5 0 004.5-4.5zm-7.4-3.6H5v7.2h4.1L14 20.2V3.8l-4.9 4.6zM18.7 5.3l-1.4 1.4 2.3 2.3-2.3 2.3 1.4 1.4 2.3-2.3 2.3 2.3 1.4-1.4-2.3-2.3 2.3-2.3-1.4-1.4-2.3 2.3-2.3-2.3z" />
            </svg>
          ) : (
            // Speaker Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14 3.23v17.54c0 .44-.54.66-.85.35L8.59 16H5a1 1 0 01-1-1V9a1 1 0 011-1h3.59l4.56-5.12c.31-.31.85-.09.85.35zM16.5 12a4.5 4.5 0 00-1.38-3.24l1.06-1.06a6 6 0 010 8.6l-1.06-1.06A4.5 4.5 0 0016.5 12zm2.5 0a7 7 0 00-2.13-4.95l1.06-1.06a8.5 8.5 0 010 12.02l-1.06-1.06A7 7 0 0019 12z" />
            </svg>
          )}
        </button>
      </div>

      {/* Ticker Bar */}
      <div className="absolute bottom-0 z-30 w-full bg-white border-y border-gray-300 py-2">
        <div className="overflow-hidden w-full whitespace-nowrap relative h-8 sm:h-10">
          <div className="absolute animate-marquee flex text-black opacity-[0.6] text-sm sm:text-base md:text-lg font-medium gap-10 px-4">
            <span>🚀 Welcome to Technicia'25!</span>
            <span>🌟 Register now for the Hackathon</span>
            <span>🎤 Keynote by global leaders</span>
            <span>🎵 Live music night with top artists</span>
            <span>🧠 Innovation meets impact at CU!</span>
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
