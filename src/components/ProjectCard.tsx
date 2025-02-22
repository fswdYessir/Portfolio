interface ProjectCardProps {
  src: string
  link: string
  h3: string
  p: string
  imgClass?: string
  className?: string
}

function ProjectCard({
  src,
  link,
  h3,
  p,
  imgClass = 'w-full h-48 object-contain',
  className = 'w-64',
}: ProjectCardProps) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className={imgClass} src={src} alt={h3} />
      </a>
      <h3 className="text-xl font-bold mt-4">{h3}</h3>
      <p className="max-w-[40ch] text-gray-600 mt-2">{p}</p>
    </div>
  )
}

export default ProjectCard
