import React, { useContext } from 'react'
import { HoveredSkills } from './HoverSkills'

interface SkillListProps {
  skill: string
}

const SkillList: React.FC<SkillListProps> = ({ skill }) => {
  const { hoveredSkills } = useContext(HoveredSkills)
  const isHighlighted = hoveredSkills.includes(skill)

  return (
    <span className="flex flex-col items-center text-center">
      <p
        className={`skill-item ${isHighlighted ? '!font-bold' : ''} ${
          hoveredSkills.length > 0 && !isHighlighted ? 'blur-xs' : ''
        }`}
      >
        {skill}
      </p>
    </span>
  )
}

export default SkillList
