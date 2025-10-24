"use client";

import {
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaAward,
  FaHeart,
  FaGlobe,
  FaChartLine,
  FaHandshake,
  FaArrowRight,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

export default function About() {
  const stats = [
    {
      number: "500+",
      label: "Happy Clients",
      icon: FaHeart,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      number: "1000+",
      label: "Projects Completed",
      icon: FaRocket,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      number: "50+",
      label: "Team Members",
      icon: FaUsers,
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      number: "10+",
      label: "Years Experience",
      icon: FaAward,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "We constantly push boundaries to create cutting-edge solutions that drive digital transformation.",
      icon: FaLightbulb,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "Excellence",
      description:
        "We strive for perfection in every project, ensuring the highest quality standards in our deliverables.",
      icon: FaAward,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and building strong partnerships with our clients.",
      icon: FaHandshake,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      title: "Growth",
      description:
        "We focus on sustainable growth and helping our clients achieve their business objectives.",
      icon: FaChartLine,
      color: "text-green-500",
      bgColor: "bg-green-50",
      gradient: "from-green-400 to-emerald-500",
    },
  ];

  const achievements = [
    "Award-winning design team",
    "99% client satisfaction rate",
    "24/7 support available",
    "ISO 9001 certified",
    "Agile development process",
    "Continuous innovation focus",
  ];

  return (
    <div className="min-h-screen   bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-orange-100 to-pink-50 py-15">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-pink-100/20"></div>
        <div className="  mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg">
            <FaStar className="text-yellow-500 mr-2" />
            <span className="text-gray-700 font-medium">Established 2014</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-8 leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              MagOne
            </span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            We are a passionate team of innovators, creators, and
            problem-solvers dedicated to transforming ideas into exceptional
            digital experiences that make a difference.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center">
              Explore Our Work
              <FaArrowRight className="ml-2" />
            </button>
            <button className="bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-white transform hover:scale-105 transition-all duration-300 shadow-lg border border-gray-200">
              Watch Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="  mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <FaGlobe className="mr-2" />
                Global Presence
              </div>
              <h2 className="text-5xl font-bold text-gray-800 leading-tight">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Story
                </span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded in 2014, MagOne began as a small team with a big
                  vision: to create digital experiences that not only look
                  beautiful but also drive real business results.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Over the years, we've grown into a full-service digital
                  agency, serving clients across the globe. Our commitment to
                  innovation, quality, and client success has remained at the
                  heart of everything we do.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, we continue to push the boundaries of what's possible
                  in digital design and development, always staying ahead of the
                  latest trends and technologies.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {achievements.slice(0, 3).map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700"
                  >
                    <FaCheckCircle className="text-green-500 mr-2" />
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-orange-400 to-pink-500 p-6 rounded-full w-24 h-24 mx-auto mb-8 flex items-center justify-center shadow-lg">
                    <FaGlobe className="text-4xl text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    Global <span className="text-green-500">Reach</span>
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    We've worked with clients from over 25 countries, bringing
                    diverse perspectives and innovative solutions to every
                    project.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-500">
                        25+
                      </div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-500">
                        500+
                      </div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-pink-50 relative">
        <div className="  mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FaUsers className="mr-2" />
              Meet the Team
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're a diverse group of talented individuals united by our
              passion for creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member Cards */}
            <div className="group">
              <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <div className="w-28 h-28 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-3xl font-bold">JD</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                  John Doe
                </h3>
                <p className="text-blue-500 font-semibold mb-4 text-lg">
                  CEO & Founder
                </p>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  Visionary leader with 15+ years of experience in digital
                  innovation and business strategy.
                </p>
                <div className="mt-6 flex justify-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
                <div className="w-28 h-28 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-3xl font-bold">JS</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                  Jane Smith
                </h3>
                <p className="text-green-500 font-semibold mb-4 text-lg">
                  Creative Director
                </p>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  Award-winning designer passionate about creating beautiful and
                  functional user experiences.
                </p>
                <div className="mt-6 flex justify-center space-x-3">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                <div className="w-28 h-28 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-3xl font-bold">MJ</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                  Mike Johnson
                </h3>
                <p className="text-purple-500 font-semibold mb-4 text-lg">
                  Lead Developer
                </p>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  Full-stack developer with expertise in modern technologies and
                  scalable solutions.
                </p>
                <div className="mt-6 flex justify-center space-x-3">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5"></div>
        <div className="  mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <FaRocket className="text-white mr-2" />
            <span className="text-white font-medium">
              Ready to Get Started?
            </span>
          </div>
          <h2 className="text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Start Your <span className="text-yellow-300">Project</span>
            ?
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's work together to bring your vision to life and create
            something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-orange-500 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center">
              Get Started Today
              <FaArrowRight className="ml-3" />
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/30 transform hover:scale-105 transition-all duration-300 border border-white/30">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
