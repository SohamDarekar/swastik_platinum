import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
// Import using default exports
import Sitemap from './pages/Sitemap';
import AboutDeveloper from './pages/AboutDeveloper';
import ThankYou from './pages/ThankYou';
import Admin from './pages/Admin';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Disclaimer from './pages/Disclaimer';
import { LoadingSpinner } from './components/LoadingSpinner';

export const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/about-developer" element={<AboutDeveloper />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </Suspense>
  );
};
