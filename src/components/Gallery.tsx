import React, { useState } from 'react';
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
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80',
  ],
  internal: [
    'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600607687644-c7f34c43d2fd?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80',
  ],
  amenities: [
    'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1616627561839-074385245ff6?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1571622840901-92ae138bd36e?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80',
  ]
};

const videos = [
  { thumbnail: 'https://images.unsplash.com/photo-1517164850305-99a27ae571ea?auto=format&fit=crop&q=80', title: 'Project Overview' },
  { thumbnail: 'https://images.unsplash.com/photo-1494932328153-c57e516cbd28?auto=format&fit=crop&q=80', title: 'Virtual Tour' },
  { thumbnail: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80', title: 'Amenities Showcase' },
];

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('photos');
  const [selectedPhotoCategory, setSelectedPhotoCategory] = useState('external');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Main Category Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex border-b border-gray-200">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-10 py-4 text-sm font-medium transition-all border-b-2 -mb-px ${
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
          <div className="flex justify-center mb-16">
            <div className="inline-flex">
              {photoCategories.map((category) => (
                <button
                  key={category.id}
                  className={`px-8 py-3 text-sm font-medium transition-all ${
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {photos[selectedPhotoCategory as keyof typeof photos].map((photo, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden cursor-pointer group"
                onClick={() => setLightboxImage(photo)}
              >
                <div className="aspect-w-16 aspect-h-10">
                  <img 
                    src={photo} 
                    alt={`Gallery image ${index + 1}`} 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {videos.map((video, index) => (
            <div key={index} className="overflow-hidden cursor-pointer group">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/90 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">{video.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <img 
              src={lightboxImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh]"
            />
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2"
              onClick={() => setLightboxImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
