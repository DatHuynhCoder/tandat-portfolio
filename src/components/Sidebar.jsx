import { Link } from "react-scroll";
import UserPic from "../assets/myimg.jpg";

const Sidebar = () => {
  return (
    <div className="flex-3 h-full bg-green-700 text-white p-6 space-y-4">
      <img src={UserPic} alt="My profile pic" className="rounded-full border-8 border-amber-200"/>
      <nav className="flex flex-col space-y-4 mt-8">
        <a href="#about" className="cursor-pointer text-2xl text-center">ABOUT</a>
        <a href="#projects" className="cursor-pointer text-2xl text-center">PROJECTS</a>
        <a href="#education" className="cursor-pointer text-2xl text-center">EDUCATION</a>
        <a href="#skills" className="cursor-pointer text-2xl text-center">SKILLS</a>
      </nav>
    </div>
  );
};

export default Sidebar;
