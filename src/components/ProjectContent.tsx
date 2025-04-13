import '../App.css'
import 'animate.css'
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
  SiTailwindcss,
  SiVite,
  SiDotnet,
  SiWordpress,
  SiMysql,
  SiPhp,
} from 'react-icons/si'
import { useTheme } from './ThemeContext'
import { useNavigate } from 'react-router-dom'
import ProjectDescription from './ProjectDescription'
import ScrollAnimation from './ScrollAnimation'

interface ProjectContentProps {
  banner: string
  label: string[]
  title: string
  techStack: string[]
  overview: string
  keyFeatures: string[]
  myContributions?: string[]
  contribution?: { tech: string; percent: number }[]
  challenges: string
  reflection: string
  extraImages?: string[]
  videoUrl?: string
  aspect?: string
  link?: string
}

const ProjectContent = ({
  banner,
  label,
  title,
  techStack,
  overview,
  keyFeatures,
  myContributions,
  contribution,
  challenges,
  reflection,
  extraImages,
  videoUrl,
  aspect,
  link,
}: ProjectContentProps) => {
  const { theme } = useTheme()

  const labelColor: { [key: string]: string } = {
    Personal: 'bg-indigo-500',
    Group: 'bg-rose-500',
    Client: 'bg-lime-600',
  }

  const techIcons = {
    EJS: <SiEjs size={26} />,
    Express: <SiExpress size={26} />,
    TypeScript: <SiTypescript size={26} />,
    JavaScript: <SiJavascript size={26} />,
    PHP: <SiPhp size={26} />,
    PostgreSQL: <SiPostgresql size={26} />,
    MySQL: <SiMysql size={26} />,
    HTML: <FaHtml5 size={26} />,
    CSS: <FaCss3Alt size={26} />,
    AWS: <FaAws size={26} />,
    Expo: <SiExpo size={26} />,
    'React Native': <SiReact size={26} />,
    Firebase: <SiFirebase size={26} />,
    Supabase: <SiSupabase size={26} />,
    'Next.js': <SiNextdotjs size={26} />,
    Strapi: <SiStrapi size={26} />,
    'Tailwind CSS': <SiTailwindcss size={26} />,
    React: <SiReact size={26} />,
    Vite: <SiVite size={26} />,
    'C#': <TbBrandCSharp size={26} />,
    'ASP.NET': <SiDotnet size={26} />,
    Bootstrap: <FaBootstrap size={26} />,
    WordPress: <SiWordpress size={26} />,
    Azure: <VscAzure size={26} />,
  }
  const navigate = useNavigate()

  return (
    <div
      className={`px-6 py-10 max-w-6xl mx-auto ${
        theme === 'light' ? 'text-black' : 'text-white'
      }`}
    >
      <ScrollAnimation>
        <div className="mb-10">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-base font-medium hover:scale-110 hover:transition-all"
          >
            <span className="text-xl -ml-1">‹</span> Back to Projects
          </button>
        </div>
        <div className="mb-3 flex flex-wrap gap-2">
          {label.map((lbl, i) => (
            <span
              key={i}
              className={`px-4 py-1 text-sm font-bold text-white rounded-full ${
                labelColor[lbl] || 'bg-gray-800'
              }`}
            >
              {lbl}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-extrabold">{title}</h1>

        <div className="flex flex-wrap gap-3 mt-3 mb-10">
          {techStack.map((tech, i) => (
            <div
              key={i}
              className="relative group hover:scale-110 transition-transform duration-300"
            >
              {techIcons[tech as keyof typeof techIcons] || <span>{tech}</span>}

              <span className="absolute text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </ScrollAnimation>
      <ScrollAnimation delay={100}>
        <div className="flex justify-center mb-10">
          <img
            src={banner}
            alt={title}
            className="rounded-xl w-full max-w-[90vw] object-cover"
          />
        </div>
      </ScrollAnimation>

      <div className="flex mb-12">
        <ProjectDescription
          overview={overview}
          keyFeatures={keyFeatures}
          myContributions={myContributions}
          contribution={contribution}
          challenges={challenges}
          reflection={reflection}
          extraImages={extraImages}
          videoUrl={videoUrl}
          aspect={aspect}
        />
      </div>
      <ScrollAnimation delay={500}>
        {link && (
          <div className="flex justify-center">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <div className="relative inline-flex group mt-4">
                <div
                  className={`absolute transform hover:scale-105 active:translate-y-1 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r ${
                    theme === 'light'
                      ? ' from-[#44BCFF] via-[#FF44EC] to-[#FF675E]'
                      : '  from-[#fbd621] via-[#f9b712] to-[#f69000]'
                  }`}
                ></div>
                <button
                  className={`Btn flex items-center text-white px-5 py-2 font-semibold rounded-xl relative z-10 ${
                    theme === 'light' ? 'bg-gray-800 ' : 'bg-yellow-400/40'
                  }`}
                >
                  <span className="text-red-500 text-xs p-1">●</span>
                  Live Demo
                </button>
              </div>
            </a>
          </div>
        )}
      </ScrollAnimation>
    </div>
  )
}

export default ProjectContent
