import React from 'react';
import { ResumeTemplate } from '@/types/resume';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Award, Globe } from "lucide-react";

interface ResumePreviewProps {
  template: ResumeTemplate;
  className?: string;
  previewData?: {
    personal: {
      name: string;
      email: string;
      phone: string;
      location: string;
      title: string;
      summary: string;
      photo?: string;
    };
    experience: Array<{
      title: string;
      company: string;
      location: string;
      startDate: string;
      endDate: string;
      current: boolean;
      description: string;
    }>;
    education: Array<{
      school: string;
      degree: string;
      field: string;
      location: string;
      startDate: string;
      endDate: string;
      current: boolean;
      description: string;
    }>;
    skills: {
      technical: string[];
      soft: string[];
      languages: string[];
      certifications: string[];
    };
    styling?: {
      theme: string;
      font: string;
      fontSize: string;
    };
  };
}

// Theme colors mapping
const themeColors = {
  default: { primary: '#3b82f6', secondary: '#1e40af' },
  emerald: { primary: '#10b981', secondary: '#047857' },
  amber: { primary: '#f59e0b', secondary: '#b45309' },
  rose: { primary: '#f43f5e', secondary: '#be123c' },
  indigo: { primary: '#6366f1', secondary: '#4338ca' },
  violet: { primary: '#8b5cf6', secondary: '#6d28d9' },
};

// Font family mapping
const fontFamilies = {
  sans: 'ui-sans-serif, system-ui, sans-serif',
  serif: 'ui-serif, Georgia, Cambria, serif',
  mono: 'ui-monospace, monospace',
};

// Font size mapping
const fontSizes = {
  small: {
    name: 'text-xl',
    title: 'text-base',
    heading: 'text-sm',
    normal: 'text-xs',
  },
  normal: {
    name: 'text-2xl',
    title: 'text-lg',
    heading: 'text-md',
    normal: 'text-sm',
  },
  large: {
    name: 'text-3xl',
    title: 'text-xl',
    heading: 'text-lg',
    normal: 'text-base',
  },
};

export default function ResumePreview({ template, className = '', previewData }: ResumePreviewProps) {
  // If we have preview data, render the full resume
  if (previewData) {
    const { personal, experience, education, skills } = previewData;
    const styling = previewData.styling || { theme: 'default', font: 'sans', fontSize: 'normal' };
    const themeColor = themeColors[styling.theme as keyof typeof themeColors] || themeColors.default;
    const fontFamily = fontFamilies[styling.font as keyof typeof fontFamilies] || fontFamilies.sans;
    const fontSize = fontSizes[styling.fontSize as keyof typeof fontSizes] || fontSizes.normal;

    return (
      <div className={`bg-white shadow-sm border border-gray-200 ${className}`} style={{ fontFamily }}>
        <div className="p-6">
          {/* Header */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              {template.requiresPhoto && personal.photo && (
                <div className="flex-shrink-0">
                  <img 
                    src={personal.photo} 
                    alt={personal.name} 
                    className="w-24 h-24 object-cover rounded-full border-2"
                    style={{ borderColor: themeColor.primary }}
                  />
                </div>
              )}
              
              <div>
                <h1 className={`${fontSize.name} font-bold text-gray-900`}>{personal.name}</h1>
                <h2 className={`${fontSize.title} font-medium mb-2`} style={{ color: themeColor.primary }}>
                  {personal.title}
                </h2>
              </div>
            </div>
            
            <p className={`${fontSize.normal} text-gray-700 mb-3 mt-3`}>{personal.summary}</p>
            
            <div className="flex flex-wrap gap-3 text-sm text-gray-600">
              {personal.email && (
                <div className="flex items-center gap-1">
                  <Mail className="h-3.5 w-3.5" />
                  <span className={fontSize.normal}>{personal.email}</span>
                </div>
              )}
              {personal.phone && (
                <div className="flex items-center gap-1">
                  <Phone className="h-3.5 w-3.5" />
                  <span className={fontSize.normal}>{personal.phone}</span>
                </div>
              )}
              {personal.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  <span className={fontSize.normal}>{personal.location}</span>
                </div>
              )}
            </div>
          </div>

          <Separator className="my-4" style={{ backgroundColor: themeColor.secondary }} />

          {/* Rest of the sections... */}
        </div>
      </div>
    );
  }

  // If no preview data, show the placeholder based on template category
  const getPreviewLayout = () => {
    switch (template.category) {
      case 'Creative':
        return (
          <div className="h-full bg-white p-4 flex flex-col">
            <div className="flex gap-4 mb-4">
              {template.requiresPhoto && (
                <div className="w-24 h-24 rounded-full bg-gray-200 flex-shrink-0" />
              )}
              <div className="flex-1">
                <div className="h-8 bg-gray-200 w-3/4 mb-2" />
                <div className="h-4 bg-gray-100 w-1/2" />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-3 gap-4">
              <div className="col-span-1 space-y-2">
                <div className="h-4 bg-gray-200 w-full" />
                <div className="h-4 bg-gray-100 w-3/4" />
                <div className="h-4 bg-gray-100 w-5/6" />
              </div>
              <div className="col-span-2 space-y-2">
                <div className="h-4 bg-gray-200 w-full" />
                <div className="h-4 bg-gray-100 w-5/6" />
                <div className="h-4 bg-gray-100 w-4/5" />
              </div>
            </div>
          </div>
        );

      case 'Scientific':
        return (
          <div className="h-full bg-white p-4 flex flex-col">
            <div className="mb-4">
              <div className="h-8 bg-gray-200 w-3/4 mb-2" />
              <div className="h-4 bg-gray-100 w-1/2" />
            </div>
            <div className="grid grid-cols-1 gap-4 flex-1">
              <div className="space-y-2">
                <div className="h-6 bg-gray-200 w-1/4 mb-2" />
                <div className="h-4 bg-gray-100 w-full" />
                <div className="h-4 bg-gray-100 w-5/6" />
              </div>
              <div className="space-y-2">
                <div className="h-6 bg-gray-200 w-1/3 mb-2" />
                <div className="h-4 bg-gray-100 w-full" />
                <div className="h-4 bg-gray-100 w-4/5" />
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="h-full bg-white p-4 flex flex-col">
            <div className="text-center mb-4">
              <div className="h-8 bg-gray-200 w-1/2 mx-auto mb-2" />
              <div className="h-4 bg-gray-100 w-1/3 mx-auto" />
            </div>
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <div className="h-6 bg-gray-200 w-1/4" />
                <div className="h-4 bg-gray-100 w-full" />
                <div className="h-4 bg-gray-100 w-5/6" />
              </div>
              <div className="space-y-2">
                <div className="h-6 bg-gray-200 w-1/3" />
                <div className="h-4 bg-gray-100 w-full" />
                <div className="h-4 bg-gray-100 w-4/5" />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`aspect-[1/1.4] shadow-sm border border-gray-200 overflow-hidden ${className}`}>
      {getPreviewLayout()}
    </div>
  );
}
