import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200&h=800',
    title: 'Luxury Living Experience',
    description: 'Where Elegance Meets Modern Design'
  },
  {
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200&h=800',
    title: 'Premium Residences',
    description: 'Designed for Discerning Homeowners'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200&h=800',
    title: 'Thoughtful Architecture',
    description: 'Making Every Day Extraordinary'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200&h=800',
    title: 'Urban Sanctuary',
    description: 'Peaceful Living in the Heart of the City'
  },
  {
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200&h=800',
    title: 'Endless Possibilities',
    description: 'A Home That Grows With You'
  }
];

export const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(Array(images.length).fill(false));

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      if (isAutoPlaying) {
        setDirection(1);
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
      }
    }, 6000); // Change slide every 6 seconds
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    // Restart autoplay after manual navigation
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    // Restart autoplay after manual navigation
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    // Restart autoplay after manual navigation
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDiff = touchStartX.current - touchEndX.current;
    // If swipe is significant enough (more than 50px)
    if (touchDiff > 50) {
      handleNext(); // Swipe left to go next
    } else if (touchDiff < -50) {
      handlePrevious(); // Swipe right to go previous
    }
  };

  // Preload the next image
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    const img = new Image();
    img.src = images[nextIndex].url;
  }, [currentIndex]);

  // Mark image as loaded
  const handleImageLoad = (index: number) => {
    const newLoadedState = [...imagesLoaded];
    newLoadedState[index] = true;
    setImagesLoaded(newLoadedState);
  };

  // Variants for slide animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div 
      className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden bg-primary/5"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main Carousel */}
      <AnimatePresence custom={direction} initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}
        >
          <div className="relative w-full h-full">
            <img
              src={images[currentIndex].url} 
              alt={`Project view ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              loading={currentIndex === 0 ? "eager" : "lazy"}
              width="1200"
              height="800"
              onLoad={() => handleImageLoad(currentIndex)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            
            {/* Text overlay */}
            <div className="absolute bottom-[20%] left-0 right-0 px-6 md:px-10 lg:px-20">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariants}
                key={`text-${currentIndex}`}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-2xl sm:text-3xl md:text-5xl text-white font-heading font-bold mb-2 md:mb-4">{images[currentIndex].title}</h2>
                <p className="text-base sm:text-lg md:text-xl text-white/80">{images[currentIndex].description}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-2 sm:left-5 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-secondary transition-colors duration-300 focus:outline-none z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-5 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-secondary transition-colors duration-300 focus:outline-none z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 sm:gap-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-8 sm:w-14 h-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-secondary w-12 sm:w-20' : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <motion.div
          className="h-full bg-secondary"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 6, ease: "linear", repeat: isAutoPlaying ? Infinity : 0 }}
          key={`progress-${currentIndex}`}
        />
      </div>
    </div>
  );
};