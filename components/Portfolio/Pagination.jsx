import React, { useState } from 'react';
import './Pagination.css';
import image1 from '../../assets/commercial1.jpg';
import image2 from '../../assets/commercial1.jpg';
import image3 from '../../assets/commercial1.jpg';
import image4 from '../../assets/commercial1.jpg';
import image5 from '../../assets/commercial1.jpg';

const Pagination = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3, image4, image5];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="pagination">
      <img
        src={images[currentIndex === 0 ? images.length - 1 : currentIndex - 1]}
        alt={`Previous Image ${currentIndex === 0 ? images.length : currentIndex}`}
        className="pagination-image pagination-prev"
        onClick={handlePrevClick}
      />
      <div className="pagination-image-container">
        <img src={images[currentIndex]} alt={`Current Image ${currentIndex + 1}`} className="pagination-image" />
      </div>
      <img
        src={images[currentIndex === images.length - 1 ? 0 : currentIndex + 1]}
        alt={`Next Image ${currentIndex === images.length - 1 ? 1 : currentIndex + 2}`}
        className="pagination-image pagination-next"
        onClick={handleNextClick}
      />
    </div>
  );
};

export default Pagination;
