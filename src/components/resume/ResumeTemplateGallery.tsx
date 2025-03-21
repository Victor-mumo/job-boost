
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import resumeTemplates from "@/data/resumeTemplates";
import ResumeTemplateCard from "./ResumeTemplateCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

interface ResumeTemplateGalleryProps {
  onSelectTemplate: (templateId: string) => void;
  selectedTemplateId?: string;
  className?: string;
}

export default function ResumeTemplateGallery({ 
  onSelectTemplate, 
  selectedTemplateId,
  className = ""
}: ResumeTemplateGalleryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const { toast } = useToast();

  const categories = ["All", ...Array.from(new Set(resumeTemplates.map(t => t.category)))];

  const filteredTemplates = resumeTemplates.filter(template => {
    const matchesSearch = 
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = categoryFilter === "All" || template.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={className}>
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search templates..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          
          {categories.map(category => (
            <Button
              key={category}
              variant={categoryFilter === category ? "default" : "outline"}
              size="sm"
              className={categoryFilter === category ? "bg-boost-primary hover:bg-boost-primary/90" : ""}
              onClick={() => setCategoryFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map(template => (
          <ResumeTemplateCard
            key={template.id}
            template={template}
            onSelect={onSelectTemplate}
            selected={template.id === selectedTemplateId}
          />
        ))}
      </div>
      
      {filteredTemplates.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No templates found matching your search criteria.</p>
          <Button 
            variant="link" 
            onClick={() => {
              setSearchQuery("");
              setCategoryFilter("All");
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}
