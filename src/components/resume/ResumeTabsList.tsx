
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Code, FileText, GraduationCap, Palette } from "lucide-react";

export default function ResumeTabsList() {
  return (
    <TabsList className="grid w-full grid-cols-5">
      <TabsTrigger value="personal" className="flex items-center gap-1">
        <FileText className="h-4 w-4" />
        <span className="hidden sm:inline">Personal</span>
      </TabsTrigger>
      <TabsTrigger value="experience" className="flex items-center gap-1">
        <Briefcase className="h-4 w-4" />
        <span className="hidden sm:inline">Experience</span>
      </TabsTrigger>
      <TabsTrigger value="education" className="flex items-center gap-1">
        <GraduationCap className="h-4 w-4" />
        <span className="hidden sm:inline">Education</span>
      </TabsTrigger>
      <TabsTrigger value="skills" className="flex items-center gap-1">
        <Code className="h-4 w-4" />
        <span className="hidden sm:inline">Skills</span>
      </TabsTrigger>
      <TabsTrigger value="styling" className="flex items-center gap-1">
        <Palette className="h-4 w-4" />
        <span className="hidden sm:inline">Style</span>
      </TabsTrigger>
    </TabsList>
  );
}
