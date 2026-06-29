import { useState } from 'react'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Contact from '../sections/Contact'
import Footer from '../layout/Footer'

export default function Home() {
  const [hoveredSkills, setHoveredSkills] = useState<string[]>([])

  return (
    <>
      <Hero />
      <Projects onHover={setHoveredSkills} />
      <Skills hoveredSkills={hoveredSkills} />
      <Contact />
      <Footer />
    </>
  )
}
