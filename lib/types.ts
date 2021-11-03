import { defaultTheme } from './styles/theme';

export interface User {
  id: string;
  name: string;
  image: string;
  gender: 'male' | 'female';
  about: string;
  createdAt: string;
  country: string;
  age: number;
  isOnline: boolean;
  bid: number;
  height: number;
  weight: number;
  eyeColor: string;
  hairColor: string;
  photos?: string[];
}

export interface Chat {
  id: string;
  owner: string;
  participants: string[];
  messages: ChatMessage[];
}

export interface ChatMessage {
  id: string;
  text: string;
  author: User;
  createdAt: Date;
  status: 'read' | 'unread';
}

export type Theme = typeof defaultTheme & { data?: any };
