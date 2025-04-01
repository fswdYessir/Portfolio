import { useParams } from 'react-router-dom'
import projects from '../data/projects-data'
import ProjectContent from '../components/ProjectContent'
import { useEffect } from 'react'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  if (!project) {
    return <div className="p-10 text-center text-red-500">PROJECT 404</div>
  }

  return (
    <div className="pt-5 pb-10 px-6">
      <ProjectContent {...project} />
    </div>
  )
}

export default ProjectDetail
