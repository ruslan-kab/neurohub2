
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
  name: "NeuralHub",
  tagline: "40+ Нейросетей в одном месте",
  description: "Единый доступ к топовым AI моделям: GPT-4, Midjourney, Claude и многим другим.",
  contactEmail: "hello@neuralhub.ai",
  serviceUrl: "https://example-ai-service.com/start",
  
  // ГЛАВНОЕ ИЗОБРАЖЕНИЕ (Hero Section)
  // Можно заменить на любую ссылку через GitHub
  heroImage: "https://images.unsplash.com/photo-1620712943543-bcc46386e635?q=80&w=2000&auto=format&fit=crop",
  
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
  { id: '3', name: 'Kling/Veo/Sora/RunWay и др.', category: 'code', description: 'Эталон в создании качественного ИИ видео и оживлений', icon: 'Code' },
  { id: '4', name: 'Suno AI', category: 'audio', description: 'Создание полноценных песен из текста.', icon: 'Music' },
  { id: '5', name: 'А также синтезатор речи и клонирование голоса', category: 'video', icon: 'Video' },
];

export const SHOWCASE: ShowcaseExample[] = [
  {
    id: 1,
    title: "Киберпанк Архитектура",
    type: "image",
    // Ссылка на картинку примера
    previewUrl: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=800&auto=format&fit=crop",
    content: "Футуристический город в неоновых огнях под дождем, детализация 8k.",
    model: "Midjourney v6"
  },
  {
    id: 2,
    title: "Маркетинговая стратегия",
    type: "text",
    content: "План продвижения нового SaaS продукта для рынка Европы на 2024 год с акцентом на контент-маркетинг.",
    model: "GPT-4o"
  },
  {
    id: 3,
    title: "React Хук для API",
    type: "code",
    content: "export const useFetch = <T,>(url: string) => {\n  const [data, setData] = useState<T | null>(null);\n  return { data };\n};",
    model: "Claude 3.5"
  },
  {
    id: 4,
    title: "Портрет в стиле Ренессанс",
    type: "image",
    previewUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop",
    content: "Цифровой портрет женщины в стиле классической масляной живописи 16 века.",
    model: "DALL-E 3"
  }
];

export const FEATURES_LIST = [
  {
    title: "Единый интерфейс",
    desc: "Больше не нужно переключаться между 40 вкладками. Все нейросети в одном окне.",
    icon: <Cpu className="w-6 h-6 text-indigo-500" />
  },
  {
    title: "Молниеносная скорость",
    desc: "Прямой доступ к API обеспечивает минимальную задержку при генерации.",
    icon: <Zap className="w-6 h-6 text-purple-500" />
  },
  {
    title: "Безопасность данных",
    desc: "Ваши промпты и результаты генерации зашифрованы и доступны только вам.",
    icon: <ShieldCheck className="w-6 h-6 text-pink-500" />
  }
];
