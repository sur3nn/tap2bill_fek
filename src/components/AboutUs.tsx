
import React from 'react';
import { CheckCircle, Target, Shield, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Breadcrumb Header */}
      <section className="relative py-24 bg-orange-50/50 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-black text-[#FF5722] mb-4">About Tap2Bill</h1>
          <div className="flex justify-center items-center gap-2 text-sm font-bold text-gray-500">
            <span>Home</span>
            <span className="text-gray-300">»</span>
            <span className="text-[#FF5722]">About Us</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-24">
            <ScrollReveal direction="up" className="text-center">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Billing should be simple, fast and stress-free.</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Tap2Bill was built to solve real problems food businesses face — slow billing, GST confusion and complicated software. We help cafes, hotels and restaurants move from manual billing to smart billing — with clear reports and reliable support.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12">
              <ScrollReveal direction="left" className="bg-orange-50 p-12 rounded-[3rem] relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#FF5722] rounded-2xl flex items-center justify-center text-white mb-8">
                    <Target size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-6">Our Mission</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Help food businesses work smarter using easy technology. Our goal is simple: make billing fast, reliable and affordable.
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-full translate-x-12 -translate-y-12"></div>
              </ScrollReveal>

              <ScrollReveal direction="right" className="bg-gray-900 p-12 rounded-[3rem] text-white">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-orange-500 mb-8">
                  < Zap size={32} />
                </div>
                <h3 className="text-3xl font-black mb-6">Built Specifically For:</h3>
                <ul className="space-y-4">
                  {[
                    "Cafes & Quick POS needs",
                    "Restaurants & Table Billing",
                    "Hotels & Multi-branch operations",
                    "Bakeries & Sweet Shops",
                    "Juice & Dessert Shops"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-gray-300">
                      <CheckCircle size={18} className="text-orange-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;