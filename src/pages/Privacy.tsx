
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Privacy() {
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
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                At JobBoost, we value your privacy and are committed to protecting your personal information.
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
                  {/* Shield/security illustration */}
                  <path d="M100 30 L160 60 V110 C160 150 130 180 100 190 C70 180 40 150 40 110 V60 L100 30Z" fill="#8B5CF6" />
                  <path d="M100 50 L145 72 V110 C145 140 120 165 100 172 C80 165 55 140 55 110 V72 L100 50Z" fill="#D946EF" />
                  <path d="M100 70 L130 85 V110 C130 130 115 145 100 150 C85 145 70 130 70 110 V85 L100 70Z" fill="white" />
                  <path d="M90 110 L80 100 L90 90 L100 100 L120 80 L130 90 L100 120 L90 110Z" fill="#8B5CF6" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Privacy content */}
        <motion.div 
          className="bg-card rounded-xl p-8 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Our Privacy Commitment</h2>
          <p className="mb-4">
            At JobBoost, we value your privacy and are committed to protecting your personal information.
            This Privacy Policy outlines how we collect, use, and safeguard your data when you use our
            platform.
          </p>
          <p>
            We believe in transparency and want you to understand exactly how your information is handled.
            If you have any questions or concerns about our privacy practices, please don't hesitate to
            contact us.
          </p>
        </motion.div>

        {/* Privacy principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="rounded-full bg-boost-light p-3 w-12 h-12 flex items-center justify-center mb-4">
              <FileCheck className="text-boost-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
            <p className="text-muted-foreground">
              We only collect necessary details to generate and improve your resume. This includes your
              professional experience, skills, education, and contact information.
            </p>
          </motion.div>
          
          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="rounded-full bg-boost-light p-3 w-12 h-12 flex items-center justify-center mb-4">
              <Eye className="text-boost-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Usage</h3>
            <p className="text-muted-foreground">
              Your data is used solely for resume generation and is not shared with third parties.
              We may use anonymized data to improve our services and AI algorithms.
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
            <h3 className="text-xl font-semibold mb-2">Security</h3>
            <p className="text-muted-foreground">
              We implement industry-standard encryption to safeguard your information.
              Our systems are regularly audited to ensure the highest level of data protection.
            </p>
          </motion.div>
          
          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div className="rounded-full bg-boost-light p-3 w-12 h-12 flex items-center justify-center mb-4">
              <Shield className="text-boost-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Your Rights</h3>
            <p className="text-muted-foreground">
              You can request data deletion at any time by contacting our support team.
              You also have the right to access, correct, or export your personal data.
            </p>
          </motion.div>
        </div>

        {/* Contact section */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-2xl font-bold mb-4">Questions about our privacy practices?</h2>
          <p className="mb-6 text-muted-foreground">
            Contact us at <span className="font-medium text-foreground">support@jobboost.com</span> or call <span className="font-medium text-foreground">0700 555 432</span>
          </p>
          <Button asChild size="lg" className="bg-boost-primary hover:bg-boost-primary/90">
            <Link to="/">Return to Home</Link>
          </Button>
        </motion.div>
        
        {/* Copyright */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} JobBoost. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
