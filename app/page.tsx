"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, Code, Globe, Mail, Target, Rocket, Star, Shield, Linkedin } from "lucide-react"
import Image from "next/image"

export default function BMWInterviewPortfolio() {
  const [titleAnimated, setTitleAnimated] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setTitleAnimated(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  // Email for Contact Me
  const email = "mdoorsamy35@gmail.com"

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bmw-race-car.png"
            alt="BMW Front Logo"
            fill
            className="object-cover object-center opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-blue-900/10" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in-up">
          {/* Title with backdrop */}
          <div
            className="inline-block mb-6"
            style={{
              background: "rgba(0,0,0,0.35)",
              borderRadius: "0.75rem",
              padding: "0.75rem 2rem",
              boxShadow: "0 4px 32px 0 rgba(0,0,0,0.08)",
              display: "inline-block",
            }}
          >
            <h1
              className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-white to-red-600 bg-clip-text text-transparent drop-shadow-2xl ${
                titleAnimated ? "animate-pulse" : ""
              }`}
              style={{
                animationIterationCount: titleAnimated ? "infinite" : "1",
                animationFillMode: titleAnimated ? undefined : "forwards",
              }}
            >
              BMW Interview Portfolio
            </h1>
          </div>
          {/* Stats and Data Science part with backdrop */}
          <p
            className="text-xl md:text-2xl text-white mb-8 font-serif drop-shadow-lg relative"
            style={{
              background: "rgba(0,0,0,0.35)",
              display: "inline-block",
              borderRadius: "0.5rem",
              padding: "0.5rem 1.25rem",
              boxShadow: "0 4px 32px 0 rgba(0,0,0,0.08)",
            }}
          >
            <span className="font-bold text-blue-200 bg-white/10 px-2 py-1 rounded mr-2">
              BCom Statistics & Data Science
            </span>
            <span className="opacity-80">• BMW ZA IT HUB Developer</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl"
              onClick={() => scrollToSection("projects")}
            >
              <Rocket className="w-5 h-5 mr-2" />
              View My Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-white/20 backdrop-blur-sm border-2 border-white/90 text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-red-600 hover:text-white hover:border-blue-500 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection("mission")}
            >
              <Shield className="w-5 h-5 mr-2" />
              My Mission
            </Button>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection("mission")}
        >
          <ChevronDown className="w-8 h-8 text-white hover:text-blue-300 transition-colors drop-shadow-lg" />
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50 animate-gradient-shift"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              My Mission
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-red-500 to-blue-600 mx-auto rounded-full animate-pulse"></div>
          </div>
          <Card className="p-10 border-0 bg-white/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <CardContent className="text-center space-y-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-spin-slow">
                <Target className="w-10 h-10 text-white" />
              </div>
              <p className="text-2xl text-gray-700 italic leading-relaxed font-serif">
                [Please provide your personal mission statement - what drives you, your core values, and your vision for
                making an impact through technology and data science]
              </p>
              <div className="flex justify-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-red-500 animate-twinkle"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/bmw-design-concept.jpeg')] opacity-5 bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-white">Personal Goals & Objectives</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-red-500 via-white to-red-500 mx-auto rounded-full animate-pulse"></div>
          </div>
          <Card className="p-10 border-0 bg-white/10 backdrop-blur-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <CardContent className="space-y-8">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center animate-bounce">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
              </div>
              <p className="text-xl text-white leading-relaxed font-serif text-center">
                [Please provide your personal goals and objectives - what you want to achieve personally and
                professionally, your aspirations beyond the career timeline, and what success means to you]
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section (white background, fits theme) */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif bg-gradient-to-r from-blue-400 via-red-500 to-blue-400 bg-clip-text text-transparent">
              My Skills & Competencies
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-red-500 to-blue-600 mx-auto rounded-full mb-8 shadow-sm shadow-blue-500/50"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Hard Skills */}
            <Card className="p-8 border-0 bg-white/90 backdrop-blur-sm shadow-2xl hover:shadow-blue-500/10 transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-serif mb-4 text-blue-700">Hard Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-lg text-blue-900">
                <div>
                  <span className="font-semibold text-blue-500">Programming:</span> JavaScript / TypeScript, Python, R, SQL, C#, SAS
                </div>
                <div>
                  <span className="font-semibold text-blue-500">Frameworks / Tools:</span> React, Next.js, .NET, PostgreSQL, Git, Agile/Scrum
                </div>
                <div>
                  <span className="font-semibold text-blue-500">Data Science:</span> Statistical Modeling, Machine Learning, Data Visualization (Tableau, Power BI), Predictive Analytics, Database Design & Optimization, ETL Processes
                </div>
              </CardContent>
            </Card>
            {/* Soft Skills */}
            <Card className="p-8 border-0 bg-white/80 backdrop-blur-sm shadow-2xl hover:shadow-red-500/10 transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-serif mb-4 text-red-700">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-lg text-blue-900">
                <div>
                  <span className="font-semibold text-red-500">Leadership:</span> Team Leadership (Head Coder - INF 370), Cross-functional Collaboration, Technical Presentation Skills, Requirements Gathering
                </div>
                <div>
                  <span className="font-semibold text-red-500">Problem Solving:</span> Analytical Thinking, Creative Problem-Solving, Rapid Learning & Adaptation, Attention to Detail
                </div>
                <div>
                  <span className="font-semibold text-red-500">Attributes:</span> Self-Motivated & Driven, Resilient Under Pressure, Continuous Learning Mindset, Results-Oriented
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why BMW Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-red-100/50 animate-gradient-shift"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Why BMW?
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-red-500 to-blue-600 mx-auto rounded-full animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-0 shadow-xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:-translate-y-4 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-700 font-serif text-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center group-hover:animate-spin"></div>
                  Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  BMW's commitment to cutting-edge technology and automotive innovation aligns with my passion for
                  pushing boundaries in data science and software development.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8 bg-white border-0 shadow-xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:-translate-y-4 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-red-600 font-serif text-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  The pursuit of excellence in engineering and design resonates with my approach to problem-solving and
                  my desire to deliver high-quality solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8 bg-white border-0 shadow-xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:-translate-y-4 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-700 font-serif text-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center group-hover:animate-bounce">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  Future Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  BMW's vision for the future of mobility, including electric vehicles and autonomous driving, excites
                  me as a data scientist who can contribute to these transformative technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-white">Project Demonstrations</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full animate-pulse mb-6"></div>
            <p className="text-xl text-gray-300 font-serif">Watch my coding projects come to life</p>
          </div>
          <div className="space-y-12">
            {[1, 2, 3].map((index) => (
              <Card
                key={index}
                className="group hover:shadow-3xl transition-all duration-500 border-0 bg-white/10 backdrop-blur-lg hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-white flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-red-600 rounded-full flex items-center justify-center group-hover:animate-spin">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    Project Demo {index}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-lg">Interactive coding demonstration</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-red-900/50 rounded-lg flex items-center justify-center group-hover:from-blue-800/50 group-hover:to-red-800/50 transition-all duration-500">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                        <Code className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-white font-serif text-lg">Video Demo Placeholder</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-red-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-red-100/30 animate-gradient-shift"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-red-600 mx-auto rounded-full animate-pulse mb-12"></div>
          <Card className="p-10 border-0 bg-white/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <CardContent className="space-y-8">
              <p className="text-xl text-gray-700 font-serif leading-relaxed">
                Ready to discuss opportunities and showcase my passion for data science and software development at BMW.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="flex items-center gap-3 text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:scale-110 transition-all duration-300 shadow-xl"
                  onClick={() => {
                    window.location.href = "mailto:mdoorsamy35@gmail.com"
                  }}
                >
                  <Mail className="w-6 h-6" />
                  Contact Me
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-3 text-lg px-8 py-6 bg-white/50 border-2 border-blue-300 text-blue-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-red-600 hover:text-white hover:border-transparent hover:scale-110 transition-all duration-300 shadow-lg"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href)
                    alert("Website link copied to clipboard!")
                  }}
                >
                  <Globe className="w-6 h-6" />
                  Share Portfolio Link
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-3 text-lg px-8 py-6 bg-blue-100 border-2 border-blue-400 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-transparent hover:scale-110 transition-all duration-300 shadow-lg"
                  onClick={() => {
                    window.open("https://www.linkedin.com/in/matthew-doorsamy", "_blank")
                  }}
                >
                  <Linkedin className="w-6 h-6" />
                  Connect on LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl font-serif mb-2">Thank You for Your Consideration</p>
          <p className="text-lg opacity-80">BMW ZA IT HUB Interview Portfolio • Built by Matthew Doorsamy with React & Next.js</p>
        </div>
      </footer>
    </div>
  )
}