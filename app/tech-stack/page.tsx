import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

const techStackData = {
  "Languages & Frameworks": [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "React",
    "Next.js",
    "Vue.js",
    "Angular",
    "Node.js",
    "Express",
    "Django",
    "Flask",
  ],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Firebase", "SQLite"],
  "DevOps & Cloud": [
    "AWS",
    "Google Cloud",
    "Microsoft Azure",
    "Docker",
    "Kubernetes",
    "Git",
    "GitHub Actions",
    "CI/CD",
    "Terraform",
  ],
  Frontend: [
    "HTML5",
    "CSS3",
    "Sass/SCSS",
    "Tailwind CSS",
    "Bootstrap",
    "Material-UI",
    "Styled Components",
    "Webpack",
    "Vite",
  ],
  "Tools & Others": ["VS Code", "Postman", "Figma", "Jira", "Slack", "Notion", "Linux", "macOS", "Windows"],
}

const skillCategories = [
  {
    category: "Languages & Frameworks",
    skills: [
      "Back-End: .NET Core, .NET Framework, C#, Go, PHP, Python, Java, Kotlin",
      "Front-End: Angular, React Native, JavaScript, Visual Basic, WPF, MVVM",
      "UI/UX Design: Figma, Blender, Canva",
    ],
  },
  {
    category: "Database Technologies",
    skills: [
      "Relational: MySQL, Oracle, PostgreSQL, SQL Server, SQLite",
      "Non-Relational: MongoDB, Firebase realtime database, Cassandra",
      "Graph Database: Neo4j",
      "PowerQuery",
    ],
  },
  {
    category: "Platforms & Tools",
    skills: [
      "Development: Visual Studio, Visual Studio Code, TortoiseSVN, Eclipse, IntelliJ IDEA, DataGrip, Flutter, Unity, Expo",
      "Project Management: Jira, Confluence, Notion",
      "Analytics & Reporting: Power BI",
      "Design: Figma, Blender, Canva",
      "Collaboration: Notion, Jira",
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      "Version Control: Git, GitHub, GitLab, Azure DevOps, TortoiseSVN",
      "Cloud Tools: AWS, Azure, GCP",
      "Microservices Development: RabbitMQ",
    ],
  },
  {
    category: "Additional Skills",
    skills: [
      "Technical Skills: API Development (RESTful and GraphQL), Automated testing with Selenium and JUnit",
      "Product Development: Strong experience designing and launching digital products",
      "Leadership & Management: Proven ability to lead teams and manage projects efficiently",
      "Digital Marketing: Skills in brand building, SEO, and running e-commerce platforms",
      "Content Creation: Expertise in creating compelling marketing and product content",
    ],
  },
]

export default function TechStackPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </Link>
              </Button>
              <div className="font-heading font-bold text-xl text-foreground">Tech Stack</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                Projects
              </Link>
              <Link href="/experience" className="text-gray-600 hover:text-gray-900 transition-colors">
                Experience
              </Link>
              <Button asChild className="bg-gray-900 text-white hover:bg-gray-800"
			  style={{ backgroundColor: "#b81202", color: "white" }}>
                <Link href="/#contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto min-h-screen">
        {/* Skills Overview */}
        <section className="p-16 border-gray-400">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">Technical Expertise</h2>

          {/* Left Column - Content */}
          <div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              My technical expertise spans full-stack development, with deep experience in enterprise software, fintech
              solutions, and AI-powered applications. I specialize in building scalable systems that bridge complex
              business requirements with user-friendly interfaces.
            </p>

            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-gray-900 mb-2">{category.category}</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    {category.skills.map((skill, skillIndex) => (
                      <p key={skillIndex}>{skill}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="p-16 border-t border-gray-400">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">Start a project?</h2>
          <Button asChild className="bg-gray-900 text-white hover:bg-gray-800">
            <Link href="mailto:manyakh8@gmail.com">CONTACT ME</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}
