"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Heart } from "lucide-react"
import { useEffect } from "react"

export default function TecnisheVirtualTriajePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/projects" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Projects</span>
                </Link>
              </Button>
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

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Badge variant="outline">Healthcare</Badge>
                <Badge variant="secondary">Live</Badge>
              </div>
              <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
                TECNISHE - VIRTUAL TRIAJE
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                An innovative virtual healthcare triage system that streamlines patient assessment and care
                coordination. Features AI-powered symptom analysis, appointment scheduling, and telemedicine integration
                for improved healthcare accessibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="#" className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4" />
                    <span>View Live Demo</span>
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#" className="flex items-center space-x-2">
                    <Github className="h-4 w-4" />
                    <span>View Code</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/healthcare-virtual-triage-interface-with-patient-f.png"
                alt="TECNISHE Virtual Triaje Interface"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Timeline</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">8 months development</p>
                <p className="text-sm text-muted-foreground">Mar 2023 - Oct 2023</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Team Size</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">6 developers</p>
                <p className="text-sm text-muted-foreground">Cross-functional team</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <span>Impact</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">10,000+ patients served</p>
                <p className="text-sm text-muted-foreground">50+ healthcare providers</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Vue.js", "Node.js", "MongoDB", "Python", "Docker", "TensorFlow", "WebRTC", "Socket.io"].map(
                  (tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm py-2 px-4">
                      {tech}
                    </Badge>
                  ),
                )}
              </div>

              <h2 className="font-heading font-bold text-3xl mb-6">Key Features</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>AI-powered symptom assessment and triage</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Real-time video consultations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Automated appointment scheduling</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Electronic health records integration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Multi-language support</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">Challenges & Solutions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2">AI Model Accuracy</h3>
                  <p className="text-muted-foreground">
                    Developed and trained custom machine learning models using TensorFlow to achieve 95% accuracy in
                    symptom classification and triage recommendations.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2">HIPAA Compliance</h3>
                  <p className="text-muted-foreground">
                    Implemented comprehensive security measures including end-to-end encryption, audit logging, and
                    access controls to ensure full HIPAA compliance.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Real-time Communication</h3>
                  <p className="text-muted-foreground">
                    Built robust video calling infrastructure using WebRTC and Socket.io to support high-quality,
                    low-latency telemedicine consultations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl mb-6">Need Healthcare Technology Solutions?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Let's discuss how I can help build your next healthcare or AI-powered application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/#contact">Start a Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">View More Projects</Link>
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
