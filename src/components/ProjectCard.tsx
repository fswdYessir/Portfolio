import { useContext, useState } from 'react'
import '../styles/Projects.css'
import { HoveredSkills } from './HoverSkills'
import ProjectModal from './ProjectModal'
import { AnimatePresence } from 'framer-motion'
import '../App.css'

interface ProjectCardProps {
  src: string
  h3: string
  p: string
  description: string
  skills: string[]
  modalDescription: string
  techStack: string[]
  link?: string
  image: string
}

function ProjectCard({
  src,
  h3,
  p,
  description,
  modalDescription,
  techStack,
  skills,
  link,
  image,
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
              <h3 className="text-xl font-semibold">{h3}</h3>
              <p>{description}</p>
              <div className="flex items-center mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <ProjectModal
            title={h3}
            description={modalDescription}
            techStack={techStack}
            image={image}
            link={link}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectCard
