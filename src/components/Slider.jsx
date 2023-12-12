//Slider.jsx
import React, { useState } from "react";

const Slider = ({ products, buttonsColors }) => {
  const [product, setProduct] = useState(products);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // ... (diğer fonksiyonlar)

  const handleButtonHover = () => {
    setIsHovered(true);
  };

  const handleButtonLeave = () => {
    setIsHovered(false);
  };

  const nextSlide = () => {
    if (currentIndex < 4) {
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

  const handleChooseColor = (id, color) => {
    if (color === "#E6CA97") {
      color = "altin";
    } else if (color === "#D9D9D9") {
      color = "gumus";
    } else {
      color = "bronz";
    }
    setProduct((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          let newImage = {};
          Object.keys(product.checkImg).map((item) => {
            product.checkImg[item] = false;
            newImage = { ...product.checkImg, [color]: true };
            return null;
          });
          return { ...product, checkImg: newImage };
        } else {
          return product;
        }
      });
    });
  };

  const handleImageClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="relative overflow-hidden">
      <button
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent z-10`}
        style={{ transform: 'translateY(-5rem)' }}
        onClick={prevSlide}
      >
        {LeftArrowIcon}
      </button>

      <button
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent z-10`}
        style={{ transform: 'translateY(-5rem)' }}
        onClick={nextSlide}
      >
        {RightArrowIcon}
      </button>
      <div
        className="flex justify-start space-x-4 transition-transform duration-300 ease-in-out"
        style={{
          width: `${(8 * 100) / 4}%`,
          transform: `translateX(-${currentIndex * (100 / 8)}%)`,
        }}
      >
        {product.map((product, index) => (
          <div
            key={product.id}
            className="flex flex-col items-start m-auto"
            product-id={product.id}
            style={{
              width: `${100 / 8}%`,
              height: "400px",
              padding: "50px",
              boxSizing: "border-box",
              boxShadow: "none",
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            {Object.keys(product.checkImg).map((item) => {
              if (product.checkImg[item]) {
                return (
                  <div key={item} onClick={() => handleImageClick(product.linkImage[item])}>
                    <img
                      src={product.linkImage[item]}
                      alt={`Slide ${index + 1}`}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        marginBottom: "10px",
                        borderRadius: "10px",
                        transition: "transform 0.3s ease-in-out",
                      }}
                      className="w-full h-auto rounded-md cursor-pointer hover:scale-110"
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}
            <div style={{ marginBottom: "20px" }}>
              <p>
                {product.name}
                <br />
                {product.price}
              </p>
            </div>
            <div className="flex justify-start">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className="variant-color"
                  style={{
                    backgroundColor: color,
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    marginRight: "8px",

                  }}
                  onClick={() => handleChooseColor(product.id, color)}
                ></button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button
          className="flex items-center border-2 border-black p-1 rounded"
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
          onFocus={handleButtonHover}
          onBlur={handleButtonLeave}
          
          style={{
            backgroundColor: isHovered ? "black" : "white",
            color: isHovered ? "white" : "black", 
          }}
        >
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.50391 10.3789H10.5039" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21.3369 11.3627H18.7349C16.9499 11.3627 15.5039 12.684 15.5039 14.3142C15.5039 15.9444 16.9509 17.2657 18.7339 17.2657H21.3369C21.4209 17.2657 21.4619 17.2657 21.4969 17.2637C22.0369 17.2313 22.4669 16.8387 22.5019 16.3458C22.5039 16.3143 22.5039 16.276 22.5039 16.2002V12.4282C22.5039 12.3524 22.5039 12.314 22.5019 12.2826C22.4659 11.7897 22.0369 11.3971 21.4969 11.3646C21.4619 11.3627 21.4209 11.3627 21.3369 11.3627Z" stroke="white" stroke-width="1.5" />
            <path d="M21.4689 11.3627C21.3909 9.52093 21.1409 8.39148 20.3319 7.59654C19.1609 6.44348 17.2749 6.44348 13.5039 6.44348H10.5039C6.73291 6.44348 4.84691 6.44348 3.67591 7.59654C2.50391 8.74862 2.50391 10.6041 2.50391 14.3142C2.50391 18.0243 2.50391 19.8798 3.67591 21.0319C4.84691 22.1849 6.73291 22.1849 10.5039 22.1849H13.5039C17.2749 22.1849 19.1609 22.1849 20.3319 21.0319C21.1409 20.2369 21.3919 19.1075 21.4689 17.2657" stroke="white" stroke-width="1.5" />
            <path d="M6.50391 6.44349L10.2389 4.00652C10.7642 3.67038 11.3773 3.49146 12.0039 3.49146C12.6305 3.49146 13.2436 3.67038 13.7689 4.00652L17.5039 6.44349" stroke="white" stroke-width="1.5" stroke-linecap="round" />
            <path d="M18.4949 14.3142H18.5049" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.50391 10.3789H10.5039" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21.3369 11.3627H18.7349C16.9499 11.3627 15.5039 12.684 15.5039 14.3142C15.5039 15.9444 16.9509 17.2657 18.7339 17.2657H21.3369C21.4209 17.2657 21.4619 17.2657 21.4969 17.2637C22.0369 17.2313 22.4669 16.8387 22.5019 16.3458C22.5039 16.3143 22.5039 16.276 22.5039 16.2002V12.4282C22.5039 12.3524 22.5039 12.314 22.5019 12.2826C22.4659 11.7897 22.0369 11.3971 21.4969 11.3646C21.4619 11.3627 21.4209 11.3627 21.3369 11.3627Z" stroke="black" stroke-width="1.5" />
            <path d="M21.4689 11.3627C21.3909 9.52093 21.1409 8.39148 20.3319 7.59654C19.1609 6.44348 17.2749 6.44348 13.5039 6.44348H10.5039C6.73291 6.44348 4.84691 6.44348 3.67591 7.59654C2.50391 8.74862 2.50391 10.6041 2.50391 14.3142C2.50391 18.0243 2.50391 19.8798 3.67591 21.0319C4.84691 22.1849 6.73291 22.1849 10.5039 22.1849H13.5039C17.2749 22.1849 19.1609 22.1849 20.3319 21.0319C21.1409 20.2369 21.3919 19.1075 21.4689 17.2657" stroke="black" stroke-width="1.5" />
            <path d="M6.50391 6.44349L10.2389 4.00652C10.7642 3.67038 11.3773 3.49146 12.0039 3.49146C12.6305 3.49146 13.2436 3.67038 13.7689 4.00652L17.5039 6.44349" stroke="black" stroke-width="1.5" stroke-linecap="round" />
            <path d="M18.4949 14.3142H18.5049" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p className="mr-2 p-1" style={{ fontFamily: 'Montserrat Medium', fontSize: '17pt' }}>
            VIEW ALL PRODUCTS
          </p>
        </button>
      </div>
    </div>

  );

};

export default Slider;