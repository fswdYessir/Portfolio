import Beep from '../../public/thumbnail/Beep.png'
import BeepImg from '../../public/Beep.png'
import StuffNStuff from '../../public/thumbnail/StuffNStuff.png'
import StuffNStuffImg from '../../public/StuffNStuff.png'
import FourSeason from '../../public/thumbnail/FourSeason.png'
import FourSeasonImg from '../../public/FourSeason.png'
import Hilton from '../../public/thumbnail/Hilton.png'
import HiltonImg from '../../public/Hilton.png'
import IMDB from '../../public/thumbnail/IMDB.png'
import IMDBImg from '../../public/IMDB.png'
import ChezMari from '../../public/thumbnail/ChezMari.png'
import ChezMariImg from '../../public/ChezMari.png'

const projects = [
  {
    label: 'Group',
    src: StuffNStuff,
    h3: 'Stuff N Stuff',
    p: 'Marketplace web app',
    description:
      'Real-time chat, personalized recommendations, and secure authentication.',
    modalDescription: `
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
    description:
      'AI-powered safe route recommendations and real-time safety features.',
    modalDescription: `
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
    h3: 'FourSeason',
    p: 'Day trip rental web app',
    description:
      'Rent seasonal gear and book trips with real-time reservations.',
    modalDescription: `
      Four Season is a responsive app for renting seasonal gear and planning day trips in Vancouver, offering a seamless experience from browsing to booking.<br /><br />
      
      <strong>Main Features Implemented:</strong>
      <ul class="list-disc list-inside space-y-1 mt-2">
        <li>Built a full CMS with Strapi so the client can manage content independently</li>
        <li>Implemented a real-time reservation system with remaining seats updated dynamically</li>
        <li>Integrated email verification using React Email and Resend</li>
        <li>Added authentication via Kinde Auth with support for Google login</li>
      </ul>
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
    description:
      'A clean and modern design with movie genre filtering, search, and a community for events and news.',
    modalDescription: `
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
    description:
      'With a modern, simple design, it enhances the customer experience by simplifying room info checks and bookings.',
    modalDescription: `  The Hilton Honors app redesign was a UI/UX-focused project aimed at improving the overall booking experience.<br /><br />

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
    description:
      'Real client project. Redesigned the website and booking system using CMS Wordpress and plugins.',
    modalDescription: `
      Chez Mari was a real-world client project focused on redesigning a salon website with CMS capabilities. The goal was to empower the client to manage bookings and content independently while improving performance and usability.<br/><br/>
  
    <strong>My Contributions:</strong>
    <ul class="list-disc list-inside space-y-1 mt-2">
      <li>Led the project as PM: managed sprint timelines, Git organization, and Jira boards</li>
      <li>Maintained clear communication with the client for design and functionality approvals</li>
      <li>Set up hosting, domain, DNS, CDN, and SMTP mail server</li>
      <li>Optimized server performance through caching and load speed improvements</li>
      <li>Integrated external tools and managed client-facing services</li>
      <li>Created a gallery page with AJAX-based image loading</li>
      <li>Customized booking CSS using the Bookly plugin</li>
    </ul>
    `,
    image: ChezMariImg,
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
