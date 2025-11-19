import React from 'react';
import { WHATSAPP_LINK } from '../constants';

interface WhatsAppButtonProps {
  text?: string;
  className?: string;
  variant?: 'primary' | 'outline';
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  text = "Получить консультацию", 
  className = "",
  variant = 'outline'
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vks-accent";
  
  const styles = variant === 'outline' 
    ? "bg-white text-vks-dark border-2 border-vks-accent hover:bg-vks-accent hover:text-white"
    : "bg-vks-accent text-white border-2 border-vks-accent hover:bg-vks-steel hover:border-vks-steel";

  return (
    <a 
      href={WHATSAPP_LINK} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseStyles} ${styles} ${className}`}
    >
      {text}
    </a>
  );
};