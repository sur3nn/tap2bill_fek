import React from 'react';
import { CheckCircle, Target, Shield, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const AboutUs: React.FC = () => {

  const faqs = [
    {
      q: "1. What is Tap2Bill and how does it help food businesses?",
      a: "Tap2Bill is a cloud-based restaurant billing software in India designed for cafes, restaurants, hotels, juice shops and food businesses. It helps manage billing, orders, menu items and sales reports in one simple POS system."
    },
    {
      q: "2. Is Tap2Bill the best cafe billing software in India?",
      a: "Tap2Bill offers fast POS billing, easy menu management, thermal bill printing, daily sales reports and cloud data access. This makes it a strong solution for cafes and food businesses across India."
    },
    {
      q: "3. Does Tap2Bill work for hotels and restaurants?",
      a: "Yes. Tap2Bill is built for restaurants, cafes, hotels, juice shops, fast food shops, momo shops and cloud kitchens. It helps manage tables, orders and billing quickly."
    },
    {
      q: "4. Can I use Tap2Bill on mobile for my cafe billing?",
      a: "Yes. Tap2Bill works on Android mobile devices, tablets and POS machines. You can generate bills, update menu items, view reports and manage orders from your mobile."
    },
    {
      q: "5. Is Tap2Bill a cloud-based restaurant billing software?",
      a: "Yes. Tap2Bill is cloud-based, which means business data is stored securely and reports can be accessed from anywhere without complicated installations."
    },
    {
      q: "6. Is Tap2Bill affordable for small food businesses?",
      a: "Yes. Tap2Bill provides affordable pricing designed for small cafes, restaurants, juice shops and startup food businesses in India."
    },
    {
      q: "7. Does Tap2Bill offer a free trial?",
      a: "Yes. Tap2Bill provides a 7-day free trial so businesses can explore billing, add menu items, generate bills and view reports before purchasing."
    },
    {
      q: "8. Where is Tap2Bill company located?",
      a: "Tap2Bill is developed in Salem, Tamil Nadu, India and is used by food businesses across different cities in India."
    },
    {
      q: "9. Why should food businesses choose Tap2Bill?",
      a: "Tap2Bill offers fast billing POS, cloud technology, affordable pricing, mobile billing support, easy menu management and a 7-day free trial."
    },
    {
      q: "10. Which businesses can use Tap2Bill POS software?",
      a: "Tap2Bill is designed for cafes, restaurants, hotels, juice shops, fast food shops, momo shops and cloud kitchens."
    }
  ];

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
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
                Billing should be simple, fast and stress-free.
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                Tap2Bill was built to solve real problems food businesses face — slow billing,
                GST confusion and complicated software. We help cafes, hotels and restaurants
                move from manual billing to smart billing — with clear reports and reliable support.
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
                    Help food businesses work smarter using easy technology.
                    Our goal is simple: make billing fast, reliable and affordable.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" className="bg-gray-900 p-12 rounded-[3rem] text-white">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-orange-500 mb-8">
                  <Zap size={32} />
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

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">

          <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900 mb-16">
            Tap2Bill FAQ
          </h2>

          <div className="space-y-8">

            {faqs.map((faq, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                delay={index * 0.1}
              >
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {faq.q}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>

                </div>
              </ScrollReveal>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutUs;