import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Calendar, Building } from "lucide-react"

const experiences = [
  {
    company: "INCUS CAPITAL",
    position: "Senior Full Stack Developer",
    location: "Madrid, Spain",
    duration: "Jan 2024 - Present",
    type: "Full-time",
    description:
      "Leading the development of a comprehensive fintech platform for investment management and portfolio tracking. Architected scalable solutions handling real-time financial data for institutional and retail investors.",
    achievements: [
      "Built real-time portfolio tracking system serving 500+ active users",
      "Implemented secure payment processing with 99.9% uptime",
      "Reduced API response times by 60% through optimization",
      "Led team of 4 developers in agile development practices",
    ],
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "AWS", "Redis"],
  },
  {
    company: "REUSE COMPANY",
    position: "Full Stack Developer",
    location: "Barcelona, Spain",
    duration: "Jun 2023 - Dec 2023",
    type: "Full-time",
    description:
      "Developed sustainable technology solutions focused on circular economy principles. Built web applications for waste management and resource optimization systems.",
    achievements: [
      "Created waste tracking system reducing processing time by 40%",
      "Implemented IoT integration for real-time monitoring",
      "Developed mobile-responsive dashboard for field operations",
      "Collaborated with sustainability experts on green tech initiatives",
    ],
    technologies: ["Vue.js", "Node.js", "MongoDB", "Docker", "IoT"],
  },
  {
    company: "HAVAS",
    position: "Frontend Developer",
    location: "Madrid, Spain",
    duration: "Mar 2022 - May 2023",
    type: "Full-time",
    description:
      "Worked on digital marketing campaigns and interactive web experiences for major international brands. Focused on creating engaging, performance-optimized frontend solutions.",
    achievements: [
      "Delivered 15+ high-profile campaign websites",
      "Improved page load speeds by 45% across all projects",
      "Implemented accessibility standards achieving WCAG AA compliance",
      "Mentored 2 junior developers in modern frontend practices",
    ],
    technologies: ["React", "JavaScript", "Sass", "Webpack", "Adobe Creative Suite"],
  },
  {
    company: "GLOBAL INCUBATOR",
    position: "Junior Full Stack Developer",
    location: "Madrid, Spain",
    duration: "Sep 2021 - Feb 2022",
    type: "Full-time",
    description:
      "Supported startup development within a technology incubator environment. Built MVPs and prototypes for various early-stage companies across different industries.",
    achievements: [
      "Developed 8+ MVP applications for startup portfolio",
      "Implemented rapid prototyping workflows reducing development time by 30%",
      "Contributed to technical due diligence for investment decisions",
      "Gained experience across fintech, healthtech, and e-commerce domains",
    ],
    technologies: ["React", "Node.js", "Express", "MySQL", "AWS"],
  },
  {
    company: "DEPARTAMENTO DE LABORATORIO DE INFORMATICO (UC3M)",
    position: "Research Assistant & Developer",
    location: "Madrid, Spain",
    duration: "Jan 2021 - Aug 2021",
    type: "Part-time",
    description:
      "Conducted research in computer science and software engineering while pursuing academic studies. Developed educational tools and research applications for the university.",
    achievements: [
      "Published 2 research papers on software engineering methodologies",
      "Developed educational platform used by 200+ students",
      "Contributed to open-source academic projects",
      "Assisted in teaching programming fundamentals to undergraduate students",
    ],
    technologies: ["Python", "Java", "C++", "PostgreSQL", "Git"],
  },
]

export default function ExperiencePage() {
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
              <div className="font-heading font-bold text-xl text-foreground">Experience</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/tech-stack" className="text-muted-foreground hover:text-primary transition-colors">
                Tech Stack
              </Link>
              <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
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
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">Professional Experience</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A comprehensive overview of my professional journey spanning fintech, sustainability, digital marketing, and
            research. Each role has contributed to my expertise in building scalable, user-focused applications.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="font-heading text-2xl text-foreground mb-2">
                        {experience.position}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mb-2">
                        <Building className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-primary">{experience.company}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {experience.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{experience.description}</p>

                  <div className="mb-6">
                    <h4 className="font-heading font-semibold text-lg mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">Career Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-heading font-bold text-3xl text-primary mb-2">4+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-3xl text-primary mb-2">5</div>
              <div className="text-muted-foreground">Companies</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-3xl text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-3xl text-primary mb-2">3</div>
              <div className="text-muted-foreground">Industries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">Core Competencies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl text-primary">Technical Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Leading development teams and architecting scalable solutions for complex business requirements.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Team Leadership</Badge>
                  <Badge variant="outline">System Architecture</Badge>
                  <Badge variant="outline">Code Review</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl text-primary">Full Stack Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  End-to-end application development from database design to user interface implementation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Frontend</Badge>
                  <Badge variant="outline">Backend</Badge>
                  <Badge variant="outline">Database</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl text-primary">Industry Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Deep understanding of fintech, healthcare, and digital marketing domain requirements.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Fintech</Badge>
                  <Badge variant="outline">Healthcare</Badge>
                  <Badge variant="outline">Digital Marketing</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl mb-6">Ready to Collaborate?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Let's discuss how my experience can contribute to your next project or team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/#contact">Get In Touch</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">View My Work</Link>
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
