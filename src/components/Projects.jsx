import storyforest from '../assets/storyforest.png'
import napolizza from '../assets/napolizza.png'
import winenglish from '../assets/WinEnglish.png'

const Projects = () => {
  return (
    <section id="projects" className="border-b-2 pb-40">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="text-2xl mb-3">Some of my latest projects:</div>

      <div className="flex flex-wrap gap-4">
        <div className="w-full sm:w-[48%] lg:w-[32%] cursor-pointer relative group transition-all duration-300 hover:scale-110 z-10 hover:z-20">
          <a href="https://storyforest.online/" target='_blank'>
            <img
              src={storyforest}
              alt="Storyforest"
              className="w-full h-[200px] object-cover rounded-md shadow-md"
            />

            <div className="absolute inset-0 bg-gray-800 bg-opacity-70 rounded-md opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex flex-col justify-center p-3 text-white">
              <h3 className="font-bold text-lg mb-1">Story Forest</h3>
              <p className="text-sm">Read manga and novels online with personalized features, advanced search, and real-time reading enhancements!</p>
            </div>
          </a>
        </div>

        <div className="w-full sm:w-[48%] lg:w-[32%] cursor-pointer relative group transition-all duration-300 hover:scale-110 z-10 hover:z-20">
          <a href="https://youtu.be/dQtoV4cK7fA" target='_blank'>
            <img
              src={napolizza}
              alt="Storyforest"
              className="w-full h-[200px] object-cover rounded-md shadow-md"
            />

            <div className="absolute inset-0 bg-gray-800 bg-opacity-70 rounded-md opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex flex-col justify-center p-3 text-white">
              <h3 className="font-bold text-lg mb-1">Napolizza</h3>
              <p className="text-sm">Easily book a table at your favorite pizza restaurant – fast, simple, and convenient.</p>
            </div>
          </a>
        </div>

        <div className="w-full sm:w-[48%] lg:w-[32%] cursor-pointer relative group transition-all duration-300 hover:scale-110 z-10 hover:z-20">
          <a href="https://youtu.be/BGLhsobvUCo?si=anbG_cEExsYeCUgz" target='_blank'>
            <img
              src={winenglish}
              alt="Storyforest"
              className="w-full h-[200px] object-cover rounded-md shadow-md"
            />

            <div className="absolute inset-0 bg-gray-800 bg-opacity-70 rounded-md opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex flex-col justify-center p-3 text-white">
              <h3 className="font-bold text-lg mb-1">Win Englist</h3>
              <p className="text-sm">Boost your TOEIC score with real test simulations</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
