import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { DollarSign, Search, ChevronDown, ChevronsRight, Info, BarChart4, TrendingUp, ArrowUpRight, ArrowDownRight, Sparkles } from "lucide-react";

export default function SalaryInsights() {
  const { toast } = useToast();
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [salaryData, setSalaryData] = useState(null);

  const handleSearch = () => {
    if (!jobTitle) {
      toast({
        title: "Missing information",
        description: "Please enter at least a job title to search",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Searching salary data",
      description: "Please wait while we gather the latest information",
    });

    // In a real implementation, you'd call your AI service here
    setTimeout(() => {
      const mockSalaryData = {
        jobTitle: jobTitle,
        location: location || "United States",
        averageSalary: "$95,000",
        salaryRange: "$82,000 - $120,000",
        medianSalary: "$97,500",
        experienceBreakdown: [
          { level: "Entry Level (0-2 years)", salary: "$75,000 - $85,000" },
          { level: "Mid Level (3-5 years)", salary: "$85,000 - $110,000" },
          { level: "Senior Level (6+ years)", salary: "$110,000 - $145,000" },
        ],
        locationComparison: [
          { name: "San Francisco", salary: "$125,000", difference: "+30%" },
          { name: "New York", salary: "$115,000", difference: "+20%" },
          { name: "Austin", salary: "$100,000", difference: "+5%" },
          { name: "Chicago", salary: "$90,000", difference: "-5%" },
          { name: "Remote", salary: "$98,000", difference: "+3%" },
        ],
        negotiationTips: [
          "Research comparable salaries in your area for leverage",
          "Highlight specialized skills that add value",
          "Consider the entire compensation package, not just salary",
          "Be prepared to justify your salary request with achievements",
          "Practice your negotiation approach beforehand",
        ],
        industryTrend: "increasing",
        marketDemand: "high",
        skillPremiums: [
          { skill: "AWS", premium: "+15%" },
          { skill: "React", premium: "+12%" },
          { skill: "Python", premium: "+10%" },
          { skill: "Machine Learning", premium: "+18%" },
        ],
      };

      setSalaryData(mockSalaryData);

      toast({
        title: "Salary insights ready",
        description: "View your personalized salary information",
      });
    }, 1500);
  };

  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          <span className="bg-gradient-to-r from-boost-primary to-boost-secondary bg-clip-text text-transparent">Salary Insights</span> & Negotiation Tips
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Make informed career decisions with accurate, up-to-date salary data and expert negotiation advice
        </p>
      </div>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="job-title">Job Title</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="job-title"
                  placeholder="e.g. Software Engineer"
                  className="pl-9"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="e.g. San Francisco, CA"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="experience">Experience Level</Label>
              <Select value={experience} onValueChange={setExperience}>
                <SelectTrigger id="experience">
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                  <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                  <SelectItem value="senior">Senior Level (6+ years)</SelectItem>
                  <SelectItem value="exec">Executive (10+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <Button onClick={handleSearch} className="bg-boost-primary hover:bg-boost-primary/90 px-8">
              <DollarSign className="mr-2 h-4 w-4" />
              Get Salary Insights
            </Button>
          </div>
        </CardContent>
      </Card>

      {salaryData && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-boost-dark to-boost-primary text-white">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Average Salary</h3>
                  <DollarSign className="h-5 w-5 text-boost-light/80" />
                </div>
                <div className="mt-6">
                  <p className="text-4xl font-bold">{salaryData.averageSalary}</p>
                  <p className="text-sm text-white/70 mt-1">Range: {salaryData.salaryRange}</p>
                </div>
                <div className="mt-4 text-xs text-white/70">
                  {salaryData.jobTitle} in {salaryData.location}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Market Demand</h3>
                  <div className="flex items-center text-green-500">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm">Job market trend is <span className="font-medium text-green-500">{salaryData.industryTrend}</span></p>
                  <p className="text-sm mt-1">Demand for this role is <span className="font-medium">{salaryData.marketDemand}</span></p>
                </div>
                <div className="mt-4">
                  <Label className="text-xs">Demand Forecast (12 months)</Label>
                  <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                    <div className="h-2 w-3/4 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Experience Impact</h3>
                  <BarChart4 className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="mt-4 space-y-3">
                  {salaryData.experienceBreakdown.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm">
                        <span>{item.level}</span>
                        <span className="font-medium">{item.salary}</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded-full mt-1">
                        <div 
                          className="h-2 bg-boost-primary rounded-full" 
                          style={{ width: `${60 + index * 15}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Info className="h-5 w-5 text-boost-primary" /> 
                  Negotiation Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {salaryData.negotiationTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ChevronsRight className="h-5 w-5 text-boost-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BarChart4 className="h-5 w-5 text-boost-primary" /> 
                  Salary by Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {salaryData.locationComparison.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm">{item.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{item.salary}</span>
                        <span className={`text-xs flex items-center ${
                          item.difference.startsWith("+") ? "text-green-500" : "text-red-500"
                        }`}>
                          {item.difference.startsWith("+") ? (
                            <ArrowUpRight className="h-3 w-3 mr-0.5" />
                          ) : (
                            <ArrowDownRight className="h-3 w-3 mr-0.5" />
                          )}
                          {item.difference}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-boost-primary" /> 
                Skills That Increase Your Market Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {salaryData.skillPremiums.map((item, index) => (
                  <Card key={index} className="border-dashed">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <p className="font-medium">{item.skill}</p>
                        <p className="text-2xl font-bold text-boost-primary mt-2">{item.premium}</p>
                        <p className="text-xs text-muted-foreground mt-1">Salary Premium</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
