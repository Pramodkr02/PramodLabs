import React from "react";
import { Link } from "react-router-dom";
import { educationData } from "../utils/educationData";

const EducationPage = () => {
  // Generate more education content for the dedicated page
  const extendedEducationData = [
    ...educationData,
    {
      id: 401,
      title: "The Future of Online Learning",
      description:
        "Exploring how technology is revolutionizing education and creating new opportunities for learners worldwide.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      meta: "Online Learning • 1 day ago",
      readTime: "8 min read",
      views: "56.3K",
      likes: "4.5K",
    },
    {
      id: 402,
      title: "STEM Education: Preparing for Tomorrow",
      description:
        "Why STEM education is crucial for future careers and how schools are adapting their curricula.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      meta: "STEM • 3 days ago",
      readTime: "9 min read",
      views: "42.8K",
      likes: "3.6K",
    },
    {
      id: 403,
      title: "Mental Health in Education",
      description:
        "Addressing the importance of mental health support for students and educators in modern education systems.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      meta: "Mental Health • 5 days ago",
      readTime: "7 min read",
      views: "38.9K",
      likes: "3.2K",
    },
    {
      id: 404,
      title: "Global Education Trends 2024",
      description:
        "A comprehensive look at emerging educational trends and innovations from around the world.",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9c1?w=400&h=300&fit=crop",
      meta: "Trends • 1 week ago",
      readTime: "10 min read",
      views: "45.7K",
      likes: "3.8K",
    },
    {
      id: 405,
      title: "Teacher Professional Development",
      description:
        "Essential strategies and resources for educators to enhance their teaching skills and career growth.",
      image:
        "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=300&fit=crop",
      meta: "Professional Development • 4 days ago",
      readTime: "6 min read",
      views: "31.4K",
      likes: "2.7K",
    },
    {
      id: 406,
      title: "Parent Involvement in Education",
      description:
        "How parents can effectively support their children's learning journey and collaborate with educators.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      meta: "Parenting • 6 days ago",
      readTime: "8 min read",
      views: "35.2K",
      likes: "2.9K",
    },
  ];

  return (
    <div className="  bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16">
        <div className="  mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Education</h1>
            <p className="text-xl text-green-100 mb-6">
              Discover insights, trends, and innovations shaping the future of
              learning
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-green-500 px-3 py-1 rounded-full">
                Learning
              </span>
              <span className="bg-green-500 px-3 py-1 rounded-full">
                Technology
              </span>
              <span className="bg-green-500 px-3 py-1 rounded-full">
                Innovation
              </span>
              <span className="bg-green-500 px-3 py-1 rounded-full">
                Research
              </span>
              <span className="bg-green-500 px-3 py-1 rounded-full">
                Development
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
              Latest Education News
            </h2>

            {/* Featured Article */}
            <div className="mb-8">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop"
                    alt="The Future of Online Learning"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>Online Learning • 1 day ago</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    <Link
                      to="/main/education/401"
                      className="hover:text-green-600 transition-colors"
                    >
                      The Future of Online Learning
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Exploring how technology is revolutionizing education and
                    creating new opportunities for learners worldwide. Discover
                    the innovative approaches that are transforming traditional
                    learning methods.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>8 min read</span>
                      <span>56.3K views</span>
                      <span>4.5K likes</span>
                    </div>
                    <Link
                      to="/main/education/401"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {extendedEducationData.slice(1, 7).map((article) => (
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
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Education
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{article.meta}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-green-600 transition-colors">
                      <Link to={`/main/education/${article.id}`}>
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
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Education Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Education Categories
              </h3>
              <div className="space-y-3">
                {[
                  "Online Learning",
                  "STEM",
                  "Higher Education",
                  "K-12",
                  "Professional Development",
                  "Research",
                ].map((category) => (
                  <Link
                    key={category}
                    to={`/main/education/${
                      Math.floor(Math.random() * 400) + 1
                    }`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-700">{category}</span>
                    <span className="text-green-500">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Learning Resources */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Learning Resources
              </h3>
              <div className="space-y-3">
                {[
                  { resource: "Free Online Courses", platform: "Coursera" },
                  { resource: "Educational Videos", platform: "Khan Academy" },
                  { resource: "Interactive Learning", platform: "Duolingo" },
                  { resource: "Academic Papers", platform: "ResearchGate" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-2 last:border-b-0"
                  >
                    <div className="font-medium text-gray-800">
                      {item.resource}
                    </div>
                    <div className="text-sm text-gray-500">{item.platform}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Stay Learning</h3>
              <p className="text-green-100 mb-4">
                Get the latest education insights and learning tips
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded text-gray-800 placeholder-gray-500"
                />
                <button className="w-full bg-white text-green-600 px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
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

export default EducationPage;
