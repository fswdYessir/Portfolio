import Beep from '../../public/thumbnail/Beep.png'
import StuffNStuff from '../../public/thumbnail/StuffNStuff.png'
import FourSeason from '../../public/thumbnail/FourSeason.png'
import Hilton from '../../public/thumbnail/Hilton.png'
import IMDB from '../../public/thumbnail/IMDB.png'
// import ChezMari from '../../public/thumbnail/ChezMari.png'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center text-center pb-5 min-h-[20vh]"
    >
      <div className="p-5">
        <h1 className="text-3xl font-bold uppercase">Projects</h1>
        <p>Welcome! Check out my projects below.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-5 px-36">
        <ProjectCard
          label="Group"
          src={StuffNStuff}
          link="https://idsp-stuffnstuff.onrender.com"
          h3="Stuff N Stuff"
          p="Marketplace web app"
          description="Real-time chat, personalized recommendations, and secure authentication."
          modalDescription="
    Stuff N Stuff is a second-hand marketplace app inspired by Facebook Marketplace. It offers real-time listings, chat, and secure authentication for a seamless user experience.<br /><br />
  "
          image="StuffNStuff.png"
          skills={[
            'TypeScript',
            'Express',
            'PostgreSQL',
            'HTML',
            'CSS',
            'EJS',
            'Render',
            'Azure',
          ]}
        />

        <ProjectCard
          label="Group"
          src={Beep}
          link="https://www.beep-safety.com/"
          h3="Beep"
          p="Personal safety app"
          description="AI-powered safe route recommendations and real-time safety features."
          modalDescription="Beep is a personal safety app that uses AI and crime data to recommend safe routes and security features, helping users navigate home safely.<br /><br />"
          image="Beep.png"
          skills={['TypeScript', 'React Native', 'Expo', 'Firebase', 'Figma']}
        />

        <ProjectCard
          label="Client"
          src={FourSeason}
          link="https://4season.vercel.app"
          h3="FourSeason"
          p="Day trip rental web app"
          description="Rent seasonal gear and book trips with real-time reservations."
          modalDescription="Four Season is a responsive app for renting seasonal gear and planning day trips in Vancouver, offering a seamless experience from browsing to booking.<br /><br />"
          image="FourSeason.png"
          skills={[
            'TypeScript',
            'CSS',
            'Next.js',
            'React',
            'Strapi',
            'PostgreSQL',
            'Vercel',
            'Tailwind CSS',
          ]}
        />

        <ProjectCard
          label="Personal"
          src={Hilton}
          link="https://mdia-2025-project3.vercel.app/"
          h3="Hilton"
          p="Hilton app redesign"
          description="With a modern, simple design, it enhances the customer experience by simplifying room info checks and bookings."
          modalDescription="The Hilton Honor app redesign enhances user experience with a simplified interface and a digital key feature for 24/7 check-in and checkout without a physical key.<br /><br />"
          image="Hilton.png"
          skills={['TypeScript', 'React', 'Vite', 'Vercel', 'Tailwind CSS']}
        />
        <ProjectCard
          label="Personal"
          src={IMDB}
          link="https://imdb-fkdvcbateeb8brcw.canadacentral-01.azurewebsites.net/"
          h3="IMDb"
          p="Mock IMDb"
          description="A clean and modern design with movie genre filtering, search, and a community for events and news."
          modalDescription="Built with ASP.NET MVC, the Fake IMDb project integrates OMDb, TMDb, and News APIs for real-time movie info. It features a simple interface with genre filtering, search, and a commenting system. Uses HttpClient for APIs and LINQ for data handling.<br /><br />"
          image="IMDB.png"
          skills={['C#', 'Bootstrap', 'ASP.NET', 'CSS', 'MySQL', 'Azure']}
        />
        {/* <ProjectCard
          label="Client"
          src={ChezMari}
          link=""
          h3="Chez Mari Salon"
          p="Client project"
          description="Website redesign for Chez Mari Salon"
          modalDescription="Real client project : Redesigned the website and booking system using CMS Wordpress and plugins.<br /><br />"
          image="ChezMari.png"
          skills={['WordPress', 'Tailwind CSS', 'CSS',]}
        /> */}
      </div>
    </section>
  )
}

export default Projects
