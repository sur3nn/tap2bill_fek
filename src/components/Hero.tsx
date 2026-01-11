
import React from 'react';
import { Star, Play, Menu, MapPin, Clock, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#FF5722] px-4 py-1.5 rounded-full text-sm font-semibold">
              <Star size={14} fill="currentColor" />
              <span>Best Billing Software for Cafes, Restaurants & Hotels in India</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1]">
              Bill Faster. <span className="text-[#FF5722]">Manage Better.</span> Track Sales Live.
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Tap2Bill is a simple, fast billing software made for food businesses — cafes, restaurants, hotels, bakeries, juice shops and cloud kitchens. Manage your business with confidence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#FF5722] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#E64A19] transition-all shadow-xl shadow-orange-500/20 active:scale-95">
                Start Free Demo
              </button>
              <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-900 transition-all active:scale-95">
                Try 7-Day Free Trial
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i} 
                    src={`https://picsum.photos/seed/${i + 10}/60/60`} 
                    className="w-12 h-12 rounded-full border-2 border-white object-cover" 
                    alt="User"
                  />
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                  2.5k+
                </div>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">“Tap2Bill made our billing faster and easier than ever.”</div>
                <div className="flex items-center gap-1 text-orange-400">
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <span className="text-gray-500 text-xs ml-1 font-medium">Trusted by food businesses across Tamil Nadu and India.</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visuals */}
          <div className="relative">
            {/* Main Phone Mockup */}
            <div className="relative z-10 mx-auto w-[300px] md:w-[350px] animate-float">
               <div className="relative rounded-[3rem] border-8 border-gray-900 overflow-hidden shadow-2xl bg-white aspect-[9/19]">
                  <div className="absolute top-0 w-full p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="bg-orange-50 p-2 rounded-full"><Menu size={16} className="text-orange-500" /></div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-[#FF5722]" />
                        <span className="text-xs font-semibold">Salem, Tamil Nadu</span>
                      </div>
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100">
                        <img src="https://picsum.photos/seed/user/80/80" alt="Avatar" />
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold">Fast POS Billing</h3>
                      <p className="text-2xl font-black text-[#FF5722]">GST Compliant</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-2xl p-4 space-y-3">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Live Dashboard</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white p-2 rounded-xl border border-gray-100">
                          <p className="text-[10px] text-gray-400">Today's Sales</p>
                          <p className="text-sm font-black">₹ 12,450</p>
                        </div>
                        <div className="bg-white p-2 rounded-xl border border-gray-100">
                          <p className="text-[10px] text-gray-400">Today's Profit</p>
                          <p className="text-sm font-black text-green-500">₹ 3,200</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 pt-2">
                       <h4 className="text-sm font-bold">Quick Invoicing</h4>
                       <div className="bg-gray-50 rounded-2xl p-3 flex gap-4">
                          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 font-bold">POS</div>
                          <div>
                            <p className="text-xs font-bold">Dine-in Order #422</p>
                            <p className="text-sm font-black text-[#FF5722] mt-1">₹ 450.00</p>
                          </div>
                       </div>
                       <button className="w-full bg-[#FF5722] text-white py-2 rounded-xl text-xs font-bold">Print Bill (3-5 Sec)</button>
                    </div>
                  </div>
               </div>
            </div>
            
            <div className="absolute top-10 -left-20 md:-left-32 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 animate-float" style={{ animationDelay: '1s' }}>
               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                 <Clock className="text-[#FF5722]" />
               </div>
               <div>
                 <p className="text-xs text-gray-500 font-medium">Rush-Time</p>
                 <p className="font-bold">Billing</p>
               </div>
            </div>
            
            <div className="absolute top-1/2 -right-12 md:-right-24 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 animate-float" style={{ animationDelay: '1.5s' }}>
               <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                 <TrendingUp className="text-[#FF5722]" />
               </div>
               <div>
                 <p className="text-xs text-gray-500 font-medium">Real-time</p>
                 <p className="font-bold">Reports</p>
               </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-200 rounded-full blur-[120px] opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
