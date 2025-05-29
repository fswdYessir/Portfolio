import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects-data'

import ScrollAnimation from '../components/ScrollAnimation'

function Projects() {
  return (
    <section id="projects" className="text-center p-6 min-h-[20vh]">
      <ScrollAnimation offset={300} delay={100}>
        <h1 className="text-3xl font-bold uppercase">Projects</h1>
        <p className="mb-10">Welcome! Check out my projects below.</p>
      </ScrollAnimation>

      <ScrollAnimation offset={100} delay={100}>
        <div className="flex flex-wrap justify-center lg:gap-8 md:gap-2 px-5 lg:max-w-[80vw] mx-auto">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </ScrollAnimation>
    </section>
  )
}

export default Projects
