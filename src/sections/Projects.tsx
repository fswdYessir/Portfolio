import BeepLogo from '../assets/BeepLogo.png'
import StuffNStuffLogo from '../assets/StuffNStuffLogo.png'
import FourSeasonLogo from '../assets/FourSeasonLogo.png'
import HiltonLogo from '../assets/HiltonLogo.png'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center text-center py-5 min-h-[20vh]"
    >
      <div className="p-5">
        <h1 className="text-3xl font-bold uppercase">Projects</h1>
        <p>
          Welcome! Check out my projects below and see what I’ve been working
          on.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-8">
        <ProjectCard
          src={StuffNStuffLogo}
          link="https://idsp-stuffnstuff.onrender.com"
          h3="Stuff N Stuff"
          p="Marketplace web app"
          description="Real-time chat, personalized recommendations, and secure authentication."
          modalDescription="
    Stuff N Stuff is a second-hand marketplace app inspired by Facebook Marketplace. It offers real-time listings, chat, and secure authentication for a seamless user experience.<br /><br />
  "
          techStack={[
            'EJS',
            'Express.js',
            'TypeScript',
            'PostgreSQL',
            'HTML',
            'CSS',
          ]}
          image="StuffNStuff.png"
          skills={[
            'JavaScript',
            'TypeScript',
            'Express',
            'PostgreSQL',
            'vercel',
            'HTML',
            'CSS',
            'EJS',
          ]}
        />

        <ProjectCard
          src={BeepLogo}
          link="https://www.beep-safety.com/"
          h3="Beep"
          p="Personal safety app"
          description="AI-powered safe route recommendations and real-time safety features."
          modalDescription="Beep is a personal safety app that uses AI and crime data to recommend safe routes and security features, helping users navigate home safely.<br /><br />"
          techStack={[
            'Expo',
            'React Native',
            'TypeScript',
            'Firebase',
            'Supabase',
          ]}
          image="Beep.png"
          skills={['TypeScript', 'React Native', 'Expo', 'Firebase', 'Figma']}
        />

        <ProjectCard
          src={FourSeasonLogo}
          link="https://4season.vercel.app"
          h3="FourSeason"
          p="Day trip rental web app"
          description="Rent seasonal gear and book trips with real-time reservations."
          modalDescription="Four Season is a responsive app for renting seasonal gear and planning day trips in Vancouver, offering a seamless experience from browsing to booking.<br /><br />"
          techStack={['Next.js', 'React', 'TypeScript', 'Strapi', 'PostgreSQL']}
          image="FourSeason.png"
          skills={[
            'TypeScript',
            'CSS',
            'Next.js',
            'React',
            'Strapi',
            'PostgreSQL',
            'Neon',
            'vercel',
            'Tailwind CSS',
          ]}
        />

        <ProjectCard
          src={HiltonLogo}
          link="https://mdia-2025-project3.vercel.app/"
          h3="Hilton"
          p="Hilton app redesign"
          description="With a modern, simple design, it enhances the customer experience by simplifying room info checks and bookings."
          modalDescription="The Hilton Honor app redesign enhances user experience with a simplified interface and a digital key feature for 24/7 check-in and checkout without a physical key.<br /><br />"
          techStack={['TypeScript', 'React', 'Vite', 'Vercel', 'Tailwind CSS']}
          image="Hilton.png"
          skills={['TypeScript', 'React', 'Vite', 'vercel', 'Tailwind CSS']}
        />
      </div>
    </section>
  )
}

export default Projects
