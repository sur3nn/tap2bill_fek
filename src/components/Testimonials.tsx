
import React from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Olivia Sam',
      content: '"Our app was live in a day — customers love it!" Tap2Bill made it effortless to upload our menu, customise our branding, and publish our own restaurant app. The setup was fast and support was incredibly helpful.',
      avatar: 'https://picsum.photos/seed/olivia/80/80',
      rating: 5
    },
    {
      name: 'Sandra Luna',
      content: '"Easy to Manage and Update" Tap2Bill lets us edit our menu, add new items, and update prices instantly—no technical skills needed, and everything works smoothly.',
      avatar: 'https://picsum.photos/seed/sandra/80/80',
      rating: 5
    },
    {
      name: 'Amelia Elisa',
      content: '"Bringing Our Menu Online Was Simple" With Tap2Bill, we created our branded app in no time, making it easy for customers to view our menu and place orders directly.',
      avatar: 'https://picsum.photos/seed/amelia/80/80',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#FF5722] font-bold text-sm tracking-widest uppercase mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our happy clients</h2>
          <p className="text-gray-600 text-lg">
            Restaurants and cafés using Tap2Bill have transformed their digital presence, improved customer engagement, and streamlined menu management. Here's what they're saying.
          </p>
        </div>
        
        <div className="relative group">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 relative group hover:shadow-xl transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-orange-50">
                    <img src={t.avatar} alt={t.name} />
                  </div>
                  <h4 className="text-xl font-black text-gray-900 mb-2">{t.name}</h4>
                  <div className="flex gap-1 text-orange-400 mb-6">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-600 leading-relaxed italic">
                    {t.content}
                  </p>
                  <div className="mt-8 text-[#FF5722] opacity-20">
                    <Quote size={40} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-orange-500 transition-colors hidden lg:flex">
             <ChevronLeft />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-orange-500 transition-colors hidden lg:flex">
             <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
