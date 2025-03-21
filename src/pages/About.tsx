
import { motion } from "framer-motion";
import { Shield, User, Lock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container py-12 max-w-5xl mx-auto">
      <div className="flex flex-col gap-8">
        {/* Hero section with animation */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold gradient-heading mb-4">
                About JobBoost
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                We're on a mission to help job seekers land their dream jobs with powerful AI tools.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-72 h-72">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 z-0 text-boost-light"
              >
                <path
                  fill="currentColor"
                  d="M46.5,-78.3C59.4,-71.3,68.9,-57.4,74.6,-42.6C80.3,-27.9,82.1,-12.1,79.4,2.1C76.8,16.2,69.8,28.8,60.9,39.3C52.1,49.8,41.5,58.3,29.5,63.9C17.5,69.5,4.1,72.2,-9.6,71.7C-23.4,71.2,-37.5,67.6,-48.7,59.4C-59.9,51.1,-68.1,38.2,-72,24.3C-76,10.4,-75.5,-4.4,-71.6,-18.2C-67.7,-32,-60.5,-44.7,-49.8,-52.6C-39.2,-60.5,-25.1,-63.5,-11.1,-66.8C2.9,-70.1,16.8,-73.6,29.2,-74.1C41.6,-74.6,52.5,-72.1,63.4,-65.1C74.2,-58.1,85,-46.6,46.5,-78.3Z"
                  transform="translate(100 100)"
                />
              </svg>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ y: 10 }}
                animate={{ y: -10 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                }}
              >
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Business person illustration */}
                  <circle cx="100" cy="70" r="30" fill="#8B5CF6" />
                  <rect x="70" y="100" width="60" height="80" fill="#D946EF" />
                  <rect x="85" y="180" width="10" height="20" fill="#8B5CF6" />
                  <rect x="105" y="180" width="10" height="20" fill="#8B5CF6" />
                  <rect x="60" y="120" width="20" height="60" fill="#D946EF" />
                  <rect x="120" y="120" width="20" height="60" fill="#D946EF" />
                  <circle cx="90" cy="65" r="5" fill="white" />
                  <circle cx="110" cy="65" r="5" fill="white" />
                  <path d="M95 80 Q100 85 105 80" stroke="white" strokeWidth="2" />
                  <rect x="70" y="100" width="60" height="10" fill="#8B5CF6" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* About content */}
        <motion.div 
          className="bg-card rounded-xl p-8 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="mb-4">
            JobBoost is an AI-powered resume-building platform designed to help job seekers create professional, 
            ATS-friendly resumes effortlessly. With intelligent suggestions, customizable templates, 
            and real-time editing, JobBoost ensures your resume stands out to recruiters and hiring managers.
          </p>
          <p>
            Founded by a team of recruitment experts and AI engineers, we combine human expertise with 
            cutting-edge technology to give you the best tools for your job search journey.
          </p>
        </motion.div>

        {/* Features section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="rounded-full bg-boost-light p-3 w-12 h-12 flex items-center justify-center mb-4">
              <FileText className="text-boost-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">ATS-Optimized</h3>
            <p className="text-muted-foreground">
              Our resumes are designed to pass through Applicant Tracking Systems and reach human recruiters.
            </p>
          </motion.div>
          
          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="rounded-full bg-boost-light p-3 w-12 h-12 flex items-center justify-center mb-4">
              <User className="text-boost-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
            <p className="text-muted-foreground">
              Smart suggestions and improvements based on industry standards and recruiter preferences.
            </p>
          </motion.div>
          
          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="rounded-full bg-boost-light p-3 w-12 h-12 flex items-center justify-center mb-4">
              <Lock className="text-boost-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Privacy-First</h3>
            <p className="text-muted-foreground">
              Your data is never sold or shared with third parties. We respect your privacy.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-2xl font-bold mb-6">Ready to boost your career?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-boost-primary hover:bg-boost-primary/90">
              <Link to="/resume-builder">Create Your Resume</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
