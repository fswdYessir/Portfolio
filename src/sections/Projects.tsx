import { useTranslation } from 'react-i18next'
import { useProjects } from '../data/projectsData'
import ProjectCard from '../components/ProjectCard'

type Props = { onHover: (skills: string[]) => void }

export default function Projects({ onHover }: Props) {
  const projects = useProjects()
  const { t } = useTranslation()

  return (
    <section id="projects" className="text-center p-6 min-h-[20vh]">
      <div data-aos="fade-up" data-aos-offset="300" data-aos-delay="100">
        <h1 className="font-display text-3xl font-bold uppercase text-[var(--text)] transition-colors">
          {t('projects.title')}
        </h1>
        <p className="text-base font-normal text-[var(--text-muted)] mb-10 transition-colors">
          {t('projects.subtitle')}
        </p>
      </div>

      <div data-aos="fade-up" data-aos-offset="100" data-aos-delay="100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-6 justify-items-center">
          {projects.map(project => (
            <div
              key={project.id}
              className="w-52 sm:w-56 flex items-center justify-center [contain:layout]"
            >
              <ProjectCard {...project} onHover={onHover} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
