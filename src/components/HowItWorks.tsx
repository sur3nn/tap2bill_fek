
import React from 'react';
import { UserPlus, Settings, Layout, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Sign Up',
      desc: 'Create your account in seconds. 7 days completely free, no credit card required.',
      icon: <UserPlus className="text-white" />
    },
    {
      num: '02',
      title: 'Setup Menu & Taxes',
      desc: 'Add your food items and set up your GST rates. Staff can start billing within minutes.',
      icon: <Settings className="text-white" />
    },
    {
      num: '03',
      title: 'Start Billing',
      desc: 'Process orders across dine-in, takeaway, and delivery with our ultra-fast POS interface.',
      icon: <Zap className="text-white" />
    }
  ];

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 blur-[150px] -z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <ScrollReveal>
          <span className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-4 block">Simple Transition</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Move from manual billing to smart billing</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-20">
            Switching to Tap2Bill is fast and stress-free. Get your counter running smooth in 3 easy steps.
          </p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 200} className="group">
              <div className="bg-gray-900 border border-gray-800 rounded-[3rem] p-10 h-full transition-all hover:bg-gray-800/80 hover:border-orange-500/50 flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FF5722] transition-colors shadow-lg">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed text-sm">{step.desc}</p>
                <div className="mt-auto w-12 h-12 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 font-black text-sm">
                  {step.num}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={400} className="mt-20">
          <button className="bg-[#FF5722] text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-[#E64A19] transition-all shadow-xl shadow-orange-500/20 active:scale-95">
            Start Your 7-Day Free Trial
          </button>
        </ScrollReveal>
      

      </div>
    </section>
  );
};

export default HowItWorks;
