"use client"
import React, { useState } from 'react'

const Pakages = () => {
  // 1. Define your array of images with names and URLs
  const packageImages = [
    { id: 1, name: "22 days Umrah Package", url: "/pkg.jpeg" },
    { id: 1, name: "21  days Umrah Package", url: "/pkg1.jpeg" },

  ];

  // 2. State to track which image index is active in the modal (null means closed)
  const [activeIdx, setActiveIdx] = useState(null);

  // Helper functions to navigate images inside the modal
  const nextImage = (e) => {
    e.stopPropagation(); // Prevents clicking the arrow from closing the modal
    setActiveIdx((prev) => (prev + 1) % packageImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + packageImages.length) % packageImages.length);
  };

  return (
    <div className='mt-24 mb-12 max-w-6xl mx-auto px-4'>
      <h2 className="text-3xl font-bold mb-8 text-center text-black">Our Service Packages</h2>
      
      {/* 3. Grid Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {packageImages.map((pkg, index) => (
          <div 
            key={pkg.id} 
            className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-gray-100 aspect-video"
            onClick={() => setActiveIdx(index)}
          >
            <img 
              src={pkg.url} 
              alt={pkg.name} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay Gradient & Name on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-medium text-lg">{pkg.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Full-Screen Modal (Rendered only when activeIdx is not null) */}
      {activeIdx !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-sm select-none animate-fadeIn"
          onClick={() => setActiveIdx(null)} // Click backdrop to close
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white text-4xl font-light hover:text-gray-300 transition-colors z-50 p-2"
            onClick={() => setActiveIdx(null)}
          >
            &times;
          </button>

          {/* Left Navigation Arrow */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors hidden sm:block z-50"
            onClick={prevImage}
          >
            &#10094;
          </button>

          {/* Main Modal Container */}
          <div 
            className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image itself
          >
            <img 
              src={packageImages[activeIdx].url} 
              alt={packageImages[activeIdx].name} 
              className="max-w-full max-h-[75vh] object-contain rounded shadow-2xl"
            />
            
            {/* Display Image Name below the picture */}
            <div className="mt-4 text-center px-4">
              <h3 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
                {packageImages[activeIdx].name}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {activeIdx + 1} / {packageImages.length}
              </p>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors hidden sm:block z-50"
            onClick={nextImage}
          >
            &#10095;
          </button>

          {/* Mobile Swiping/Tapping Notice (Optional hint for mobile users) */}
          <div className="absolute bottom-4 text-gray-500 text-xs sm:hidden">
            Tap outside image to close
          </div>
        </div>
      )}
    </div>
  )
}

export default Pakages
