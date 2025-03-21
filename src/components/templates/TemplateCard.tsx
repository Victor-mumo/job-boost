import { ResumeTemplate } from "@/types/resume";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

interface TemplateCardProps {
  template: ResumeTemplate;
}

export function TemplateCard({ template }: TemplateCardProps) {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    // Try to load the image
    const img = new Image();
    img.src = template.thumbnail;
    
    img.onload = () => {
      setImageSrc(template.thumbnail);
    };
    
    img.onerror = () => {
      // If PNG fails, try SVG
      const svgPath = template.thumbnail.replace('.png', '.svg');
      const svgImg = new Image();
      svgImg.src = svgPath;
      
      svgImg.onload = () => {
        setImageSrc(svgPath);
      };
      
      svgImg.onerror = () => {
        setImageSrc('/images/templates/placeholder.svg');
      };
    };
  }, [template.thumbnail]);

  const handleSelectTemplate = () => {
    navigate(`/resume-builder/${template.id}`);
  };

  return (
    <Card className="w-full max-w-sm transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={`${template.name} template preview`}
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="animate-pulse flex flex-col items-center justify-center space-y-2">
              <div className="w-32 h-32 bg-gray-200 rounded-lg"></div>
              <div className="text-sm text-gray-400">Loading template...</div>
            </div>
          )}
        </div>
        <CardTitle className="mt-4">{template.name}</CardTitle>
        <CardDescription>{template.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {template.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSelectTemplate} className="w-full">
          Use Template
        </Button>
      </CardFooter>
    </Card>
  );
} 