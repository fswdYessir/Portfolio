import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center text-center pb-5 min-h-[25vh] animate__animated animate__fadeIn"
    >
      <div className="p-5 animate__animated animate__fadeIn animate__delay-1s ">
        <h1 className="text-3xl font-bold uppercase ">Projects</h1>
        <p>Welcome! Check out my projects below.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 md:px-20 lg:px-40">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
