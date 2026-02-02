import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { Smartphone, Globe, Bot, BookOpen } from "lucide-react";

const projects = [
  {
    title: "Mobile Test Automation",
    description: "End-to-end mobile testing framework built with Detox for React Native applications. Includes CI/CD integration, parallel test execution, and comprehensive reporting.",
    tech: "Detox • React Native • TypeScript",
    icon: Smartphone,
    link: "https://github.com",
    linkType: "github" as const,
  },
  {
    title: "Web Test Automation",
    description: "Scalable web testing solution using Playwright with Page Object Model pattern. Features cross-browser testing, visual regression, and API mocking capabilities.",
    tech: "Playwright • TypeScript • GitHub Actions",
    icon: Globe,
    link: "https://github.com",
    linkType: "github" as const,
  },
  {
    title: "AI-Assisted QA Workflow",
    description: "Integration of AI tools to enhance testing efficiency. Automated test case generation, smart test selection, and intelligent bug classification.",
    tech: "Python • OpenAI API • Selenium",
    icon: Bot,
    link: "https://github.com",
    linkType: "github" as const,
  },
  {
    title: "QA Knowledge Assistant",
    description: "Curated knowledge base using NotebookLM for QA best practices, testing strategies, and automation patterns. Interactive Q&A for team knowledge sharing.",
    tech: "NotebookLM • Documentation",
    icon: BookOpen,
    link: "/qa-assistant.pdf",
    linkType: "pdf" as const,
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of test automation projects showcasing various tools, 
              frameworks, and innovative approaches to quality assurance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
