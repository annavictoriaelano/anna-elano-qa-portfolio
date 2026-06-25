import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const skillCategories = [
  {
    title: "Test Automation",
    skills: ["Playwright (TypeScript)", "Detox (TypeScript)", "Selenium WebDriver", "Page Object Model", "GitHub Actions CI/CD"],
  },
  {
    title: "AI Tooling",
    skills: ["Claude Code", "Claude Web", "AI-augmented QA workflows", "Prompt Engineering", "Claude Skills authoring", "MCP integration", "AI architecture pipeline design"],
  },
  {
    title: "Test Management",
    skills: ["Jira", "Jira AIO Test Management", "Azure Test Plans", "Browserstack Test Management", "Allure Reports"],
  },
  {
    title: "API Testing",
    skills: ["Postman", "REST API Testing"],
  },
  {
    title: "Development & Tools",
    skills: ["TypeScript", "JavaScript", "Git", "GitHub", "Chrome DevTools"],
  },
  {
    title: "Platforms",
    skills: ["React Native", "Web SaaS", "Magento", "Umbraco", "WordPress", "Sitecore CMS"],
  },
  {
    title: "Methodologies",
    skills: ["Agile / Scrum", "BDD / Gherkin", "Shift-Left Testing", "Full SDLC", "AI Swarms"],
  },
];

const About = () => {
  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About Me
            </h1>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Currently based in the Philippines</span>
            </div>
          </div>

          <Card className="mb-12 card-shadow animate-fade-in-delay-1">
            <CardHeader>
              <CardTitle>Professional Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As a QA Engineer of 5+ years I learned early that speed without structure
                doesn't scale. It just fails harder.
              </p>
              <p>
                The industry is shipping deliverables faster than ever but I still apply the same
                principles to software quality, by building AI workflows that never mistakes speed
                for quality and where results are trusted, not just impressive.
              </p>
              <p>
                I focus on building systems where quality does not break under pressure. As AI
                raises the stakes higher, thorough and consistent quality engineering matters further.
              </p>
              <p>
                5+ years across mobile and web platforms, I've built and owned end-to-end test
                automation for a React Native app and a web SaaS platform. In under three months I
                authored 2,500+ test cases across 11 modules for a system with eight subscription
                tiers, multiple user roles, and three locales. I also designed the AI-augmented QA
                workflows that support that work. The standards, guardrails, and logic are mine.
                The scale is what AI enables.
              </p>
              <p>
                AI is infrastructure, not authority. I build the system. AI executes within it.
              </p>
              <p>
                If you're building something that takes quality seriously, I'd like to hear about it.
              </p>
            </CardContent>
          </Card>

          <div className="animate-fade-in-delay-2">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Skills & Expertise
            </h2>
            <div className="grid gap-6">
              {skillCategories.map((category, index) => (
                <Card key={category.title} className="card-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="px-3 py-1 text-sm font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
