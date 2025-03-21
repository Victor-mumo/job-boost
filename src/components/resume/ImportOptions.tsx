
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Upload } from "lucide-react";
import { RefObject } from "react";

interface ImportOptionsProps {
  isUploading: boolean;
  isImporting: boolean;
  fileInputRef: RefObject<HTMLInputElement>;
  triggerFileUpload: () => void;
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleImportClick: (source: string) => void;
}

export default function ImportOptions({ 
  isUploading, 
  isImporting, 
  fileInputRef, 
  triggerFileUpload, 
  handleFileUpload,
  handleImportClick 
}: ImportOptionsProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Import Data</h3>
          <div className="flex flex-wrap gap-4">
            <input
              type="file"
              ref={fileInputRef}
              accept=".pdf"
              className="hidden"
              onChange={handleFileUpload}
            />
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={triggerFileUpload}
              disabled={isUploading}
            >
              {isUploading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Upload className="h-4 w-4" />
              )}
              {isUploading ? "Processing..." : "Upload PDF Resume"}
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => handleImportClick("LinkedIn")}
              disabled={isImporting}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7143 1H2.28571C1.57857 1 1 1.57857 1 2.28571V13.7143C1 14.4214 1.57857 15 2.28571 15H13.7143C14.4214 15 15 14.4214 15 13.7143V2.28571C15 1.57857 14.4214 1 13.7143 1Z" fill="currentColor" />
                <path d="M4.5 6.5C5.32843 6.5 6 5.82843 6 5C6 4.17157 5.32843 3.5 4.5 3.5C3.67157 3.5 3 4.17157 3 5C3 5.82843 3.67157 6.5 4.5 6.5Z" fill="white" />
                <path d="M3 8L6 13H1L3 8Z" fill="white" />
                <path d="M7 13L10 7L13 13H7Z" fill="white" />
              </svg>
              <span className="ml-1">Import from LinkedIn</span>
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => handleImportClick("Indeed")}
              disabled={isImporting}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0C3.58172 0 0 3.13401 0 7C0 10.866 3.58172 14 8 14C12.4183 14 16 10.866 16 7C16 3.13401 12.4183 0 8 0ZM6.64022 10.5259H4.31283V4.99532H6.64022V10.5259ZM5.47645 4.18359C4.7298 4.18359 4.12913 3.63849 4.12913 2.97583C4.12913 2.31316 4.7298 1.76807 5.47645 1.76807C6.2231 1.76807 6.82377 2.31316 6.82377 2.97583C6.82377 3.63849 6.2231 4.18359 5.47645 4.18359ZM12.693 10.5259H10.3656V7.84462C10.3656 7.13531 10.3508 6.21495 9.31283 6.21495C8.2599 6.21495 8.0911 7.01076 8.0911 7.83474V10.5259H5.76371V4.99532H8.00498V6.02344H8.03453C8.2977 5.44495 9.05457 4.83495 10.1827 4.83495C12.5397 4.83495 12.693 6.14462 12.693 7.86667V10.5259Z" fill="currentColor" />
              </svg>
              <span className="ml-1">Import from Indeed</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
