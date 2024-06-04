import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = ({ onLinkClick }) => {
  const location = useLocation();

  const handleLinkClick = (path) => {
    if (path === '/portfolio') {
      onLinkClick();
    }
  };

  return (
    <nav className="bg-blue-800 text-white fixed top-0 w-full z-10">
      <ul className="container mx-auto flex justify-around py-4">
        <li><Link to="/" className="hover:text-blue-300" onClick={() => handleLinkClick('/')}>Home</Link></li>
        <li><Link to="/projects" className="hover:text-blue-300" onClick={() => handleLinkClick('/projects')}>Projects</Link></li>
        <li><Link to="/blog" className="hover:text-blue-300" onClick={() => handleLinkClick('/blog')}>Blog</Link></li>
        <li><Link to="/portfolio" className="hover:text-blue-300" onClick={() => handleLinkClick('/portfolio')}>AI Art</Link></li>
        <li><Link to="/contact" className="hover:text-blue-300" onClick={() => handleLinkClick('/contact')}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
