import React, { useState, useEffect } from 'react';
import images from '../imageData';
import PropTypes from 'prop-types';

// Custom hook for body overflow
function useBodyOverflow(overflow) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = overflow;
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [overflow]);
}

// Custom hook for resetting the gallery
function useResetGallery(resetGallery, setResetGallery, resetActions) {
  useEffect(() => {
    if (resetGallery) {
      resetActions();
      setResetGallery(false);
    }
  }, [resetGallery, setResetGallery, resetActions]);
}

const ImageGallery = ({ resetGallery, setResetGallery }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 6;

  // Use custom hooks
  useBodyOverflow(selectedImage ? 'hidden' : 'auto');
  useResetGallery(resetGallery, setResetGallery, () => {
    setSelectedImage(null);
    setIsZoomed(false);
    setCurrentPage(0);
  });

  const openModal = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsZoomed(false);
  };

  const handleModalClick = (e) => {
    if (e.target.id === 'modal-overlay') {
      closeModal();
    }
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? Math.ceil(images.length / imagesPerPage) - 1 : prevPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage === Math.ceil(images.length / imagesPerPage) - 1 ? 0 : prevPage + 1));
  };

  const startIndex = currentPage * imagesPerPage;
  const displayedImages = images.slice(startIndex, startIndex + imagesPerPage);

  return (
    <section id="portfolio" /*className="wrapper style3 py-16 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 relative"*/>
      <div className="container mx-auto">
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white">Here’s some digital art stuff I made recently.</h2>
          <p className="text-blue-100">I used the AIs at NightCafe to create these.</p>
        </header>
        <div className="flex flex-wrap">
          {displayedImages.map((src, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="box style2 bg-white p-6 rounded-lg shadow-lg">
                <div onClick={() => openModal(src)} className="image featured block mb-4 cursor-pointer">
                  <img src={src} alt={`art${startIndex + index + 1}`} className="w-full h-auto rounded-lg" onError={(e) => e.target.src = 'fallback-image.png'} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{`Art ${startIndex + index + 1}`}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="fixed top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
          <button
            onClick={handlePrevPage}
            className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-full font-mono transition duration-300 transform hover:scale-105 fixed left-4"
            aria-label="Previous Page"
          >
            &lt;
          </button>
          <button
            onClick={handleNextPage}
            className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-full font-mono transition duration-300 transform hover:scale-105 fixed right-4"
            aria-label="Next Page"
          >
            &gt;
          </button>
        </div>
        <footer className="mt-12 text-center">
          <p className="text-blue-100">Like what you see? Head on over to NightCafe and try it out yourself!</p>
          <a href="https://creator.nightcafe.studio/" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300" target="_blank" rel="noopener noreferrer">NightCafe</a>
        </footer>
      </div>

      {selectedImage && (
        <div
          id="modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300"
          onClick={handleModalClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-4xl w-full max-h-[80vh] overflow-auto">
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-white bg-blue-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-700"
              onClick={closeModal}
              aria-label="Close Modal"
            >
              &times;
            </button>
            <div className="flex items-center justify-center h-full">
              <img
                src={selectedImage}
                alt="Selected Art"
                className={`max-w-full max-h-full rounded-lg transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'}`}
                onClick={toggleZoom}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

ImageGallery.propTypes = {
  resetGallery: PropTypes.bool.isRequired,
  setResetGallery: PropTypes.func.isRequired,
};

export default ImageGallery;
