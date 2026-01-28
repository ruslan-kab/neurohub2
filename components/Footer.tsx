
import React from 'react';
import { Zap, Github, Twitter, Send } from 'lucide-react';
import { SERVICE_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 gradient-bg rounded flex items-center justify-center">
                <Zap size={18} className="text-white fill-white" />
              </div>
              <span className="text-xl font-bold tracking-tighter uppercase">NeuralHub</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8">
              Мы делаем искусственный интеллект доступным для каждого. Один аккаунт — бесконечные возможности для творчества, работы и обучения.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <Send size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Навигация</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Возможности</a></li>
              <li><a href="#showcase" className="hover:text-white transition-colors">Примеры</a></li>
              <li><a href="#models" className="hover:text-white transition-colors">Нейросети</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Помощь</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Юридические данные</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Условия использования</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Оплата и возврат</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-xs">
          <p>© 2024 NeuralHub. Все права защищены.</p>
          <p>Сделано с помощью ИИ для людей.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
