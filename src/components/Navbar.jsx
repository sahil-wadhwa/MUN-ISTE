import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Committees", href: "/committees" },
    { name: "Schedule", href: "/schedule" },
    { name: "Awards", href: "/awards" },
    { name: "Registration", href: "/registration" },
    { name: "Team", href: "/faculty" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <img
                src="/assets/cumun_logo.png"
                alt="Logo"
                className={`w-10 h-10 md:w-12 md:h-12 mr-3 transition-all duration-500 ${
                  scrolled ? "ml-0" : "md:ml-8"
                }`}
              />
              <div className="flex flex-col md:flex-row md:items-end">
                <span className="text-xl md:text-2xl font-bold text-red-600">
                  CUMUN
                </span>
                <span
                  className={`text-xs md:text-sm font-semibold md:ml-2 transition-colors duration-300 ${
                    scrolled ? "text-gray-700" : "text-gray-700"
                  }`}
                >
                  Conference 2025
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium transition-colors duration-200 ${
                  scrolled
                    ? "text-gray-800 hover:text-red-600"
                    : "text-gray-800 hover:text-red-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none transition-colors ${
                scrolled ? "text-red-600" : "text-gray-800"
              }`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
          }`}
        >
          <div className="flex flex-col space-y-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="font-medium text-gray-800 hover:text-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
