import React from 'react';
import ProjectCard from './ProjectCard';

// Images
import projectVast from '../assets/project_screenshots/vastaigang.png';   // Vast AI Gang
import projectGunkustom from '../assets/project_screenshots/gunkustom.png'; // Gunkustom
import projectLuxgirl from '../assets/project_screenshots/Screenshot 2024-06-01 132640.png'; // LuxGirl OG
import projectPowalert from '../assets/project_screenshots/powalert.jpg'; // PowAlert (add this file to your assets)

// Centralized professional projects data (keeps JSX clean)
const professionalProjects = [
  {
    image: projectPowalert,
    title: 'PowAlert',
    description:
      'I led the team effort to build the PowAlert backend server powering PowAlert, a real-time monitoring and alert platform. The server aggregates data streams, applies threshold-based rules, and issues push notifications via SMS, email, and webhooks.',
    stacks: [
      'Node.js',
      'Express.js',
      'Redis',
      'MongoDB',
      'React',
      'React Native',
      'Twilio',
      'Jest',
    ],
    liveLink: 'https://powalert.com',
    repoLink: 'https://powalert.com',
  },
  {
    image: projectGunkustom,
    title: 'Gunkustom',
    description:
      'As CTO and Principal Backend Developer of GunKustom, I architect a modular, scalable, and secure API for firearm customization. The platform enables users to manage parts, build configurations, and integrate vendor data via third-party services. Proprietary Technologies of GunKustom Stack: ArsenalEngine, StockPile, GunKustom, and GunKustom-Blog',
    stacks: [
      'NestJS',
      'MongoDB',
      'Passport.js',
      'Google OAuth',
      'JWT',
      'Jest',
      'Swagger',
      'TypeScript',
      'Render',
    ],
    liveLink: 'https://gunkustom.com/',
    repoLink: 'https://github.com/MenokoOG/gunkustom-api',
  },
  {
    image: projectVast,
    title: 'Vast AI Gang Dashboard Application',
    description:
      'As part of an Agile team, I delivered features and refactors for a dashboard that supports hosts renting machines on Vast AI. Responsibilities included notification settings, auth/logout flows, report enhancements, and metric visualizations.',
    stacks: [
      'React',
      'TypeScript',
      'Redux',
      'Tailwind CSS',
      'Nest.js',
      'Firebase',
      'Firestore',
      'Nx',
      'Axios',
      'Chart.js',
      'react-chartjs-2',
    ],
    liveLink: 'https://vastai-gang-dashboard.example.com/',
    repoLink: 'https://github.com/MenokoOG/vastai-gang-dashboard',
  },
  {
    image: projectLuxgirl,
    title: 'LuxGirl OG – Original Geek! Website',
    description:
      'Personal brand site built with React + Vite, Tailwind CSS, and Firebase/Firestore. Includes custom hooks/utilities and interactive UI components.',
    stacks: ['React', 'Vite', 'Tailwind CSS', 'Firebase', 'Firestore'],
    liveLink: 'https://luxgirlog.netlify.app/',
    repoLink: undefined,
  },
];

const Projects = () => {
  return (
    <section
      id="work"
      className="container mx-auto p-8 bg-black bg-opacity-70 rounded-lg"
      aria-labelledby="professional-projects-heading"
    >
      <div className="px-8">
        <header className="mb-12 text-center">
          <h2 id="professional-projects-heading" className="text-4xl font-bold text-yellow-200">
            Professional Projects
          </h2>
          <p className="text-yellow-100 mt-4">
            Select production-grade work by Lawrence Jefferson II (M3n0koOg), CTO of GunKustom.com.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-8">
          {professionalProjects.map((proj) => (
            <ProjectCard
              key={proj.title}
              image={proj.image}
              title={proj.title}
              description={proj.description}
              stacks={proj.stacks}
              liveLink={proj.liveLink}
              repoLink={proj.repoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
