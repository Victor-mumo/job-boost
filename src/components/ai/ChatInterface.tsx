import React, { useState, useRef, useEffect } from 'react';
import { useAI } from '../../hooks/useAI';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Send } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Alert, AlertDescription } from '../ui/alert';
import { AlertCircle } from 'lucide-react';

export const ChatInterface: React.FC = () => {
  const { messages, sendMessage, isProcessing } = useAI();
  const [input, setInput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    const message = input.trim();
    setInput('');
    setError(null);

    try {
      await sendMessage(message);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while sending your message');
    }
  };

  return (
    <div className="flex flex-col h-[600px] max-w-3xl mx-auto border rounded-lg bg-white shadow-sm">
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
      >
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        {messages.length === 0 && (
          <div className="text-center text-muted-foreground py-8">
            <p>👋 Hi! I'm your AI career assistant. How can I help you today?</p>
            <p className="mt-2 text-sm">You can ask me about:</p>
            <ul className="mt-2 text-sm list-disc list-inside">
              <li>Resume writing tips</li>
              <li>Interview preparation</li>
              <li>Career guidance</li>
              <li>Job search strategies</li>
            </ul>
          </div>
        )}

        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              message.role === 'user' 
                ? 'bg-primary text-primary-foreground ml-12' 
                : 'bg-muted mr-12'
            }`}
          >
            <div className="prose prose-sm dark:prose-invert max-w-none">
              {message.role === 'assistant' ? (
                <ReactMarkdown>{message.content}</ReactMarkdown>
              ) : (
                <p>{message.content}</p>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t bg-background">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={isProcessing}
            className="flex-1"
          />
          <Button 
            type="submit" 
            disabled={isProcessing || !input.trim()}
            className="bg-primary hover:bg-primary/90"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}; 