import {
  ReactFlow,
  type Node,
  type Edge,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { FlowNode } from "./FlowNode";

const nodeTypes = { flowNode: FlowNode };

const nodes: Node[] = [
  {
    id: "knowledge",
    type: "flowNode",
    position: { x: -220, y: 0 },
    data: { label: "Knowledge Base", variant: "source" },
  },
  {
    id: "skills",
    type: "flowNode",
    position: { x: 0, y: 0 },
    data: { label: "Skills & Memory", variant: "source" },
  },
  {
    id: "tooling",
    type: "flowNode",
    position: { x: 220, y: 0 },
    data: { label: "Integrated Tooling", variant: "source" },
  },
  {
    id: "ai",
    type: "flowNode",
    position: { x: 0, y: 150 },
    data: { label: "Claude Code", variant: "primary" },
  },
  {
    id: "gate",
    type: "flowNode",
    position: { x: 0, y: 300 },
    data: { label: "QA Governance Gate", variant: "gate" },
  },
  {
    id: "output",
    type: "flowNode",
    position: { x: 0, y: 440 },
    data: { label: "QA Output", variant: "default" },
  },
];

const edges: Edge[] = [
  {
    id: "knowledge-ai",
    source: "knowledge",
    target: "ai",
    type: "smoothstep",
    animated: true,
    style: { stroke: "hsl(32 95% 44%)" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "hsl(32 95% 44%)" },
  },
  {
    id: "skills-ai",
    source: "skills",
    target: "ai",
    type: "smoothstep",
    animated: true,
    style: { stroke: "hsl(32 95% 44%)" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "hsl(32 95% 44%)" },
  },
  {
    id: "tooling-ai",
    source: "tooling",
    target: "ai",
    type: "smoothstep",
    animated: true,
    style: { stroke: "hsl(32 95% 44%)" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "hsl(32 95% 44%)" },
  },
  {
    id: "ai-gate",
    source: "ai",
    target: "gate",
    type: "smoothstep",
    style: { stroke: "hsl(32 95% 44%)" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "hsl(32 95% 44%)" },
  },
  {
    id: "gate-output",
    source: "gate",
    target: "output",
    type: "smoothstep",
    label: "Approved",
    style: { stroke: "hsl(142 50% 38%)" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "hsl(142 50% 38%)" },
    labelStyle: { fontSize: 11, fill: "hsl(142 50% 38%)" },
  },
];

export function FoundationFlow() {
  return (
    <div className="w-full h-[520px] rounded-lg border bg-muted/30">
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
