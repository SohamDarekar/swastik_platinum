import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Thank You!</h1>
        <div className="mb-6">
          <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <p className="text-gray-700 mb-6">
          Your enquiry has been successfully submitted. Our team will get back to you shortly.
        </p>
        <Link to="/" className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition duration-300">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
