
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft, Plus, X, Sparkles, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

export default function ResumeSkillsForm({ resumeData, setResumeData, onBack }) {
  const { toast } = useToast();
  const [skills, setSkills] = useState({
    technical: resumeData.skills?.technical || [],
    soft: resumeData.skills?.soft || [],
    languages: resumeData.skills?.languages || [],
    certifications: resumeData.skills?.certifications || [],
  });

  const [newSkill, setNewSkill] = useState({
    technical: "",
    soft: "",
    languages: "",
    certifications: "",
  });

  const handleAddSkill = (type) => {
    if (!newSkill[type].trim()) return;
    
    const updatedSkills = {
      ...skills,
      [type]: [...skills[type], newSkill[type].trim()],
    };
    
    setSkills(updatedSkills);
    setResumeData((prev) => ({
      ...prev,
      skills: updatedSkills,
    }));
    
    setNewSkill({
      ...newSkill,
      [type]: "",
    });
  };

  const handleKeyPress = (e, type) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill(type);
    }
  };

  const handleRemoveSkill = (type, index) => {
    const updatedSkills = {
      ...skills,
      [type]: skills[type].filter((_, i) => i !== index),
    };
    
    setSkills(updatedSkills);
    setResumeData((prev) => ({
      ...prev,
      skills: updatedSkills,
    }));
  };

  const handleGenerateAI = (type) => {
    toast({
      title: "AI Skill Suggestions",
      description: "Generating skill recommendations based on your profile...",
    });
    
    // Mock AI-generated skills
    setTimeout(() => {
      let aiSkills = [];
      
      if (type === "technical") {
        aiSkills = ["React", "Node.js", "TypeScript", "AWS", "Docker", "Git", "CI/CD", "RESTful APIs"];
      } else if (type === "soft") {
        aiSkills = ["Communication", "Leadership", "Problem Solving", "Team Collaboration", "Project Management", "Adaptability"];
      } else if (type === "languages") {
        aiSkills = ["English (Native)", "Spanish (Conversational)", "French (Basic)"];
      } else if (type === "certifications") {
        aiSkills = ["AWS Certified Solutions Architect", "Scrum Master Certification", "Google Cloud Professional"];
      }
      
      // Add skills that are not already in the list
      const newSkillsToAdd = aiSkills.filter(skill => !skills[type].includes(skill));
      
      if (newSkillsToAdd.length > 0) {
        const updatedSkills = {
          ...skills,
          [type]: [...skills[type], ...newSkillsToAdd],
        };
        
        setSkills(updatedSkills);
        setResumeData((prev) => ({
          ...prev,
          skills: updatedSkills,
        }));
        
        toast({
          title: "Skills Added",
          description: `${newSkillsToAdd.length} new skills added to your profile.`,
        });
      } else {
        toast({
          title: "No New Skills",
          description: "All suggested skills are already in your profile.",
        });
      }
    }, 1500);
  };

  const handleFinish = () => {
    // Check if any skills were added
    const hasSkills = Object.values(skills).some(skillArray => skillArray.length > 0);
    
    if (!hasSkills) {
      toast({
        title: "No skills added",
        description: "Please add at least a few skills to your resume.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Resume Complete!",
      description: "Your resume has been successfully created and is ready to download.",
    });
    
    // Here you could redirect to a "resume completed" page or show a modal
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Skills & Certifications</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Add your technical skills, soft skills, languages, and certifications.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Technical Skills */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <Label>Technical Skills</Label>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-8 text-xs flex items-center gap-1 text-boost-primary"
                  onClick={() => handleGenerateAI("technical")}
                >
                  <Sparkles className="h-3 w-3" />
                  Suggest with AI
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {skills.technical.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="pl-2 flex items-center gap-1">
                    {skill}
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 p-0 ml-1 text-muted-foreground hover:text-foreground"
                      onClick={() => handleRemoveSkill("technical", index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Add a technical skill (e.g., React, Python, AWS)"
                  value={newSkill.technical}
                  onChange={(e) => setNewSkill({ ...newSkill, technical: e.target.value })}
                  onKeyDown={(e) => handleKeyPress(e, "technical")}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => handleAddSkill("technical")}
                  disabled={!newSkill.technical.trim()}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Soft Skills */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <Label>Soft Skills</Label>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-8 text-xs flex items-center gap-1 text-boost-primary"
                  onClick={() => handleGenerateAI("soft")}
                >
                  <Sparkles className="h-3 w-3" />
                  Suggest with AI
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {skills.soft.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="pl-2 flex items-center gap-1">
                    {skill}
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 p-0 ml-1 text-muted-foreground hover:text-foreground"
                      onClick={() => handleRemoveSkill("soft", index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Add a soft skill (e.g., Leadership, Communication)"
                  value={newSkill.soft}
                  onChange={(e) => setNewSkill({ ...newSkill, soft: e.target.value })}
                  onKeyDown={(e) => handleKeyPress(e, "soft")}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => handleAddSkill("soft")}
                  disabled={!newSkill.soft.trim()}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Languages */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <Label>Languages</Label>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-8 text-xs flex items-center gap-1 text-boost-primary"
                  onClick={() => handleGenerateAI("languages")}
                >
                  <Sparkles className="h-3 w-3" />
                  Suggest with AI
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {skills.languages.map((language, index) => (
                  <Badge key={index} variant="secondary" className="pl-2 flex items-center gap-1">
                    {language}
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 p-0 ml-1 text-muted-foreground hover:text-foreground"
                      onClick={() => handleRemoveSkill("languages", index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Add a language (e.g., English (Native), Spanish (Intermediate))"
                  value={newSkill.languages}
                  onChange={(e) => setNewSkill({ ...newSkill, languages: e.target.value })}
                  onKeyDown={(e) => handleKeyPress(e, "languages")}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => handleAddSkill("languages")}
                  disabled={!newSkill.languages.trim()}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <Label>Certifications</Label>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-8 text-xs flex items-center gap-1 text-boost-primary"
                  onClick={() => handleGenerateAI("certifications")}
                >
                  <Sparkles className="h-3 w-3" />
                  Suggest with AI
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {skills.certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="pl-2 flex items-center gap-1">
                    {cert}
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 p-0 ml-1 text-muted-foreground hover:text-foreground"
                      onClick={() => handleRemoveSkill("certifications", index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Add a certification (e.g., AWS Solutions Architect)"
                  value={newSkill.certifications}
                  onChange={(e) => setNewSkill({ ...newSkill, certifications: e.target.value })}
                  onKeyDown={(e) => handleKeyPress(e, "certifications")}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => handleAddSkill("certifications")}
                  disabled={!newSkill.certifications.trim()}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={onBack}>
              <ChevronLeft className="mr-1 h-4 w-4" /> Back
            </Button>
            <Button 
              className="bg-boost-primary hover:bg-boost-primary/90"
              onClick={handleFinish}
            >
              <Zap className="mr-2 h-4 w-4" />
              Complete Resume
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
