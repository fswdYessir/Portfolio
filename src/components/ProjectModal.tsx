import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { GrApple, GrFormClose } from 'react-icons/gr'

interface ProjectModalProps {
  title: string
  description: string
  link?: string
  onClose: () => void
}

const ProjectModal = ({
  title,
  description,
  link,
  onClose,
}: ProjectModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  // 애니메이션 설정 각각 요소에 반복사용
  // 컴포넌트제거 즉 exit 작동하려면 부모요소에 (ProjectCard) AnimatePresence를 추가해야함
  const animationProps = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  }

  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50"
      onClick={e => e.stopPropagation()}
    >
      <div className="relative flex flex-col items-center w-full">
        <motion.div
          {...animationProps}
          className="relative w-[350px] sm:w-[500px] md:w-[600px] lg:w-[700px] aspect-[16/11] sm:aspect-[16/10] bg-black border-b-35 sm:border-b-50 border-gray-400 rounded-4xl flex flex-col items-center justify-center"
          onClick={e => e.stopPropagation()}
        >
          <GrFormClose
            size={26}
            className="absolute m-3 top-2 right-4 text-white font-extrabold transition-transform transform hover:scale-110 active:translate-y-1 z-50"
            onClick={onClose}
          />

          <div className="absolute inset-2 sm:inset-4 rounded-t-3xl sm:rounded-t-2xl bg-blue-400/50 flex flex-col items-center justify-center p-4">
            <div
              className="absolute inset-0 rounded-t-2xl bg-black/80 opacity-30 flex flex-col items-center justify-center p-4"
              style={{
                clipPath: 'polygon(90% 0%, 100% 0%, 100% 100%, 15% 100%)',
              }}
            ></div>

            <h3 className="mt-5 text-xl font-extrabold !text-white">{title}</h3>

            <div
              className="mt-2 text-left text-white leading-relaxed w-full sm:w-5/6 max-h-[60vh] overflow-auto justify-center z-50"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

          <a
            href={link}
            rel="project link"
            className="absolute -bottom-[33px] sm:-bottom-[47px] left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              initial={{ opacity: 1 }}
              animate={isHovered ? { opacity: 1 } : { opacity: [1, 0.3, 1] }}
              transition={{
                repeat: isHovered ? 0 : Infinity,
                duration: 0.5,
                ease: 'easeInOut',
              }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <GrApple className="text-white text-2xl sm:text-4xl transition-transform transform hover:scale-120 hover:text-red-500/80 active:translate-y-1 cursor-pointer" />
            </motion.button>
          </a>
        </motion.div>

        <motion.div
          {...animationProps}
          className="w-[10%] h-[50px] bg-gray-500 clip-trapezoid mt-[-10px] -z-10"
        ></motion.div>

        <motion.div
          {...animationProps}
          className="w-[20%] h-[10px] bg-gray-400 shadow-lg mt-[-5px]"
        ></motion.div>
      </div>
    </div>
  )
}

export default ProjectModal
