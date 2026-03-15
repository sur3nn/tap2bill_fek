import React from "react";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#FF5722] px-4 py-1.5 rounded-full text-sm font-semibold">
              <Star size={14} fill="currentColor" />
              <span>
                Best Billing Software for Cafes, Restaurants & Hotels in India
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1]">
              Bill Faster.{" "}
              <span className="text-[#FF5722]">Manage Better.</span>
              <br />
              Track Sales Live.
            </h1>

            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Tap2Bill is a simple, fast billing software made for food
              businesses — cafes, restaurants, hotels, bakeries, juice shops
              and cloud kitchens.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#FF5722] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#E64A19] shadow-xl shadow-orange-500/20">
                Start Free Demo
              </button>

              <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-900">
                Try 7-Day Free Trial
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative h-[600px]">

            {/* DIAGONAL SHAPE */}
            <div className="absolute right-0 top-0 h-full w-[420px] bg-white transform -skew-x-12 origin-top-right z-10"></div>

            {/* BURGER BACKGROUND */}
          <img
  src="/hero_bg.webp"
  alt="Restaurant POS billing system managing orders tables and billing"
  className="absolute right-[-350px] top-0 w-[700px] max-w-none z-20"
/>

            {/* PHONE IMAGE */}
            <img
              src="/hero_image.webp"
              alt="Affordable restaurant billing software for small cafes and food shops"
              className="absolute right-[120px] top-[60px] w-[500px] z-20 drop-shadow-2xl"
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;