import React from 'react';
import { Waves, TreePine, Bike, Car, ShieldCheck, ArrowUp, Dumbbell, Coffee, Utensils, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const amenities = [
  { icon: Waves, name: 'Swimming Pool' },
  { icon: TreePine, name: 'Garden' },
  { icon: Bike, name: 'Kids Play Area' },
  { icon: Car, name: 'Parking' },
  { icon: ArrowUp, name: 'Modern Lifts' },
  { icon: ShieldCheck, name: '24/7 Security' },
  { icon: Dumbbell, name: 'Fitness Center' },
  { icon: Coffee, name: 'Lounge Area' },
  { icon: Utensils, name: 'Party Hall' },
  { icon: Users, name: 'Community Space' },
];

export const Amenities = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8">
        {amenities.map((amenity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="flex flex-col items-center text-center bg-white rounded-lg py-6 sm:py-8 px-2 sm:px-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4 sm:mb-5"
            >
              <amenity.icon className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
            </motion.div>
            <h3 className="font-medium text-sm sm:text-base">{amenity.name}</h3>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 sm:mt-20 bg-white rounded-lg p-6 sm:p-10 shadow-lg">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-primary">Premium Lifestyle Amenities</h3>
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
          <div className="h-64 sm:h-auto rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1529290130-4ca3753253ae?auto=format&fit=crop&q=80" 
              alt="Premium amenities" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};