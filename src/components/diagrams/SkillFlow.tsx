import {
  ReactFlow,
  type Node,
  type Edge,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { FlowNode } from "./FlowNode";

const nodeTypes = { flowNode: FlowNode };
const AMBER = "hsl(32 95% 44%)";
const GREEN = "hsl(142 50% 38%)";
const GREY = "hsl(215 16% 47%)";

export interface FlowNodeConfig {
  id: string;
  label: string;
  subtitle?: string;
  variant?: "default" | "primary" | "source" | "gate";
  x: number;
  y: number;
}

export interface FlowEdgeConfig {
  from: string;
  to: string;
  label?: string;
  animated?: boolean;
  color?: "amber" | "green";
}

interface SkillFlowProps {
  nodes: FlowNodeConfig[];
  edges: FlowEdgeConfig[];
  height?: number;
}

export function SkillFlow({
  nodes: nodeConfigs,
  edges: edgeConfigs,
  height = 400,
}: SkillFlowProps) {
  const nodes: Node[] = nodeConfigs.map((n) => ({
    id: n.id,
    type: "flowNode",
    position: { x: n.x, y: n.y },
    data: {
      label: n.label,
      subtitle: n.subtitle,
      variant: n.variant ?? "default",
    },
  }));

  const edges: Edge[] = edgeConfigs.map((e, i) => {
    const color = e.color === "green" ? GREEN : AMBER;
    return {
      id: `e-${i}`,
      source: e.from,
      target: e.to,
      type: "smoothstep",
      animated: e.animated,
      label: e.label,
      style: { stroke: color },
      markerEnd: { type: MarkerType.ArrowClosed, color },
      ...(e.label
        ? {
            labelStyle: {
              fontSize: 11,
              fill: e.color === "green" ? GREEN : GREY,
            },
          }
        : {}),
    };
  });

  return (
    <div
      className="w-full rounded-lg border bg-muted/30"
      style={{ height }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        preventScrolling={false}
      />
    </div>
  );
}
