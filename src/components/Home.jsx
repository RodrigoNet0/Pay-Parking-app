import React, { useState } from 'react';

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://www.mithoficial.com.br/upload/banner/56d574d648cb2dc1203fd157d27e0982.webp',
    // Adicione mais URLs de imagens conforme necessário
  ];

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="relative">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Imagem ${index}`}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentImage ? 'opacity-100 z-10' : 'opacity-0'
            }`}
          />
        ))}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full shadow-md"
        >
          Anterior
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full shadow-md"
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default Carousel;
