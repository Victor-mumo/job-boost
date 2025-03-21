
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Check, DownloadCloud, Lock } from "lucide-react";
import ResumePreview from "./ResumePreview";

interface ResumePreviewPanelProps {
  resumeData: any;
  isLoggedIn: boolean;
  handleDownload: () => void;
}

export default function ResumePreviewPanel({ resumeData, isLoggedIn, handleDownload }: ResumePreviewPanelProps) {
  return (
    <div className="lg:col-span-5 flex flex-col gap-6">
      <div className="sticky top-20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">Preview</h3>
          <div className="flex items-center gap-2">
            <Button
              onClick={handleDownload}
              className={`${isLoggedIn ? 'bg-boost-primary hover:bg-boost-primary/90' : 'bg-boost-primary/80 hover:bg-boost-primary/70'} flex items-center gap-2`}
            >
              {!isLoggedIn && <Lock className="h-3 w-3" />}
              <DownloadCloud className="mr-1 h-4 w-4" />
              {isLoggedIn ? 'Download PDF' : 'Login to Download'}
            </Button>
          </div>
        </div>
        
        <Card className="border border-muted">
          <ScrollArea className="h-[600px] w-full">
            <ResumePreview resumeData={resumeData} />
          </ScrollArea>
        </Card>
        
        <div className="mt-4">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center text-green-600">
              <Check className="mr-1 h-4 w-4" />
              <span>ATS Optimized</span>
            </div>
            <div className="flex items-center text-green-600">
              <Check className="mr-1 h-4 w-4" />
              <span>Keyword Enhanced</span>
            </div>
            <div className="flex items-center text-green-600">
              <Check className="mr-1 h-4 w-4" />
              <span>Professional Design</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
