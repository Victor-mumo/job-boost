import React from 'react';
import { ChatInterface } from '@/components/ai/ChatInterface';

export default function AIAssistant() {
  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          AI Career Assistant
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Get personalized career advice, resume tips, and job search guidance from our AI assistant.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 lg:col-start-3">
          <ChatInterface />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-lg border bg-card text-card-foreground">
          <h3 className="text-lg font-semibold mb-2">Career Guidance</h3>
          <p className="text-muted-foreground">
            Get expert advice on career paths, industry trends, and professional development opportunities.
          </p>
        </div>
        <div className="p-6 rounded-lg border bg-card text-card-foreground">
          <h3 className="text-lg font-semibold mb-2">Resume Enhancement</h3>
          <p className="text-muted-foreground">
            Receive personalized suggestions to improve your resume and make it stand out to employers.
          </p>
        </div>
        <div className="p-6 rounded-lg border bg-card text-card-foreground">
          <h3 className="text-lg font-semibold mb-2">Interview Preparation</h3>
          <p className="text-muted-foreground">
            Practice common interview questions and get feedback to improve your responses.
          </p>
        </div>
      </div>
    </div>
  );
} 