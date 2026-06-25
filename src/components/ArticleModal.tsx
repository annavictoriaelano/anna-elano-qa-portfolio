import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface ArticleContent {
  intro: string;
  paragraphs: string[];
  closing?: string;
}

interface ArticleModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  article: ArticleContent;
}

export function ArticleModal({
  open,
  onOpenChange,
  title,
  article,
}: ArticleModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="px-8 pt-8 pb-6 border-b">
          <DialogTitle className="text-2xl font-bold leading-snug">
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="px-8 py-8 space-y-6">
          <p className="text-base text-foreground font-medium leading-relaxed border-l-2 border-ring pl-4">
            {article.intro}
          </p>

          <div className="space-y-5">
            {article.paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-sm text-muted-foreground leading-[1.8]"
              >
                {para}
              </p>
            ))}
          </div>

          {article.closing && (
            <p className="text-sm text-foreground/70 italic leading-relaxed border-t pt-6 mt-6">
              {article.closing}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
