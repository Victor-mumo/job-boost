
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Camera, Upload, X } from "lucide-react";

interface ResumePhotoUploaderProps {
  initialPhoto?: string;
  onPhotoChange: (photoDataUrl: string | null) => void;
}

export default function ResumePhotoUploader({ initialPhoto, onPhotoChange }: ResumePhotoUploaderProps) {
  const [photo, setPhoto] = useState<string | null>(initialPhoto || null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive"
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setPhoto(result);
      onPhotoChange(result);
      toast({
        title: "Photo uploaded",
        description: "Your photo has been successfully uploaded",
      });
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive"
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setPhoto(result);
      onPhotoChange(result);
      toast({
        title: "Photo uploaded",
        description: "Your photo has been successfully uploaded",
      });
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removePhoto = () => {
    setPhoto(null);
    onPhotoChange(null);
    toast({
      title: "Photo removed",
      description: "Your photo has been removed",
    });
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-medium mb-4">Profile Photo</h3>
          
          {photo ? (
            <div className="relative w-40 h-40 mb-4">
              <img 
                src={photo} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full" 
              />
              <Button 
                variant="destructive" 
                size="icon" 
                className="absolute -top-2 -right-2 h-7 w-7 rounded-full"
                onClick={removePhoto}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div 
              className={`w-40 h-40 rounded-full flex flex-col items-center justify-center border-2 border-dashed mb-4 cursor-pointer ${
                isDragging ? 'border-boost-primary bg-boost-primary/10' : 'border-gray-300'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={triggerFileInput}
            >
              <Camera className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm text-center text-muted-foreground">
                Drag & drop or<br />click to upload
              </p>
            </div>
          )}
          
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="image/*" 
            onChange={handleFileChange} 
          />
          
          <div className="flex gap-2">
            {!photo ? (
              <Button 
                variant="outline" 
                onClick={triggerFileInput}
                className="flex items-center gap-1"
              >
                <Upload className="h-4 w-4" />
                Upload Photo
              </Button>
            ) : (
              <Button 
                variant="outline" 
                onClick={triggerFileInput}
                className="flex items-center gap-1"
              >
                <Upload className="h-4 w-4" />
                Change Photo
              </Button>
            )}
          </div>
          
          <p className="text-xs text-muted-foreground mt-4 text-center">
            For best results, use a professional headshot<br />
            with dimensions of at least 400×400 pixels.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
