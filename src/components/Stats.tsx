
import React from 'react';
import { Users, Star, Utensils, Truck } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import ScrollReveal from './ScrollReveal';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Happy Users', value: '25k+', icon: <Users className="text-[#FF5722]" />, bg: 'bg-orange-50' },
    { label: 'Positive Reviews', value: '20k+', icon: <Star className="text-orange-500" fill="currentColor" />, bg: 'bg-orange-50' },
    { label: 'Restaurant Listings', value: '2.5k+', icon: <Utensils className="text-[#FF5722]" />, bg: 'bg-orange-50' },
    { label: 'Successful deliveries', value: '1M+', icon: <Truck className="text-orange-500" />, bg: 'bg-orange-50' },
  ];

  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="bg-gray-800/50 border border-gray-700 rounded-3xl p-6 flex items-center gap-4 hover:border-[#FF5722] transition-all group">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gray-700 group-hover:bg-[#FF5722]/10 transition-colors`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-3xl font-black text-white">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
