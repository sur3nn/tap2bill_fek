
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
             <div className="relative z-10 w-full max-md mx-auto aspect-[9/16] bg-white border-[12px] border-gray-950 rounded-[3rem] shadow-2xl overflow-hidden animate-float">
                {/* Simulated Map View */}
                <div className="absolute inset-0 bg-gray-100">
                   <div className="p-4 bg-white/90 backdrop-blur m-4 rounded-2xl shadow-sm border border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Order Tracking</p>
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600"><CheckCircle size={16} /></div>
                         <div>
                            <p className="text-sm font-bold">Your order has confirmed</p>
                            <p className="text-[10px] text-gray-400">02:00 pm - June 17, 2024</p>
                         </div>
                      </div>
                   </div>
                   
                   {/* Simplified Map UI */}
                   <div className="absolute bottom-0 left-0 w-full p-4 space-y-3">
                      <div className="bg-white rounded-2xl p-4 shadow-lg flex items-center gap-4">
                         <div className="w-12 h-12 rounded-full overflow-hidden">
                           <img src="https://picsum.photos/seed/delivery/100/100" alt="Delivery" />
                         </div>
                         <div className="flex-1">
                           <p className="text-sm font-bold">Gustav Purgleson</p>
                           <p className="text-[10px] text-gray-400">ID: 3275 TGR</p>
                         </div>
                         <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-[#FF5722]">
                            <Phone size={18} />
                         </div>
                      </div>
                      <div className="bg-white rounded-2xl p-4 shadow-lg space-y-3">
                         <div className="flex gap-3">
                            <div className="flex flex-col items-center">
                               <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                               <div className="w-0.5 h-6 bg-gray-200"></div>
                               <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
                            </div>
                            <div className="flex-1 space-y-3">
                               <div>
                                  <p className="text-[10px] font-bold text-gray-400 uppercase">From</p>
                                  <p className="text-xs font-bold">Starfish Restaurant</p>
                               </div>
                               <div>
                                  <p className="text-[10px] font-bold text-gray-400 uppercase">To</p>
                                  <p className="text-xs font-bold">Leaf Street, 124/5</p>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             
             {/* Large ETA Badge */}
             <div className="absolute top-1/2 -right-10 md:right-0 bg-orange-600 text-white p-6 rounded-[2rem] shadow-2xl z-20 flex flex-col items-center text-center -translate-y-1/2">
                <Clock size={32} className="mb-2" />
                <p className="text-xs font-bold opacity-80 uppercase tracking-widest">Ongoing Order</p>
                <p className="text-4xl font-black my-1">45</p>
                <p className="text-sm font-bold">mins</p>
                <p className="text-[10px] opacity-60 mt-2">Estimated delivery</p>
             </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;
