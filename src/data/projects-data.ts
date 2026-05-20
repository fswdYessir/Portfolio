import Beep from '../../src/assets/beep/BeepThumbnail.png'
import BeepImg from '../../src/assets/beep/Beep.png'
// import StuffNStuff from '../../src/assets/stuffnstuff/StuffNStuffThumbnail.png'
// import StuffNStuffImg from '../../src/assets/stuffnstuff/StuffNStuff.png'
import FourSeason from '../../src/assets/fourseason/FourSeasonThumbnail.png'
import FourSeasonImg from '../../src/assets/fourseason/FourSeason.png'
import Hilton from '../../src/assets/hilton/HiltonThumbnail.png'
import HiltonImg from '../../src/assets/hilton/Hilton.png'
// import IMDB from '../../src/assets/imdb/IMDBThumbnail.png'
// import IMDBImg from '../../src/assets/imdb/IMDB.png'
import ChezMari from '../../src/assets/chezmari/ChezMariThumbnail.png'
import ChezMariImg from '../assets/chezmari/ChezMari.png'
import Journalist from '../assets/journalist/JournalistThumbnail.png'
import JournalistImg from '../assets/journalist/Journalist.png'
import Haimdall from '../assets/haimdall/HaimdallThumbnail.png'
import HaimdallImg from '../assets/haimdall/HaimdallImg.png'

const projectsDB = [
subtitle: 'CARBON CREDIT MANAGEMENT PLATFORM',

overview:
  'Haimdall v3 is a carbon credit management platform for sustainable agriculture. It visualizes 20,000+ farmland polygons in real time, supports five languages, and provides workflows for farmland monitoring, carbon tracking, and booking management. As the sole frontend developer, I built the platform from scratch with a focus on scalability and performance.',

keyFeatures: [
  'Interactive farmland map rendering 20,000+ polygons with deck.gl vector tiles',
  'Real-time dashboard with geospatial data visualization and analytics',
  'Farmland, booking, and profile management workflows',
  'Built-in camera module with EXIF metadata and S3 presigned uploads',
  'Multi-language support with next-intl (EN, KR, VI, KM, BN)',
  'Admin dashboard for user, farmland, and booking management',
  'Responsive mobile-first UI built with reusable React components',
],

myContributions: [
  'Built and maintained the entire frontend architecture as the sole frontend engineer',
  'Built reusable components and custom hooks for complex workflows',
  'Implemented MVT tiling and caching strategies to reduce initial load times by ~40%',
  'Integrated Firebase Auth with role-based access control',
  'Developed farmland management, booking dashboards, and farmer profile features',
  'Worked with backend engineers on API integration and error handling',
  'Implemented responsive multilingual UI based on Figma designs',
],

challenges:
  'Rendering 20,000+ farmland polygons efficiently was the biggest challenge. Early implementations caused lag during zooming and panning, so I introduced MVT (Mapbox Vector Tiles) with deck.gl and local caching strategies, reducing initial load times by about 40%. Supporting five languages with different character sets also required careful font handling and layout adjustments.',

reflection:
  'This project strengthened my ability to build scalable production applications independently. I gained hands-on experience with geospatial visualization, large-scale data rendering, and frontend performance optimization. It also improved my collaboration skills while working with designers and backend engineers on a production platform.',

{
  id: 'independent-Journalist',
  label: ['Client', 'Personal'],
  title: 'Independent Journalist',
  subtitle: 'CUSTOM WORDPRESS WEBSITE',
  icon: Journalist,
  banner: JournalistImg,
  techStack: ['WordPress', 'HTML', 'CSS', 'JavaScript'],

  overview:
    'A volunteer WordPress project built to showcase independent YouTube journalists across multiple countries. The site organizes channels by topic and includes direct YouTube links, donation QR codes, and responsive layouts focused on accessibility and usability.',

  keyFeatures: [
    'Responsive card-based UI optimized for desktop and mobile',
    'Channel organization by category and country',
    'Integrated YouTube links, donation buttons, and QR codes',
    'Client-side search and filtering with vanilla JavaScript',
    'Custom layouts built with Gutenberg HTML blocks',
  ],

  myContributions: [
    'Built the full site structure using Gutenberg with custom HTML and CSS',
    'Implemented client-side search and filtering using vanilla JavaScript',
    'Integrated external QR code APIs into reusable channel cards',
    'Designed and developed 9 responsive pages without relying on plugins',
    'Worked closely with the client to refine layouts and UX through feedback',
  ],

  challenges:
    'The main challenge was working with limited assets and unclear design direction early in the project. To solve this, I created multiple layout drafts and iterated closely with the client until the overall structure and visual direction were finalized.',

  reflection:
    'This project improved my frontend design skills and strengthened my understanding of WordPress as a flexible CMS. I also gained experience building scalable static content systems with minimal plugin usage while collaborating directly with a non-technical client.',

  extraImages: ['/postImg/journalist/demo.png'],
  videoUrl: '',
  aspect: '16/9',
  // link: 'https://supportindependantjournalist.com/',
},
{
  id: 'chezmari',
  label: ['Client', 'Group'],
  title: 'Chez Mari Salon',
  subtitle: 'WORDPRESS WEBSITE REDESIGN',
  icon: ChezMari,
  banner: ChezMariImg,
  techStack: ['WordPress', 'Tailwind CSS', 'CSS', 'PHP'],

  overview:
    'A group project for a real salon client looking to modernize their business website. The team redesigned the site with a responsive UI, CMS support, and an integrated booking system to improve usability and content management.',

  keyFeatures: [
    'Responsive UI redesign aligned with the salon’s branding',
    'WordPress CMS for easy content management',
    'Integrated booking system with backend management tools',
    'Improved usability and mobile responsiveness',
  ],

  myContributions: [
    'Managed sprint planning, Jira workflows, and Git collaboration',
    'Configured hosting, domain, DNS, and SMTP mail services',
    'Built a gallery page with AJAX-based image loading',
    'Customized booking plugin components with CSS',
    'Optimized WordPress server performance and deployment settings',
  ],

  challenges:
    'One of the main challenges was understanding the structure and limitations of WordPress plugins and themes. Another challenge was communicating technical decisions clearly to a non-technical client throughout the redesign process.',

  reflection:
    'This project strengthened my understanding of WordPress development, CMS workflows, hosting, and deployment. It also improved my teamwork, project coordination, and client communication skills. Our project was awarded 1st place among all teams in the class.',

  extraImages: ['/postImg/chezmari/demo.png'],
  videoUrl: 'https://www.youtube.com/embed/R0dx3OQ5uzM?si=JBO3DqlY4kZrg-ym',
  aspect: '16/9',

  contribution: [
    { tech: 'Project Management', percent: 100 },
    { tech: 'Hosting', percent: 100 },
    { tech: 'Booking System', percent: 100 },
    { tech: 'Tailwind CSS', percent: 20 },
    { tech: 'Custom CSS', percent: 30 },
  ],
},
 {
  id: 'Beep',
  label: ['Group'],
  title: 'Beep',
  subtitle: 'REACT NATIVE SAFETY APP',
  icon: Beep,
  banner: BeepImg,
  techStack: ['TypeScript', 'React Native', 'Firebase'],

  overview:
    'Beep is a mobile safety app designed to help users travel more safely using location-based guidance and crime data. The app provides safe route recommendations, nearby safe zones, SOS alerts, and incident reporting features.',

  keyFeatures: [
    'Safe route recommendations based on public crime data',
    'Location-based guidance to nearby safe zones',
    'Emergency SOS system with live location sharing via SMS',
    'Incident reporting system with map-based photo pinning',
  ],

  myContributions: [
    'Managed the team Git repository and technical documentation',
    'Developed the SOS emergency page with alert sound integration',
    'Built the incident snapshot feature with map-based image pinning',
    'Handled Firebase data management and synchronization',
    'Implemented SMS alerts for sharing live location with emergency contacts',
    'Designed and developed the onboarding and sign-up flow',
  ],

  challenges:
    'As one of the largest projects in our program, team coordination was a major challenge. To improve collaboration, we restructured responsibilities and introduced a dual project management system. On the technical side, it was our first experience building a mobile app with React Native and Expo, so we spent significant time learning the ecosystem and solving setup and integration issues during development.',

  reflection:
    'This project gave me hands-on experience building a mobile application with React Native, Expo, and Firebase. I became more comfortable learning unfamiliar technologies, collaborating within a large team, and presenting technical ideas clearly. Among 10 teams, our project placed 3rd overall.',

  videoUrl: 'https://www.youtube.com/embed/GoaUL_IReU8?si=xGpe0jkKgQZdfnZ_',
  aspect: '9/16',
  link: 'https://www.beep-safety.com/',

  contribution: [
    { tech: 'TypeScript', percent: 25 },
    { tech: 'React Native', percent: 50 },
    { tech: 'Expo', percent: 50 },
    { tech: 'Firebase', percent: 100 },
  ],
},
  // {
  //   id: 'imdb',
  //   label: ['Personal'],
  //   title: 'IMDb',
  //   subtitle: 'ASP.NET MVC WEB APP',
  //   icon: IMDB,
  //   banner: IMDBImg,
  //   techStack: ['C#', 'Bootstrap', 'ASP.NET', 'CSS', 'MySQL', 'Azure'],
  //   overview:
  //     'This project is a mock IMDb website built using ASP.NET MVC with a focus on clean architecture, modular design, and object-oriented principles. It simulates a movie browsing platform with real-time data and authentication features.',
  //   keyFeatures: [
  //     'Developed using MVC pattern in ASP.NET for modular and scalable architecture',
  //     'Implemented responsive UI using Bootstrap 5',
  //     'Used .NET Identity to implement authentication system',
  //     'Integrated OMDb and TMDb APIs to fetch real-time movie data',
  //     'Implemented genre filtering and search functionality for movies',
  //     'Used NewsAPI to fetch current movie-related news',
  //   ],
  //   myContributions: [
  //     'Planned and developed the entire project independently',
  //     'Set up the overall MVC structure and project architecture',
  //     'Integrated multiple external APIs (OMDb, TMDb, NewsAPI)',
  //     'Implemented genre filter, search, and movie details view',
  //     'Designed UI using Bootstrap 5 with responsiveness in mind',
  //     'Configured and deployed the app to Azure',
  //   ],
  //   challenges:
  //     'A challenge I faced was during deployment to Azure. While the application worked perfectly with the local SQL Server, I encountered migration errors when publishing to the cloud. These issues were related to version mismatches and connection string configurations. After deployment, I reset the server environment and carefully reviewed all functionalities to ensure stability. This process taught me the importance of verifying database migrations and thoroughly testing in a production environment.',
  //   reflection:
  //     'This project helped me solidify my understanding of the MVC architecture and API integration in ASP.NET. I gained hands-on experience with implementing authentication, integrating external APIs, and designing modular, maintainable components. Additionally, deploying the application along with a SQL database to Azure gave me insight into real-world infrastructure challenges, including migration and configuration issues.',
  //   extraImages: ['/postImg/imdb/filtering.png', '/postImg/imdb/searching.png'],
  //   link: 'https://imdb-fkdvcbateeb8brcw.canadacentral-01.azurewebsites.net/',
  // },
 {
  id: 'fourSeason',
  label: ['Client', 'Personal'],
  title: 'Four Season',
  subtitle: 'FULL-STACK BOOKING PLATFORM',
  icon: FourSeason,
  banner: FourSeasonImg,

  techStack: [
    'TypeScript',
    'Next.js',
    'React',
    'Strapi',
    'PostgreSQL',
    'Tailwind CSS',
  ],

  overview:
    'A full-stack booking platform built for a local tour rental business in Vancouver. The client previously managed reservations manually through Instagram DMs, so I developed a real-time booking system with CMS support to streamline bookings and content management.',

  keyFeatures: [
    'Real-time seat availability and booking management',
    'Automated email confirmations with Resend',
    'Strapi CMS for client-managed content updates',
    'Responsive UI built with React and Tailwind CSS',
  ],

  myContributions: [
    'Built and launched the entire project independently within one week',
    'Designed the UI and booking flow',
    'Developed the frontend and backend using Next.js and Strapi',
    'Configured and managed PostgreSQL with Neon',
    'Deployed the frontend on Vercel and backend on Render',
  ],

  challenges:
    'One challenge was integrating the Resend API for automated email confirmations, as it was my first time working with the service. I also had to carefully configure relational permissions in Strapi to ensure stable content management and database access across related collections.',

  reflection:
    'This project strengthened my full-stack development skills and gave me hands-on experience building a production-ready booking platform independently. I also improved my ability to gather client requirements, design user-focused workflows, and manage deployment across multiple services.',

  extraImages: [
    '/postImg/fourseason/booking.png',
    '/postImg/fourseason/email.png',
  ],

  link: 'https://4season.vercel.app',
},
  {
  id: 'hilton',
  label: ['Personal'],
  title: 'Hilton',
  subtitle: 'HOTEL BOOKING APP REDESIGN',
  icon: Hilton,
  banner: HiltonImg,

  techStack: ['TypeScript', 'React', 'Vite', 'Tailwind CSS'],

  overview:
    'A solo UI/UX redesign project focused on improving the Hilton Honors booking experience. The project reimagined the app with cleaner layouts, simplified booking flows, and a more modern mobile-first interface.',

  keyFeatures: [
    'Redesigned booking and room browsing flows',
    'Simplified digital key and check-in experience',
    'Responsive UI optimized for mobile and desktop',
    'Component-based frontend built with React and Tailwind CSS',
    'Fast development environment powered by Vite',
  ],

  myContributions: [
    'Analyzed UX issues in the existing Hilton website and mobile app',
    'Redesigned the interface with a cleaner and more consistent user experience',
    'Built the frontend using reusable React components',
    'Improved responsive layouts and mobile usability',
  ],

  challenges:
    'One challenge was modernizing the interface while keeping familiar user flows from the original app. I also focused on maintaining accessibility and usability across different screen sizes.',

  reflection:
    'This project strengthened my understanding of UI/UX design, responsive layouts, and component-based frontend development. It also helped me translate design decisions into practical React implementations.',

  extraImages: ['/postImg/hilton/original.png', '/postImg/hilton/new.png'],

  link: 'https://mdia-2025-project3.vercel.app/',
},
  // {
  //   id: 'stuffNStuff',
  //   label: ['Group'],
  //   title: 'Stuff N Stuff',
  //   subtitle: 'MARKETPLACE WEB APP',
  //   icon: StuffNStuff,
  //   banner: StuffNStuffImg,
  //   techStack: [
  //     'TypeScript',
  //     'Express',
  //     'PostgreSQL',
  //     'HTML',
  //     'CSS',
  //     'EJS',
  //     'Azure',
  //   ],
  //   overview:
  //     'Stuff N Stuff is a group project to build second-hand marketplace app that replicates key features of platforms like Facebook Marketplace. It provides real-time item listings, secure user authentication, and integrated chat between users.',
  //   keyFeatures: [
  //     'User registration and secure login with email verification',
  //     'Full item posting functionality (create, read, update, delete)',
  //     'Category-based filtering using AJAX for instant results',
  //     'Real-time chat between buyers and sellers',
  //     'Personalized item recommendations based on user behavior',
  //   ],
  //   myContributions: [
  //     'Planned and designed the overall layout and UX flow',
  //     'Developed a recommendation system based on user clicks and views',
  //     'Implemented secure local authentication with email verification',
  //     'Built the category filtering feature using AJAX for dynamic updates',
  //   ],
  //   challenges:
  //     'Initially, the filtering system caused the entire page to reload with every interaction, which disrupted the user experience. To fix this, I refactored the system to use AJAX, allowing for seamless category-based filtering without a full reload.<br /><br />Another challenge was handling image uploads—without cloud storage, images posted during development couldn’t be accessed on the live server. To solve this, I integrated cloud-based storage to ensure consistent access across both environments.',
  //   reflection:
  //     'This was the first full project I completed from start to finish, handling both backend and frontend responsibilities. It helped me gain confidence in building real-world applications and taught me the value of clean structure, team coordination, and thinking ahead for scalability.',
  //   // link: 'https://idspstuffnstuff-production.up.railway.app/',
  //   extraImages: ['/postImg/stuffnstuff/demo.png'],
  //   contribution: [
  //     { tech: 'TypeScript', percent: 50 },
  //     { tech: 'EJS', percent: 50 },
  //     { tech: 'CSS', percent: 100 },
  //     { tech: 'PostgreSQL', percent: 50 },
  //     { tech: 'Azure', percent: 100 },
  //   ],
  // },
]

export default projectsDB
