import './App.css'
import { HoveredSkillsProvider } from './components/HoverSkills'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Loading from './sections/Loading'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProjectDetail from './sections/ProjectDetail'

function App() {
  const [loading, setLoading] = useState(true)
  return (
    <Router>
      {loading ? (
        <Loading onComplete={() => setLoading(false)} />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <HoveredSkillsProvider>
                  <Projects />
                  <Skills />
                </HoveredSkillsProvider>
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      )}
    </Router>
  )
}

export default App
