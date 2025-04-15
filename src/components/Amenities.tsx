import React, { useState, useEffect } from 'react';
import { 
  Waves, TreePine, Bike, Car, ShieldCheck, ArrowUp, Dumbbell, Coffee, Utensils, Users,
  Building, Monitor, LayoutGrid, Tv, Gamepad, Radar, CircleUser, Timer, Library, Tent, 
  UtensilsCrossed, BedDouble, SquareStack, Infinity, Bath, School, ChevronLeft, ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// All amenities with their icons and names
const allAmenities = [
  { icon: Building, name: 'Grand Entrance Lobby' },
  { icon: Coffee, name: 'Lounge Area' },
  { icon: School, name: 'Children\'s Play Area' },
  { icon: Bike, name: 'Toddlers Play Area' },
  { icon: Waves, name: 'Kids Pool' },
  { icon: Monitor, name: 'Work Station' },
  { icon: UtensilsCrossed, name: 'Elders Lounge' },
  { icon: BedDouble, name: 'Guest Room' },
  { icon: Utensils, name: 'Banquet Hall' },
  { icon: Infinity, name: 'Infinity Swimming Pool' },
  { icon: Bath, name: 'Jacuzzi' },
  { icon: Tv, name: 'Mini Theatre' },
  { icon: Gamepad, name: 'Indoor Gaming Zone' },
  { icon: CircleUser, name: 'Cricket Turf' },
  { icon: TreePine, name: 'Football Turf' },
  { icon: Timer, name: 'Jogging Track' },
  { icon: Dumbbell, name: 'Premier Gymnasium' },
  { icon: Library, name: 'Yoga Pavilion' },
  { icon: SquareStack, name: 'Swing Area' },
  { icon: Tent, name: 'Covered Sit Out Area' },
];

// Split amenities into pages of 10 each
const amenitiesPages = [
  allAmenities.slice(0, 10),
  allAmenities.slice(10, 20)
];

// Modern lifestyle amenity images - using more reliable sources with consistent dimensions
const amenityImages = [
  "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80", // Modern pool
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80", // Modern gym alternative
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80", // Modern gardens
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80", // Modern lounge alternative
];

export const Amenities = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-play functionality for amenities pages
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentPage(prev => (prev + 1) % amenitiesPages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Auto-play functionality for lifestyle images carousel
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % amenityImages.length);
    }, 4000);

    return () => clearInterval(imageInterval);
  }, []);

  // Handler for manual navigation
  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of user inactivity
    const timer = setTimeout(() => setIsAutoPlaying(true), 10000);
    return () => clearTimeout(timer);
  };

  // Navigation for lifestyle images
  const navigateImage = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentImageIndex(prev => (prev + 1) % amenityImages.length);
    } else {
      setCurrentImageIndex(prev => (prev - 1 + amenityImages.length) % amenityImages.length);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative">
        {/* Amenities Icons Carousel */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`amenities-page-${currentPage}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8"
            >
              {amenitiesPages[currentPage].map((amenity, index) => (
                <motion.div
                  key={`${currentPage}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex flex-col items-center text-center bg-white rounded-xl py-6 sm:py-8 px-2 sm:px-4 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4 sm:mb-5"
                  >
                    <amenity.icon className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
                  </motion.div>
                  <h3 className="font-medium text-sm sm:text-base">{amenity.name}</h3>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation - Pagination Dots */}
        <div className="flex justify-center mt-8">
          {amenitiesPages.map((_, index) => (
            <button
              key={`nav-${index}`}
              className={`w-3 h-3 mx-2 rounded-full transition-all duration-300 ${
                currentPage === index ? 'bg-secondary w-6' : 'bg-gray-300'
              }`}
              onClick={() => goToPage(index)}
              aria-label={`Go to amenities page ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-100 mt-4 rounded-full overflow-hidden">
          <motion.div
            key={`progress-${currentPage}`}
            className="h-full bg-secondary"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 5, ease: "linear" }}
          />
        </div>
      </div>
      
      <div className="mt-16 sm:mt-20 bg-white rounded-2xl p-6 sm:p-10 shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
          <div>
            <h3 className="font-heading text-xl sm:text-3xl font-bold mb-6 sm:mb-8 text-primary">
              Premium Lifestyle Amenities
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              At Swastik Platinum, we've carefully curated a selection of premium amenities designed to enhance your lifestyle and provide comfort, convenience, and luxury at every turn.
            </p>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm sm:text-base">Naturally themed podium gardens</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm sm:text-base">Swimming pool with deck area</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm sm:text-base">State-of-the-art fitness center</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm sm:text-base">Indoor games room</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm sm:text-base">Multipurpose hall for events</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                <span className="text-gray-600 text-sm sm:text-base">Landscaped gardens and walking paths</span>
              </li>
            </ul>
          </div>
          <div className="h-64 sm:h-auto rounded-xl overflow-hidden relative">
            {/* Modern Image Carousel */}
            <div className="relative w-full h-full aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`image-${currentImageIndex}`}
                  className="w-full h-full"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <img 
                    src={amenityImages[currentImageIndex]} 
                    alt={`Premium amenity ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                    width="800"
                    height="600"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/800x600/e2e8f0/64748b?text=Amenity+Image";
                    }}
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Image carousel controls */}
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <button 
                  onClick={() => navigateImage('prev')} 
                  className="w-10 h-10 rounded-full bg-white/70 hover:bg-white flex items-center justify-center text-primary backdrop-blur-sm transition-all hover:scale-110"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => navigateImage('next')}
                  className="w-10 h-10 rounded-full bg-white/70 hover:bg-white flex items-center justify-center text-primary backdrop-blur-sm transition-all hover:scale-110"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              
              {/* Image carousel indicators */}
              <div className="absolute bottom-4 left-0 right-0">
                <div className="flex justify-center gap-2">
                  {amenityImages.map((_, idx) => (
                    <button 
                      key={`img-dot-${idx}`} 
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};