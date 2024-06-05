import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import ImageGallery from './components/ImageGallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import backgroundImage from '../public/dark-pearly-textured.png'; // Adjust the path as necessary

function App() {
  const [resetGallery, setResetGallery] = useState(false);

  const handleLinkClick = () => {
    setResetGallery(true);
  };

  return (
    <Router>
      <div
        className="App pt-16 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <NavBar onLinkClick={handleLinkClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<ImageGallery resetGallery={resetGallery} setResetGallery={setResetGallery} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
