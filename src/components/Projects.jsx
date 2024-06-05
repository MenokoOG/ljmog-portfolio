import React from 'react';
import project1 from '../assets/project_screenshots/Screenshot 2024-03-17 115016.png';
import project2 from '../assets/project_screenshots/Screenshot 2024-06-01 132640.png';
import project3 from '../assets/project_screenshots/Screenshot 2024-03-27 163015.png';

const Projects = () => {
  return (
    <section id="work" className="mx-auto flex flex-wrap items-center bg-opacity-70 bg-black p-8 rounded-lg">
      <div className="container mx-auto">
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-yellow-200">Web Development Projects</h2>
          <p className="text-yellow-100">Here are a few projects I completed in my full stack JavaScript web development course at <a href="https://vschool.io/courses/development/" target="_blank" className="text-yellow-300 hover:underline">V School</a></p>
          <p className="text-yellow-100">I do work on other more interesting personal projects and they will have to be asked about as they are not public projects. Check back often though as I will put more interesting public ones here as I develop them; other than my school projects that have already been built by every other developer out there in the industry.</p>
        </header>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="box style1 bg-white p-6 rounded-lg shadow-lg">
              
                <img src={project1} alt="Archive Explorer" className="w-full h-auto rounded-lg" />
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4"><a href="https://github.com/MenokoOG/archive-explorer" target="_blank" className="text-blue-500 hover:underline">Archive Explorer</a></h3>
              <p className="text-gray-700 mb-4">This application was built using HTML, CSS, JavaScript, and React + Vite. This application demonstrates a front-end only application that uses API integration.</p>
              <p className="text-gray-700 mb-4">This application allows users to check if a webpage has been archived by the Wayback Machine. Simply enter the URL of the webpage you wish to check, and Archive Explorer will tell you if an archived snapshot is available.</p>
              <h3 className="text-xl font-semibold text-gray-800"><a href="https://menokowebarchiveexplore.netlify.app/" target="_blank" className="text-blue-500 hover:underline">Live Link</a></h3>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="box style1 bg-white p-6 rounded-lg shadow-lg">
              
                <img src={project2} alt="LuxGirl OG Website" className="w-full h-auto rounded-lg" />
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">LuxGirl OG - Original Geek! Website</h3>
              <p className="text-gray-700 mb-4">This application was built using React + Vite, tailwind css, firebase/firestore, some custom JSX, and API integration. </p>
              <p className="text-gray-700 mb-4"></p>
              <h3 className="text-xl font-semibold text-gray-800"><a href="https://luxgirlog.netlify.app/" target="_blank" className="text-blue-500 hover:underline">Live Link</a></h3>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="box style1 bg-white p-6 rounded-lg shadow-lg">
              
                <img src={project3} alt="MERN Stack Helper 2.0" className="w-full h-auto rounded-lg" />
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4"><a href="https://github.com/MenokoOG/mern_stack_help_2" target="_blank" className="text-blue-500 hover:underline">MERN Stack Helper 2.0</a></h3>
              <p className="text-gray-700 mb-4">This application is a full stack application with authentication. It uses HTML, CSS, JavaScript, MongoDB, Express.js, React + Vite, and Node.js. This application demonstrates complex routing, multiple theme options, and user-specific CRUD operations with custom API.</p>
              <p className="text-gray-700 mb-4">MERN Stack Helper, our primary aim is to support fellow students in their journey through the Full Stack Web Development course. We understand the challenges of mastering multiple technologies, which is why we've developed this application as a reference and helping tool.</p>
              <h3 className="text-xl font-semibold text-gray-800"><a href="https://mern-stack-helper-2-0.onrender.com" target="_blank" className="text-blue-500 hover:underline">Live Link</a></h3>
            </div>
          </div>
        </div>
        <footer className="mt-12 text-center">
          <a href="https://menokoog.github.io/Past-Web-Projects-for-Clients/" className="inline-block bg-blue-500 text-yellow-400 px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300" target="_blank">See some of my 2010-2013 Web Projects</a>
        </footer>
      </div>
    </section>
  );
};

export default Projects;
