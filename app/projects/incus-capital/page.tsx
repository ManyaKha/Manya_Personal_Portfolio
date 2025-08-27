"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  Calendar,
  Users,
  Heart,
  TrendingUp,
  Calculator,
  Database,
  BarChart3,
  Settings,
  Shield,
  ChevronUp,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function IncusCapitalPage() {
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
                  Financial Technology
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Full-Stack Development
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Digital Transformation
                </Badge>
              </div>
              <h1 className="text-3xl font-normal">INCUS CAPITAL</h1>
              <p className="text-lg text-muted-foreground">
                Designed and deployed a full-stack financial system that automated interest, drawdown, and KPI
                calculations. Replaced 20+ Excel workflows with a secure, real-time database + custom dashboard — saving
                the firm hours weekly and transforming operations.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4">
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
              </div> */}
            </div>
            <div className="relative">
                <img
                  src="/images/portfolio/incus_capital(1).png"
                  alt="INCUS Capital Financial Dashboard Interface"
                  className="w-full rounded-lg shadow-2xl"
                />
            </div>
          </div>

          <div className="mt-12">
            <div className="bg-muted/20 p-6 rounded-lg border border-border/30">
              <h3 className="text-lg font-normal mb-4">Project Details</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Client</h4>
                  <p className="text-muted-foreground">
                    INCUS Capital
                    <br />
                    Mid-size Investment Firm
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Role</h4>
                  <p className="text-muted-foreground">
                    Full-cycle developer and
                    <br />
                    digital operations strategist
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Duration</h4>
                  <p className="text-muted-foreground">
                    Jan–June 2024
                    <br />
                    6-month engagement
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
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
                  <p className="text-muted-foreground">Solo Developers</p>
                  <p className="text-sm text-muted-foreground">Full project creation/deployment</p>
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
                  <p className="text-muted-foreground">Replacing 20+ Excel workflows</p>
                  <p className="text-sm text-muted-foreground">Automating calculations engine</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground mt-6">
              <div className="flex items-center gap-2">
                <span>Mid-size Investment Firm</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Full-cycle Development</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Digital Operations Strategy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Hero Section
        <div className="py-12 border-b border-border/20">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="text-xs">
                Financial Technology
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Full-Stack Development
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Digital Transformation
              </Badge>
            </div>
            <h1 className="section-heading text-3xl font-normal">INCUS CAPITAL</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Designed and deployed a full-stack financial system that automated interest, drawdown, and KPI
              calculations. Replaced 20+ Excel workflows with a secure, real-time database + custom dashboard — saving
              the firm hours weekly and transforming operations.
            </p>

            <div className="bg-muted/20 p-6 rounded-lg border border-border/30">
              <h3 className="text-lg font-normal mb-4">Project Details</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Client</h4>
                  <p className="text-muted-foreground">
                    INCUS Capital
                    <br />
                    Mid-size Investment Firm
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Role</h4>
                  <p className="text-muted-foreground">
                    Full-cycle developer and
                    <br />
                    digital operations strategist
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Duration</h4>
                  <p className="text-muted-foreground">
                    Jan–June 2024
                    <br />
                    6-month engagement
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Mid-size Investment Firm</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Full-cycle Development</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span>Digital Operations Strategy</span>
              </div>
            </div>
          </div>
        </div> */}

        {/* Use Case Section */}
        <div className={`${toggles.useCase ? "py-12" : "py-4"}`}>
          <div
            className={`cursor-pointer hover:opacity-80 transition-opacity ${
              toggles.useCase ? "flex items-center justify-between mb-8" : "flex items-center justify-between py-4"
            }`}
            onClick={() => toggleSection("useCase")}
          >
            {toggles.useCase ? (
              <>
                <h3 className="text-2xl font-normal section-heading">USE CASE</h3>
                <ChevronUp className="h-5 w-5" />
              </>
            ) : (
              <>
                <div className="flex items-center gap-8 flex-1">
                  <h3 className="text-2xl font-normal section-heading">USE CASE</h3>
                </div>
                <span className="text-sm text-muted-foreground">DAILY OPERATIONS</span>
              </>
            )}
          </div>
          {toggles.useCase && <div className="w-full h-px bg-border/30 mb-8"></div>}

          {toggles.useCase && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h4 className="text-2xl font-bold text-primary">Daily Operations & Workflow Integration</h4>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  The financial calculation engine seamlessly integrates into INCUS Capital's daily operations,
                  transforming how the investment firm manages portfolios, reports to stakeholders, and makes strategic
                  decisions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h5 className="text-lg font-normal mb-3">Portfolio Management</h5>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Real-time tracking of investment performance across multiple funds</li>
                      <li>• Automated calculation of interest accruals and capitalizations</li>
                      <li>• Dynamic KPI monitoring for portfolio health assessment</li>
                      <li>• Scenario modeling for investment strategy optimization</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h5 className="text-lg font-normal mb-3">Investor Relations</h5>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Automated generation of investor reports and statements</li>
                      <li>• Real-time access to fund performance metrics</li>
                      <li>• Transparent drawdown and capital call management</li>
                      <li>• Compliance-ready audit trails for regulatory requirements</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h5 className="text-lg font-normal mb-3">Financial Operations</h5>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Streamlined monthly and quarterly financial reporting</li>
                      <li>• Automated reconciliation of fund accounting entries</li>
                      <li>• Exception handling for complex investment structures</li>
                      <li>• Integration with existing accounting and CRM systems</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h5 className="text-lg font-normal mb-3">Strategic Decision Making</h5>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Data-driven insights for investment committee meetings</li>
                      <li>• Risk assessment through comprehensive portfolio analytics</li>
                      <li>• Performance benchmarking against industry standards</li>
                      <li>• Forecasting tools for fund lifecycle management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h5 className="text-lg font-normal text-primary mb-3">Typical Daily Workflow</h5>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-primary font-semibold">1</span>
                    </div>
                    <p className="font-medium mb-1">Morning Review</p>
                    <p className="text-muted-foreground">Dashboard overview of portfolio performance</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-primary font-semibold">2</span>
                    </div>
                    <p className="font-medium mb-1">Data Processing</p>
                    <p className="text-muted-foreground">Automated calculations and KPI updates</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-primary font-semibold">3</span>
                    </div>
                    <p className="font-medium mb-1">Report Generation</p>
                    <p className="text-muted-foreground">Automated investor and internal reports</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-primary font-semibold">4</span>
                    </div>
                    <p className="font-medium mb-1">Strategic Analysis</p>
                    <p className="text-muted-foreground">Decision support for investment activities</p>
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
                  <h3 className="text-2xl font-normal section-heading">CHALLENGE</h3>
                </div>
                <span className="text-sm text-muted-foreground">OPERATIONAL CHALLENGES</span>
              </>
            )}
          </div>
          {toggles.challenge && <div className="w-full h-px bg-border/30 mb-8"></div>}

          {toggles.challenge && (
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                INCUS Capital managed critical financial operations using complex, interlinked Excel spreadsheets that
                created significant operational challenges:
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <h5 className="text-lg font-normal">Version Control Issues</h5>
                  </div>
                  <p className="text-muted-foreground">
                    No centralized version control led to conflicting data and outdated calculations across teams.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-5 w-5 text-primary" />
                    <h5 className="text-lg font-normal">Limited Collaboration</h5>
                  </div>
                  <p className="text-muted-foreground">
                    Real-time collaboration was impossible, creating bottlenecks in financial reporting workflows.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Database className="h-5 w-5 text-primary" />
                    <h5 className="text-lg font-normal">Data Governance Gaps</h5>
                  </div>
                  <p className="text-muted-foreground">
                    Lack of secure data governance created compliance risks and audit trail challenges.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <h5 className="text-lg font-normal">Scalability Limitations</h5>
                  </div>
                  <p className="text-muted-foreground">
                    Manual reporting workflows couldn't scale with business growth, making financial modeling
                    cumbersome.
                  </p>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  "This created operational risk, inefficiencies in internal reporting, and made financial modeling
                  cumbersome for the growing investment firm."
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Solution Section - moved to third position */}
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
                  <h3 className="text-2xl font-normal section-heading">SOLUTION DELIVERED</h3>
                </div>
                <span className="text-sm text-muted-foreground">FINANCIAL ENGINE</span>
              </>
            )}
          </div>
          {toggles.solution && <div className="w-full h-px bg-border/30 mb-8"></div>}

          {toggles.solution && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h4 className="text-2xl font-bold text-primary">Custom Financial Calculation Engine</h4>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  At the heart of the digital transformation was a robust, modular calculation engine designed to handle
                  the firm's most critical financial logic with precision, flexibility, and real-time data flow.
                </p>
              </div>

              <div className="space-y-12">
                {/* Interest Calculation Module */}
                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Calculator className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h5 className="text-xl font-normal mb-2">Interest Calculation Module</h5>
                        <p className="text-muted-foreground mb-4">
                          Dynamic interest computations with flexible rate structures
                        </p>
                      </div>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Implemented dynamic interest computations based on variable timeframes, compounding frequency,
                          and rate structures
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Configurable to support <strong>fixed, floating, and tiered interest models</strong>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Designed to accommodate <strong>mid-term rate changes</strong> and legacy calculations without
                          system conflict
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Capitalization & Repayment Engine */}
                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h5 className="text-xl font-normal mb-2">Capitalization & Repayment Engine</h5>
                        <p className="text-muted-foreground mb-4">Advanced logic for capital flow management</p>
                      </div>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Created logic for <strong>capitalization schedules</strong>, including accrued interest and
                          principal adjustments
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Enabled tracking and forecasting of <strong>repayment flows</strong> tied to investment
                          contracts
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Supported <strong>multi-scenario modeling</strong> (e.g., early repayments, partial
                          capitalizations)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Drawdown & Exception Handling */}
                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Settings className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h5 className="text-xl font-normal mb-2">Drawdown & Exception Handling System</h5>
                        <p className="text-muted-foreground mb-4">Rule-based logic with comprehensive audit trails</p>
                      </div>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Developed rule-based logic to manage <strong>drawdown triggers</strong>, timelines, and
                          approval conditions
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Captured edge cases such as{" "}
                          <strong>paused capital calls, exceptions to investor thresholds</strong>, and overrides
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Fully traceable logic for audit-readiness
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* KPI Computation Layer */}
                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h5 className="text-xl font-normal mb-2">KPI Computation Layer</h5>
                        <p className="text-muted-foreground mb-4">Real-time portfolio analytics and reporting</p>
                      </div>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Engine directly computed <strong>real-time portfolio KPIs</strong> based on live data
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          KPIs included IRR, ROI, coverage ratios, drawdown % vs. capital commitments, and more
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Outputs piped into reporting dashboards and downloadable summaries for internal/external use
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Modular Design */}
                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h5 className="text-xl font-normal mb-2">Modular & Maintainable Design</h5>
                        <p className="text-muted-foreground mb-4">Future-proof architecture for scalable growth</p>
                      </div>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Designed for flexibility:{" "}
                          <strong>new logic can be added without affecting core structure</strong>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Business rules and formula sets abstracted into config layers — no need to rewrite code
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Enables rapid updates based on new financial products or regulation changes
                        </li>
                      </ul>
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
                  <h3 className="text-2xl font-normal section-heading">IMPACT & RESULTS</h3>
                </div>
                <span className="text-sm text-muted-foreground">TRANSFORMATION</span>
              </>
            )}
          </div>
          {toggles.impact && <div className="w-full h-px bg-border/30 mb-8"></div>}

          {toggles.impact && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="stat-number text-4xl font-bold text-primary">20+</div>
                  <p className="text-muted-foreground">Excel Workflows Replaced</p>
                </div>
                <div className="space-y-2">
                  <div className="stat-number text-4xl font-bold text-primary">Hours</div>
                  <p className="text-muted-foreground">Saved Weekly</p>
                </div>
                <div className="space-y-2">
                  <div className="stat-number text-4xl font-bold text-primary">100%</div>
                  <p className="text-muted-foreground">Real-time Data Access</p>
                </div>
              </div>

              <div className="bg-muted/30 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-primary mb-4">Transformation Achieved</h4>
                <p className="text-muted-foreground mb-4">
                  The custom financial calculation engine completely transformed INCUS Capital's operations, moving from
                  fragmented Excel-based workflows to a unified, secure, and scalable digital platform.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <h5 className="font-normal">Before:</h5>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Manual Excel calculations</li>
                      <li>• Version control issues</li>
                      <li>• Limited collaboration</li>
                      <li>• Audit trail gaps</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-normal">After:</h5>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Automated calculations</li>
                      <li>• Real-time data sync</li>
                      <li>• Seamless collaboration</li>
                      <li>• Complete audit trails</li>
                    </ul>
                  </div>
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
                  <h3 className="text-2xl font-normal section-heading">DEMO</h3>
                </div>
                <span className="text-sm text-muted-foreground">SYSTEM IN ACTION</span>
              </>
            )}
          </div>

          {toggles.demo && (
            <div className="space-y-8">
              {[2, 3, 4, 5, 6, 7].map((num) => (
                <div key={num} className="relative">
                  <img
                    src={`/images/portfolio/incus(${num}).png`}
                    alt={`Incus Demo ${num}`}
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
    </div>
  )
}
