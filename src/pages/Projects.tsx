import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ProjectCard, type ProjectCardProps } from "@/components/ProjectCard";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";
import { ArticleModal } from "@/components/ArticleModal";
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
  ListChecks,
  Terminal,
  Code,
  ArrowRight,
  GitBranch,
  GitMerge,
  RefreshCw,
  ClipboardList,
  Rocket,
  FileText,
  Library,
  Shield,
  Zap,
  Lightbulb,
  ShoppingCart,
  Monitor,
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
          { value: "~40%", label: "Faster Regression" },
          { value: "~5 wks", label: "Built From Zero" },
          { value: "~70%", label: "Faster Sweeps" },
          { value: "9", label: "Modules Covered" },
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
      "Rebuilding an existing test suite from inline locators to Page Object Model. Unified reporting across mobile and web platforms.",
    icon: Globe,
    highlightLabel: "Key Results",
    diagram: (
      <MetricsHighlight
        metrics={[
          { value: "200+", label: "Specs Assessed" },
          { value: "620+", label: "Tests Scoped" },
          { value: "4", label: "AI Skills Built" },
          { value: "2", label: "Platforms Unified" },
        ]}
      />
    ),
    whatItDoes: [
      "Assessed 200+ existing spec files, identified structural gaps, and delivered a full refactor plan for migration to Page Object Model architecture, currently in execution",
      "Applying the same foundation patterns from mobile automation: SME knowledge capture, pattern library compounding, and skill-based AI governance",
      "4 platform-specific AI skills scaffolded for knowledge build, review, test case creation, and execution",
      "AIO Connector integration ported from mobile, ensuring consistent TCMS workflow across both platforms",
      "Results feed into Jira AIO cycles and Allure Reports for unified cross-platform test reporting",
    ],
    whatItAchieves: [
      "Structural assessment complete: 620+ tests scoped for POM migration, gap analysis delivered, refactor in execution",
      "Unified reporting across mobile and web through shared Jira AIO integration",
      "Foundation patterns proven portable: same architecture, same discipline, different platform, same results",
      "Automation foundation being built for team-wide scaling",
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
    title: "Technical Source Code Contributions",
    summary:
      "Delivered source-side changes to unblock automation. Proposed, designed, coordinated with developers, and delivered each fix with impact evidence.",
    icon: Code,
    whatItDoes: [
      "Fast Login via launch args (OST-467): bypassed UI login flow entirely, unblocking multi-account testing across multiple modules",
      "Fast Scan-In via launch args (OST-485): reduced scan-in setup from 60-90 seconds per test to near-zero",
      "FTMSlideSelector testID passthrough: single-line fix that unblocked 24 cascade failures across dependent tests",
      "Eye icon and keyboard accessory testIDs: unblocked Login and Registration automation that was stalled on missing element identifiers",
      "Dashboard and CreateScreen testIDs: unblocked virtualized list scrolling across affected modules",
    ],
    whatItAchieves: [
      "Each contribution followed full ownership: identified the gap, proposed the solution, coordinated with the development team, and delivered with impact evidence",
      "Fast Login and Fast Scan-In became reusable launch arg patterns across multiple modules, compounding time savings beyond the original fix",
      "A single-line testID passthrough unblocked 24 cascade failures - evidence that the highest-leverage QA work is not always in the test files",
      "Demonstrates QA contributing directly to the codebase, not just testing it",
    ],
  },
];

const liveBuilds: ProjectCardProps[] = [
  {
    title: "QA Console - AI-Augmented Test Management Web Application",
    summary:
      "Building a production-deployed AI-augmented test management platform to demonstrate end-to-end ownership of the AI-augmented QA pipeline.",
    icon: Monitor,
    status: "In Development",
    liveUrl: "https://qa-console.vercel.app",
    repoUrl: "https://github.com/annavictoriaelano/qa-console",
    whatItDoes: [
      "Designed the full-stack architecture: Neon serverless Postgres, Next.js API routes, JWT authentication, React and Tailwind frontend",
      "Built the Test Case Library with module tree navigation, inline editing, search, pagination, and bulk actions; seeded with 500+ test cases from a live test suite",
      "Designed an MCP server layer enabling Claude to drive the webapp from outside, creating an AI-to-TCMS orchestration loop without a third-party API dependency",
      "Deployed to Vercel production; actively adding features during off hours",
    ],
    whatItAchieves: [
      "Proves end-to-end full-stack ownership beyond test automation: architecture, database design, authentication, and deployment",
      "MCP server layer enables Claude to operate the platform directly, removing a third-party API dependency entirely",
      "Seeded with 500+ test cases from a live suite - demonstrates the system handles real production-scale data from the start",
      "Live and continuously expanding at qa-console.vercel.app",
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
];

const processMethodology: ProjectCardProps[] = [
  {
    title: "Vault Governance System",
    summary:
      "Session discipline, weekly health checks, and lifecycle governance keeping the QA knowledge base accurate and compounding over time.",
    icon: Database,
    diagram: (
      <SkillFlow
        height={460}
        nodes={[
          { id: "session", label: "Session Start", variant: "source", x: -140, y: 0 },
          { id: "capture", label: "Mid-Session Capture", variant: "primary", x: -140, y: 130 },
          { id: "closeout", label: "Closeout Review", variant: "gate", x: -140, y: 260 },
          { id: "weekly", label: "Weekly Trigger", variant: "source", x: 140, y: 0 },
          { id: "audit", label: "7 Audit Checks", variant: "primary", x: 140, y: 130 },
          { id: "findings", label: "Findings Report", variant: "gate", x: 140, y: 260 },
          { id: "knowledge", label: "Knowledge Base", variant: "default", x: 0, y: 400 },
        ]}
        edges={[
          { from: "session", to: "capture", animated: true },
          { from: "capture", to: "closeout" },
          { from: "closeout", to: "knowledge", label: "Verified", color: "green" },
          { from: "weekly", to: "audit", animated: true },
          { from: "audit", to: "findings" },
          { from: "findings", to: "knowledge", label: "Fixed", color: "green" },
        ]}
      />
    ),
    whatItDoes: [
      "Enforces consistent structure, naming, and cross-linking for all QA knowledge: patterns, bugs, SME notes, session logs, and progress tracking",
      "Three-phase session discipline: context load at start, real-time mid-session capture, and closeout with mandatory knowledge review. Mid-session capture is non-negotiable.",
      "Every new artifact is cross-linked in three places: the index, the consuming document, and the session log. Orphaned knowledge is structurally impossible.",
      "Weekly health check runs 7 automated audits: stale knowledge notes, orphaned patterns, broken cross-links, unresolved bugs, missing session logs, naming inconsistencies, and stale tasks",
      "Health checks are read-only. Surfaces findings; never auto-patches. QA reviews the report and decides what to fix.",
      "Catches drift that builds across sessions: a pattern referenced in three places but renamed in one, a bug marked resolved but still in the workaround list",
    ],
    whatItAchieves: [
      "Knowledge compounds instead of decaying. Each session's learnings are available to every future session.",
      "Prevents silent knowledge decay. Problems that would otherwise surface as wrong tests or missed coverage get flagged weekly before they compound.",
      "Average 5-10 health check findings per weekly run. Each finding fixed prevents a downstream error.",
      "Onboarding cost drops: new QA reads the vault, not a person's head. The knowledge base is the team's memory, not an individual's.",
      "Pattern reuse accelerates over time. The more patterns documented, the less debugging required. Each session is faster than the last.",
      "If the QA engineer leaves, the knowledge stays. Bus factor addressed by design, not by hope.",
    ],
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
      "AI lowered the cost of writing tests, not the cost of broken pipelines. Four graduation criteria for deciding what earns a place in regression.",
    icon: FileText,
    metric: { value: "4", label: "Graduation Criteria" },
    article: {
      intro:
        "AI lowered the cost of writing tests. It didn't lower the cost of a broken regression pipeline. Conflating those two things produces the most common AI-augmented QA failure: automate everything, then watch the regression suite become impossible to trust.",
      paragraphs: [
        "Before AI, the bottleneck was time. Writing a thorough feature test set took days. Scripting took longer. Teams wrote fewer tests and covered only the highest-risk paths. AI changed that fast. The cost of generating a test case dropped to near zero. The scripting cost followed. The question stopped being 'what can we afford to test?' and became 'what should we test?'",
        "Two layers, two different answers. Feature automation (tests written during development to verify a ticket or module) should be comprehensive. Write broadly. If a test case exists, write the script. AI makes it cheap. Regression is different. Regression is a signal, and a flaky signal isn't a safety net, it's noise.",
        "That distinction produced four graduation criteria for promoting a script into regression. The environment has to be stable enough to produce consistent results. Test data has to be managed so one run doesn't corrupt the next. The script needs a consistent pass rate before it earns its place. And the feature has to be released, because automating active development means automating a moving target. Until all four are met, the script stays in feature automation. It provides coverage. It doesn't belong in regression yet.",
        "The cost of generating a test dropped. The cost of a flaky regression suite didn't. An 800-test pipeline where 200 are unreliable isn't an 800-test pipeline. It's 600 tests dragging 200 sources of noise. Teams that automate everything into regression and wonder why they can't trust their results skipped the question that matters: is this test ready to be a signal?",
      ],
    },
  },
  {
    title: "SME Knowledge as Canonical Source",
    summary:
      "What separates AI generating generic tests from AI generating tests that match your product, your users, and your edge cases.",
    icon: Library,
    article: {
      intro:
        "An AI that can test software and an AI that can test your software are not the same thing. The knowledge base is the gap between them.",
      paragraphs: [
        "When AI reads a codebase, it learns what elements exist at a technical level. It can identify a button, understand its label, infer that pressing it submits a form. What it can't derive from code is context: who's supposed to press that button, under which subscription tier, in which locale, after which prior actions. That context lives in SME notes built from live app exploration, real support tickets, and accumulated understanding of how actual customers use the product.",
        "Without the knowledge base, AI generates tests that are syntactically correct and domain-blind. A test asserts that a report generates successfully. It doesn't know that report type only applies to a specific country and tier, requires a specific project state, and has a known quirk when the user hasn't set a default template. The test passes against the wrong configuration, and the coverage chart still looks fine. The signal is wrong.",
        "An SME knowledge base changes what AI works from. Instead of inferring intent from code, it draws from a structured document: screen inventory, user role matrices, permission boundaries, known limitations, edge cases from production. The result is tests that reflect how the product actually behaves, not how the codebase suggests it might. The gap matters most at the edges: rare role combinations, locale-specific flags, known bug workarounds a test should account for instead of accidentally validating.",
        "The knowledge base compounds. Individual sessions don't. Each feature documented once gets reused by every test generation, review, and debug cycle that follows. Without it, every session starts from the same baseline - general knowledge, product-blind guesses, and whatever is derivable from code alone.",
      ],
    },
  },
  {
    title: "Skill Routing Discipline",
    summary:
      "Why deterministic skills are the difference between a recoverable AI system and an unpredictable one. RCA-driven enforcement when the pathway is bypassed.",
    icon: Shield,
    article: {
      intro:
        "The difference between useful AI and unpredictable AI usually isn't the model. It's whether the model has a defined procedure to follow.",
      paragraphs: [
        "A skill is a deterministic procedure: a slash command with explicit steps, entry conditions, exit criteria, and handoff rules. When AI operates through a skill, its behaviour is predictable and auditable. When it operates without one, it improvises. Improvisation in a test suite compounds fast in the wrong direction: inconsistent selectors, incorrect assertions, scope-expanding changes that bypass review, patterns that contradict whatever the team already established.",
        "Skill routing discipline means treating any deviation as a recoverable event with a specific cause, not a random failure. Deviations almost always trace back to one of two things. Either the entry condition was ambiguous, so the skill never triggered. Or the session started without loading the context the skill depends on. Both are fixable. Random AI behaviour isn't.",
        "Each deviation becomes a rule update, not a fix for the instance but a change that closes the class of problem. If AI skipped the review stage because nothing explicitly said it was mandatory before writing to file, the rule becomes: review is always mandatory before writing to file, no exceptions. The next session inherits that. The deviation doesn't recur.",
        "A QA system that only works when the right person is paying close attention is fragile. A QA system where every deviation surfaces a fixable cause, and that cause becomes a permanent rule, gets more reliable with each session.",
      ],
    },
  },
  {
    title: "Mid-Session Capture Beats Batching",
    summary:
      "Real-time capture at the moment of discovery is the only way a knowledge base compounds. Batching to end-of-session means most discoveries never get written.",
    icon: Zap,
    article: {
      intro:
        "The pattern library doesn't grow by itself. It grows one captured discovery at a time, right when the discovery happens. Batching it to closeout is the fastest way to ensure most of it never gets written.",
      paragraphs: [
        "The argument for batching is efficiency: finish the task, document later. It doesn't work. Closeout is the worst possible time to reconstruct debugging. The exact selector that was flaky, the timing constraint that was the real issue, the reason a particular workaround beat the obvious one: all of it is clearest the moment the problem is solved. An hour later, most of it's gone.",
        "Mid-session capture means writing the pattern down right after solving it, before moving to the next task. The documentation is different in quality. It includes the detail that makes a pattern reusable: the exact condition that triggers the timing issue, the workaround paired with why it works (not just what it does), and the edge case the obvious solution fails on. Batched documentation produces 'fixed the flaky scroll test' with nothing transferable. Real-time capture produces something the next person can actually apply.",
        "Compounding is what makes the discipline worth enforcing. A session that batches contributes nothing reusable to the next. A session that captures in real time contributes every discovery. Over months, the gap between a team that captures consistently and one that batches is a pattern library that makes debugging faster each week versus one that starts from the same baseline every time.",
      ],
    },
  },
  {
    title: "The Foundation Before the Pipeline",
    summary:
      "AI multiplies what you already have, in either direction. Why building the stable system first is not a delay - it is the strategy.",
    icon: Layers,
    article: {
      intro:
        "AI multiplies what you already have. That works both ways. Teams that discover this too late are usually the ones who built the pipeline before building what it was supposed to run on.",
      paragraphs: [
        "An AI-augmented QA system runs on five foundation layers. The knowledge base gives AI accurate ground truth about the product. Deterministic skills define what AI does at each stage. Behavioural rules encode lessons from past deviations so they don't recur. Test conventions keep output consistent regardless of which session produced it. Integrated tooling makes results visible to the rest of the team. Skip any one of these, and the layers built on top become unreliable.",
        "The temptation is to start automating immediately. The speed gains are visible and compelling. But AI generating test cases against an undocumented product produces cases that are structurally sound and contextually wrong. Scripts written without defined conventions diverge across modules because nothing told them which pattern to use. Without behavioural rules, AI repeats the same class of mistake until someone catches it. The pipeline runs, and the output isn't trustworthy.",
        "Most of the real work in an AI-augmented QA system goes into the foundations, not the pipeline. The pipeline builds quickly once the foundation is in place. The knowledge base takes time. The skills take iteration. The conventions take thought. Skipping this to start producing output is the kind of shortcut that shows up later as rework: rescripting modules where AI used wrong patterns, correcting test cases that passed review because the reviewer also lacked context, debugging failures that trace back to a skill nobody defined precisely.",
      ],
    },
  },
  {
    title: "QA Owns the Release Gate",
    summary:
      "A release process without a QA-owned go/no-go is an informal process dressed as a process. On redesigning the release lifecycle from the QA layer up.",
    icon: Rocket,
    article: {
      intro:
        "A release process without a clearly owned go/no-go isn't a release process. It's a set of activities that usually ends in someone deploying and hoping for the best.",
      paragraphs: [
        "The symptoms are recognisable: no fixed cadence so every release is a negotiation, scope defined by a metadata field developers update inconsistently, QA finding out what's in the release while regression is already running, tickets pushed to staging without clearing dev first, a go/no-go that belongs to everyone in general and no one in particular. None of these are catastrophic alone. Together they create a release cycle where QA operates with incomplete information, under informal pressure, without a clear moment when the decision is actually made.",
        "The fix isn't more process. It's two structural changes. The first: before UAT regression starts, QA compares the release plan against what's actually in the branch. Any mismatch gets resolved before regression begins. This sounds obvious. It almost never happens without a defined owner and a defined step. Skip it and you're running regression against an incomplete picture, discovering mid-cycle that the scope was wrong.",
        "The second: go/no-go ownership. One named person issues the verdict, with outstanding bugs listed, a pass or fail decision, and a written record of the call. Nothing deploys without it. This eliminates the pattern where everyone kind of agrees it's probably fine and nobody owns that agreement. When something goes wrong post-release, the post-mortem question shifts from 'how did this slip through?' to 'what did the go/no-go see, and what was the call?' That second version actually leads somewhere.",
      ],
    },
  },
  {
    title: "The Scope Gap Is a QA Problem",
    summary:
      "When declared scope doesn't match what's in the release branch, QA tests an incomplete picture. The fix is upstream - not more QA effort downstream.",
    icon: GitMerge,
    metric: { value: "22", label: "Days Invisible" },
    article: {
      intro:
        "QA tests what it knows is in scope. When declared scope doesn't match what's in the release branch, QA is testing an incomplete picture. That isn't a testing failure. It's a scope visibility failure, and the fix belongs upstream.",
      paragraphs: [
        "The scenario plays out like this: a ticket's code enters the release branch weeks before QA is told it's in scope. The release plan is built from a metadata field that nobody updated to reflect the branch. The code moves through UAT without appearing on the plan QA is testing against. QA greenlights the release. The issue surfaces after go/no-go. In one case, that gap was 22 days, and regression had to run twice more to recover.",
        "It looks like a QA miss from the outside. It isn't. QA runs risk-based testing against declared scope, not an exhaustive audit of every feature, role, tier, locale, and platform combination. At any reasonable product scale, exhaustive testing per release was never the model. The model is: test what's in scope, thoroughly, against a known environment. When scope is wrong, the model breaks at the input, not the execution.",
        "The fix is two lightweight checkpoints. Before the release plan meeting, a coordinator pulls the actual commits in the branch and compares them against the metadata scope. Mismatches go on the agenda before the meeting, not after. Before UAT greenlight, QA runs the same comparison to catch anything that entered mid-cycle. Neither requires new tooling. Both require ownership.",
        "QA's analytical thinking isn't bounded to test case design. A QA engineer who traces a root cause through version control and ticket history, identifies the gap between two documentation systems, and proposes two checkpoints with named owners is doing QA work. The output isn't a test suite. The outcome is a release process less likely to ship invisible scope to production.",
      ],
    },
  },
];

/* ── page component ──────────────────────────────────── */

const Projects = () => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectCardProps | null>(null);

  const handleClick = (project: ProjectCardProps) => {
    if (!project.placeholder && (project.whatItDoes?.length || project.article)) {
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

          {/* ── Live Builds ── */}
          <div className="mb-20 animate-fade-in-up">
            <SectionHeader
              title="Live Builds"
              description="Web applications I designed and deployed end-to-end"
            />
            <div className="grid md:grid-cols-2 gap-6">
              {liveBuilds.map((project, i) => (
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

      {/* Project detail modal */}
      {selectedProject && !selectedProject.article && (
        <ProjectDetailModal
          open={!!selectedProject}
          onOpenChange={(open) => {
            if (!open) setSelectedProject(null);
          }}
          title={selectedProject.title}
          tech={selectedProject.tech}
          repoUrl={selectedProject.repoUrl}
          liveUrl={selectedProject.liveUrl}
          highlightLabel={selectedProject.highlightLabel}
          diagram={selectedProject.diagram}
          whatItDoes={selectedProject.whatItDoes ?? []}
          whatItAchieves={selectedProject.whatItAchieves ?? []}
        />
      )}

      {/* Article modal */}
      {selectedProject?.article && (
        <ArticleModal
          open={!!selectedProject}
          onOpenChange={(open) => {
            if (!open) setSelectedProject(null);
          }}
          title={selectedProject.title}
          article={selectedProject.article}
        />
      )}
    </Layout>
  );
};

export default Projects;
