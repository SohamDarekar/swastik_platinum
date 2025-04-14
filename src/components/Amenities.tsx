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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {amenities.map((amenity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="flex flex-col items-center text-center bg-white rounded-lg py-8 px-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-5"
            >
              <amenity.icon className="w-8 h-8 text-secondary" />
            </motion.div>
            <h3 className="font-medium">{amenity.name}</h3>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 bg-white rounded-lg p-10 shadow-lg">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-8 text-primary">Premium Lifestyle Amenities</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At Swastik Platinum, we've carefully curated a selection of premium amenities designed to enhance your lifestyle and provide comfort, convenience, and luxury at every turn.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                <span className="text-gray-600">Naturally themed podium gardens</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                <span className="text-gray-600">Swimming pool with deck area</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                <span className="text-gray-600">State-of-the-art fitness center</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                <span className="text-gray-600">Indoor games room</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                <span className="text-gray-600">Multipurpose hall for events</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                <span className="text-gray-600">Landscaped gardens and walking paths</span>
              </li>
            </ul>
          </div>
          <div className="h-full">
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