import React from 'react';
import ProjectCard from './ProjectCard';
import project1 from '../assets/project_screenshots/Screenshot 2024-06-27 185551.png';
import project2 from '../assets/project_screenshots/Screenshot 2024-06-01 132640.png';
import project3 from '../assets/project_screenshots/Screenshot 2024-03-27 163015.png';
import project4 from "../assets/project_screenshots/qr_code.png"
import project5 from "../assets/project_screenshots/fizzBuzz.png"
import project6 from "../assets/project_screenshots/nx_todo.png"
import project7 from "../assets/project_screenshots/random_dog.png"
import project8 from "../assets/project_screenshots/grocery.png"
import project9 from "../assets/project_screenshots/vastaigang.png"
// import placeholder from '../assets/project_screenshots/placeholder.png';

const Projects = () => {
  return (
    <section id="work" className="mx-auto py-12 g-opacity-70 bg-black p-8 rounded-lg">
      <div className="container mx-auto px-8">
        <header className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-yellow-200">Web Development Projects</h2>
          <p className="text-yellow-100 mt-4">Here some web sites and web applications I have developed since completing my full stack JavaScript web development course at <a href="https://vschool.io/courses/development/" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">V School</a></p>
          <p className="text-yellow-100 mt-2"> Check back often for updates.</p>
        </header>
        <div className="flex flex-wrap justify-center">
          <ProjectCard
            image={project9}
            title="Vast AI Gang Dashboard Application"
            description={`As part of an Agile team, I contributed to developing a dashboard application for hosts renting out their machines on Vast AI. My responsibilities included creating features, refactoring code, and ensuring seamless integration between the frontend and backend. The application provided a user-friendly interface for monitoring machine metrics, configuring notification settings, and generating reports.
              \nProject Duration: April 25, 2024 - July 25, 2024
              \nTeam: Two Project Managers, Lead Software Engineer, Sprint Team (Lawrence Jefferson II aka Menoko OG, another developer)
              \nTech Stack: Frontend: React, TypeScript, Redux, Tailwind CSS; Backend: Nest.js; Database: Firebase, Firestore; Tools: Nx Dev Monorepo, Axios, Chart.js, react-chartjs-2
              \nKey Contributions:
              \n1. Notification Settings Component: Developed a feature-rich React component allowing users to configure their notification preferences, integrated with Redux for state management, and styled using Tailwind CSS.
              \n2. Logout Functionality: Implemented logout functionality across desktop and mobile views, ensuring a smooth and secure user experience.
              \n3. Reports Component Enhancements: Improved the functionality, usability, and visual appeal of the reports component, including data filtering, export options, and dynamic data display.
              \n4. Dashboard Component: Created an interactive dashboard to display and compare machine metrics using various chart types. Utilized a custom hook for asynchronous data fetching and implemented a modal for better visualization.`}
          />
          <ProjectCard
            image={project1}
            title="Python & React Sci-Fi-App"
            description="The backend is built with FastAPI and MongoDB Atlas, while the frontend uses React, Vite, TypeScript, and Tailwind CSS. Welcome to the Sci-Fi Themed CRUD Application! This app lets you manage characters in a sci-fi universe. You can create, read, update, and delete characters."
            note="Note: Sorry !!! This takes about two minutes to spin up on free tier of render deployment."
            liveLink="https://sci-fi-app-frontend.onrender.com"
            repoLink="https://github.com/MenokoOG/sci-fi-app"
          />
          <ProjectCard
            image={project2}
            title="LuxGirl OG - Original Geek! Website"
            description="This application was built using React + Vite, Tailwind CSS, Firebase/Firestore, some custom hooks, custom utility functions, and API integration."
            liveLink="https://luxgirlog.netlify.app/"
          />
          <ProjectCard
            image={project3}
            title="MERN Stack Helper 2.0"
            description="This application is a full stack application with authentication. It uses HTML, CSS, JavaScript, MongoDB, Express.js, React + Vite, and Node.js. This application demonstrates complex routing, multiple theme options, and user-specific CRUD operations with custom API. MERN Stack Helper, our primary aim is to support fellow students in their journey through the Full Stack Web Development course."
            note="Note: Sorry !!! This takes about two minutes to spin up on free tier of render deployment."
            liveLink="https://mern-stack-helper-2-0.onrender.com"
            repoLink="https://github.com/MenokoOG/mern_stack_help_2"
          />
          <ProjectCard
            image={project4}
            title="QR Code Generator React"
            description="A React, Vite, and Jsx App that generates a QR Code from an input of a web address."
            repoLink="https://github.com/MenokoOG/qr-code-react-app"
          />
          <ProjectCard
            image={project5}
            title="FizzBuzz React"
            description="This is a fun and interactive FizzBuzz game built with React and Tailwind CSS. The application allows users to select a range using a slider or input a number directly to generate the FizzBuzz sequence. The cards representing the sequence are styled with cool effects and animations to make the experience more engaging."
            repoLink="https://github.com/MenokoOG/fizzbuzz-react"
          />
          <ProjectCard
            image={project6}
            title="ToDo App in Nx Dev Monorepo"
            description="Full Stack todo CRUD app built in Nx Dev monorepo, Nest.js, React, Typescript, and MongoDB."
            repoLink="https://github.com/MenokoOG/todo-app"
          />
          <ProjectCard
            image={project7}
            title="JavaScript Back-end and Python Front-end"
            description="This is a simple project that combines a JavaScript backend using Express and a Python frontend using Flask. It fetches random dog images from the Dog CEO API and displays them with a nice Tailwind CSS style."
            repoLink="https://github.com/MenokoOG/js-py"
          />
          <ProjectCard
            image={project8}
            title="Grocery List App"
            description="Grocery App built for daughter using React and Firebase. React handles front-end and firebase handles back-end requirements. It has full CRUD operations and is an alternative to a full stack application with programmed back-end."
            repoLink="https://github.com/MenokoOG/luxgirl-grocery-app"
          />
        </div>
        <footer className="mt-12 text-center">
          <a href="https://menokoog.github.io/Past-Web-Projects-for-Clients/" className="inline-block bg-blue-500 text-yellow-400 px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300" target="_blank" rel="noopener noreferrer">See some of my 2010-2013 Web Projects</a>
        </footer>
      </div>
    </section>
  );
};

export default Projects;
