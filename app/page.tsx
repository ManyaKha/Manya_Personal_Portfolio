"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { X, Mail, Phone, MapPin, Linkedin } from "lucide-react"

export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        {/* Header Section */}
        <div className="py-12 border-b border-border/20">
          <div className="grid grid-cols-3 gap-8 items-center">
            {/* Left Column: Text Content */}
            <div className="space-y-6">
              <p className="text-lg">Hey, I'm Manya Khanna</p>
              <h1 className="text-4xl font-bold leading-tight">
                <span style={{ color: "#b81202" }}>A Software Developer</span> <br />
                <span className="italic font-medium" style={{ color: "#b81202" }}>
                  & Data Workflow Arquitect
                </span>{" "}
                <br />
                {/* <span style={{ color: "#b81202" }}>Manager</span> */}
              </h1>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              I build end-to-end digital products that blend clean engineering with intuitive design. With experience leading fintech, healthtech, and SaaS projects, I bridge code, data, and user experience—turning complex workflows into scalable, user-friendly solutions.
              </p>
              <Button
                className="rounded-full px-6 py-2 hover:opacity-90"
                style={{ backgroundColor: "#b81202", color: "white" }}
                onClick={() => setIsContactOpen(true)}
              >
                CONTACT ME
              </Button>
            </div>

            {/* Center Column: Image */}
            <div className="flex justify-center relative">
              <div className="w-96 relative overflow-hidden rounded-lg bg-muted border-slate-600 h-[400px] border-0 shadow-sm">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Manya_Khanna_CV.jpg-Gj8gEvwuSQlOSaFEUFnsFCeY04NoaS.jpeg"
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Stats */}
            <div className="space-y-6 text-center lg:text-left">
              <div>
                <div className="stat-number text-3xl font-bold">5+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <div className="stat-number text-3xl font-bold">3+</div>
                <p className="text-sm text-muted-foreground">Projects in Development</p>
              </div>
              <div>
                <div className="stat-number text-3xl font-bold">2-4</div>
                <p className="text-sm text-muted-foreground">Features shipped/Sprint</p>
              </div>
              <div>
                <div className="stat-number text-3xl font-bold">13+</div>
                <p className="text-sm text-muted-foreground">Software issues resolved/Week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-12 border-b border-border/20">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <h3 className="font-heading font-bold text-sm tracking-wider">FULL-STACK DEVELOPMENT</h3>
              <div className="w-full h-px bg-border/30"></div>
              <p className="text-xs text-muted-foreground">End-to-end web applications tailored for your audience.</p>
            </div>
            <div className="text-center space-y-3">
              <h3 className="font-heading font-bold text-sm tracking-wider">API DESIGN & INTEGRATION</h3>
              <div className="w-full h-px bg-border/30"></div>
              <p className="text-xs text-muted-foreground">Robust backend systems and third-party integrations.</p>
            </div>
            <div className="text-center space-y-3">
              <h3 className="font-heading font-bold text-sm tracking-wider">RESPONSIVE & MODERN UI</h3>
              <div className="w-full h-px bg-border/30"></div>
              <p className="text-xs text-muted-foreground">Mobile-first design principles for all devices.</p>
            </div>
            <div className="text-center space-y-3">
              <h3 className="font-heading font-bold text-sm tracking-wider">PERFORMANCE OPTIMIZATION</h3>
              <div className="w-full h-px bg-border/30"></div>
              <p className="text-xs text-muted-foreground">Fast, scalable applications with modern development.</p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="py-12 border-b border-border/20">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="section-heading mb-6">
                CRAFTING MEANINGFUL
                <br />
                APPLICATIONS & INTUITIVE
                <br />
                EXPERIENCES
              </h2>
            </div>
            <div className="space-y-4">
              <div className="w-full h-px bg-border/30 mb-6"></div>
              <p className="text-muted-foreground">
                Hey, I'm a software developer passionate about creating robust and user-friendly digital experiences.
              </p>
              <p className="text-muted-foreground">
                With a keen eye for clean code and a deep understanding of user behavior, I design applications and
                interfaces that not only look great but also resonate with audiences. Whether it's building a web
                application from the ground up or refining a digital product for seamless usability, I bring strategy,
                creativity, and functionality to bring ideas to life. Let's collaborate and make something
                extraordinary.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="py-12 border-b border-border/20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-heading">TECH STACK</h2>
            <Button variant="outline" asChild className="rounded-full bg-transparent">
              <Link href="/tech-stack">View All</Link>
            </Button>
          </div>
          <div className="w-full h-px bg-border/30 mb-8"></div>

          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-heading font-bold text-sm mb-3 tracking-wider">LANGUAGES</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Python</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm mb-3 tracking-wider">FRAMEWORKS</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">Node.js</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm mb-3 tracking-wider">DATABASES</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">PostgreSQL</Badge>
                <Badge variant="outline">MongoDB</Badge>
                <Badge variant="outline">Redis</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm mb-3 tracking-wider">CLOUD & DEVOPS</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">AWS</Badge>
                <Badge variant="outline">Docker</Badge>
                <Badge variant="outline">Vercel</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="py-12 border-b border-border/20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-heading">PROJECTS</h2>
            <Button variant="outline" asChild className="rounded-full bg-transparent">
              <Link href="/projects">View All</Link>
            </Button>
          </div>
          <div className="w-full h-px bg-border/30 mb-8"></div>

          <div className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-1">
              <div className="space-y-4 border-r border-border/20 pr-6">
                <h3 className="font-heading font-bold text-lg">INCUS CAPITAL</h3>
                <div className="w-full h-px bg-border/30"></div>
                <p className="text-sm text-muted-foreground">
                  Comprehensive fintech platform with real-time analytics and portfolio management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    PostgreSQL
                  </Badge>
                </div>
                <Button variant="outline" asChild className="w-full text-xs bg-transparent">
                  <Link href="/projects/incus-capital">View Details</Link>
                </Button>
              </div>

              <div className="space-y-4 border-r border-border/20 pr-6">
                <h3 className="font-heading font-bold text-lg">TECNISHE - VIRTUAL TRIAJE</h3>
                <div className="w-full h-px bg-border/30"></div>
                <p className="text-sm text-muted-foreground">
                  AI-powered virtual triage system for healthcare providers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    AI/ML
                  </Badge>
                </div>
                <Button variant="outline" asChild className="w-full text-xs bg-transparent">
                  <Link href="/projects/tecnishe-virtual-triaje">View Details</Link>
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="font-heading font-bold text-lg">NEWS-APP</h3>
                <div className="w-full h-px bg-border/30"></div>
                <p className="text-sm text-muted-foreground">
                  Modern news aggregation platform with personalized feeds.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Express
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    MongoDB
                  </Badge>
                </div>
                <Button variant="outline" asChild className="w-full text-xs bg-transparent">
                  <Link href="/projects/news-app">View Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-heading">EXPERIENCE</h2>
            <Button variant="outline" asChild className="rounded-full bg-transparent">
              <Link href="/experience">View All</Link>
            </Button>
          </div>
          <div className="w-full h-px bg-border/30 mb-8"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-bold text-lg mb-4 tracking-wider">RECENT POSITIONS</h3>
              <div className="w-full h-px bg-border/30 mb-6"></div>
              <div className="space-y-6">
                <div className="border-l-2 border-foreground pl-4">
                  <h4 className="font-heading font-bold text-sm">SENIOR FULL STACK DEVELOPER</h4>
                  <p className="text-xs text-muted-foreground">INCUS CAPITAL • 2023-2024</p>
                </div>
                <div className="border-l-2 border-muted-foreground pl-4">
                  <h4 className="font-heading font-bold text-sm">SOFTWARE ENGINEER</h4>
                  <p className="text-xs text-muted-foreground">REUSE COMPANY • 2022-2023</p>
                </div>
                <div className="border-l-2 border-muted-foreground pl-4">
                  <h4 className="font-heading font-bold text-sm">FRONTEND DEVELOPER</h4>
                  <p className="text-xs text-muted-foreground">HAVAS • 2021-2022</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-4 tracking-wider">CORE COMPETENCIES</h3>
              <div className="w-full h-px bg-border/30 mb-6"></div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Full Stack Development</span>
                  <div className="w-16 h-1 bg-foreground rounded"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">React & Next.js</span>
                  <div className="w-14 h-1 bg-foreground rounded"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Database Design</span>
                  <div className="w-12 h-1 bg-foreground rounded"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">DevOps & Cloud</span>
                  <div className="w-10 h-1 bg-foreground rounded"></div>
                </div>
              </div>
            </div>
          </div>
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
                <h2 className="text-2xl font-bold mb-2" style={{ color: "#b81202" }}>
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
                    <p className="text-sm text-muted-foreground">hello@soltdesign.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} style={{ color: "#b81202" }} />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={18} style={{ color: "#b81202" }} />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Linkedin size={18} style={{ color: "#b81202" }} />
                  <div>
                    <p className="text-sm font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">linkedin.com/in/soltdesign</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-border/30"></div>

              <div className="flex gap-3">
                <Button
                  className="flex-1 rounded-full"
                  style={{ backgroundColor: "#b81202", color: "white" }}
                  onClick={() => window.open("mailto:hello@soltdesign.com")}
                >
                  Send Email
                </Button>
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
    </div>
  )
}
