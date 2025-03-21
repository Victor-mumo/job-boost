import React, { useState } from 'react';
import { HfInference } from '@huggingface/inference';
import { AIContext, Message } from './context';

export const AIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Hugging Face client with API key
  const hf = new HfInference(import.meta.env.VITE_HUGGINGFACE_API_KEY);

  const sendMessage = async (message: string) => {
    if (!import.meta.env.VITE_HUGGINGFACE_API_KEY) {
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Error: Hugging Face API key is not configured. Please check your environment variables.'
      };
      setMessages(prev => [...prev, errorMessage]);
      return;
    }

    try {
      setIsProcessing(true);
      
      // Add user message to chat
      const userMessage: Message = { role: 'user', content: message };
      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);

      // Prepare conversation history for context
      const conversationHistory = updatedMessages
        .map(msg => `${msg.role === 'user' ? 'Human' : 'Assistant'}: ${msg.content}`)
        .join('\n');

      // Call Hugging Face API with conversation context
      const response = await hf.textGeneration({
        model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
        inputs: `<s>You are JobBoostAI, a professional career advisor and job search expert. Your purpose is to help users with their career development, job search, and professional growth. You provide detailed, practical advice for resumes, interviews, career planning, and job search strategies. Always be clear, professional, and actionable in your responses.<s>

<context>Previous conversation:
${conversationHistory}</context>

<instruction>Respond to the user's request professionally and thoroughly. If they ask about resumes, provide specific formatting and content suggestions. For job search questions, give practical steps and strategies. For interview preparation, offer concrete examples and tips.</instruction>

<human>${message}</human>

<assistant>Let me help you with that request. I'll provide specific, actionable advice based on best practices in career development and job search strategies.</assistant>`,
        parameters: {
          max_new_tokens: 1024,
          temperature: 0.7,
          top_p: 0.95,
          repetition_penalty: 1.15,
          stop: ["<human>", "<s>", "<instruction>"],
        },
      });

      // Clean up the response text
      let cleanedResponse = response.generated_text;
      // Remove any system prompts or instructions that might have been generated
      cleanedResponse = cleanedResponse.replace(/<s>.*?<\/system>/s, '');
      cleanedResponse = cleanedResponse.replace(/<instruction>.*?<\/instruction>/s, '');
      cleanedResponse = cleanedResponse.replace(/<context>.*?<\/context>/s, '');
      cleanedResponse = cleanedResponse.replace(/<human>.*?<\/human>/s, '');
      cleanedResponse = cleanedResponse.replace(/<assistant>/g, '');
      cleanedResponse = cleanedResponse.replace(/<\/assistant>/g, '');
      cleanedResponse = cleanedResponse.trim();

      // Add AI response to chat
      setMessages(prev => [...prev, { role: 'assistant', content: cleanedResponse }]);
    } catch (error) {
      console.error('Error calling AI:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'I apologize, but I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsProcessing(false);
    }
  };

  const enhanceResumeSummary = async (text: string): Promise<string> => {
    if (!import.meta.env.VITE_HUGGINGFACE_API_KEY) {
      throw new Error('Hugging Face API key is not configured');
    }

    try {
      setIsLoading(true);

      const response = await hf.textGeneration({
        model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
        inputs: `<s>You are JobBoostAI, an expert in resume analysis and enhancement. Your task is to analyze resume content and extract structured information.</s>

<instruction>${text}</instruction>

<assistant>I'll analyze the resume content and provide the requested information in a structured format.</assistant>`,
        parameters: {
          max_new_tokens: 2048,
          temperature: 0.3,
          top_p: 0.95,
          repetition_penalty: 1.15,
          stop: ["<human>", "<s>", "<instruction>"],
        },
      });

      // Clean up the response text
      let cleanedResponse = response.generated_text;
      cleanedResponse = cleanedResponse.replace(/<s>.*?<\/s>/s, '');
      cleanedResponse = cleanedResponse.replace(/<instruction>.*?<\/instruction>/s, '');
      cleanedResponse = cleanedResponse.replace(/<assistant>.*?<\/assistant>/s, '');
      cleanedResponse = cleanedResponse.trim();

      return cleanedResponse;
    } catch (error) {
      console.error('Error enhancing resume:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <AIContext.Provider value={{ isProcessing, messages, sendMessage, clearChat, enhanceResumeSummary, isLoading }}>
      {children}
    </AIContext.Provider>
  );
}; 