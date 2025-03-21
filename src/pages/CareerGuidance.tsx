
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useAI } from "@/contexts/AIContext";
import { MessageSquare, BookOpen, Zap, ArrowRight, Calendar, User, Search, Loader2 } from "lucide-react";

interface Message {
  sender: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export default function CareerGuidance() {
  const { toast } = useToast();
  const { getCareerAdvice, isAIReady, isLoading } = useAI();
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("chat");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'user',
      content: "I'm looking for advice on transitioning from marketing to product management.",
      timestamp: new Date(Date.now() - 120000)
    },
    {
      sender: 'ai',
      content: "That's a great career move! Product management and marketing share many skills like user understanding and strategic thinking. Here are some steps to help with your transition:\n\n• Identify transferable skills from your marketing background\n• Take product management courses or certifications\n• Build a product portfolio with side projects\n• Network with product managers in your target industry\n• Consider an internal transfer within your company\n\nWhat specific aspect of product management interests you most?",
      timestamp: new Date(Date.now() - 60000)
    }
  ]);
  
  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    // Add user message to chat
    const userMessage: Message = {
      sender: 'user',
      content: message,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Clear the input after sending
    setMessage("");
    
    // Show loading indicator
    toast({
      title: "Processing your question",
      description: "Our AI career advisor is thinking..."
    });
    
    try {
      // Get AI response
      const aiResponse = await getCareerAdvice(message);
      
      // Add AI response to chat
      const aiMessage: Message = {
        sender: 'ai',
        content: aiResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error getting career advice:', error);
      
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          AI <span className="bg-gradient-to-r from-boost-primary to-boost-secondary bg-clip-text text-transparent">Career Guidance</span> Advisor
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Get personalized career advice, industry insights, and professional development tips
        </p>
        {!isAIReady && (
          <div className="mt-4 flex items-center justify-center text-sm text-muted-foreground">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading AI capabilities... This may take a moment on your first visit.
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="chat" className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" />
                <span className="hidden sm:inline">Career Chat</span>
              </TabsTrigger>
              <TabsTrigger value="resources" className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Resources</span>
              </TabsTrigger>
              <TabsTrigger value="mentors" className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Find Mentors</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="chat" className="mt-6">
              <Card className="border-none shadow-none">
                <CardContent className="p-0">
                  <div className="rounded-lg border bg-card p-6 mb-4 min-h-[400px] flex flex-col">
                    <div className="flex-1 space-y-4 overflow-y-auto max-h-[400px]">
                      {messages.map((msg, index) => (
                        <div 
                          key={index} 
                          className={`${
                            msg.sender === 'user' 
                              ? 'bg-boost-light ml-auto' 
                              : 'bg-muted mr-auto'
                          } rounded-lg p-4 max-w-[80%]`}
                        >
                          <p className="text-sm text-muted-foreground mb-1">
                            {msg.sender === 'user' ? 'You' : 'Career Advisor'}
                          </p>
                          <div className="whitespace-pre-line">{msg.content}</div>
                        </div>
                      ))}
                      
                      {isLoading && (
                        <div className="bg-muted rounded-lg p-4 mr-auto max-w-[80%] flex items-center">
                          <Loader2 className="h-4 w-4 animate-spin mr-2" />
                          <p>AI is thinking...</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Textarea 
                      placeholder="Ask a question about your career path..." 
                      className="min-h-[80px]"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={isLoading || !isAIReady}
                    />
                    <Button 
                      onClick={handleSendMessage}
                      className="h-full bg-boost-primary hover:bg-boost-primary/90"
                      disabled={isLoading || !isAIReady || !message.trim()}
                    >
                      {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <ArrowRight className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="resources" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                      <h3 className="font-medium mb-2">Career Change Playbook</h3>
                      <p className="text-sm text-muted-foreground mb-3">A comprehensive guide to successfully navigating career transitions.</p>
                      <Button variant="outline" size="sm" className="w-full">Download PDF</Button>
                    </div>
                    
                    <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                      <h3 className="font-medium mb-2">Tech Industry Trends 2023</h3>
                      <p className="text-sm text-muted-foreground mb-3">Latest insights on emerging technologies and job market demands.</p>
                      <Button variant="outline" size="sm" className="w-full">View Report</Button>
                    </div>
                    
                    <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                      <h3 className="font-medium mb-2">Skill Development Courses</h3>
                      <p className="text-sm text-muted-foreground mb-3">Curated courses to help you build relevant skills for your target role.</p>
                      <Button variant="outline" size="sm" className="w-full">Browse Courses</Button>
                    </div>
                    
                    <div className="rounded-lg border p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                      <h3 className="font-medium mb-2">Networking Strategies</h3>
                      <p className="text-sm text-muted-foreground mb-3">Effective approaches to building professional connections.</p>
                      <Button variant="outline" size="sm" className="w-full">Read Article</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="mentors" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search mentors by industry, company, or expertise..."
                        className="pl-8"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-full bg-boost-light flex items-center justify-center text-boost-primary font-semibold">JS</div>
                        <div>
                          <h3 className="font-medium">Jennifer Smith</h3>
                          <p className="text-sm text-muted-foreground">Product Director at TechCorp</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Button size="sm" variant="outline" className="h-8">View Profile</Button>
                            <Button size="sm" className="h-8 bg-boost-primary hover:bg-boost-primary/90">Request Mentorship</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-full bg-boost-light flex items-center justify-center text-boost-primary font-semibold">MJ</div>
                        <div>
                          <h3 className="font-medium">Michael Johnson</h3>
                          <p className="text-sm text-muted-foreground">Senior Product Manager at InnovateCo</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Button size="sm" variant="outline" className="h-8">View Profile</Button>
                            <Button size="sm" className="h-8 bg-boost-primary hover:bg-boost-primary/90">Request Mentorship</Button>
                          </div>
                        </div>
                      </div>
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
                <h3 className="font-medium mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-boost-light p-2 rounded-full">
                      <Calendar className="h-4 w-4 text-boost-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Tech Career Fair</h4>
                      <p className="text-xs text-muted-foreground">August 15, 2023 • Virtual</p>
                      <Button variant="link" size="sm" className="h-6 px-0 text-boost-primary">Register Now</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-boost-light p-2 rounded-full">
                      <Calendar className="h-4 w-4 text-boost-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Resume Workshop</h4>
                      <p className="text-xs text-muted-foreground">August 22, 2023 • Virtual</p>
                      <Button variant="link" size="sm" className="h-6 px-0 text-boost-primary">Register Now</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-medium mb-4">Career Tips</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-boost-light p-2 rounded-full">
                      <Zap className="h-4 w-4 text-boost-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Master the behavioral interview</h4>
                      <p className="text-xs text-muted-foreground">Learn the STAR method for answering tough questions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-boost-light p-2 rounded-full">
                      <Zap className="h-4 w-4 text-boost-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Optimize your LinkedIn profile</h4>
                      <p className="text-xs text-muted-foreground">Make your profile stand out to recruiters</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-boost-light p-2 rounded-full">
                      <Zap className="h-4 w-4 text-boost-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Negotiate your salary offer</h4>
                      <p className="text-xs text-muted-foreground">Strategies to maximize your compensation package</p>
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
