import { createContext } from 'react';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface AIContextType {
  isProcessing: boolean;
  messages: Message[];
  sendMessage: (message: string) => Promise<void>;
  clearChat: () => void;
}

// Create context with undefined initial value
export const AIContext = createContext<AIContextType | undefined>(undefined); 