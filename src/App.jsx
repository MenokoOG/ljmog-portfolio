import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import HobbyProjects from './components/HobbyProjects';
import Blog from './components/Blog';
import Contact from './components/Contact';

import backgroundImage from '/dark-pearly-textured.jpg'; // Adjust path if needed

function App() {
  const [resetGallery, setResetGallery] = useState(false);

  const handleLinkClick = (path) => {
    // If you ever wire up a gallery or portfolio reset, hook here:
    if (path === '/projects' || path === '/side-projects') {
      setResetGallery(true);
    }
  };

  return (
    <Router>
      <div
        className="App pt-16 min-h-screen bg-cover bg-fixed bg-center text-gray-900"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <NavBar onLinkClick={handleLinkClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects"
            element={<Projects />}
          />
          <Route
            path="/side-projects"
            element={<HobbyProjects />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
