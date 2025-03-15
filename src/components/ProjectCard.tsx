import { useContext, useState } from 'react'
import '../styles/Projects.css'
import { HoveredSkills } from './HoverSkills'
import ProjectModal from './ProjectModal'
import '../App.css'

interface ProjectCardProps {
  label: string
  src: string
  h3: string
  p: string
  description: string
  skills: string[]
  modalDescription: string
  link?: string
  image: string
}

function ProjectCard({
  label,
  src,
  h3,
  p,
  description,
  modalDescription,
  skills,
  link,
  image,
}: ProjectCardProps) {
  const { setHoveredSkills } = useContext(HoveredSkills)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleMouseEnter = () => setHoveredSkills(skills)
  const handleMouseLeave = () => setHoveredSkills([])

  const labelColor: { [key: string]: string } = {
    Personal: 'bg-purple-800',
    Group: 'bg-blue-800',
    Client: 'bg-green-800',
  }

  return (
    <>
      <div
        className="flip-box m-5 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img className="w-full h-48 object-contain" src={src} alt={h3} />
            <h3 className="text-xl font-bold">{h3}</h3>
            <p className="max-w-[40ch]">{p}</p>
          </div>
          <div
            className="flip-box-back inset-0 absolute w-full h-full flex flex-col items-center justify-center rotate-y-180 backface-hidden mt-5 bg-yellow-300/70 shadow-2xl transform rotate-2 before:absolute before:bottom-0 before:right-0 before:w-18 before:h-7.5 before:bg-yellow-500/80 before:opacity-80"
            style={{
              clipPath: 'polygon(100% 0, 100% 85%, 76% 100%, 0 100%, 0 0)',
            }}
          >
            <div className="flip-box-back-content p-3">
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-bold"></span>
              <span
                className={`absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-bold text-white ${
                  labelColor[label] || 'bg-gray-800'
                }`}
              >
                {label}
              </span>
              <h3 className="text-xl font-semibold">{h3}</h3>
              <p>{description}</p>
              <div className="flex items-center mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ProjectModal
          title={h3}
          description={modalDescription}
          techStack={skills}
          image={image}
          link={link}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}

export default ProjectCard
