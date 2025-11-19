import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section className="py-20 bg-vks-light">
      <div className="container px-4">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-vks-dark mb-4">Услуги ВКС</h2>
          <p className="text-vks-accent text-lg">Комплексное решение задач для вашего бизнеса</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-vks-accent/20 ${index === 0 ? 'md:col-span-2 bg-vks-dark text-white' : ''}`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${index === 0 ? 'bg-vks-accent text-white' : 'bg-vks-light text-vks-dark'}`}>
                <service.icon size={24} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${index === 0 ? 'text-white' : 'text-vks-dark'}`}>
                {service.title}
              </h3>
              <p className={`leading-relaxed ${index === 0 ? 'text-vks-light/80' : 'text-vks-dark/70'}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};