import React from 'react';
import { TARGET_AUDIENCE } from '../constants';
import { Users, ShoppingBag, Globe } from 'lucide-react';

export const TargetAudience: React.FC = () => {
    const icons = [Globe, Users, ShoppingBag];

  return (
    <section className="py-20 bg-vks-dark text-white">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Для кого наши услуги</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TARGET_AUDIENCE.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className="bg-vks-steel p-8 rounded-2xl border border-vks-accent/20 hover:border-vks-accent transition-colors">
                <Icon className="w-10 h-10 text-vks-accent mb-6" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-vks-light/70">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};