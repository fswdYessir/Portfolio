import Beep from '../../src/assets/beep/BeepThumbnail.png'
import BeepImg from '../../src/assets/beep/Beep.png'
// import StuffNStuff from '../../src/assets/stuffnstuff/StuffNStuffThumbnail.png'
// import StuffNStuffImg from '../../src/assets/stuffnstuff/StuffNStuff.png'
import FourSeason from '../../src/assets/fourseason/FourSeasonThumbnail.png'
import FourSeasonImg from '../../src/assets/fourseason/FourSeason.png'
import Hilton from '../../src/assets/hilton/HiltonThumbnail.png'
import HiltonImg from '../../src/assets/hilton/Hilton.png'
import IMDB from '../../src/assets/imdb/IMDBThumbnail.png'
import IMDBImg from '../../src/assets/imdb/IMDB.png'
import ChezMari from '../../src/assets/chezmari/ChezMariThumbnail.png'
import ChezMariImg from '../assets/chezmari/ChezMari.png'
import Journalist from '../assets/journalist/JournalistThumbnail.png'
import JournalistImg from '../assets/journalist/Journalist.png'

const projectsDB = [
  {
    id: 'independent-Journalist',
    label: ['Client', 'Personal'],
    title: 'Independent Journalist',
    subtitle: 'REBUILD CUSTOM WORDPRESS',
    icon: Journalist,
    banner: JournalistImg,
    techStack: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
    overview:
      'A freelance volunteer project built on WordPress to showcase independent YouTube journalists across multiple countries. Each page groups channels by topic—Science and Geopolitics—and includes QR code donation options alongside direct YouTube links. The entire site was built using custom HTML blocks within the Gutenberg editor, with a focus on clarity, accessibility, and responsive design.',
    keyFeatures: [
      'Clean, intuitive card-based UI optimized for mobile and desktop screens',
      'Color scheme and layout tailored to match the project’s message and purpose',
      'Each channel card includes YouTube link, donation button, and scannable QR code',
      'Client-side search and filtering by country and category (Science / Geopolitics)',
      'All revisions implemented based on direct client feedback throughout the project',
    ],
    myContributions: [
      'Developed the full site structure using Gutenberg editor with custom HTML and CSS blocks',
      'Created a dynamic client-side search using vanilla JavaScript and URL query parameters',
      'Integrated QR code generator via external API and embedded it in each channel card',
      'Built and styled 9 fully responsive pages manually without relying on plugins',
      'Collaborated closely with the client to gather feedback and iteratively refine UX and layout',
    ],
    challenges:
      'The biggest challenge was the lack of clear assets and direction from the client at the start of the project. Without defined visual materials or specific requirements, I had to proactively design and share multiple layout drafts to help identify the right concept. After receiving approval on the chosen style, I continued to develop each page and incorporated feedback iteratively, ensuring the result aligned with the client’s evolving expectations.',
    reflection:
      'This project sharpened my front-end design skills and deepened my understanding of how to use WordPress as a flexible CMS with minimal reliance on plugins. I also learned how to structure and scale multi-page static content effectively—entirely using HTML, CSS, and JavaScript inside WordPress.Beyond the technical growth, it was personally rewarding to support independent journalism through volunteer work. Managing client feedback cycles and simplifying backend tasks for non-technical users helped me grow as both a developer and communicator.',
    extraImages: ['/postImg/journalist/demo.png'],
    videoUrl: '',
    aspect: '16/9',
    link: 'https://supportindependantjournalist.com/',
  },
  {
    id: 'chezmari',
    label: ['Client', 'Group'],
    title: 'Chez Mari Salon',
    subtitle: 'WEBSITE REBUILD USING WORDPRESS',
    icon: ChezMari,
    banner: ChezMariImg,
    techStack: ['WordPress', 'Tailwind CSS', 'CSS', 'PHP'],
    overview:
      'Chez Mari was a group project for a real client—a hair salon owner looking to modernize her business website. Our team redesigned the site with CMS capabilities, giving the client full control over content and bookings while improving performance and usability.',
    keyFeatures: [
      'Redesigned and modernized the client’s existing website to improve UX',
      'Modern, responsive UI that aligns with the salon’s branding and concept',
      'WordPress-based CMS built with PHP for easy client content updates',
      'Integrated online booking system with full backend management tools',
    ],

    myContributions: [
      'Managing sprint planning, Jira boards, and Git flow',
      'Setting up hosting, domain, DNS, and SMTP mail server',
      'Create Gallery page with AJAX-based image loading',
      'Customizing booking plugin components with CSS',
      'Optimizing WordPress server performance',
    ],
    challenges:
      'One of the biggest challenges was understanding the structure and limitations of WordPress. Another challenge was communicating technical decisions to a client without a technical background, which required simplifying explanations and using visual references.',
    reflection:
      'This project deepened my understanding of WordPress themes and plugins, as well as domain, DNS, and CMS deployment processes. It also improved my leadership and client communication skills. I’m especially proud that our project was awarded 1st place out of all teams in the class!',
    extraImages: ['/postImg/chezmari/demo.png'],
    videoUrl: 'https://www.youtube.com/embed/R0dx3OQ5uzM?si=JBO3DqlY4kZrg-ym',
    aspect: '16/9',
    link: 'http://chezmari.com/',
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
      'Beep is a personal safety app designed to help users get home safely by using AI and real-world crime data. It recommends secure routes, shows safe zones nearby, and includes real-time emergency features like SOS alerts and camera reporting.',
    keyFeatures: [
      'AI-generated safe routes based on crime data from the Vancouver police department (weekly update)',
      'Map-based guidance to nearby safe zones based on your current location',
      'Emergency SOS system that triggers alerts and sends your live location via SMS',
      'Snapshot feature to report incidents by pinning photos to the map (bridging police data gaps)',
    ],
    myContributions: [
      "Created and maintained the app's technical blog and developer documentation",
      'Managed and maintained the team Git repository for collaborative development',
      'Developed the SOS emergency page with integrated alert sounds',
      'Implemented the snapshot feature and pinned incident images to the map',
      'Handled all data management and synchronization using Firebase (NoSQL)',
      'Built the SMS alert system that shares the user’s live location with emergency contacts',
      'Designed and developed the onboarding and sign-up flow for new users',
    ],
    challenges:
      'As the largest project in our 3-month term, team management proved to be a major challenge. Conflicts arose due to the number of team members and unclear responsibilities. To improve collaboration, we switched from a single project manager to a dual-PM system and clearly divided tasks among the team.</br></br> On the technical side, it was our first time developing a mobile app, and even setting up the environment with Expo and React Native was difficult at first. We relied heavily on documentation, YouTube tutorials, and self-directed learning to overcome technical gaps throughout development.',
    reflection:
      'This was my first time building a mobile app using Expo and React Native. I was hesitant at first to use an entirely new tech stack that none of us had experience with. However, I learned how to approach unfamiliar technologies with curiosity and persistence, and realized that building something functional is possible with the right teamwork and mindset. </br> I also improved my communication skills through team discussions and public presentations. <strong>Among 10 teams, we placed 3rd </strong> overall a result that reflected both our effort and collaboration. If given the chance, I would love to deploy the app in the future to expand its availability to other regions.',
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
  {
    id: 'imdb',
    label: ['Personal'],
    title: 'IMDb',
    subtitle: 'ASP.NET MVC WEB APP',
    icon: IMDB,
    banner: IMDBImg,
    techStack: ['C#', 'Bootstrap', 'ASP.NET', 'CSS', 'MySQL', 'Azure'],
    overview:
      'This project is a mock IMDb website built using ASP.NET MVC with a focus on clean architecture, modular design, and object-oriented principles. It simulates a movie browsing platform with real-time data and authentication features.',
    keyFeatures: [
      'Developed using MVC pattern in ASP.NET for modular and scalable architecture',
      'Implemented responsive UI using Bootstrap 5',
      'Used .NET Identity to implement authentication system',
      'Integrated OMDb and TMDb APIs to fetch real-time movie data',
      'Implemented genre filtering and search functionality for movies',
      'Used NewsAPI to fetch current movie-related news',
    ],
    myContributions: [
      'Planned and developed the entire project independently',
      'Set up the overall MVC structure and project architecture',
      'Integrated multiple external APIs (OMDb, TMDb, NewsAPI)',
      'Implemented genre filter, search, and movie details view',
      'Designed UI using Bootstrap 5 with responsiveness in mind',
      'Configured and deployed the app to Azure',
    ],
    challenges:
      'A challenge I faced was during deployment to Azure. While the application worked perfectly with the local SQL Server, I encountered migration errors when publishing to the cloud. These issues were related to version mismatches and connection string configurations. After deployment, I reset the server environment and carefully reviewed all functionalities to ensure stability. This process taught me the importance of verifying database migrations and thoroughly testing in a production environment.',
    reflection:
      'This project helped me solidify my understanding of the MVC architecture and API integration in ASP.NET. I gained hands-on experience with implementing authentication, integrating external APIs, and designing modular, maintainable components. Additionally, deploying the application along with a SQL database to Azure gave me insight into real-world infrastructure challenges, including migration and configuration issues.',
    extraImages: ['/postImg/imdb/filtering.png', '/postImg/imdb/searching.png'],
    link: 'https://imdb-fkdvcbateeb8brcw.canadacentral-01.azurewebsites.net/',
  },
  {
    id: 'fourSeason',
    label: ['Client', 'Personal'],
    title: 'Four Season',
    subtitle: 'FULL STACK CMS WEB APP',
    icon: FourSeason,
    banner: FourSeasonImg,
    techStack: [
      'TypeScript',
      'CSS',
      'Next.js',
      'React',
      'Strapi',
      'PostgreSQL',
      'Tailwind CSS',
    ],
    overview:
      'This full-stack web application was developed for a local business owner in Vancouver who runs a day-tour rental service—providing equipment, lift passes, and transportation all in one package for tourists and students. The client previously managed bookings manually via Instagram DMs, which became inefficient as the business grew. This project solves that by providing a real-time booking system and a content-manageable website.',
    keyFeatures: [
      'Real-time seat availability and booking system',
      'Automated email confirmations with Resend',
      'Strapi CMS for self-managed content updates',
      'Responsive design with React & Tailwind',
    ],
    myContributions: [
      'Planned and executed the entire project solo within one week',
      'Designed the UI and user experience',
      'Developed both frontend and backend using Next.js and Strapi',
      'Set up and managed the PostgreSQL database (via Neon)',
      'Deployed frontend on Vercel and backend on Render',
    ],
    challenges:
      'One of the key goals was to improve the overall user experience, and email confirmation was identified as the most familiar and effective method. I chose to implement this using the Resend API, but since it was my first time using the tool, I encountered several setup issues during the initial configuration. These errors led to a longer debugging process than expected. However, now that I’m more familiar with the tool, I expect future implementations to be much faster and more efficient.</br></br>Another challenge was ensuring that relational schemas worked properly with Strapi and Neon PostgreSQL. Although the database relationships were correctly set up, I discovered that Strapi also requires explicit permission settings between related tables. Without carefully configuring these settings, the client could encounter errors when managing content. To prevent this, I double-checked all role and permission configurations to ensure a smooth CMS experience.',
    reflection:
      'Through a solo full-stack project, I learned how to manage development based on client needs. I practiced clear communication to gather requirements and propose useful features. While the project initially included email notifications, I also recognized the future potential of adding SMS reminders to improve user engagement.',

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
    subtitle: 'UI/UX APP REDESIGN WITH REACT',
    icon: Hilton,
    banner: HiltonImg,
    techStack: ['TypeScript', 'React', 'Vite', 'Tailwind CSS'],
    overview:
      'The Hilton Honors app redesign was a solo UI/UX-focused project aimed at improving the overall booking experience through intuitive layouts, streamlined user flow, and modern design practices.',
    keyFeatures: [
      "Redesigned the app's structure with a cleaner, more intuitive layout",
      'Focused on improving user flow for room browsing and booking',
      'Created a simplified digital key experience to support 24/7 check-in/out',
      'Applied modern design principles using Tailwind CSS and component-based development in React',
      'Used Vite for faster development and lightweight bundling',
      'Fully responsive design to support mobile and desktop users',
    ],
    myContributions: [
      'Analyzed the existing Hilton website and Hilton Honors mobile app to identify UX pain points and design inconsistencies',
      'Redesigned the interface with a clean and modern aesthetic aligned with current design trends',
      'Developed the frontend using React with component-based architecture for better reusability and scalability',
    ],
    challenges:
      'One challenge was striking a balance between a modernized interface and preserving familiar elements of the existing app. I also had to ensure that the redesigned structure remained accessible and intuitive across devices.',
    reflection:
      'This project deepened my understanding of UI/UX design principles and responsive layout techniques. It also helped me explore how user-centric thinking translates into practical React components and design decisions.',
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
