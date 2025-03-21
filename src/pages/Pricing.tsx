
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "Smart Resume Builder",
  "Cover Letter Generator",
  "ATS Optimization",
  "Multiple Templates",
  "Real-time CV Preview",
  "Download in Multiple Formats",
  "Career Guidance Tools",
  "Interview Preparation",
  "Job Matching Recommendations",
  "Unlimited CV Exports",
];

const Pricing = () => {
  return (
    <div className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4 mb-12"
      >
        <h1 className="text-4xl font-bold">Pricing Plans</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          For a limited time, all premium features are available for free while we continue to improve our platform.
        </p>
      </motion.div>

      <div className="flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-md"
        >
          <Card className="border-2 border-boost-primary shadow-lg relative overflow-hidden">
            <div className="absolute -right-12 top-6 bg-boost-primary text-white py-1 px-12 rotate-45">
              <Star className="h-4 w-4 inline mr-1" />
              <span className="text-xs font-bold">LIMITED TIME</span>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Premium</CardTitle>
              <CardDescription>All features included</CardDescription>
              <div className="mt-4 flex items-center justify-center">
                <div className="flex items-start">
                  <span className="text-3xl mr-2 line-through text-muted-foreground">$29.99</span>
                  <span className="text-5xl font-bold text-boost-primary">FREE</span>
                </div>
                <span className="text-muted-foreground ml-2">/month</span>
              </div>
              <div className="flex items-center justify-center mt-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                <span>Limited time offer</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    className="flex items-center"
                  >
                    <Check className="h-5 w-5 text-boost-primary mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full text-lg py-6 bg-boost-primary hover:bg-boost-primary/90">
                <Link to="/resume-builder">Get Started Now</Link>
              </Button>
            </CardFooter>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-boost-primary/10 to-boost-secondary/10 h-1"></div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            No credit card required. No hidden fees. <br />
            Cancel anytime when paid plans are introduced.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
