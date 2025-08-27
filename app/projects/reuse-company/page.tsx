"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Calendar,
  Users,
  TrendingUp,
  Code,
  Settings,
  ChevronUp,
  Zap,
  GitBranch,
  Mail,
  ChevronDown,
} from "lucide-react"
import { useEffect, useState } from "react"
import { X, Phone, MapPin, Linkedin } from "lucide-react"

export default function ReuseCompanyPage() {
  const [toggles, setToggles] = useState({
    objective: false,
    challenge: false,
    solution: false,
    impact: false,
    demo: false,
  })

  const toggleSection = (section: keyof typeof toggles) => {
    setToggles((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background font-sans">
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

      <div className="max-w-5xl mx-auto p-6">
        {/* Hero Section */}
        <div className="py-12 border-b border-border/20">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="text-xs">
                Software Integration
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Visual Studio Development
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Systems Engineering
              </Badge>
            </div>
            <h1 className="section-heading text-3xl font-normal">THE REUSE COMPANY</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Developed a Visual Studio integration for SES, enabling real-time code editing and conversion inside the
              tool. This eliminated manual syncing steps, enhanced developer productivity, and improved system
              compatibility for engineering clients.
            </p>

            <div className="bg-muted/20 p-6 rounded-lg border border-border/30">
              <h3 className="text-lg font-normal mb-4">Project Details</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Client</h4>
                  <p className="text-muted-foreground">
                    The REUSE Company
                    <br />
                    Systems Engineering Solutions
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Role</h4>
                  <p className="text-muted-foreground">
                    Software Developer
                    <br />
                    Integration Specialist
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Duration</h4>
                  <p className="text-muted-foreground">
                    Jul 2021 – Feb 2023
                    <br />
                    19-month engagement
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span>Visual Studio Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Real-time Development</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span>Developer Productivity</span>
              </div>
            </div>
          </div>
        </div>

        {/* Objective Section */}
        <div className={`${toggles.objective ? "py-12" : "py-4"}`}>
          <div
            className={`cursor-pointer hover:opacity-80 transition-opacity ${
              toggles.objective ? "flex items-center justify-between mb-8" : "flex items-center justify-between py-4"
            }`}
            onClick={() => toggleSection("objective")}
          >
            {toggles.objective ? (
              <>
                <h3 className="text-2xl font-normal section-heading">OBJECTIVE</h3>
                <ChevronUp className="h-5 w-5" />
              </>
            ) : (
              <>
                <div className="flex items-center gap-8 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-normal section-heading">OBJECTIVE</h3>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">INTEGRATION GOALS</span>
              </>
            )}
          </div>
          {toggles.objective && <div className="w-full h-px bg-border/30 mb-8"></div>}

          {toggles.objective && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h4 className="text-2xl font-bold text-primary">Seamless Tool Integration</h4>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  To build a seamless integration between SES, a commercial systems engineering tool, and Microsoft
                  Visual Studio — enabling real-time code interaction and improving developer workflows.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h5 className="text-lg font-normal mb-3">Primary Goals</h5>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Enable real-time code editing within SES environment</li>
                      <li>• Eliminate manual synchronization between tools</li>
                      <li>• Improve developer productivity and workflow efficiency</li>
                      <li>• Enhance system compatibility for engineering clients</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h5 className="text-lg font-normal mb-3">Technical Requirements</h5>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Bidirectional data synchronization</li>
                      <li>• Real-time code conversion and validation</li>
                      <li>• Seamless user experience across both platforms</li>
                      <li>• Robust error handling and recovery mechanisms</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h5 className="text-lg font-normal mb-3">Business Impact</h5>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Reduce development time and manual errors</li>
                      <li>• Increase adoption of SES platform</li>
                      <li>• Improve client satisfaction and retention</li>
                      <li>• Enable more complex engineering projects</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h5 className="text-lg font-normal mb-3">User Experience Goals</h5>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Intuitive integration with familiar Visual Studio interface</li>
                      <li>• Minimal learning curve for existing developers</li>
                      <li>• Consistent performance across different project sizes</li>
                      <li>• Comprehensive testing and validation tools</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Challenge Section */}
        <div className={`${toggles.challenge ? "py-12" : "py-4"}`}>
          <div
            className={`cursor-pointer hover:opacity-80 transition-opacity ${
              toggles.challenge ? "flex items-center justify-between mb-8" : "flex items-center justify-between py-4"
            }`}
            onClick={() => toggleSection("challenge")}
          >
            {toggles.challenge ? (
              <>
                <h3 className="text-2xl font-normal section-heading">CHALLENGE</h3>
                <ChevronUp className="h-5 w-5" />
              </>
            ) : (
              <>
                <div className="flex items-center gap-8 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-normal section-heading">CHALLENGE</h3>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">INTEGRATION COMPLEXITY</span>
              </>
            )}
          </div>
          {toggles.challenge && <div className="w-full h-px bg-border/30 mb-8"></div>}

          {toggles.challenge && (
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Creating a seamless integration between two complex development environments presented significant
                technical and architectural challenges:
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <GitBranch className="h-5 w-5 text-primary" />
                    <h5 className="text-lg font-normal">Platform Compatibility</h5>
                  </div>
                  <p className="text-muted-foreground">
                    SES and Visual Studio operated on different architectural foundations, requiring complex bridging
                    mechanisms to enable communication between the platforms.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Code className="h-5 w-5 text-primary" />
                    <h5 className="text-lg font-normal">Code Conversion Complexity</h5>
                  </div>
                  <p className="text-muted-foreground">
                    Converting and validating code between different formats and standards while preserving
                    functionality and maintaining code integrity.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-5 w-5 text-primary" />
                    <h5 className="text-lg font-normal">User Experience Consistency</h5>
                  </div>
                  <p className="text-muted-foreground">
                    Ensuring a consistent and intuitive user experience across both platforms while maintaining the
                    unique strengths of each environment.
                  </p>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  "The integration needed to feel native to both environments while providing seamless data flow and
                  real-time collaboration capabilities."
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Solution Section */}
        <div className={`${toggles.solution ? "py-12" : "py-4"}`}>
          <div
            className={`cursor-pointer hover:opacity-80 transition-opacity ${
              toggles.solution ? "flex items-center justify-between mb-8" : "flex items-center justify-between py-4"
            }`}
            onClick={() => toggleSection("solution")}
          >
            {toggles.solution ? (
              <>
                <h3 className="text-2xl font-normal section-heading">SOLUTION DELIVERED</h3>
                <ChevronUp className="h-5 w-5" />
              </>
            ) : (
              <>
                <div className="flex items-center gap-8 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-normal section-heading">SOLUTION DELIVERED</h3>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">VISUAL STUDIO INTEGRATION</span>
              </>
            )}
          </div>
          {toggles.solution && <div className="w-full h-px bg-border/30 mb-8"></div>}

          {toggles.solution && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h4 className="text-2xl font-bold text-primary">Visual Studio Integration Platform</h4>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Designed and implemented a comprehensive connector that seamlessly linked SES with Visual Studio,
                  enabling real-time code interaction and automated synchronization.
                </p>
              </div>

              <div className="space-y-12">
                {/* Integration Connector */}
                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <GitBranch className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h5 className="text-xl font-normal mb-2">1. Bidirectional Integration Connector</h5>
                        <p className="text-muted-foreground mb-4">
                          Core bridge enabling seamless communication between SES and Visual Studio
                        </p>
                      </div>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <strong>Retrieve and convert</strong> existing project components from Visual Studio into
                          SES-compatible elements
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <strong>Create and modify</strong> project elements directly within SES, with all changes
                          synced automatically to Visual Studio
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Real-time data synchronization ensuring consistency across both platforms
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Code Emulator */}
                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h5 className="text-xl font-normal mb-2">2. In-Tool Code Emulator</h5>
                        <p className="text-muted-foreground mb-4">
                          Advanced testing and validation environment within SES
                        </p>
                      </div>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Built comprehensive <strong>code emulation capabilities</strong> allowing developers to test
                          changes without leaving SES
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <strong>Visualize and validate</strong> code modifications in real-time before committing to
                          Visual Studio
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Integrated debugging and error detection to catch issues early in the development process
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Productivity Enhancement */}
                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h5 className="text-xl font-normal mb-2">3. Developer Productivity Enhancement</h5>
                        <p className="text-muted-foreground mb-4">Streamlined workflows eliminating manual processes</p>
                      </div>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <strong>Eliminated manual code synchronization</strong> between SES and Visual Studio
                          environments
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <strong>Reduced integration errors</strong> through automated validation and conversion
                          processes
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Improved overall user efficiency by providing seamless tool switching and context preservation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Technical Architecture */}
                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Settings className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h5 className="text-xl font-normal mb-2">4. Robust Technical Architecture</h5>
                        <p className="text-muted-foreground mb-4">
                          Enterprise-grade foundation with comprehensive tech stack
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h6 className="font-semibold text-primary mb-2">Backend Technologies</h6>
                          <ul className="space-y-2 text-muted-foreground text-sm">
                            <li>• .NET Framework for core integration logic</li>
                            <li>• C# for robust application development</li>
                            <li>• Oracle & MongoDB for data management</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-semibold text-primary mb-2">Frontend & Tools</h6>
                          <ul className="space-y-2 text-muted-foreground text-sm">
                            <li>• Visual Basic & WPF for user interfaces</li>
                            <li>• Visual Studio & Tortoise integration</li>
                            <li>• Jira for project management workflows</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Impact & Results Section */}
        <div className={`${toggles.impact ? "py-12" : "py-4"}`}>
          <div
            className={`cursor-pointer hover:opacity-80 transition-opacity ${
              toggles.impact ? "flex items-center justify-between mb-8" : "flex items-center justify-between py-4"
            }`}
            onClick={() => toggleSection("impact")}
          >
            {toggles.impact ? (
              <>
                <h3 className="text-2xl font-normal section-heading">IMPACT & RESULTS</h3>
                <ChevronUp className="h-5 w-5" />
              </>
            ) : (
              <>
                <div className="flex items-center gap-8 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-normal section-heading">IMPACT & RESULTS</h3>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">PRODUCTIVITY GAINS</span>
              </>
            )}
          </div>
          {toggles.impact && <div className="w-full h-px bg-border/30 mb-8"></div>}

          {toggles.impact && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="stat-number text-4xl font-bold text-primary">0</div>
                  <p className="text-muted-foreground">Manual Sync Steps</p>
                </div>
                <div className="space-y-2">
                  <div className="stat-number text-4xl font-bold text-primary">Real-time</div>
                  <p className="text-muted-foreground">Code Synchronization</p>
                </div>
                <div className="space-y-2">
                  <div className="stat-number text-4xl font-bold text-primary">Enhanced</div>
                  <p className="text-muted-foreground">Developer Experience</p>
                </div>
              </div>

              <div className="bg-muted/30 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-primary mb-4">Development Transformation</h4>
                <p className="text-muted-foreground mb-4">
                  The Visual Studio integration completely transformed the development workflow for SES users,
                  eliminating friction between tools and enabling seamless engineering processes.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <h5 className="font-normal">Before Integration:</h5>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Manual code synchronization required</li>
                      <li>• Context switching between tools</li>
                      <li>• Risk of version conflicts and errors</li>
                      <li>• Limited testing capabilities in SES</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-normal">After Integration:</h5>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Automatic real-time synchronization</li>
                      <li>• Seamless workflow within single environment</li>
                      <li>• Eliminated version conflicts</li>
                      <li>• Built-in testing and validation tools</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                  <h5 className="text-lg font-normal text-primary mb-3">Developer Benefits</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Reduced development time by eliminating manual steps</li>
                    <li>• Improved code quality through integrated validation</li>
                    <li>• Enhanced productivity with seamless tool integration</li>
                    <li>• Lower learning curve for new team members</li>
                  </ul>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                  <h5 className="text-lg font-normal text-primary mb-3">Business Impact</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Increased SES platform adoption</li>
                    <li>• Improved client satisfaction and retention</li>
                    <li>• Enabled more complex engineering projects</li>
                    <li>• Competitive advantage in systems engineering market</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Demo Section */}
        <div className={`${toggles.demo ? "py-12" : "py-4"}`}>
          <div
            className={`cursor-pointer hover:opacity-80 transition-opacity ${
              toggles.demo ? "flex items-center justify-between mb-8" : "flex items-center justify-between py-4"
            }`}
            onClick={() => toggleSection("demo")}
          >
            {toggles.demo ? (
              <>
                <h3 className="text-2xl font-normal section-heading">DEMO</h3>
                <ChevronUp className="h-5 w-5" />
              </>
            ) : (
              <>
                <div className="flex items-center gap-8 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-normal section-heading">DEMO</h3>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">FINAL THESIS PRESENTATION</span>
              </>
            )}
          </div>
          {toggles.demo && <div className="w-full h-px bg-border/30 mb-8"></div>}

          {toggles.demo && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h4 className="text-2xl font-bold text-primary">Final Thesis Presentation</h4>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  View the comprehensive presentation of my final thesis project showcasing the Visual Studio
                  integration for SES.
                </p>
              </div>

              <div className="bg-muted/30 p-8 rounded-lg border border-border/30">
                <div className="text-center space-y-6">
                  <div className="space-y-2">
                    <h5 className="text-xl font-normal text-primary">Interactive Demo Available</h5>
                    <p className="text-muted-foreground">
                      The complete demonstration of the Visual Studio integration is available in my thesis
                      presentation. Navigate to <strong>page 20</strong> to view the interactive demo and technical
                      implementation details.
                    </p>
                  </div>

                  <div className="pt-4">
                    <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                      <Link href="https://vs-in-ses.my.canva.site/" target="_blank" rel="noopener noreferrer">
                        View Thesis Presentation
                      </Link>
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground italic">
                    Demo content is located on page 20 of the presentation
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Software Developer Portfolio. All rights reserved.</p>
        </div>
      </footer>

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
