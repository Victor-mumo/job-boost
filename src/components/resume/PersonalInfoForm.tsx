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
import { ChevronRight, Sparkles } from "lucide-react";

interface PersonalInfoFormProps {
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
  };
  setResumeData: (data: any) => void;
  onNext?: () => void;
  handleGenerateAI?: () => void;
  handleSubmit: (data: any) => void;
}

export default function PersonalInfoForm({ resumeData, setResumeData, onNext, handleGenerateAI }: PersonalInfoFormProps) {
  const { toast } = useToast();
  
  const form = useForm({
    defaultValues: resumeData.personal,
  });

  const handlePersonalSubmit = (data: any) => {
    setResumeData((prev: any) => ({
      ...prev,
      personal: data,
    }));
    
    toast({
      title: "Personal information saved!",
      description: "Let's move on to your work experience.",
    });
    
    onNext();
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handlePersonalSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Professional Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Senior Software Engineer" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="(123) 456-7890" {...field} />
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
            </div>
            
            <FormField
              control={form.control}
              name="summary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Professional Summary</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Briefly describe your professional background and key strengths..." 
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
                      Generate with AI
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-between">
              <Button variant="outline" type="button" disabled>
                Back
              </Button>
              <Button type="submit" className="bg-boost-primary hover:bg-boost-primary/90">
                Next <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
