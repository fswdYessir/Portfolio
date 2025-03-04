import heroImg from '../assets/heroImg.png'
import { GrGithub, GrLinkedin } from 'react-icons/gr'
import { useTheme } from '../components/ThemeContext'
import '../App.css'

function Hero() {
  const { theme, toggleTheme } = useTheme()

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-[65vh] sm:gap-15 gap-5 text-center p-10 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50">
        <div className="w-1 h-8 sm:h-16 bg-gray-700 "></div>

        <div className="sm:w-36 sm:h-20 w-24 h-10 bg-gray-700 rounded-t-full relative"></div>
      </div>

      <div
        className={`absolute sm:top-20 top-10 left-1/2 transform -translate-x-1/2 w-150 h-[300px] opacity-0 transition-all duration-700 pointer-events-none z-30 ${
          theme === 'dark' ? 'opacity-80' : 'opacity-0'
        }`}
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,223,0,0.7), rgba(255,223,0,0.3), rgba(255,223,0,0))',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          filter: 'blur(30px)',
        }}
      />
      <div className="relative flex flex-col items-center md:items-start pt-30 z-10">
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className={`absolute top-30 right-0 flex items-center w-8 h-4 sm:w-10 sm:h-5 rounded-full transition-colors   hover:cursor-pointer ${
            theme === 'light' ? 'bg-gray-700' : 'bg-gray-500'
          }`}
        >
          <div
            className={`sm:w-4 sm:h-4 w-3 h-3 rounded-full bg-white shadow-md transform transition-transform ${
              theme === 'light'
                ? 'sm:translate-x-5 translate-x-4'
                : 'translate-x-1'
            }`}
          />
        </button>
        <img
          className="w-48 md:w-72 lg:w-86"
          src={heroImg}
          alt="Profile picture"
        />
      </div>
      <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left z-10 pt-30">
        <h1 className="font-bold">Sol Kim</h1>
        <h2>Full Stack Developer</h2>

        <span className="flex gap-6">
          <a
            href="https://github.com/devBySol"
            className="hover:scale-110 transition-transform"
          >
            <GrGithub size={24} className="gitIcon" />
          </a>
          <a
            href="https://www.linkedin.com/in/yeseol/"
            className="hover:scale-110 transition-transform"
          >
            <GrLinkedin size={24} className="linkedinIcon" />
          </a>
        </span>

        <p className="max-w-[40ch]">
          Problem-solving full-stack developer focused on collaboration and
          building user-friendly web applications."
        </p>
        <div className="relative inline-flex group">
          <div
            className={`absolute transition-transform transform hover:scale-105 active:translate-y-1 ${
              theme === 'light'
                ? 'transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'
                : ''
            }`}
          ></div>
          <button
            onClick={handleScrollToContact}
            className={`Btn text-white ${
              theme === 'light' ? 'bg-gray-800 ' : 'bg-gray-400/50'
            }`}
          >
            CONTACT
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
