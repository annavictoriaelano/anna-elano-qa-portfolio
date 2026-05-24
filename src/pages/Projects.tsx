import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ProjectCard, type ProjectCardProps } from "@/components/ProjectCard";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";
import { AioConnectorFlow } from "@/components/diagrams/AioConnectorFlow";
import { Smartphone, Globe, Bot, FileText } from "lucide-react";

const projects: ProjectCardProps[] = [
  {
    title: "AIO Connector",
    description:
      "Custom integration between Jira AIO TCMS and Claude Code that makes Jira AIO the single source of truth for test cases, runs, and cycles. Nine API operations covering test case search, cycle management, bulk tag updates, and run tracking. Every operation has a QA intervention gate. Nothing auto-writes without review.",
    tech: "TypeScript · Claude Code Skills · REST API · Jira AIO API",
    achievement:
      "Eliminated multiple parallel sources of truth across docs, sheets, and repo notes. Any change request now triggers automatic flagging of impacted test scripts.",
    icon: Bot,
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
    title: "Detox E2E Mobile Automation",
    description:
      "End-to-end automation suite for a React Native mobile app (iOS and Android) at a health and safety SaaS platform serving NZ, AU, and UK markets. Built with Page Object Model architecture, integrated into GitHub Actions CI/CD, and driven by a pipeline of Claude skills covering script creation, review with quality gates, execution, and debugging.",
    tech: "Detox · TypeScript · Page Object Model · GitHub Actions CI/CD",
    achievement:
      "1,541 test cases under coverage with 888 passing across 16 modules. Regression cycle reduced from 4 days to 2-3 days. Built in under 5 weeks on a platform with 8 subscription tiers, multiple user roles, and 3 locales.",
    icon: Smartphone,
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
      "Module 7 SWMS: 222 test cases, all real passes, no false positives. The workflow-establishing run that unlocked the remaining 12+ report types",
      "Full module sweep time cut by ~70% through Fast Login, Fast Scan-In, and beforeAll restructuring",
      "Coverage spans 8 subscription tiers, multiple user roles with distinct permission matrices, and 3 locales",
    ],
  },
  {
    title: "Playwright E2E Web Automation",
    description:
      "End-to-end automation for a web SaaS platform (Hub) using Playwright and TypeScript. Rebuilt existing test scripts from inline locators to Page Object Model architecture for maintainability and scalability. Test results feed into Jira AIO and Allure Reports for full traceability.",
    tech: "Playwright · TypeScript · Page Object Model · Allure Reports",
    achievement:
      "Refactored the automation foundation from 200+ spec files with no abstraction layer to a structured POM approach. Results integrated into Jira AIO cycles for unified reporting across mobile and web.",
    icon: Globe,
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
  {
    title: "Write Broadly, Regress Selectively",
    description:
      "Position paper on how AI changes the economics of test automation without changing the discipline. Core argument: AI lowered the cost of writing tests to near zero, but it did not lower the cost of unstable environments, broken test data, or noisy CI signals. Defines four graduation criteria for when feature automation earns a place in regression.",
    tech: "QA Strategy · Automation Philosophy · Position Paper",
    achievement:
      "Used as the internal reference point for regression scope decisions. Graduation criteria: environment stable, test data managed, consistent pass rate, feature released.",
    icon: FileText,
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
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCardProps | null>(null);

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real work from production environments. Each project represents
              systems I designed, built, and own.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard
                  {...project}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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
