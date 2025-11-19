import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Warehouse } from './components/Warehouse';
import { Benefits } from './components/Benefits';
import { Workflow } from './components/Workflow';
import { TargetAudience } from './components/TargetAudience';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-vks-accent selection:text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Warehouse />
        <Benefits />
        <Workflow />
        <TargetAudience />
      </main>
      <Footer />
    </div>
  );
};

export default App;