import { useState, useEffect } from "react";
import UserPic from "../assets/myimg.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = ({ activeSection, isMobileMenuOpen, toggleMobileMenu }) => {
  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "education", label: "EDUCATION" },
    { id: "skills", label: "SKILLS" },
  ];

  return (
    <>
      {/* Mobile hamburger button */}
      <button 
        onClick={toggleMobileMenu}
        className="md:hidden fixed top-4 right-4 z-50 bg-green-700 text-white p-2 rounded-full shadow-lg"
      >
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile sidebar overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Sidebar content */}
      <div 
        className={`
          fixed md:static top-0 left-0 h-full z-40 md:z-auto
          bg-green-700 text-white 
          w-64 md:w-auto md:flex-3
          p-6 space-y-4
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          shadow-lg
        `}
      >
        <div className="flex justify-center">
          <img 
            src={UserPic} 
            alt="My profile pic" 
            className="rounded-full border-8 border-amber-200 w-40 h-40 object-cover"
          />
        </div>
        
        <nav className="flex flex-col space-y-4 mt-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleLinkClick}
              className={`
                cursor-pointer text-2xl text-center py-2 px-4 transition-all duration-300 relative
                ${activeSection === link.id 
                  ? "text-amber-200 font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-200" 
                  : "hover:text-amber-200"}
              `}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;