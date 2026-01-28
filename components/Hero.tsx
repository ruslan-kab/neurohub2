
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SERVICE_URL, SITE_CONFIG } from '../constants.tsx';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden px-4">
      {/* Анимированные фоновые сферы */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-indigo-600/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-purple-600/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse delay-1000"></div>

      <div className="container mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-indigo-400 text-[10px] sm:text-xs md:text-sm font-semibold mb-6 md:mb-8 animate-bounce">
          <Sparkles size={14} className="md:w-4 md:h-4" />
          <span>{SITE_CONFIG.tagline}</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-8xl font-extrabold tracking-tight mb-6 md:mb-8 leading-[1.2] md:leading-[1.1]">
          Ведущие ИИ инструменты <br className="hidden sm:block" />
          <span className="gradient-text">уже в ваших руках</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base md:text-xl mb-8 md:mb-12 leading-relaxed px-2">
          Создавайте шедевры, пишите идеальный код и анализируйте данные с помощью лучших мировых AI моделей. Без ограничений, без границ, мгновенно.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          <a 
            href={SERVICE_URL}
            className="w-full sm:w-auto group px-8 py-4 md:py-5 bg-white text-black rounded-xl md:rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-2 hover:bg-indigo-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl md:shadow-2xl shadow-white/5"
          >
            Начать творить
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          </button>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 mt-16 md:mt-24 max-w-4xl mx-auto">
          {[
            { label: 'Моделей', value: '40+' },
            { label: 'Юзеров', value: '150k+' },
            { label: 'Генераций', value: '1M+' },
            { label: 'Uptime', value: '99.9%' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-3 md:p-4 glass rounded-xl md:rounded-2xl border-white/5">
              <div className="text-xl md:text-4xl font-bold mb-1 text-white">{stat.value}</div>
              <div className="text-gray-500 text-[8px] md:text-xs uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Основное изображение (Hero Visual) */}
      <div className="mt-16 md:mt-24 px-4 md:px-6 max-w-6xl mx-auto w-full">
        <div className="relative glass rounded-2xl md:rounded-3xl p-1.5 md:p-4 border border-white/10 shadow-2xl overflow-hidden float-animation">
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
           <img 
              src={SITE_CONFIG.heroImage} 
              alt="Platform Interface" 
              className="w-full rounded-xl md:rounded-2xl object-cover h-[200px] sm:h-[350px] md:h-[500px] opacity-80"
           />
           <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-20 text-left pr-6">
              <div className="text-white font-bold text-sm sm:text-lg md:text-2xl mb-1 md:mb-2 uppercase tracking-tighter">Интуитивный хаб</div>
              <p className="text-gray-400 text-[10px] sm:text-xs md:text-base max-w-xs md:max-w-md">Переключайтесь между ChatGPT, Midjourney и Claude в один клик.</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
