import ProfileLight from '../assets/hero/1.png'
import ProfileDark from '../assets/hero/2.png'
import { GrGithub, GrLinkedin } from 'react-icons/gr'
import { useTheme } from '../components/ThemeContext'
import '../App.css'
import 'animate.css'
import Header from './Header'

function Hero() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Header />
      <section
        id="hero"
        className="relative flex flex-col md:flex-row items-center justify-center min-h-[82vh] sm:gap-15 gap-5 text-center p-10 overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50">
          <div className="w-1 h-12 sm:h-18 bg-gray-600 "></div>

          <div className="sm:w-36 sm:h-20 w-24 h-12 bg-gray-700 rounded-t-full relative"></div>
        </div>

        <div
          className={`absolute sm:top-20 top-15 left-1/2 transform -translate-x-1/2 w-150 h-[350px] opacity-0 transition-all duration-700 pointer-events-none z-30  ${
            theme === 'dark'
              ? 'opacity-80 animate__animated animate__flash duration-25'
              : 'opacity-0'
          }`}
          style={{
            background:
              'linear-gradient(to bottom, rgba(255,223,0,0.9), rgba(255,223,0,0.2), rgba(255,223,0,0))',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            filter: 'blur(30px)',
          }}
        />
        <div className="hero-info relative flex flex-col items-center md:items-start pt-30 z-10 animate__animated animate__fadeIn animate__delay-1s">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`absolute top-30 right-0 flex items-center w-8 h-4 sm:w-10 sm:h-5 rounded-full transition-colors   hover:cursor-pointer ${
              theme === 'light' ? 'bg-yellow-500' : 'bg-gray-500'
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
            className="rounded-t-full w-48 md:w-72 lg:w-86"
            src={theme === 'light' ? ProfileLight : ProfileDark}
            alt="Profile picture"
          />
        </div>
        <div className="flex flex-col gap-3 lg:gap-5 items-center md:items-start text-center md:text-left z-10 pt-5 md:pt-30 lg:pt-35 animate__animated animate__fadeIn animate__delay-1s ml-5">
          <h1 className="font-bold">Sol Kim</h1>
          <h2>Full Stack Developer</h2>

          <span className="flex gap-6">
            <a
              href="https://github.com/fswdYessir"
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

          <p className="max-w-[30ch]">
            I'm a developer who loves solving problems and collaborating with
            teams to build great user experiences.
          </p>
          <div className="relative inline-flex group">
            <div
              className={`absolute transform hover:scale-105 active:translate-y-1 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r ${
                theme === 'light'
                  ? ' from-[#44BCFF] via-[#FF44EC] to-[#FF675E]'
                  : ' from-[#fbd621] via-[#f9b712] to-[#f69000]'
              }`}
            ></div>
            <button
              onClick={() => window.open('resume.pdf', '_blank')}
              className={`Btn text-white ${
                theme === 'light' ? 'bg-gray-800 ' : 'bg-yellow-400/40'
              }`}
            >
              RESUME
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
