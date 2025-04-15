import React, { useState } from 'react';
import { Button } from './Button';
import { Check, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const configurations = [
  {
    type: '1 BHK',
    carpetArea: '425 sq.ft.',
    price: '₹85 Lakhs*',
    features: ['Modern Kitchen', 'Spacious Balcony', 'Premium Flooring', 'Cross Ventilation'],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    type: '2 BHK',
    carpetArea: '625 sq.ft.',
    price: '₹1.25 Cr*',
    features: ['Master Bedroom', 'Separate Dining Area', 'Two Balconies', 'Luxury Fittings'],
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80&w=800&h=600'
  }
];

export const ConfigurationCards = () => {
  const [selectedConfig, setSelectedConfig] = useState(0);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Configuration Tabs */}
      <div className="flex justify-center mb-8 sm:mb-16">
        <div className="inline-flex">
          {configurations.map((config, index) => (
            <button
              key={index}
              className={`px-6 sm:px-10 py-3 sm:py-4 font-medium transition-all border-b-2 text-sm sm:text-base ${
                selectedConfig === index 
                  ? 'text-secondary border-secondary' 
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
              onClick={() => setSelectedConfig(index)}
            >
              {config.type}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Configuration */}
      <motion.div
        key={selectedConfig}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-6 sm:gap-8 bg-white rounded-lg shadow-xl overflow-hidden"
      >
        <div className="relative h-64 sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden">
          <img 
            src={configurations[selectedConfig].image} 
            alt={`${configurations[selectedConfig].type} Layout`}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
            width="800"
            height="600"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 sm:p-8">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">{configurations[selectedConfig].type}</h3>
            <p className="text-white/80 text-base sm:text-lg">Carpet Area: {configurations[selectedConfig].carpetArea}</p>
          </div>
        </div>
        <div className="p-6 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6 sm:mb-8 flex-wrap gap-2">
              <h4 className="text-xl sm:text-2xl font-bold text-primary">Unit Details</h4>
              <span className="text-xl sm:text-2xl font-bold text-secondary">{configurations[selectedConfig].price}</span>
            </div>
            <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
              {configurations[selectedConfig].features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <Button 
              variant="secondary" 
              className="w-full text-sm sm:text-base"
            >
              <Download className="w-4 h-4 mr-2" /> DOWNLOAD FLOOR PLAN
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white text-sm sm:text-base"
              onClick={() => {}}
            >
              BOOK A SITE VISIT
            </Button>
          </div>
        </div>
      </motion.div>
      <p className="text-center text-xs sm:text-sm text-gray-500 mt-6 sm:mt-8">*Prices are subject to change. Terms and conditions apply.</p>
    </div>
  );
};