import './App.css'
import { HoveredSkillsProvider } from './components/HoverSkills'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Loading from './sections/Loading'
import { useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true)
  return (
    <>
      {loading ? (
        <Loading onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Hero />
          <HoveredSkillsProvider>
            <Projects />
            <Skills />
          </HoveredSkillsProvider>
          <Contact />
          <Footer />
        </>
      )}
    </>
  )
}

export default App
