import React from 'react';

const Contact = () => {
  return (
    <section id="contact" >
      <div className="container mx-auto">
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white">Get in touch.</h2>
          <p className="text-blue-100">Email: jefftkddan@gmail.com</p>
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
