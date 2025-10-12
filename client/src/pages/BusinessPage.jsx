import React from "react";
import { Link } from "react-router-dom";
import { businessData } from "../utils/businessData";

const BusinessPage = () => {
  // Generate more business content for the dedicated page
  const extendedBusinessData = [
    ...businessData,
    {
      id: 301,
      title: "Global Economic Outlook 2024",
      description:
        "Comprehensive analysis of global economic trends, challenges, and opportunities for the coming year.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      meta: "Economics • 2 days ago",
      readTime: "10 min read",
      views: "48.7K",
      likes: "3.9K",
    },
    {
      id: 302,
      title: "Startup Success Stories: Lessons Learned",
      description:
        "Real stories from successful entrepreneurs and the key lessons that propelled their businesses forward.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      meta: "Startups • 4 days ago",
      readTime: "8 min read",
      views: "35.2K",
      likes: "2.8K",
    },
    {
      id: 303,
      title: "Digital Transformation in Corporate World",
      description:
        "How traditional businesses are adapting to the digital age and leveraging technology for growth.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      meta: "Digital • 1 week ago",
      readTime: "9 min read",
      views: "41.6K",
      likes: "3.4K",
    },
    {
      id: 304,
      title: "Investment Strategies for 2024",
      description:
        "Expert insights on investment opportunities and strategies for the current market conditions.",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
      meta: "Investment • 3 days ago",
      readTime: "7 min read",
      views: "39.1K",
      likes: "3.2K",
    },
    {
      id: 305,
      title: "Leadership in Modern Business",
      description:
        "Exploring effective leadership styles and strategies for managing teams in today's dynamic business environment.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      meta: "Leadership • 5 days ago",
      readTime: "6 min read",
      views: "27.8K",
      likes: "2.3K",
    },
    {
      id: 306,
      title: "Supply Chain Innovation",
      description:
        "How businesses are revolutionizing their supply chains with technology and sustainable practices.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      meta: "Supply Chain • 6 days ago",
      readTime: "8 min read",
      views: "33.5K",
      likes: "2.7K",
    },
  ];

  return (
    <div className="  bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="  mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Business</h1>
            <p className="text-xl text-blue-100 mb-6">
              Stay ahead with the latest business insights, trends, and
              strategies for success
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-500 px-3 py-1 rounded-full">
                Strategy
              </span>
              <span className="bg-blue-500 px-3 py-1 rounded-full">
                Innovation
              </span>
              <span className="bg-blue-500 px-3 py-1 rounded-full">
                Leadership
              </span>
              <span className="bg-blue-500 px-3 py-1 rounded-full">
                Finance
              </span>
              <span className="bg-blue-500 px-3 py-1 rounded-full">
                Startups
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Articles */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Latest Business News
            </h2>

            {/* Featured Article */}
            <div className="mb-8">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
                    alt="Global Economic Outlook 2024"
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
                    <span>Economics • 2 days ago</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    <Link
                      to="/main/business/301"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Global Economic Outlook 2024
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Comprehensive analysis of global economic trends,
                    challenges, and opportunities for the coming year.
                    Understand the factors that will shape markets and business
                    decisions in 2024.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>10 min read</span>
                      <span>48.7K views</span>
                      <span>3.9K likes</span>
                    </div>
                    <Link
                      to="/main/business/301"
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
              {extendedBusinessData.slice(1, 7).map((article) => (
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
                        Business
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{article.meta}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                      <Link to={`/main/business/${article.id}`}>
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
            {/* Business Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Business Categories
              </h3>
              <div className="space-y-3">
                {[
                  "Strategy",
                  "Finance",
                  "Leadership",
                  "Innovation",
                  "Startups",
                  "Technology",
                ].map((category) => (
                  <Link
                    key={category}
                    to={`/main/business/${Math.floor(Math.random() * 300) + 1}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-700">{category}</span>
                    <span className="text-blue-500">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Market Updates */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Market Updates
              </h3>
              <div className="space-y-3">
                {[
                  { market: "S&P 500", change: "+1.2%", status: "positive" },
                  { market: "NASDAQ", change: "+0.8%", status: "positive" },
                  { market: "DOW", change: "-0.3%", status: "negative" },
                  { market: "FTSE 100", change: "+0.9%", status: "positive" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-b-0"
                  >
                    <div className="font-medium text-gray-800">
                      {item.market}
                    </div>
                    <div
                      className={`font-medium ${
                        item.status === "positive"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {item.change}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Stay Informed</h3>
              <p className="text-blue-100 mb-4">
                Get the latest business insights and market updates
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

export default BusinessPage;
