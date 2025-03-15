import '../App.css'
import 'animate.css'
import { useEffect, useState } from 'react'
import { useTheme } from './ThemeContext'
import { FaAws, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa'
import { VscAzure } from 'react-icons/vsc'
import { TbBrandCSharp } from 'react-icons/tb'
import {
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiExpress,
  SiEjs,
  SiExpo,
  SiReact,
  SiFirebase,
  SiSupabase,
  SiNextdotjs,
  SiStrapi,
  SiVercel,
  SiTailwindcss,
  SiVite,
  SiDotnet,
  SiWordpress,
  SiMysql,
  SiRender,
  SiFigma,
} from 'react-icons/si'

interface ProjectModalProps {
  title: string
  description: string
  image: string
  link?: string
  techStack: string[]
  onClose: () => void
}

const ProjectModal = ({
  title,
  description,
  techStack,
  image,
  link,
  onClose,
}: ProjectModalProps) => {
  const { theme } = useTheme()
  const [closing, setClosing] = useState(false)
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleClose = () => {
    setClosing(true)
    setTimeout(() => onClose(), 500)
  }

  const techIcons = {
    EJS: <SiEjs size={30} />,
    Express: <SiExpress size={30} />,
    TypeScript: <SiTypescript size={30} />,
    JavaScript: <SiJavascript size={30} />,
    PostgreSQL: <SiPostgresql size={30} />,
    MySQL: <SiMysql size={30} />,
    HTML: <FaHtml5 size={30} />,
    CSS: <FaCss3Alt size={30} />,
    AWS: <FaAws size={30} />,
    Vercel: <SiVercel size={30} />,
    Expo: <SiExpo size={30} />,
    'React Native': <SiReact size={30} />,
    Firebase: <SiFirebase size={30} />,
    Supabase: <SiSupabase size={30} />,
    'Next.js': <SiNextdotjs size={30} />,
    Strapi: <SiStrapi size={30} />,
    'Tailwind CSS': <SiTailwindcss size={30} />,
    React: <SiReact size={30} />,
    Vite: <SiVite size={30} />,
    'C#': <TbBrandCSharp size={30} />,
    'ASP.NET': <SiDotnet size={30} />,
    Bootstrap: <FaBootstrap size={30} />,
    WordPress: <SiWordpress size={30} />,
    Azure: <VscAzure size={30} />,
    Render: <SiRender size={30} />,
    Figma: <SiFigma size={30} />,
  }

  const renderTechIcons = (techStack: string[]) => {
    return (
      <div className="techIcons flex flex-wrap space-x-3">
        {techStack.map(
          (tech, idx) =>
            techIcons[tech as keyof typeof techIcons] || (
              <span key={idx} className="">
                {tech}
              </span>
            )
        )}
      </div>
    )
  }

  return (
    <div
      className="fixed inset-0 flex justify-center items-center backdrop-blur-md z-50"
      onClick={handleClose}
    >
      <div
        className={`w-[85%] sm:w-[60%] rounded-2xl shadow-lg overflow-hidden ${
          closing
            ? 'animate__animated animate__zoomOut'
            : 'animate__animated animate__zoomIn'
        }
         ${theme === 'light' ? 'bg-gray-200/80' : 'bg-black/70'}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col items-center p-5">
          <img
            src={image}
            alt="project-image"
            className="w-full max-w-[90%] mb-10 rounded-xl object-cover"
          />
          <div className="project-info flex flex-col items-center p-5 mb-5">
            <h3
              className={`text-4xl font-extrabold text-left w-[80%] ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`}
            >
              {title}
            </h3>

            <p
              className={`text-left leading-relaxed w-[80%] ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`}
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className="flex flex-wrap items-center justify-start w-[80%]">
              {/* <p className="!font-extrabold">Tech Stack : </p> */}
              <div>{renderTechIcons(techStack)}</div>
            </div>
          </div>

          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <div className="relative inline-flex group">
                <div
                  className={`absolute transition-transform transform hover:scale-105 active:translate-y-1 ${
                    theme === 'light'
                      ? 'transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'
                      : 'transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#fea101] via-[#f4e410] to-[#f9aa0b] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'
                  }`}
                ></div>
                <button
                  className={`Btn text-white ${
                    theme === 'light' ? 'bg-gray-800 ' : 'bg-yellow-400/50'
                  }`}
                >
                  View Project
                </button>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
