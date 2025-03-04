import '../App.css'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from './ThemeContext'
import { FaAws, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa'
import { TbBrandCSharp } from 'react-icons/tb'
import {
  SiTypescript,
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
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const animationProps = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  }

  const { theme } = useTheme()

  const techIcons = {
    EJS: <SiEjs size={30} />,
    'Express.js': <SiExpress size={30} />,
    TypeScript: <SiTypescript size={30} />,
    PostgreSQL: <SiPostgresql size={30} />,
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
      onClick={onClose}
    >
      <motion.div
        {...animationProps}
        className={`w-[85%] sm:w-[60%] rounded-2xl shadow-lg overflow-hidden ${
          theme === 'light' ? 'bg-gray-200/80' : 'bg-black/70'
        }`}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col items-center p-5">
          <img
            src={image}
            alt="project-image"
            className="w-full max-w-[90%] mb-10 rounded-xl object-cover hover:scale-105 active:translate-y-1"
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
              <p className="!font-extrabold">Tech Stack : </p>
              <div>{renderTechIcons(techStack)}</div>
            </div>
          </div>

          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button
                className={`relative px-6 py-2 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105 active:translate-y-1 ${
                  theme === 'light'
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-600 text-white'
                }`}
              >
                View Project
              </button>
            </a>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectModal
