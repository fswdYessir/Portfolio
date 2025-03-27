import Beep from '../../public/beep/BeepThumbnail.png'
import BeepImg from '../../public/beep/Beep.png'
import StuffNStuff from '../../public/stuffnstuff/StuffNStuffThumbnail.png'
import StuffNStuffImg from '../../public/stuffnstuff/StuffNStuff.png'
import FourSeason from '../../public/fourseason/FourSeasonThumbnail.png'
import FourSeasonImg from '../../public/fourseason/FourSeason.png'
import Hilton from '../../public/hilton/HiltonThumbnail.png'
import HiltonImg from '../../public/hilton/Hilton.png'
import IMDB from '../../public/imdb/IMDBThumbnail.png'
import IMDBImg from '../../public/imdb/IMDB.png'
import ChezMari from '../../public/chezmari/ChezMariThumbnail.png'
import ChezMariImg from '../../public/chezmari/ChezMari.png'

const projects = [
  {
    label: 'Group',
    src: StuffNStuff,
    h3: 'Stuff N Stuff',
    p: 'Marketplace web app',
    description: `
      Stuff N Stuff is a second-hand marketplace app inspired by Facebook Marketplace. It offers real-time listings, chat, and secure authentication for a seamless user experience.<br /><br />
      
      <strong>My Contributions:</strong>
      <ul class="list-disc list-inside space-y-1 mt-2">
        <li>Designed page layout and overall concept</li>
        <li>Developed a recommendation algorithm based on user clicks and views</li>
        <li>Implemented secure local authentication with email verification</li>
        <li>Built category filtering functionality using AJAX</li>
      </ul>
    `,
    image: StuffNStuffImg,
    link: 'https://idspstuffnstuff-production.up.railway.app/',
    skills: [
      'TypeScript',
      'Express',
      'PostgreSQL',
      'HTML',
      'CSS',
      'EJS',
      'Azure',
    ],
    contribution: [
      { tech: 'Azure', percent: 100 },
      { tech: 'PostgreSQL', percent: 40 },
      { tech: 'EJS', percent: 50 },
      { tech: 'CSS', percent: 100 },
      { tech: 'TypeScript', percent: 50 },
    ],
  },

  {
    label: 'Group',
    src: Beep,
    h3: 'Beep',
    p: 'Personal safety app',
    description: `
      Beep is a personal safety app that uses AI and crime data to recommend safe routes and provide real-time security features.<br /><br />
      
      <strong>My Contributions:</strong>
      <ul class="list-disc list-inside space-y-1 mt-2">
        <li>Created the app's technical blog and maintained developer documentation</li>
        <li>Managed and maintained the team Git repository</li>
        <li>Developed the SOS emergency page, implementing alert sounds using React Sound</li>
        <li>Implemented snapshot feature using React Camera and saved user photos as pins on the map</li>
        <li>Handled all data management using Firebase (NoSQL)</li>
        <li>Built the SMS notification page for emergency contacts</li>
        <li>Designed and developed the app onboarding and sign-up pages</li>
      </ul>
    `,
    image: BeepImg,
    link: 'https://www.beep-safety.com/',
    skills: ['TypeScript', 'React Native', 'Expo', 'Firebase'],
    contribution: [
      { tech: 'TypeScript', percent: 25 },
      { tech: 'React Native', percent: 70 },
      { tech: 'Expo', percent: 50 },
      { tech: 'Firebase', percent: 100 },
    ],
  },
  {
    label: 'Client',
    src: FourSeason,
    h3: 'Four Season',
    p: 'Day trip rental web app',
    description: `
    <div class="space-y-6 leading-relaxed">
      <div>
        <p>
          This full-stack web application was developed for a local business owner in Vancouver who runs a day-tour rental service—providing equipment, lift passes, and transportation all in one package for tourists and students.
          The client previously managed bookings manually via Instagram DMs, which became inefficient as the business grew.
          This project solves that by providing a real-time booking system and a content-manageable website.
        </p>
      </div>
  
      <div>
        <h3 class="text-xl font-semibold mb-2">Key Features</h3>
        <ul class="list-disc list-inside space-y-1 mb-4">
          <li>Real-time seat availability and booking system</li>
          <li>Automated email confirmations with Resend</li>
          <li>Strapi CMS for self-managed content updates</li>
          <li>Responsive design with React & Tailwind</li>
        </ul>
        <img 
  src="/fourseason/booking.png" 
  alt="Booking calendar view"
  class="rounded-md mx-auto my-4 max-w-3xl w-full"
  data-aos="zoom-in" data-aos-delay="100"
/>
       <img 
  src="/fourseason/email.png" 
  alt="Email confirmation"
  class="rounded-md mx-auto my-4 max-w-3xl w-full"
  data-aos="zoom-in" data-aos-delay="100"
/>
      </div>
  
      <div>
        <h3 class="text-xl font-semibold mb-2">My Role</h3>
        <p>
          I worked solo on this project from start to finish—handling planning, UI design, frontend, backend, CMS setup, database modeling, and deployment.
          The project was completed within one week.
        </p>
      </div>
  
      <div>
        <h3 class="text-xl font-semibold mb-2">Challenges</h3>
        <p>
          One of the main challenges was implementing the email confirmation feature. I initially tried a different mailing API but faced repeated server errors.
          After researching alternatives, I successfully implemented <strong>Resend</strong> with <strong>React Email</strong> for reliable email delivery.
        </p>
        <p>
          Additionally, setting up relational schemas with <strong>Neon PostgreSQL</strong> required careful design, especially when connected with Strapi.
        </p>
      </div>
  
      <div>
        <h3 class="text-xl font-semibold mb-2">Reflection</h3>
        <p>
          I learned how to lead a full-stack client project independently—from understanding business needs to delivering a functional, deployed product.
          If I had more time, I would add a client-side dashboard to manage bookings and integrate SMS reminders.
        </p>
      </div>
    </div>
  `,
    image: FourSeasonImg,
    link: 'https://4season.vercel.app',
    skills: [
      'TypeScript',
      'CSS',
      'Next.js',
      'React',
      'Strapi',
      'PostgreSQL',
      'Tailwind CSS',
    ],
  },
  {
    label: 'Personal',
    src: IMDB,
    h3: 'IMDb',
    p: 'Mock IMDb',
    description: `
      This project is a mock IMDb website built using ASP.NET MVC with a focus on clean structure and OOP design.<br /><br />
  
      <strong>Main Features Implemented:</strong>
      <ul class="list-disc list-inside space-y-1 mt-2">
        <li>Developed using MVC pattern in ASP.NET for modular and scalable architecture</li>
        <li>Implemented responsive UI using Bootstrap 5</li>
        <li>Used .NET Identity to implement authentication system</li>
        <li>Integrated OMDb and TMDb APIs to fetch real-time movie data</li>
        <li>Implemented genre filtering and search functionality for movies</li>
        <li>Used NewsAPI to fetch current movie-related news</li>
      </ul>
    `,
    image: IMDBImg,
    link: 'https://imdb-fkdvcbateeb8brcw.canadacentral-01.azurewebsites.net/',
    skills: ['C#', 'Bootstrap', 'ASP.NET', 'CSS', 'MySQL', 'Azure'],
  },

  {
    label: 'Personal',
    src: Hilton,
    h3: 'Hilton',
    p: 'Hilton app redesign',
    description: `  The Hilton Honors app redesign was a UI/UX-focused project aimed at improving the overall booking experience.<br /><br />

  <strong>Project Highlights:</strong>
  <ul class="list-disc list-inside space-y-1 mt-2">
    <li>Redesigned the app's structure with a cleaner, more intuitive layout</li>
    <li>Focused on improving user flow for room browsing and booking</li>
    <li>Created a simplified digital key experience to support 24/7 check-in/out</li>
    <li>Applied modern design principles using Tailwind CSS and component-based development in React</li>
    <li>Used Vite for faster development and lightweight bundling</li>
    <li>Fully responsive design to support mobile and desktop users</li>
  </ul>
`,
    image: HiltonImg,
    link: 'https://mdia-2025-project3.vercel.app/',
    skills: ['TypeScript', 'React', 'Vite', 'Tailwind CSS'],
  },
  {
    label: 'Client',
    src: ChezMari,
    h3: 'Chez Mari Salon',
    p: 'Redesign with CMS',
    description: `
  <div class="space-y-6 leading-relaxed">
    <div>
      <p>
        <strong>Chez Mari</strong> was a group project for a real client—a hair salon owner looking to modernize her business website. 
        Our team redesigned the site with CMS capabilities, giving the client full control over content and bookings while improving performance and usability.
      </p>
    </div>

    <div>
      <h3 class="text-xl font-semibold mb-2">Key Features</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Modern responsive UI with client-friendly CMS</li>
        <li>Gallery page with AJAX-based image loading</li>
        <li>Online booking system using Bookly plugin</li>
        <li>SMTP-based email confirmation setup</li>
        <li>Performance optimization using caching and CDN</li>
      </ul>
    </div>

    <div>
      <h3 class="text-xl font-semibold mb-2">My Role</h3>
      <p>
        I led the project as a project manager and developer.
      </p>
      <ul class="list-disc list-inside space-y-1 mt-2">
        <li>Managing sprint planning, Jira boards, and Git flow</li>
        <li>Communicating with the client for design and feature approval</li>
        <li>Setting up hosting, domain, DNS, and SMTP mail server</li>
        <li>Customizing booking components with CSS</li>
        <li>Optimizing WordPress server performance</li>
      </ul>
    </div>

    <div>
      <h3 class="text-xl font-semibold mb-2">Challenges</h3>
       <div class="space-y-4">
    <p>
      One of the biggest challenges was understanding the structure and limitations of WordPress.
      Another challenge was communicating technical decisions to a client without a technical background, which required simplifying explanations and using visual references.  
    </p>
  </div>
</div>

    <div>
      <h3 class="text-xl font-semibold mb-2">Reflection</h3>
      <p>
        This project helped me better understand the structure of WordPress themes and plugins. I also learned how to set up hosting, point a domain, configure DNS, and deploy a CMS-driven site. 
        Working closely with a real client also improved my communication and project leadership skills.
      </p>
    </div>
  </div>
`,
    image: ChezMariImg,
    images: '/chezmari/service.png',
    link: 'http://chezmari.com/',
    skills: ['WordPress', 'Tailwind CSS', 'CSS'],
    contribution: [
      { tech: 'Project Management', percent: 100 },
      { tech: 'WordPress / Hosting', percent: 100 },
      { tech: 'Booking System', percent: 100 },
      { tech: 'Tailwind CSS', percent: 30 },
      { tech: 'CSS', percent: 40 },
    ],
  },
]

export default projects
