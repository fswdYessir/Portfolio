import React from 'react'

interface SkillListProps {
  skill: string
}

function SkillList({ skill }: SkillListProps) {
  return (
    <span className="flex flex-col items-center text-center text-gray-800 dark:text-white">
      <p className="mt-2 text-lg font-medium">{skill}</p>
    </span>
  )
}

export default SkillList
