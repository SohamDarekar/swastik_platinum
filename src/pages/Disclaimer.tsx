import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Disclaimer = () => {
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

          <h1 className="font-heading text-4xl font-bold mb-8">Disclaimer</h1>
          
          <div className="prose max-w-none text-gray-700">
            <h2 className="font-heading text-2xl font-semibold mb-4 mt-8">Project Information Disclaimer</h2>
            <p className="mb-4">
              The information contained in this Website is for general information purposes only. The information is provided by Swastik Developers and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the Website or the information, products, services, or related graphics contained on the Website for any purpose.
            </p>

            <h2 className="font-heading text-2xl font-semibold mb-4 mt-8">Representation Disclaimer</h2>
            <p className="mb-4">
              All images, renders, and visualizations displayed on this Website are artist's impressions and conceptual only. The actual design, materials, finishes, and specifications are subject to change at any time without notice according to the final approved plans and specifications as per MahaRERA. The furniture, furnishings, fixtures, fittings, and decorative items shown in the images are not part of the standard offering and are for representation purposes only.
            </p>

            <h2 className="font-heading text-2xl font-semibold mb-4 mt-8">Prices and Availability</h2>
            <p className="mb-4">
              All prices mentioned on the Website are indicative only and subject to change without prior notice. The availability of units is subject to confirmation at the time of booking. The Developer reserves the right to change the plans, specifications, dimensions, and features without prior notice.
            </p>

            <h2 className="font-heading text-2xl font-semibold mb-4 mt-8">MahaRERA Information</h2>
            <p className="mb-4">
              The project is registered with MahaRERA. The MahaRERA registration number is provided on the Website. All details of the project can be accessed at the MahaRERA website: https://maharera.maharashtra.gov.in.
            </p>

            <h2 className="font-heading text-2xl font-semibold mb-4 mt-8">Legal Notice</h2>
            <p className="mb-4">
              This Website is not intended to be a source of advertising or solicitation. The reader should not construe anything on this Website as an attempt to solicit business in any manner whatsoever.
            </p>

            <h2 className="font-heading text-2xl font-semibold mb-4 mt-8">Limitation of Liability</h2>
            <p className="mb-4">
              In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this Website.
            </p>

            <h2 className="font-heading text-2xl font-semibold mb-4 mt-8">Contact Information</h2>
            <p className="mb-4">
              If you have any questions about this Disclaimer, please contact us at:
            </p>
            <p>
              Swastik Developers<br />
              Vikhroli East, Mumbai – 400083<br />
              Email: info@swastikplatinum.com<br />
              Phone: +91 99999 99999
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
