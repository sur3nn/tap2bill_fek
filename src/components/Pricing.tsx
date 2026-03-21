
import React from 'react';
import { CheckCircle, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₹ 19',
      // period: '/ 7 Days Trial',
      subtitle: 'For small shops',
      popular: false,
      features: [
        '2 Users',
        'Dine-in Billing',
        'Takeaway Billing',
        'Food Coin',

      ]
    },
    {
      name: 'Standard',
      price: 'Affordable',
      period: 'Pricing',
      subtitle: 'For growing food businesses',
      popular: true,
      features: [
        'Everything in Starter',
        'Inventory Management',
        'Smart Business Reports',
        'Multi-User Access',
        'Kitchen Management',
        '24/7 Priority Support'
      ]
    },
    {
      name: 'Premium',
      price: 'Enterprise',
      period: 'Plans',
      subtitle: 'For multi-branch operations',
      popular: false,
      features: [
        'Everything in Standard',
        'Multi-branch Syncing',
        'Advanced Analytics',
        'Dedicated Account Manager',
        'Custom Integrations',
        'Unlimited Invoices'
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <span className="text-[#FF5722] font-bold text-sm tracking-widest uppercase mb-4 block">Simple and Affordable Pricing</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Choose a plan that fits your business</h2>
          <p className="flex items-center justify-center gap-3 text-gray-600 max-w-2xl mx-auto mb-10 text-center whitespace-nowrap overflow-hidden">
            <span className="bg-[#FF5722]/10 text-[#FF5722] px-4 py-1.5 rounded-full text-sm font-semibold border border-[#FF5722]/20">
              7 Days Free Trial
            </span>
            <span className="text-sm md:text-base truncate">
              Cancel anytime. No hidden charges. All plans include support and updates.
            </span>

          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <ScrollReveal key={i} delay={i * 150} direction="up">
              <div className={`relative bg-white border ${plan.popular ? 'border-[#FF5722] shadow-2xl scale-105 z-10' : 'border-gray-100 shadow-xl'} rounded-[2.5rem] p-10 transition-all hover:shadow-orange-500/10`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF5722] text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                    Recommended
                  </div>
                )}

                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-500 text-sm font-medium mb-6">{plan.subtitle}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-black text-gray-900">{plan.price}</span>
                    <span className="text-gray-400 font-bold ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 border-t border-gray-100 pt-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-[#FF5722] flex-shrink-0" />
                      <span className="text-gray-600 font-medium text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-2xl font-black transition-all ${plan.popular ? 'bg-[#FF5722] text-white shadow-xl shadow-orange-500/20 hover:bg-[#E64A19]' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                  {plan.name === 'Starter' ? 'Try for Free' : 'Request Pricing'}
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-500 font-medium">
          Request pricing or book a demo. We will guide you to the right plan.
        </div>
      </div>
    </section>
  );
};

export default Pricing;
