import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from './components/LoadingSpinner';

// Lazy load components
const App = lazy(() => import('./App'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions').then(module => ({ default: module.TermsAndConditions })));
const Disclaimer = lazy(() => import('./pages/Disclaimer').then(module => ({ default: module.Disclaimer })));
const Sitemap = lazy(() => import('./pages/Sitemap').then(module => ({ default: module.Sitemap })));
const AboutDeveloper = lazy(() => import('./pages/AboutDeveloper').then(module => ({ default: module.AboutDeveloper })));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/about-developer" element={<AboutDeveloper />} />
      </Routes>
    </Suspense>
  );
};
