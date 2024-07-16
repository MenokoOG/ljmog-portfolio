import React from 'react';
import jeffImg from '../assets/l_jefferson.png';
import './Home.css'; 

const techStack = [
  { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'Python', url: 'https://www.python.org/doc/' },
  { name: 'React', url: 'https://reactjs.org/docs/getting-started.html' },
  { name: 'Node', url: 'https://nodejs.org/en/docs/' },
  { name: 'Express', url: 'https://expressjs.com/en/starter/installing.html' },
  { name: 'Nx Dev', url: 'https://nx.dev/latest/react/getting-started/intro' },
  { name: 'Nest.js', url: 'https://nestjs.com/' },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/docs/' },
  { name: 'MongoDB', url: 'https://docs.mongodb.com/' },
  { name: 'Firebase', url: 'https://firebase.google.com/docs' },
  { name: 'Vite', url: 'https://vitejs.dev/guide/' }
];

const Home = () => {
  return (
    <main id="top" className="bg-cover bg-center min-h-screen">
      <div className="container mx-auto flex flex-wrap items-center bg-opacity-70 bg-black p-8 rounded-lg">
        <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <img
            src={jeffImg}
            alt="Portrait of Lawrence Jefferson"
            className="w-1/2 h-auto rounded-full shadow-2xl border-4 border-white"
          />
        </div>
        <div className="w-full md:w-2/3 px-4 text-white">
          <h1 className="text-5xl font-bold mb-4">
            Hi! I'm <strong className="text-yellow-300">Menoko OG</strong>{' '}
            <small className="text-yellow-200">- Original Geek!</small>
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
              Menoko OG
            </a>
            . I am a web developer, junior software tinkerer, cybersecurity
            enthusiast, and web content creator.
          </p>
          <a
            href="/resume/dev_general_resume_jefferson.pdf"
            className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
          <br />
          <br />
          <h2 className="text-3xl font-bold mb-4">What I am up to in personal development:</h2>
          <p className="text-yellow-100 mb-4">
             Currently working on an awesome project with Vast AI Gang using Nx Dev, Nest.js, React, Redux, Firebase, Firestore,  and
            Typescript.
          </p>
          <p className="text-yellow-100">
            My site is built using React + Vite, Tailwind CSS, custom hooks, and
            custom JavaScript for auto-populating the imageData file for
            rendering.
          </p>
          <div className="tech-stack">
            <h2 className="text-2xl font-bold mb-4 tech-stack-title">My Tech Stack:</h2>
            <ul className="text-yellow-100 swirl-text">
              {techStack.map((tech, index) => (
                <li key={index} className="tech-item">
                  <a
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {tech.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
