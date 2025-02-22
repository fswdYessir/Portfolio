import '../styles/Projects.css'

interface ProjectCardProps {
  src: string
  link: string
  h3: string
  p: string
  description: string
}

function ProjectCard({ src, link, h3, p, description }: ProjectCardProps) {
  return (
    <div className="flip-box m-5 ">
      <a href={link} target="_blank">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img className="w-full h-48 object-contain" src={src} alt={h3} />
            <h3 className="text-xl font-bold mt-4">{h3}</h3>
            <p className="max-w-[40ch] text-gray-600 mt-2">{p}</p>
          </div>
          <div className="flip-box-back absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-indigo-700 text-white rounded-2xl p-4 rotate-y-180 backface-hidden mt-5">
            <h3 className="text-xl font-semibold">{h3}</h3>
            <p className="text-sm text-center px-4">{description}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default ProjectCard
