import { ReactNode } from "react";
import { ArrowRight, CheckCircle2, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface ProjectDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  tech?: string;
  repoUrl?: string;
  highlightLabel?: string;
  diagram?: ReactNode;
  whatItDoes: string[];
  whatItAchieves: string[];
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="flex items-center gap-2.5 text-base font-semibold text-foreground">
      <span className="inline-block w-1 h-5 rounded-full bg-ring shrink-0" />
      {children}
    </h3>
  );
}

export function ProjectDetailModal({
  open,
  onOpenChange,
  title,
  tech,
  repoUrl,
  highlightLabel,
  diagram,
  whatItDoes,
  whatItAchieves,
}: ProjectDetailModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="px-8 pt-8 pb-6 border-b">
          <div className="flex items-start justify-between gap-4">
            <DialogTitle className="text-3xl font-bold">{title}</DialogTitle>
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors shrink-0 mt-2"
              >
                <Github className="h-4 w-4" />
                View repository
              </a>
            )}
          </div>
          {tech && (
            <DialogDescription asChild>
              <div className="flex flex-wrap gap-1.5 pt-3">
                {tech.split(" · ").map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs font-mono">
                    {t}
                  </Badge>
                ))}
              </div>
            </DialogDescription>
          )}
        </DialogHeader>

        <div className="px-8 py-8 space-y-8">
          {diagram && (
            <div>
              <SectionHeading>{highlightLabel ?? "Workflow"}</SectionHeading>
              <div className="mt-4">{diagram}</div>
            </div>
          )}

          <div>
            <SectionHeading>What it does</SectionHeading>
            <ul className="mt-4 space-y-3">
              {whatItDoes.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <ArrowRight className="h-4 w-4 text-ring mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-accent/40 p-6">
            <SectionHeading>What it achieves</SectionHeading>
            <ul className="mt-4 space-y-3">
              {whatItAchieves.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 text-ring mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
