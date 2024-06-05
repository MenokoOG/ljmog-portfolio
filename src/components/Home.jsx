import React from 'react';
import jeffImg from '../assets/l_jefferson.png';


const Home = () => {
  return (
    <main
      id="top"
      className="bg-cover bg-center min-h-screen"
      
    >
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
            . I am a web developer, Python programming tinkerer, cybersecurity
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
          <h2 className="text-3xl font-bold mb-4">
            What I am up to in personal development:
          </h2>
          <p className="text-yellow-100 mb-4">
            Gaining more experience in development. Currently working on an
            experience project with Vast AI Gang, learning Nx Dev, Nest.js, and
            Typescript.
          </p>
          <p className="text-yellow-100">
            My site is built using React + Vite, Tailwind CSS, custom hooks, and
            custom JavaScript for auto-populating the imageData file for
            rendering.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
