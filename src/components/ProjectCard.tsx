import { useContext, useState } from 'react'
import '../styles/Projects.css'
import { HoveredSkills } from './HoverSkills'
import ProjectModal from './ProjectModal'
import { AnimatePresence } from 'framer-motion'

interface ProjectCardProps {
  src: string
  h3: string
  p: string
  description: string
  modalDescription: string
  skills: string[]
  link?: string
}

function ProjectCard({
  src,
  h3,
  p,
  description,
  modalDescription,
  skills,
  link,
}: ProjectCardProps) {
  const { setHoveredSkills } = useContext(HoveredSkills)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleMouseEnter = () => setHoveredSkills(skills)
  const handleMouseLeave = () => setHoveredSkills([])

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
            <h3 className="text-xl font-bold mt-4">{h3}</h3>
            <p className="max-w-[40ch] text-gray-600 mt-2">{p}</p>
          </div>
          <div className="flip-box-back absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gray-700 rounded-2xl p-4 rotate-y-180 backface-hidden mt-5">
            <h3 className="text-xl font-semibold !text-white">{h3}</h3>
            <p className="text-sm text-center px-4 !text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <ProjectModal
            title={h3}
            description={modalDescription}
            link={link}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectCard
