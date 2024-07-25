import React, { useState } from 'react';
import Modal from './Modal';

const ProjectCard = ({ image, title, description, note, liveLink, repoLink }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="box style1 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="w-full h-48 mb-4 relative cursor-pointer" onClick={handleOpenModal}>
          <img src={image} alt={title} className="w-full h-full object-contain rounded-lg" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{title}</a>
        </h3>
        <p className="text-gray-700 mb-4">
          {isCollapsed ? `${description.substring(0, 100)}...` : description}
          <button onClick={toggleCollapse} className="text-blue-500 hover:underline ml-2">
            {isCollapsed ? 'Read More' : 'Show Less'}
          </button>
        </p>
        {note && <p className="text-red-700 mb-4">{note}</p>}
        {liveLink && (
          <h3 className="text-lg font-medium text-gray-800">
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live Link</a>
          </h3>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} image={image} />
    </div>
  );
};

export default ProjectCard;
