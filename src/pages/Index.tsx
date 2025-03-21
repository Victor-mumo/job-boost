
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  FileText, 
  MessageSquare, 
  Briefcase, 
  DollarSign, 
  Building, 
  PenTool, 
  Search, 
  CheckCircle, 
  BookOpen,
  Sparkles,
  Zap,
  Globe,
  Send,
  Smartphone,
  Award,
  Download,
  Share2,
  Bot
} from "lucide-react";
import ResumeTemplateSlider from "@/components/resume/ResumeTemplateSlider";

export default function Index() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  <p className="bg-gradient-to-r from-boost-primary to-boost-secondary bg-clip-text text-transparent">
                    Your Career, Supercharged
                  </p>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Power Your Career With <span className="bg-gradient-to-r from-boost-primary to-boost-secondary bg-clip-text text-transparent">AI</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Create standout resumes, compelling cover letters, and prepare for interviews – all powered by advanced AI.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button asChild size="lg" className="bg-gradient-to-r from-boost-primary to-boost-secondary hover:from-boost-primary/90 hover:to-boost-secondary/90">
                  <Link to="/resume-builder">
                    Build My Resume
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/cover-letter-generator">
                    Create Cover Letter
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-boost-primary" />
                <span>AI-Powered</span>
                <CheckCircle className="ml-2 h-4 w-4 text-boost-primary" />
                <span>ATS-Optimized</span>
                <CheckCircle className="ml-2 h-4 w-4 text-boost-primary" />
                <span>100% Free to Start</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-boost-primary to-boost-secondary opacity-30 blur-xl"></div>
                <div className="relative rounded-xl border bg-card p-6 shadow-lg">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-boost-primary" />
                      <span className="font-medium">Professional Resume</span>
                    </div>
                    <div className="rounded-lg border p-3">
                      <div className="space-y-2">
                        <div className="h-4 w-full rounded-full bg-muted"></div>
                        <div className="h-4 w-3/4 rounded-full bg-muted"></div>
                        <div className="h-4 w-5/6 rounded-full bg-muted"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-boost-secondary" />
                      <span className="font-medium">Work Experience</span>
                    </div>
                    <div className="rounded-lg border p-3">
                      <div className="space-y-2">
                        <div className="h-4 w-full rounded-full bg-muted"></div>
                        <div className="h-4 w-5/6 rounded-full bg-muted"></div>
                        <div className="h-4 w-4/5 rounded-full bg-muted"></div>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-boost-primary to-boost-secondary hover:from-boost-primary/90 hover:to-boost-secondary/90">
                      <Sparkles className="mr-2 h-4 w-4" /> Generate with AI
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                <p className="bg-gradient-to-r from-boost-primary to-boost-secondary bg-clip-text text-transparent">
                  AI-Powered Features
                </p>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Everything You Need to Land Your Dream Job
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our suite of AI tools helps you create professional resumes, prepare for interviews, and navigate your career journey with confidence.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Link to="/resume-builder" className="block">
              <Card className="feature-card h-full transition-all hover:shadow-md">
                <CardContent className="p-0 pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-boost-light">
                      <FileText className="h-6 w-6 text-boost-primary" />
                    </div>
                    <h3 className="text-xl font-bold">AI Resume Builder</h3>
                    <p className="text-sm text-muted-foreground">
                      Create a professional, ATS-optimized resume in minutes with our AI-powered builder.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link to="/cover-letter-generator" className="block">
              <Card className="feature-card h-full transition-all hover:shadow-md">
                <CardContent className="p-0 pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-boost-light">
                      <PenTool className="h-6 w-6 text-boost-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Cover Letter Generator</h3>
                    <p className="text-sm text-muted-foreground">
                      Craft compelling, personalized cover letters tailored to each job application.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link to="/interview-prep" className="block">
              <Card className="feature-card h-full transition-all hover:shadow-md">
                <CardContent className="p-0 pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-boost-light">
                      <MessageSquare className="h-6 w-6 text-boost-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Interview Preparation</h3>
                    <p className="text-sm text-muted-foreground">
                      Prepare for interviews with AI-generated questions and feedback on your answers.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link to="/job-matching" className="block">
              <Card className="feature-card h-full transition-all hover:shadow-md">
                <CardContent className="p-0 pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-boost-light">
                      <Search className="h-6 w-6 text-boost-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Job Matching</h3>
                    <p className="text-sm text-muted-foreground">
                      Find the perfect job matches based on your skills, experience, and preferences.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link to="/salary-insights" className="block">
              <Card className="feature-card h-full transition-all hover:shadow-md">
                <CardContent className="p-0 pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-boost-light">
                      <DollarSign className="h-6 w-6 text-boost-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Salary Insights</h3>
                    <p className="text-sm text-muted-foreground">
                      Get accurate salary estimates and negotiation tips for your target roles.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link to="/company-insights" className="block">
              <Card className="feature-card h-full transition-all hover:shadow-md">
                <CardContent className="p-0 pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-boost-light">
                      <Building className="h-6 w-6 text-boost-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Company Insights</h3>
                    <p className="text-sm text-muted-foreground">
                      Research companies with AI-powered insights and employee reviews.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Resume Templates Section - Moved here from the bottom */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                <p className="bg-gradient-to-r from-boost-primary to-boost-secondary bg-clip-text text-transparent">
                  Resume Examples
                </p>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Professional Templates
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Browse our collection of professionally designed resume templates to find your perfect match.
              </p>
            </div>
          </div>
          
          <div className="mx-auto max-w-7xl mt-12">
            <ResumeTemplateSlider />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                <p className="bg-gradient-to-r from-boost-primary to-boost-secondary bg-clip-text text-transparent">
                  Simple Process
                </p>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                How JobBoost Works
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Three simple steps to transform your job search and supercharge your career.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-boost-primary text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold">Input Your Information</h3>
              <p className="text-muted-foreground">
                Enter your experience, skills, and career goals, or import from LinkedIn.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-boost-secondary text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold">AI Optimization</h3>
              <p className="text-muted-foreground">
                Our AI analyzes and optimizes your content for maximum impact and ATS compatibility.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-boost-accent text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold">Download & Apply</h3>
              <p className="text-muted-foreground">
                Get your professionally formatted documents and start applying with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Additional Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                <p className="bg-gradient-to-r from-boost-primary to-boost-secondary bg-clip-text text-transparent">
                  Exclusive Tools
                </p>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Advanced Career Tools
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Supercharge your job search with our premium suite of career advancement tools.
              </p>
            </div>
          </div>
          
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card className="feature-card h-full transition-all hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-boost-light">
                    <Zap className="h-6 w-6 text-boost-primary" />
                  </div>
                  <h3 className="text-xl font-bold">ATS Compatibility Check</h3>
                  <p className="text-sm text-muted-foreground">
                    Scan your resume against ATS filters and get instant feedback to ensure it passes through to human recruiters.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="feature-card h-full transition-all hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-boost-light">
                    <Send className="h-6 w-6 text-boost-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Direct Apply Feature</h3>
                  <p className="text-sm text-muted-foreground">
                    Submit your resume directly to job boards like LinkedIn, Indeed, and Upwork with a single click.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="feature-card h-full transition-all hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-boost-light">
                    <Download className="h-6 w-6 text-boost-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Multiple Export Formats</h3>
                  <p className="text-sm text-muted-foreground">
                    Download your resume in PDF, Word, PNG, and HTML formats to suit any job application requirements.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="feature-card h-full transition-all hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-boost-light">
                    <Share2 className="h-6 w-6 text-boost-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Public Resume Link</h3>
                  <p className="text-sm text-muted-foreground">
                    Share your resume with a personalized link for recruiters to view your professional profile online.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="feature-card h-full transition-all hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-boost-light">
                    <Smartphone className="h-6 w-6 text-boost-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Mobile-Friendly Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Edit your resume on the go with our fully responsive mobile interface and PWA support.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="feature-card h-full transition-all hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-boost-light">
                    <Bot className="h-6 w-6 text-boost-primary" />
                  </div>
                  <h3 className="text-xl font-bold">AI Career Assistant</h3>
                  <p className="text-sm text-muted-foreground">
                    Get 24/7 AI-powered career advice, resume critiques, and interview coaching to boost your job search.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                <p className="bg-gradient-to-r from-boost-primary to-boost-secondary bg-clip-text text-transparent">
                  Choose Your Plan
                </p>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Pricing Plans
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Select the plan that fits your career needs and budget.
              </p>
            </div>
          </div>
          
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {/* Free Plan */}
            <Card className="relative overflow-hidden border-2 border-muted">
              <div className="absolute inset-x-0 top-0 h-2 bg-muted"></div>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Free</h3>
                    <p className="text-sm text-muted-foreground">Perfect for getting started</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-3xl font-bold">$0</p>
                    <p className="text-sm text-muted-foreground">Forever free</p>
                  </div>
                  <div className="space-y-2">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-boost-primary" />
                        <span>Basic resume builder</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-boost-primary" />
                        <span>Standard templates</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-boost-primary" />
                        <span>PDF downloads</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-boost-primary" />
                        <span>Save 1 resume</span>
                      </li>
                    </ul>
                  </div>
                  <Button asChild variant="outline">
                    <Link to="/resume-builder">Get Started</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Pro Plan */}
            <Card className="relative overflow-hidden border-2 border-boost-primary">
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-boost-primary to-boost-secondary"></div>
              <div className="absolute top-0 right-0 translate-x-2 -translate-y-2 bg-boost-primary text-white text-xs px-3 py-1 rotate-12 font-medium">
                Popular
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Pro</h3>
                    <p className="text-sm text-muted-foreground">Advanced features for serious job seekers</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-3xl font-bold">$9.99</p>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </div>
                  <div className="space-y-2">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-boost-primary" />
                        <span>Everything in Free</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-boost-primary" />
                        <span>AI resume optimization</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-boost-primary" />
                        <span>Premium templates</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-boost-primary" />
                        <span>ATS compatibility check</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-boost-primary" />
                        <span>Multiple export formats</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-boost-primary" />
                        <span>Save unlimited resumes</span>
                      </li>
                    </ul>
                  </div>
                  <Button asChild className="bg-gradient-to-r from-boost-primary to-boost-secondary hover:from-boost-primary/90 hover:to-boost-secondary/90">
                    <Link to="/pricing">Choose Pro</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Premium Plan */}
            <Card className="relative overflow-hidden border-2 border-boost-secondary">
              <div className="absolute inset-x-0 top-0 h-2 bg-boost-secondary"></div>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Premium</h3>
                    <p className="text-sm text-muted-foreground">Complete career acceleration suite</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-3xl font-bold">$19.99</p>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </div>
                  <div className="space-y-2">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-boost-secondary" />
                        <span>Everything in Pro</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-boost-secondary" />
                        <span>AI Career Assistant</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-boost-secondary" />
                        <span>Direct job applications</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-boost-secondary" />
                        <span>Public resume link</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-boost-secondary" />
                        <span>Email follow-up generator</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-boost-secondary" />
                        <span>Priority support</span>
                      </li>
                    </ul>
                  </div>
                  <Button asChild variant="outline">
                    <Link to="/pricing">Choose Premium</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                <p className="bg-gradient-to-r from-boost-primary to-boost-secondary bg-clip-text text-transparent">
                  Success Stories
                </p>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Users Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of job seekers who have found success with JobBoost.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
            <Card className="feature-card">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div>
                      <p className="text-sm font-medium">Sarah T.</p>
                      <p className="text-xs text-muted-foreground">Software Engineer</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "I was struggling to get interviews until I used JobBoost. The AI-optimized resume got me 5 interviews in the first week!"
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="feature-card">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div>
                      <p className="text-sm font-medium">Michael R.</p>
                      <p className="text-xs text-muted-foreground">Marketing Director</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "The interview preparation feature is amazing. I felt so confident going into my interviews after practicing with JobBoost."
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="feature-card">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div>
                      <p className="text-sm font-medium">Jessica L.</p>
                      <p className="text-xs text-muted-foreground">Data Analyst</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "The salary insights helped me negotiate a 15% higher offer than I initially received. Worth every penny!"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-boost-dark text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Boost Your Career?
              </h2>
              <p className="max-w-[900px] text-boost-light md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of professionals who have transformed their job search with JobBoost.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button asChild size="lg" className="bg-gradient-to-r from-boost-primary to-boost-secondary hover:from-boost-primary/90 hover:to-boost-secondary/90">
                <Link to="/resume-builder">
                  Get Started Free
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10">
                <Link to="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
