import { createContext, useState, ReactNode } from 'react'

interface HoveredSkillsType {
  hoveredSkills: string[]
  setHoveredSkills: (skills: string[]) => void
}

export const HoveredSkills = createContext<HoveredSkillsType>({
  hoveredSkills: [],
  setHoveredSkills: () => {},
})

export const HoveredSkillsProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [hoveredSkills, setHoveredSkills] = useState<string[]>([])

  return (
    <HoveredSkills.Provider value={{ hoveredSkills, setHoveredSkills }}>
      {children}
    </HoveredSkills.Provider>
  )
}
