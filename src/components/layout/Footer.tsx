
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-gradient-to-r from-boost-primary to-boost-secondary p-1 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  <path d="m15 9 6-6" />
                  <path d="m22 4-4-4" />
                </svg>
              </div>
              <span className="text-xl font-bold">
                Job
                <span className="text-boost-primary">Boost</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              JobBoost is an AI-powered resume-building platform designed to help job seekers create professional, ATS-friendly resumes effortlessly.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">Features</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link to="/templates" className="hover:text-foreground transition-colors">
                  Resume Templates
                </Link>
              </li>
              <li>
                <Link to="/resume-builder" className="hover:text-foreground transition-colors">
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link to="/cover-letter" className="hover:text-foreground transition-colors">
                  Cover Letters
                </Link>
              </li>
              <li>
                <Link to="/interview-prep" className="hover:text-foreground transition-colors">
                  Interview Prep
                </Link>
              </li>
              <li>
                <Link to="/job-matching" className="hover:text-foreground transition-colors">
                  Job Matching
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">Resources</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link to="/career-advice" className="hover:text-foreground transition-colors">
                  Career Advice
                </Link>
              </li>
              <li>
                <Link to="/salary-insights" className="hover:text-foreground transition-colors">
                  Salary Insights
                </Link>
              </li>
              <li>
                <Link to="/company-reviews" className="hover:text-foreground transition-colors">
                  Company Reviews
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">Company</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-foreground transition-colors">
                  Pricing: FREE (Limited Time)
                </Link>
              </li>
              <li>
                <div className="hover:text-foreground transition-colors">
                  <p>📞 Phone: 0700 555 432</p>
                  <p>📧 Email: support@jobboost.com</p>
                </div>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-foreground transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <div className="text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} JobBoost. All rights reserved.</p>
            <p className="mt-2">
              We value your privacy. Data is used solely for resume generation and is not shared with third parties.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
