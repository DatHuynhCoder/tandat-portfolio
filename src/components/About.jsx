import { FaAddressCard, FaMapMarkedAlt } from "react-icons/fa";
import react_icon from '../assets/react_icon.png';
import nodejs_icon from '../assets/nodejs_icon.png';
import facebook_icon from '../assets/facebook_icon.png';
import gmail_icon from '../assets/gmail_icon.png';
import github_icon from '../assets/github_icon.png';

const About = () => {
  return (
    <section id="about" className="border-b-2 pb-40">
      <h1 className="text-5xl font-bold mb-4">HUYNH TAN DAT</h1>
      <div className="flex flex-row gap-3">
        <FaAddressCard fontSize={30} color="#34495e" />
        <div className="text-2xl font-medium">Web Developer</div>
      </div>
      <div className="flex flex-row gap-3 mt-4">
        <FaMapMarkedAlt fontSize={30} color="#34495e" />
        <div className="text-2xl font-medium">Linh Trung ward, Ho Chi Minh City, Viet Nam</div>
      </div>
      <div className="mt-4 text-lg bg-green-300 p-2 rounded-3xl mb-2 ml-5">
        <p>Hi, welcome to my profile! 👋</p>
        <p>I'm a <b>third-year student</b> dedicated to building fast and scalable web applications. I'm currently seeking an <b>internship opportunity</b> to gain hands-on experience in real-world software development. Aiming to become a <b>fulltime software engineer</b> within the next two years.</p>
        <p>I'm hardworking, approachable, and always enjoy a good conversation!</p>
      </div>

      <div className="flex flex-row gap-3 items-center mb-2">
        <img src={react_icon} alt="react-icon" className="w-8 h-8" />
        <p className="text-2xl"><strong>Frontend: </strong> I have experience working with <strong>ReactJS, Redux, TailwindCSS, Bootstrap, Axios, Flowbite, React Router and other technologies</strong></p>
      </div>

      <div className="flex flex-row gap-3 items-center mb-3">
        <img src={nodejs_icon} alt="react-icon" className="w-8 h-8" />
        <p className="text-2xl"><strong>Backend: </strong> I have experience working with <strong>NodeJS, ExpressJS, MongoDB, MySQL, Cloudinary and other technologies</strong></p>
      </div>

      {/* Contact */}
      <p className="flex flex-row gap-3 items-center mb-2">
        <img src={gmail_icon} alt="gmail icon" className="w-6 h-6" />
        <a href="mailto:htdat2004@gmail.com" className="underline text-xl hover:text-red-950 underline-offset-6">htdat2004@gmail.com</a>
      </p>

      <p className="flex flex-row gap-3 items-center mb-2">
        <img src={facebook_icon} alt="facebook icon" className="w-6 h-6" />
        <a href="https://www.facebook.com/huynh.tan.at.979563/" className="underline text-xl hover:text-red-950 underline-offset-6">My Facebook</a>
      </p>

      <p className="flex flex-row gap-3 items-center mb-2">
        <img src={github_icon} alt="facebook icon" className="w-6 h-6" />
        <a href="https://github.com/DatHuynhCoder" className="underline text-xl hover:text-red-950 underline-offset-6">My Github</a>
      </p>

      <p>
        <em className="text-2xl font-medium">"If you don't swing, you will never hit a Home run!"</em>
      </p>
    </section>
  )
}

export default About;