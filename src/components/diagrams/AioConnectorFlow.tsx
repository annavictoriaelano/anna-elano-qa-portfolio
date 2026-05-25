import {
  ReactFlow,
  type Node,
  type Edge,
  Position,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { FlowNode } from "./FlowNode";

const nodeTypes = { flowNode: FlowNode };

const nodes: Node[] = [
  {
    id: "aio",
    type: "flowNode",
    position: { x: 0, y: 0 },
    data: {
      label: "Jira AIO TCMS",
      subtitle: "Source of truth",
      variant: "source",
    },
  },
  {
    id: "connector",
    type: "flowNode",
    position: { x: 0, y: 120 },
    data: {
      label: "AIO Connector",
      subtitle: "9 API operations",
      variant: "primary",
    },
  },
  {
    id: "gate",
    type: "flowNode",
    position: { x: 0, y: 240 },
    data: {
      label: "QA Review Gate",
      subtitle: "Nothing auto-writes",
      variant: "gate",
    },
  },
  {
    id: "claude",
    type: "flowNode",
    position: { x: -160, y: 360 },
    data: {
      label: "Claude Code Skills",
      subtitle: "Script creation, review, execution",
      variant: "default",
    },
  },
  {
    id: "scripts",
    type: "flowNode",
    position: { x: 160, y: 360 },
    data: {
      label: "Test Scripts & POMs",
      subtitle: "Detox / Playwright",
      variant: "default",
    },
  },
];

const edges: Edge[] = [
  {
    id: "aio-connector",
    source: "aio",
    target: "connector",
    type: "smoothstep",
    animated: true,
    label: "Read / Write",
    style: { stroke: "hsl(32 95% 44%)" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "hsl(32 95% 44%)" },
    labelStyle: { fontSize: 11, fill: "hsl(215 16% 47%)" },
  },
  {
    id: "connector-gate",
    source: "connector",
    target: "gate",
    type: "smoothstep",
    style: { stroke: "hsl(32 95% 44%)" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "hsl(32 95% 44%)" },
  },
  {
    id: "gate-claude",
    source: "gate",
    target: "claude",
    type: "smoothstep",
    label: "Approved",
    style: { stroke: "hsl(142 50% 38%)" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "hsl(142 50% 38%)" },
    labelStyle: { fontSize: 11, fill: "hsl(142 50% 38%)" },
  },
  {
    id: "gate-scripts",
    source: "gate",
    target: "scripts",
    type: "smoothstep",
    label: "Triggers",
    style: { stroke: "hsl(142 50% 38%)" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "hsl(142 50% 38%)" },
    labelStyle: { fontSize: 11, fill: "hsl(142 50% 38%)" },
  },
];

export function AioConnectorFlow() {
  return (
    <div className="w-full h-[380px] rounded-lg border bg-muted/30">
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
