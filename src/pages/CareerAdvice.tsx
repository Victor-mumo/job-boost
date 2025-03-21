
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, ArrowRight, Briefcase, GraduationCap, TrendingUp } from "lucide-react";

export default function CareerAdvice() {
  const [activeTab, setActiveTab] = useState("articles");
  
  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Career <span className="bg-gradient-to-r from-boost-primary to-boost-secondary bg-clip-text text-transparent">Advice</span> Hub
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Expert advice, industry trends, and career development resources
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="articles" className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Articles</span>
              </TabsTrigger>
              <TabsTrigger value="success-stories" className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                <span className="hidden sm:inline">Success Stories</span>
              </TabsTrigger>
              <TabsTrigger value="resources" className="flex items-center gap-1">
                <GraduationCap className="h-4 w-4" />
                <span className="hidden sm:inline">Resources</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="articles" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-2">10 Essential Skills for Remote Work Success</h3>
                    <p className="text-sm text-muted-foreground mb-4">How to thrive in the age of distributed teams and virtual collaboration.</p>
                    <Button variant="outline" size="sm" className="w-full">Read Article</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-2">Navigating Career Transitions in Tech</h3>
                    <p className="text-sm text-muted-foreground mb-4">Strategic approaches for making successful career changes in technology.</p>
                    <Button variant="outline" size="sm" className="w-full">Read Article</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-2">Building a Personal Brand for Professional Growth</h3>
                    <p className="text-sm text-muted-foreground mb-4">Why personal branding matters and how to establish yourself as a thought leader.</p>
                    <Button variant="outline" size="sm" className="w-full">Read Article</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-2">Mastering the Art of Networking in a Digital World</h3>
                    <p className="text-sm text-muted-foreground mb-4">Strategies for building meaningful professional connections online.</p>
                    <Button variant="outline" size="sm" className="w-full">Read Article</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="success-stories" className="mt-6">
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="h-16 w-16 rounded-full bg-boost-light flex items-center justify-center text-boost-primary font-semibold">SJ</div>
                      <div className="flex-1">
                        <h3 className="font-medium text-lg">From Marketing to Product Management</h3>
                        <p className="text-sm text-muted-foreground my-2">Sarah Johnson shares how she successfully transitioned from a marketing role to lead product at a SaaS company.</p>
                        <Button variant="outline" size="sm">Read Sarah's Story</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="h-16 w-16 rounded-full bg-boost-light flex items-center justify-center text-boost-primary font-semibold">DT</div>
                      <div className="flex-1">
                        <h3 className="font-medium text-lg">Breaking into Tech Without a CS Degree</h3>
                        <p className="text-sm text-muted-foreground my-2">David Thompson explains his journey from retail to software engineering without a traditional computer science background.</p>
                        <Button variant="outline" size="sm">Read David's Story</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="h-16 w-16 rounded-full bg-boost-light flex items-center justify-center text-boost-primary font-semibold">LC</div>
                      <div className="flex-1">
                        <h3 className="font-medium text-lg">Launching a Freelance Career</h3>
                        <p className="text-sm text-muted-foreground my-2">Lisa Chen details how she built a six-figure freelance design business after leaving her agency job.</p>
                        <Button variant="outline" size="sm">Read Lisa's Story</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="resources" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-2">Career Development Courses</h3>
                    <p className="text-sm text-muted-foreground mb-4">Curated selections of the best online courses for career advancement.</p>
                    <Button variant="outline" size="sm" className="w-full">Browse Courses</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-2">E-books & Guides</h3>
                    <p className="text-sm text-muted-foreground mb-4">Comprehensive guides on various career topics and industry trends.</p>
                    <Button variant="outline" size="sm" className="w-full">View Library</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-2">Industry Reports</h3>
                    <p className="text-sm text-muted-foreground mb-4">Data-driven insights on salary trends, in-demand skills, and hiring practices.</p>
                    <Button variant="outline" size="sm" className="w-full">Access Reports</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-2">Career Assessment Tools</h3>
                    <p className="text-sm text-muted-foreground mb-4">Discover your strengths, interests, and ideal career paths with our assessment suite.</p>
                    <Button variant="outline" size="sm" className="w-full">Take Assessment</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="lg:col-span-4">
          <div className="sticky top-20 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Featured Content</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-boost-light p-2 rounded-full">
                      <Briefcase className="h-4 w-4 text-boost-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">2023 Tech Salary Guide</h4>
                      <p className="text-xs text-muted-foreground">Comprehensive salary data across 20+ tech roles</p>
                      <Button variant="link" size="sm" className="h-6 px-0 text-boost-primary">
                        Download Guide
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-boost-light p-2 rounded-full">
                      <Briefcase className="h-4 w-4 text-boost-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">The Future of Work Report</h4>
                      <p className="text-xs text-muted-foreground">Emerging trends reshaping careers and workplaces</p>
                      <Button variant="link" size="sm" className="h-6 px-0 text-boost-primary">
                        Read Report
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Career Webinars</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm">Job Search Strategies for Competitive Markets</h4>
                    <p className="text-xs text-muted-foreground my-1">July 15, 2023 • 2:00 PM EST</p>
                    <Button size="sm" className="mt-2 bg-boost-primary hover:bg-boost-primary/90">
                      Register Now <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm">Negotiation Tactics for Better Job Offers</h4>
                    <p className="text-xs text-muted-foreground my-1">July 22, 2023 • 1:00 PM EST</p>
                    <Button size="sm" className="mt-2 bg-boost-primary hover:bg-boost-primary/90">
                      Register Now <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
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
