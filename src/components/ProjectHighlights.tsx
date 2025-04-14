import React from 'react';
import { Building, MapPin, DoorOpen, Mountain } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  {
    icon: Building,
    title: '22 STOREY TOWER',
    description: 'Premium High-Rise Living'
  },
  {
    icon: MapPin,
    title: 'LOCATED IN VIKHROLI (E)',
    description: 'Prime Location with Excellent Connectivity'
  },
  {
    icon: DoorOpen,
    title: '1 & 2 BHK RESIDENCES',
    description: 'With Premium Balcony Options'
  },
  {
    icon: Mountain,
    title: 'STUNNING CITY VIEWS',
    description: 'Panoramic Vistas from Every Apartment'
  }
];

export const ProjectHighlights = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
          {highlights.map((highlight, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index} 
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent flex items-center justify-center mb-4 sm:mb-5">
                <highlight.icon className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
              </div>
              <h3 className="font-bold text-primary mb-2 sm:mb-3 text-base sm:text-lg">{highlight.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
