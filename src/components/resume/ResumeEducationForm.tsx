
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
import { ChevronLeft, ChevronRight, Plus, Trash2 } from "lucide-react";

export default function ResumeEducationForm({ resumeData, setResumeData, onNext, onBack }) {
  const { toast } = useToast();
  const [educations, setEducations] = useState(resumeData.education || []);
  const [editingIndex, setEditingIndex] = useState(null);

  const form = useForm({
    defaultValues: {
      institution: "",
      degree: "",
      field: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
      gpa: "",
    },
  });

  const handleAddEducation = (data) => {
    let updatedEducations;
    
    if (editingIndex !== null) {
      updatedEducations = [...educations];
      updatedEducations[editingIndex] = data;
      setEditingIndex(null);
    } else {
      updatedEducations = [...educations, data];
    }
    
    setEducations(updatedEducations);
    setResumeData((prev) => ({
      ...prev,
      education: updatedEducations,
    }));
    
    form.reset({
      institution: "",
      degree: "",
      field: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
      gpa: "",
    });
    
    toast({
      title: editingIndex !== null ? "Education updated!" : "Education added!",
      description: "Your education details have been saved.",
    });
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    form.reset(educations[index]);
  };

  const handleDelete = (index) => {
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
    setResumeData((prev) => ({
      ...prev,
      education: updatedEducations,
    }));
    
    toast({
      title: "Education removed",
      description: "The education entry has been deleted.",
    });
  };

  const handleContinue = () => {
    if (educations.length === 0) {
      toast({
        title: "No education added",
        description: "Please add at least one education entry or click 'Skip' if you don't have any.",
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
            <h3 className="text-lg font-medium mb-2">Education</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Add your educational background, starting with the most recent.
            </p>
          </div>
          
          {educations.length > 0 && (
            <div className="space-y-4 mb-6">
              <h4 className="text-sm font-medium text-muted-foreground">Added Education</h4>
              {educations.map((edu, index) => (
                <div key={index} className="flex items-start justify-between p-3 border rounded-md">
                  <div>
                    <div className="font-medium">{edu.degree} {edu.field && `in ${edu.field}`}</div>
                    <div className="text-sm text-muted-foreground">{edu.institution}</div>
                    <div className="text-xs text-muted-foreground">
                      {edu.startDate} - {edu.endDate}
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
            <form onSubmit={form.handleSubmit(handleAddEducation)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="institution"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Institution *</FormLabel>
                      <FormControl>
                        <Input placeholder="University of California" {...field} />
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
                        <Input placeholder="Berkeley, CA" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="degree"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Degree *</FormLabel>
                      <FormControl>
                        <Input placeholder="Bachelor of Science" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="field"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Field of Study</FormLabel>
                      <FormControl>
                        <Input placeholder="Computer Science" {...field} />
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
                          <Input placeholder="MM/YYYY or Expected" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="gpa"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>GPA (optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="3.8/4.0" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Information (optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Honors, awards, relevant coursework, etc." 
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
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
                  {editingIndex !== null ? "Update Education" : "Add Education"}
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
