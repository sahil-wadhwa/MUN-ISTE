import React, { useEffect, useRef, useState } from "react";
import { Facebook, Twitter, Linkedin,Instagram, Mail, MapPin, Phone } from "lucide-react";
import * as THREE from "three";
import { motion } from "framer-motion";

const Footer = () => {
  const vantaRef = useRef(null);
  const [vantaEffect1, setVantaEffect1] = useState(null);

  useEffect(() => {
    const loadVanta = async () => {
      const VANTA = await import("vanta/dist/vanta.cells.min");
      if (!vantaEffect1) {
        setVantaEffect1(
          VANTA.default({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            color1: 0xd070f,
            color2: 0xeb2a30,
          })
        );
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect1) vantaEffect1.destroy();
    };
  }, [vantaEffect1]);

  const handleInstagramRedirect = () => {
    const instagramURL =
      "https://www.instagram.com/cumodelunitednations/?igsh=MXJxdGptOHBmaDNyag%3D%3D#";
    window.open(instagramURL, "_blank");
  };

  return (
    <>
      <footer
        ref={vantaRef}
        className="text-white font-[Merriweather,serif] text-sm lg:text-base"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {/* About Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5 tracking-wide">
                ISTE Student Chapter
              </h3>
              <p className="mb-4 sm:mb-6 text-red-100 leading-relaxed font-light text-xs sm:text-sm">
                The ISTE Student Chapter at Chandigarh University fosters
                innovation, collaboration, and technical excellence among
                students by organizing workshops, seminars, and projects.
              </p>
              <div className="flex space-x-4 sm:space-x-6 items-center">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-white hover:text-red-300 transition-colors duration-300"
                >
                  <Facebook size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-white hover:text-red-300 transition-colors duration-300"
                >
                  <Twitter size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://www.instagram.com/cumodelunitednations/?igsh=MXJxdGptOHBmaDNyag%3D%3D#"
                  taaria-label="Instagram"
                  className="text-white hover:text-red-300 transition-colors duration-300"
                >
                 <Instagram size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/cu-modelunitednations/posts/?feedView=all"
                  aria-label="LinkedIn"
                  className="text-white hover:text-red-300 transition-colors duration-300"
                >
                  <Linkedin size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5 tracking-wide">
                Quick Links
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-red-100 font-medium text-xs sm:text-sm">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/" },
                  { label: "Events", href: "/schedule" },
                  { label: "Team", href: "/faculty" },
                  { label: "Gallery", href: "/" },
                  { label: "Contact", href: "/" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="hover:text-white transition-colors duration-300"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5 tracking-wide">
                Resources
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-red-100 font-medium text-xs sm:text-sm">
                {[
                  "Workshops",
                  "Seminars",
                  "Projects",
                  "Publications",
                  "Achievements",
                  "FAQs",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5 tracking-wide">
                Contact Us
              </h3>
              <ul className="space-y-3 sm:space-y-5 text-red-100 font-light text-xs sm:text-sm leading-relaxed">
                <li className="flex items-start">
                  <MapPin
                    size={18}
                    className="mr-2 sm:mr-3 text-red-300 flex-shrink-0 mt-0.5 sm:mt-1"
                  />
                  <address className="not-italic">
                    Chandigarh University, NH-05, Ludhiana-Chandigarh State Hwy,
                    Gharuan, Punjab 140413, India
                  </address>
                </li>
                <li className="flex items-center">
                  <Phone
                    size={18}
                    className="mr-2 sm:mr-3 text-red-300 flex-shrink-0"
                  />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center">
                  <Mail
                    size={18}
                    className="mr-2 sm:mr-3 text-red-300 flex-shrink-0"
                  />
                  <a
                    href="mailto:iste@cumail.in"
                    className="hover:text-white transition-colors duration-300 underline"
                  >
                    iste@cumail.in
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-red-500 text-center">
            <p className="text-red-200 text-xs sm:text-sm font-light tracking-wide select-none">
              &copy; {new Date().getFullYear()} ISTE Student Chapter, Chandigarh
              University. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Instagram Button */}
      <motion.div
        className="fixed bottom-7 right-7 sm:bottom-6 sm:right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
      >
        <motion.button
          onClick={handleInstagramRedirect}
          className="p-0 m-0 border-none bg-transparent focus:outline-none"
          aria-label="Visit Instagram"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="/assets/insta.svg"
            alt="Instagram"
            width={44}
            height={44}
            className="w-[34px] h-[34px] sm:w-[40px] sm:h-[40px] drop-shadow-lg"
          />
        </motion.button>
      </motion.div>
    </>
  );
};

export default Footer;
