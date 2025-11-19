import React from 'react';
import { Container, CheckCircle2 } from 'lucide-react';
import { MANDATORY_TEXTS } from '../constants';

export const Warehouse: React.FC = () => {
  return (
    <section className="py-24 bg-vks-steel text-white relative overflow-hidden">
       {/* Decorative Elements */}
       <div className="absolute right-0 top-0 h-full w-1/3 bg-vks-dark/30 skew-x-12 transform origin-top translate-x-20 hidden lg:block"></div>

      <div className="container px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-4 text-vks-light/80">
              <Container className="w-6 h-6 text-vks-accent" />
              <span className="uppercase tracking-widest text-sm font-medium">Инфраструктура</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {MANDATORY_TEXTS.warehouse}
            </h2>
            
            <p className="text-lg text-vks-light/80 mb-8 leading-relaxed">
              Ключевое преимущество работы с ВКС. Мы не посредники — мы владельцы инфраструктуры. 
              Это гарантирует сохранность груза, прозрачность процедур и отсутствие скрытых комиссий.
            </p>

            <ul className="space-y-4">
              {[
                "Ускоренное оформление грузов",
                "Полный контроль на всех этапах",
                "Гарантия сохранности товара"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-vks-accent flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="aspect-video rounded-2xl overflow-hidden bg-vks-dark/50 shadow-2xl border border-vks-accent/20 relative group">
               {/* Using a high quality placeholder that fits logistics */}
               <img 
                 src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Customs Warehouse" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-vks-dark/80 to-transparent flex items-end p-8">
                 <div className="text-white">
                    <p className="font-bold text-lg">Безопасное хранение</p>
                    <p className="text-sm text-vks-light/70">Зона таможенного контроля</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};