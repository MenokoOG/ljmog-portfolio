import React from 'react';
import ProjectCard from './ProjectCard';
import project8 from '../assets/project_screenshots/grocery.png';                       // Grocery List App
import project1 from '../assets/project_screenshots/Screenshot 2024-06-27 185551.png';
import project3 from '../assets/project_screenshots/Screenshot 2024-03-27 163015.png';
import project4 from '../assets/project_screenshots/qr_code.png';
import project5 from '../assets/project_screenshots/fizzBuzz.png';
import project6 from '../assets/project_screenshots/nx_todo.png';
import project7 from '../assets/project_screenshots/random_dog.png';

const HobbyProjects = () => {
    return (
        <section
            id="side-projects"
            className="container mx-auto p-8 bg-black bg-opacity-70 rounded-lg mt-16"
            aria-labelledby="hobby-projects-heading"
        >
            <div className="px-8">
                <header className="mb-12 text-center">
                    <h2 id="hobby-projects-heading" className="text-4xl font-bold text-yellow-200">
                        Hobby & Learning Projects
                    </h2>
                    <p className="text-yellow-100 mt-4">Just for fun, experimentation, or exploring new tech.</p>
                </header>

                <div className="flex flex-wrap justify-center gap-8">
                    <ProjectCard
                        image={project1}
                        title="Python & React Sci-Fi CRUD"
                        description="A Sci-Fi themed CRUD app (FastAPI + MongoDB Atlas backend, React/Vite/TS frontend). Create and manage space-opera characters!"
                        liveLink="https://sci-fi-app-frontend.onrender.com"
                        repoLink="https://github.com/MenokoOG/sci-fi-app"
                    />

                    <ProjectCard
                        image={project3}
                        title="MERN Stack Helper 2.0"
                        description="A support tool for fellow students, featuring authentication, theming, and user-specific CRUD using the MERN stack."
                        liveLink="https://mern-stack-helper-2-0.onrender.com"
                        repoLink="https://github.com/MenokoOG/mern_stack_help_2"
                    />

                    <ProjectCard
                        image={project4}
                        title="QR Code Generator"
                        description="Generate QR codes on the fly in a React/Vite app—type a URL and get a scannable image."
                        repoLink="https://github.com/MenokoOG/qr-code-react-app"
                    />

                    <ProjectCard
                        image={project5}
                        title="FizzBuzz React"
                        description="Interactive FizzBuzz with sliders, card animations, and Tailwind styling."
                        repoLink="https://github.com/MenokoOG/fizzbuzz-react"
                    />

                    <ProjectCard
                        image={project6}
                        title="Nx Dev ToDo App"
                        description="A monorepo ToDo CRUD app built with Nx, Nest.js, React, TypeScript & MongoDB."
                        repoLink="https://github.com/MenokoOG/todo-app"
                    />

                    <ProjectCard
                        image={project7}
                        title="Random Dog Viewer"
                        description="Express backend + Flask frontend that pulls random dog pics from Dog CEO API—styled with Tailwind."
                        repoLink="https://github.com/MenokoOG/js-py"
                    />

                    <ProjectCard
                        image={project8}
                        title="Grocery List App"
                        description="Grocery app built for my daughter using React and Firebase. Full CRUD with a clean, mobile-first UI."
                        repoLink="https://github.com/MenokoOG/luxgirl-grocery-app"
                    />
                </div>
            </div>
        </section>
    );
};

export default HobbyProjects;
