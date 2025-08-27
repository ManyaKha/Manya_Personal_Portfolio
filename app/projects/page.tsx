"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { X, Mail, Phone, MapPin, Linkedin, ArrowRight, ArrowLeft } from "lucide-react"


const projects = [
  {
    id: "01",
    title: "INCUS CAPITAL",
    description:
      "A comprehensive fintech platform providing investment management and portfolio tracking solutions. Built with modern web technologies to deliver real-time financial data and analytics.",
    category: "Fintech",
    technologies: ["Next.js", "Angular",".NET", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
    slug: "incus-capital",
  },
  {
    id: "02",
    title: "TECNISHE - VIRTUAL TRIAJE",
    description:
      "An innovative virtual healthcare triage system that streamlines patient assessment and care coordination. Features AI-powered symptom analysis and appointment scheduling.",
    category: "Healthcare",
    technologies: ["Python", "React", "Neo4J", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    slug: "tecnishe-virtual-triaje",
  },
  {
    id: "03",
    title: "NEWS-APP",
    description:
      "A modern news aggregation platform that curates content from multiple sources. Features personalized feeds, real-time updates, and advanced search capabilities.",
    category: "Media",
    technologies: ["Python", "Next.js", "MySql"],
    liveUrl: "#",
    githubUrl: "#",
    slug: "news-app",
  },
  {
    id: "04",
    title: "THE REUSE COMPANY",
    description:
      "Developed a Visual Studio integration for SES, enabling real-time code editing and conversion inside the tool. This eliminated manual syncing steps, enhanced developer productivity, and improved system compatibility for engineering clients.",
    category: "Developer Tools",
    technologies: [".NET Framework", "C#", "Visual Basic", "WPF", "Oracle", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    slug: "reuse-company",
  },
]

export default function ProjectsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-8 py-6">
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
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/tech-stack" className="text-gray-600 hover:text-gray-900 transition-colors">
                Tech Stack
              </Link>
              <Link href="/experience" className="text-gray-600 hover:text-gray-900 transition-colors">
                Experience
              </Link>
              <Button
                className="bg-gray-900 text-white hover:bg-gray-800"
                style={{ backgroundColor: "#b81202", color: "white" }}
                onClick={() => setIsContactOpen(true)}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto p-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight max-w-2xl mb-6">
            Featured Projects
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            A showcase of my recent work spanning fintech, healthcare, media applications, and developer tools. Each
            project demonstrates my ability to deliver scalable, user-focused solutions using modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {projects.map((project) => (
            <div key={project.id} className="space-y-4 group">
              <div className="text-sm font-medium text-gray-900 mb-2">{project.id}</div>

              <h3 className="text-lg font-medium text-gray-900 mb-4">{project.title}</h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs text-gray-500">+{project.technologies.length - 3} more</span>
                )}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                style={{ color: "#b81202" }}
                className="inline-flex items-center text-sm text-gray-900 hover:text-gray-600 transition-colors group-hover:translate-x-1 transform transition-transform duration-200"
              >
                <span className="mr-2">View Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>


      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background border border-border rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X size={20} />
            </button>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-light mb-2" style={{ color: "#b81202" }}>
                  Let's Connect
                </h2>
                <p className="text-muted-foreground text-sm">
                  Ready to bring your vision to life? Get in touch and let's create something amazing together.
                </p>
              </div>

              <div className="w-full h-px bg-border/30"></div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={18} style={{ color: "#b81202" }} />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">manyakh8@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} style={{ color: "#b81202" }} />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+34 636106843</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={18} style={{ color: "#b81202" }} />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Madrid, Spain</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Linkedin size={18} style={{ color: "#b81202" }} />
                  <div>
                    <p className="text-sm font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">www.linkedin.com/in/manya-khanna-7b5ab21a2/</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-border/30"></div>

              <div className="flex gap-3">
                {/* <Button
                  className="flex-1 rounded-full"
                  style={{ backgroundColor: "#b81202", color: "white" }}
                  onClick={() => window.open("manyakh8@gmail.com")}
                >
                  Send Email
                </Button> */}
                <Button
                  variant="outline"
                  className="flex-1 rounded-full bg-transparent"
                  onClick={() => setIsContactOpen(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Software Developer Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
