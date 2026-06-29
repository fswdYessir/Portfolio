import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  techStack: string[];
  onHover: (skills: string[]) => void;
}

export default function ProjectCard({
  id,
  icon,
  title,
  subtitle,
  techStack,
  onHover,
}: ProjectCardProps) {
  return (
    <Link
      to={`/project/${id}`}
      className="group block w-full text-center cursor-pointer"
      onMouseEnter={() => onHover(techStack)}
      onMouseLeave={() => onHover([])}
    >
      <div className="transition-transform duration-200 ease-out group-hover:scale-105 origin-center will-change-transform">
        <img
          className="w-full h-24 sm:h-28 object-contain mx-auto"
          src={icon}
          alt={title}
        />
        <p className="text-lg font-bold text-[var(--text)] mt-1.5 whitespace-nowrap overflow-hidden text-ellipsis transition-colors">
          {title}
        </p>
        <p className="text-sm text-[var(--text-muted)] mt-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
          {subtitle}
        </p>
      </div>
    </Link>
  );
}
