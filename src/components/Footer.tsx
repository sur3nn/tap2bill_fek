
import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Globe, } from 'lucide-react';
import { FaInstagram, FaFacebookF } from "react-icons/fa";


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
              <div className="w-16 h-16 bg-gray-100  rounded-xl flex items-center justify-center">

                <img
                  src="/logo.svg"
                  alt="Fast POS billing software for restaurants with thermal bill printing"
                  className="w-16 h-16"
                />
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
                <Globe size={18} className="text-[#FF5722]" />
                <a
                  href="https://cmatrix.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF5722] transition-colors"
                >
                  cmatrix.in
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-[#FF5722]" />
                <span>+91 9994555400</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={48} className="text-[#FF5722] mt-1" />
                <span>First Floor, 246, Cuddalore Main Rd, Ammapet, Salem, Tamil Nadu 636003</span>
              </div>
              {/* ✅ Social Media Added Here */}
              <div className="pt-6">
                <p className="text-sm text-gray-500 mb-3">Follow us</p>

                <div className="flex items-center gap-3">

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/tap2bill/?hl=en "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900 hover:bg-[#FF5722] transition-all duration-300 group"
                  >
                    <span className="text-gray-300 group-hover:text-white text-base">
                      <FaInstagram />
                    </span>
                    <span className="text-sm text-gray-300 group-hover:text-white">
                      Instagram
                    </span>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/profile.php?id=61581861857507#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900 hover:bg-[#FF5722] transition-all duration-300 group"
                  >
                    <span className="text-gray-300 group-hover:text-white text-base">
                      <FaFacebookF />
                    </span>
                    <span className="text-sm text-gray-300 group-hover:text-white">
                      Facebook
                    </span>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">© Copyrights 2026. Tap2Bill is a Trading Style of Cmatrix Techonology Pvt Ltd.</p>
          <p className="text-gray-500 text-sm">Design & developed by <span className="text-white font-bold"> <a
            href="https://cmatrix.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF5722] transition-colors"
          >
            CMATRIX Techonology
          </a></span></p>
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
