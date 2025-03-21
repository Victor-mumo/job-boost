import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { 
  RouterProvider, 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  UNSAFE_DataRouterContext,
  UNSAFE_DataRouterStateContext
} from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ResumeBuilder from "./pages/ResumeBuilder";
import CoverLetterGenerator from "./pages/CoverLetterGenerator";
import InterviewPrep from "./pages/InterviewPrep";
import CareerGuidance from "./pages/CareerGuidance";
import SalaryInsights from "./pages/SalaryInsights";
import CompanyInsights from "./pages/CompanyInsights";
import JobMatching from "./pages/JobMatching";
import CareerAdvice from "./pages/CareerAdvice";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Templates from "./pages/Templates";
import CompanyReviews from "./pages/CompanyReviews";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import { AuthProvider } from "./contexts/AuthContext";
import { AIProvider } from "./contexts/AIContext";
import { LoginModal, SignupModal } from "@/components/auth/AuthModals";
import AIAssistant from "./pages/AIAssistant";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/resume-builder" element={<ResumeBuilder />} />
      <Route path="/cover-letter" element={<CoverLetterGenerator />} />
      <Route path="/cover-letter-generator" element={<CoverLetterGenerator />} />
      <Route path="/job-matching" element={<JobMatching />} />
      <Route path="/interview-prep" element={<InterviewPrep />} />
      <Route path="/salary-insights" element={<SalaryInsights />} />
      <Route path="/company-reviews" element={<CompanyReviews />} />
      <Route path="/company-insights" element={<CompanyInsights />} />
      <Route path="/career-guidance" element={<CareerGuidance />} />
      <Route path="/career-advice" element={<CareerAdvice />} />
      <Route path="/ai-assistant" element={<AIAssistant />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <AIProvider>
            <Toaster />
            <Sonner />
            <RouterProvider router={router} />
            <LoginModal />
            <SignupModal />
          </AIProvider>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
