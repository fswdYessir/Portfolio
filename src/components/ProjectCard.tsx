import { useContext } from 'react'
import '../styles/Projects.css'
import { HoveredSkills } from './HoverSkills'
import '../App.css'
import { useNavigate } from 'react-router-dom'

interface ProjectCardProps {
  id: string
  icon: string
  title: string
  subtitle: string
  techStack: string[]
}

function ProjectCard({
  id,
  icon,
  title,
  subtitle,
  techStack,
}: ProjectCardProps) {
  const { setHoveredSkills } = useContext(HoveredSkills)

  const handleMouseEnter = () => setHoveredSkills(techStack)
  const handleMouseLeave = () => setHoveredSkills([])
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/project/${id}`)
  }

  return (
    <>
      <div
        className="flip-box m-5 cursor-pointer hover:scale-105 active:translate-y-1"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div className="flip-box-front">
          <img className="w-full h-48 object-contain" src={icon} alt={title} />
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="max-w-[40ch]">{subtitle}</p>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
