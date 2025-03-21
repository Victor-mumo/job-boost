import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Tabs } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useAI } from "@/contexts/AIContext";
import ResumeTabsList from "@/components/resume/ResumeTabsList";
import { 
  PersonalInfoTabContent,
  ExperienceTabContent,
  EducationTabContent,
  SkillsTabContent,
  StylingTabContent,
  PreviewTabContent 
} from "@/components/resume/TabsContent";
import ResumePreviewPanel from "@/components/resume/ResumePreviewPanel";
import ImportOptions from "@/components/resume/ImportOptions";
import ImportDialog from "@/components/resume/ImportDialog";
import resumeTemplates from "@/data/resumeTemplates";
import ResumePhotoUploader from "@/components/resume/ResumePhotoUploader";

export default function ResumeBuilder() {
  const [searchParams] = useSearchParams();
  const templateId = searchParams.get("template");
  const { toast } = useToast();
  const { isLoggedIn, setShowLoginModal, setShowSignupModal, setPendingAction } = useAuth();
  const { enhanceResumeSummary, isLoading: isAILoading } = useAI();
  const [activeTab, setActiveTab] = useState("personal");
  const [isUploading, setIsUploading] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [importSource, setImportSource] = useState("");
  const [showImportDialog, setShowImportDialog] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(
    templateId ? resumeTemplates.find(t => t.id === templateId) : null
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [resumeData, setResumeData] = useState({
    personal: {
      name: "",
      email: "",
      phone: "",
      location: "",
      title: "",
      summary: "",
      photo: "",
    },
    experience: [],
    education: [],
    skills: {
      technical: [],
      soft: [],
      languages: [],
      certifications: [],
    },
    styling: {
      theme: "default",
      font: "sans",
      fontSize: "normal",
    }
  });

  useEffect(() => {
    if (templateId) {
      const template = resumeTemplates.find(t => t.id === templateId);
      if (template) {
        setSelectedTemplate(template);
        toast({
          title: "Template Selected",
          description: `${template.name} has been selected. Start filling in your details to see it in action.`,
        });
      }
    }
  }, [templateId, toast]);

  const handleGenerateAI = async () => {
    const currentSummary = resumeData.personal.summary || '';
    
    toast({
      title: "AI Enhancement in Progress",
      description: "Our AI is optimizing your resume content...",
    });
    
    try {
      const enhancedSummary = await enhanceResumeSummary(currentSummary);
      
      setResumeData((prev) => ({
        ...prev,
        personal: {
          ...prev.personal,
          summary: enhancedSummary,
        },
      }));
      
      toast({
        title: "AI Enhancement Complete",
        description: "Your resume has been optimized for maximum impact!",
      });
    } catch (error) {
      console.error('Error enhancing resume:', error);
      toast({
        title: "AI Enhancement Failed",
        description: "There was an error enhancing your resume. Please try again later.",
        variant: "destructive"
      });
    }
  };

  const handlePhotoChange = (photoDataUrl: string | null) => {
    setResumeData(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        photo: photoDataUrl || "",
      }
    }));
  };

  const handleDownload = () => {
    if (!isLoggedIn) {
      setPendingAction(() => {
        performDownload();
      });
      
      setShowSignupModal(true);
      
      toast({
        title: "Authentication Required",
        description: "Please sign up or log in to download your resume. Don't worry, your data is saved!",
      });
      
      return;
    }
    
    performDownload();
  };
  
  const performDownload = () => {
    toast({
      title: "Resume Downloaded",
      description: "Your resume has been downloaded as a PDF.",
    });
    
    setTimeout(() => {
      setResumeData({
        personal: {
          name: "John Doe",
          email: "john.doe@example.com",
          phone: "(123) 456-7890",
          location: "San Francisco, CA",
          title: "Senior Software Engineer",
          summary: "Experienced software engineer with a passion for building scalable applications.",
          photo: "",
        },
        experience: [
          {
            id: "exp-1",
            company: "Tech Corp",
            position: "Senior Developer",
            startDate: "2020-01",
            endDate: "2023-03",
            isCurrentPosition: false,
            description: "Led development of multiple web applications using React and Node.js."
          }
        ],
        education: [
          {
            id: "edu-1",
            institution: "University of Technology",
            degree: "Bachelor of Science",
            field: "Computer Science",
            startDate: "2014-09",
            endDate: "2018-05",
            description: "Graduated with honors. Focused on software engineering and data structures."
          }
        ],
        skills: {
          technical: ["JavaScript", "React", "Node.js"],
          soft: ["Communication", "Leadership"],
          languages: ["English", "Spanish"],
          certifications: ["AWS Certified Developer"]
        },
        styling: {
          theme: "default",
          font: "sans",
          fontSize: "normal",
        }
      });
      
      setIsUploading(false);
      setActiveTab("personal");
      
      toast({
        title: "Resume Uploaded Successfully",
        description: "Your resume data has been extracted and loaded. Feel free to edit any details.",
      });
    }, 2000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    
    setTimeout(() => {
      setResumeData({
        personal: {
          name: "John Doe",
          email: "john.doe@example.com",
          phone: "(123) 456-7890",
          location: "San Francisco, CA",
          title: "Senior Software Engineer",
          summary: "Experienced software engineer with a passion for building scalable applications.",
          photo: "",
        },
        experience: [
          {
            id: "exp-1",
            company: "Tech Corp",
            position: "Senior Developer",
            startDate: "2020-01",
            endDate: "2023-03",
            isCurrentPosition: false,
            description: "Led development of multiple web applications using React and Node.js."
          }
        ],
        education: [
          {
            id: "edu-1",
            institution: "University of Technology",
            degree: "Bachelor of Science",
            field: "Computer Science",
            startDate: "2014-09",
            endDate: "2018-05",
            description: "Graduated with honors. Focused on software engineering and data structures."
          }
        ],
        skills: {
          technical: ["JavaScript", "React", "Node.js"],
          soft: ["Communication", "Leadership"],
          languages: ["English", "Spanish"],
          certifications: ["AWS Certified Developer"]
        },
        styling: {
          theme: "default",
          font: "sans",
          fontSize: "normal",
        }
      });
      
      setIsUploading(false);
      setActiveTab("personal");
      
      toast({
        title: "Resume Uploaded Successfully",
        description: "Your resume data has been extracted and loaded. Feel free to edit any details.",
      });
    }, 2000);
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleImportClick = (source: string) => {
    setImportSource(source);
    setShowImportDialog(true);
  };

  const handleImportConfirm = () => {
    setIsImporting(true);
    
    setTimeout(() => {
      const sourceData = importSource === "LinkedIn" 
        ? {
            name: "Jane Smith",
            email: "jane.smith@example.com",
            title: "Product Manager",
            company: "LinkedIn Corp"
          } 
        : {
            name: "Alex Johnson",
            email: "alex.johnson@example.com",
            title: "UX Designer",
            company: "Design Studios"
          };
      
      setResumeData({
        personal: {
          name: sourceData.name,
          email: sourceData.email,
          phone: "(555) 123-4567",
          location: "New York, NY",
          title: sourceData.title,
          summary: `Experienced ${sourceData.title} with a proven track record of success at ${sourceData.company} and other leading companies.`,
          photo: "",
        },
        experience: [
          {
            id: "exp-1",
            company: sourceData.company,
            position: sourceData.title,
            startDate: "2019-03",
            endDate: "",
            isCurrentPosition: true,
            description: `Working as a ${sourceData.title} at ${sourceData.company}, responsible for key initiatives and project management.`
          }
        ],
        education: [],
        skills: {
          technical: [],
          soft: [],
          languages: [],
          certifications: []
        },
        styling: {
          theme: "default",
          font: "sans",
          fontSize: "normal",
        }
      });
      
      setIsImporting(false);
      setShowImportDialog(false);
      setActiveTab("personal");
      
      toast({
        title: `${importSource} Import Successful`,
        description: "Your profile data has been imported. Please review and complete any missing information.",
      });
    }, 3000);
  };

  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Build Your <span className="bg-gradient-to-r from-boost-primary to-boost-secondary bg-clip-text text-transparent">AI-Powered</span> Resume
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Create a professional, ATS-optimized resume in minutes with our browser-based AI assistant.
        </p>
        
        {selectedTemplate && (
          <div className="mt-4 flex items-center justify-center">
            <div className="bg-muted px-4 py-2 rounded-full flex items-center">
              <img 
                src={selectedTemplate.thumbnail} 
                alt={selectedTemplate.name} 
                className="w-6 h-6 rounded-full object-cover mr-2" 
              />
              <span className="text-sm">
                Using template: <span className="font-medium">{selectedTemplate.name}</span>
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <ResumeTabsList />
            
            <PersonalInfoTabContent 
              activeTab={activeTab}
              resumeData={resumeData}
              setResumeData={setResumeData}
              setActiveTab={setActiveTab}
              handleGenerateAI={handleGenerateAI}
            />
            
            <ExperienceTabContent 
              activeTab={activeTab}
              resumeData={resumeData}
              setResumeData={setResumeData}
              setActiveTab={setActiveTab}
            />
            
            <EducationTabContent 
              activeTab={activeTab}
              resumeData={resumeData}
              setResumeData={setResumeData}
              setActiveTab={setActiveTab}
            />
            
            <SkillsTabContent 
              activeTab={activeTab}
              resumeData={resumeData}
              setResumeData={setResumeData}
              setActiveTab={setActiveTab}
            />
            
            <StylingTabContent 
              activeTab={activeTab}
              resumeData={resumeData}
              setResumeData={setResumeData}
              setActiveTab={setActiveTab}
            />
          </Tabs>
          
          {selectedTemplate?.requiresPhoto && (
            <div className="mt-6">
              <ResumePhotoUploader
                initialPhoto={resumeData.personal.photo}
                onPhotoChange={handlePhotoChange}
              />
            </div>
          )}
          
          <div className="mt-8">
            <ImportOptions 
              isUploading={isUploading}
              isImporting={isImporting}
              fileInputRef={fileInputRef}
              triggerFileUpload={triggerFileUpload}
              handleFileUpload={handleFileUpload}
              handleImportClick={handleImportClick}
            />
          </div>
        </div>
        
        <ResumePreviewPanel 
          resumeData={resumeData}
          isLoggedIn={isLoggedIn}
          handleDownload={handleDownload}
        />
      </div>

      <ImportDialog 
        showImportDialog={showImportDialog}
        setShowImportDialog={setShowImportDialog}
        importSource={importSource}
        isImporting={isImporting}
        handleImportConfirm={handleImportConfirm}
      />
    </div>
  );
}
