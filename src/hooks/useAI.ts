import { useContext } from 'react';
import { AIContext, AIContextType } from '../contexts/AIContext';

export const useAI = () => {
  const context = useContext<AIContextType>(AIContext);
  if (context === undefined) {
    throw new Error('useAI must be used within an AIProvider');
  }
  return context;
}; 