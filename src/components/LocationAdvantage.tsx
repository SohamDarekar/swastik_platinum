import React, { useState } from 'react';
import { MapPin, Train, School, Building2, ShoppingCart, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'accessibility',
    name: 'EASY ACCESSIBILITY',
    items: [
      { icon: Train, title: 'Excellent Connectivity', description: '2 mins from Vikhroli Railway Station, direct access to Eastern Express Highway' },
      { icon: MapPin, title: 'Metro Access', description: 'Close proximity to upcoming Metro stations' },
      { icon: MapPin, title: 'Airport Connection', description: '25 minutes drive to International Airport' }
    ]
  },
  {
    id: 'education',
    name: 'EDUCATIONAL INSTITUTIONS',
    items: [
      { icon: School, title: 'Top Schools', description: 'Proximity to Hiranandani Foundation School and Ryan International' },
      { icon: School, title: 'Colleges', description: 'Close to prestigious colleges and universities' },
      { icon: School, title: 'Coaching Centers', description: 'Several coaching and tuition centers in the vicinity' }
    ]
  },
  {
    id: 'commercial',
    name: 'COMMERCIAL HUBS',
    items: [
      { icon: Building2, title: 'Business District', description: 'Close to corporate parks and IT hubs in Vikhroli and Powai' },
      { icon: Building2, title: 'Commercial Centers', description: 'Easy access to business centers and office complexes' },
      { icon: Building2, title: 'Co-working Spaces', description: 'Modern co-working spaces in the neighborhood' }
    ]
  },
  {
    id: 'lifestyle',
    name: 'SHOPPING & ENTERTAINMENT',
    items: [
      { icon: ShoppingCart, title: 'Shopping Malls', description: 'R-City Mall and other shopping centers nearby' },
      { icon: ShoppingCart, title: 'Entertainment', description: 'Multiplexes and entertainment zones within easy reach' },
      { icon: ShoppingCart, title: 'Dining Options', description: 'Restaurants and cafes offering diverse culinary experiences' }
    ]
  },
  {
    id: 'healthcare',
    name: 'HEALTHCARE',
    items: [
      { icon: Stethoscope, title: 'Hospitals', description: 'Fortis Hospital and Hiranandani Hospital in close proximity' },
      { icon: Stethoscope, title: 'Clinics', description: 'Specialized clinics and diagnostic centers' },
      { icon: Stethoscope, title: 'Pharmacies', description: '24x7 pharmacies and medical stores' }
    ]
  },
];

export const LocationAdvantage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const activeItems = categories.find(cat => cat.id === activeCategory)?.items || [];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Category Tabs */}
      <div className="flex justify-center mb-16 overflow-x-auto pb-2">
        <div className="inline-flex border-b border-gray-200">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-4 text-sm font-medium transition-all whitespace-nowrap border-b-2 -mb-px ${
                activeCategory === category.id 
                  ? 'text-secondary border-secondary' 
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Location Content */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          {activeItems.map((item, index) => (
            <div key={index} className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mt-1">
                <item.icon className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
        <div className="relative h-[450px] rounded-lg overflow-hidden shadow-xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.872009406282!2d72.93112047537831!3d19.113270050801102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c76195e6eab5%3A0x81b6a2672958ae1f!2sSwastik%20Platinum!5e0!3m2!1sen!2sin!4v1744644395343!5m2!1sen!2sin&no-reviews=true"
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
              className="text-white hover:underline"
            >
              CLICK TO VIEW ON GOOGLE MAPS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};