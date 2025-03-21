import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { 
    isLoggedIn,
    showLoginModal, 
    setShowLoginModal, 
    showSignupModal, 
    setShowSignupModal 
  } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
    setIsMenuOpen(false);
  };

  const openSignupModal = () => {
    setShowSignupModal(true);
    setShowLoginModal(false);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="rounded-lg bg-gradient-to-r from-boost-primary to-boost-secondary p-1.5 text-white">
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
                className="h-5 w-5"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                <path d="m15 9 6-6" />
                <path d="m22 4-4-4" />
              </svg>
            </div>
            <span className="hidden text-xl font-bold sm:inline-block">
              Job
              <span className="text-boost-primary">Boost</span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resume Tools</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] grid-cols-2">
                    <li className="col-span-2">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/templates"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Resume Templates
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Browse our collection of professional templates
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link
                        to="/resume-builder"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Resume Builder</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Create ATS-friendly resumes
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cover-letter"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Cover Letters</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Generate customized cover letters
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Career Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <Link
                        to="/interview-prep"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Interview Prep</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Practice for your interviews
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/job-matching"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Job Matching</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Find jobs that match your skills
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/career-advice"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Career Advice</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Expert career guidance and tips
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Blog</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Articles on career development
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/company-reviews" className={navigationMenuTriggerStyle()}>
                  Reviews
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/pricing" className={navigationMenuTriggerStyle()}>
                  Pricing
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  to="/ai-assistant" 
                  className={navigationMenuTriggerStyle()}
                >
                  AI Assistant
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <Button variant="outline" size="sm" className="text-boost-primary border-boost-primary hover:bg-boost-primary/10">
                My Dashboard
              </Button>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={openLoginModal}>
                  Login
                </Button>
                <Button 
                  variant="default" 
                  size="sm" 
                  onClick={openSignupModal}
                  className="bg-boost-primary hover:bg-boost-primary/90"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden pb-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/templates"
              className="text-sm font-medium hover:text-boost-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume Templates
            </Link>
            <Link 
              to="/resume-builder" 
              className="text-sm font-medium hover:text-boost-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume Builder
            </Link>
            <Link 
              to="/cover-letter" 
              className="text-sm font-medium hover:text-boost-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cover Letters
            </Link>
            <Link 
              to="/interview-prep" 
              className="text-sm font-medium hover:text-boost-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Interview Prep
            </Link>
            <Link 
              to="/job-matching" 
              className="text-sm font-medium hover:text-boost-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Job Matching
            </Link>
            <Link 
              to="/career-advice" 
              className="text-sm font-medium hover:text-boost-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Career Advice
            </Link>
            <Link 
              to="/blog" 
              className="text-sm font-medium hover:text-boost-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/company-reviews" 
              className="text-sm font-medium hover:text-boost-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link 
              to="/pricing" 
              className="text-sm font-medium hover:text-boost-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/ai-assistant" 
              className="text-sm font-medium hover:text-boost-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Assistant
            </Link>
            <div className="flex items-center gap-2 pt-2">
              {isLoggedIn ? (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-boost-primary border-boost-primary hover:bg-boost-primary/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Dashboard
                </Button>
              ) : (
                <>
                  <Button variant="ghost" size="sm" className="w-full" onClick={openLoginModal}>
                    Login
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="w-full bg-boost-primary hover:bg-boost-primary/90" 
                    onClick={openSignupModal}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
