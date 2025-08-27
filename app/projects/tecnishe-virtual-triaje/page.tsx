"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Users, Brain, ChevronUp, Stethoscope, Activity, Clock, Mail, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import { X, Phone, MapPin, Linkedin } from "lucide-react"

export default function TechnishePage() {
  const [toggles, setToggles] = useState({
    problem: false,
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

        {/* Problem Section (formerly Use Case) */}
        <div className={`${toggles.problem ? "py-12" : "py-4"}`}>
          <div
            className={`cursor-pointer hover:opacity-80 transition-opacity ${
              toggles.problem ? "flex items-center justify-between mb-8" : "flex items-center justify-between py-4"
            }`}
            onClick={() => toggleSection("problem")}
          >
            {toggles.problem ? (
              <>
                <h3 className="text-2xl font-normal section-heading">PROBLEM</h3>
                <ChevronUp className="h-5 w-5" />
              </>
            ) : (
              <>
                <div className="flex items-center gap-8 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-normal section-heading">PROBLEM</h3>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">CANADIAN EMERGENCY DEPARTMENT CRISIS</span>
              </>
            )}
          </div>
          {toggles.problem && <div className="w-full h-px bg-border/30 mb-8"></div>}

          {toggles.problem && (
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Emergency departments in Canada face chronic overcrowding. The average waiting time in Canadian EDs
                ranges from three to four hours (Hildebrandt, 2014), and studies show that approximately 85% of Ontario
                residents are discharged without further diagnosis after visiting the ED.
              </p>

              <div className="bg-muted/20 p-6 rounded-lg border border-border/30">
                <h4 className="text-lg font-semibold text-primary mb-4">Critical Inefficiency</h4>
                <p className="text-muted-foreground">
                  This highlights a critical inefficiency: large volumes of patients use scarce ER resources for
                  non-urgent conditions that could be managed elsewhere.
                </p>
              </div>

              <div className="space-y-8">
                <h4 className="text-xl font-normal text-primary">Traditional Triage Limitations</h4>
                <p className="text-muted-foreground mb-6">
                  Traditional triage requires in-person assessment by nurses, which creates:
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <h5 className="text-lg font-normal">Long Wait Times and Patient Frustration</h5>
                    </div>
                    <p className="text-muted-foreground">
                      Patients experience extended delays due to manual assessment processes, leading to increased
                      frustration and potential deterioration of conditions.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Activity className="h-5 w-5 text-primary" />
                      <h5 className="text-lg font-normal">Bottlenecks That Delay Life-Threatening Treatment</h5>
                    </div>
                    <p className="text-muted-foreground">
                      Critical cases may be delayed while staff assess less urgent patients, potentially compromising
                      outcomes for emergency situations.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="h-5 w-5 text-primary" />
                      <h5 className="text-lg font-normal">Inefficient Use of Staff and Hospital Capacity</h5>
                    </div>
                    <p className="text-muted-foreground">
                      Valuable nursing resources are tied up in initial assessments that could be streamlined through
                      technology, reducing overall system efficiency.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Stethoscope className="h-5 w-5 text-primary" />
                      <h5 className="text-lg font-normal">Lack of Guidance for Uncertain Patients</h5>
                    </div>
                    <p className="text-muted-foreground">
                      Patients arrive unsure of the urgency of their condition, with no pre-assessment tools to help
                      them understand appropriate care pathways.
                    </p>
                  </div>
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
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-normal section-heading">SOLUTION</h3>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">AI-POWERED REMOTE TRIAGING</span>
              </>
            )}
          </div>
          {toggles.solution && <div className="w-full h-px bg-border/30 mb-8"></div>}

          {toggles.solution && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h4 className="text-2xl font-bold text-primary mb-4">AI-Powered Remote Triaging System</h4>
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
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-normal section-heading">OUTCOMES & RECOGNITION</h3>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">SIMULATION RESULTS & AWARDS</span>
              </>
            )}
          </div>
          {toggles.impact && <div className="w-full h-px bg-border/30 mb-8"></div>}

          {toggles.impact && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="stat-number text-4xl font-bold text-primary">5 hrs</div>
                  <p className="text-muted-foreground">Projected Triage Reduction</p>
                </div>
                <div className="space-y-2">
                  <div className="stat-number text-4xl font-bold text-primary">10%</div>
                  <p className="text-muted-foreground">Simulated Accuracy Improvement</p>
                </div>
                <div className="space-y-2">
                  <div className="stat-number text-4xl font-bold text-primary">1st</div>
                  <p className="text-muted-foreground">Student Startup Award</p>
                </div>
                <div className="space-y-2">
                  <div className="stat-number text-4xl font-bold text-primary">200+</div>
                  <p className="text-muted-foreground">Medical Professional Interviews</p>
                </div>
              </div>

              <div className="bg-muted/30 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-primary mb-4">Academic Recognition & Simulation Results</h4>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">
                        <strong>Won 1st place in Student Startup Competition</strong> for healthcare innovation
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">
                        <strong>Projected 5-hour triage delay reduction</strong> based on simulation modeling
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">
                        <strong>10% diagnostic accuracy improvement</strong> in controlled test scenarios
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">
                        <strong>Academic recognition</strong> from healthcare innovation faculty and industry mentors
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">
                        <strong>Prototype validation</strong> through extensive medical professional consultation
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">
                        <strong>Featured in university startup showcase</strong> and healthcare innovation events
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-muted-foreground italic">
                    Student-led healthcare innovation project with real-world simulation testing and academic
                    recognition
                  </p>
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
                <span className="text-sm text-muted-foreground">SYSTEM SCREENSHOTS</span>
              </>
            )}
          </div>
          {toggles.demo && <div className="w-full h-px bg-border/30 mb-8"></div>}

          {toggles.demo && (
            <div className="space-y-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <div key={num} className="relative">
                  <img
                    src={`/images/portfolio/triage(${num}).png`}
                    alt={`Triage Demo ${num}`}
                    className="w-full rounded-lg shadow-2xl"
                  />
                </div>
              ))}
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
