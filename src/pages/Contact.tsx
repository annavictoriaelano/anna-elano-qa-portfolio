import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    value: "anna.elano@email.com",
    href: "mailto:anna.elano@email.com",
    icon: Mail,
    description: "Best way to reach me",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/annaelano",
    href: "https://linkedin.com",
    icon: Linkedin,
    description: "Let's connect professionally",
  },
  {
    name: "GitHub",
    value: "github.com/annaelano",
    href: "https://github.com",
    icon: Github,
    description: "Check out my code",
  },
];

const Contact = () => {
  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              I'm always open to discussing new opportunities, 
              collaboration ideas, or just having a chat about QA and automation.
            </p>
          </div>

          <div className="space-y-4 animate-fade-in-delay-1">
            {contactLinks.map((contact) => (
              <Card key={contact.name} className="card-shadow hover:card-shadow-hover transition-all duration-300 group">
                <CardContent className="p-6">
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={contact.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-4"
                  >
                    <div className="p-3 rounded-xl bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <contact.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {contact.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {contact.description}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono hidden sm:block">
                      {contact.value}
                    </span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center animate-fade-in-delay-2">
            <Button asChild size="lg" className="gap-2">
              <a href="mailto:anna.elano@email.com">
                <Send className="h-5 w-5" />
                Send me an email
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
