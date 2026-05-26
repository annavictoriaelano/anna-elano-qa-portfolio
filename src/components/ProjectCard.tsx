import { ReactNode } from "react";
import { LucideIcon, ArrowRight, Clock, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  title: string;
  summary: string;
  tech?: string;
  icon: LucideIcon;
  metric?: { value: string; label: string };
  status?: string;
  placeholder?: boolean;
  repoUrl?: string;
  highlightLabel?: string;
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
  status,
  placeholder,
  repoUrl,
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

  const isClickable = !!onClick;

  return (
    <Card
      className={cn(
        "group h-full card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border-border/80 hover:border-ring/30",
        isClickable && "cursor-pointer"
      )}
      onClick={onClick}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={
        isClickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick?.();
              }
            }
          : undefined
      }
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

        {status && !metric && (
          <div className="mb-4">
            <Badge
              variant="outline"
              className="text-xs text-ring border-ring/30"
            >
              {status}
            </Badge>
          </div>
        )}

        <div className="flex items-start gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-accent/60 text-primary shrink-0">
            <Icon className="h-5 w-5" />
          </div>
          <h3
            className={cn(
              "text-lg font-semibold text-foreground leading-tight pt-0.5",
              isClickable &&
                "group-hover:text-primary transition-colors"
            )}
          >
            {title}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {summary}
        </p>

        <div className="space-y-4">
          {tech && (
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
          )}

          {isClickable ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-sm font-medium text-primary group-hover:text-ring transition-colors">
                View details
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-3.5 w-3.5" />
                  Repository
                </a>
              )}
            </div>
          ) : repoUrl ? (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-ring transition-colors"
            >
              <Github className="h-4 w-4" />
              View repository
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
