import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from './components/LoadingSpinner';

// Simplify the lazy loading - don't use the complex module structure
const App = lazy(() => import('./App'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const AboutDeveloper = lazy(() => import('./pages/AboutDeveloper'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const Admin = lazy(() => import('./pages/Admin'));

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
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Suspense>
  );
};
