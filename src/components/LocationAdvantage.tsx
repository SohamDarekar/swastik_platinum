import React, { useState, useEffect, useRef } from 'react';
import { 
  Train, Bus, Plane, 
  GraduationCap, BookOpen, School,
  Building2, Briefcase, Building, 
  ShoppingBag, Tv, Utensils,
  Stethoscope, Heart, Pill,
} from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'accessibility',
    name: 'EASY ACCESSIBILITY',
    items: [
      { icon: Train, title: 'Excellent Connectivity', description: '2 mins from Vikhroli Railway Station, direct access to Eastern Express Highway' },
      { icon: Bus, title: 'Metro Access', description: 'Close proximity to upcoming Metro stations' },
      { icon: Plane, title: 'Airport Connection', description: '25 minutes drive to International Airport' }
    ]
  },
  {
    id: 'education',
    name: 'EDUCATIONAL INSTITUTIONS',
    items: [
      { icon: School, title: 'Top Schools', description: 'Proximity to Hiranandani Foundation School and Ryan International' },
      { icon: GraduationCap, title: 'Colleges', description: 'Close to prestigious colleges and universities' },
      { icon: BookOpen, title: 'Coaching Centers', description: 'Several coaching and tuition centers in the vicinity' }
    ]
  },
  {
    id: 'commercial',
    name: 'COMMERCIAL HUBS',
    items: [
      { icon: Building2, title: 'Business District', description: 'Close to corporate parks and IT hubs in Vikhroli and Powai' },
      { icon: Building, title: 'Commercial Centers', description: 'Easy access to business centers and office complexes' },
      { icon: Briefcase, title: 'Co-working Spaces', description: 'Modern co-working spaces in the neighborhood' }
    ]
  },
  {
    id: 'lifestyle',
    name: 'SHOPPING & ENTERTAINMENT',
    items: [
      { icon: ShoppingBag, title: 'Shopping Malls', description: 'R-City Mall and other shopping centers nearby' },
      { icon: Tv, title: 'Entertainment', description: 'Multiplexes and entertainment zones within easy reach' },
      { icon: Utensils, title: 'Dining Options', description: 'Restaurants and cafes offering diverse culinary experiences' }
    ]
  },
  {
    id: 'healthcare',
    name: 'HEALTHCARE',
    items: [
      { icon: Stethoscope, title: 'Hospitals', description: 'Fortis Hospital and Hiranandani Hospital in close proximity' },
      { icon: Heart, title: 'Clinics', description: 'Specialized clinics and diagnostic centers' },
      { icon: Pill, title: 'Pharmacies', description: '24x7 pharmacies and medical stores' }
    ]
  },
];

export const LocationAdvantage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Auto-rotate through categories with shorter interval
  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setActiveCategory(prevCategory => {
          const currentIndex = categories.findIndex(cat => cat.id === prevCategory);
          const nextIndex = (currentIndex + 1) % categories.length;
          return categories[nextIndex].id;
        });
      }, 5000); 
    };

    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    
    // Reset the auto-rotation timer when a category is manually selected
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveCategory(prevCategory => {
          const currentIndex = categories.findIndex(cat => cat.id === prevCategory);
          const nextIndex = (currentIndex + 1) % categories.length;
          return categories[nextIndex].id;
        });
      }, 5000);
    }
  };

  const activeItems = categories.find(cat => cat.id === activeCategory)?.items || [];
  const activeCategoryName = categories.find(cat => cat.id === activeCategory)?.name || '';

  return (
    <div className="max-w-6xl mx-auto relative">
      
      {/* Category indicator */}
      <div className="flex justify-center items-center mb-8">
        <div className="flex space-x-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeCategory === category.id 
                  ? 'bg-secondary w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => handleCategoryClick(category.id)}
              aria-label={category.name}
            />
          ))}
        </div>
      </div>
      
      {/* Active category title */}
      <motion.h2 
        key={`title-${activeCategory}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center font-heading text-xl sm:text-2xl font-medium mb-10 text-secondary"
      >
        {activeCategoryName}
      </motion.h2>

      {/* Location Content */}
      <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 sm:space-y-10 min-h-[350px]"
        >
          {activeItems.map((item, index) => (
            <motion.div 
              key={`${activeCategory}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 sm:gap-5"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-secondary/10 flex items-center justify-center mt-1 flex-shrink-0">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="relative h-[350px] sm:h-[450px] rounded-lg overflow-hidden shadow-xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.872009406282!2d72.93112047537831!3d19.113270050801102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c76195e6eab5%3A0x81b6a2672958ae1f!2sSwastik%20Platinum!5e0!3m2!1sen!2sin!4v1744644395343!5m2!1sen!2sin&iwloc=0&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute bottom-0 left-0 right-0 bg-secondary text-white text-center py-3">
            <a 
              href="https://maps.app.goo.gl/sxfc25LvpTfFnxu66" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:underline text-sm sm:text-base"
            >
              CLICK TO VIEW ON GOOGLE MAPS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};