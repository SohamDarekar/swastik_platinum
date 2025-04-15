import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPolicy = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 sm:pt-24 pb-16 sm:pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:underline mb-6 sm:mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none text-gray-700 text-sm sm:text-base">
            <p className="mb-6">
              Last updated: April 15, 2025
            </p>

            <h2 className="font-heading text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 mt-6 sm:mt-8">1. Introduction</h2>
            <p className="mb-4">
              Swastik Developers ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website swastikplatinum.com (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>

            <h2 className="font-heading text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 mt-6 sm:mt-8">2. Information We Collect</h2>
            <p className="mb-4">
              We collect several types of information from and about users of our Website, including information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information");</li>
              <li>That is about you but individually does not identify you; and/or</li>
              <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
            </ul>
            
            <h2 className="font-heading text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 mt-6 sm:mt-8">3. How We Collect Your Information</h2>
            <p className="mb-4">
              We collect this information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Directly from you when you provide it to us.</li>
              <li>Automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies and other tracking technologies.</li>
            </ul>

            <h2 className="font-heading text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 mt-6 sm:mt-8">4. How We Use Your Information</h2>
            <p className="mb-4">
              We use information that we collect about you or that you provide to us, including any personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>To present our Website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
              <li>To notify you about changes to our Website or any products or services we offer or provide through it.</li>
              <li>In any other way we may describe when you provide the information.</li>
              <li>For any other purpose with your consent.</li>
            </ul>

            <h2 className="font-heading text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 mt-6 sm:mt-8">5. Contact Information</h2>
            <p className="mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-4">
              Swastik Developers<br />
              Vikhroli East, Mumbai – 400083<br />
              Email: privacy@swastikplatinum.com<br />
              Phone: +91 99999 99999
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
