import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkles, FileText, Edit, Download, Zap, MessageSquare, ChevronRight, ChevronLeft, Lock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function CoverLetterGenerator() {
  const { toast } = useToast();
  const { isLoggedIn, setShowLoginModal, setShowSignupModal, setPendingAction } = useAuth();
  const [activeTab, setActiveTab] = useState("details");
  const [coverLetterData, setCoverLetterData] = useState({
    jobTitle: "",
    company: "",
    hiringManager: "",
    jobDescription: "",
    style: "professional",
    tone: "confident",
    focusPoints: "",
    generatedLetter: "",
  });
  
  const form = useForm({
    defaultValues: {
      jobTitle: "",
      company: "",
      hiringManager: "",
      jobDescription: "",
      style: "professional",
      tone: "confident",
      focusPoints: "",
    },
  });

  const handleDetailsSubmit = (data) => {
    setCoverLetterData({
      ...coverLetterData,
      ...data,
    });
    
    toast({
      title: "Details saved!",
      description: "Now let's generate your cover letter.",
    });
    
    setActiveTab("generate");
  };

  const handleGenerateLetter = () => {
    toast({
      title: "Generating Cover Letter",
      description: "Our AI is crafting your personalized cover letter...",
    });
    
    // In a real implementation, you'd call your AI service here
    setTimeout(() => {
      const generatedLetter = `
Dear ${coverLetterData.hiringManager || "Hiring Manager"},

I am writing to express my interest in the ${coverLetterData.jobTitle} position at ${coverLetterData.company}. With my background in software development and passion for creating user-centric solutions, I believe I would be a valuable addition to your team.

The opportunity to contribute to ${coverLetterData.company}'s mission of revolutionizing the tech industry through innovative products aligns perfectly with my career aspirations. My experience in developing scalable web applications and leading cross-functional teams has prepared me well for this role.

In my previous position, I increased development efficiency by 30% by implementing new tools and frameworks, resulting in faster delivery times and improved product quality. I am confident that my skills in React, Node.js, and cloud infrastructure would enable me to make an immediate impact at ${coverLetterData.company}.

I am particularly drawn to this role because it offers the opportunity to work on challenging problems while making a meaningful difference. I am excited about the prospect of bringing my expertise in ${coverLetterData.focusPoints || "software development"} to your team.

Thank you for considering my application. I look forward to discussing how my skills and experience align with your needs.

Sincerely,
[Your Name]
      `;
      
      setCoverLetterData({
        ...coverLetterData,
        generatedLetter,
      });
      
      toast({
        title: "Cover Letter Ready!",
        description: "Your personalized cover letter has been generated.",
      });
    }, 2000);
  };

  const handleDownload = () => {
    if (!isLoggedIn) {
      // Store the download function as the pending action
      setPendingAction(() => {
        performDownload();
      });
      
      // Show sign-up modal
      setShowSignupModal(true);
      
      toast({
        title: "Authentication Required",
        description: "Please sign up or log in to download your cover letter. Don't worry, your data is saved!",
      });
      
      return;
    }
    
    performDownload();
  };
  
  const performDownload = () => {
    toast({
      title: "Cover Letter Downloaded",
      description: "Your cover letter has been downloaded as a PDF.",
    });
    
    // Actual download logic would go here in a real app
  };

  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          AI-Powered <span className="bg-gradient-to-r from-boost-primary to-boost-secondary bg-clip-text text-transparent">Cover Letter</span> Generator
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Create a compelling, personalized cover letter in minutes with our AI assistant
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Job Details</span>
              </TabsTrigger>
              <TabsTrigger value="generate" className="flex items-center gap-1">
                <Sparkles className="h-4 w-4" />
                <span className="hidden sm:inline">Generate</span>
              </TabsTrigger>
              <TabsTrigger value="customize" className="flex items-center gap-1">
                <Edit className="h-4 w-4" />
                <span className="hidden sm:inline">Customize</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleDetailsSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="jobTitle"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Job Title</FormLabel>
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
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Acme Corp" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="hiringManager"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Hiring Manager (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="John Smith" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="jobDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Job Description</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Paste the job description here..." 
                                className="min-h-[150px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="style"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Cover Letter Style</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a style" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="professional">Professional</SelectItem>
                                  <SelectItem value="creative">Creative</SelectItem>
                                  <SelectItem value="modern">Modern</SelectItem>
                                  <SelectItem value="traditional">Traditional</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="tone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Cover Letter Tone</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a tone" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="confident">Confident</SelectItem>
                                  <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                                  <SelectItem value="formal">Formal</SelectItem>
                                  <SelectItem value="conversational">Conversational</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="focusPoints"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Key Points to Highlight (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Special skills, experiences, or achievements you want to emphasize..." 
                                className="min-h-[100px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="flex justify-end">
                        <Button type="submit" className="bg-boost-primary hover:bg-boost-primary/90">
                          Next <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="generate" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Ready to Generate Your Cover Letter</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Our AI will analyze the job description and create a personalized cover letter that highlights your strengths.
                      </p>
                    </div>
                    
                    <div className="rounded-lg border p-4 bg-muted/30">
                      <h4 className="font-medium mb-2">Job Information</h4>
                      <dl className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <div>
                          <dt className="font-medium">Position:</dt>
                          <dd>{coverLetterData.jobTitle || "Not specified"}</dd>
                        </div>
                        <div>
                          <dt className="font-medium">Company:</dt>
                          <dd>{coverLetterData.company || "Not specified"}</dd>
                        </div>
                        <div>
                          <dt className="font-medium">Hiring Manager:</dt>
                          <dd>{coverLetterData.hiringManager || "Not specified"}</dd>
                        </div>
                        <div>
                          <dt className="font-medium">Style & Tone:</dt>
                          <dd>{coverLetterData.style} / {coverLetterData.tone}</dd>
                        </div>
                      </dl>
                    </div>
                    
                    <div className="flex justify-center">
                      <Button 
                        className="bg-gradient-to-r from-boost-primary to-boost-secondary hover:from-boost-primary/90 hover:to-boost-secondary/90 text-white px-6"
                        onClick={handleGenerateLetter}
                      >
                        <Sparkles className="mr-2 h-5 w-5" />
                        Generate Cover Letter
                      </Button>
                    </div>
                    
                    {coverLetterData.generatedLetter && (
                      <div className="mt-6">
                        <h4 className="font-medium mb-2">Your Cover Letter</h4>
                        <div className="rounded-lg border p-6 bg-white">
                          <pre className="whitespace-pre-wrap font-sans text-sm">
                            {coverLetterData.generatedLetter}
                          </pre>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex justify-between pt-4">
                      <Button variant="outline" onClick={() => setActiveTab("details")}>
                        <ChevronLeft className="mr-1 h-4 w-4" /> Back
                      </Button>
                      <Button 
                        onClick={() => setActiveTab("customize")}
                        disabled={!coverLetterData.generatedLetter}
                        className="bg-boost-primary hover:bg-boost-primary/90"
                      >
                        Customize <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="customize" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Customize Your Cover Letter</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Make any final edits to your cover letter before downloading.
                      </p>
                    </div>
                    
                    <div>
                      <Textarea 
                        value={coverLetterData.generatedLetter}
                        onChange={(e) => setCoverLetterData({...coverLetterData, generatedLetter: e.target.value})}
                        className="min-h-[400px] font-sans"
                      />
                    </div>
                    
                    <div className="flex justify-between pt-4">
                      <Button variant="outline" onClick={() => setActiveTab("generate")}>
                        <ChevronLeft className="mr-1 h-4 w-4" /> Back
                      </Button>
                      <Button 
                        className={`${isLoggedIn ? 'bg-boost-primary hover:bg-boost-primary/90' : 'bg-boost-primary/80 hover:bg-boost-primary/70'} flex items-center gap-2`}
                        onClick={handleDownload}
                      >
                        {!isLoggedIn && <Lock className="h-3 w-3" />}
                        <Download className="mr-2 h-4 w-4" />
                        {isLoggedIn ? 'Download Cover Letter' : 'Login to Download'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="sticky top-20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Cover Letter Tips</h3>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-boost-light p-2 rounded-full">
                      <Zap className="h-4 w-4 text-boost-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Keep it concise</h4>
                      <p className="text-sm text-muted-foreground">The ideal cover letter should be one page or less, focusing on your most relevant qualifications.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-boost-light p-2 rounded-full">
                      <Zap className="h-4 w-4 text-boost-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Showcase your value</h4>
                      <p className="text-sm text-muted-foreground">Highlight how your skills and experience will benefit the company rather than just listing qualifications.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-boost-light p-2 rounded-full">
                      <Zap className="h-4 w-4 text-boost-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Personalize each letter</h4>
                      <p className="text-sm text-muted-foreground">Customize your cover letter for each job application to address specific job requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-boost-light p-2 rounded-full">
                      <Zap className="h-4 w-4 text-boost-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Proofread thoroughly</h4>
                      <p className="text-sm text-muted-foreground">Always check for grammatical errors, typos, and formatting issues before sending your cover letter.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="h-5 w-5 text-boost-primary" />
                    <h3 className="font-medium">Chat with our AI Assistant</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Need help with your cover letter? Our AI assistant can answer your questions and provide guidance.
                  </p>
                  <div className="flex justify-center">
                    <Button className="bg-boost-primary hover:bg-boost-primary/90 w-full">
                      Start Chat Session
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
