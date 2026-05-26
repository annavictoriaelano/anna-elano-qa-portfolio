import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ProjectCard, type ProjectCardProps } from "@/components/ProjectCard";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";
import { AioConnectorFlow } from "@/components/diagrams/AioConnectorFlow";
import { FoundationFlow } from "@/components/diagrams/FoundationFlow";
import { SkillFlow } from "@/components/diagrams/SkillFlow";
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
  ShoppingCart,
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
      <p className="text-foreground font-semibold text-base mb-2">
        The automation above runs on a pipeline I built from scratch.
      </p>
      <p className="text-muted-foreground text-sm max-w-xl mx-auto">
        Every test case, script, and review cycle is governed by AI skills I
        designed with human checkpoints at every stage. Explore the
        AI-Augmented QA Pipeline below.
      </p>
    </div>
  );
}

function MetricsHighlight({
  metrics,
}: {
  metrics: { value: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {metrics.map((m, i) => (
        <div
          key={i}
          className="text-center p-4 rounded-xl bg-accent/30 border border-border/50"
        >
          <div className="text-xl font-bold text-ring font-mono">
            {m.value}
          </div>
          <div className="text-[11px] text-muted-foreground mt-1 uppercase tracking-wide leading-tight">
            {m.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── project data ────────────────────────────────────── */

const foundation: ProjectCardProps = {
  title: "AI Orchestration Foundation",
  summary:
    "AI-augmented QA works at scale when the foundation is stable. A framework governing QA knowledge, reusable automation patterns, AI skill routing with human intervention, and test management integration.",
  // tech: "QA Framework · AI Governance · Automation Architecture",
  icon: Layers,
  diagram: <FoundationFlow />,
  whatItDoes: [
    "Establishes a 4-layer framework: QA knowledge base, reusable automation pattern library, AI skill routing with human intervention, and TCMS integration",
    "Every AI workflow operates within this framework. Test case generation follows the knowledge base. Script creation follows team conventions. Reviews follow defined quality gates. Nothing runs outside the governed pathways.",
    "Knowledge base provides the context AI needs to generate test cases and scripts that match team standards. Subject matter expert (SME) notes capture system behavior from live exploration, continuously expanding what AI knows about the product.",
    "Pattern library compounds across sessions. Each solved problem becomes a documented, reusable pattern.",
    "Skill routing discipline ensures AI follows defined workflows. When AI deviates, the system catches and corrects it before any damage reaches the test suite.",
  ],
  whatItAchieves: [
    "From day one, AI generates test cases and scripts that match your team's standards exactly. No unnecessary coverage, no substandard practices like hardcoded values or skipped cleanup. What ships is what your team defined.",
    "Every AI skill operates under strict QA governance. No auto-writes, no unchecked outputs. AI behaves exactly how the team defines it should.",
    "Repeat debugging reduced by an estimated 60-70% as the pattern library compounds over time",
    "Already replicated across mobile (Detox) and web (Playwright) with the same architecture. Works whether your team has mature automation or is transitioning from manual testing.",
    "AI-augmented QA is QA governing AI, not AI replacing QA",
  ],
};

const testAutomation: ProjectCardProps[] = [
  {
    title: "Mobile Automation for a SaaS Company",
    summary:
      "Built a complete E2E suite from zero for a React Native app serving NZ, AU, and UK markets. Page Object Model architecture, AI-augmented pipeline, and CI/CD integration.",
    icon: Smartphone,
    highlightLabel: "Key Results",
    diagram: (
      <MetricsHighlight
        metrics={[
          { value: "TBA%", label: "Faster Regression" },
          { value: "~5 wks", label: "Built From Zero" },
          { value: "~70%", label: "Faster Sweeps" },
          { value: "16", label: "Modules Covered" },
        ]}
      />
    ),
    whatItDoes: [
      "Built from scratch with no existing automation infrastructure. Designed the architecture, selected patterns, and delivered a running suite in approximately 5 weeks.",
      "Page Object Model architecture: 19 screen helpers abstracting navigation, selectors, and interactions across the entire application",
      "AI-augmented pipeline covering the full test lifecycle: knowledge capture, test case generation, script creation, review with quality gates, execution, and screenshot-first debugging",
      "48 reusable automation patterns documented and cross-linked, covering sync timing, modal handling, scroll discovery, and test data management",
      "Integrated into GitHub Actions CI/CD with results feeding Jira AIO and Allure Reports for full traceability",
    ],
    whatItAchieves: [
      "Regression cycle reduced from 4 days to approximately 2 days, freeing QA capacity for exploratory testing and higher-risk areas",
      "Module sweep time cut by approximately 70% through optimized login flows, setup restructuring, and reusable beforeAll patterns",
      "Zero false positives on the benchmark module: 222 test cases, all real passes. The quality standard that unlocked scaling to 12+ report types.",
      "Coverage spans 8 subscription tiers, multiple user roles with distinct permission matrices, and 3 locales",
      "One QA engineer, end-to-end ownership: architecture, patterns, scripts, CI/CD, and reporting",
    ],
  },
  {
    title: "Web Automation for a SaaS Company",
    summary:
      "Rebuilt an existing test suite from inline locators to Page Object Model. Unified reporting across mobile and web platforms.",
    icon: Globe,
    highlightLabel: "Key Results",
    diagram: (
      <MetricsHighlight
        metrics={[
          { value: "200+", label: "Specs Refactored" },
          { value: "620+", label: "Tests Under POM" },
          { value: "4", label: "AI Skills Built" },
          { value: "2", label: "Platforms Unified" },
        ]}
      />
    ),
    whatItDoes: [
      "Refactored 200+ existing spec files from inline locators to structured Page Object Model architecture",
      "Applied the same foundation patterns from mobile automation: SME knowledge capture, pattern library compounding, and skill-based AI governance",
      "4 platform-specific AI skills scaffolded for knowledge build, review, test case creation, and execution",
      "Results feed into Jira AIO cycles and Allure Reports, creating unified cross-platform test reporting",
      "AIO Connector integration ported from mobile, ensuring consistent TCMS workflow across both platforms",
    ],
    whatItAchieves: [
      "Refactored from zero abstraction to structured POM, reducing maintenance cost for 620+ existing tests",
      "Unified reporting across mobile and web through shared Jira AIO integration",
      "Foundation patterns proven portable: same architecture, same discipline, different platform, same results",
      "Automation foundation ready for team-wide scaling",
    ],
  },
  {
    title: "Web Automation for an E-commerce Site",
    summary:
      "Playwright E2E suite covering a full e-commerce user journey. 104 automated tests across 7 modules with POM architecture, cross-browser testing, and CI/CD.",
    icon: ShoppingCart,
    status: "In Development",
    repoUrl: "https://github.com/annavictoriaelano/e-commerce-automation-project",
    highlightLabel: "Coverage",
    diagram: (
      <MetricsHighlight
        metrics={[
          { value: "104", label: "Automated Tests" },
          { value: "7", label: "Modules" },
          { value: "3", label: "Browsers" },
          { value: "20", label: "Spec Files" },
        ]}
      />
    ),
    whatItDoes: [
      "Covers the complete e-commerce user journey: login and authentication, product catalog, product details, shopping cart, checkout process, order confirmation, and navigation",
      "Page Object Model with BasePage inheritance: common methods shared across all page objects, keeping test logic clean and maintenance low",
      "Cross-browser testing across Chromium, Firefox, and WebKit in parallel via Playwright's native multi-browser support",
      "GitHub Actions CI/CD pipeline: tests run on every push to main, execute across browsers in parallel, and store reports as artifacts",
      "Structured test case naming convention (M01_TS01_TC01) matching the same organizational discipline used in production QA work",
    ],
    whatItAchieves: [
      "104 automated test cases covering critical user journeys from login to order confirmation, with edge cases for validation and error handling",
      "Demonstrates the same POM architecture and test discipline used in production SaaS work, applied independently to a new codebase",
      "Full CI/CD integration: every push triggers automated cross-browser validation with reports",
      "Public, reviewable code proving hands-on Playwright and TypeScript competence",
    ],
  },
  {
    title: "TBA Web Automation",
    summary:
      "Playwright project with deeper focus on API testing and performance validation. Stack and scope to be announced.",
    icon: Globe,
    status: "Planned",
    whatItDoes: [
      "API testing with Playwright's request context: endpoint validation, response schema checks, and integration with UI flows",
      "Performance benchmarks: page load metrics, time-to-interactive, and resource timing captured alongside functional tests",
      "Scope and target application to be announced",
    ],
    whatItAchieves: [
      "Extends portfolio coverage beyond UI automation into API and performance layers",
      "Demonstrates breadth across the full testing pyramid: UI, API, and performance",
      "Details to be announced",
    ],
  },
];

const aiPipeline: ProjectCardProps[] = [
  {
    title: "Test Management Connector",
    summary:
      "Custom integration connecting your TCMS to AI workflows. Nine API operations with a QA gate on every write.",
    icon: Bot,
    diagram: <AioConnectorFlow />,
    whatItDoes: [
      "Wraps your test case management system's API into a unified interface. Covers test case search, cycle management, bulk updates, run tracking, and status sync.",
      "Makes the TCMS the single source of truth. Every tool in the pipeline (AI skills, CI, reporting) reads from and writes to the same system.",
      "Flags impacted test scripts automatically when any change is made to a test case. Prevents scripts from silently drifting from the spec.",
      "QA intervention gate on every write operation. No test case, cycle, or run status is updated without human review.",
      "Built on Jira AIO with nine API operations. Architecture is adaptable to any TCMS with a REST API (TestRail, Zephyr, Azure Test Plans).",
    ],
    whatItAchieves: [
      "Eliminates parallel sources of truth across docs, spreadsheets, repo notes, and chat messages",
      "Enables end-to-end traceability: from requirement to test case to script to run result, all in one system",
      "Self-healing test maintenance: changes in the TCMS surface impacted scripts before they silently break",
      "Already proven at production scale with 1,500+ test cases under unified tracking",
      "Adaptable to your TCMS. The integration pattern transfers; only the API endpoints change.",
    ],
  },
  {
    title: "Test Automation Pipeline",
    summary:
      "Five-stage end-to-end: from a spec to a passing test run synced to the TCMS. Each stage has its own AI skill, exit criteria, and human checkpoint.",
    icon: GitBranch,
    diagram: (
      <SkillFlow
        height={550}
        nodes={[
          { id: "tc", label: "TC Creation", variant: "source", x: 0, y: 0 },
          { id: "script", label: "Script Creation", variant: "primary", x: 0, y: 110 },
          { id: "review", label: "Script Review", variant: "gate", x: 0, y: 220 },
          { id: "execute", label: "Execution", variant: "primary", x: 0, y: 330 },
          { id: "debug", label: "Debug", variant: "default", x: 0, y: 440 },
          { id: "synced", label: "TCMS Synced", variant: "source", x: 0, y: 540 },
        ]}
        edges={[
          { from: "tc", to: "script", animated: true },
          { from: "script", to: "review" },
          { from: "review", to: "execute", label: "Approved", color: "green" },
          { from: "execute", to: "debug", label: "Failures" },
          { from: "execute", to: "synced", label: "Passed", color: "green" },
        ]}
      />
    ),
    whatItDoes: [
      "Codifies the full test lifecycle into 5 governed stages: test case creation, script generation, script review, execution, and debugging",
      "Each stage is a separate AI skill with explicit triggers, exit criteria, and handoff rules. Stage transitions require human approval.",
      "Entry point is flexible: start from a spec (Stage 1), from existing test cases (Stage 2), or from existing scripts (Stage 4)",
      "Exit produces: published test cases in the TCMS, passing scripts in the repository, run results synced, and updated knowledge base",
    ],
    whatItAchieves: [
      "New modules go from zero to automated coverage in approximately 2 days, compared to 1-2 weeks without the pipeline",
      "The pipeline is the system. Individual QA decisions are important, but the pipeline ensures those decisions happen at the right time in the right order.",
      "Repeatable across any product or feature. The same 5 stages apply whether the module has 20 test cases or 200.",
      "Reduces dependency on tribal knowledge. The pipeline rules are codified, not remembered. Any QA engineer can follow them and produce consistent results.",
    ],
  },
  {
    title: "Test Case Creation Pipeline",
    summary:
      "Generates structured BDD/Gherkin test cases from any spec. Loads product knowledge first, publishes to the TCMS after QA review.",
    icon: ListChecks,
    diagram: (
      <SkillFlow
        height={480}
        nodes={[
          { id: "spec", label: "Spec / Ticket", variant: "source", x: 0, y: 0 },
          { id: "knowledge", label: "Knowledge Load", variant: "primary", x: 0, y: 120 },
          { id: "draft", label: "TC Draft", variant: "default", x: 0, y: 240 },
          { id: "gate", label: "QA Review", variant: "gate", x: 0, y: 360 },
          { id: "published", label: "Published to TCMS", variant: "source", x: 0, y: 470 },
        ]}
        edges={[
          { from: "spec", to: "knowledge", animated: true },
          { from: "knowledge", to: "draft" },
          { from: "draft", to: "gate" },
          { from: "gate", to: "published", label: "Approved", color: "green" },
        ]}
      />
    ),
    whatItDoes: [
      "Takes a spec, ticket, or feature description and generates structured BDD/Gherkin test cases with full traceability",
      "Loads product knowledge first. Every test case is informed by real system behavior (screen inventory, role matrix, known limitations), not just the requirement text.",
      "Two-phase workflow with a hard stop between drafting and publishing. QA reviews the full test case list before anything enters the TCMS.",
      "Handles three contexts: regression backfill for existing features, sprint tickets for new work, and cross-team feature specs",
    ],
    whatItAchieves: [
      "Test cases generated in minutes, not hours. Coverage decisions still made by QA; AI handles the structure and volume.",
      "Every test case is knowledge-aware. This is the difference between 'test that login works' and 'test that a NZ Admin with Enterprise tier can access Reports after first login.'",
      "Eliminates the 'AI wrote 50 test cases but half are duplicates or irrelevant' problem. Knowledge base context prevents redundancy.",
      "Published directly to the TCMS. No copy-paste, no format conversion, no manual entry.",
    ],
  },
  {
    title: "Test Script Creation Pipeline",
    summary:
      "Four governed stages: creation with live app exploration, lead-engineer review, execution with watchdog, and evidence-based debug.",
    icon: Terminal,
    diagram: (
      <SkillFlow
        height={420}
        nodes={[
          { id: "create", label: "Script Creation", variant: "primary", x: 0, y: 0 },
          { id: "review", label: "Script Review", variant: "gate", x: 0, y: 130 },
          { id: "execute", label: "Execution", variant: "primary", x: 0, y: 260 },
          { id: "debug", label: "Debug", variant: "default", x: 0, y: 380 },
        ]}
        edges={[
          { from: "create", to: "review" },
          { from: "review", to: "execute", label: "Approved", color: "green" },
          { from: "execute", to: "debug", label: "Failures" },
        ]}
      />
    ),
    whatItDoes: [
      "Stage 1 (Creation): Fetches test cases from the TCMS, loads knowledge context, explores the live app to capture real element identifiers (never guesses), and generates scripts against verified state",
      "Stage 2 (Review): Acts as a lead automation engineer. Flags unknown selectors, fragile locators, missing patterns, and domain mismatches. Generates targeted questions grouped by severity.",
      "Stage 3 (Execution): Runs scripts one at a time with automated failure detection. A silence watchdog catches hung tests within 3 minutes instead of hours.",
      "Stage 4 (Debug): Screenshot-first, evidence-based. Scans the pattern library for known solutions before inventing new ones. Proposes fixes; never applies scope-expanding changes without approval.",
    ],
    whatItAchieves: [
      "Rework rate dropped from approximately 30% to less than 10%. Each stage catches a different category of issues before they reach the next.",
      "Silent test hangs (simulator crashes, infinite waits) detected and halted in approximately 3 minutes instead of being discovered hours later",
      "Debug uses proven patterns first. The same fix that worked on one module is automatically suggested on the next.",
      "The pipeline is repeatable. Any QA engineer following these four stages gets consistent results, regardless of the module or feature.",
    ],
  },
  {
    title: "SME Build",
    summary:
      "Captures what AI needs to know about a feature before writing any test. Reads app, code, and specs to produce one knowledge document.",
    icon: Brain,
    diagram: (
      <SkillFlow
        height={400}
        nodes={[
          { id: "sources", label: "App + Code + Specs", variant: "source", x: 0, y: 0 },
          { id: "build", label: "SME Build", variant: "primary", x: 0, y: 130 },
          { id: "gate", label: "QA Review", variant: "gate", x: 0, y: 260 },
          { id: "note", label: "Knowledge Note", variant: "default", x: 0, y: 380 },
        ]}
        edges={[
          { from: "sources", to: "build", animated: true },
          { from: "build", to: "gate" },
          { from: "gate", to: "note", label: "Approved", color: "green" },
        ]}
      />
    ),
    whatItDoes: [
      "Reads the live app, codebase, specifications, and existing test coverage to capture everything about a feature in one document",
      "Produces a structured knowledge note covering screen inventory, user roles, permission matrices, known limitations, and edge cases",
      "Runs before any test is created. Ensures AI has accurate product context, not generic assumptions.",
      "Self-updating: when specs change or new behavior is discovered, the knowledge note is refreshed and all downstream tests are flagged for review",
    ],
    whatItAchieves: [
      "AI generates tests based on real product knowledge, not guesses. Test accuracy matches what your team would produce manually, at a fraction of the time.",
      "New team members can read a knowledge note and understand a feature in minutes instead of weeks",
      "Prevents the most common AI failure: generating syntactically correct tests that target the wrong behavior, wrong role, or wrong locale",
      "Knowledge compounds: each feature documented once gets reused by every test, review, and debug cycle that follows",
    ],
  },
  {
    title: "SME Reviewer",
    summary:
      "Cross-checks every test against the knowledge base before it runs. Catches domain errors that syntax checks miss.",
    icon: Search,
    diagram: (
      <SkillFlow
        height={420}
        nodes={[
          { id: "scripts", label: "Test Scripts", variant: "default", x: -130, y: 0 },
          { id: "knowledge", label: "Knowledge Note", variant: "source", x: 130, y: 0 },
          { id: "review", label: "Domain Review", variant: "primary", x: 0, y: 140 },
          { id: "findings", label: "Findings Report", variant: "gate", x: 0, y: 280 },
          { id: "revised", label: "Revised Scripts", variant: "default", x: 0, y: 400 },
        ]}
        edges={[
          { from: "scripts", to: "review", animated: true },
          { from: "knowledge", to: "review", animated: true },
          { from: "review", to: "findings" },
          { from: "findings", to: "revised", label: "Fixed", color: "green" },
        ]}
      />
    ),
    whatItDoes: [
      "Cross-checks generated test scripts against the product knowledge base. Validates user roles, locale settings, assertion values, and edge case coverage.",
      "Operates in two modes: pre-scripting brief (loads context before creation) and post-generation review (catches domain errors after)",
      "Flags specific findings by severity: role mismatches, missing locale coverage, incorrect assertion values, pattern compliance gaps",
      "Catches errors that no syntax checker or linter can see: a test targeting the wrong subscription tier, a locale-specific feature tested with the wrong user, a known bug workaround skipped",
    ],
    whatItAchieves: [
      "Domain bugs caught before runtime, not during. Tests fail for real product bugs, not because the test itself was wrong.",
      "Prevents false passes: a test that runs against the wrong role can pass cleanly while testing nothing",
      "Ensures every test reflects how the product actually works, not how the spec says it should work",
      "The same review discipline transfers to any product. If AI is writing tests, something needs to verify the tests match reality.",
    ],
  },
  {
    title: "Technical Source Contributions",
    summary:
      "Production bugs, dev proposals, planning docs, and release RCAs",
    icon: Code,
    placeholder: true,
  },
];

const processMethodology: ProjectCardProps[] = [
  {
    title: "Vault Governance",
    summary:
      "Single point of control for all QA knowledge. Enforces consistent structure and captures learnings in real-time.",
    icon: Database,
    diagram: (
      <SkillFlow
        height={420}
        nodes={[
          { id: "start", label: "Session Start", variant: "source", x: 0, y: 0 },
          { id: "capture", label: "Mid-Session Capture", variant: "primary", x: 0, y: 130 },
          { id: "closeout", label: "Closeout Review", variant: "gate", x: 0, y: 260 },
          { id: "updated", label: "Knowledge Updated", variant: "default", x: 0, y: 380 },
        ]}
        edges={[
          { from: "start", to: "capture", animated: true },
          { from: "capture", to: "closeout" },
          { from: "closeout", to: "updated", label: "Verified", color: "green" },
        ]}
      />
    ),
    whatItDoes: [
      "Enforces consistent structure, naming, and cross-linking for all QA knowledge: patterns, bugs, SME notes, session logs, and progress tracking",
      "Three-phase session discipline: context load at start, real-time capture during work, and closeout with mandatory knowledge review",
      "Mid-session capture is non-negotiable. When a new pattern is discovered or a bug is found, it is documented immediately, not batched to the end.",
      "Every new artifact is cross-linked in three places: the index, the consuming document, and the session log. Orphaned knowledge is structurally impossible.",
    ],
    whatItAchieves: [
      "Knowledge compounds instead of decaying. Each session's learnings are available to every future session.",
      "Onboarding cost drops: new QA reads the vault, not a person's head. The knowledge base is the team's memory, not an individual's.",
      "Pattern reuse accelerates over time. The more patterns documented, the less debugging required. Each session is faster than the last.",
      "If the QA engineer leaves, the knowledge stays. Bus factor addressed by design, not by hope.",
    ],
  },
  {
    title: "Vault Health Check",
    summary:
      "Weekly audit catching drift that per-session checks miss. Read-only, surfaces inconsistencies before they compound.",
    icon: ShieldCheck,
    diagram: (
      <SkillFlow
        height={420}
        nodes={[
          { id: "trigger", label: "Weekly Trigger", variant: "source", x: 0, y: 0 },
          { id: "checks", label: "7 Audit Checks", variant: "primary", x: 0, y: 130 },
          { id: "report", label: "Findings Report", variant: "gate", x: 0, y: 260 },
          { id: "review", label: "QA Reviews + Fixes", variant: "default", x: 0, y: 380 },
        ]}
        edges={[
          { from: "trigger", to: "checks", animated: true },
          { from: "checks", to: "report" },
          { from: "report", to: "review", label: "Flagged", color: "green" },
        ]}
      />
    ),
    whatItDoes: [
      "Runs 7 automated checks weekly: stale knowledge notes, orphaned patterns, broken cross-links, unresolved bugs, missing session logs, naming inconsistencies, and stale tasks",
      "Read-only. Surfaces findings; never auto-patches. QA reviews the report and decides what to fix.",
      "Catches problems that build up across sessions: a pattern referenced in three places but renamed in one, a bug marked resolved but still in the workaround list",
      "Complements per-session closeout. Session closeout catches what changed today. Health check catches what drifted across weeks.",
    ],
    whatItAchieves: [
      "Prevents silent knowledge decay. Problems that would otherwise surface as wrong tests or missed coverage get flagged early.",
      "Average 5-10 findings per weekly run. Each finding fixed prevents a downstream error.",
      "Keeps the knowledge base trustworthy. If the team relies on the vault, the vault must be accurate. This is how you ensure that.",
    ],
  },
  {
    title: "Vault Knowledge Lifecycle",
    summary:
      "Session start context, mid-session capture, closeout delta pass",
    icon: BookOpen,
    placeholder: true,
  },
  {
    title: "SME Knowledge Cycle",
    summary: "Build, review, refresh lifecycle for module knowledge",
    icon: Lightbulb,
    placeholder: true,
  },
  {
    title: "AIO TCMS Lifecycle",
    summary:
      "Folder to TC to BDD steps to cycle to run to status sync",
    icon: RefreshCw,
    placeholder: true,
  },
  {
    title: "Sprint Ticket Testing",
    summary:
      "AI-assisted manual QA, strict separation from automation",
    icon: ClipboardList,
    placeholder: true,
  },
  {
    title: "Release Prep & Regression",
    summary:
      "Scope reconciliation, regression coordination, and release greenlight",
    icon: Rocket,
    placeholder: true,
  },
];

const perspectives: ProjectCardProps[] = [
  {
    title: "Write Broadly, Regress Selectively",
    summary:
      "Position paper: AI lowered the cost of writing tests, not the cost of broken pipelines. Defines four graduation criteria for regression promotion.",
    // tech: "QA Strategy · Automation Philosophy · Position Paper",
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
    // tech: "QA Assessment · Knowledge Management",
    icon: Library,
    placeholder: true,
  },
  {
    title: "Skill Routing Discipline",
    summary:
      "RCA-driven enforcement when AI bypasses the skill pathways",
    // tech: "QA Assessment · AI Governance",
    icon: Shield,
    placeholder: true,
  },
  {
    title: "Mid-Session Capture Beats Batching",
    summary:
      "Real-time capture beats batch documentation, compounds over time",
    // tech: "QA Assessment · Vault Discipline",
    icon: Zap,
    placeholder: true,
  },
];

/* ── page component ──────────────────────────────────── */

const Projects = () => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectCardProps | null>(null);

  const handleClick = (project: ProjectCardProps) => {
    if (!project.placeholder && project.whatItDoes?.length) {
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
              description="How I make AI work for your QA team"
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
                <div className="p-3 rounded-xl bg-ring/20 text-ring w-fit mb-6">
                  <Layers className="h-6 w-6" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground dark:text-white/95 mb-3">
                  AI Orchestration Foundation
                </h3>

                <p className="text-primary-foreground/60 dark:text-white/50 text-sm italic mb-4">
                  How I set up AI-assisted QA that your team can trust from day one
                </p>

                <p className="text-primary-foreground/70 dark:text-white/60 max-w-2xl leading-relaxed mb-6">
                  {foundation.summary}
                </p>

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
                    onClick={
                      project.whatItDoes?.length
                        ? () => handleClick(project)
                        : undefined
                    }
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
          repoUrl={selectedProject.repoUrl}
          highlightLabel={selectedProject.highlightLabel}
          diagram={selectedProject.diagram}
          whatItDoes={selectedProject.whatItDoes ?? []}
          whatItAchieves={selectedProject.whatItAchieves ?? []}
        />
      )}
    </Layout>
  );
};

export default Projects;
