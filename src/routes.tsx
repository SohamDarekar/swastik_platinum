import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { Disclaimer } from './pages/Disclaimer';
import { Sitemap } from './pages/Sitemap';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/sitemap" element={<Sitemap />} />
    </Routes>
  );
};
