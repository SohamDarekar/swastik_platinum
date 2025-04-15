import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ChevronLeft } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-heading font-bold text-white text-center">Privacy Policy</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-primary">Swastik Platinum Privacy Policy</h2>
          
          <p className="mb-4">Last updated: Apr 2025</p>
          
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-bold mb-3 text-secondary">1. Information We Collect</h3>
              <p className="mb-2">We collect information when you submit an enquiry form or contact us. This may include:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Personal information such as name, email address, phone number</li>
                <li>Communication preferences</li>
                <li>Information about your property requirements</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-3 text-secondary">2. How We Use Your Information</h3>
              <p className="mb-2">The information we collect may be used to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Respond to your enquiries about our properties</li>
                <li>Provide you with information about our developments</li>
                <li>Improve our website and services</li>
                <li>Send you marketing communications (with your consent)</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-3 text-secondary">3. Information Sharing</h3>
              <p className="mb-4">We do not sell or rent your personal information to third parties. We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Service providers who assist us in operating our business</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-3 text-secondary">4. Your Rights</h3>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-3 text-secondary">5. Security</h3>
              <p className="mb-4">We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-3 text-secondary">6. Contact Us</h3>
              <p className="mb-4">If you have questions about this Privacy Policy, please contact us at:</p>
              <p className="mb-1">Email: privacy@swastikgroup.in</p>
              <p>Phone: +91 9321411424</p>
            </section>
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

export default PrivacyPolicy;
