/* eslint-disable jsx-a11y/img-redundant-alt */
import './ImageCarousel.css'; // Assuming you have some basic CSS for styling
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import leftarrow from '../../Data/Icons/left-arrow-circle.png';
import rightarrow from '../../Data/Icons/right-arrow-circle.png';


const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(false);

  const previousImage = () => {
    setImageLoading(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setImageLoading(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const getFileName = (filePath) => {
    return filePath.split('/').pop()
      .replace(/\.[a-f0-9]{8,}\..*/, '') // get rid of hex code and .jpg
      // next three space out file names and numbers to display correctly
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([0-9])([A-Z])/g, '$1 $2')
      .replace(/([a-zA-Z])([0-9])/g, '$1 $2');
  };

  return (
    <div className='image-carousel-wrapper'>
      <div className="image-carousel">
        {imageLoading && (
          <p className='loading-text'>Loading...</p>
        )}
        <a href={images[currentIndex]} target="_blank" rel="noopener noreferrer">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            title={getFileName(images[currentIndex])}
            onLoad={handleImageLoad}
            style={{ display: imageLoading ? 'none' : 'block' }}
            className="carousel-image"
          />
        </a>
      </div>
      <div className="carousel-controls">
        <img src={leftarrow} alt='not loading' onClick={previousImage} />
        <img src={rightarrow} alt='not loading' onClick={nextImage} />
      </div>
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageCarousel;
