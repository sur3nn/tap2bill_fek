
import React from 'react';
import { Layers, Zap, Megaphone, CheckCircle, Smartphone, Database, Shield, BarChart3, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Fast POS Billing',
      desc: 'Bill dine-in, takeaway and delivery orders in 3–5 seconds. Create bills in seconds across all channels.',
      icon: <Zap className="text-white" />,
      color: 'bg-orange-500'
    },
    {
      title: 'Live Dashboard',
      desc: 'See today’s sales, profit, GST summary and top-selling items — anytime, anywhere in real-time.',
      icon: <BarChart3 className="text-white" />,
      color: 'bg-orange-500'
    },
    {
      title: 'GST Billing Software',
      desc: 'Supports CGST, SGST, IGST and HSN codes — ready for GST filing with 100% compliant invoices.',
      icon: <Layers className="text-white" />,
      color: 'bg-orange-500'
    },
    {
      title: 'Inventory & Kitchen Management',
      desc: 'Automatic stock updates and wastage control. Track stock, reduce wastage and avoid losses.',
      icon: <Database className="text-white" />,
      color: 'bg-orange-500'
    },
    {
      title: 'Smart Business Reports',
      desc: 'Daily, weekly and monthly reports clearly organized for sales, tax and outstanding payments.',
      icon: <Megaphone className="text-white" />,
      color: 'bg-orange-500'
    },
    {
      title: 'Secure Cloud Backup',
      desc: 'Your data is encrypted, backed up and always available. Your data remains safe and always accessible.',
      icon: <Shield className="text-white" />,
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#FF5722] font-bold text-sm tracking-widest uppercase mb-4 block">Key Features</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Powerful Features for Food Businesses</h2>
          <p className="text-gray-600 text-lg">
            Tap2Bill helps food businesses bill faster, track sales and control operations — all in one platform. Staff can start billing within minutes.
          </p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={i * 100} direction="up">
              <div className="p-8 rounded-[2rem] bg-gray-50 hover:bg-orange-50 transition-colors group h-full">
                <div className={`flex-shrink-0 w-14 h-14 ${f.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-6`}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
