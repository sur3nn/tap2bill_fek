
import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: 'home' | 'about' | 'pricing' | 'contact') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => onNavigate?.('home')}
            >
              <div className="w-10 h-10 bg-[#FF5722] rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-xl italic">T</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">Tap<span className="text-[#FF5722]">2Bill</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              India's best billing software for cafes, restaurants, hotels, bakeries and juice shops. Live dashboard, GST billing, and affordable plans.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><button onClick={() => onNavigate?.('home')} className="hover:text-[#FF5722] transition-colors text-left">Home</button></li>
              <li><button onClick={() => onNavigate?.('about')} className="hover:text-[#FF5722] transition-colors text-left">About us</button></li>
              <li><button onClick={() => onNavigate?.('pricing')} className="hover:text-[#FF5722] transition-colors text-left">Pricing</button></li>
              <li><button onClick={() => onNavigate?.('contact')} className="hover:text-[#FF5722] transition-colors text-left">Book a Demo</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-8">Features</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li>Fast POS Billing</li>
              <li>GST Compliance</li>
              <li>Inventory Management</li>
              <li>Smart Business Reports</li>
              <li>Cloud Backup</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-8">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-[#FF5722]" />
                <span>support@cmatrix.in</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-[#FF5722]" />
                <span>+91 63692 47296</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-[#FF5722] mt-1" />
                <span>First Floor, 246, Cuddalore Main Rd, Ammapet, Salem, Tamil Nadu 636003</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">© Copyrights 2025. Tap2Bill is a Trading Style of Cmatrix IT Solutions Ltd.</p>
          <p className="text-gray-500 text-sm">Design & developed by <span className="text-white font-bold">CMATRIX</span></p>
        </div>
        
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#FF5722] rounded-full flex items-center justify-center shadow-xl shadow-orange-500/20 z-50 hover:bg-[#E64A19] transition-all transform hover:scale-110"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
