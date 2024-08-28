import React from 'react';
import { FaFileDownload } from 'react-icons/fa'; 

const Contact = () => {
  return (
    <section id="contact" className="mx-auto flex flex-wrap items-center bg-opacity-70 bg-black p-8 rounded-lg">
      <div className="container mx-auto">
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-yellow-200">Get in touch.</h2>
          <p className="text-yellow-100">Email: jefftkddan@gmail.com</p>
          <a
            href="/resume/dev_general_resume_jefferson.pdf"
            className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFileDownload className="mr-2" /> My Resume
          </a>
        </header>
        <ul className="social flex justify-center space-x-6">
          <li><a href="https://www.linkedin.com/in/lawrence-jefferson-ii-46497075" className="icon brands fa-linkedin-in text-white text-3xl hover:text-blue-200 transition duration-300" target="_blank" rel="noopener noreferrer"><span className="sr-only">LinkedIn</span></a></li>
          <li><a href="https://github.com/MenokoOG" className="icon brands fa-github text-white text-3xl hover:text-blue-200 transition duration-300" target="_blank" rel="noopener noreferrer"><span className="sr-only">Github</span></a></li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
