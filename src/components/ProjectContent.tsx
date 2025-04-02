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
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="mb-10">
        <button
          onClick={() => navigate(-1)}
          className="text-Lg font-bold py-2 hover:scale-110 hover:transition-all"
        >
          ◀ Back to Projects
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

      <div className="flex flex-wrap gap-3 mt-5 mb-10">
        {techStack.map((tech, i) => (
          <div key={i}>
            {techIcons[tech as keyof typeof techIcons] || <span>{tech}</span>}
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-10">
        <img
          src={banner}
          alt={title}
          className="rounded-xl w-full max-w-[90vw] object-cover"
        />
      </div>
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
        />
      </div>
      {link && (
        <div className="flex justify-center">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="relative inline-flex group mt-4">
              <div
                className={`absolute transform hover:scale-105 active:translate-y-1 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r ${
                  theme === 'light'
                    ? ' from-[#44BCFF] via-[#FF44EC] to-[#FF675E]'
                    : ' from-[#f9d10b] via-[#f4b310] to-[#f9d10b]'
                }`}
              ></div>
              <button
                className={`Btn text-white px-4 py-2 font-semibold rounded-xl relative z-10 ${
                  theme === 'light' ? 'bg-gray-800 ' : 'bg-yellow-400/50'
                }`}
              >
                View Project
              </button>
            </div>
          </a>
        </div>
      )}
    </div>
  )
}

export default ProjectContent
