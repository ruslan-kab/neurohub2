
import React from 'react';
import { 
  MessageSquare, 
  Image as ImageIcon, 
  Code, 
  Music, 
  Video, 
  Layers
} from 'lucide-react';
import { FEATURES_LIST } from '../constants.tsx';
import { AIModel } from '../types.ts';

interface FeaturesProps {
  models: AIModel[];
}

const Features: React.FC<FeaturesProps> = ({ models }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="text-blue-400" />;
      case 'ImageIcon': return <ImageIcon className="text-pink-400" />;
      case 'Code': return <Code className="text-green-400" />;
      case 'Music': return <Music className="text-yellow-400" />;
      case 'Video': return <Video className="text-purple-400" />;
      default: return <Layers className="text-indigo-400" />;
    }
  };

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Всё, что нужно для <br/><span className="gradient-text">продуктивности</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Больше не нужно платить за 10 разных подписок. NeuralHub объединяет мировых лидеров AI в одном месте.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-32">
          {FEATURES_LIST.map((feature, i) => (
            <div key={i} className="p-8 glass rounded-3xl hover:bg-white/[0.05] transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Models Grid */}
        <div id="models" className="mt-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold mb-2">Доступные модели</h3>
              <p className="text-gray-500">Библиотека постоянно пополняется новыми AI</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {models.map((model) => (
              <div key={model.id} className="p-6 glass rounded-2xl flex items-start gap-4 hover:border-white/20 transition-all cursor-default">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white/5 flex items-center justify-center">
                  {getIcon(model.icon)}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{model.name}</h4>
                  <p className="text-gray-500 text-xs md:text-sm line-clamp-2">{model.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
