import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ChevronLeft } from 'lucide-react';

export function Sitemap() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-heading font-bold text-white text-center">Sitemap</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-primary">Swastik Platinum Website Sitemap</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-secondary">Main Pages</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-primary hover:text-secondary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about-developer" className="text-primary hover:text-secondary">
                    About Developer
                  </Link>
                </li>
                <li>
                  <Link to="/disclaimer" className="text-primary hover:text-secondary">
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link to="/thank-you" className="text-primary hover:text-secondary">
                    Thank You
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-secondary">Legal Pages</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/privacy-policy" className="text-primary hover:text-secondary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions" className="text-primary hover:text-secondary">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/disclaimer" className="text-primary hover:text-secondary">
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap" className="text-primary hover:text-secondary">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-secondary">Home Page Sections</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#overview" className="text-primary hover:text-secondary">Overview</a>
              </li>
              <li>
                <a href="/#configurations" className="text-primary hover:text-secondary">Configurations</a>
              </li>
              <li>
                <a href="/#location" className="text-primary hover:text-secondary">Location</a>
              </li>
              <li>
                <a href="/#amenities" className="text-primary hover:text-secondary">Amenities</a>
              </li>
              <li>
                <a href="/#gallery" className="text-primary hover:text-secondary">Gallery</a>
              </li>
            </ul>
          </div>
          
          <div className="mt-8">
            <Link to="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" /> Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sitemap;
