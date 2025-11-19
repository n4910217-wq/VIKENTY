import React, { useState, useEffect } from 'react';
import { WhatsAppButton } from './WhatsAppButton';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-vks-dark/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
           {/* Text Logo as per clean style */}
           <div className="flex flex-col">
            <span className={`text-2xl font-bold tracking-tighter leading-none ${scrolled ? 'text-white' : 'text-white'}`}>
              ВКС
            </span>
            <span className={`text-[10px] uppercase tracking-widest ${scrolled ? 'text-vks-light' : 'text-vks-light opacity-80'}`}>
              Внешторг Консьерж Сервис
            </span>
           </div>
        </div>

        <div className="hidden md:block">
           <WhatsAppButton text="Получить консультацию" />
        </div>
        
        {/* Mobile Icon only if needed, but keeping it simple for now */}
        <div className="md:hidden">
           <WhatsAppButton text="WhatsApp" className="px-4 py-2 text-xs" />
        </div>
      </div>
    </header>
  );
};