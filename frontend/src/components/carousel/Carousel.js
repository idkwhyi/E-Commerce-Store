import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className='relative w-full h-3/5 rounded-lg'>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className='w-full h-full object-cover bg-cover bg-center rounded-lg' />
    </div>
  );
};

export default Carousel;
