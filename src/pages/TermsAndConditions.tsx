import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsAndConditions = () => {
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

          <h1 className="font-heading text-4xl font-bold mb-8">Terms & Conditions</h1>
          
          <div className="prose max-w-none text-gray-700">
            <p className="mb-6">
              Last updated: April 15, 2025
            </p>

            <h2 className="font-heading text-2xl font-semibold mb-4 mt-8">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using swastikplatinum.com (the "Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this Website.
            </p>

            <h2 className="font-heading text-2xl font-semibold mb-4 mt-8">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Swastik Developer's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>Attempt to decompile or reverse engineer any software contained on Swastik Developer's Website;</li>
              <li>Remove any copyright or other proprietary notations from the materials; or</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p className="mb-4">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by Swastik Developers at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
            </p>
            
            <h2 className="font-heading text-2xl font-semibold mb-4 mt-8">3. Disclaimer</h2>
            <p className="mb-4">
              The materials on Swastik Developer's Website are provided on an 'as is' basis. Swastik Developers makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="mb-4">
              Further, Swastik Developers does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Website or otherwise relating to such materials or on any sites linked to this site.
            </p>

            <h2 className="font-heading text-2xl font-semibold mb-4 mt-8">4. Limitations</h2>
            <p className="mb-4">
              In no event shall Swastik Developers or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Swastik Developer's Website, even if Swastik Developers or a Swastik Developers authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="font-heading text-2xl font-semibold mb-4 mt-8">5. Governing Law</h2>
            <p className="mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
