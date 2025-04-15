import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Calendar, Download } from 'lucide-react';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';
import { downloadFile } from '../lib/utils';

export const ThankYou = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="bg-accent rounded-lg p-8 text-center mb-10 shadow-md">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
            </motion.div>

            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-heading text-3xl font-bold mb-4 text-primary"
            >
              Thank You for Your Interest!
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              We've received your enquiry about Swastik Platinum. Our team will contact you shortly to address your questions and provide more information about our luxurious residences.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="font-heading text-xl font-semibold mb-4 text-primary">What's Next?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary font-medium">1</span>
                  </div>
                  <span className="text-gray-600">Our representative will call you within 24 hours to discuss your requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary font-medium">2</span>
                  </div>
                  <span className="text-gray-600">You'll receive a detailed email with project information and pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary font-medium">3</span>
                  </div>
                  <span className="text-gray-600">Schedule a site visit to experience Swastik Platinum in person</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button 
                  variant="secondary" 
                  className="w-full flex items-center justify-center"
                  onClick={() => downloadFile('/assets/brochure.pdf', 'SwastikPlatinum-Brochure.pdf')}
                >
                  <Download className="w-4 h-4 mr-2" /> DOWNLOAD BROCHURE
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="font-heading text-xl font-semibold mb-4 text-primary">Schedule a Site Visit</h2>
              <p className="text-gray-600 mb-6">
                Would you like to experience the luxury of Swastik Platinum in person? Our site is open for visits every day from 10:00 AM to 7:00 PM.
              </p>
              <div className="flex justify-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600&h=400" 
                  alt="Swastik Platinum Site" 
                  className="rounded-lg shadow-sm w-full h-40 object-cover"
                  loading="lazy"
                />
              </div>
              <Button 
                variant="outline" 
                className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white flex items-center justify-center"
              >
                <Calendar className="w-4 h-4 mr-2" /> BOOK SITE VISIT
              </Button>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-6">
              If you have any further questions, please contact us at:
            </p>
            <div className="flex justify-center space-x-6">
              <a href="tel:+919321411424" className="text-secondary hover:underline">+91 9321411424</a>
              <a href="mailto:sales@swastikgroup.in" className="text-secondary hover:underline">sales@swastikgroup.in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
