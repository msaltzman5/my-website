/* eslint-disable jsx-a11y/img-redundant-alt */
import './ImageCarousel.css'; // Assuming you have some basic CSS for styling
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import leftarrow from '../../Data/Icons/left-arrow-circle.png';
import rightarrow from '../../Data/Icons/right-arrow-circle.png';
import loading from '../../Data/Icons/loading.gif';


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
    setImageLoading(false); // Set loading state to false when image has loaded
  };

  return (
    <div className="image-carousel logo">
      {/* TODO: add loading image for seamless transfer */}
      {/* {imageLoading && (
        <div className="loading-spinner">
          <img src={loading} alt='Loading spinner not loading lol'></img>
        </div>
      )} */}
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        onLoad={handleImageLoad}
        style={{ display: imageLoading ? 'none' : 'block'}}
        className="carousel-image"
      />
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
