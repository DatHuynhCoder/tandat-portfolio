const Skills = () => {
  return (
    <section id="skills" className="pb-20 md:pb-40">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Skills</h2>
      <div className="text-xl md:text-2xl mb-3">Programming Languages & Tools:</div>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        <i className="devicon-javascript-plain colored text-5xl md:text-7xl"></i>
        <i className="devicon-nodejs-plain-wordmark colored text-5xl md:text-7xl"></i>
        <i className="devicon-express-original colored text-5xl md:text-7xl"></i>
        <i className="devicon-mongodb-plain-wordmark colored text-5xl md:text-7xl"></i>
        <i className="devicon-postman-plain colored text-5xl md:text-7xl"></i>
        <i className="devicon-mysql-plain-wordmark colored text-5xl md:text-7xl"></i>
        <i className="devicon-react-original colored text-5xl md:text-7xl"></i>
        <i className="devicon-tailwindcss-original colored text-5xl md:text-7xl"></i>
        <i className="devicon-redux-original colored text-5xl md:text-7xl"></i>
        <i className="devicon-html5-plain colored text-5xl md:text-7xl"></i>
        <i className="devicon-css3-plain colored text-5xl md:text-7xl"></i>
        <svg className="w-12 h-12 md:w-20 md:h-20 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.907 11.998 10.332 9.23a.9.9 0 0 1-.16-.037l-.018-.007v6.554c0 .017.008.034.01.051l2.388-2.974 3.355-.82Z" />
          <path d="m11.463 4.054 5.579 3.323A4.02 4.02 0 0 1 18.525 9c.332.668.47 1.414.398 2.155a3.07 3.07 0 0 1-.745 1.65 3.108 3.108 0 0 1-1.55.951c-.022.007-.045.005-.07.01-.062.03-.126.057-.191.08l-2.72.667-1.992 2.48c-.18.227-.41.409-.67.534.047.034.085.077.137.107a2.05 2.05 0 0 0 1.995.035c.592-.33 2.15-1.201 4.636-2.892l.28-.19c1.328-.895 3.616-2.442 3.967-4.215a9.94 9.94 0 0 0-1.713-4.154 10.027 10.027 0 0 0-3.375-2.989 10.107 10.107 0 0 0-8.802-.418c1.162.287 2.287.704 3.354 1.243Z" />
          <path d="M5.382 17.082v-6.457a3.7 3.7 0 0 1 .45-1.761 3.733 3.733 0 0 1 1.238-1.34 3.915 3.915 0 0 1 3.433-.245c.176.03.347.084.508.161l5.753 2.856c.082.05.161.105.236.165a2.128 2.128 0 0 0-.953-1.455l-5.51-3.284c-1.74-.857-3.906-1.523-5.244-1.097a9.96 9.96 0 0 0-2.5 3.496 9.895 9.895 0 0 0 .283 8.368 9.973 9.973 0 0 0 2.73 3.322 17.161 17.161 0 0 1-.424-2.729Z" />
          <path d="m19.102 16.163-.272.183c-2.557 1.74-4.169 2.64-4.698 2.935a4.083 4.083 0 0 1-2 .53 3.946 3.946 0 0 1-1.983-.535 3.788 3.788 0 0 1-1.36-1.361 3.752 3.752 0 0 1-.51-1.85 1.812 1.812 0 0 1-.043-.26V9.143c0-.024.009-.046.01-.07-.056.02-.11.043-.162.07a1.796 1.796 0 0 0-.787 1.516v6.377a10.67 10.67 0 0 0 1.113 4.27 10.11 10.11 0 0 0 8.505-.53 10.022 10.022 0 0 0 3.282-2.858 9.936 9.936 0 0 0 1.75-3.97 19.615 19.615 0 0 1-2.845 2.216Z" />
        </svg>
        <i className="devicon-reactrouter-plain colored text-5xl md:text-7xl"></i>
        <i className="devicon-reactbootstrap-original colored text-5xl md:text-7xl"></i>
        <i className="devicon-git-plain colored text-5xl md:text-7xl"></i>
        <i className="devicon-github-plain colored text-5xl md:text-7xl"></i>
        <i className="devicon-vercel-original colored text-5xl md:text-7xl"></i>
        <img className="w-12 h-12 md:w-20 md:h-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="w-12 h-12 md:w-20 md:h-20" alt="Figma" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" className="w-12 h-12 md:w-20 md:h-20" alt="Vite" />
      </div>
    </section>
  )
}

export default Skills;