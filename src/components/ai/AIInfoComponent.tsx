
import { useAI } from "@/contexts/AIContext";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

export default function AIInfoComponent() {
  const { isAIReady, isLoading, error } = useAI();

  if (isLoading) {
    return (
      <Alert className="bg-muted border-muted-foreground/20">
        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
        <AlertTitle>AI is loading</AlertTitle>
        <AlertDescription>
          Our browser-based AI is initializing. This might take a moment on your first visit.
        </AlertDescription>
      </Alert>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>AI Error</AlertTitle>
        <AlertDescription>
          {error}. You can still use all other features of the application.
        </AlertDescription>
      </Alert>
    );
  }

  if (isAIReady) {
    return (
      <Alert className="bg-boost-light/30 border-boost-primary/30">
        <CheckCircle2 className="h-4 w-4 text-boost-primary" />
        <AlertTitle>AI Ready</AlertTitle>
        <AlertDescription>
          Our free browser-based AI is active and ready to assist you with resume enhancements and career advice.
        </AlertDescription>
      </Alert>
    );
  }

  return null;
}
