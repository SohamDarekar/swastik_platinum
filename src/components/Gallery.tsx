import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const categories = [
  { id: 'photos', name: 'PHOTOS' },
  { id: 'videos', name: 'VIDEOS' }
];

const photoCategories = [
  { id: 'external', name: 'EXTERNAL' },
  { id: 'internal', name: 'INTERNAL' },
  { id: 'amenities', name: 'AMENITIES' }
];

const photos = {
  external: [
    '/assets/external_1.png',
    '/assets/external_2.png',
    '/assets/external_3.png',
    '/assets/external_4.png',
  ],
  internal: [
    '/assets/internal_1.png',
  ],
  amenities: [
    '/assets/amenities_1.png',
    '/assets/amenities_2.png',
    '/assets/amenities_3.png',
    '/assets/amenities_4.png',
    '/assets/amenities_5.png',
  ]
};

// YouTube video URL for the project overview
const youtubeVideoUrl = "https://www.youtube.com/embed/aLKJSXiyWbw";

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('photos');
  const [selectedPhotoCategory, setSelectedPhotoCategory] = useState('external');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Define consistent dimensions for all images
  const imageWidth = 600;
  const imageHeight = 400;

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Main Category Tabs */}
      <div className="flex justify-center mb-6 sm:mb-10">
        <div className="inline-flex border-b border-gray-200 w-full sm:w-auto justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 sm:px-10 py-2 sm:py-4 text-sm font-medium transition-all border-b-2 -mb-px ${
                selectedCategory === category.id 
                  ? 'text-secondary border-secondary' 
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Photos Content */}
      {selectedCategory === 'photos' && (
        <>
          {/* Photo Category Tabs */}
          <div className="flex justify-center mb-6 sm:mb-16 overflow-x-auto py-2">
            <div className="inline-flex space-x-1 sm:space-x-2">
              {photoCategories.map((category) => (
                <button
                  key={category.id}
                  className={`px-3 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-all rounded-md ${
                    selectedPhotoCategory === category.id 
                      ? 'bg-secondary text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedPhotoCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Photos Grid */}
          <motion.div
            key={selectedPhotoCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8"
          >
            {photos[selectedPhotoCategory as keyof typeof photos].map((photo, index) => (
              <div
                key={index}
                className="relative overflow-hidden cursor-pointer group touch-manipulation"
                onClick={() => setLightboxImage(photo)}
              >
                <div className={`aspect-w-3 aspect-h-2 ${selectedPhotoCategory === 'external' ? 'h-[400px]' : ''}`}>
                  <img 
                    src={photo}
                    alt={`Gallery image ${index + 1}`}
                    className={`w-full transition-transform duration-500 group-hover:scale-110 ${
                      selectedPhotoCategory === 'external' ? 'h-[400px] object-cover' : 'h-full object-cover'
                    }`}
                    loading="lazy"
                    width={imageWidth}
                    height={imageHeight}
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </>
      )}

      {/* Videos Content */}
      {selectedCategory === 'videos' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden pt-[56.25%] rounded-lg shadow-lg">
            <iframe 
              className="absolute inset-0 w-full h-full border-0"
              src={youtubeVideoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-4 text-center">
            <h3 className="font-medium text-lg sm:text-xl">Project Overview Video</h3>
          </div>
        </motion.div>
      )}

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 touch-manipulation"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-full max-h-[90vh] w-auto h-auto">
            <img 
              src={lightboxImage}
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] object-contain"
              width={imageWidth}
              height={imageHeight}
            />
            <button 
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white rounded-full p-2 z-10 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxImage(null);
              }}
              aria-label="Close lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            {/* Mobile-friendly navigation instructions */}
            {isMobile && (
              <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm bg-black bg-opacity-50 py-2">
                Tap anywhere to close
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
