
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, MapPin, DollarSign, Clock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  match: number;
  description: string;
  posted: string;
  skills: string[];
}

interface JobCardProps {
  job: Job;
  onSave: (jobTitle: string) => void;
  onApply: (jobTitle: string) => void;
}

export default function JobCard({ job, onSave, onApply }: JobCardProps) {
  const { isLoggedIn, setShowLoginModal, setPendingAction } = useAuth();

  const handleSaveJob = () => {
    if (!isLoggedIn) {
      setPendingAction(() => () => onSave(job.title));
      setShowLoginModal(true);
      return;
    }
    onSave(job.title);
  };

  const handleApplyJob = () => {
    if (!isLoggedIn) {
      setPendingAction(() => () => onApply(job.title));
      setShowLoginModal(true);
      return;
    }
    onApply(job.title);
  };

  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-lg">{job.title}</h3>
              <Badge className="bg-boost-primary hover:bg-boost-primary/90 hidden sm:flex">
                {job.match}% Match
              </Badge>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-sm">
                <Building className="h-3.5 w-3.5 text-muted-foreground" />
                <span>{job.company}</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <DollarSign className="h-3.5 w-3.5 text-muted-foreground" />
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                <span>Posted {job.posted}</span>
              </div>
            </div>
            
            <Badge className="bg-boost-primary hover:bg-boost-primary/90 sm:hidden">
              {job.match}% Match
            </Badge>
            
            <p className="text-sm text-muted-foreground">{job.description}</p>
            
            <div className="flex flex-wrap gap-2 pt-1">
              {job.skills.map((skill, index) => (
                <Badge key={index} variant="outline">{skill}</Badge>
              ))}
            </div>
          </div>
          
          <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
            <Button 
              variant="outline" 
              className="flex-1 sm:w-full"
              onClick={handleSaveJob}
            >
              Save Job
            </Button>
            <Button 
              className="flex-1 sm:w-full bg-boost-primary hover:bg-boost-primary/90"
              onClick={handleApplyJob}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
