import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  currentView: 'home' | 'about' | 'pricing' | 'contact';
  onNavigate: (view: 'home' | 'about' | 'pricing' | 'contact') => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (view: 'home' | 'about' | 'pricing' | 'contact') => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Banner */}
      <div className={`bg-[#FF5722] text-white text-xs py-2 px-4 hidden md:flex justify-between items-center z-50 transition-opacity duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><Phone size={12} /> Reach out anytime and our team will get back to you quickly.</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+916369247296" className="flex items-center gap-1 hover:underline"><Phone size={12} /> Call us now</a>
          <a href="mailto:support@cmatrix.in" className="flex items-center gap-1 hover:underline"><Mail size={12} /> Email us</a>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-md shadow-lg py-3 border-b border-white/20' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => handleNav('home')}
          >
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <img
                src="/logo.svg"
                alt="Tap2Bill cafe billing software dashboard with sales reports and billing"
                className="w-16 h-16"
              />
            </div>
            <span className="text-2xl font-bold tracking-tight">Tap<span className="text-[#FF5722]">2Bill</span></span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <button
              onClick={() => handleNav('home')}
              className={`transition-colors ${currentView === 'home' ? 'text-[#FF5722]' : 'hover:text-[#FF5722]'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav('about')}
              className={`transition-colors ${currentView === 'about' ? 'text-[#FF5722]' : 'hover:text-[#FF5722]'}`}
            >
              About us
            </button>
            <button
              onClick={() => handleNav('pricing')}
              className={`transition-colors ${currentView === 'pricing' ? 'text-[#FF5722]' : 'hover:text-[#FF5722]'}`}
            >
              Pricing
            </button>
            <button
              onClick={() => handleNav('contact')}
              className={`transition-colors ${currentView === 'contact' ? 'text-[#FF5722]' : 'hover:text-[#FF5722]'}`}
            >
              Contact
            </button>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Login Button */}
            <a href="https://tap2bill.in/login" target="_blank" rel="noopener noreferrer"
  className="border-2 border-[#FF5722] text-[#FF5722] px-5 py-3 rounded-xl font-bold active:scale-95 transition-transform text-center">
  Login
</a>

<a href="https://tap2bill.in/register" target="_blank" rel="noopener noreferrer"
  className="bg-[#FF5722] text-white px-4 py-3 rounded-xl font-bold shadow-lg shadow-orange-500/20 active:scale-95 transition-transform text-center">
  Register
</a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-gray-100 p-4 absolute top-full left-0 w-full shadow-2xl">
            <nav className="flex flex-col gap-4">
              <button onClick={() => handleNav('home')} className="p-3 text-left hover:bg-[#FF5722]/10 rounded-xl transition-colors font-bold">Home</button>
              <button onClick={() => handleNav('about')} className="p-3 text-left hover:bg-[#FF5722]/10 rounded-xl transition-colors font-bold">About us</button>
              <button onClick={() => handleNav('pricing')} className="p-3 text-left hover:bg-[#FF5722]/10 rounded-xl transition-colors font-bold">Pricing</button>
              <button onClick={() => handleNav('contact')} className="p-3 text-left hover:bg-[#FF5722]/10 rounded-xl transition-colors font-bold">Contact</button>
              <div className="flex flex-col gap-3 pt-2">
                {/* Mobile Login Button */}
                <a href="https://tap2bill.in/login" target="_blank" rel="noopener noreferrer"
  className="flex justify-center item-center border-2 border-[#FF5722] text-[#FF5722] px-6 py-2.5 rounded-full font-semibold hover:bg-[#FF5722]/10 transition-colors">
  Login
</a>

<a href="https://tap2bill.in/register" target="_blank" rel="noopener noreferrer"
  className="flex justify-center item-center bg-[#FF5722] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#E64A19] transition-colors shadow-lg shadow-orange-200">
  Register
</a>  
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;