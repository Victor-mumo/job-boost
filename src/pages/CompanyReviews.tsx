
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, ThumbsUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    name: "Sarah J.",
    position: "Marketing Specialist",
    review: "JobBoost completely transformed my job search! I landed three interviews in my first week using their AI-generated resume. The templates are modern and the customization options are exactly what I needed.",
    rating: 5,
    date: "October 15, 2023",
    helpful: 42,
    replies: 3,
  },
  {
    id: 2,
    name: "Michael T.",
    position: "Software Engineer",
    review: "As a developer, I was skeptical about AI resume tools, but JobBoost exceeded my expectations. The technical skills section organization is perfect for showcasing my programming languages and frameworks.",
    rating: 5,
    date: "November 3, 2023",
    helpful: 38,
    replies: 2,
  },
  {
    id: 3,
    name: "Emma R.",
    position: "Recent Graduate",
    review: "Starting my career search was intimidating until I found JobBoost. The templates helped me highlight my education and internships perfectly. Customer support was incredibly helpful when I had questions.",
    rating: 4,
    date: "September 22, 2023",
    helpful: 27,
    replies: 5,
  },
  {
    id: 4,
    name: "David L.",
    position: "Sales Director",
    review: "The ATS optimization feature is a game-changer. After switching to JobBoost, my resume started getting past screening systems that previously rejected it. Worth every penny!",
    rating: 5,
    date: "December 5, 2023",
    helpful: 54,
    replies: 7,
  },
  {
    id: 5,
    name: "Priya M.",
    position: "Healthcare Professional",
    review: "JobBoost understood exactly how to present my healthcare credentials. The interface is intuitive and the AI suggestions were actually relevant to my field. Highly recommend!",
    rating: 5,
    date: "January 12, 2024",
    helpful: 33,
    replies: 1,
  },
  {
    id: 6,
    name: "Carlos G.",
    position: "Project Manager",
    review: "I've tried multiple resume builders, and JobBoost is by far the most comprehensive. The achievement suggestions helped me quantify my impact, and I've already referred several colleagues.",
    rating: 4,
    date: "February 8, 2024",
    helpful: 21,
    replies: 2,
  }
];

const CompanyReviews = () => {
  const [likedReviews, setLikedReviews] = useState<number[]>([]);
  const [filter, setFilter] = useState("all");
  
  const filteredReviews = reviews.filter(review => {
    if (filter === "all") return true;
    if (filter === "5star") return review.rating === 5;
    if (filter === "4star") return review.rating === 4;
    return true;
  });
  
  const averageRating = (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1);
  
  const handleLike = (id: number) => {
    if (likedReviews.includes(id)) {
      setLikedReviews(likedReviews.filter(reviewId => reviewId !== id));
    } else {
      setLikedReviews([...likedReviews, id]);
    }
  };

  return (
    <div className="container py-8 space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold">Customer Reviews</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          See what our users say about JobBoost and how it has helped them land their dream jobs.
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-muted/30 rounded-lg p-6 mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-center gap-8"
      >
        <div className="text-center md:text-left">
          <h2 className="text-6xl font-bold text-boost-primary">{averageRating}</h2>
          <div className="flex justify-center md:justify-start mt-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-6 w-6 ${i < Math.round(Number(averageRating)) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
              />
            ))}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Based on {reviews.length} reviews</p>
        </div>
        
        <div className="flex-1 w-full">
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map(stars => {
              const count = reviews.filter(r => r.rating === stars).length;
              const percentage = Math.round((count / reviews.length) * 100);
              
              return (
                <div key={stars} className="flex items-center gap-2">
                  <span className="text-sm font-medium w-8">{stars} star</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-boost-primary rounded-full" 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-muted-foreground w-8">{percentage}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
      
      <div className="flex flex-wrap justify-center gap-2 py-4">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          className={filter === "all" ? "bg-boost-primary hover:bg-boost-primary/90" : ""}
          onClick={() => setFilter("all")}
        >
          All Reviews
        </Button>
        <Button
          variant={filter === "5star" ? "default" : "outline"}
          className={filter === "5star" ? "bg-boost-primary hover:bg-boost-primary/90" : ""}
          onClick={() => setFilter("5star")}
        >
          5 Star Only
        </Button>
        <Button
          variant={filter === "4star" ? "default" : "outline"}
          className={filter === "4star" ? "bg-boost-primary hover:bg-boost-primary/90" : ""}
          onClick={() => setFilter("4star")}
        >
          4 Star Only
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredReviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <CardDescription>{review.position}</CardDescription>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">{review.review}</p>
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>{review.date}</span>
                  <div className="flex gap-4">
                    <button 
                      className={`flex items-center gap-1 ${likedReviews.includes(review.id) ? "text-boost-primary" : ""}`}
                      onClick={() => handleLike(review.id)}
                    >
                      <ThumbsUp className="h-3 w-3" />
                      <span>{likedReviews.includes(review.id) ? review.helpful + 1 : review.helpful}</span>
                    </button>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" />
                      <span>{review.replies}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompanyReviews;
