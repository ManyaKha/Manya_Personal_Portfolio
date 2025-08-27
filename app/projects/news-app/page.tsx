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
  Newspaper,
  Search,
  Bot,
  Mail,
  Clock,
  Settings,
  ChevronUp,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function NewsAppPage() {
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
                    News Automation
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    AI Integration
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Full-Stack Development
                  </Badge>
                </div>
                <h1 className="text-3xl font-normal">NEWSAPP – INTERNAL FINANCE NEWS AUTOMATION</h1>
                <p className="text-lg text-muted-foreground">
                  Built and deployed an internal news aggregation system that automated financial news tracking and
                  delivery. Replaced manual email curation with a scalable app integrating APIs, web scraping,
                  GPT-powered summarization, and scheduled multi-user email distribution — saving the team daily effort
                  and ensuring decision-makers always had timely insights.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/financial-news-dashboard-interface-with-automated-.png"
                  alt="NewsApp Financial News Automation Dashboard"
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
                      Internal Finance Team
                      <br />
                      Global Investment Firm
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Role</h4>
                    <p className="text-muted-foreground">
                      Full-stack developer &
                      <br />
                      product designer
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Duration</h4>
                    <p className="text-muted-foreground">
                      Mar–Aug 2024
                      <br />
                      6-month development
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
                    <p className="text-muted-foreground">6 months development</p>
                    <p className="text-sm text-muted-foreground">Mar 2024 - Aug 2024</p>
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
                    <p className="text-muted-foreground">Solo Developer</p>
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
                    <p className="text-muted-foreground">Automated news curation</p>
                    <p className="text-sm text-muted-foreground">Saving hours of daily analyst work</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground mt-6">
                <div className="flex items-center gap-2">
                  <span>Global Investment Firm</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>AI-Powered Automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>News Intelligence System</span>
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
                <span className="text-sm text-muted-foreground">MANUAL PROCESSES</span>
              </>
            )}
          </div>
          {toggles.challenge && <div className="w-full h-px bg-border/30 mb-8"></div>}

          {toggles.challenge && (
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Financial analysts were manually scanning multiple news sites and sending daily email updates — a slow,
                error-prone process that created significant operational challenges:
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <h5 className="text-lg font-normal">Time-Intensive Manual Work</h5>
                  </div>
                  <p className="text-muted-foreground">
                    Consumed hours of analyst time daily scanning multiple news sources and curating relevant content.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <h5 className="text-lg font-normal">Missed Market Signals</h5>
                  </div>
                  <p className="text-muted-foreground">
                    Missed key market signals when individuals were unavailable, creating information gaps during
                    critical periods.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Search className="h-5 w-5 text-primary" />
                    <h5 className="text-lg font-normal">Limited Personalization</h5>
                  </div>
                  <p className="text-muted-foreground">
                    Lacked personalization or topic-level filtering, making it difficult to deliver relevant content to
                    different stakeholders.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <h5 className="text-lg font-normal">Inconsistent Communication</h5>
                  </div>
                  <p className="text-muted-foreground">
                    Produced inconsistent email formats and summaries, affecting the quality and reliability of
                    information delivery.
                  </p>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  "This created information bottlenecks and impacted how quickly the firm could act on market-moving
                  news."
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
                  <h3 className="text-2xl font-normal section-heading">SOLUTION DELIVERED</h3>
                </div>
                <span className="text-sm text-muted-foreground">AUTOMATION ENGINE</span>
              </>
            )}
          </div>
          {toggles.solution && <div className="w-full h-px bg-border/30 mb-8"></div>}

          {toggles.solution && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h4 className="text-2xl font-bold text-primary">Automated News Aggregation & Distribution Engine</h4>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  At the core of the project was a full-stack news intelligence system designed to automate collection,
                  summarization, and distribution of financial news in real-time.
                </p>
              </div>

              <div className="space-y-12">
                {/* News Gathering Layer */}
                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Newspaper className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h5 className="text-xl font-normal mb-2">News Gathering Layer</h5>
                        <p className="text-muted-foreground mb-4">
                          Comprehensive news collection from multiple sources
                        </p>
                      </div>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Integrated NewsAPI for mainstream finance headlines from trusted sources
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Built web scraping modules for critical niche sites and competitor press releases
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Designed modular sources — easy to add/remove publishers over time
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Topic Search & Personalization */}
                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h5 className="text-xl font-normal mb-2">Topic Search & Personalization</h5>
                        <p className="text-muted-foreground mb-4">Smart filtering and personalized content delivery</p>
                      </div>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Implemented keyword-based topic search (e.g., "interest rates," "emerging markets")
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Allowed users to subscribe to topics of choice for tailored updates
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* AI Summarization */}
                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Bot className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h5 className="text-xl font-normal mb-2">AI Summarization with GPT</h5>
                        <p className="text-muted-foreground mb-4">Intelligent content processing and summarization</p>
                      </div>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Deployed GPT-powered text summarization to condense long-form articles into 2–3 key takeaways
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Enabled consistent "at-a-glance" summaries while retaining source links for deep dives
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Automated Email Delivery */}
                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h5 className="text-xl font-normal mb-2">Automated Email Delivery</h5>
                        <p className="text-muted-foreground mb-4">
                          Flexible distribution system for teams and individuals
                        </p>
                      </div>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Built email scheduling system for daily/weekly digests
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Users could send digests to themselves or entire teams (multiple recipients supported)
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Configurable delivery times for different departments
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Scheduling & Workflow Automation */}
                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h5 className="text-xl font-normal mb-2">Scheduling & Workflow Automation</h5>
                        <p className="text-muted-foreground mb-4">Flexible automation with user control</p>
                      </div>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Designed flexible scheduling engine for recurring digests
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Integrated controls to pause, edit, or customize frequency without developer input
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Scalable Design */}
                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Settings className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h5 className="text-xl font-normal mb-2">Scalable & Maintainable Design</h5>
                        <p className="text-muted-foreground mb-4">Future-ready architecture for growth</p>
                      </div>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Modular pipelines for APIs, scrapers, and summarizers — easy to extend
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Admin dashboard for monitoring email logs and scraper health
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          Future-ready for integration with analytics dashboards or Slack/Teams bots
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
                  <div className="stat-number text-4xl font-bold text-primary">Hours</div>
                  <p className="text-muted-foreground">Daily Analyst Time Reclaimed</p>
                </div>
                <div className="space-y-2">
                  <div className="stat-number text-4xl font-bold text-primary">100%</div>
                  <p className="text-muted-foreground">Automated News Processing</p>
                </div>
                <div className="space-y-2">
                  <div className="stat-number text-4xl font-bold text-primary">24/7</div>
                  <p className="text-muted-foreground">Continuous Market Monitoring</p>
                </div>
              </div>

              <div className="bg-muted/30 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-primary mb-4">Transformation Achieved</h4>
                <p className="text-muted-foreground mb-4">
                  Replaced manual workflows with an automated, scalable system. Analysts reclaimed hours of daily work,
                  leadership received faster and more reliable news insights, and internal knowledge-sharing became
                  consistent and data-driven.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <h5 className="font-normal">Before:</h5>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Manual news scanning</li>
                      <li>• Missed market signals</li>
                      <li>• Inconsistent formats</li>
                      <li>• Time-intensive curation</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-normal">After:</h5>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Automated aggregation</li>
                      <li>• 24/7 monitoring</li>
                      <li>• Consistent AI summaries</li>
                      <li>• Personalized delivery</li>
                    </ul>
                  </div>
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
