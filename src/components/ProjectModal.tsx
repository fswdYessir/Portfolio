import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'

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

  return (
    <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50"
      onClick={onClose}
    >
      <div className="relative flex flex-col items-center w-full">
        <motion.div
          {...animationProps}
          className="relative w-[350px] sm:w-[500px] md:w-[600px] lg:w-[700px] aspect-[16/10] bg-black/80 border-b-50 border-gray-400 rounded-4xl flex flex-col items-center justify-center"
          onClick={e => e.stopPropagation()}
        >
          <button
            className="absolute m-3 top-2 right-4 text-white font-extrabold transition-transform transform hover:scale-110 active:translate-y-1 z-50 cursor-pointer"
            onClick={onClose}
          >
            ✕
          </button>

          <div className="absolute inset-4 rounded-t-2xl bg-blue-500/50 flex flex-col items-center justify-center p-4">
            <div
              className="absolute inset-0 rounded-t-2xl bg-gradient-to-r from-white/40 to-transparent opacity-30 flex flex-col items-center justify-center p-4"
              style={{
                clipPath: 'polygon(85% 0%, 100% 0%, 100% 100%, 15% 100%)',
              }}
            ></div>

            <h3 className="mt-5 text-xl font-extrabold !text-white">{title}</h3>

            <div
              className="mt-2 text-left text-white leading-relaxed w-full sm:w-5/6 max-h-[60vh] overflow-auto justify-center"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

          {link && (
            <a
              href={link}
              rel="project link"
              className="absolute -bottom-[44px] left-1/2 transform -translate-x-1/2"
            >
              <FontAwesomeIcon
                icon={faApple}
                className="text-white text-4xl transition-transform transform hover:scale-110 active:translate-y-1"
              />
            </a>
          )}
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
