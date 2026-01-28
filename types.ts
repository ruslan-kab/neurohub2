
export interface AIModel {
  id: string;
  name: string;
  category: 'text' | 'image' | 'code' | 'audio' | 'video';
  description: string;
  icon: string;
}

export interface ShowcaseExample {
  id: number;
  title: string;
  type: 'image' | 'text' | 'code';
  content: string;
  previewUrl?: string;
  model: string;
}

export interface NavLink {
  label: string;
  href: string;
}
