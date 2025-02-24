import BeepLogo from '../assets/BeepLogo.png'
import StuffnStuffLogo from '../assets/stuffnstuffLogo.png'
import FourSeasonLogo from '../assets/FourSeasonLogo.png'
import HiltonLogo from '../assets/HiltonLogo.png'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center text-center py-5 min-h-[50vh]"
    >
      <h1 className="text-3xl font-bold uppercase mb-8">Projects</h1>
      <div className="flex flex-wrap justify-center gap-8 px-8">
        <ProjectCard
          src={StuffnStuffLogo}
          link="https://idsp-stuffnstuff.onrender.com"
          h3="Stuff N Stuff"
          p="Marketplace web app"
          description="Real-time chat, personalized recommendations, and secure authentication."
          modalDescription={`
            Stuff N Stuff is a second-hand marketplace web app designed for seamless buying and selling, inspired by Facebook Marketplace. It provides real-time item postings, chat functionality, personalized recommendations, and secure authentication to enhance the user experience.<br /><br />
            <strong>Tech Stack : </strong>EJS | Express.js | TypeScript | PostgreSQL | Azure Blob Storage | JWT (Email Verification)
          `}
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
          modalDescription="Beep is a personal safety app designed to help users navigate home safely. By utilizing crime data from the Vancouver Police Department and analyzing it with AI, Beep recommends the safest routes and provides essential security features. Whether you're walking home late at night or traveling in unfamiliar areas, Beep ensures you stay safe and informed.<br /><br />
          <strong>Tech Stack : </strong>Expo | React Native | TypeScript | Firebase | Supabase | Google Maps API | Custom AWS AI
"
          skills={['TypeScript', 'React Native', 'Expo', 'Firebase', 'Figma']}
        />

        <ProjectCard
          src={FourSeasonLogo}
          link="https://4season.vercel.app"
          h3="FourSeason"
          p="Day trip rental web app"
          description="Rent seasonal gear and book trips with real-time reservations."
          modalDescription="Four Season is a responsive web and mobile application designed to make seasonal gear rentals and one-day trip planning effortless for users in Vancouver. Whether you're looking for ski gear in winter or hiking equipment in summer, Four Season provides a seamless experience from browsing travel packages to booking trips.<br /><br />
          <strong>Tech Stack : </strong>Next.js | React | TypeScript | React-email (Resend) | Strapi (Cloud) | PostgreSQL | Neon
"
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
          modalDescription="Hilton Honor app redesign project focuses on improving the user experience by restructuring the interface for better accessibility and ease of use.<br />A digital key feature has been added, allowing users to check in and out 24/7 without needing a physical key. This enhances convenience and eliminates concerns about key loss.<br /><br />
          <strong>Tech Stack : </strong>TypeScript | React | Vite | Vercel | Tailwind CSS
"
          skills={['TypeScript', 'React', 'Vite', 'vercel', 'Tailwind CSS']}
        />
      </div>
    </section>
  )
}

export default Projects
