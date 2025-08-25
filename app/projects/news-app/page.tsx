"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Newspaper } from "lucide-react"
import { useEffect } from "react"

export default function NewsAppPage() {
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
                <Badge variant="outline">Media</Badge>
                <Badge variant="secondary">Live</Badge>
              </div>
              <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">NEWS-APP</h1>
              <p className="text-muted-foreground text-lg mb-8">
                A modern news aggregation platform that curates content from multiple sources. Features personalized
                feeds, real-time updates, advanced search capabilities, and social sharing functionality for an enhanced
                news consumption experience.
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
                src="/modern-news-app-interface-with-article-cards-and-n.png"
                alt="NEWS-APP Interface"
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
                <p className="text-muted-foreground">4 months development</p>
                <p className="text-sm text-muted-foreground">Aug 2023 - Nov 2023</p>
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
                <p className="text-muted-foreground">3 developers</p>
                <p className="text-sm text-muted-foreground">Frontend-focused team</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Newspaper className="h-5 w-5 text-primary" />
                  <span>Impact</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">50,000+ articles indexed</p>
                <p className="text-sm text-muted-foreground">5,000+ daily active users</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3 mb-8">
                {["React", "Express", "Redis", "Elasticsearch", "AWS", "Node.js", "PostgreSQL", "WebSockets"].map(
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
                  <span>Multi-source news aggregation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Personalized content recommendations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Advanced search and filtering</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Real-time breaking news alerts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Social sharing and bookmarking</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">Challenges & Solutions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Content Aggregation</h3>
                  <p className="text-muted-foreground">
                    Built robust web scraping and API integration system to aggregate content from 50+ news sources
                    while respecting rate limits and handling various content formats.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Search Performance</h3>
                  <p className="text-muted-foreground">
                    Implemented Elasticsearch for lightning-fast full-text search across millions of articles with
                    advanced filtering, sorting, and relevance scoring.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Real-time Updates</h3>
                  <p className="text-muted-foreground">
                    Developed WebSocket-based notification system for instant breaking news alerts and live content
                    updates without page refreshes.
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
          <h2 className="font-heading font-bold text-3xl mb-6">Need a Content Platform?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Let's discuss how I can help build your next media or content aggregation application.
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
