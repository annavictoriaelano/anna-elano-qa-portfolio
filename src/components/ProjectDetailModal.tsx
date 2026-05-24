import { ReactNode } from "react";
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
  tech: string;
  diagram?: ReactNode;
  whatItDoes: string[];
  whatItAchieves: string[];
}

export function ProjectDetailModal({
  open,
  onOpenChange,
  title,
  tech,
  diagram,
  whatItDoes,
  whatItAchieves,
}: ProjectDetailModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription asChild>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {tech.split(" · ").map((t) => (
                <Badge key={t} variant="secondary" className="text-xs font-mono">
                  {t}
                </Badge>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>

        {diagram && (
          <div className="mt-2">
            <h3 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
              Workflow
            </h3>
            {diagram}
          </div>
        )}

        <div className="mt-2">
          <h3 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
            What it does
          </h3>
          <ul className="space-y-2">
            {whatItDoes.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-2">
          <h3 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
            What it achieves
          </h3>
          <ul className="space-y-2">
            {whatItAchieves.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
