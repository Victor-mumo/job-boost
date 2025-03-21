
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Bot, FileText, Play, Pause, SkipForward, Mic, Settings, ArrowRight, CheckCircle, Video, Sparkles } from "lucide-react";

export default function InterviewPrep() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("mock");
  const [isRecording, setIsRecording] = useState(false);
  const [isInterviewStarted, setIsInterviewStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [message, setMessage] = useState("");
  
  const handleStartInterview = () => {
    if (!selectedJob) {
      toast({
        title: "Job title required",
        description: "Please select a job title before starting the interview.",
        variant: "destructive"
      });
      return;
    }
    
    setIsInterviewStarted(true);
    
    toast({
      title: "Interview Started",
      description: "Your AI interviewer will now ask you questions. Answer naturally as in a real interview.",
    });
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
    
    toast({
      title: isPaused ? "Interview Resumed" : "Interview Paused",
      description: isPaused ? "The interview is continuing." : "Take a moment if you need. Resume when ready.",
    });
  };
  
  const handleSkipQuestion = () => {
    toast({
      title: "Question Skipped",
      description: "Moving to the next interview question.",
    });
  };
  
  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    
    toast({
      title: isRecording ? "Recording Stopped" : "Recording Started",
      description: isRecording 
        ? "Your recording has been saved. You can review it later." 
        : "Your responses are now being recorded for later review.",
    });
  };
  
  const handleEndInterview = () => {
    setIsInterviewStarted(false);
    
    toast({
      title: "Interview Completed",
      description: "Great job! Your performance is being analyzed. Results will be ready shortly.",
    });
    
    // In a real implementation, you'd save the interview results and redirect to an analysis page
    setTimeout(() => {
      setActiveTab("analysis");
    }, 1500);
  };
  
  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    toast({
      title: "Message Sent",
      description: "Your question has been sent to the AI coach.",
    });
    
    // Clear the input after sending
    setMessage("");
  };

  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          AI-Powered <span className="bg-gradient-to-r from-boost-primary to-boost-secondary bg-clip-text text-transparent">Interview</span> Preparation
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Practice with our AI interviewer to perfect your responses and get real-time feedback
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="mock" className="flex items-center gap-1">
                <Bot className="h-4 w-4" />
                <span className="hidden sm:inline">Mock Interview</span>
              </TabsTrigger>
              <TabsTrigger value="analysis" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Analysis</span>
              </TabsTrigger>
              <TabsTrigger value="coach" className="flex items-center gap-1">
                <Video className="h-4 w-4" />
                <span className="hidden sm:inline">Interview Coach</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="mock" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  {!isInterviewStarted ? (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2">Setup Your Mock Interview</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Choose the type of interview you want to practice and we'll customize the questions accordingly.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label>Job Title</Label>
                          <Select value={selectedJob} onValueChange={setSelectedJob}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select job title" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="software-engineer">Software Engineer</SelectItem>
                              <SelectItem value="product-manager">Product Manager</SelectItem>
                              <SelectItem value="data-scientist">Data Scientist</SelectItem>
                              <SelectItem value="ux-designer">UX Designer</SelectItem>
                              <SelectItem value="marketing-manager">Marketing Manager</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label>Industry</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="tech">Technology</SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="retail">Retail</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label>Interview Type</Label>
                          <Select defaultValue="behavioral">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="behavioral">Behavioral</SelectItem>
                              <SelectItem value="technical">Technical</SelectItem>
                              <SelectItem value="case">Case Interview</SelectItem>
                              <SelectItem value="situational">Situational</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label>Experience Level</Label>
                          <Select defaultValue="mid">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="entry">Entry Level</SelectItem>
                              <SelectItem value="mid">Mid Level</SelectItem>
                              <SelectItem value="senior">Senior Level</SelectItem>
                              <SelectItem value="leadership">Leadership</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Switch id="camera" />
                            <Label htmlFor="camera">Enable Camera</Label>
                          </div>
                          <Button variant="outline" size="sm">
                            <Settings className="mr-2 h-4 w-4" />
                            Advanced Settings
                          </Button>
                        </div>
                        
                        <Button onClick={handleStartInterview} className="w-full bg-boost-primary hover:bg-boost-primary/90">
                          Start Mock Interview
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="rounded-lg border bg-card p-6 min-h-[300px]">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="h-10 w-10 rounded-full bg-boost-light flex items-center justify-center">
                            <Bot className="h-5 w-5 text-boost-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">AI Interviewer</p>
                            <div className="space-y-2">
                              <p>Tell me about a time when you had to deal with a challenging team member. How did you handle the situation?</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                            <Bot className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">You</p>
                            <div className="space-y-2">
                              <p>I encountered this situation in my previous role when...</p>
                              {isRecording && (
                                <div className="flex items-center gap-2 text-sm text-red-500">
                                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                                  Recording
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={handlePauseResume}
                          >
                            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                          </Button>
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={handleSkipQuestion}
                          >
                            <SkipForward className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant={isRecording ? "destructive" : "outline"}
                            size="icon"
                            onClick={handleToggleRecording}
                          >
                            <Mic className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <Button onClick={handleEndInterview} className="bg-boost-primary hover:bg-boost-primary/90">
                          End Interview
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analysis" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Performance Analysis</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Review your interview performance and get AI-powered feedback to improve.
                      </p>
                    </div>
                    
                    <div className="rounded-lg border p-4 bg-muted/30">
                      <h4 className="font-medium mb-2">Overall Score</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-boost-primary">85/100</span>
                        <span className="text-sm text-muted-foreground">Very Good</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <h4 className="font-medium mb-2">Content & Structure</h4>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm">Clarity of Responses</span>
                          <span className="text-sm font-medium">9/10</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Your answers were clear and well-structured. You effectively used the STAR method to describe situations and outcomes.</p>
                      </div>
                      
                      <div className="rounded-lg border p-4">
                        <h4 className="font-medium mb-2">Communication Skills</h4>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm">Verbal Communication</span>
                          <span className="text-sm font-medium">8/10</span>
                        </div>
                        <p className="text-sm text-muted-foreground">You spoke clearly and at a good pace. Consider reducing filler words like "um" and "like" for more polished responses.</p>
                      </div>
                      
                      <div className="rounded-lg border p-4">
                        <h4 className="font-medium mb-2">Technical Knowledge</h4>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm">Domain Expertise</span>
                          <span className="text-sm font-medium">8.5/10</span>
                        </div>
                        <p className="text-sm text-muted-foreground">You demonstrated strong technical knowledge. Continue to work on explaining complex concepts in simple terms.</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Areas for Improvement</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="mt-1 h-4 w-4 text-boost-primary"><ArrowRight className="h-4 w-4" /></div>
                          <span className="text-sm">Provide more quantifiable achievements and metrics in your examples</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 h-4 w-4 text-boost-primary"><ArrowRight className="h-4 w-4" /></div>
                          <span className="text-sm">Practice more concise answers for behavioral questions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 h-4 w-4 text-boost-primary"><ArrowRight className="h-4 w-4" /></div>
                          <span className="text-sm">Improve your storytelling to make examples more memorable</span>
                        </li>
                      </ul>
                    </div>
                    
                    <Button className="w-full bg-boost-primary hover:bg-boost-primary/90">
                      Schedule Follow-up Practice Session
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="coach" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Interview Coaching</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get personalized advice from our AI coach to improve your interview skills.
                      </p>
                    </div>
                    
                    <div className="rounded-lg border bg-card p-6 min-h-[300px]">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="h-10 w-10 rounded-full bg-boost-light flex items-center justify-center">
                          <Bot className="h-5 w-5 text-boost-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Interview Coach</p>
                          <div className="space-y-2">
                            <p>I'm here to help you prepare for your upcoming interviews. What specific areas would you like to work on?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Textarea 
                        placeholder="Ask for interview tips, practice questions, or advice on specific scenarios..." 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <Button 
                        onClick={handleSendMessage}
                        className="h-full bg-boost-primary hover:bg-boost-primary/90"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Button variant="outline" className="text-sm justify-start">
                        <span className="mr-2">💼</span> How do I answer "What's your biggest weakness?"
                      </Button>
                      <Button variant="outline" className="text-sm justify-start">
                        <span className="mr-2">🤔</span> Tips for behavioral interviews
                      </Button>
                      <Button variant="outline" className="text-sm justify-start">
                        <span className="mr-2">💰</span> How to negotiate salary offers
                      </Button>
                      <Button variant="outline" className="text-sm justify-start">
                        <span className="mr-2">🧪</span> Practice technical interview questions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="lg:col-span-4">
          <div className="sticky top-20 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-medium mb-4">Interview Prep Checklist</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-boost-primary shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Research the company</h4>
                      <p className="text-xs text-muted-foreground">Understand the company's mission, values, and recent news</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-boost-primary shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Prepare your STAR stories</h4>
                      <p className="text-xs text-muted-foreground">Create examples of your achievements using the STAR method</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-muted-foreground shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Practice common questions</h4>
                      <p className="text-xs text-muted-foreground">Rehearse answers to frequently asked interview questions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-muted-foreground shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">Prepare questions to ask</h4>
                      <p className="text-xs text-muted-foreground">Develop thoughtful questions for your interviewers</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-medium mb-4">Interview Insights</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-boost-light p-2 rounded-full">
                      <Sparkles className="h-4 w-4 text-boost-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Most Asked Questions</h4>
                      <p className="text-xs text-muted-foreground">Our AI has analyzed thousands of interviews to identify the most common questions for your target role.</p>
                      <Button variant="link" size="sm" className="h-6 px-0 text-boost-primary">View Questions</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-boost-light p-2 rounded-full">
                      <Sparkles className="h-4 w-4 text-boost-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Key Competencies</h4>
                      <p className="text-xs text-muted-foreground">The top skills and competencies recruiters look for in your industry.</p>
                      <Button variant="link" size="sm" className="h-6 px-0 text-boost-primary">Explore Skills</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
