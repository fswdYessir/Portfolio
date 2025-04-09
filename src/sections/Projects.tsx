import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects-data'

import ScrollAnimation from '../components/ScrollAnimation'

function Projects() {
  return (
    <section id="projects" className="text-center p-6">
      <ScrollAnimation offset={100}>
        <h1 className="text-3xl font-bold uppercase">Projects</h1>
        <p className="mb-10">Welcome! Check out my projects below.</p>
      </ScrollAnimation>

      <ScrollAnimation offset={100} delay={100}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 justify-items-center">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </ScrollAnimation>
    </section>
  )
}

export default Projects
