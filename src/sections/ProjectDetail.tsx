import { useParams } from 'react-router-dom'
import projects from '../data/projects'
import ProjectContent from '../components/ProjectContent'
import { useEffect } from 'react'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projects.find(p => p.h3 === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  if (!project) {
    return <div className="p-10 text-center text-red-500">PROJECT 404</div>
  }

  return (
    <div className="pt-5 pb-10 px-6">
      <ProjectContent
        title={project.h3}
        label={project.label}
        description={project.description}
        image={project.image}
        images={project.images}
        link={project.link}
        techStack={project.skills}
        contribution={project.contribution || []}
      />
    </div>
  )
}

export default ProjectDetail
