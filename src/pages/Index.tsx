import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <p className="text-primary font-medium mb-4">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Anna Elano
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gradient mb-6">
              QA Automation Engineer
            </h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-delay-1">
            I close the gap between what AI can execute and what QA actually requires.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-delay-2">
            <Button asChild size="lg" className="gap-2">
              <a href="https://www.linkedin.com/in/anna-victoria-elano" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="https://github.com/annavictoriaelano" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button variant="secondary" size="lg" className="gap-2 opacity-50 cursor-not-allowed" disabled title="Coming soon">
              <FileText className="h-5 w-5" />
              Resume
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
