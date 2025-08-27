"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Users, Brain, ChevronUp, Stethoscope, Activity, Clock } from "lucide-react"
import { useEffect, useState } from "react"

export default function TechnishePage() {
  const [toggles, setToggles] = useState({
    useCase: false,
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
              <Button asChild
              style={{ backgroundColor: "#b81202", color: "white" }}>
                <Link href="/#contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto p-6">
        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Badge variant="secondary" className="text-xs">
                    Healthcare Technology
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    AI & Machine Learning
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Medical SaaS
                  </Badge>
                </div>
                <h1 className="text-3xl font-normal">TECHNISHE - AI TRIAGE SYSTEM</h1>
                <p className="text-lg text-muted-foreground">
                  Co-founded a medical SaaS startup focused on AI-powered triage. Built a machine learning engine to
                  assess symptom input and recommend care paths, reducing triage delays by up to 5 hours. Collaborated
                  directly with doctors, hospitals, and telehealth partners to align clinical logic with system design.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/healthcare-virtual-triage-interface-with-patient-f.png"
                  alt="TECHNISHE AI Triage System Interface"
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
            </div>

            <div className="mt-12">
              <div className="bg-muted/20 p-6 rounded-lg border border-border/30">
                <h3 className="text-lg font-normal mb-4">Project Details</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Role</h4>
                    <p className="text-muted-foreground">
                      Co-Founder
                      <br />
                      Product, Algorithm & AI Lead
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Timeline</h4>
                    <p className="text-muted-foreground">
                      Jul 2021 – Feb 2023
                      <br />
                      19-month development
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Recognition</h4>
                    <p className="text-muted-foreground">
                      Government pilot deployment
                      <br />
                      $1M investment opportunities
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>Impact</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">5 hours reduction</p>
                    <p className="text-sm text-muted-foreground">in triage delays</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Activity className="h-5 w-5 text-primary" />
                      <span>Accuracy</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">10% increase</p>
                    <p className="text-sm text-muted-foreground">in diagnostic accuracy</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Stethoscope className="h-5 w-5 text-primary" />
                      <span>Collaboration</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">200+ interviews</p>
                    <p className="text-sm text-muted-foreground">with medical professionals</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground mt-6">
                <div className="flex items-center gap-2">
                  <span>Medical SaaS Startup</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>AI-Powered Healthcare</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Clinical Collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  <h3 className="text-2xl font-normal section-heading">CHALLENGE</h3>
                </div>
                <span className="text-sm text-muted-foreground">EMERGENCY DEPARTMENT INEFFICIENCIES</span>
              </>
            )}
          </div>
          {toggles.challenge && <div className="w-full h-px bg-border/30 mb-8"></div>}

          {toggles.challenge && (
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Emergency departments face high patient volumes and inefficient triage workflows, resulting in long wait
                times, patient misprioritization, and delayed care.
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <h5 className="text-lg font-normal">Long Wait Times</h5>
                  </div>
                  <p className="text-muted-foreground">
                    Patients experiencing extended delays in emergency departments due to inefficient triage processes
                    and high patient volumes.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-5 w-5 text-primary" />
                    <h5 className="text-lg font-normal">Patient Misprioritization</h5>
                  </div>
                  <p className="text-muted-foreground">
                    Critical cases not being identified quickly enough, while less urgent cases consume valuable triage
                    resources.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Activity className="h-5 w-5 text-primary" />
                    <h5 className="text-lg font-normal">Workflow Inefficiencies</h5>
                  </div>
                  <p className="text-muted-foreground">
                    Manual triage processes creating bottlenecks and preventing optimal patient flow through emergency
                    departments.
                  </p>
                </div>
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
                <h3 className="text-2xl font-normal section-heading">SOLUTION</h3>
                <ChevronUp className="h-5 w-5" />
              </>
            ) : (
              <>
                <div className="flex items-center gap-8 flex-1">
                  <h3 className="text-2xl font-normal section-heading">SOLUTION</h3>
                </div>
                <span className="text-sm text-muted-foreground">AI-POWERED REMOTE TRIAGING</span>
              </>
            )}
          </div>
          {toggles.solution && <div className="w-full h-px bg-border/30 mb-8"></div>}

          {toggles.solution && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h4 className="text-2xl font-bold text-primary">AI-Powered Remote Triaging System</h4>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Co-founded TECHNISHE to design a remote triaging solution leveraging AI to optimize patient flow
                  before arrival. Focused on building a decision-support tool that could analyze patient input, predict
                  severity, and suggest appropriate telehealth or in-person routes.
                </p>
              </div>

              <div className="space-y-12">
                {/* Clinical Collaboration */}
                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Stethoscope className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h5 className="text-xl font-normal mb-2">🔍 Clinical Collaboration</h5>
                        <p className="text-muted-foreground mb-4">
                          Extensive collaboration with medical professionals to ensure clinical accuracy
                        </p>
                      </div>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Conducted <strong>200+ interviews</strong> with medical professionals, emergency physicians,
                          triage nurses, and hospital administrators
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Partnered with{" "}
                          <strong>two telehealth firms, a public hospital, and a national innovation hub</strong>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Worked directly with doctors to define triage criteria, user expectations, and failure points
                          in existing systems
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Translated medical pain points into functional and technical system requirements
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Algorithm & AI Architecture */}
                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h5 className="text-xl font-normal mb-2">🧠 Algorithm & AI Architecture</h5>
                        <p className="text-muted-foreground mb-4">
                          Multi-layered AI system with clinical decision support
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-muted/20 p-4 rounded-lg">
                          <h6 className="font-semibold mb-2">🧬 1. Data Model & ML Layer</h6>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                              • Designed and trained <strong>ML models (Python, Pandas, NumPy)</strong> using 100+
                              anonymized patient case sets
                            </li>
                            <li>
                              • Implemented data pipelines to extract and normalize user input from symptom
                              questionnaires
                            </li>
                            <li>• Modeled probability scoring for condition severity and clinical urgency</li>
                          </ul>
                        </div>

                        <div className="bg-muted/20 p-4 rounded-lg">
                          <h6 className="font-semibold mb-2">🧠 2. Triage Scoring Engine</h6>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Developed a logic-based engine layered over ML predictions</li>
                            <li>• Urgency classification (low/moderate/high/emergency)</li>
                            <li>• Recommended care path (telehealth vs. in-person)</li>
                            <li>• Risk flags for specific symptoms (chest pain, stroke signs, etc.)</li>
                          </ul>
                        </div>

                        <div className="bg-muted/20 p-4 rounded-lg">
                          <h6 className="font-semibold mb-2">📈 3. Interface & Feedback Loop</h6>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                              • Built user flow with <strong>Flutter and Figma</strong>, focused on mobile UX clarity
                            </li>
                            <li>• Included a physician-facing dashboard to review predictions</li>
                            <li>
                              • <strong>Feed outcomes back into the model</strong> for iterative improvement
                            </li>
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
                <h3 className="text-2xl font-normal section-heading">OUTCOMES & RECOGNITION</h3>
                <ChevronUp className="h-5 w-5" />
              </>
            ) : (
              <>
                <div className="flex items-center gap-8 flex-1">
                  <h3 className="text-2xl font-normal section-heading">OUTCOMES & RECOGNITION</h3>
                </div>
                <span className="text-sm text-muted-foreground">MEASURABLE IMPACT</span>
              </>
            )}
          </div>
          {toggles.impact && <div className="w-full h-px bg-border/30 mb-8"></div>}

          {toggles.impact && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="stat-number text-4xl font-bold text-primary">5 hrs</div>
                  <p className="text-muted-foreground">Triage Delay Reduction</p>
                </div>
                <div className="space-y-2">
                  <div className="stat-number text-4xl font-bold text-primary">10%</div>
                  <p className="text-muted-foreground">Diagnostic Accuracy Increase</p>
                </div>
                <div className="space-y-2">
                  <div className="stat-number text-4xl font-bold text-primary">$1M</div>
                  <p className="text-muted-foreground">Investment Opportunities</p>
                </div>
                <div className="space-y-2">
                  <div className="stat-number text-4xl font-bold text-primary">200+</div>
                  <p className="text-muted-foreground">Medical Professional Interviews</p>
                </div>
              </div>

              <div className="bg-muted/30 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-primary mb-4">Recognition & Achievements</h4>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">
                        <strong>Reduced triage delays by up to 5 hours</strong> in simulation testing
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">
                        <strong>Increased diagnostic accuracy by 10%</strong> in test groups
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">
                        Negotiated investment opportunities totaling <strong>$1M</strong> across public and private
                        channels
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">
                        Selected for <strong>government pilot deployment phase</strong>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-muted-foreground italic">
                    Featured in startup competitions and healthcare innovation showcases
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
    </div>
  )
}
