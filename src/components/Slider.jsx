import React, { useState } from 'react';

const Slider = ({ images, prices, names, buttonsColors }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < images.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const LeftArrowIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );

  const RightArrowIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  );

  return (
    <div className="relative overflow-hidden">
      <button
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent z-10`}
        onClick={prevSlide}
      >
        {LeftArrowIcon}
      </button>

      <button
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent z-10`}
        onClick={nextSlide}
      >
        {RightArrowIcon}
      </button>


      <div
        className="flex justify-start space-x-4 transition-transform duration-300 ease-in-out"
        style={{
          width: `${images.length * 100 / 4}%`,
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-start"
            style={{
              width: `${100 / images.length}%`,
              height: '400px',
              padding: '50px',
              boxSizing: 'border-box',
              boxShadow: 'none',
              backgroundColor: 'transparent',
              border: 'none',
              
            }}            
            
          >
            <img
              src={`/img/Products/${image}`}
              alt={`Slide ${index + 1}`}
              style={{
                width: '100%',
                height: 'auto',
                marginBottom: '20px',
                borderRadius: '10px',               
              }}
              className="w-full h-auto rounded-md transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
              onClick={() => handleImageClick(index)}
            />

            <div style={{ marginBottom: '20px' }}>
              <p>
                {names[index]}<br />
                {prices[index]}
              </p>
            </div>

            <div className="flex justify-start">
              {buttonsColors[index].map((color, btnIndex) => (
                <button
                  key={btnIndex}
                  style={{ backgroundColor: color, width: '24px', height: '24px', borderRadius: '50%', marginRight: '8px' }}
                ></button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
