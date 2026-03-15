
import React from 'react';
/* Added missing Phone import used in the delivery driver contact button */
import { CheckCircle, MapPin, Clock, Phone } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const CustomersSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal direction="left" className="space-y-8">
            <span className="text-orange-400 font-bold text-sm uppercase">For Customers</span>
            <h2 className="text-4xl font-black text-gray-900">Seamless Ordering From The App</h2>
            <p className="text-gray-600 leading-relaxed">
              Order from your favorite restaurants and cafés directly through the Tap2Bill app. Choose Dine-in, Takeaway, or Delivery, enjoy special offers, and pay securely by cash or card.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Fast Delivery & Takeaway', desc: 'Get your order delivered quickly or choose takeaway—your food, your way.' },
                { title: 'Live Tracking', desc: 'Track your delivery in real-time on the map, from kitchen to your doorstep.' },
                { title: 'Exclusive Offers', desc: 'View special offers and discounts available at your favorite eateries directly in the app.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                    <CheckCircle size={14} className="text-[#FF5722]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-[#FF5722] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#E64A19] transition-all shadow-xl shadow-orange-100">
              Download App
            </button>
          </ScrollReveal>

          <ScrollReveal direction="right" className="relative">
           <div>
             <img 
                  src="/for_customer.webp" 
                  className="rounded-[3rem]  w-full max-w-lg mx-auto"
                  alt="Mobile POS billing system for cafe restaurant billing in India"
                />
           </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;
