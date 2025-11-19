import React from 'react';
import { WORKFLOW_STEPS } from '../constants';
import { ChevronRight } from 'lucide-react';

export const Workflow: React.FC = () => {
  return (
    <section className="py-20 bg-vks-light border-y border-white">
      <div className="container px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-vks-dark mb-2">Как проходит работа</h2>
          <p className="text-vks-steel/70">Простой путь к результату</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 relative">
           {/* Hidden Line for Desktop */}
           <div className="absolute top-1/2 left-0 w-full h-0.5 bg-vks-accent/20 -translate-y-1/2 hidden md:block z-0"></div>

          {WORKFLOW_STEPS.map((step, index) => (
            <div key={step.id} className="flex-1 relative z-10 group">
              <div className="flex items-center md:block bg-white md:bg-transparent p-4 md:p-0 rounded-lg shadow-sm md:shadow-none">
                {/* Circle Number */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-vks-dark text-white flex items-center justify-center font-bold text-lg md:mx-auto mb-0 md:mb-4 ring-4 ring-vks-light group-hover:bg-vks-accent transition-colors">
                  {step.id}
                </div>
                
                {/* Content */}
                <div className="ml-4 md:ml-0 md:text-center">
                   <h3 className="text-lg font-bold text-vks-dark">{step.title}</h3>
                </div>

                 {/* Mobile Chevron (visual only) */}
                 {index < WORKFLOW_STEPS.length - 1 && (
                    <ChevronRight className="ml-auto md:hidden text-vks-accent/50" />
                 )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};