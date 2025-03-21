
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, Tag, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "10 Resume Mistakes That Could Cost You the Job",
    excerpt: "Discover the common resume errors that recruiters flag as immediate red flags and learn how to avoid them.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    author: "Emma Johnson",
    date: "March 15, 2024",
    readTime: "6 min read",
    category: "Resume Tips",
    featured: true,
  },
  {
    id: 2,
    title: "Mastering the ATS: How to Get Past Applicant Tracking Systems",
    excerpt: "Learn the strategies and techniques to ensure your resume passes through ATS filters and reaches human recruiters.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    author: "Michael Torres",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "Job Search",
    featured: false,
  },
  {
    id: 3,
    title: "The Ultimate Guide to Remote Job Interviews",
    excerpt: "Prepare for virtual interviews with these expert tips on technology setup, body language, and creating a professional environment.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    author: "Sarah Williams",
    date: "March 5, 2024",
    readTime: "7 min read",
    category: "Interview Prep",
    featured: false,
  },
  {
    id: 4,
    title: "LinkedIn Profile Optimization for Job Seekers",
    excerpt: "Transform your LinkedIn profile into a powerful job-hunting tool with these professional strategies.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    author: "David Chen",
    date: "February 28, 2024",
    readTime: "5 min read",
    category: "Networking",
    featured: false,
  },
  {
    id: 5,
    title: "Career Change at 40: Success Stories and Strategies",
    excerpt: "It's never too late to pivot your career. Learn from professionals who successfully transitioned to new industries after 40.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    author: "Jennifer Lopez",
    date: "February 22, 2024",
    readTime: "9 min read",
    category: "Career Change",
    featured: true,
  },
  {
    id: 6,
    title: "Salary Negotiation Techniques That Actually Work",
    excerpt: "Don't leave money on the table. Master these proven strategies to negotiate the salary you deserve.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    author: "Robert Johnson",
    date: "February 15, 2024",
    readTime: "6 min read",
    category: "Salary",
    featured: false,
  },
];

const categories = ["All", "Resume Tips", "Job Search", "Interview Prep", "Career Change", "Salary", "Networking"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPosts = blogPosts.filter(post => 
    selectedCategory === "All" || post.category === selectedCategory
  );
  
  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];

  return (
    <div className="container py-8 space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold">Career Insights Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Expert advice on resume building, job hunting, interviews, and career development.
        </p>
      </motion.div>
      
      {/* Featured Post */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="order-2 md:order-1 p-6 flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block bg-boost-primary/10 text-boost-primary text-xs font-semibold px-2 py-1 rounded-full">
                  Featured
                </span>
              </div>
              <CardTitle className="text-2xl md:text-3xl mb-3">{featuredPost.title}</CardTitle>
              <CardDescription className="text-base mb-4">{featuredPost.excerpt}</CardDescription>
              <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-4 mb-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  <span>{featuredPost.category}</span>
                </div>
              </div>
              <Button className="mt-2 w-fit bg-boost-primary hover:bg-boost-primary/90">
                Read Article <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            <div className="order-1 md:order-2 h-64 md:h-auto">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Card>
      </motion.div>
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 py-4">
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={selectedCategory === category ? "bg-boost-primary hover:bg-boost-primary/90" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.filter(post => post.id !== featuredPost.id).map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                  <span className="inline-block bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="flex items-center text-xs gap-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" size="sm" className="text-boost-primary hover:text-boost-primary/90 hover:bg-boost-primary/10 p-0">
                  Read more <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>
    </div>
  );
};

export default Blog;
