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
  ChevronUp,
} from "lucide-react"
import { X, Mail, Phone, MapPin, Linkedin, ArrowRight } from "lucide-react"

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

  const [isContactOpen, setIsContactOpen] = useState(false);
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
                    Financial Technology
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Full-Stack Development
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Database Design
                  </Badge>
                </div>
                <h1 className="text-3xl font-normal">INCUS CAPITAL</h1>
                <p className="text-lg text-muted-foreground">
                  Designed and deployed a full-stack financial system that automated interest, drawdown, and KPI
                  calculations. Replaced 20+ Excel workflows with a secure, real-time database + custom dashboard —
                  saving the firm hours weekly and transforming operations.
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
                      Oct 2023 – June 2024
                      <br />
                      8-month engagement
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
                    <p className="text-sm text-muted-foreground"></p>
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
              <div className="text-left space-y-6">
                <p className="text-muted-foreground">
                  At Incus Capital, loan and portfolio management relied heavily on Excel sheets, email threads, and
                  manual reconciliations. Each team—investment, finance, operations, and client relations—maintained its
                  own version of the truth. This created multiple challenges typical for mid-market investment firms:
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h5 className="text-lg font-normal mb-2 text-primary">Settlement Notices</h5>
                    <p className="text-muted-foreground">
                      Preparing quarterly or ad-hoc settlement notices meant pulling interest, fees, and repayments from
                      various spreadsheets, then formatting them into Word/PDF manually. This process was
                      time-consuming, inconsistent, and highly prone to human error.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h5 className="text-lg font-normal mb-2 text-primary">Loan Tracking</h5>
                    <p className="text-muted-foreground">
                      Monitoring drawdowns, repayments, and amortization schedules across dozens of facilities required
                      complex linked spreadsheets. Any changes in assumptions (interest rates, fees, extensions) had to
                      be manually updated, increasing risk of miscalculation.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h5 className="text-lg font-normal mb-2 text-primary">Portfolio KPIs</h5>
                    <p className="text-muted-foreground">
                      Core metrics like IRR, MOIC, NAV, and expected vs actual collections were recalculated by hand.
                      Version control issues often led to delays in management reporting and investor communications.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h5 className="text-lg font-normal mb-2 text-primary">Collateral & Risk Data</h5>
                    <p className="text-muted-foreground">
                      Collateral information—such as loan-to-value (LTV) ratios, asset valuations, and debt
                      positions—was scattered across files. This made it difficult to assess risk exposure quickly,
                      especially when preparing for investment committee meetings.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h5 className="text-lg font-normal mb-2 text-primary">Audit & Compliance</h5>
                    <p className="text-muted-foreground">
                      Regulators and auditors required transparent records of capital calls, repayments, and fee
                      calculations. Manual methods made it difficult to ensure audit readiness, often requiring days of
                      cleanup before reviews.
                    </p>
                  </div>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg">
                  <p className="text-muted-foreground italic">
                    The result was siloed data, inconsistent reporting, and operational bottlenecks. Analysts and
                    finance staff spent hours reconciling numbers instead of focusing on investment strategy, while
                    management lacked confidence in having a single, real-time view of the portfolio.
                  </p>
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
                <span className="text-sm text-muted-foreground">TECHNICAL CHALLENGES</span>
              </>
            )}
          </div>
          {toggles.challenge && <div className="w-full h-px bg-border/30 mb-8"></div>}

          {toggles.challenge && (
            <div className="space-y-8">
              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">⚙️</span>
                    <h5 className="text-lg font-normal">Complex Financial Logic & Data Models</h5>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    <strong>Challenge:</strong> Translating financial concepts like IRR, MOIC, NAV, and drawdown
                    schedules into precise algorithms. Mid-investment firms have complex rules (e.g., multiple interest
                    types: cash, PIK, PIYC, undrawn fees), which don't map easily into standard code.
                  </p>
                  <p className="text-muted-foreground mb-3">
                    <strong>Why hard:</strong> Tiny miscalculations (like handling day counts, accruals, or mid-term
                    rate changes) could lead to material errors.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Example in your work:</strong> The Loan Schedule + KPI dashboards show accurate principal,
                    interest, and repayment flows — meaning you had to carefully encode and validate these formulas.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🏗</span>
                    <h5 className="text-lg font-normal">Data Normalization & Integration</h5>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    <strong>Challenge:</strong> Different teams (finance, risk, investor relations) rely on data from
                    multiple sources — Excel sheets, accounting systems, and bank statements. Standardizing this into a
                    single database structure is complex.
                  </p>
                  <p className="text-muted-foreground mb-3">
                    <strong>Why hard:</strong> Data is messy, often inconsistent in format (dates, currencies, loan
                    IDs).
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Example in your work:</strong> The Collateral Information screen shows risk metrics (LTV,
                    collateral value, senior financing). Pulling this into one coherent view meant designing a schema
                    that can handle changing assumptions and historical vs current values.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🎨</span>
                    <h5 className="text-lg font-normal">Balancing UI/UX with Financial Precision</h5>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    <strong>Challenge:</strong> Building a clear, intuitive UI while surfacing highly detailed financial
                    data. Users need quick insights (KPIs, charts) but also the ability to drill into exact numbers
                    (loan-by-loan transaction history).
                  </p>
                  <p className="text-muted-foreground mb-3">
                    <strong>Why hard:</strong> Too much detail → overwhelming. Too little detail → finance team doesn't
                    trust the system.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Example in your work:</strong> The KPI dashboard balances high-level metrics (IRR, profit,
                    collections) with detailed facility/balance breakdowns in collapsible cards.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🔄</span>
                    <h5 className="text-lg font-normal">Automation & Workflow Orchestration</h5>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    <strong>Challenge:</strong> Automating workflows (e.g., generating settlement notices, scheduling
                    repayments/drawdowns) while keeping them flexible enough for exceptions.
                  </p>
                  <p className="text-muted-foreground mb-3">
                    <strong>Why hard:</strong> Investment firms often make one-off adjustments (special repayment terms,
                    fee overrides). Automation has to cover 90% of cases but still allow manual intervention.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Example in your work:</strong> The Settlement Notice generator lets users select date
                    ranges, then auto-creates audit-ready documents — a workflow that required careful orchestration of
                    calculations + document formatting.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🛡</span>
                    <h5 className="text-lg font-normal">Compliance, Auditability & Transparency</h5>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    <strong>Challenge:</strong> Financial firms need to show not just outputs, but how outputs were
                    calculated. Every calculation (interest, fees, KPIs) must have a transparent audit trail.
                  </p>
                  <p className="text-muted-foreground mb-3">
                    <strong>Why hard:</strong> Developers must design for both usability and compliance-readiness (logs,
                    change tracking, reproducibility).
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Example in your work:</strong> The Loan Schedule tab with historical transactions is
                    audit-friendly — recording principal, interest, and repayments with timestamps.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🚀</span>
                    <h5 className="text-lg font-normal">Performance & Scalability</h5>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    <strong>Challenge:</strong> As portfolios grow (hundreds of loans, thousands of transactions),
                    queries and KPI calculations must remain fast.
                  </p>
                  <p className="text-muted-foreground mb-3">
                    <strong>Why hard:</strong> Financial models often require recalculating large datasets (interest
                    accruals, cash flows) across multiple scenarios.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Example in your work:</strong> The Portfolio Overview screen showing multiple parent loans +
                    grouped deals — likely required optimization in how you queried and aggregated data.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🔌</span>
                    <h5 className="text-lg font-normal">Team Communication & Domain Knowledge</h5>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    <strong>Challenge:</strong> As a developer, you had to understand financial terms and workflows well
                    enough to translate them into technical features.
                  </p>
                  <p className="text-muted-foreground mb-3">
                    <strong>Why hard:</strong> Finance professionals often describe requirements in business language,
                    not technical specs. Bridging that gap (and validating your interpretation) is non-trivial.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Example in your work:</strong> Encoding financial jargon like capital at risk, cumulative
                    collections, senior financing, lien positions into a working UI required ongoing collaboration with
                    finance teams.
                  </p>
                </div>
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
