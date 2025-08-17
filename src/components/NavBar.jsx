import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = ({ onLinkClick }) => {
  const location = useLocation();

  const handleLinkClick = (path) => {
    onLinkClick(path);
  };

  return (
    <nav className="bg-opacity-70 bg-black text-white fixed top-0 w-full z-10">
      <ul className="container mx-auto flex justify-around py-4">
        <li>
          <Link
            to="/"
            className={`hover:text-yellow-500${location.pathname === '/' ? ' text-yellow-500' : ''}`}
            onClick={() => handleLinkClick('/')}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`hover:text-yellow-500${location.pathname === '/projects' ? ' text-yellow-500' : ''}`}
            onClick={() => handleLinkClick('/projects')}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/side-projects"
            className={`hover:text-yellow-500${location.pathname === '/side-projects' ? ' text-yellow-500' : ''}`}
            onClick={() => handleLinkClick('/side-projects')}
          >
            Side Projects
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={`hover:text-yellow-500${location.pathname === '/blog' ? ' text-yellow-500' : ''}`}
            onClick={() => handleLinkClick('/blog')}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`hover:text-yellow-500${location.pathname === '/contact' ? ' text-yellow-500' : ''}`}
            onClick={() => handleLinkClick('/contact')}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
