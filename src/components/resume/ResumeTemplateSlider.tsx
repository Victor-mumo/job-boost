
import { useState, useEffect } from "react";
import resumeTemplates from "@/data/resumeTemplates";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { type CarouselApi } from "@/components/ui/carousel";

export default function ResumeTemplateSlider() {
  const [templates, setTemplates] = useState(resumeTemplates.slice(0, 7));
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollNext, setCanScrollNext] = useState(true);
  const navigate = useNavigate();
  
  const handleTemplateClick = (templateId: string) => {
    navigate(`/templates?selected=${templateId}`);
  };

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCanScrollNext(api.canScrollNext());
    };

    api.on("select", onSelect);
    
    // Initial check
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="my-10 py-6">
      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Featured Resume Templates</h2>
          <Button
            onClick={() => navigate("/templates")}
            variant="outline"
            className="hover:bg-boost-primary/10"
          >
            View All Templates
          </Button>
        </div>
        
        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {templates.map((template) => (
              <CarouselItem key={template.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card className="overflow-hidden border cursor-pointer hover:shadow-md transition-all" 
                       onClick={() => handleTemplateClick(template.id)}>
                    <CardContent className="p-0">
                      <div className="relative pb-[140%]">
                        <img
                          src={template.thumbnail}
                          alt={template.name}
                          className="absolute top-0 left-0 w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                          <h3 className="text-lg font-medium text-white">{template.name}</h3>
                          <p className="text-xs text-white/80">{template.category}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          {canScrollNext && <CarouselNext className="right-2" />}
        </Carousel>
      </div>
    </section>
  );
}
