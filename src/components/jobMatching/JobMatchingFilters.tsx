
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Upload, Filter } from "lucide-react";

interface JobMatchingFiltersProps {
  handleUploadResume: () => void;
  handleApplyFilters: () => void;
}

export default function JobMatchingFilters({
  handleUploadResume,
  handleApplyFilters
}: JobMatchingFiltersProps) {
  return (
    <div className="sticky top-20 space-y-6">
      <Card>
        <CardContent className="pt-6">
          <h3 className="font-medium mb-4">Upload Your Resume</h3>
          <p className="text-sm text-muted-foreground mb-4">
            For the most accurate job matches, upload your resume so our AI can analyze your skills and experience.
          </p>
          <Button 
            className="w-full mb-4 bg-boost-primary hover:bg-boost-primary/90"
            onClick={handleUploadResume}
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload Resume
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Your resume data is securely stored and only used to match you with relevant jobs.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Job Preferences</h3>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleApplyFilters}
            >
              <Filter className="mr-2 h-3 w-3" />
              Apply
            </Button>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Job Type</Label>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="justify-start">Full-time</Button>
                <Button variant="outline" className="justify-start">Part-time</Button>
                <Button variant="outline" className="justify-start">Contract</Button>
                <Button variant="outline" className="justify-start">Freelance</Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Location</Label>
              <Input placeholder="City, state, or remote" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Salary Range</Label>
                <span className="text-sm">$80k - $160k+</span>
              </div>
              <Slider defaultValue={[80, 160]} min={0} max={200} step={10} />
            </div>
            
            <div className="space-y-2">
              <Label>Experience Level</Label>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="justify-start">Entry-level</Button>
                <Button variant="outline" className="justify-start">Mid-level</Button>
                <Button variant="outline" className="justify-start">Senior</Button>
                <Button variant="outline" className="justify-start">Executive</Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <Label>Additional Preferences</Label>
              <div className="flex items-center justify-between">
                <Label htmlFor="remote" className="text-sm font-normal cursor-pointer">Remote Work</Label>
                <Switch id="remote" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="recently-added" className="text-sm font-normal cursor-pointer">Recently Added</Label>
                <Switch id="recently-added" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="easy-apply" className="text-sm font-normal cursor-pointer">Easy Apply Only</Label>
                <Switch id="easy-apply" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
