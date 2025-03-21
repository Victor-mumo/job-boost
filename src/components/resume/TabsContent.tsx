import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import PersonalInfoForm from './PersonalInfoForm';
import ResumeExperienceForm from './ResumeExperienceForm';
import ResumeEducationForm from './ResumeEducationForm';
import ResumeSkillsForm from './ResumeSkillsForm';
import ResumeStylingForm from './ResumeStylingForm';

interface CustomTabsContentProps {
  activeTab: string;
  resumeData: {
    personal: {
      name: string;
      email: string;
      phone: string;
      location: string;
      title: string;
      summary: string;
      photo: string;
    };
    experience: Array<any>;
    education: Array<any>;
    skills: {
      technical: string[];
      soft: string[];
      languages: string[];
      certifications: string[];
    };
    styling: {
      template: string;
      color: string;
      font: string;
    };
  };
  setResumeData: (data: any) => void;
  setActiveTab: (tab: string) => void;
  handleGenerateAI?: () => void;
}

export const PersonalInfoTabContent: React.FC<CustomTabsContentProps> = ({
  resumeData,
  setResumeData,
  handleGenerateAI,
}) => {
  const handleNext = () => {
    document.getElementById('resume-tabs-experience')?.click();
  };

  const handleSubmit = (data: any) => {
    setResumeData({
      ...resumeData,
      personal: {
        ...resumeData.personal,
        ...data
      }
    });
  };

  return (
    <TabsContent value="personal" className="space-y-4">
      <PersonalInfoForm 
        resumeData={resumeData} 
        setResumeData={setResumeData} 
        onNext={handleNext}
        handleGenerateAI={handleGenerateAI}
        handleSubmit={handleSubmit}
      />
    </TabsContent>
  );
};

export const ExperienceTabContent: React.FC<CustomTabsContentProps> = ({
  resumeData,
  setResumeData,
}) => {
  const handleNext = () => {
    document.getElementById('resume-tabs-education')?.click();
  };
  
  const handleBack = () => {
    document.getElementById('resume-tabs-personal')?.click();
  };

  return (
    <TabsContent value="experience" className="space-y-4">
      <ResumeExperienceForm 
        resumeData={resumeData} 
        setResumeData={setResumeData} 
        onNext={handleNext}
        onBack={handleBack}
      />
    </TabsContent>
  );
};

export const EducationTabContent: React.FC<CustomTabsContentProps> = ({
  resumeData,
  setResumeData,
}) => {
  const handleNext = () => {
    document.getElementById('resume-tabs-skills')?.click();
  };
  
  const handleBack = () => {
    document.getElementById('resume-tabs-experience')?.click();
  };

  return (
    <TabsContent value="education" className="space-y-4">
      <ResumeEducationForm 
        resumeData={resumeData} 
        setResumeData={setResumeData} 
        onNext={handleNext}
        onBack={handleBack}
      />
    </TabsContent>
  );
};

export const SkillsTabContent: React.FC<CustomTabsContentProps> = ({
  resumeData,
  setResumeData,
}) => {
  const handleNext = () => {
    document.getElementById('resume-tabs-styling')?.click();
  };
  
  const handleBack = () => {
    document.getElementById('resume-tabs-education')?.click();
  };

  return (
    <TabsContent value="skills" className="space-y-4">
      <ResumeSkillsForm 
        resumeData={resumeData} 
        setResumeData={setResumeData} 
        onNext={handleNext}
        onBack={handleBack}
      />
    </TabsContent>
  );
};

export const StylingTabContent: React.FC<CustomTabsContentProps> = ({
  resumeData,
  setResumeData,
}) => {
  const handleBack = () => {
    document.getElementById('resume-tabs-skills')?.click();
  };

  return (
    <TabsContent value="styling" className="space-y-4">
      <ResumeStylingForm 
        resumeData={resumeData} 
        setResumeData={setResumeData}
        onBack={handleBack}
      />
    </TabsContent>
  );
};

export const PreviewTabContent: React.FC<CustomTabsContentProps> = ({
  resumeData,
}) => {
  return (
    <TabsContent value="preview" className="space-y-4">
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold">Resume Preview</h2>
        <p className="text-muted-foreground">
          This is a preview of your resume. You can go back to make changes or download it.
        </p>
        <div className="border rounded-lg p-6 bg-white">
          <h3 className="text-xl font-bold mb-2">{resumeData.personal.name || 'Your Name'}</h3>
          <p className="text-muted-foreground mb-4">{resumeData.personal.title || 'Professional Title'}</p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 mb-4 text-sm">
            {resumeData.personal.email && (
              <div>{resumeData.personal.email}</div>
            )}
            {resumeData.personal.phone && (
              <div>{resumeData.personal.phone}</div>
            )}
            {resumeData.personal.location && (
              <div>{resumeData.personal.location}</div>
            )}
          </div>
          
          {/* Summary */}
          {resumeData.personal.summary && (
            <div className="mb-4">
              <h4 className="font-semibold mb-1">Summary</h4>
              <p>{resumeData.personal.summary}</p>
            </div>
          )}
          
          {/* Experience */}
          {resumeData.experience && resumeData.experience.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold mb-1">Experience</h4>
              {resumeData.experience.map((exp: any, index: number) => (
                <div key={index} className="mb-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{exp.title} at {exp.company}</span>
                    <span className="text-sm text-muted-foreground">{exp.startDate} - {exp.endDate || 'Present'}</span>
                  </div>
                  <p className="text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          )}
          
          {/* Education */}
          {resumeData.education && resumeData.education.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold mb-1">Education</h4>
              {resumeData.education.map((edu: any, index: number) => (
                <div key={index} className="mb-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{edu.degree} in {edu.fieldOfStudy}</span>
                    <span className="text-sm text-muted-foreground">{edu.startDate} - {edu.endDate || 'Present'}</span>
                  </div>
                  <p className="text-sm">{edu.school}, {edu.location}</p>
                </div>
              ))}
            </div>
          )}
          
          {/* Skills */}
          {resumeData.skills && resumeData.skills.length > 0 && (
            <div>
              <h4 className="font-semibold mb-1">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill: string, index: number) => (
                  <span key={index} className="bg-muted px-2 py-1 rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </TabsContent>
  );
};

const ResumeTabsContent = {
  PersonalInfoTabContent,
  ExperienceTabContent,
  EducationTabContent,
  SkillsTabContent,
  StylingTabContent,
  PreviewTabContent,
};

export default ResumeTabsContent;
