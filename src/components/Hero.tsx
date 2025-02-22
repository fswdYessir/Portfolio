import heroImg from '../assets/heroImg.png'
import { GrGithub, GrLinkedin } from 'react-icons/gr'
import { useTheme } from '../common/ThemeContext'

function Hero() {
  const { theme, toggleTheme } = useTheme()

  const githubIcon =
    theme === 'light' ? (
      <GrGithub size={20} color="black" />
    ) : (
      <GrGithub size={20} color="white" />
    )

  const linkedinIcon =
    theme === 'light' ? (
      <GrLinkedin size={20} color="black" />
    ) : (
      <GrLinkedin size={20} color="white" />
    )

  // Scroll to Projects Section
  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen gap-15 text-center p-10 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50">
        <div className="w-1 h-16 bg-gray-700"></div>

        <div className="w-36 h-20 bg-gray-700 rounded-t-full relative"></div>
      </div>
      {/* 삼각형 전등 */}
      <div
        className={`absolute top-20 left-1/2 transform -translate-x-1/2 w-150 h-[300px] opacity-0 transition-all duration-700 pointer-events-none z-30 ${
          theme === 'dark' ? 'opacity-80' : 'opacity-0'
        }`}
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,223,0,0.7), rgba(255,223,0,0.3), rgba(255,223,0,0))',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          filter: 'blur(30px)',
        }}
      />
      {/* 둥근 전등 */}
      {/* <div
        className={`absolute top-24 w-80 h-80 opacity-60 transition-all duration-700 ${
          theme === 'dark'
            ? 'bg-[radial-gradient(circle,_rgba(255,223,0,0.6)_0%,_rgba(255,223,0,0)_70%)]'
            : 'bg-transparent'
        }`}
      /> */}
      <div className="relative flex flex-col items-center md:items-start z-10">
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className={`absolute top-0 right-0 flex items-center w-10 h-5 rounded-full transition-colors ${
            theme === 'light' ? 'bg-gray-700' : 'bg-gray-400'
          }`}
        >
          <div
            className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
              theme === 'light' ? 'translate-x-5' : 'translate-x-1'
            }`}
          />
        </button>

        <img
          className="w-48 md:w-72 lg:w-96"
          src={heroImg}
          alt="Profile picture"
        />
      </div>
      <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-left z-10">
        <h1 className="text-3xl font-bold">Sol Kim</h1>
        <h2 className="text-xl text-gray-600">Full Stack Developer</h2>

        <span className="flex gap-6">
          <a
            href="https://github.com/devBySol"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            {githubIcon}
          </a>
          <a
            href="https://www.linkedin.com/in/yeseol/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            {linkedinIcon}
          </a>
        </span>

        <p className="max-w-[24ch] text-gray-700">
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>

        <button
          onClick={handleScrollToProjects}
          className="bg-indigo-600 text-white font-bold rounded-2xl w-40 h-12 text-lg shadow-md transition-transform transform hover:scale-105 active:translate-y-1"
        >
          PROJECTS
        </button>
      </div>
    </section>
  )
}

export default Hero
