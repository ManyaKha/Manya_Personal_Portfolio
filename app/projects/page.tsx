"use client"

import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const projects = [
  {
    id: "01",
    title: "INCUS CAPITAL",
    description:
      "A comprehensive fintech platform providing investment management and portfolio tracking solutions. Built with modern web technologies to deliver real-time financial data and analytics.",
    category: "Fintech",
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "AWS"],
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
    technologies: ["Vue.js", "Node.js", "MongoDB", "Python", "Docker"],
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
    technologies: ["React", "Express", "Redis", "Elasticsearch", "AWS"],
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
                asChild
                className="bg-gray-900 text-white hover:bg-gray-800"
                style={{ backgroundColor: "#b81202", color: "white" }}
              >
                <Link href="/#contact">Contact</Link>
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
    </div>
  )
}
