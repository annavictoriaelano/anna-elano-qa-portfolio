import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  achievement: string;
  icon: LucideIcon;
  onClick?: () => void;
  diagram?: ReactNode;
  whatItDoes?: string[];
  whatItAchieves?: string[];
}

export function ProjectCard({ title, description, tech, achievement, icon: Icon, onClick }: ProjectCardProps) {
  return (
    <Card
      className="group h-full card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
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
      <CardContent className="space-y-3">
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        <p className="text-sm text-foreground font-medium">
          {achievement}
        </p>
        <p className="text-xs text-primary font-medium group-hover:underline">
          Click to view details
        </p>
      </CardContent>
    </Card>
  );
}
