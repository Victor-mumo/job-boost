
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import JobMatchingFilters from "@/components/jobMatching/JobMatchingFilters";
import JobMatchingTabs from "@/components/jobMatching/JobMatchingTabs";
import { Job } from "@/components/jobMatching/JobCard";

export default function JobMatching() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("matches");
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleUploadResume = () => {
    toast({
      title: "Resume Uploaded",
      description: "We're analyzing your skills and experience to find the perfect job matches.",
    });
  };
  
  const handleApplyFilters = () => {
    toast({
      title: "Filters Applied",
      description: "Your job matches have been updated based on your preferences.",
    });
  };
  
  const handleSaveJob = (jobTitle: string) => {
    toast({
      title: "Job Saved",
      description: `${jobTitle} has been added to your saved jobs.`,
    });
  };
  
  const handleApplyJob = (jobTitle: string) => {
    toast({
      title: "Application Started",
      description: `You're now applying to ${jobTitle}. Complete your application to submit.`,
    });
  };

  // Sample job matches
  const jobMatches: Job[] = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Innovate Tech",
      location: "Remote",
      salary: "$120,000 - $150,000",
      match: 95,
      description: "Join our team to build innovative web applications using React, TypeScript, and modern frontend tools.",
      posted: "2 days ago",
      skills: ["React", "TypeScript", "CSS", "Frontend Development"]
    },
    {
      id: 2,
      title: "Product Manager",
      company: "GrowthCorp",
      location: "San Francisco, CA",
      salary: "$130,000 - $160,000",
      match: 92,
      description: "Lead product development initiatives for our SaaS platform, working closely with engineering and design teams.",
      posted: "1 week ago",
      skills: ["Product Strategy", "Agile", "User Research", "Roadmapping"]
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "DataSphere",
      location: "New York, NY (Hybrid)",
      salary: "$115,000 - $145,000",
      match: 88,
      description: "Build end-to-end solutions for our data analytics platform using modern web technologies and cloud infrastructure.",
      posted: "3 days ago",
      skills: ["JavaScript", "Node.js", "React", "AWS", "MongoDB"]
    },
  ];

  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          AI-Powered <span className="bg-gradient-to-r from-boost-primary to-boost-secondary bg-clip-text text-transparent">Job Matching</span>
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Find jobs that perfectly match your skills, experience, and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <JobMatchingFilters 
            handleUploadResume={handleUploadResume}
            handleApplyFilters={handleApplyFilters}
          />
        </div>
        
        <div className="lg:col-span-8">
          <JobMatchingTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            jobMatches={jobMatches}
            handleSaveJob={handleSaveJob}
            handleApplyJob={handleApplyJob}
          />
        </div>
      </div>
    </div>
  );
}
