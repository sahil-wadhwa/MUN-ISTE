import React, { useEffect, useRef, useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import * as THREE from "three";

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
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                color1: 0xd070f,
                color2: 0xeb2a30
              })
            );
          }
        };
    
        loadVanta();
    
        return () => {
          if (vantaEffect1) vantaEffect1.destroy();
        };
      }, [vantaEffect1]);
    
  return (
    <footer ref={vantaRef} className="text-white font-[Merriweather,serif] text-sm lg:text-base">
      <div className="container mx-auto px-8 lg:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-5 tracking-wide">ISTE Student Chapter</h3>
            <p className="mb-6 text-red-100 leading-relaxed font-light">
              The ISTE Student Chapter at Chandigarh University fosters innovation, collaboration, and technical excellence among students by organizing workshops, seminars, and projects.
            </p>
            <div className="flex space-x-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-white hover:text-red-300 transition-colors duration-300"
                  aria-label={`Link to ${Icon.name}`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5 tracking-wide">Quick Links</h3>
            <ul className="space-y-3 text-red-100 font-medium">
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
            <h3 className="text-xl font-semibold mb-5 tracking-wide">Resources</h3>
            <ul className="space-y-3 text-red-100 font-medium">
              {[
                "Workshops",
                "Seminars",
                "Projects",
                "Publications",
                "Achievements",
                "FAQs",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-5 tracking-wide">Contact Us</h3>
            <ul className="space-y-5 text-red-100 font-light text-sm leading-relaxed">
              <li className="flex items-start">
                <MapPin size={22} className="mr-3 text-red-300 flex-shrink-0 mt-1" />
                <address className="not-italic">
                  Chandigarh University, NH-05, Ludhiana-Chandigarh State Hwy, Gharuan, Punjab 140413, India
                </address>
              </li>
              <li className="flex items-center">
                <Phone size={22} className="mr-3 text-red-300 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={22} className="mr-3 text-red-300 flex-shrink-0" />
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

        <div className="mt-16 pt-8 border-t border-red-500 text-center">
          <p className="text-red-200 text-sm font-light tracking-wide select-none">
            &copy; {new Date().getFullYear()} ISTE Student Chapter, Chandigarh University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;