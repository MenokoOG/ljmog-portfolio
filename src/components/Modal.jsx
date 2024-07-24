import React from 'react';

const Modal = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg max-w-3xl w-full">
        <button className="mb-4 p-2 bg-red-500 text-white rounded" onClick={onClose}>Close</button>
        <img src={image} alt="Project" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Modal;
