import React from 'react';
import { ADDRESS, PHONE_NUMBER, WHATSAPP_LINK, MANDATORY_TEXTS } from '../constants';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-vks-dark text-white pt-20 pb-10 border-t border-vks-steel">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Контакты</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-vks-accent mt-1" />
                <div>
                  <p className="text-sm text-vks-light/60 uppercase tracking-wider mb-1">Адрес</p>
                  <p className="text-lg">{ADDRESS}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-vks-accent mt-1" />
                <div>
                  <p className="text-sm text-vks-light/60 uppercase tracking-wider mb-1">Телефон</p>
                  <p className="text-lg">{PHONE_NUMBER}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
               <WhatsAppButton text="Написать в WhatsApp" variant="primary" />
            </div>
          </div>

          <div className="bg-vks-steel/30 p-8 rounded-2xl border border-vks-steel">
            <h3 className="text-xl font-bold mb-4">Начните сотрудничество сегодня</h3>
            <p className="text-vks-light/70 mb-6">
               {MANDATORY_TEXTS.slogan}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <a 
                 href={WHATSAPP_LINK}
                 className="flex-1 bg-white text-vks-dark py-4 px-6 rounded-lg font-medium text-center hover:bg-vks-light transition-colors flex items-center justify-center gap-2 group"
               >
                 Оставить заявку
                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
               </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-vks-steel flex flex-col md:flex-row justify-between items-center text-sm text-vks-light/40 gap-4">
          <p>© {new Date().getFullYear()} ООО «Внешторг Консьерж Сервис». Все права защищены.</p>
          <p>{MANDATORY_TEXTS.exp}</p>
        </div>
      </div>
    </footer>
  );
};