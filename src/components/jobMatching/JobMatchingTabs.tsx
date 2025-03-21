
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, Sparkles, CheckCircle, Briefcase } from "lucide-react";
import JobCard, { Job } from "./JobCard";

interface JobMatchingTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  jobMatches: Job[];
  handleSaveJob: (jobTitle: string) => void;
  handleApplyJob: (jobTitle: string) => void;
}

export default function JobMatchingTabs({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  jobMatches,
  handleSaveJob,
  handleApplyJob,
}: JobMatchingTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="matches" className="flex items-center gap-1">
          <Sparkles className="h-4 w-4" />
          <span className="hidden sm:inline">AI Matches</span>
        </TabsTrigger>
        <TabsTrigger value="saved" className="flex items-center gap-1">
          <CheckCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Saved Jobs</span>
        </TabsTrigger>
        <TabsTrigger value="applied" className="flex items-center gap-1">
          <Briefcase className="h-4 w-4" />
          <span className="hidden sm:inline">Applied</span>
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="matches" className="mt-6">
        <div className="relative mb-6">
          <Input
            placeholder="Search job titles, skills, or companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10"
          />
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-0 h-10 w-10"
          >
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="space-y-4">
          {jobMatches.map((job) => (
            <JobCard 
              key={job.id} 
              job={job} 
              onSave={handleSaveJob} 
              onApply={handleApplyJob}
            />
          ))}
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4 py-6">
                <h3 className="font-medium">Need more job recommendations?</h3>
                <p className="text-sm text-muted-foreground">Our AI needs more information about your preferences to find more matches.</p>
                <Button className="bg-boost-primary hover:bg-boost-primary/90">Complete Your Profile</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      
      <TabsContent value="saved" className="mt-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-4 py-6">
              <h3 className="font-medium">No saved jobs yet</h3>
              <p className="text-sm text-muted-foreground">As you browse job matches, save the ones you're interested in for easy access later.</p>
              <Button 
                onClick={() => setActiveTab("matches")}
                className="bg-boost-primary hover:bg-boost-primary/90"
              >
                Browse Job Matches
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="applied" className="mt-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-4 py-6">
              <h3 className="font-medium">No applications yet</h3>
              <p className="text-sm text-muted-foreground">When you apply for jobs, they'll appear here so you can track your applications.</p>
              <Button 
                onClick={() => setActiveTab("matches")}
                className="bg-boost-primary hover:bg-boost-primary/90"
              >
                Find Jobs to Apply
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
