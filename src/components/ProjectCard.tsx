import { ReactNode } from "react";
import { LucideIcon, ArrowRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface ProjectCardProps {
  title: string;
  summary: string;
  tech: string;
  icon: LucideIcon;
  metric?: { value: string; label: string };
  placeholder?: boolean;
  onClick?: () => void;
  diagram?: ReactNode;
  whatItDoes?: string[];
  whatItAchieves?: string[];
}

export function ProjectCard({
  title,
  summary,
  tech,
  icon: Icon,
  metric,
  placeholder,
  onClick,
}: ProjectCardProps) {
  if (placeholder) {
    return (
      <Card className="h-full border-dashed border-border/50">
        <CardContent className="p-5">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-muted/50 text-muted-foreground/40">
              <Icon className="h-4 w-4" />
            </div>
            <div className="min-w-0 space-y-1.5">
              <h3 className="text-sm font-semibold text-foreground/50">
                {title}
              </h3>
              <p className="text-xs text-muted-foreground/40 leading-relaxed line-clamp-2">
                {summary}
              </p>
              <div className="pt-1">
                <Badge
                  variant="outline"
                  className="text-[10px] text-muted-foreground/40 border-border/30 gap-1"
                >
                  <Clock className="h-2.5 w-2.5" />
                  Coming soon
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className="group h-full card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border/80 hover:border-ring/30"
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
      <CardContent className="p-6 flex flex-col h-full">
        {metric && (
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-bold text-ring font-mono">
              {metric.value}
            </span>
            <span className="text-xs text-muted-foreground uppercase tracking-wide">
              {metric.label}
            </span>
          </div>
        )}

        <div className="flex items-start gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-accent/60 text-primary shrink-0">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight pt-0.5">
            {title}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {summary}
        </p>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {tech.split(" · ").map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="text-[11px] font-mono px-2 py-0.5"
              >
                {t}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-sm font-medium text-primary group-hover:text-ring transition-colors">
            View details
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
