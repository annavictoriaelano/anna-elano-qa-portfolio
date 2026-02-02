import { LucideIcon, Github, FileText, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  icon: LucideIcon;
  link: string;
  linkType: "github" | "pdf";
}

export function ProjectCard({ title, description, tech, icon: Icon, link, linkType }: ProjectCardProps) {
  return (
    <Card className="group h-full card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-accent text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 font-mono">
              {tech}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="gap-2 text-primary hover:text-primary hover:bg-accent">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {linkType === "github" ? (
              <>
                <Github className="h-4 w-4" />
                View on GitHub
              </>
            ) : (
              <>
                <FileText className="h-4 w-4" />
                View PDF
              </>
            )}
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
