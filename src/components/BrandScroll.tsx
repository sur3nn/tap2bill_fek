
import React from 'react';

const BrandScroll: React.FC = () => {
  const brands = [
    { name: 'Restaurant Food & Drinks', logo: 'RESTAURANT' },
    { name: 'Foodies', logo: 'Foodies' },
    { name: 'Good Food', logo: 'GOOD FOOD' },
    { name: 'Coffee', logo: 'Coffee' },
    { name: 'Traditional Food', logo: 'Restaurant' },
    { name: 'Quick Bites', logo: 'QUICK BITES' },
    { name: 'Urban Eat', logo: 'URBAN EAT' },
  ];

  // Duplicate brands to ensure seamless infinite scroll
  const scrollItems = [...brands, ...brands, ...brands];

  return (
    <section className="py-20 border-b border-gray-100 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <p className="text-gray-500 font-bold tracking-widest text-sm uppercase">
          Trusted by 2.5k+ restaurant
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-hidden group mb-16">
        <div className="animate-marquee flex whitespace-nowrap items-center gap-12 md:gap-24 opacity-60 py-4">
          {scrollItems.map((brand, i) => (
            <div 
              key={i} 
              className="text-2xl md:text-3xl font-black italic text-gray-400 hover:text-[#FF5722] transition-colors cursor-default select-none uppercase tracking-tighter"
            >
              {brand.logo}
            </div>
          ))}
        </div>
        
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center">
        {/* Animated Page Indicators */}
        <div className="flex justify-center gap-3 mb-12">
          <div className="w-3 h-3 rounded-full bg-gray-200 animate-dot-1"></div>
          <div className="w-3 h-3 rounded-full bg-gray-200 animate-dot-2"></div>
          <div className="w-3 h-3 rounded-full bg-gray-200 animate-dot-3"></div>
        </div>
        
        <button className="bg-[#FF5722] text-white px-10 py-5 rounded-full font-black text-lg hover:bg-[#E64A19] transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/20 active:scale-95">
          Register Your Restaurant
        </button>
      </div>
    </section>
  );
};

export default BrandScroll;
