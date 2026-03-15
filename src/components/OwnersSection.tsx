
import React from 'react';
import { CheckCircle, Star, Utensils, Coffee, Pizza, IceCream } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const OwnersSection: React.FC = () => {
  const industries = [
    { name: 'Cafes', desc: 'Quick POS, combos and add-ons', icon: <Coffee size={20} /> },
    { name: 'Restaurants & Hotels', desc: 'Table billing, KOT and GST invoices', icon: <Utensils size={20} /> },
    { name: 'Bakeries & Sweets', desc: 'Counter billing and barcode items', icon: <Pizza size={20} /> },
    { name: 'Juice & Dessert Shops', desc: 'Fast billing and daily summaries', icon: <IceCream size={20} /> }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <span className="text-[#FF5722] font-bold text-sm tracking-widest uppercase mb-4 block">Built for Rush-Time Billing</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">No more manual mistakes or slow billing</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Tap2Bill keeps your counter smooth even during peak hours. Perfect for food businesses across Tamil Nadu and India.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal direction="left" className="space-y-8">
            <span className="text-orange-400 font-bold text-sm uppercase">Industries We Serve</span>
            <h2 className="text-4xl font-black text-gray-900">Simple POS designed for busy counters</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-[#FF5722] mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-4">
              {[
                { title: 'Fast Checkout', desc: 'Process orders instantly to reduce queues.' },
                { title: 'Accurate GST', desc: 'Automated tax calculations for error-free billing.' },
                { title: 'Instant Reports', desc: 'Live view of sales and profits at your fingertips.' }
              ].map((point, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                    <CheckCircle size={14} className="text-[#FF5722]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{point.title}</h4>
                    <p className="text-gray-600 text-sm">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="relative">
             <div className="relative z-10 animate-float">
                <img 
                  src="/features_frame.webp" 
                  className="rounded-[3rem] shadow-2xl w-full max-w-lg mx-auto"
                  alt="Cloud POS software for restaurants cafes hotels and cloud kitchens in India"
                />
             </div>
             {/* <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl z-20 max-w-[240px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">100% GST Compliant</p>
                    <p className="text-xs text-gray-400">Ready for filing</p>
                  </div>
                </div>
                <div className="border-t border-dashed border-gray-200 pt-4">
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span>Subtotal</span>
                    <span>₹ 840.00</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold text-orange-500">
                    <span>GST (5%)</span>
                    <span>₹ 42.00</span>
                  </div>
                  <div className="flex justify-between text-sm font-black mt-2">
                    <span>Total</span>
                    <span>₹ 882.00</span>
                  </div>
                </div>
             </div> */}
          
          
          
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default OwnersSection;
