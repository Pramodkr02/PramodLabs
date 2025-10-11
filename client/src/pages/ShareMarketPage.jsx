import React from "react";
import { Link } from "react-router-dom";
import { sharemarketData } from "../utils/sharemarketData";

const ShareMarketPage = () => {
  // Generate more sharemarket content for the dedicated page
  const extendedShareMarketData = [
    ...sharemarketData,
    {
      id: 501,
      title: "Stock Market Analysis: Q1 2024 Outlook",
      description:
        "Comprehensive analysis of market trends, sector performance, and investment opportunities for the first quarter.",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
      meta: "Market Analysis • 2 days ago",
      readTime: "12 min read",
      views: "62.4K",
      likes: "5.1K",
    },
    {
      id: 502,
      title: "Cryptocurrency Market Trends",
      description:
        "Latest developments in the crypto space and their impact on traditional financial markets.",
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=300&fit=crop",
      meta: "Cryptocurrency • 1 day ago",
      readTime: "9 min read",
      views: "48.7K",
      likes: "3.9K",
    },
    {
      id: 503,
      title: "IPO Watch: Upcoming Public Offerings",
      description:
        "Analysis of companies planning to go public and what investors should know before investing.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      meta: "IPOs • 4 days ago",
      readTime: "8 min read",
      views: "41.3K",
      likes: "3.4K",
    },
    {
      id: 504,
      title: "Dividend Investing Strategies",
      description:
        "How to build a portfolio focused on dividend-paying stocks for consistent income generation.",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
      meta: "Dividends • 1 week ago",
      readTime: "10 min read",
      views: "39.8K",
      likes: "3.2K",
    },
    {
      id: 505,
      title: "Market Volatility: Risk Management",
      description:
        "Strategies for managing portfolio risk during periods of high market volatility.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      meta: "Risk Management • 3 days ago",
      readTime: "7 min read",
      views: "35.6K",
      likes: "2.8K",
    },
    {
      id: 506,
      title: "Sector Rotation: Market Timing",
      description:
        "Understanding sector rotation strategies and how to capitalize on changing market leadership.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      meta: "Sector Analysis • 5 days ago",
      readTime: "11 min read",
      views: "44.2K",
      likes: "3.6K",
    },
  ];

  return (
    <div className="  bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-16">
        <div className="  mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Share Market</h1>
            <p className="text-xl text-yellow-100 mb-6">
              Stay informed with the latest market insights, analysis, and
              investment strategies
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-yellow-400 px-3 py-1 rounded-full text-gray-800">
                Stocks
              </span>
              <span className="bg-yellow-400 px-3 py-1 rounded-full text-gray-800">
                Crypto
              </span>
              <span className="bg-yellow-400 px-3 py-1 rounded-full text-gray-800">
                Analysis
              </span>
              <span className="bg-yellow-400 px-3 py-1 rounded-full text-gray-800">
                Trading
              </span>
              <span className="bg-yellow-400 px-3 py-1 rounded-full text-gray-800">
                Investment
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className=" mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Articles */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Latest Market News
            </h2>

            {/* Featured Article */}
            <div className="mb-8">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop"
                    alt="Stock Market Analysis: Q1 2024 Outlook"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>Market Analysis • 2 days ago</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    <Link
                      to="/main/sharemarket/501"
                      className="hover:text-yellow-600 transition-colors"
                    >
                      Stock Market Analysis: Q1 2024 Outlook
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Comprehensive analysis of market trends, sector performance,
                    and investment opportunities for the first quarter. Get
                    expert insights to make informed investment decisions in
                    2024.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>12 min read</span>
                      <span>62.4K views</span>
                      <span>5.1K likes</span>
                    </div>
                    <Link
                      to="/main/sharemarket/501"
                      className="bg-yellow-500 text-gray-800 px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {extendedShareMarketData.slice(1, 7).map((article) => (
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
                      <span className="bg-yellow-500 text-gray-800 text-xs px-2 py-1 rounded-full font-medium">
                        Share Market
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{article.meta}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-yellow-600 transition-colors">
                      <Link to={`/main/sharemarket/${article.id}`}>
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
              <button className="bg-yellow-500 text-gray-800 px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-medium">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Market Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Market Categories
              </h3>
              <div className="space-y-3">
                {[
                  "Stocks",
                  "Cryptocurrency",
                  "Bonds",
                  "Commodities",
                  "Forex",
                  "ETFs",
                ].map((category) => (
                  <Link
                    key={category}
                    to={`/main/sharemarket/${
                      Math.floor(Math.random() * 500) + 1
                    }`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-700">{category}</span>
                    <span className="text-yellow-500">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Market Indices */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Market Indices
              </h3>
              <div className="space-y-3">
                {[
                  { index: "S&P 500", value: "4,783.35", change: "+1.2%" },
                  { index: "NASDAQ", value: "15,003.22", change: "+0.8%" },
                  { index: "DOW", value: "37,466.11", change: "-0.3%" },
                  { index: "FTSE 100", value: "7,689.23", change: "+0.9%" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-b-0"
                  >
                    <div>
                      <div className="font-medium text-gray-800">
                        {item.index}
                      </div>
                      <div className="text-sm text-gray-500">{item.value}</div>
                    </div>
                    <div
                      className={`font-medium ${
                        item.change.startsWith("+")
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
            <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
              <p className="text-yellow-100 mb-4">
                Get the latest market insights and investment tips
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded text-gray-800 placeholder-gray-500"
                />
                <button className="w-full bg-white text-yellow-600 px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
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

export default ShareMarketPage;
