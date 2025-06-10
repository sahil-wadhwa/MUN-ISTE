// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";
// import "./navbar.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     // { name: "About", href: "/about" },
//     { name: "Committees", href: "/committees" },
//     { name: "Schedule", href: "/schedule" },
//     { name: "Registration", href: "/registration" },
//     { name: "Faculty", href: "/faculty" },
//     // { name: "Gallery", href: "/gallery" },
//     // { name: "FAQ", href: "/faq" },
//   ];

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
//       }`}
//     >
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-end pl-10 md:pl-16">
//               <span
//                 className={`text-xl md:text-2xl font-bold ${
//                   scrolled
//                     ? "text-red-600 hover:text-white"
//                     : "text-white hover:text-red-400"
//                 }`}
//               >
//                 <div className="text-red-600 flex items-end">
//                   <img
//                     src="/assets/cumun_logo.png"
//                     alt="Logo"
//                     style={{ width: "50px", height: "50px" }}
//                     className={`mr-5 ${
//                       scrolled ? "ml-[5vw] transition-all duration-500" : ""
//                     }`}
//                   />
//                   <div> CUMUN</div>
//                   <span
//                     className={`ml-2 text-sm md:text-base font-semibold transition-colors duration-300 ${
//                       scrolled
//                         ? "text-white hover:text-black duration-500"
//                         : "text-black hover:text-white duration-500"
//                     }`}
//                   >
//                     Conference 2025
//                   </span>
//                 </div>
//               </span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-6">
//             {navLinks.map((link) =>
//               link.isAnchor ? (
//                 // In-page anchor stays <a>
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className={`font-medium transition-colors duration-200 ${
//                     scrolled
//                       ? "text-black hover:text-red-600"
//                       : "text-black hover:text-red-600 "
//                   }`}
//                 >
//                   {link.name}
//                 </a>
//               ) : (
//                 <Link
//                   key={link.name}
//                   to={link.href}
//                   className={`font-medium transition-colors duration-200 ${
//                     scrolled
//                       ? "text-black hover:text-red-600"
//                       : "text-black hover:text-red-600 "
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               )
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className={`p-2 rounded-md focus:outline-none ${
//                 scrolled ? "text-red-600" : "text-black"
//               }`}
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 transition-all duration-300">
//             <div className="flex flex-col space-y-3">
//               {navLinks.map((link) =>
//                 link.isAnchor ? (
//                   <a
//                     key={link.name}
//                     href={link.href}
//                     className="font-medium text-red-600 hover:text-red-600"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {link.name}
//                   </a>
//                 ) : (
//                   <Link
//                     key={link.name}
//                     to={link.href}
//                     className="font-medium text-red-600 hover:text-red-600"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {link.name}
//                   </Link>
//                 )
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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
    { name: "Registration", href: "/registration" },
    { name: "Faculty", href: "/faculty" },
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
