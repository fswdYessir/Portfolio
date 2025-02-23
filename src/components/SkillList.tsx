import React, { useContext } from 'react'
import { HoveredSkills } from './HoverSkills'

interface SkillListProps {
  skill: string
}

const SkillList: React.FC<SkillListProps> = ({ skill }) => {
  const { hoveredSkills } = useContext(HoveredSkills)
  const isHighlighted = hoveredSkills.includes(skill)

  return (
    <div>
      <p className={`skill-item ${isHighlighted ? 'underline' : ''}`}>
        {skill}
      </p>
    </div>
  )
}

export default SkillList
