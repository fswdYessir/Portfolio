import BeepLogo from '../assets/BeepLogo.png'
import StuffnStuffLogo from '../assets/stuffnstuffLogo.png'
import FourSeasonLogo from '../assets/FourSeasonLogo.png'
import ProjectCard from '../common/ProjectCard'

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center text-center py-5 min-h-screen"
    >
      <h1 className="text-3xl font-bold uppercase mb-8">Projects</h1>
      <div className="flex flex-wrap justify-center gap-8 px-8">
        <ProjectCard
          src={BeepLogo}
          link="https://www.beep-safety.com/"
          h3="Beep"
          p="Personal safety app"
          className="w-64"
          imgClass="w-full h-48 object-contain"
        />
        <ProjectCard
          src={StuffnStuffLogo}
          link="https://idsp-stuffnstuff.onrender.com"
          h3="Stuff N Stuff"
          p="Marketplace web app"
          className="w-64"
          imgClass="w-full h-48 object-contain"
        />
        <ProjectCard
          src={FourSeasonLogo}
          link="https://4season.vercel.app"
          h3="FourSeason"
          p="Day trip rental web app"
          className="w-64"
          imgClass="w-full h-48 object-contain"
        />
      </div>
    </section>
  )
}

export default Projects
