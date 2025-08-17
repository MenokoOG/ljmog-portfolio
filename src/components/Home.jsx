import React from 'react';
import jeffImg from '../assets/LJ-river-Hells-Canyon.jpg';
import { FaTools } from 'react-icons/fa';
import { DiJavascript1, DiPython } from 'react-icons/di';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaFire, FaPython, FaDatabase } from 'react-icons/fa';
import { SiRedux, SiExpress, SiNx, SiNestjs, SiTypescript, SiMongodb, SiGraphql } from 'react-icons/si';
import { IconContext } from 'react-icons';

import './Home.css';

const techStack = [
  { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: <DiJavascript1 /> },
  { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: <FaHtml5 /> },
  { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: <FaCss3Alt /> },
  { name: 'Python', url: 'https://www.python.org/doc/', icon: <DiPython /> },
  { name: 'React', url: 'https://reactjs.org/docs/getting-started.html', icon: <FaReact /> },
  { name: 'Redux', url: 'https://redux.js.org/introduction/getting-started', icon: <SiRedux /> },
  { name: 'Node', url: 'https://nodejs.org/en/docs/', icon: <FaNodeJs /> },
  { name: 'Express', url: 'https://expressjs.com/en/starter/installing.html', icon: <SiExpress /> },
  { name: 'Nx Dev', url: 'https://nx.dev/latest/react/getting-started/intro', icon: <SiNx /> },
  { name: 'Nest.js', url: 'https://nestjs.com/', icon: <SiNestjs /> },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/docs/', icon: <SiTypescript /> },
  { name: 'MongoDB', url: 'https://docs.mongodb.com/', icon: <SiMongodb /> },
  { name: 'Firebase', url: 'https://firebase.google.com/docs', icon: <FaFire /> },
  { name: 'Vite', url: 'https://vitejs.dev/guide/', icon: <FaTools /> },
  { name: 'Django', url: 'https://docs.djangoproject.com/en/stable/', icon: <FaPython /> },
  { name: 'Python FastAPI', url: 'https://fastapi.tiangolo.com/', icon: <FaPython /> },
  { name: 'Flask', url: 'https://flask.palletsprojects.com/en/latest/', icon: <FaPython /> },
  { name: 'GraphQL', url: 'https://graphql.org/learn/', icon: <SiGraphql /> },
  { name: 'SQL', url: 'https://www.w3schools.com/sql/', icon: <FaDatabase /> },
];

const Home = () => {
  return (
    <main id="top" className="bg-cover bg-center min-h-screen text-gray-200">
      <div className="mx-auto flex flex-wrap items-center bg-opacity-70 bg-black p-8 rounded-lg">
        <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <img
            src={jeffImg}
            alt="Lawrence Jefferson II at Hells Canyon"
            className="w-1/2 h-auto rounded-full shadow-2xl border-4 border-white"
            loading="lazy"
          />
        </div>

        <div className="w-full md:w-2/3 px-4">
          <h1 className="text-5xl font-bold mb-2">
            Hi! I’m <span className="text-yellow-300">Lawrence Jefferson II</span>
          </h1>
          <p className="text-yellow-200 font-medium mb-6">
            Chief Technology Officer of <a href="https://gunkustom.com" className="hover:underline text-yellow-300" target="_blank" rel="noopener noreferrer">GunKustom.com</a>
          </p>

          <p className="text-yellow-100 mb-6">
            Also known as{' '}
            <a
              href="https://github.com/MenokoOG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:underline"
            >
              M3n0koOg — Original Geek
            </a>
            . JavaScript & Python full-stack enthusiast.
          </p>

          <h2 className="text-3xl font-bold mb-4">What I’m up to</h2>
          <p className="text-yellow-100 mb-6">
            Strategically leading the technology at GunKustom while actively building APIs, dashboards, and automation pipelines.
          </p>

          <div className="tech-stack mt-8">
            <h3 className="text-2xl font-bold mb-4 tech-stack-title">My Tech Stack</h3>
            <IconContext.Provider value={{ size: '2rem', color: '#FFEB3B', className: 'focus:outline-none' }}>
              <ul className="flex flex-wrap justify-center">
                {techStack.map((tech, index) => (
                  <li key={index} className="tech-item mx-4 mb-4 flex flex-col items-center">
                    <a
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                      aria-label={`Learn more about ${tech.name}`}
                    >
                      {tech.icon}
                    </a>
                    <span className="mt-2 text-sm">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
