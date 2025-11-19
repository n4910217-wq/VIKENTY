import React from 'react';
import { WhatsAppButton } from './WhatsAppButton';
import { MANDATORY_TEXTS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-vks-dark overflow-hidden pt-20">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-vks-steel to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-vks-dark via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412574643-35d324698428?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      </div>

      <div className="container relative z-10 px-4 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="inline-block mb-4 px-3 py-1 border border-vks-accent/50 rounded-full bg-vks-steel/30 backdrop-blur-md">
            <span className="text-vks-light text-xs font-medium tracking-wider uppercase">
              {MANDATORY_TEXTS.official}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Легальный импорт <br />
            <span className="text-vks-accent">и сопровождение бизнеса</span>
          </h1>
          
          <p className="text-lg md:text-xl text-vks-light/90 mb-8 max-w-2xl font-light">
            {MANDATORY_TEXTS.slogan}. Полный цикл услуг для предпринимателей рынка «Садовод» и импортёров.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <WhatsAppButton text="Получить консультацию" className="w-full sm:w-auto" />
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-vks-steel pt-8 text-left">
             <div>
                <span className="block text-2xl font-bold text-white">25+</span>
                <span className="text-sm text-vks-light/70">Лет опыта</span>
             </div>
             <div>
                <span className="block text-2xl font-bold text-white">100%</span>
                <span className="text-sm text-vks-light/70">Официально</span>
             </div>
             <div className="col-span-2 md:col-span-1">
                <span className="block text-2xl font-bold text-white">Склад</span>
                <span className="text-sm text-vks-light/70">Собственный ТС</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};