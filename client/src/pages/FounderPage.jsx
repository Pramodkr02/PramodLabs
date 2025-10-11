import React, { useState, useEffect } from "react";
import HeroImage from "../assets/HeroImage.jpg";

const FounderPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "React.js", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "Node.js", level: 85, color: "from-green-500 to-emerald-500" },
    { name: "Python", level: 88, color: "from-yellow-500 to-orange-500" },
    { name: "MongoDB", level: 82, color: "from-green-600 to-green-700" },
    { name: "JavaScript", level: 92, color: "from-yellow-400 to-yellow-600" },
    { name: "SQL", level: 80, color: "from-blue-600 to-blue-800" },
  ];

  const projects = [
    {
      title: "Hospital Management System",
      description:
        "Full-stack web application for hospital operations using MERN stack and REST architecture with JWT authentication and role-based access control.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
        "JWT",
      ],
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "High-performance e-commerce website with secure payment gateways, MongoDB indexing, and server-side pagination achieving 98.5% uptime.",
      tech: ["React.js", "Node.js", "MongoDB", "Stripe", "PayPal", "Vercel"],
      link: "#",
    },
  ];

  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Bluestock Fintech",
      period: "March 2025 - Present",
      achievements: [
        "Engineered advanced data structures algorithms, optimizing query processing time by 40%",
        "Developed mission-critical projects using agile methodologies, improving code efficiency by 30%",
        "Architected user-friendly API platform with React.js, Node.js, Express.js, and MongoDB",
        "Implemented JWT auth and Elasticsearch search, improving answer accuracy by 30%",
        "Designed scalable database architecture boosting page load speed by 60%",
      ],
    },
  ];

  return (
    <div className="  bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[-100px] opacity-0"
              }`}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Pramod Kumar
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Software Engineer & Full-Stack Developer passionate about
                creating innovative solutions. Currently pursuing B.Tech at NIT
                Silchar with expertise in modern web technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer">
                  Download Resume
                </button>
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer">
                  Contact Me
                </button>
              </div>
            </div>

            {/* Profile Photo */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[100px] opacity-0"
              }`}
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  {/* Animated background circles */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-30 animate-ping"></div>

                  {/* Profile image with HeroImage.jpg */}
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="w-72 h-72 bg-white rounded-full p-2">
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                        <img
                          src={HeroImage}
                          alt="Pramod Kumar - Founder"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating icons */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce"
                    style={{ animationDelay: "1s" }}
                  >
                    <svg
                      className="w-8 h-8 text-purple-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM6 8a2 2 0 11-4 0 2 2 0 014 0zM18 12a2 2 0 11-4 0 2 2 0 014 0zM6 12a2 2 0 11-4 0 2 2 0 014 0zM6 16a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: "Years Experience", value: "2+", icon: "🎯" },
            { label: "Projects Completed", value: "10+", icon: "🚀" },
            { label: "Technologies", value: "15+", icon: "⚡" },
            { label: "Certifications", value: "3+", icon: "🏆" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["about", "experience", "skills", "projects", "achievements"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            )
          )}
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* About Tab */}
          {activeTab === "about" && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About Me
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm a passionate Software Engineer and Full-Stack Developer
                  currently pursuing my B.Tech in Software Development at the
                  National Institute of Technology, Silchar. With a strong
                  foundation in Data Structures & Algorithms, Machine Learning,
                  and Generative AI, I specialize in building scalable web
                  applications.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  My expertise lies in modern web technologies including
                  React.js, Node.js, and MongoDB. I'm currently working as a
                  Software Engineer Intern at Bluestock Fintech, where I've
                  contributed to optimizing query processing and improving
                  system performance.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Full-Stack Development
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Machine Learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">System Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-700">Cloud Computing</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="text-sm text-blue-600 font-semibold">
                      2022 - 2026
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      Bachelor of Technology (B.Tech)
                    </div>
                    <div className="text-gray-600">
                      National Institute of Technology, Silchar, Assam, India
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      Software Development, DSA, ML & Gen AI
                    </div>
                  </div>
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="text-sm text-green-600 font-semibold">
                      2020 - 2022
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      12th Standard (Higher Secondary)
                    </div>
                    <div className="text-gray-600">
                      Science Stream with Mathematics
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      Physics, Chemistry, Mathematics, Biology
                    </div>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <div className="text-sm text-purple-600 font-semibold">
                      2018 - 2020
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      10th Standard (Secondary)
                    </div>
                    <div className="text-gray-600">CBSE Board</div>
                    <div className="text-sm text-gray-500 mt-2">
                      Science, Mathematics, Social Studies, Languages
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === "experience" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Professional Experience
              </h2>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {exp.role}
                      </h3>
                      <p className="text-xl text-blue-600 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-gray-500 font-medium mt-2 lg:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Technical Skills
              </h2>

              {/* Programming Languages */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Programming Languages
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Python",
                    "C",
                    "C++",
                    "JavaScript",
                    "SQL",
                    "HTML",
                    "CSS",
                  ].map((lang, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 text-center hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
                    >
                      <span className="font-semibold text-gray-800">
                        {lang}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks & Tools */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Frameworks & Tools
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "React.js",
                    "Node.js",
                    "Next.js",
                    "Express.js",
                    "Git",
                    "GitHub",
                    "VS Code",
                    "MongoDB",
                    "MySQL",
                    "WordPress",
                  ].map((tool, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 text-center hover:from-green-100 hover:to-emerald-100 transition-all duration-300"
                    >
                      <span className="font-semibold text-gray-800">
                        {tool}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill Levels */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Skill Proficiency
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === "projects" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Featured Projects
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 cursor-pointer">
                      View Project
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === "achievements" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Achievements & Leadership
              </h2>

              {/* Certifications */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Certifications
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-yellow-500 pl-6">
                    <div className="text-yellow-600 font-semibold mb-2">
                      2023
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      AWS Certified Cloud Practitioner
                    </div>
                    <div className="text-gray-600">Amazon Web Services</div>
                  </div>
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="text-green-600 font-semibold mb-2">
                      2023
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      1st Position
                    </div>
                    <div className="text-gray-600">
                      University-level Coding Competition
                    </div>
                  </div>
                </div>
              </div>

              {/* Leadership Experience */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Leadership Experience
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="text-blue-600 font-semibold mb-2">
                      2022 - Present
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      NCC Organisation, NIT Silchar
                    </div>
                    <ul className="text-gray-600 mt-3 space-y-2">
                      <li>
                        • Led technical stand-ups and mentored junior team
                        members
                      </li>
                      <li>• Accelerated task completion by 20%</li>
                      <li>• Championed collaboration initiatives</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <div className="text-purple-600 font-semibold mb-2">
                      2024 - Present
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      IEEE Robotics and Automation Society
                    </div>
                    <ul className="text-gray-600 mt-3 space-y-2">
                      <li>
                        • Collaborating with IEEE RAS team on website
                        development
                      </li>
                      <li>
                        • Implementing backend functionalities using Node.js and
                        MongoDB
                      </li>
                      <li>• Managing user data and content efficiently</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              I'm always open to discussing new opportunities and exciting
              projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-3 text-gray-700">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:pramodkr02.info@gmail.com"
                  className="hover:text-blue-600 transition-colors duration-300 cursor-pointer"
                >
                  pramodkr02.info@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+91 8178206570</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>github.com/Pramodkr02</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderPage;
