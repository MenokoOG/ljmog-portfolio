import React from 'react';

const ProjectCard = ({ image, title, description, note, liveLink, repoLink }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="box style1 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{title}</a>
        </h3>
        <p className="text-gray-700 mb-4">{description}</p>
        {note && <p className="text-red-700 mb-4">{note}</p>}
        {liveLink && (
          <h3 className="text-lg font-medium text-gray-800">
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live Link</a>
          </h3>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
