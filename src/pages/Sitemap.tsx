import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Sitemap = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <h1 className="font-heading text-4xl font-bold mb-8">Sitemap</h1>
          
          <div className="prose max-w-none text-gray-700">
            <h2 className="font-heading text-2xl font-semibold mb-4 mt-8">Main Pages</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="text-secondary hover:underline">Home</Link></li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold mb-4 mt-8">Project Sections</h2>
            <ul className="space-y-2">
              <li><a href="/#overview" className="text-secondary hover:underline">Overview</a></li>
              <li><a href="/#configurations" className="text-secondary hover:underline">Configurations</a></li>
              <li><a href="/#location" className="text-secondary hover:underline">Location</a></li>
              <li><a href="/#amenities" className="text-secondary hover:underline">Amenities</a></li>
              <li><a href="/#gallery" className="text-secondary hover:underline">Gallery</a></li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold mb-4 mt-8">Legal Pages</h2>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="text-secondary hover:underline">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer" className="text-secondary hover:underline">Disclaimer</Link></li>
              <li><Link to="/sitemap" className="text-secondary hover:underline">Sitemap</Link></li>
            </ul>
            
            <h2 className="font-heading text-2xl font-semibold mb-4 mt-8">Contact</h2>
            <ul className="space-y-2">
              <li>
                <strong>Email:</strong> <a href="mailto:info@swastikplatinum.com" className="text-secondary hover:underline">info@swastikplatinum.com</a>
              </li>
              <li>
                <strong>Phone:</strong> <a href="tel:+919999999999" className="text-secondary hover:underline">+91 99999 99999</a>
              </li>
              <li>
                <strong>Address:</strong> Vikhroli East, Mumbai – 400083
              </li>
            </ul>
            
            <h2 className="font-heading text-2xl font-semibold mb-4 mt-8">Official Registration</h2>
            <ul className="space-y-2">
              <li>
                <strong>MahaRERA Registration No:</strong> P12345678
              </li>
              <li>
                <a href="https://maharera.maharashtra.gov.in" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                  Visit MahaRERA Website
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
