import { Handle, Position, type NodeProps } from "@xyflow/react";
import { cn } from "@/lib/utils";

type FlowNodeData = {
  label: string;
  subtitle?: string;
  variant?: "default" | "primary" | "source" | "gate";
};

const variantStyles = {
  default:
    "bg-card border-border text-foreground",
  primary:
    "bg-primary text-primary-foreground border-primary",
  source:
    "bg-accent text-accent-foreground border-primary/30",
  gate:
    "bg-amber-50 text-amber-900 border-amber-300 dark:bg-amber-950 dark:text-amber-200 dark:border-amber-700",
};

export function FlowNode({ data }: NodeProps) {
  const nodeData = data as FlowNodeData;
  const variant = nodeData.variant ?? "default";

  return (
    <>
      <Handle type="target" position={Position.Top} className="!bg-transparent !border-0 !w-0 !h-0" />
      <div
        className={cn(
          "px-4 py-2.5 rounded-lg border shadow-sm text-center min-w-[170px]",
          variantStyles[variant]
        )}
      >
        <div className="text-sm font-semibold leading-tight">{nodeData.label}</div>
        {nodeData.subtitle && (
          <div
            className={cn(
              "text-xs mt-0.5 leading-tight",
              variant === "primary"
                ? "text-primary-foreground/80"
                : variant === "gate"
                ? "text-amber-700 dark:text-amber-300"
                : "text-muted-foreground"
            )}
          >
            {nodeData.subtitle}
          </div>
        )}
      </div>
      <Handle type="source" position={Position.Bottom} className="!bg-transparent !border-0 !w-0 !h-0" />
    </>
  );
}
