import React from 'react';
import { BENEFITS } from '../constants';

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vks-dark mb-4">Почему выбирают нас</h2>
          <p className="text-vks-steel/70">Реальные выгоды для вашего бизнеса</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl bg-vks-light/30 border border-vks-light hover:border-vks-accent/50 transition-colors duration-300">
              <div className="w-14 h-14 rounded-full bg-vks-steel flex items-center justify-center text-white mb-6 shadow-lg shadow-vks-steel/20">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-vks-dark mb-2">{benefit.title}</h3>
              <p className="text-sm text-vks-steel/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};