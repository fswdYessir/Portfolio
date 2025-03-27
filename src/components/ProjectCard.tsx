import { useContext } from 'react'
import '../styles/Projects.css'
import { HoveredSkills } from './HoverSkills'
import '../App.css'
import { useNavigate } from 'react-router-dom'

interface ProjectCardProps {
  src: string
  h3: string
  p: string
  description: string
  skills: string[]
}

function ProjectCard({ src, h3, p, skills }: ProjectCardProps) {
  const { setHoveredSkills } = useContext(HoveredSkills)

  const handleMouseEnter = () => setHoveredSkills(skills)
  const handleMouseLeave = () => setHoveredSkills([])
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/project/${h3}`)
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
          <img className="w-full h-48 object-contain" src={src} alt={h3} />
          <h3 className="text-xl font-bold">{h3}</h3>
          <p className="max-w-[40ch]">{p}</p>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
