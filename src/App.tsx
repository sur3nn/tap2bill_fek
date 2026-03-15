
import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Store, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  MapPin, 
  Star, 
  Users, 
  Utensils, 
  Truck,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Quote
} from 'lucide-react';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import BrandScroll from './components/BrandScroll';
import Features from './components/Features';
import OwnersSection from './components/OwnersSection';
import CustomersSection from './components/CustomersSection';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Pricing from './components/Pricing';
import ContactUs from './components/ContactUs';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'pricing' | 'contact'>('home');

  // Smooth scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero />
            <Stats />
            <BrandScroll />
            <Features />
            <OwnersSection />
            <CustomersSection />
          
<div className="relative ">
  <HowItWorks />

  <img
    src="/device.webp"
    alt="Restaurant billing software POS system dashboard for cafes and hotels in India"
    className="absolute bottom-[-140px] left-1/2 -translate-x-1/2 w-[900px] z-[100] drop-shadow-2xl"
  />
</div>
            <Testimonials />
            
            
            {/* Call to Action Section */}
            <section className="relative py-20 bg-gray-950 overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20">
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover"
                  alt="Cafe billing software interface showing fast POS billing and menu management"
                />
                <div className="absolute inset-0 bg-black/80"></div>
              </div>
              
              <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                  Your Restaurant, Your App
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                  With Tap2Bill, you can easily move your menu online, manage updates instantly, and publish a fully branded app for your customers.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-black text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-gray-900 transition-colors border border-gray-800">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Tap2Bill restaurant POS software used by cafes and food businesses in India" className="h-10" />
                  </button>
                  <button className="bg-black text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-gray-900 transition-colors border border-gray-800">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Cloud based restaurant billing software for cafes restaurants and hotels" className="h-10" />
                  </button>
                </div>
              </div>
            </section>
          </>
        )}
        {currentView === 'about' && <AboutUs />}
        {currentView === 'pricing' && <Pricing />}
        {currentView === 'contact' && <ContactUs onNavigate={setCurrentView} />}
      </main>
      <Footer onNavigate={setCurrentView} />
    </div>
  );
};

export default App;
