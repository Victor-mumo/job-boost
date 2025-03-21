
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

interface ImportDialogProps {
  showImportDialog: boolean;
  setShowImportDialog: (show: boolean) => void;
  importSource: string;
  isImporting: boolean;
  handleImportConfirm: () => void;
}

export default function ImportDialog({
  showImportDialog,
  setShowImportDialog,
  importSource,
  isImporting,
  handleImportConfirm
}: ImportDialogProps) {
  return (
    <Dialog open={showImportDialog} onOpenChange={setShowImportDialog}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Import from {importSource}</DialogTitle>
          <DialogDescription>
            You will be redirected to {importSource} to authorize access to your profile information.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <p className="text-sm text-muted-foreground">
            This will import your:
          </p>
          <ul className="list-disc list-inside text-sm space-y-1 ml-2">
            <li>Profile information (name, title, location)</li>
            <li>Work experience</li>
            <li>Education history</li>
            <li>Skills and certifications</li>
          </ul>
        </div>
        <div className="flex justify-end gap-2">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button 
            onClick={handleImportConfirm}
            className="bg-boost-primary hover:bg-boost-primary/90"
            disabled={isImporting}
          >
            {isImporting && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
            {isImporting ? "Importing..." : "Continue"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
