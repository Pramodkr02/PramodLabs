import React from "react";
import { Link } from "react-router-dom";
import { techArticles } from "../utils/articleCard";

const TechPage = () => {
  // Generate more tech content for the dedicated page
  const extendedTechData = [
    ...techArticles,
    {
      id: 301,
      title: "AI Revolution: How Machine Learning is Changing Everything",
      description:
        "Explore the latest breakthroughs in artificial intelligence and machine learning that are transforming industries worldwide.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      meta: "Artificial Intelligence • 2 hours ago",
      readTime: "12 min read",
      views: "67.3K",
      likes: "5.8K",
    },
    {
      id: 302,
      title: "Quantum Computing: The Next Frontier",
      description:
        "Understanding quantum computing breakthroughs and their potential impact on cryptography, drug discovery, and optimization problems.",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
      meta: "Quantum Computing • 1 day ago",
      readTime: "15 min read",
      views: "43.7K",
      likes: "4.2K",
    },
    {
      id: 303,
      title: "5G Networks: Transforming Connectivity",
      description:
        "How 5G technology is revolutionizing mobile communications, IoT devices, and enabling new applications like autonomous vehicles.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      meta: "Telecommunications • 3 days ago",
      readTime: "8 min read",
      views: "52.1K",
      likes: "3.9K",
    },
    {
      id: 304,
      title: "Blockchain Beyond Cryptocurrency",
      description:
        "Exploring blockchain applications in supply chain management, healthcare, voting systems, and digital identity verification.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
      meta: "Blockchain • 5 days ago",
      readTime: "10 min read",
      views: "38.4K",
      likes: "3.1K",
    },
    {
      id: 305,
      title: "Cybersecurity in the Age of AI",
      description:
        "How artificial intelligence is being used both to enhance cybersecurity defenses and create new attack vectors.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      meta: "Cybersecurity • 1 week ago",
      readTime: "9 min read",
      views: "29.6K",
      likes: "2.7K",
    },
    {
      id: 306,
      title: "Edge Computing: Bringing Processing Closer",
      description:
        "Understanding edge computing architecture and its role in reducing latency for IoT devices, autonomous systems, and real-time applications.",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      meta: "Edge Computing • 4 days ago",
      readTime: "7 min read",
      views: "25.8K",
      likes: "2.3K",
    },
    {
      id: 307,
      title: "Metaverse Technology: Building Virtual Worlds",
      description:
        "The technology stack behind the metaverse including VR, AR, spatial computing, and virtual economies.",
      image:
        "https://images.unsplash.com/photo-1592478411213-6153e4c4c8a0?w=400&h=300&fit=crop",
      meta: "Metaverse • 6 days ago",
      readTime: "11 min read",
      views: "41.2K",
      likes: "3.6K",
    },
    {
      id: 308,
      title: "Sustainable Technology: Green Computing",
      description:
        "How the tech industry is addressing environmental challenges through renewable energy, efficient hardware, and sustainable practices.",
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=300&fit=crop",
      meta: "Green Tech • 2 weeks ago",
      readTime: "6 min read",
      views: "33.7K",
      likes: "2.9K",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Technology</h1>
            <p className="text-xl text-blue-100 mb-6">
              Stay ahead with the latest technology news, innovations, and
              insights from the digital world
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-500 px-3 py-1 rounded-full">
                AI & Machine Learning
              </span>
              <span className="bg-blue-500 px-3 py-1 rounded-full">
                Quantum Computing
              </span>
              <span className="bg-blue-500 px-3 py-1 rounded-full">5G</span>
              <span className="bg-blue-500 px-3 py-1 rounded-full">
                Blockchain
              </span>
              <span className="bg-blue-500 px-3 py-1 rounded-full">
                Cybersecurity
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Articles */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Latest Tech News
            </h2>

            {/* Featured Article */}
            <div className="mb-8">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
                    alt="AI Revolution"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>Artificial Intelligence • 2 hours ago</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    <Link
                      to="/main/tech/301"
                      className="hover:text-blue-600 transition-colors"
                    >
                      AI Revolution: How Machine Learning is Changing Everything
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Explore the latest breakthroughs in artificial intelligence
                    and machine learning that are transforming industries
                    worldwide. From healthcare to finance, AI is revolutionizing
                    how we work, live, and interact with technology.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>12 min read</span>
                      <span>67.3K views</span>
                      <span>5.8K likes</span>
                    </div>
                    <Link
                      to="/main/tech/301"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {extendedTechData.slice(1, 7).map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Tech
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{article.meta}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                      <Link to={`/main/tech/${article.id}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {article.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{article.readTime}</span>
                      <div className="flex items-center space-x-3">
                        <span>{article.views} views</span>
                        <span>{article.likes} likes</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Tech Categories
              </h3>
              <div className="space-y-3">
                {[
                  "Artificial Intelligence",
                  "Quantum Computing",
                  "Cybersecurity",
                  "Blockchain",
                  "5G & Networks",
                  "Edge Computing",
                  "Metaverse",
                  "Green Technology",
                ].map((category) => (
                  <Link
                    key={category}
                    to={`/main/tech/${Math.floor(Math.random() * 300) + 1}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-700">{category}</span>
                    <span className="text-blue-500">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tech Events */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Upcoming Tech Events
              </h3>
              <div className="space-y-3">
                {[
                  { event: "CES 2024", date: "January 9-12" },
                  { event: "Mobile World Congress", date: "February 26-29" },
                  { event: "Google I/O", date: "May 14-15" },
                  { event: "Apple WWDC", date: "June 10-14" },
                  { event: "TechCrunch Disrupt", date: "October 28-30" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-2 last:border-b-0"
                  >
                    <div className="font-medium text-gray-800">
                      {item.event}
                    </div>
                    <div className="text-sm text-gray-500">{item.date}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Tech Statistics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">AI Market Size</span>
                  <span className="font-semibold text-blue-600">
                    $1.8T by 2030
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">5G Users</span>
                  <span className="font-semibold text-blue-600">
                    1.3B globally
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">IoT Devices</span>
                  <span className="font-semibold text-blue-600">
                    75B by 2025
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Cybersecurity Jobs</span>
                  <span className="font-semibold text-blue-600">
                    3.5M shortage
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
              <p className="text-blue-100 mb-4">
                Get the latest tech news and insights delivered to your inbox
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded text-gray-800 placeholder-gray-500"
                />
                <button className="w-full bg-white text-blue-600 px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechPage;
