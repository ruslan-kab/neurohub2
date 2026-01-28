
import React from 'react';
import { ExternalLink, Copy, Code, ImageIcon, FileText } from 'lucide-react';
import { SERVICE_URL } from '../constants.tsx';
import { ShowcaseExample } from '../types.ts';

interface ShowcaseProps {
  items: ShowcaseExample[];
}

const Showcase: React.FC<ShowcaseProps> = ({ items }) => {
  return (
    <section id="showcase" className="py-20 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 tracking-tight">
              Вдохновение в <br/><span className="gradient-text">каждом пикселе</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-lg">
              Посмотрите, на что способны нейросети. От гиперреалистичного арта до сложнейших бизнес-сценариев.
            </p>
          </div>
          <a href={SERVICE_URL} className="flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors group text-sm md:text-base">
            Смотреть все работы <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {items.map((item) => (
            <div key={item.id} className="group glass rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col">
              {item.type === 'image' ? (
                <div className="relative h-64 sm:h-80 overflow-hidden shrink-0">
                  <img 
                    src={item.previewUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] md:text-xs font-bold flex items-center gap-2 border border-white/10">
                    <ImageIcon size={14} className="text-pink-400" /> {item.model}
                  </div>
                </div>
              ) : (
                <div className="h-64 sm:h-80 p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-indigo-500/5 to-purple-500/5 shrink-0">
                   <div className="flex justify-between items-start">
                     <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] md:text-xs font-bold flex items-center gap-2 border border-white/10">
                       {item.type === 'code' ? <Code size={14} className="text-green-400" /> : <FileText size={14} className="text-blue-400" />}
                       {item.model}
                     </div>
                     <button className="text-gray-500 hover:text-white transition-colors p-1">
                        <Copy size={18} />
                     </button>
                   </div>
                   <div className="my-4 md:my-6 overflow-hidden">
                     <pre className={`text-[10px] sm:text-xs md:text-sm leading-relaxed whitespace-pre-wrap font-mono line-clamp-6 ${item.type === 'code' ? 'text-green-300' : 'text-gray-300'}`}>
                       {item.content}
                     </pre>
                   </div>
                </div>
              )}
              
              <div className="p-6 md:p-8 bg-black/20 mt-auto">
                <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm italic">Промпт: "{item.content.substring(0, 80)}..."</p>
              </div>
            </div>
          ))}
        </div>

        {/* Нижняя карточка с цитатой */}
        <div className="mt-16 md:mt-24 glass rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden">
           <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
           <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
           
           <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 relative z-10 italic leading-tight">
             "Лучший способ предсказать будущее — <br className="hidden md:block"/> <span className="text-indigo-500">создать его самому</span>"
           </h3>
           <a 
            href={SERVICE_URL}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 gradient-bg rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:shadow-2xl hover:shadow-indigo-500/40 transition-all transform hover:-translate-y-1"
          >
            Присоединиться к революции
          </a>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
