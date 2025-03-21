
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import ResumeTemplateGallery from "@/components/resume/ResumeTemplateGallery";
import resumeTemplates from "@/data/resumeTemplates";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutTemplate } from "lucide-react";

export default function Templates() {
  const [searchParams] = useSearchParams();
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | undefined>(
    searchParams.get("selected") || undefined
  );
  const [selectedTemplate, setSelectedTemplate] = useState(
    selectedTemplateId ? resumeTemplates.find(t => t.id === selectedTemplateId) : undefined
  );
  
  const { isLoggedIn, setShowLoginModal } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Update the selected template when the ID changes
    setSelectedTemplate(
      selectedTemplateId ? resumeTemplates.find(t => t.id === selectedTemplateId) : undefined
    );
  }, [selectedTemplateId]);

  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplateId(templateId);
  };

  const handleUseTemplate = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      toast({
        title: "Authentication Required",
        description: "Please sign up or log in to use this template.",
      });
      return;
    }

    if (selectedTemplateId) {
      // Navigate to the resume builder with the selected template
      navigate(`/resume-builder?template=${selectedTemplateId}`);
    }
  };

  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Resume Templates
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Choose from our professional templates designed to impress employers and pass ATS systems.
        </p>
      </div>
      
      {selectedTemplate && (
        <div className="mb-10 flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <img 
              src={selectedTemplate.thumbnail} 
              alt={selectedTemplate.name} 
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-2">{selectedTemplate.name}</h2>
            <p className="text-muted-foreground mb-4">{selectedTemplate.description}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Features:</h3>
              <ul className="space-y-1">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-boost-primary" />
                  <span>Professional design optimized for ATS</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-boost-primary" />
                  <span>Customizable colors and fonts</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-boost-primary" />
                  <span>Easy content editing with our builder</span>
                </li>
                {selectedTemplate.requiresPhoto && (
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-boost-primary" />
                    <span>Includes space for professional photo</span>
                  </li>
                )}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-boost-primary hover:bg-boost-primary/90 flex-1"
                onClick={handleUseTemplate}
              >
                Use This Template <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 flex items-center justify-center"
                onClick={() => setSelectedTemplateId(undefined)}
              >
                <LayoutTemplate className="mr-2 h-4 w-4" />
                View All Templates
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <ResumeTemplateGallery 
        onSelectTemplate={handleSelectTemplate} 
        selectedTemplateId={selectedTemplateId}
      />
      
      <div className="mt-10 text-center">
        <Button 
          onClick={() => navigate("/resume-builder")}
          className="bg-boost-primary hover:bg-boost-primary/90"
        >
          Create My Resume <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <p className="text-sm text-muted-foreground mt-2">
          Start building your professional resume with our AI-powered tools.
        </p>
      </div>
    </div>
  );
}
