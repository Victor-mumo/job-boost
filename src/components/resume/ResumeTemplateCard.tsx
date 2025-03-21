import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { ResumeTemplate } from "@/types/resume";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Check, Lock } from "lucide-react";
import { useState } from "react";
import ResumePreview from "./ResumePreview";

interface ResumeTemplateCardProps {
  template: ResumeTemplate;
  onSelect: (templateId: string) => void;
  selected?: boolean;
}

export default function ResumeTemplateCard({ template, onSelect, selected = false }: ResumeTemplateCardProps) {
  const { isLoggedIn, setShowSignupModal } = useAuth();
  const { toast } = useToast();
  const [isHovering, setIsHovering] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleSelect = () => {
    if (!isLoggedIn) {
      setShowSignupModal(true);
      toast({
        title: "Authentication Required",
        description: "Please sign up or log in to use this template.",
      });
      return;
    }
    
    onSelect(template.id);
    
    toast({
      title: "Template Selected",
      description: `${template.name} has been selected. Your data will be applied to this template.`,
    });
  };

  return (
    <Card 
      className={`overflow-hidden transition-all ${selected ? 'ring-2 ring-boost-primary' : 'hover:shadow-md'}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative bg-white">
        <img 
          src={imageError ? '/images/templates/placeholder.svg' : template.thumbnail} 
          alt={template.name} 
          className="w-full h-48 object-contain bg-white" 
          onError={() => setImageError(true)}
        />
        
        {template.requiresPhoto && (
          <Badge variant="secondary" className="absolute top-2 right-2 bg-black/70 text-white">
            <Camera className="h-3 w-3 mr-1" />
            Photo Required
          </Badge>
        )}
        
        {isHovering && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Button 
              variant={selected ? "secondary" : "default"}
              className="bg-boost-primary hover:bg-boost-primary/90" 
              onClick={handleSelect}
            >
              {selected ? (
                <>
                  <Check className="mr-1 h-4 w-4" /> Selected
                </>
              ) : (
                'Use This Template'
              )}
            </Button>
          </div>
        )}
      </div>
      
      <CardHeader className="py-3">
        <CardTitle className="text-lg flex items-center justify-between">
          {template.name}
          {!isLoggedIn && <Lock className="h-4 w-4 text-muted-foreground" />}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="py-2">
        <p className="text-sm text-muted-foreground">{template.description}</p>
      </CardContent>
      
      <CardFooter className="pt-0 pb-3 flex flex-wrap gap-1">
        {template.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="text-xs">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
