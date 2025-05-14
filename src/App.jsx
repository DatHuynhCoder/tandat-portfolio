import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";

export default function App() {
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-17 overflow-y-scroll scroll-smooth p-6 space-y-20">
        <About />
        <Education />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}
