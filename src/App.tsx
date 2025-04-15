import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './components/Button';
import { MapPin, Phone, Mail, ChevronRight, Download, ChevronUp, Menu, X } from 'lucide-react';
import { EnquiryForm } from './components/EnquiryForm';
import { AnimatedSection } from './components/AnimatedSection';
import { CircleIcon } from './components/CircleIcon';
import { Link } from 'react-router-dom';
import { LoadingSpinner } from './components/LoadingSpinner';

// Lazy load components
const ImageCarousel = lazy(() => import('./components/ImageCarousel').then(module => ({ default: module.ImageCarousel })));
const LocationAdvantage = lazy(() => import('./components/LocationAdvantage').then(module => ({ default: module.LocationAdvantage })));
const ConfigurationCards = lazy(() => import('./components/ConfigurationCards').then(module => ({ default: module.ConfigurationCards })));
const Amenities = lazy(() => import('./components/Amenities').then(module => ({ default: module.Amenities })));
const ProjectHighlights = lazy(() => import('./components/ProjectHighlights').then(module => ({ default: module.ProjectHighlights })));
const Gallery = lazy(() => import('./components/Gallery').then(module => ({ default: module.Gallery })));

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true); // Start with the form open
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Always show the form on page load/refresh
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  // Handle scroll to show scroll-to-top button and change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple close handler for the form - doesn't use localStorage anymore
  const handleCloseForm = () => {
    setIsModalOpen(false);
  };

  // Function to show the form again
  const showForm = () => {
    setIsModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToOverview = () => {
    const overviewSection = document.getElementById('overview-content');
    if (overviewSection) {
      // Adjust the scroll position to account for fixed header and scroll below the MahaRERA section
      const yOffset = overviewSection.offsetHeight; // Add height of the MahaRERA section
      const y = overviewSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            <div className={`font-heading text-xl sm:text-2xl font-bold ${scrolled ? 'text-primary' : 'text-white'}`}>
              <a href="#" className="flex items-center">
                <div className={`bg-secondary py-1 px-3 rounded-sm shadow-md mr-2 transition-all duration-300 ${
                  scrolled ? 'bg-opacity-100' : 'bg-opacity-90'
                }`}>
                  <div className="flex items-center">
                    <img 
                      src="/logo.png" 
                      alt="Swastik Platinum Logo" 
                      className="h-10 w-10 mr-2"
                      loading="eager" 
                      width="40"
                      height="40"
                    />
                    <span className="text-white">Swastik Platinum</span>
                  </div>
                </div>
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <div className="flex items-center space-x-5 xl:space-x-7">
                <a href="#overview" className={`text-sm font-medium hover:text-secondary transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>OVERVIEW</a>
                <a href="#configurations" className={`text-sm font-medium hover:text-secondary transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>CONFIGURATIONS</a>
                <a href="#location" className={`text-sm font-medium hover:text-secondary transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>LOCATION</a>
                <a href="#amenities" className={`text-sm font-medium hover:text-secondary transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>AMENITIES</a>
                <a href="#gallery" className={`text-sm font-medium hover:text-secondary transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>GALLERY</a>
              </div>
              <div className="flex items-center pl-2 border-l border-gray-300/30">
                <Link to="/about-developer" className={`text-sm font-medium hover:text-secondary transition-colors ${scrolled ? 'text-primary' : 'text-white'} mr-5`}>DEVELOPER</Link>
                <Button 
                  onClick={() => setIsModalOpen(true)} 
                  variant={scrolled ? "secondary" : "outline"}
                  size="sm"
                  className={`text-sm ${!scrolled && 'border-white text-white hover:bg-white/20'}`}
                >
                  ENQUIRE NOW
                </Button>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className={scrolled ? 'text-primary' : 'text-white'} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-primary"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-10">
                <div className="font-heading text-2xl font-bold">
                  <div className="flex items-center">
                    <img 
                      src="/logo.png" 
                      alt="Swastik Platinum Logo" 
                      className="h-10 w-10 mr-2"
                    />
                    <div className="bg-secondary py-1 px-3 rounded-sm shadow-md inline-block">
                      <span className="text-white">Swastik Platinum</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="text-white" />
                </button>
              </div>
              <div className="flex flex-col space-y-6">
                <h3 className="text-secondary font-medium text-lg mb-2">NAVIGATION</h3>
                <a href="#overview" onClick={() => setMobileMenuOpen(false)} className="text-white text-lg font-medium">Overview</a>
                <a href="#configurations" onClick={() => setMobileMenuOpen(false)} className="text-white text-lg font-medium">Configurations</a>
                <a href="#location" onClick={() => setMobileMenuOpen(false)} className="text-white text-lg font-medium">Location</a>
                <a href="#amenities" onClick={() => setMobileMenuOpen(false)} className="text-white text-lg font-medium">Amenities</a>
                <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-white text-lg font-medium">Gallery</a>
                
                <div className="w-1/3 h-px bg-white/20 my-2"></div>
                
                <Link to="/about-developer" onClick={() => setMobileMenuOpen(false)} className="text-white text-lg font-medium">About Developer</Link>
              </div>
              <div className="mt-auto">
                <Button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsModalOpen(true);
                  }} 
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  ENQUIRE NOW
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section 
        id="overview"
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1920&h=1080")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        <div className="relative z-10 text-white text-center px-4 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight drop-shadow-lg"
          >
            WHERE LUXURY <br className="hidden md:block" /> EMBRACES THE SKY
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mb-10 font-light tracking-wide drop-shadow-md"
          >
            22 Storeys of Elegance in Vikhroli East
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-center items-center gap-6"
          >
            <Button 
              onClick={() => setIsModalOpen(true)}
              size="lg"
              variant="secondary"
              className="px-6 sm:px-10 py-5 sm:py-6 text-sm sm:text-base btn-hover-effect transition-all duration-300 w-full md:w-auto"
            >
              ENQUIRE NOW
            </Button>
            <a 
              href="#location" 
              className="flex items-center gap-2 text-white hover:text-secondary transition-all duration-300 mt-4 md:mt-0 group"
            >
              VIEW LOCATION <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center"
        >
          <CircleIcon 
            onClick={scrollToOverview} 
            ariaLabel="Scroll to project overview"
          />
        </motion.div>
      </section>

      {/* MahaRERA Info Bar */}
      <div className="bg-primary text-white py-3 px-4" id="overview-content">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div>MahaRERA Registration No: P12345678</div>
          <a 
            href="https://maharera.maharashtra.gov.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-secondary hover:underline mt-2 md:mt-0"
          >
            https://maharera.maharashtra.gov.in
          </a>
        </div>
      </div>

      {/* Project Highlights */}
      <AnimatedSection>
        <Suspense fallback={<LoadingSpinner />}>
          <ProjectHighlights />
        </Suspense>
      </AnimatedSection>

      {/* Overview Section */}
      <AnimatedSection>
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">WHERE LUXURY EMBRACES THE SKY</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8 sm:mb-10"></div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0">
                Embark on a life beyond the ordinary, where the boundaries between nature and city life seamlessly merge. Nestled in Vikhroli East, presenting Swastik Platinum, an exclusive haven with 1 & 2 BHK luxurious balcony residences. Escape the mundane as your balcony transforms into a sanctuary, granting you breathtaking views of the city.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white text-sm sm:text-base">
                  <Download className="w-4 h-4 mr-2" /> DOWNLOAD BROCHURE
                </Button>
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white text-sm sm:text-base mt-3 sm:mt-0">
                  <Download className="w-4 h-4 mr-2" /> DOWNLOAD FLOOR PLANS
                </Button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Configuration Cards */}
      <AnimatedSection>
        <section id="configurations" className="py-20 bg-accent">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-4xl font-bold text-center mb-4">CONFIGURATIONS</h2>
            <h3 className="text-xl text-center mb-4 text-gray-600 font-light">WHERE ELEGANCE FINDS ITS HOME</h3>
            <div className="w-20 h-1 bg-secondary mx-auto mb-16"></div>
            <Suspense fallback={<LoadingSpinner />}>
              <ConfigurationCards />
            </Suspense>
          </div>
        </section>
      </AnimatedSection>

      {/* Location Advantage */}
      <AnimatedSection>
        <section id="location" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-4xl font-bold text-center mb-4">LOCATION</h2>
            <h3 className="text-xl text-center mb-4 text-gray-600 font-light">WHERE THE WORLD IS AT YOUR FINGERTIPS</h3>
            <div className="w-20 h-1 bg-secondary mx-auto mb-16"></div>
            <Suspense fallback={<LoadingSpinner />}>
              <LocationAdvantage />
            </Suspense>
          </div>
        </section>
      </AnimatedSection>

      {/* Amenities */}
      <AnimatedSection>
        <section id="amenities" className="py-20 bg-accent">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-4xl font-bold text-center mb-4">AMENITIES</h2>
            <h3 className="text-xl text-center mb-4 text-gray-600 font-light">WHERE LUXURY LIFE REIGNS SUPREME</h3>
            <div className="w-20 h-1 bg-secondary mx-auto mb-16"></div>
            <Suspense fallback={<LoadingSpinner />}>
              <Amenities />
            </Suspense>
          </div>
        </section>
      </AnimatedSection>

      {/* Gallery Section */}
      <AnimatedSection>
        <section id="gallery" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-4xl font-bold text-center mb-4">GALLERY</h2>
            <h3 className="text-xl text-center mb-4 text-gray-600 font-light">WHERE YOU REDISCOVER LIFE</h3>
            <div className="w-20 h-1 bg-secondary mx-auto mb-16"></div>
            
            {/* Added ImageCarousel here before the Gallery component */}
            <div className="mb-16 overflow-hidden rounded-lg shadow-xl">
              <Suspense fallback={<LoadingSpinner />}>
                <ImageCarousel />
              </Suspense>
            </div>
            
            <Suspense fallback={<LoadingSpinner />}>
              <Gallery />
            </Suspense>
          </div>
        </section>
      </AnimatedSection>

      

      {/* Footer */}
        <footer className="bg-primary text-white pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <div>
              <div className="flex items-center mb-8 sm:mb-6">
                <div className="bg-secondary py-1 px-3 rounded-sm shadow-md flex items-center">
                  <img 
                    src="/logo.png" 
                    alt="Swastik Platinum Logo" 
                    className="h-10 w-10 mr-2"
                    loading="lazy"
                    width="40"
                    height="40"
                  />
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white">Swastik Platinum</h3>
                </div>
              </div>
              <p className="mb-4 sm:mb-6 text-white/80 text-sm sm:text-base">Luxury residences in Vikhroli East, Mumbai</p>
              <div className="space-y-3 sm:space-y-4">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-secondary flex-shrink-0" />
                  <span className="text-white/80 text-sm sm:text-base">Vikhroli East, Mumbai – 400083</span>
                </p>
                <p className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5 text-secondary flex-shrink-0" />
                  <span className="text-white/80 text-sm sm:text-base">+91 99999 99999</span>
                </p>
                <p className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-0.5 text-secondary flex-shrink-0" />
                  <span className="text-white/80 text-sm sm:text-base">info@swastikplatinum.com</span>
                </p>
              </div>
            </div>
            <div className="mt-8 sm:mt-0">
              <h3 className="bg-secondary font-heading text-lg sm:text-xl font-bold mb-4 sm:mb-6 bg-secondary py-1 px-3 rounded-sm shadow-md inline-block mb-6">Quick Links</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-4">
                <li><a href="#overview" className="text-white/80 hover:text-secondary transition-colors text-sm sm:text-base">Overview</a></li>
                <li><a href="#configurations" className="text-white/80 hover:text-secondary transition-colors text-sm sm:text-base">Configurations</a></li>
                <li><a href="#location" className="text-white/80 hover:text-secondary transition-colors text-sm sm:text-base">Location</a></li>
                <li><a href="#amenities" className="text-white/80 hover:text-secondary transition-colors text-sm sm:text-base">Amenities</a></li>
                <li><a href="#gallery" className="text-white/80 hover:text-secondary transition-colors text-sm sm:text-base">Gallery</a></li>
                <li><Link to="/about-developer" className="text-white/80 hover:text-secondary transition-colors text-sm sm:text-base">About Developer</Link></li>
              </ul>
            </div>
            <div>
              <div className="bg-secondary py-1 px-3 rounded-sm shadow-md inline-block mb-6">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white">Legal</h3>
              </div>
              <ul className="space-y-4">
                <li><Link to="/privacy-policy" className="text-white/80 hover:text-secondary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-and-conditions" className="text-white/80 hover:text-secondary transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/disclaimer" className="text-white/80 hover:text-secondary transition-colors">Disclaimer</Link></li>
                <li><Link to="/sitemap" className="text-white/80 hover:text-secondary transition-colors">Sitemap</Link></li>
              </ul>
            </div>
            <div>
              <div className="bg-secondary py-1 px-3 rounded-sm shadow-md inline-block mb-6">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white">Connect With Us</h3>
              </div>
              <div className="flex gap-4 mb-8">
                <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
              <Button
                onClick={() => setIsModalOpen(true)}
                variant="secondary"
                className="w-full"
              >
                ENQUIRE NOW
              </Button>
            </div>
          </div>
          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">© 2025 Swastik Platinum. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Right side enquiry floating tab - hidden on small screens */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <button 
          onClick={showForm}
          className="bg-[#faf5ef] text-[#d1b989] font-medium py-4 px-3 writing-mode-vertical rotate-180 shadow-lg hover:bg-secondary hover:text-white transition-colors duration-300"
          style={{ writingMode: 'vertical-rl' }}
        >
          ENQUIRE NOW
        </button>
      </div>

      {/* Fixed Enquiry Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <Button
          onClick={showForm}
          variant="secondary"
          size="lg"
          className="rounded-full shadow-lg text-sm sm:text-base"
        >
          <span className="hidden sm:inline">SPEAK TO OUR REPRESENTATIVE</span>
          <span className="sm:hidden">ENQUIRE NOW</span>
        </Button>
      </div>

      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg"
            onClick={scrollToTop}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Enquiry Form Modal - always open on page load/refresh */}
      <EnquiryForm isOpen={isModalOpen} onClose={handleCloseForm} />
    </div>
  );
}

export default App;