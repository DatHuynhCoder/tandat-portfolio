import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "education", "skills"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden bg-white">
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <div className="flex-1 md:flex-17 overflow-y-scroll scroll-smooth p-4 md:p-6 space-y-20">
        <About />
        <Projects />
        <Education />
        <Skills />
      </div>
    </div>
  );
}