import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects-data'

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center text-center p-3 min-h-[30vh] animate__animated animate__fadeIn"
    >
      <div className="p-5 animate__animated animate__fadeIn animate__delay-0.5s ">
        <h1 className="text-3xl font-bold uppercase ">Projects</h1>
        <p>Welcome! Check out my projects below.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 justify-items-center">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
