import './App.css'
import { HoveredSkillsProvider } from './components/HoverSkills'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {
  return (
    <>
      <Hero />
      <HoveredSkillsProvider>
        <Projects />
        <Skills />
      </HoveredSkillsProvider>
      <Contact />
      <Footer />
    </>
  )
}

export default App
