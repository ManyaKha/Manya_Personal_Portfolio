"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { X, Mail, Phone, MapPin, Linkedin, ArrowRight } from "lucide-react"

export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <div className="min-h-screen font-sans">
      <div className="max-w-5xl mx-auto p-6">
        {/* Header Section */}
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Column: Text Content */}
            <div className="space-y-6 text-center lg:text-left">
              <p className="text-lg">Hey, I'm Manya Khanna</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                <span style={{ color: "#b81202" }}>A Software Developer</span> <br />
                <span className="italic font-medium" style={{ color: "#b81202" }}>
                  & Data Workflow Arquitect
                </span>{" "}
                <br />
              </h1>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
                I build intelligent digital products that merge engineering, design, and AI.
                With experience across fintech, healthtech, and SaaS, I transform messy workflows into streamlined systems, integrating full-stack development, data workflows, and AI-driven automation. 
                From APIs to user interfaces, I bridge code, data, and intelligence to deliver scalable, human centered solutions.
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
            <div className="flex justify-center relative order-first lg:order-none">
              <div className="w-64 sm:w-80 lg:w-96 relative overflow-hidden rounded-lg bg-muted border-slate-600 h-[300px] sm:h-[350px] lg:h-[400px] border-0 shadow-sm">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Manya_Khanna_CV.jpg-Gj8gEvwuSQlOSaFEUFnsFCeY04NoaS.jpeg"
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Stats */}
            <div className="space-y-6 text-center lg:text-left lg:pl-8">
              <div>
                <div className="stat-number text-3xl font-bold" style={{ color: "#002147" }}>
                  5+
                </div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <div className="stat-number text-3xl font-bold" style={{ color: "#002147" }}>
                  3+
                </div>
                <p className="text-sm text-muted-foreground">Projects in Development</p>
              </div>
              <div>
                <div className="stat-number text-3xl font-bold" style={{ color: "#002147" }}>
                  2-4
                </div>
                <p className="text-sm text-muted-foreground">Features shipped/Sprint</p>
              </div>
              <div>
                <div className="stat-number text-3xl font-bold" style={{ color: "#002147" }}>
                  13+
                </div>
                <p className="text-sm text-muted-foreground">Software issues resolved/Week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8 items-stretch">
            <div className="text-center space-y-3 flex flex-col h-full">
              <h3 className="font-heading font-bold text-sm tracking-wider min-h-[2.5rem] flex items-center justify-center">
                FULL-STACK DEVELOPMENT
              </h3>
              <div className="w-full h-px bg-border/30"></div>
              <p className="text-xs text-muted-foreground">End-to-end web applications tailored for your audience.</p>
            </div>
            <div className="text-center space-y-3 flex flex-col h-full">
              <h3 className="font-heading font-bold text-sm tracking-wider min-h-[2.5rem] flex items-center justify-center">
                ARTIFICIAL INTELLIGENCE & AUTOMATION
              </h3>
              <div className="w-full h-px bg-border/30"></div>
              <p className="text-xs text-muted-foreground">Custom AI models, GPT integration, and workflow automation to enhance efficiency.</p>
            </div>
            <div className="text-center space-y-3 flex flex-col h-full">
              <h3 className="font-heading font-bold text-sm tracking-wider min-h-[2.5rem] flex items-center justify-center">
                API DESIGN & INTEGRATION
              </h3>
              <div className="w-full h-px bg-border/30"></div>
              <p className="text-xs text-muted-foreground">Robust backend systems and third-party integrations.</p>
            </div>
            <div className="text-center space-y-3 flex flex-col h-full">
              <h3 className="font-heading font-bold text-sm tracking-wider min-h-[2.5rem] flex items-center justify-center">
                RESPONSIVE & MODERN UI
              </h3>
              <div className="w-full h-px bg-border/30"></div>
              <p className="text-xs text-muted-foreground">Mobile-first design principles for all devices.</p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="py-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-light mb-6">
                CRAFTING MEANINGFUL
                <br />
                APPLICATIONS & INTUITIVE
                <br />
                EXPERIENCES
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Hey, I'm a software developer passionate about creating robust and user friendly digital experiences.
              </p>
              <p className="text-muted-foreground">
I believe automation isn’t just about efficiency it’s about giving people time back to focus on what really matters. To me, there’s a certain beauty in taking something messy and turning it into a system that runs smoothly on its own. Design and implementation go hand in hand, the design makes a product meaningful to people, and the implementation makes it reliable enough to trust.

I enjoy creating products that feel effortless to use but are powerful under the hood, where clean engineering, thoughtful design, and smart automation work together. My goal is to build tools that simplify complexity, save time, and make life just a little easier.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="py-12">
          <div className="flex items-center gap-6 mb-8">
            <h2 className="text-3xl lg:text-4xl font-light">TECH STACK</h2>
            <Link
              href="/tech-stack"
              className="inline-flex items-center text-sm hover:translate-x-1 transform transition-transform duration-200"
              style={{ color: "#b81202" }}
            >
              <span className="mr-2">View All</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
          <div className="w-full h-px bg-border/30 mb-8"></div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="border-r border-border/20 pr-6">
              <h3 className="font-heading font-bold text-sm mb-3 tracking-wider">LANGUAGES</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">C#</Badge>
                <Badge variant="outline">Next.js</Badge>
              </div>
            </div>
            <div className="border-r border-border/20 pr-6 pl-6">
              <h3 className="font-heading font-bold text-sm mb-3 tracking-wider">FRAMEWORKS</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">.NET Core</Badge>
                <Badge variant="outline">Figma</Badge>
                <Badge variant="outline">Blender</Badge>
              </div>
            </div>
            <div className="border-r border-border/20 pr-6 pl-6">
              <h3 className="font-heading font-bold text-sm mb-3 tracking-wider">DATABASES</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">PostgreSQL</Badge>
                <Badge variant="outline">MongoDB</Badge>
                <Badge variant="outline">MySql</Badge>
              </div>
            </div>
            <div className="pl-6">
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
        <div className="py-12">
          <div className="flex items-center gap-6 mb-8">
            <h2 className="text-3xl lg:text-4xl font-light">PROJECTS</h2>
            <Link
              href="/projects"
              className="inline-flex items-center text-sm hover:translate-x-1 transform transition-transform duration-200"
              style={{ color: "#b81202" }}
            >
              <span className="mr-2">View All</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
          <div className="w-full h-px bg-border/30 mb-8"></div>

          <div className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-1">
              <div className="space-y-4 border-r border-border/20 pr-6">
                <h3 className="font-heading font-bold text-lg">INCUS CAPITAL</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive fintech platform with real-time analytics and portfolio management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    .Net Core
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    MySql
                  </Badge>
                </div>
                <Button variant="outline" asChild className="w-full text-xs bg-transparent">
                  <Link href="/projects/incus-capital">View Details</Link>
                </Button>
              </div>

              <div className="space-y-4 border-r border-border/20 pr-6 pl-6">
                <h3 className="font-heading font-bold text-lg">TECNISHE - VIRTUAL TRIAJE</h3>
                <p className="text-sm text-muted-foreground">
                  AI-powered virtual triage system for healthcare providers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Neo4j
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    AI/ML
                  </Badge>
                </div>
                <Button variant="outline" asChild className="w-full text-xs bg-transparent">
                  <Link href="/projects/tecnishe-virtual-triaje">View Details</Link>
                </Button>
              </div>

              <div className="space-y-4 pl-6">
                <h3 className="font-heading font-bold text-lg">NEWS-APP</h3>
                <p className="text-sm text-muted-foreground">
                  Modern news aggregation platform with personalized feeds.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    AI/ML
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Python
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
          <div className="flex items-center gap-6 mb-8">
            <h2 className="text-3xl lg:text-4xl font-light">EXPERIENCE</h2>
            <Link
              href="/experience"
              className="inline-flex items-center text-sm hover:translate-x-1 transform transition-transform duration-200"
              style={{ color: "#b81202" }}
            >
              <span className="mr-2">View All</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
          <div className="w-full h-px bg-border/30 mb-8"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-bold text-lg mb-4 tracking-wider">RECENT POSITIONS</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-foreground pl-4">
                  <h4 className="font-heading font-bold text-sm">LEAD FULL STACK DEVELOPER</h4>
                  <p className="text-xs text-muted-foreground">INCUS CAPITAL • 2023-2024</p>
                </div>
                <div className="border-l-2 border-muted-foreground pl-4">
                  <h4 className="font-heading font-bold text-sm">SOFTWARE ENGINEER</h4>
                  <p className="text-xs text-muted-foreground">REUSE COMPANY • 2022-2023</p>
                </div>
                <div className="border-l-2 border-muted-foreground pl-4">
                  <h4 className="font-heading font-bold text-sm">DATA ARCHITECT</h4>
                  <p className="text-xs text-muted-foreground">HAVAS • 2021-2022</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-4 tracking-wider">CORE COMPETENCIES</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Full Stack Development</span>
                  <div className="w-16 h-1 bg-foreground rounded"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Artificial Intelligence</span>
                  <div className="w-14 h-1 bg-foreground rounded"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Database Design</span>
                  <div className="w-12 h-1 bg-foreground rounded"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">UI/UX Design</span>
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

      
    </div>
  )
}
