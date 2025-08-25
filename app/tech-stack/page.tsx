import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"

const techStackData = {
  "Languages & Frameworks": [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "React",
    "Next.js",
    "Vue.js",
    "Angular",
    "Node.js",
    "Express",
    "Django",
    "Flask",
  ],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Firebase", "SQLite"],
  "DevOps & Cloud": [
    "AWS",
    "Google Cloud",
    "Microsoft Azure",
    "Docker",
    "Kubernetes",
    "Git",
    "GitHub Actions",
    "CI/CD",
    "Terraform",
  ],
  Frontend: [
    "HTML5",
    "CSS3",
    "Sass/SCSS",
    "Tailwind CSS",
    "Bootstrap",
    "Material-UI",
    "Styled Components",
    "Webpack",
    "Vite",
  ],
  "Tools & Others": ["VS Code", "Postman", "Figma", "Jira", "Slack", "Notion", "Linux", "macOS", "Windows"],
}

export default function TechStackPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </Link>
              </Button>
              <div className="font-heading font-bold text-xl text-foreground">Tech Stack</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/experience" className="text-muted-foreground hover:text-primary transition-colors">
                Experience
              </Link>
              <Button asChild>
                <Link href="/#contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">Technology Stack</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A comprehensive overview of the technologies, frameworks, and tools I use to build modern, scalable
            applications. From frontend frameworks to cloud infrastructure, here's what powers my development workflow.
          </p>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {Object.entries(techStackData).map(([category, technologies]) => (
              <Card key={category} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-foreground">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Level Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">Proficiency Levels</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl text-primary">Expert</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Technologies I use daily and have deep expertise in</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Node.js</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl text-secondary">Proficient</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Technologies I work with regularly and am comfortable using
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">AWS</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl text-muted-foreground">Familiar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Technologies I have experience with and continue to learn</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Java</Badge>
                  <Badge variant="outline">C++</Badge>
                  <Badge variant="outline">Kubernetes</Badge>
                  <Badge variant="outline">Azure</Badge>
                  <Badge variant="outline">Django</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Let's discuss how these technologies can bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/projects">View My Projects</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Software Developer Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
