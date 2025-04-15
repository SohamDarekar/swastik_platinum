import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';

export const AboutDeveloper = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 sm:pt-24 pb-16 sm:pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:underline mb-6 sm:mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">About Swastik Developers</h1>
          
          <div className="mb-16">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200&h=800"
              alt="Swastik Developers Corporate Building" 
              className="w-full h-80 sm:h-96 object-cover rounded-lg shadow-lg mb-8"
              loading="lazy"
              width="1200"
              height="800"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose max-w-none text-gray-700"
            >
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold mb-6 text-primary">
                Structuring Excellence with Each Project
              </h2>
              
              <p className="mb-6 text-base sm:text-lg">
                We at Swastik Group have <span className="font-semibold">successfully built over 1 Million+ sq ft</span> across 
                Mumbai MMR, Nashik, Talegaon, and Shirdi. We aim to <span className="font-semibold">continue to transform 
                the skyline</span> of the Mumbai area and build more over the coming years. Our projects, which include 
                skyscrapers, office and retail spaces, and business and corporate centers, epitomize <span className="font-semibold">luxury</span> and <span className="font-semibold">comfort</span>.
              </p>
              
              <blockquote className="bg-accent p-6 sm:p-8 rounded-lg border-l-4 border-secondary my-8 sm:my-10">
                <p className="font-heading text-xl sm:text-2xl font-medium text-primary mb-2 sm:mb-3">
                  "We stand where few stood"
                </p>
                <p className="text-gray-600 text-base">
                  We have built an everlasting legacy over the last 25 years through upholding our founding principles of
                  transparency, commitment, integrity, and timely delivery. This has allowed us to create cult classic projects, 
                  and such hallmarks make us stand out from the rest of the real estate developers.
                </p>
              </blockquote>
              
              <div className="grid md:grid-cols-2 gap-8 sm:gap-10 mb-12">
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md">
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold mb-4 text-secondary">Mission</h3>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0 mt-2"></div>
                      <span>To add value to each stakeholder involved in the process: investors, customers, suppliers, and society at large.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0 mt-2"></div>
                      <span>To build houses that redefine and transform the area's skyline through modern, unique, and luxurious architecture and craftsmanship.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0 mt-2"></div>
                      <span>To provide our customers with luxurious, desirable, and beneficial amenities.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0 mt-2"></div>
                      <span>To elevate the standard of living by building exemplary and exquisite residential/commercial spaces.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md">
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold mb-4 text-secondary">Vision</h3>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0 mt-2"></div>
                      <span>To continue to add splendor and grandeur to the infrastructure of our nation in a way that beautifies lives and accelerates progression.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0 mt-2"></div>
                      <span>To make residential and commercial spaces more viable and affordable.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0 mt-2"></div>
                      <span>To make homes that are a mark of excellence in terms of quality and design.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold mb-6 text-primary">
                Building and delivering projects with great expertise
              </h2>
              
              <p className="mb-6 text-base sm:text-lg">
                We assure our customer a home that evokes a feeling of wonder, grandeur, and modernity through the use of cutting-edge technology. 
                We feel privileged and are honored that our projects are responsible for spreading thousands of smiles and inspiring luxury lifestyles.
              </p>
              
              <div className="flex justify-center mt-8 sm:mt-12">
                <Button 
                  variant="secondary" 
                  className="mr-4" 
                  onClick={() => window.open('https://swastikdevelopers.in/about-us/', '_blank')}
                >
                  VISIT OFFICIAL WEBSITE
                </Button>
                <Button 
                  variant="outline" 
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                  onClick={() => window.location.href = '#overview'}
                >
                  EXPLORE SWASTIK PLATINUM
                </Button>
              </div>
            </motion.div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 sm:pt-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold mb-6 text-primary text-center">
              Our Projects
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-10">
                  <img 
                    src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=600&h=400" 
                    alt="Swastik Avighna" 
                    className="object-cover w-full h-full" 
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-heading text-lg sm:text-xl font-semibold mb-2">Swastik Avighna</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Luxury residences with modern amenities</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-10">
                  <img 
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600&h=400" 
                    alt="Swastik Pearl" 
                    className="object-cover w-full h-full" 
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-heading text-lg sm:text-xl font-semibold mb-2">Swastik Pearl</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Elegant living spaces in prime location</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-10">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600&h=400" 
                    alt="Swastik Elegance" 
                    className="object-cover w-full h-full" 
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-heading text-lg sm:text-xl font-semibold mb-2">Swastik Elegance</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Premium residences with contemporary design</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8 sm:mt-10">
              <h3 className="font-heading text-xl sm:text-2xl font-semibold mb-4 text-primary">Contact Information</h3>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Address:</span> 312, Swastik Disa Corporate Park, Opp. Shreyas Cinemas, LBS Rd, Ghatkopar(West), Mumbai-86
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Phone:</span> +91 9321411424 / +91 7021414136
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> sales@swastikgroup.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDeveloper;