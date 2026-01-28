
import React from 'react';
import { 
  MessageSquare, 
  Image as ImageIcon, 
  Code, 
  Music, 
  Video, 
  Cpu, 
  Zap, 
  ShieldCheck,
  Layers
} from 'lucide-react';
import { AIModel, ShowcaseExample, NavLink } from './types';

export const SITE_CONFIG = {
  name: "AiKEMON",
  tagline: "40+ Нейросетей в одном месте",
  description: "Единый доступ к топовым AI моделям: GPT, Gemini, Kling, Veo, Nano Banana, Midjourney, Claude и многим другим.",
  contactEmail: "rpaunezhev@yandex.ru",
  serviceUrl: "aikemon.ru",
  
  // ГЛАВНОЕ ИЗОБРАЖЕНИЕ (Hero Section)
  // Можно заменить на любую ссылку через GitHub
  heroImage: "https://unsplash.com/photos/abstract-golden-geometric-shapes-on-black-background-with-sparkles-PAtEacme-X8",
  
  // Изображение для фоновых эффектов (опционально)
  accentColor: "#4f46e5"
};

export const SERVICE_URL = SITE_CONFIG.serviceUrl;

export const NAV_LINKS: NavLink[] = [
  { label: 'Возможности', href: '#features' },
  { label: 'Примеры', href: '#showcase' },
  { label: 'Модели', href: '#models' },
];

export const MODELS: AIModel[] = [
  { id: '1', name: 'GPT/Gemini/Claude и др.', category: 'text', description: 'Самые мощные языковые модели для любых задач.', icon: 'MessageSquare' },
  { id: '2', name: 'Midjourney/Nano Banana/FLUX и др.', category: 'image', description: 'Фотореалистичные изображения высокого качества.', icon: 'ImageIcon' },
  { id: '3', name: 'Kling/Veo/Sora/RunWay и др.', category: 'video', description: 'Эталон в создании качественного ИИ видео и оживлений', icon: 'Video' },
  { id: '4', name: 'Suno AI', category: 'audio', description: 'Создание полноценных песен из текста.', icon: 'Music' },
  { id: '5', name: 'А также синтезатор речи и клонирование голоса', category: 'audio', icon: 'Music' },
];

export const SHOWCASE: ShowcaseExample[] = [
  {
    id: 1,
    title: "Киберпанк Архитектура",
    type: "image",
    // Ссылка на картинку примера
    previewUrl: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=800&auto=format&fit=crop",
    content: "Футуристический город в неоновых огнях под дождем, детализация 8k.",
    model: "Midjourney"
  },
  {
    id: 2,
    title: "Маркетинговая стратегия",
    type: "text",
    content: "Выступай в роли опытного маркетолога. Построй план продвижения нового SaaS продукта для рынка Европы на 2026 года с акцентом на контент-маркетинг.",
    model: "GPT 5.2"
  },
  {
    id: 3,
    title: "Портрет в стиле Ренессанс",
    type: "image",
    previewUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop",
    content: "Цифровой портрет букета цветов в стиле классической масляной живописи 16 века.",
    model: "Nano Banana"
  }
];

export const FEATURES_LIST = [
  {
    title: "Единый интерфейс",
    desc: "Больше не нужно переключаться между 40 вкладками. Все нейросети в одном окне.",
    icon: <Cpu className="w-5 h-5 text-indigo-500" />
  },
  {
    title: "Молниеносная скорость",
    desc: "Прямой доступ к API обеспечивает минимальную задержку при генерации.",
    icon: <Zap className="w-5 h-5 text-purple-500" />
  },
  {
    title: "Безопасность данных",
    desc: "Ваши промпты и результаты генерации зашифрованы и доступны только вам.",
    icon: <ShieldCheck className="w-6 h-6 text-pink-500" />
  }
];
