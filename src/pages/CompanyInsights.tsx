
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Building, Search, MapPin, Briefcase, DollarSign, Star, BarChart3, TrendingUp, UserCheck, ThumbsUp, ThumbsDown } from "lucide-react";

export default function CompanyInsights() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState({
    name: "TechCorp Inc.",
    logo: "TC",
    industry: "Technology",
    location: "San Francisco, CA",
    size: "1,000-5,000 employees",
    founded: "2005",
    website: "www.techcorp.com",
    rating: 4.2,
    salaryRating: 4.0,
    cultureRating: 4.5,
    workLifeRating: 3.8,
    careerRating: 4.3,
    pros: [
      "Great work-life balance",
      "Competitive compensation",
      "Strong culture of innovation",
      "Good career growth opportunities"
    ],
    cons: [
      "Can be fast-paced and demanding at times",
      "Some teams experience occasional deadline pressure",
      "Limited remote work options in some departments"
    ],
    salaries: [
      { role: "Software Engineer", range: "$120,000 - $160,000", average: 140000 },
      { role: "Product Manager", range: "$130,000 - $180,000", average: 155000 },
      { role: "UX Designer", range: "$110,000 - $150,000", average: 130000 },
      { role: "Data Scientist", range: "$125,000 - $170,000", average: 147500 }
    ]
  });
  
  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    toast({
      title: "Searching Companies",
      description: `Finding insights for "${searchQuery}"...`,
    });
    
    // In a real implementation, you'd call your API to search for companies
    // For now, we'll just clear the search input
    setSearchQuery("");
  };

  const handleAddReview = () => {
    toast({
      title: "Add Company Review",
      description: "Thank you for sharing your experience! Your review will help others in their career decisions.",
    });
  };

  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Company <span className="bg-gradient-to-r from-boost-primary to-boost-secondary bg-clip-text text-transparent">Insights</span> & Reviews
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Research companies, explore salaries, and read insider reviews before applying
        </p>
      </div>
      
      <div className="relative mx-auto max-w-3xl mb-10">
        <div className="flex items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for a company..."
              className="pl-9 pr-20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button 
            onClick={handleSearch}
            className="ml-2 bg-boost-primary hover:bg-boost-primary/90"
          >
            Search
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 rounded-md bg-boost-light flex items-center justify-center text-xl font-bold text-boost-primary">
                  {selectedCompany.logo}
                </div>
                <div>
                  <h2 className="text-xl font-bold">{selectedCompany.name}</h2>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium">{selectedCompany.rating}</span>
                    <span className="text-sm text-muted-foreground">(346 reviews)</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{selectedCompany.industry}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{selectedCompany.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCheck className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{selectedCompany.size}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Founded: {selectedCompany.founded}</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Salary & Benefits</span>
                  <div className="flex">
                    {[1, 2, 3, 4].map((i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i <= selectedCompany.salaryRating ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`} 
                      />
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Culture & Values</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i <= selectedCompany.cultureRating ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`} 
                      />
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Work-Life Balance</span>
                  <div className="flex">
                    {[1, 2, 3, 4].map((i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i <= selectedCompany.workLifeRating ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`} 
                      />
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Career Opportunities</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i <= selectedCompany.careerRating ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={handleAddReview}
                className="w-full bg-boost-primary hover:bg-boost-primary/90"
              >
                Add a Review
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview" className="flex items-center gap-1">
                <Building className="h-4 w-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="salaries" className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" />
                <span className="hidden sm:inline">Salaries</span>
              </TabsTrigger>
              <TabsTrigger value="reviews" className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                <span className="hidden sm:inline">Reviews</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Company Overview</h3>
                      <p className="text-sm text-muted-foreground">
                        TechCorp Inc. is a leading technology company that specializes in cloud computing, artificial intelligence, and enterprise software solutions. With a strong focus on innovation, TechCorp has been disrupting the tech industry since its founding in 2005.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-md font-medium mb-2 flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4 text-green-500" />
                          Pros
                        </h4>
                        <ul className="space-y-2">
                          {selectedCompany.pros.map((pro, i) => (
                            <li key={i} className="text-sm flex items-start gap-2">
                              <span className="text-green-500 mt-1">•</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-md font-medium mb-2 flex items-center gap-1">
                          <ThumbsDown className="h-4 w-4 text-red-500" />
                          Cons
                        </h4>
                        <ul className="space-y-2">
                          {selectedCompany.cons.map((con, i) => (
                            <li key={i} className="text-sm flex items-start gap-2">
                              <span className="text-red-500 mt-1">•</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Growth & Outlook</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <BarChart3 className="h-4 w-4 text-boost-primary" />
                              <h4 className="text-sm font-medium">Growth Rate</h4>
                            </div>
                            <p className="text-xl font-bold">25%</p>
                            <p className="text-xs text-muted-foreground">Year over year</p>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <TrendingUp className="h-4 w-4 text-boost-primary" />
                              <h4 className="text-sm font-medium">Hiring Trend</h4>
                            </div>
                            <p className="text-xl font-bold">+15%</p>
                            <p className="text-xs text-muted-foreground">Increasing headcount</p>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <Briefcase className="h-4 w-4 text-boost-primary" />
                              <h4 className="text-sm font-medium">Open Positions</h4>
                            </div>
                            <p className="text-xl font-bold">124</p>
                            <p className="text-xs text-muted-foreground">Active job openings</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="salaries" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Salary Data</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Explore salary information for various roles at TechCorp Inc., based on employee reports and market data.
                      </p>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium">Job Title</th>
                            <th className="text-left py-3 px-4 font-medium">Salary Range</th>
                            <th className="text-left py-3 px-4 font-medium">Average</th>
                            <th className="text-left py-3 px-4 font-medium">Comparison</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedCompany.salaries.map((salary, i) => (
                            <tr key={i} className="border-b">
                              <td className="py-3 px-4">{salary.role}</td>
                              <td className="py-3 px-4">{salary.range}</td>
                              <td className="py-3 px-4 font-medium">${salary.average.toLocaleString()}</td>
                              <td className="py-3 px-4">
                                <span className="text-green-500 text-xs font-medium">+8% above market</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div>
                      <h4 className="text-md font-medium mb-3">Benefits & Perks</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <div className="border rounded-md p-3 text-sm flex flex-col items-center justify-center text-center">
                          <span className="text-lg mb-1">🏥</span>
                          <span>Health Insurance</span>
                        </div>
                        <div className="border rounded-md p-3 text-sm flex flex-col items-center justify-center text-center">
                          <span className="text-lg mb-1">💰</span>
                          <span>401(k) Match</span>
                        </div>
                        <div className="border rounded-md p-3 text-sm flex flex-col items-center justify-center text-center">
                          <span className="text-lg mb-1">🏝️</span>
                          <span>Unlimited PTO</span>
                        </div>
                        <div className="border rounded-md p-3 text-sm flex flex-col items-center justify-center text-center">
                          <span className="text-lg mb-1">🏠</span>
                          <span>Remote Work</span>
                        </div>
                        <div className="border rounded-md p-3 text-sm flex flex-col items-center justify-center text-center">
                          <span className="text-lg mb-1">📚</span>
                          <span>Education Benefits</span>
                        </div>
                        <div className="border rounded-md p-3 text-sm flex flex-col items-center justify-center text-center">
                          <span className="text-lg mb-1">🍎</span>
                          <span>Wellness Programs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Employee Reviews</h3>
                      <Button variant="outline" size="sm">
                        Filter Reviews
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-medium">Software Engineer</h4>
                            <p className="text-xs text-muted-foreground">Current Employee • 2+ years</p>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <Star key={i} className={`h-4 w-4 ${i <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`} />
                            ))}
                          </div>
                        </div>
                        <h5 className="font-medium text-sm mb-2">Great culture and work-life balance</h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          I've been working at TechCorp for over 2 years and have really enjoyed my time here. The culture is collaborative, and there's a strong emphasis on work-life balance. The technical challenges are interesting, and I've had opportunities to grow my skills.
                        </p>
                        <div className="flex gap-2">
                          <div className="bg-muted text-xs rounded-full px-2 py-1">Culture</div>
                          <div className="bg-muted text-xs rounded-full px-2 py-1">Work-Life Balance</div>
                          <div className="bg-muted text-xs rounded-full px-2 py-1">Career Growth</div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-medium">Product Manager</h4>
                            <p className="text-xs text-muted-foreground">Current Employee • 1+ years</p>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <Star key={i} className={`h-4 w-4 ${i <= 5 ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`} />
                            ))}
                          </div>
                        </div>
                        <h5 className="font-medium text-sm mb-2">Innovative company with amazing benefits</h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          TechCorp is truly an innovative company that values its employees. The benefits are amazing, and there's a strong focus on professional development. Leadership is transparent and accessible, which creates a positive work environment.
                        </p>
                        <div className="flex gap-2">
                          <div className="bg-muted text-xs rounded-full px-2 py-1">Benefits</div>
                          <div className="bg-muted text-xs rounded-full px-2 py-1">Innovation</div>
                          <div className="bg-muted text-xs rounded-full px-2 py-1">Leadership</div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-medium">UX Designer</h4>
                            <p className="text-xs text-muted-foreground">Former Employee • 3+ years</p>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <Star key={i} className={`h-4 w-4 ${i <= 3 ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`} />
                            ))}
                          </div>
                        </div>
                        <h5 className="font-medium text-sm mb-2">Good experience but limited design resources</h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          My experience at TechCorp was generally positive, but there were limitations in design resources and tooling. The team was supportive, but design sometimes took a backseat to engineering priorities. Career growth was slower than expected.
                        </p>
                        <div className="flex gap-2">
                          <div className="bg-muted text-xs rounded-full px-2 py-1">Team Culture</div>
                          <div className="bg-muted text-xs rounded-full px-2 py-1">Resources</div>
                          <div className="bg-muted text-xs rounded-full px-2 py-1">Career Path</div>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full">Load More Reviews</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
