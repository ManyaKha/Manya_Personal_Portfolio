import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: "incus-capital",
    title: "INCUS CAPITAL",
    description:
      "A comprehensive fintech platform providing investment management and portfolio tracking solutions. Built with modern web technologies to deliver real-time financial data and analytics.",
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "AWS"],
    category: "Fintech",
    status: "Live",
    image: "/images/portfolio/fintech-dashboard.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "tecnishe-virtual-triaje",
    title: "TECNISHE - VIRTUAL TRIAJE",
    description:
      "An innovative virtual healthcare triage system that streamlines patient assessment and care coordination. Features AI-powered symptom analysis and appointment scheduling.",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Python", "Docker"],
    category: "Healthcare",
    status: "Live",
    image: "/healthcare-virtual-triage-interface-with-patient-f.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "news-app",
    title: "NEWS-APP",
    description:
      "A modern news aggregation platform that curates content from multiple sources. Features personalized feeds, real-time updates, and advanced search capabilities.",
    technologies: ["React", "Express", "Redis", "Elasticsearch", "AWS"],
    category: "Media",
    status: "Live",
    image: "/modern-news-app-interface-with-article-cards-and-n.png",
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function ProjectsPage() {
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
              <div className="font-heading font-bold text-xl text-foreground">Projects</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/tech-stack" className="text-muted-foreground hover:text-primary transition-colors">
                Tech Stack
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
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">Featured Projects</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A showcase of my recent work spanning fintech, healthcare, and media applications. Each project demonstrates
            my ability to deliver scalable, user-focused solutions using modern technologies.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="font-heading text-xl text-foreground mb-2">{project.title}</CardTitle>
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Button asChild size="sm" className="flex-1">
                      <Link href={`/projects/${project.id}`}>View Details</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.liveUrl} className="flex items-center space-x-1">
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubUrl} className="flex items-center space-x-1">
                        <Github className="h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">Portfolio Overview</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-heading font-bold text-3xl text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-3xl text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Technologies Used</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-3xl text-primary mb-2">3</div>
              <div className="text-muted-foreground">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-3xl text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl mb-6">Interested in Working Together?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            I'm always excited to take on new challenges and bring innovative ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/#contact">Start a Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/experience">View Experience</Link>
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
