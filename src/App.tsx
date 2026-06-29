import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './layout/Header'
import Loading from './layout/Loading'
import Home from './page/Home'
import ProjectDetail from './page/ProjectDetail'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 120 })
    const timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loading />

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  )
}

export default App
