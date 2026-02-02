import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const skillCategories = [
  {
    title: "Test Automation",
    skills: ["Playwright", "Detox", "Selenium", "Cypress", "Appium", "WebdriverIO", "Jest", "Mocha"],
  },
  {
    title: "Programming & Tools",
    skills: ["TypeScript", "JavaScript", "Python", "Git", "Docker", "CI/CD", "GitHub Actions", "Jenkins"],
  },
  {
    title: "Methodologies",
    skills: ["Agile/Scrum", "TDD", "BDD", "Page Object Model", "API Testing", "Performance Testing", "Visual Testing", "Accessibility Testing"],
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
                I'm a QA Automation Engineer with a passion for building reliable, maintainable 
                test automation frameworks that help teams deliver high-quality software faster. 
                My expertise spans both mobile and web testing, with a focus on creating scalable 
                solutions that integrate seamlessly into CI/CD pipelines.
              </p>
              <p>
                I'm particularly interested in the intersection of AI and software testing—exploring 
                how machine learning can enhance test coverage, reduce maintenance overhead, and 
                provide smarter insights into application quality.
              </p>
              <p>
                I believe in continuous learning and knowledge sharing, which is why I actively 
                contribute to documentation and mentorship within my teams. Whether it's 
                implementing a new testing framework or optimizing existing test suites, I approach 
                each challenge with a focus on long-term maintainability and team collaboration.
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
