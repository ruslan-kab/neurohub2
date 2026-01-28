
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Showcase from './components/Showcase.tsx';
import Footer from './components/Footer.tsx';
import { MODELS, SHOWCASE, SERVICE_URL } from './constants.tsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30 selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
        
        <Features models={MODELS} />
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
        
        <Showcase items={SHOWCASE} />
        
        <section className="py-20 px-4 sm:px-6">
           <div className="container mx-auto">
             <div className="glass rounded-[2rem] md:rounded-[3rem] p-8 md:p-24 text-center border-indigo-500/20 shadow-2xl shadow-indigo-500/5 relative overflow-hidden">
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
                
                <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-6 md:mb-8 tracking-tighter leading-tight relative z-10">
                  Готовы изменить <br className="hidden sm:block" />
                  <span className="gradient-text text-glow">свою реальность?</span>
                </h2>
                
                <p className="text-gray-400 text-base md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto relative z-10">
                  Начните использовать 40+ нейросетей прямо сейчас. Без VPN, без сложных настроек, просто и быстро.
                </p>
                
                <div className="flex flex-col items-center relative z-10">
                  <a 
                    href={SERVICE_URL}
                    className="w-full sm:w-auto inline-block px-8 md:px-12 py-5 md:py-6 gradient-bg text-white font-black text-lg md:text-xl rounded-2xl md:rounded-3xl shadow-2xl shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all"
                  >
                     ПОПРОБОВАТЬ БЕСПЛАТНО
                  </a>
                  <p className="mt-6 md:mt-8 text-gray-500 text-xs md:text-sm">Карта не требуется. Отмена в любое время.</p>
                </div>
             </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
