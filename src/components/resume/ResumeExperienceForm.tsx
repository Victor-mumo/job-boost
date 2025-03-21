
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { ChevronLeft, ChevronRight, Plus, Trash2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ResumeExperienceForm({ resumeData, setResumeData, onNext, onBack }) {
  const { toast } = useToast();
  const [experiences, setExperiences] = useState(resumeData.experience || []);
  const [editingIndex, setEditingIndex] = useState(null);

  const form = useForm({
    defaultValues: {
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    },
  });

  const handleAddExperience = (data) => {
    let updatedExperiences;
    
    if (editingIndex !== null) {
      updatedExperiences = [...experiences];
      updatedExperiences[editingIndex] = data;
      setEditingIndex(null);
    } else {
      updatedExperiences = [...experiences, data];
    }
    
    setExperiences(updatedExperiences);
    setResumeData((prev) => ({
      ...prev,
      experience: updatedExperiences,
    }));
    
    form.reset({
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    });
    
    toast({
      title: editingIndex !== null ? "Experience updated!" : "Experience added!",
      description: "Your work experience has been saved.",
    });
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    form.reset(experiences[index]);
  };

  const handleDelete = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
    setResumeData((prev) => ({
      ...prev,
      experience: updatedExperiences,
    }));
    
    toast({
      title: "Experience removed",
      description: "The work experience has been deleted.",
    });
  };

  const handleGenerateAI = () => {
    const description = form.getValues("description");
    const title = form.getValues("title");
    const company = form.getValues("company");
    
    if (!title || !company) {
      toast({
        title: "Please fill required fields",
        description: "Job title and company are needed for AI enhancement.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "AI Enhancement in Progress",
      description: "Our AI is optimizing your experience description...",
    });
    
    // In a real implementation, you'd call your AI service here
    setTimeout(() => {
      const enhancedDescription = 
        "• Led cross-functional team of 5 engineers in developing a microservices architecture that improved system scalability by 200%\n" +
        "• Reduced API response time by 40% through implementation of caching strategies and query optimization\n" +
        "• Mentored 3 junior developers, improving team productivity by 25% within 6 months\n" +
        "• Collaborated with product and design teams to deliver features that increased user engagement by 30%";
      
      form.setValue("description", enhancedDescription);
      
      toast({
        title: "AI Enhancement Complete",
        description: "Your experience description has been optimized!",
      });
    }, 2000);
  };

  const handleContinue = () => {
    if (experiences.length === 0) {
      toast({
        title: "No experience added",
        description: "Please add at least one work experience or click 'Skip' if you don't have any.",
        variant: "destructive",
      });
      return;
    }
    
    onNext();
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Work Experience</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Add your most relevant work experience, starting with the most recent.
            </p>
          </div>
          
          {experiences.length > 0 && (
            <div className="space-y-4 mb-6">
              <h4 className="text-sm font-medium text-muted-foreground">Added Experiences</h4>
              {experiences.map((exp, index) => (
                <div key={index} className="flex items-start justify-between p-3 border rounded-md">
                  <div>
                    <div className="font-medium">{exp.title}</div>
                    <div className="text-sm text-muted-foreground">{exp.company}</div>
                    <div className="text-xs text-muted-foreground">
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleAddExperience)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Title *</FormLabel>
                      <FormControl>
                        <Input placeholder="Software Engineer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company *</FormLabel>
                      <FormControl>
                        <Input placeholder="Acme Inc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="San Francisco, CA" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-2">
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Start Date</FormLabel>
                        <FormControl>
                          <Input placeholder="MM/YYYY" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>End Date</FormLabel>
                        <FormControl>
                          <Input placeholder="MM/YYYY or Present" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your responsibilities and achievements..." 
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <div className="flex justify-end mt-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1 text-xs"
                        onClick={handleGenerateAI}
                      >
                        <Sparkles className="h-3 w-3" />
                        Enhance with AI
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div>
                <Button
                  type="submit"
                  variant="outline"
                  className="w-full flex items-center justify-center gap-1"
                >
                  <Plus className="h-4 w-4" />
                  {editingIndex !== null ? "Update Experience" : "Add Experience"}
                </Button>
              </div>
            </form>
          </Form>
          
          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={onBack}>
              <ChevronLeft className="mr-1 h-4 w-4" /> Back
            </Button>
            <div className="flex gap-2">
              <Button variant="ghost" onClick={onNext}>
                Skip
              </Button>
              <Button 
                className="bg-boost-primary hover:bg-boost-primary/90"
                onClick={handleContinue}
              >
                Next <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
