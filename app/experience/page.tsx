"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ArrowLeft, X, Mail, Phone, MapPin, Linkedin } from "lucide-react"

const experiences = [
  {
    company: "INCUS CAPITAL",
    position: "SOFTWARE PROJECT LEAD",
    location: "Madrid, Spain",
    duration: "Dec 2023 - Present",
    type: "Full-time",
    description:
      "I conducted a comprehensive analysis of the company's operations and requirements to design a customized fintech software solution tailored to their needs. Leveraging Agile methodology, I led the software development lifecycle, ensuring iterative progress and team collaboration for timely delivery.",
    achievements: [
      "Database Development: Designed and implemented a robust MySQL database, including an engine to efficiently import and process data from Excel files directly into the system",
      "UI/UX Design: Developed an intuitive and user-friendly interface for the web application, prioritizing functionality and user experience",
      "Full-Stack Development: Built the web application using Angular for the front-end and C# for the back-end, ensuring seamless integration and performance",
      "Testing Environment: Established a dedicated testing environment and developed test cases to ensure high code quality and functionality",
      "Cybersecurity Oversight: Managed all IT-related functions, including the implementation and maintenance of up-to-date cybersecurity measures to safeguard company data and systems",
    ],
    technologies: [
      ".NET Core",
      "C#",
      "Angular",
      "MySQL",
      "SQLite",
      "SQL Server",
      "PowerQuery",
      "Visual Studio",
      "Visual Studio Code",
      "IntelliJ IDEA",
      "DataGrip",
      "Figma",
      "Notion",
      "RabbitMQ",
    ],
  },
  {
    company: "THE REUSE COMPANY",
    position: "Software Developer",
    location: "Madrid, Spain",
    duration: "Jul 2021 - Feb 2023",
    type: "Full-time",
    description:
      "As a developer on the commercial tool SES, I contributed to enhancing the software by developing and extending its features and creating new functionalities tailored to client needs.",
    achievements: [
      "Visual Studio Integration: Designed and implemented a seamless connection between SES and Visual Studio, including a code emulator within SES",
      "Enabled the retrieval of all project components from Visual Studio and converted them into elements compatible with SES",
      "Developed functionality to create and edit project components directly within SES, with changes automatically saved to Visual Studio",
      "Error Analysis and Build Features: Implemented a build feature in SES capable of analyzing projects and providing detailed error reports related to project classes",
      "Documentation: Played a key role in creating comprehensive documentation for the code algorithms, ensuring clarity and ease of understanding for future developers and users",
    ],
    technologies: [
      ".NET Framework",
      "C#",
      "Visual Basic",
      "WPF",
      "MVVM",
      "Visual Studio",
      "Tortoise",
      "Jira",
      "Oracle",
      "MongoDB",
      "PowerQuery",
    ],
  },
  {
    company: "TECNISHE",
    position: "CO-FOUNDER",
    location: "Madrid, Spain",
    duration: "Jul 2021 - Feb 2023",
    type: "Full-time",
    description:
      "Emergency rooms have long waiting times. Triaging is not efficient with the current demand, so we developed a remote triaging solution for patients that uses AI.",
    achievements: [
      "Cut hospital wait times by 5 hours – Spearheaded product development of medical SaaS using GPT-4 and LLM's, resulting in patients to self assess and redirect to telehealth services, optimizing patient flow and reducing hospital congestion",
      "Conducted 200+ interviews – Formed key B2B and B2H partnerships with 2 telehealth companies, a public hospital, and Government Innovation Hub, addressing patient pains and prototyping features with Flutter and Figma ensuring user centric designs and functionality",
      "Boosted diagnosis accuracy by 10% – Trained machine learning models with Python using Pandas and NumPy to perform data analysis on 100+ patient data sets, improving patient prioritization and emergency room flow",
      "Negotiated investments up to 1 million dollars – Closed investments of more than $13,000 with investors, incubator programs, and winning startup competitions",
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Flutter",
      "Figma",
      "Blender",
      "Notion",
      "Canva",
      "Visual Studio Code",
      "IntelliJ IDEA",
      "MySQL",
      "SQL Server",
      "PowerQuery",
    ],
  },
  {
    company: "HAVAS",
    position: "INTERNATIONAL IT DEPARTMENT",
    location: "Madrid, Spain",
    duration: "Apr 2021 - Aug 2021",
    type: "Full-time",
    description:
      "Collaborated closely with the Lead Jira Projects Administrator to manage, troubleshoot, and streamline multiple Jira projects created by various departmental branches located across different countries.",
    achievements: [
      "Jira Projects Support: Worked extensively as technical support, assisting and training employees in creating and executing agile projects using Jira",
      "Power BI Implementation: Completed an intensive Power BI course and led the implementation of the tool to collect, analyze, and visualize financial data from multiple departments",
      "Database Redesign: Redesigned the database structure to efficiently handle and organize information for Havas employees. Additionally, wrote and executed scripts to successfully implement the redesigned database into Havas systems",
      "These contributions enhanced cross-departmental collaboration, improved data accessibility, and streamlined project management workflows",
    ],
    technologies: ["Jira", "Confluence", "PowerBI", "Oracle", "PowerQuery"],
  },
  {
    company: "GLOBAL INCUBATOR",
    position: "FRONT-END DEVELOPMENT",
    location: "Madrid, Spain",
    duration: "Aug 2020 - Feb 2021",
    type: "Full-time",
    description:
      "Primarily worked with React Native on the front-end, focusing on developing new functionalities and enhancing existing features to improve user experience and performance.",
    achievements: [
      "Project Contributions: Contributed to the development and improvement of websites such as VisionApp, VC Land, and GI4L, collaborating with teams to deliver high-quality, user-focused solutions",
      "Enhanced user experience and performance through feature improvements",
      "Gained experience in startup environment and rapid development cycles",
    ],
    technologies: ["React Native", "JavaScript", "PHP", "Python"],
  },
  {
    company: "DEPARTAMENTO DE LABORATORIO DE INFORMÁTICA (UC3M)",
    position: "SOFTWARE ENGINEER",
    location: "Madrid, Spain",
    duration: "2018 - 2019",
    type: "Part-time",
    description:
      "Managed the computer labs for the Computer Science and Engineering Department at UC3M, ensuring all systems were maintained, updated, and functional for students and faculty.",
    achievements: [
      "Project Development: Designed and developed a web application for the department to enhance organization and streamline workflows, contributing to improved efficiency in daily operations",
      "Webpage Migration: Led the migration of a webpage from Go to React Native, modernizing the technology stack and improving functionality",
      "Maintained and updated all computer lab systems for students and faculty",
    ],
    technologies: ["React Native", "Go", "Java", "C#", "Python", "MySQL", "SQL Server"],
  },
  {
    company: "INDEPENDENT ENGLISH TEACHER",
    position: "English Language Instructor",
    location: "Madrid, Spain",
    duration: "Sept 2017 - 2022",
    type: "Part-time",
    description:
      "Trained students to prepare for advanced English proficiency exams such as TOEFL, IELTS, and Cambridge Assessment, focusing on exam strategies and skill-building.",
    achievements: [
      "Language Coaching: Guided students in improving grammar, vocabulary, and fluency in both spoken and written English",
      "Personalized Support: Provided tailored feedback and practice sessions to address individual strengths and areas for improvement, ensuring success in their exams",
      "Developed customized learning materials and assessment strategies for diverse student needs",
    ],
    technologies: [],
  },
]

const education = [
  {
    degree: "Minor in Computer Science and Major Computer Engineering",
    institution: "Universidad Carlos III de Madrid",
    duration: "2016 - 2022",
    type: "Bachelor's Degree",
  },
  {
    degree: "International Baccalaureate - High Level in Physics, Chemistry and English",
    institution: "American School of Madrid",
    duration: "2016",
    type: "High School",
  },
]

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

export default function ExperiencePage() {
  const [isContactOpen, setIsContactOpen] = useState(false)

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
              <div className="font-heading font-bold text-xl text-foreground">Experience</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/tech-stack" className="text-gray-600 hover:text-gray-900 transition-colors">
                Tech Stack
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                Projects
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

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto min-h-screen p-16">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight max-w-2xl mb-6">
            Professional Experience
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            My professional journey spans across fintech, healthcare AI, and enterprise software development, with
            experience leading teams and building scalable solutions that drive business impact.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="space-y-16">
          {experiences.map((experience, index) => (
            <div key={index} className="space-y-4 group">
              {/* Left Column - Content */}
              <h3 className="text-lg font-medium text-gray-900 mb-4">{experience.company}</h3>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-900 mb-1">{experience.position}</p>
                <p className="text-sm text-gray-600 mb-1">{experience.location}</p>
                <p className="text-sm text-gray-600">{experience.duration}</p>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">{experience.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Key Achievements:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {experience.achievements.slice(0, 3).map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start space-x-2">
                      <div className="w-1 h-1 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {experience.technologies.slice(0, 6).map((tech) => (
                  <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
                {experience.technologies.length > 6 && (
                  <span className="text-xs text-gray-500">+{experience.technologies.length - 6} more</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-24 mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">Education</h2>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">{edu.institution}</h3>
                <p className="text-sm text-gray-600 mb-2">{edu.degree}</p>
                <p className="text-sm text-gray-600">{edu.duration}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <section className="p-16 border-t border-gray-400">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">Start a project?</h2>
            <Button
              className="rounded-full px-6 py-2 hover:opacity-90"
              style={{ backgroundColor: "#b81202", color: "white" }}
              onClick={() => setIsContactOpen(true)}
            >
              {" "}
              CONTACT ME
            </Button>
          </div>
        </section>
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
