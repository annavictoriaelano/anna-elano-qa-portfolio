import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ProjectCard, type ProjectCardProps } from "@/components/ProjectCard";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";
import { AioConnectorFlow } from "@/components/diagrams/AioConnectorFlow";
import { Badge } from "@/components/ui/badge";
import {
  Layers,
  Smartphone,
  Globe,
  Bot,
  Brain,
  Search,
  Database,
  ShieldCheck,
  ListChecks,
  Terminal,
  Code,
  ArrowRight,
  GitBranch,
  BookOpen,
  RefreshCw,
  ClipboardList,
  Rocket,
  FileText,
  Library,
  Shield,
  Zap,
  Lightbulb,
} from "lucide-react";

/* ── helpers ─────────────────────────────────────────── */

function SectionHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground whitespace-nowrap">
          {title}
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>
      {description && (
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      )}
    </div>
  );
}

function PipelineTeaser() {
  return (
    <div className="my-14 py-8 px-8 rounded-2xl bg-primary/[0.03] border border-primary/10 text-center">
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-mono text-muted-foreground mb-3">
        <span>14 Claude Skills</span>
        <span className="text-ring">·</span>
        <span>8 QA Workflows</span>
        <span className="text-ring">·</span>
        <span>1,541 Test Cases</span>
      </div>
      <p className="text-foreground/80 font-medium text-sm">
        Every skill has a QA intervention gate. Nothing auto-writes without
        review.
      </p>
    </div>
  );
}

/* ── project data ────────────────────────────────────── */

const foundation: ProjectCardProps = {
  title: "AI Orchestration Foundation",
  summary:
    "The thesis: AI-augmented QA works at scale because the foundation is stable. A 4-layer system design governing knowledge bases, reusable patterns, skill routing, and TCMS integration.",
  tech: "System Design · Claude Code · Position Paper",
  icon: Layers,
  whatItDoes: [
    "Defines a 4-layer architecture: knowledge base (SME notes per module), pattern library (48 reusable Detox patterns), skill routing (14 Claude skills with QA gates), and TCMS integration (AIO Connector)",
    "Every AI workflow operates within this architecture. No skill runs outside the defined pathways.",
    "Knowledge base built per-module before any test script is created. SME notes capture app behavior, edge cases, and business rules from live exploration.",
    "Pattern library compounds across sessions. Each solved problem becomes a documented, reusable pattern.",
    "Skill routing discipline ensures AI follows defined workflows. RCA-driven enforcement catches any bypass attempt.",
  ],
  whatItAchieves: [
    "1,541 test cases authored with AI assistance, every one reviewed and approved before entering the TCMS",
    "14 Claude skills operating under strict QA governance. No auto-writes, no unchecked outputs.",
    "Repeat debugging reduced by an estimated 60-70% through compounding pattern library after the first 3 modules",
    "System scales to new modules without rearchitecting. Same foundation, consistent quality.",
    "Demonstrates that AI-augmented QA is QA governing AI, not AI replacing QA",
  ],
};

const testAutomation: ProjectCardProps[] = [
  {
    title: "Detox E2E Mobile Automation",
    summary:
      "E2E suite for a React Native app across iOS and Android. POM architecture, CI/CD integration, and a 10-skill Claude pipeline from script creation to debugging.",
    tech: "Detox · TypeScript · Page Object Model · GitHub Actions",
    icon: Smartphone,
    metric: { value: "1,541", label: "Test Cases" },
    whatItDoes: [
      "Runs end-to-end tests on iOS simulator and Android emulator against a React Native app with Expo custom dev client",
      "Page Object Model architecture: 19 screen helpers abstracting navigation, selectors, and interactions",
      "10 Claude skills covering the full pipeline: SME knowledge build, script creation, script review with quality gates, execution with batch resets, and screenshot-first debugging",
      "48 reusable Detox patterns documented and cross-linked (sync timing, modal handling, scroll discovery, fixture management)",
      "GitHub Actions CI/CD integration with results feeding into Jira AIO and Allure Reports",
    ],
    whatItAchieves: [
      "1,541 test cases under AIO coverage, 888 passing across 16 modules in ~5 weeks",
      "Regression cycle reduced from 4 days to approximately 2-3 days",
      "Module 7 SWMS: 222 test cases, all real passes, no false positives. The run that unlocked the remaining 12+ report types",
      "Full module sweep time cut by ~70% through Fast Login, Fast Scan-In, and beforeAll restructuring",
      "Coverage spans 8 subscription tiers, multiple user roles with distinct permission matrices, and 3 locales",
    ],
  },
  {
    title: "Playwright E2E Web Automation",
    summary:
      "Web automation rebuilt from inline locators to Page Object Model. Results feed Jira AIO and Allure Reports for unified cross-platform tracking.",
    tech: "Playwright · TypeScript · Page Object Model · Allure Reports",
    icon: Globe,
    metric: { value: "200+", label: "Spec Files" },
    whatItDoes: [
      "Refactored existing 200+ spec files from inline locators to Page Object Model architecture",
      "4 Hub-specific Claude skills scaffolded: hub-sme-build, hub-sme-reviewer, hub-tc-creation, hub-test",
      "Same foundation patterns as mobile automation: SME-note discipline, pattern-library compounding, skill-routing rules",
      "Results feed into Jira AIO cycles and Allure Reports for unified cross-platform tracking",
      "AIO Connector skill ported to the Hub automation repo for consistent TCMS integration",
    ],
    whatItAchieves: [
      "Refactored from zero abstraction to structured POM, reducing maintenance cost for 620+ existing tests",
      "Unified reporting across mobile and web through shared Jira AIO integration",
      "Foundation patterns transfer directly from mobile: same SME discipline, same pattern library compounding, same skill routing",
      "Hub automation now ready for team-wide scaling once POM refactor completes",
    ],
  },
];

const aiPipeline: ProjectCardProps[] = [
  {
    title: "AIO Connector",
    summary:
      "Custom integration making Jira AIO the single source of truth. Nine API operations with a QA gate on every write.",
    tech: "TypeScript · Claude Code Skills · REST API · Jira AIO API",
    icon: Bot,
    metric: { value: "9", label: "API Operations" },
    diagram: <AioConnectorFlow />,
    whatItDoes: [
      "Wraps the Jira AIO TCMS API with 9 operations: list folders, search test cases, get detail, update test runs, list/create cycles, add cases to cycles, get cycle runs, bulk tag updates, and cycle creation",
      "Makes Jira AIO the single source of truth. All tools (Claude Code, CI, future integrations) read from and write to AIO directly",
      "Flags impacted test scripts automatically when any change request is made against a test case",
      "QA intervention gate on every write operation. No test case, cycle, or run status is updated without human review",
      "Discovered and documented the correct API endpoint for cycle creation after the obvious endpoint returned a misleading HTTP 500 error",
    ],
    whatItAchieves: [
      "Eliminated parallel sources of truth across docs, spreadsheets, repo notes, and Jira comments",
      "Powers 18+ AIO cycles and 1,541 test cases under unified tracking",
      "Enables the full test creation pipeline: TCMS to knowledge base to script to passing test",
      "Self-healing test maintenance: any change in AIO surfaces impacted scripts before they silently break",
      "~100 API calls per session with zero errors after the endpoint correction",
    ],
  },
  {
    title: "SME Build",
    summary:
      "Builds module knowledge from live app, codebase, and AIO test cases",
    tech: "Claude Code Skills · Obsidian",
    icon: Brain,
    placeholder: true,
  },
  {
    title: "SME Reviewer",
    summary:
      "Domain review of scripts against SME knowledge, flags gaps before execution",
    tech: "Claude Code Skills · QA Review",
    icon: Search,
    placeholder: true,
  },
  {
    title: "Vault Governance",
    summary:
      "Governs all vault writes, enforces conventions, runs session lifecycle",
    tech: "Claude Code Skills · Obsidian",
    icon: Database,
    placeholder: true,
  },
  {
    title: "Vault Health Check",
    summary:
      "Weekly audit catching cross-session drift before it compounds",
    tech: "Claude Code Skills · Obsidian",
    icon: ShieldCheck,
    placeholder: true,
  },
  {
    title: "Test Case Creation",
    summary:
      "Generates BDD/Gherkin test cases, publishes directly to Jira AIO",
    tech: "Claude Code Skills · Jira AIO API · BDD",
    icon: ListChecks,
    placeholder: true,
  },
  {
    title: "Test Script Pipeline",
    summary:
      "Four-stage pipeline: script creation, lead-engineer review, execution, and screenshot-first debugging",
    tech: "Claude Code Skills · Detox · TypeScript",
    icon: Terminal,
    placeholder: true,
  },
  {
    title: "Technical Source Contributions",
    summary:
      "Production bugs, dev proposals, planning docs, and release RCAs",
    tech: "QA Contributions · Jira · Confluence",
    icon: Code,
    placeholder: true,
  },
];

const processMethodology: ProjectCardProps[] = [
  {
    title: "Test Creation Pipeline",
    summary:
      "Five-stage end-to-end: TCs to scripts to review to run to debug",
    tech: "QA Workflow",
    icon: GitBranch,
    placeholder: true,
  },
  {
    title: "Vault Knowledge Lifecycle",
    summary:
      "Session start context, mid-session capture, closeout delta pass",
    tech: "QA Workflow · Obsidian",
    icon: BookOpen,
    placeholder: true,
  },
  {
    title: "SME Knowledge Cycle",
    summary: "Build, review, refresh lifecycle for module knowledge",
    tech: "QA Workflow",
    icon: Lightbulb,
    placeholder: true,
  },
  {
    title: "AIO TCMS Lifecycle",
    summary:
      "Folder to TC to BDD steps to cycle to run to status sync",
    tech: "QA Workflow · Jira AIO",
    icon: RefreshCw,
    placeholder: true,
  },
  {
    title: "Sprint Ticket Testing",
    summary:
      "AI-assisted manual QA, strict separation from automation",
    tech: "QA Workflow · Claude Code",
    icon: ClipboardList,
    placeholder: true,
  },
  {
    title: "Release Prep & Regression",
    summary:
      "Scope reconciliation, regression coordination, and release greenlight",
    tech: "QA Workflow · Release Management",
    icon: Rocket,
    placeholder: true,
  },
];

const perspectives: ProjectCardProps[] = [
  {
    title: "Write Broadly, Regress Selectively",
    summary:
      "Position paper: AI lowered the cost of writing tests, not the cost of broken pipelines. Defines four graduation criteria for regression promotion.",
    tech: "QA Strategy · Automation Philosophy · Position Paper",
    icon: FileText,
    metric: { value: "4", label: "Graduation Criteria" },
    whatItDoes: [
      "Defines the principle: AI removed the cost of writing tests, not the cost of a broken pipeline",
      "Separates feature automation (write everything, AI makes this cheap) from regression automation (only what your environment can run reliably with a clean signal)",
      "Establishes four graduation criteria for promoting feature scripts to regression: environment stable, test data managed, consistent pass rate, feature released",
      "Provides ready-to-use meeting language for defending regression scope decisions",
    ],
    whatItAchieves: [
      "Future regression scope conversations reference the document rather than relitigating the principle",
      "Team has a shared answer to 'is this ready for regression?' that does not depend on one person being in the room",
      "Prevented overengineering: automating everything because 'there is AI' is explicitly called out as an anti-pattern with a real cautionary example",
      "Positions QA judgment as the differentiator in AI-augmented orgs, not typing speed",
    ],
  },
  {
    title: "SME Knowledge as Canonical Source",
    summary:
      "Why the knowledge base is the foundation, not the scripts",
    tech: "QA Assessment · Knowledge Management",
    icon: Library,
    placeholder: true,
  },
  {
    title: "Skill Routing Discipline",
    summary:
      "RCA-driven enforcement when AI bypasses the skill pathways",
    tech: "QA Assessment · AI Governance",
    icon: Shield,
    placeholder: true,
  },
  {
    title: "Mid-Session Capture Beats Batching",
    summary:
      "Real-time capture beats batch documentation, compounds over time",
    tech: "QA Assessment · Vault Discipline",
    icon: Zap,
    placeholder: true,
  },
];

/* ── page component ──────────────────────────────────── */

const Projects = () => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectCardProps | null>(null);

  const handleClick = (project: ProjectCardProps) => {
    if (!project.placeholder) {
      setSelectedProject(project);
    }
  };

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Page header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real work from production environments. Each project represents
              systems I designed, built, and own.
            </p>
          </div>

          {/* ── The Foundation ── */}
          <div className="mb-20 animate-fade-in-up">
            <SectionHeader
              title="The Foundation"
              description="The thesis that governs everything else"
            />
            <div
              className="relative overflow-hidden rounded-2xl bg-primary dark:bg-[hsl(222_25%_14%)] p-8 sm:p-10 cursor-pointer group transition-all duration-300 hover:shadow-xl"
              onClick={() => handleClick(foundation)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleClick(foundation);
                }
              }}
            >
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-ring/10" />
              <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-ring/5" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-ring/20 text-ring">
                    <Layers className="h-6 w-6" />
                  </div>
                  <Badge className="bg-ring/20 text-ring border-0 text-xs uppercase tracking-wider font-mono">
                    System Design
                  </Badge>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground dark:text-white/95 mb-3">
                  AI Orchestration Foundation
                </h3>

                <p className="text-primary-foreground/70 dark:text-white/60 max-w-2xl leading-relaxed mb-6">
                  {foundation.summary}
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-mono text-primary-foreground/40 dark:text-white/35 mb-6">
                  <span>4-Layer Architecture</span>
                  <span className="text-ring/60">·</span>
                  <span>14 Claude Skills</span>
                  <span className="text-ring/60">·</span>
                  <span>48 Reusable Patterns</span>
                  <span className="text-ring/60">·</span>
                  <span>Position Paper</span>
                </div>

                <div className="flex items-center gap-2 text-ring font-medium group-hover:gap-3 transition-all">
                  View the foundation
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>

          {/* ── Test Automation ── */}
          <div className="animate-fade-in-up">
            <SectionHeader
              title="Test Automation"
              description="Production suites I built and own end-to-end"
            />
            <div className="grid md:grid-cols-2 gap-6">
              {testAutomation.map((project, i) => (
                <div
                  key={project.title}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <ProjectCard
                    {...project}
                    onClick={() => handleClick(project)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── Teaser Strip ── */}
          <PipelineTeaser />

          {/* ── AI-Augmented QA Pipeline ── */}
          <div className="mb-20">
            <SectionHeader title="AI-Augmented QA Pipeline" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {aiPipeline.map((project, i) => (
                <div
                  key={project.title}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <ProjectCard
                    {...project}
                    onClick={() => handleClick(project)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── Process & Methodology ── */}
          <div className="mb-20">
            <SectionHeader
              title="Process & Methodology"
              description="Documented workflows governing how QA operates"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {processMethodology.map((project, i) => (
                <div
                  key={project.title}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <ProjectCard
                    {...project}
                    onClick={() => handleClick(project)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── QA Perspectives ── */}
          <div className="mb-10">
            <SectionHeader
              title="QA Perspectives"
              description="Position papers backed by production evidence"
            />
            <div className="grid sm:grid-cols-2 gap-6">
              {perspectives.map((project, i) => (
                <div
                  key={project.title}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <ProjectCard
                    {...project}
                    onClick={() => handleClick(project)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectDetailModal
          open={!!selectedProject}
          onOpenChange={(open) => {
            if (!open) setSelectedProject(null);
          }}
          title={selectedProject.title}
          tech={selectedProject.tech}
          diagram={selectedProject.diagram}
          whatItDoes={selectedProject.whatItDoes ?? []}
          whatItAchieves={selectedProject.whatItAchieves ?? []}
        />
      )}
    </Layout>
  );
};

export default Projects;
