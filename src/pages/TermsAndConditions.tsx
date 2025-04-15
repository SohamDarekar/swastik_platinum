import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ChevronLeft } from 'lucide-react';

export function TermsAndConditions() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-heading font-bold text-white text-center">Terms & Conditions</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-primary">Swastik Platinum Terms & Conditions</h2>
          
          <p className="mb-4">Last updated: Apr 2025</p>
          
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-bold mb-3 text-secondary">1. Acceptance of Terms</h3>
              <p className="mb-4">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-3 text-secondary">2. Website Use</h3>
              <p className="mb-2">The content of this website is for your general information and use only. It is subject to change without notice.</p>
              <p className="mb-4">This website uses cookies to monitor browsing preferences. If you allow cookies to be used, personal information may be stored by us for use by third parties.</p>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-3 text-secondary">3. Property Information</h3>
              <p className="mb-4">All information about Swastik Platinum properties, including images, floor plans, specifications, and amenities, is provided for informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability, or availability of the information contained on this website.</p>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-3 text-secondary">4. Copyright and Trademarks</h3>
              <p className="mb-4">The content, organization, graphics, design, compilation, and other matters related to this website are protected under applicable copyrights, trademarks, and other proprietary rights. Copying, redistribution, use, or publication by you of any such matters or any part of this website is strictly prohibited.</p>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-3 text-secondary">5. Disclaimer of Warranties</h3>
              <p className="mb-4">This website and its contents are provided "as is" without warranty of any kind, either express or implied, including but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-3 text-secondary">6. Contact</h3>
              <p className="mb-4">If you have questions about these Terms & Conditions, please contact:</p>
              <p className="mb-1">Email: legal@swastikgroup.in</p>
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

export default TermsAndConditions;
