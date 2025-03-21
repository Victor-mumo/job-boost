
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Theme options with color values
const themeOptions = [
  { id: 'default', name: 'Professional Blue', primaryColor: '#3b82f6', secondaryColor: '#1e40af' },
  { id: 'emerald', name: 'Modern Green', primaryColor: '#10b981', secondaryColor: '#047857' },
  { id: 'amber', name: 'Warm Amber', primaryColor: '#f59e0b', secondaryColor: '#b45309' },
  { id: 'rose', name: 'Creative Rose', primaryColor: '#f43f5e', secondaryColor: '#be123c' },
  { id: 'indigo', name: 'Executive Indigo', primaryColor: '#6366f1', secondaryColor: '#4338ca' },
  { id: 'violet', name: 'Elegant Violet', primaryColor: '#8b5cf6', secondaryColor: '#6d28d9' },
];

// Font options
const fontOptions = [
  { id: 'sans', name: 'Sans-serif', family: 'ui-sans-serif, system-ui, sans-serif' },
  { id: 'serif', name: 'Serif', family: 'ui-serif, Georgia, Cambria, serif' },
  { id: 'mono', name: 'Monospace', family: 'ui-monospace, monospace' },
];

// Font size options
const fontSizeOptions = [
  { id: 'small', name: 'Small' },
  { id: 'normal', name: 'Medium' },
  { id: 'large', name: 'Large' },
];

interface ResumeStylingFormProps {
  resumeData: any;
  setResumeData: (data: any) => void;
  onBack: () => void;
}

const ResumeStylingForm = ({ resumeData, setResumeData, onBack }: ResumeStylingFormProps) => {
  const { toast } = useToast();

  const handleThemeChange = (value: string) => {
    setResumeData({
      ...resumeData,
      styling: {
        ...resumeData.styling,
        theme: value,
      },
    });
  };

  const handleFontChange = (value: string) => {
    setResumeData({
      ...resumeData,
      styling: {
        ...resumeData.styling,
        font: value,
      },
    });
  };

  const handleFontSizeChange = (value: string) => {
    setResumeData({
      ...resumeData,
      styling: {
        ...resumeData.styling,
        fontSize: value,
      },
    });
  };

  const handleSave = () => {
    toast({
      title: "Styling saved",
      description: "Your resume styling preferences have been saved.",
    });
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Customize Your Resume Style</h3>
            
            <div className="space-y-6">
              {/* Color Theme Selection */}
              <div className="space-y-3">
                <h4 className="font-medium text-sm">Color Theme</h4>
                <RadioGroup 
                  value={resumeData.styling.theme} 
                  onValueChange={handleThemeChange}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  {themeOptions.map((theme) => (
                    <div key={theme.id} className="relative">
                      <RadioGroupItem 
                        value={theme.id} 
                        id={`theme-${theme.id}`} 
                        className="peer sr-only" 
                      />
                      <Label
                        htmlFor={`theme-${theme.id}`}
                        className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <div className="flex gap-2 mb-2">
                          <div 
                            className="w-6 h-6 rounded-full" 
                            style={{ backgroundColor: theme.primaryColor }}
                          />
                          <div 
                            className="w-6 h-6 rounded-full" 
                            style={{ backgroundColor: theme.secondaryColor }}
                          />
                        </div>
                        <span>{theme.name}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Font Selection */}
              <div className="space-y-3">
                <h4 className="font-medium text-sm">Font Family</h4>
                <RadioGroup 
                  value={resumeData.styling.font} 
                  onValueChange={handleFontChange}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  {fontOptions.map((font) => (
                    <div key={font.id} className="relative">
                      <RadioGroupItem 
                        value={font.id} 
                        id={`font-${font.id}`} 
                        className="peer sr-only" 
                      />
                      <Label
                        htmlFor={`font-${font.id}`}
                        className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <span style={{ fontFamily: font.family }}>Aa</span>
                        <span className="mt-2">{font.name}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Font Size Selection */}
              <div className="space-y-3">
                <h4 className="font-medium text-sm">Font Size</h4>
                <RadioGroup 
                  value={resumeData.styling.fontSize} 
                  onValueChange={handleFontSizeChange}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  {fontSizeOptions.map((size) => (
                    <div key={size.id} className="relative">
                      <RadioGroupItem 
                        value={size.id} 
                        id={`size-${size.id}`} 
                        className="peer sr-only" 
                      />
                      <Label
                        htmlFor={`size-${size.id}`}
                        className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <span className={`
                          ${size.id === 'small' ? 'text-sm' : ''} 
                          ${size.id === 'normal' ? 'text-base' : ''} 
                          ${size.id === 'large' ? 'text-lg' : ''}
                        `}>
                          Aa
                        </span>
                        <span className="mt-2">{size.name}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={onBack}>
              <ChevronLeft className="mr-1 h-4 w-4" /> Back
            </Button>
            <Button 
              className="bg-boost-primary hover:bg-boost-primary/90"
              onClick={handleSave}
            >
              Save Styling
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResumeStylingForm;
