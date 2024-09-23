import React from 'react';
import jeffImg from '../assets/l_jefferson.png';
import { FaTools } from 'react-icons/fa'; // Import an icon for the resume button and a generic one
import { DiJavascript1, DiPython } from 'react-icons/di';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaFire, FaPython } from 'react-icons/fa';
import { SiRedux, SiNestjs, SiMongodb, SiTypescript, SiExpress, SiNx } from 'react-icons/si';
import { IconContext } from 'react-icons'; // Import IconContext from react-icons

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
  { name: 'Vite', url: 'https://vitejs.dev/guide/', icon: <FaTools /> },  // Using a generic tool icon for Vite
  { name: 'Django', url: 'https://docs.djangoproject.com/en/stable/', icon: <FaPython /> },
  { name: 'Python FastAPI', url: 'https://fastapi.tiangolo.com/', icon: <FaPython /> },
  { name: 'Flask', url: 'https://flask.palletsprojects.com/en/latest/', icon: <FaPython /> }
];

const Home = () => {
  return (
    <main id="top" className="bg-cover bg-center min-h-screen text-gray-200">
      <div className="container mx-auto flex flex-wrap items-center bg-opacity-90 bg-gray-900 p-8 rounded-lg">
        <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <img
            src={jeffImg}
            alt="Portrait of Lawrence Jefferson"
            className="w-1/2 h-auto rounded-full shadow-2xl border-4 border-white"
          />
        </div>
        <div className="w-full md:w-2/3 px-4">
          <h1 className="text-5xl font-bold mb-4">
            Hi! I'm <strong className="text-yellow-300">Lawrence Jefferson</strong>{' '}
            <br />
            <small className="text-yellow-200">Web Developer / JavaScript Fullstack and Python Enthusiast</small>
          </h1>
          <p className="text-yellow-100 mb-6">
            I am{' '}
            <a
              href="https://www.linkedin.com/in/lawrence-jefferson-ii-46497075"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:underline"
            >
              Lawrence Jefferson II
            </a>
            , also known as{' '}
            <a
              href="https://github.com/MenokoOG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:underline"
            >
              Menoko OG- Original Geek !
            </a>
            . I am a full stack web developer, software tinkerer, cybersecurity
            enthusiast, and web content creator.
          </p>

          <br />
          <br />
          <h2 className="text-3xl font-bold mb-4">What I am up to:</h2>
          <p className="text-yellow-100 mb-4">
            Working on a few projects, learning new technologies, and creating content.
          </p>


          <div className="tech-stack mt-8">
            <h2 className="text-2xl font-bold mb-4 tech-stack-title">My Tech Stack:</h2>
            <IconContext.Provider value={{ size: '2rem', color: '#FFEB3B' }}>
              <ul className="flex flex-wrap justify-center">
                {techStack.map((tech, index) => (
                  <li key={index} className="tech-item mx-4 mb-4 flex flex-col items-center">
                    <a
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
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
