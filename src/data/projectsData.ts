import { useTranslation } from 'react-i18next'
// import Beep from "../assets/beep/BeepThumbnail.png";
// import BeepImg from "../assets/beep/Beep.png";
import FourSeason from '../assets/fourseason/FourSeasonThumbnail.png'
import FourSeasonImg from '../assets/fourseason/FourSeason.png'
import FourSeasonBooking from '../assets/fourseason/booking.png'
import FourSeasonEmail from '../assets/fourseason/email.png'
// import ChezMari from "../assets/chezmari/ChezMariThumbnail.png";
// import ChezMariImg from "../assets/chezmari/ChezMari.png";
// import ChezMariDemo from "../assets/chezmari/demo.png";
// import Journalist from "../assets/journalist/JournalistThumbnail.png";
// import JournalistImg from "../assets/journalist/Journalist.png";
// import JournalistDemo from "../assets/journalist/demo.png";
import Haimdall from '../assets/haimdall/HaimdallThumbnail.png'
import HaimdallImg from '../assets/haimdall/HaimdallImg.png'
import HaimdallDemo from '../assets/haimdall/demo.png'
import Hrms from '../assets/hrms/HrmsThumbnail.png'
import HrmsImg from '../assets/hrms/HrmsBanner.png'
// import HiltonOriginal from '../assets/hilton/original.png'
// import HiltonNew from '../assets/hilton/new.png'
// import Hilton from '../assets/hilton/HiltonThumbnail.png'
// import HiltonImg from '../assets/hilton/Hilton.png'

export type LabelKey =
  | 'personal'
  | 'group'
  | 'client'
  | 'company'
  | 'professional'

export interface ProjectMeta {
  id: string
  labelKeys: LabelKey[]
  icon: string
  banner: string
  techStack: string[]
  extraImages?: string[]
  videoUrl?: string
  aspect?: string
  link?: string
  bannerCompact?: boolean
}

const projectsMeta: ProjectMeta[] = [
  {
    id: 'the-ke-hrms',
    labelKeys: ['company', 'professional'],
    icon: Hrms,
    banner: HrmsImg,
    bannerCompact: true,
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
  },
  {
    id: 'haimdall-v3',
    labelKeys: ['company', 'professional'],
    icon: Haimdall,
    banner: HaimdallImg,
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    extraImages: [HaimdallDemo],
    aspect: '16/9',
    link: 'https://haimdall3sol.vercel.app/',
  },
  // {
  //   id: 'independent-Journalist',
  //   labelKeys: ['client', 'personal'],
  //   icon: Journalist,
  //   banner: JournalistImg,
  //   techStack: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
  //   extraImages: [JournalistDemo],
  //   aspect: '16/9',
  // },
  // {
  //   id: 'chezmari',
  //   labelKeys: ['client', 'group'],
  //   icon: ChezMari,
  //   banner: ChezMariImg,
  //   techStack: ['WordPress', 'Tailwind CSS', 'CSS', 'PHP'],
  //   extraImages: [ChezMariDemo],
  //   videoUrl: 'https://www.youtube.com/embed/R0dx3OQ5uzM?si=JBO3DqlY4kZrg-ym',
  //   aspect: '16/9',
  // },
  // {
  //   id: 'Beep',
  //   labelKeys: ['group'],
  //   icon: Beep,
  //   banner: BeepImg,
  //   techStack: ['TypeScript', 'React Native', 'Firebase'],
  //   videoUrl: 'https://www.youtube.com/embed/GoaUL_IReU8?si=xGpe0jkKgQZdfnZ_',
  //   aspect: '9/16',
  //   link: 'https://www.beep-safety.com/',
  // },
  {
    id: 'fourSeason',
    labelKeys: ['client', 'personal'],
    icon: FourSeason,
    banner: FourSeasonImg,
    techStack: [
      'TypeScript',
      'Next.js',
      'React',
      'Strapi',
      'PostgreSQL',
      'Tailwind CSS',
    ],
    extraImages: [FourSeasonBooking, FourSeasonEmail],
    link: 'https://4season.vercel.app',
  },
  // {
  //   id: "hilton",
  //   labelKeys: ["personal"],
  //   icon: Hilton,
  //   banner: HiltonImg,
  //   techStack: ["TypeScript", "React", "Vite", "Tailwind CSS"],
  //   extraImages: [HiltonOriginal, HiltonNew],
  //   link: "https://mdia-2025-project3.vercel.app/",
  // },
]

export default projectsMeta

export type Project = ProjectMeta & {
  title: string
  subtitle: string
  overview: string
  keyFeatures: string[]
  myContributions: string[]
  challenges: string
  reflection: string
  contribution?: { tech: string; percent: number }[]
}

type ProjectTranslation = {
  title: string
  subtitle: string
  overview: string
  keyFeatures: string[]
  myContributions: string[]
  challenges: string
  reflection: string
  contribution?: { tech: string; percent: number }[]
}

function toProject(
  meta: ProjectMeta,
  t: ReturnType<typeof useTranslation>['t']
): Project {
  const content = t(`${meta.id}`, {
    returnObjects: true,
  }) as ProjectTranslation
  return { ...meta, ...content }
}

export function useProjects(): Project[] {
  const { t } = useTranslation('projects')
  return projectsMeta.map(meta => toProject(meta, t))
}

export function useProject(id: string): Project | undefined {
  const { t } = useTranslation('projects')
  const meta = projectsMeta.find(p => p.id === id)
  return meta ? toProject(meta, t) : undefined
}
