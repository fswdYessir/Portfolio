import '../App.css'
import 'animate.css'
import { FaAws, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa'
import { VscAzure } from 'react-icons/vsc'
import { TbBrandCSharp } from 'react-icons/tb'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  TooltipItem,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

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
} from 'react-icons/si'
import { useTheme } from './ThemeContext'
import { useNavigate } from 'react-router-dom'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface ProjectContentProps {
  title: string
  label: string
  description: string
  image: string
  link?: string
  techStack: string[]
  contribution?: { tech: string; percent: number }[]
}

const ProjectContent = ({
  title,
  label,
  description,
  image,
  link,
  techStack,
  contribution,
}: ProjectContentProps) => {
  const { theme } = useTheme()

  const labelColor: { [key: string]: string } = {
    Personal: 'bg-purple-800',
    Group: 'bg-pink-800',
    Client: 'bg-green-800',
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
  }
  const navigate = useNavigate()
  const renderBarChart = (
    contribution: { tech: string; percent: number }[]
  ) => {
    const data = {
      labels: contribution.map(c => c.tech),
      datasets: [
        {
          label: 'My Contribution',
          data: contribution.map(c => c.percent),
          backgroundColor: [
            '#6b7280',
            '#9ca3af',
            '#d1d5db',
            '#e5e7eb',
            '#cbd5e1',
            '#94a3b8',
            '#64748b',
          ],
          barThickness: 26,
        },
      ],
    }

    const options: ChartOptions<'bar'> = {
      indexAxis: 'y',
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context: TooltipItem<'bar'>) => `${context.parsed.x}%`,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: theme === 'light' ? '#1f2937' : '#f9fafb',
            callback: (val: string | number) => `${val}%`,
          },
          grid: {
            color: theme === 'light' ? '#e5e7eb' : '#374151',
          },
          max: 100,
          beginAtZero: true,
        },
        y: {
          ticks: {
            color: theme === 'light' ? '#1f2937' : '#f9fafb',
            font: { weight: 'bold' },
          },
          grid: {
            color: theme === 'light' ? '#e5e7eb' : '#374151',
          },
        },
      },
    }

    return (
      <div className="w-full max-w-2xl mx-auto my-4">
        <Bar data={data} options={options} />
      </div>
    )
  }

  return (
    <div
      className={`px-6 py-10 max-w-6xl mx-auto ${
        theme === 'light' ? 'text-black' : 'text-white'
      }`}
    >
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-Lg font-bold px-4 py-2 hover:scale-110 hover:transition-all"
        >
          Back to Projects
        </button>
      </div>

      <div className="flex justify-center mb-10">
        <img
          src={image}
          alt={title}
          className="rounded-xl w-full max-w-[90vw] object-cover"
        />
      </div>

      <div className="mb-3">
        <span
          className={`px-4 py-1 text-sm font-bold text-white rounded-full ${
            labelColor[label] || 'bg-gray-800'
          }`}
        >
          {label} Project
        </span>
      </div>

      <h1 className="text-4xl font-extrabold">{title}</h1>

      <div className="flex flex-wrap gap-3 mt-3 mb-10">
        {techStack.map((tech, i) => (
          <div key={i}>
            {techIcons[tech as keyof typeof techIcons] || <span>{tech}</span>}
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-10 mb-12">
        <div className="flex-1 mb-5">
          <h2 className="text-2xl font-bold mb-2">Project Overview</h2>
          <p
            className="text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        {contribution && contribution.length > 0 && (
          <div className="flex-1 max-w-md">{renderBarChart(contribution)}</div>
        )}
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
                className={`Btn text-white px-6 py-2 font-semibold rounded-xl relative z-10 ${
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
