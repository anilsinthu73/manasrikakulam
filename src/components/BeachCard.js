import React, { useState } from 'react';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BeachCard({ name, description, address, images, facilities,mapLink }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };
  const openInMaps = (mapsUrl) => {
    window.open(mapsUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Main Image Slider - Left Side */}
        <div className="lg:w-[500px] relative h-[620px]">
          <img
            src={images[currentImageIndex]}
            alt={`${name} view ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <button
            onClick={previousImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          
          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>

        {/* Content Section - Right Side */}
        <div className="lg:w-3/5 p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">{name}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
          </div>

          <div className="flex items-start gap-3 text-gray-600 mb-8 bg-gray-50 p-4 rounded-lg">
            <MapPin className="w-6 h-6 mt-1 flex-shrink-0 text-blue-600" />
            <span className="text-lg hover:cursor-pointer hover:text-blue-600" onClick={()=>openInMaps(mapLink)}>{address}</span>
          </div>

          {/* Facilities */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-700 mb-4 text-lg">Available Facilities:</h3>
            <div className="flex flex-wrap gap-2">
              {facilities.map((facility, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                >
                  {facility}
                </span>
              ))}
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-4 text-lg">Photo Gallery:</h3>
            <div className="flex  justify-center items-center gap-3">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`relative rounded-lg overflow-hidden aspect-square ${
                    currentImageIndex === index 
                      ? 'ring-2 ring-blue-500 ring-offset-2' 
                      : 'hover:opacity-80'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${name} thumbnail ${index + 1}`}
                    className="w-[200px] h-[200px] object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}