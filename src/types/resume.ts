export interface ResumeTemplate {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  category: string;
  requiresPhoto: boolean;
  tags: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  isCurrentPosition: boolean;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Skills {
  technical: string[];
  soft: string[];
  languages: string[];
  certifications: string[];
}

export interface Personal {
  name: string;
  email: string;
  phone: string;
  location: string;
  title: string;
  summary: string;
  photo?: string;
}

export interface Styling {
  theme: string;
  font: string;
  fontSize: string;
}

export interface UserResumeData {
  personal: Personal;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  styling: Styling;
}
