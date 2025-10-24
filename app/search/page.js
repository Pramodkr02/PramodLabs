"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FaSearch, FaClock, FaEye, FaHeart, FaShare } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Dummy search results data
  const allArticles = [
    {
      id: 1,
      title: "AI Revolution: How Machine Learning is Transforming Industries",
      description:
        "Explore the latest developments in artificial intelligence and machine learning that are reshaping various industries worldwide.",
      category: "Tech",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      author: "Tech Team",
      date: "2 hours ago",
      readTime: "8 min read",
      views: "12.5K",
      likes: "892",
      tags: ["AI", "Machine Learning", "Technology"],
    },
    {
      id: 2,
      title: "Olympic Games 2024: Latest Results and Medal Standings",
      description:
        "Get the most recent updates from the Olympic Games including medal standings, record-breaking performances, and athlete highlights.",
      category: "Sports",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      author: "Sports Team",
      date: "4 hours ago",
      readTime: "6 min read",
      views: "8.7K",
      likes: "1.2K",
      tags: ["Olympics", "Sports", "Athletics"],
    },
    {
      id: 3,
      title: "Stock Market Analysis: Tech Stocks Show Strong Performance",
      description:
        "Comprehensive analysis of the current stock market trends with focus on technology sector performance and investment opportunities.",
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
      author: "Business Team",
      date: "6 hours ago",
      readTime: "7 min read",
      views: "15.3K",
      likes: "1.8K",
      tags: ["Stock Market", "Investment", "Finance"],
    },
    {
      id: 4,
      title: "Spring 2024 Fashion Trends: What's Hot This Season",
      description:
        "Discover the latest fashion trends for spring 2024 including color palettes, sustainable fashion, and must-have accessories.",
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      author: "Fashion Team",
      date: "1 day ago",
      readTime: "5 min read",
      views: "9.2K",
      likes: "756",
      tags: ["Fashion", "Trends", "Spring"],
    },
    {
      id: 5,
      title: "New Online Learning Platform Launches with Free Courses",
      description:
        "Revolutionary online learning platform offers free courses in technology, business, and creative fields with industry experts.",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      author: "Education Team",
      date: "2 days ago",
      readTime: "4 min read",
      views: "6.8K",
      likes: "543",
      tags: ["Education", "Online Learning", "Courses"],
    },
  ];

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      // Simulate search delay
      setTimeout(() => {
        const results = allArticles.filter(
          (article) =>
            article.title.toLowerCase().includes(query.toLowerCase()) ||
            article.description.toLowerCase().includes(query.toLowerCase()) ||
            article.category.toLowerCase().includes(query.toLowerCase()) ||
            article.tags.some((tag) =>
              tag.toLowerCase().includes(query.toLowerCase())
            )
        );
        setSearchResults(results);
        setIsLoading(false);
      }, 500);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  const getCategoryColor = (category) => {
    const colors = {
      Tech: "bg-blue-100 text-blue-800",
      Sports: "bg-red-100 text-red-800",
      Business: "bg-green-100 text-green-800",
      Fashion: "bg-pink-100 text-pink-800",
      Education: "bg-purple-100 text-purple-800",
      ShareMarket: "bg-yellow-100 text-yellow-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-orange-200 hover:text-white transition-colors duration-200"
              >
                <IoIosArrowBack className="text-2xl" />
              </Link>
              <div>
                <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
                  <FaSearch className="text-5xl" />
                  Search Results
                </h1>
                <p className="text-orange-100 text-lg">
                  {query
                    ? `Results for "${query}"`
                    : "Search for articles, topics, and more"}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                {searchResults.length} Results
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
            <p className="mt-4 text-gray-600">Searching...</p>
          </div>
        ) : query ? (
          <>
            {searchResults.length > 0 ? (
              <div className="space-y-6">
                {searchResults.map((article) => (
                  <Link
                    key={article.id}
                    href={`/main/${article.category.toLowerCase()}/${
                      article.id
                    }`}
                    className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-start space-x-6">
                        {/* Article Image */}
                        <div className="flex-shrink-0">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-32 h-24 rounded-lg object-cover"
                          />
                        </div>

                        {/* Article Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <span
                                className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                                  article.category
                                )}`}
                              >
                                {article.category}
                              </span>
                              <span className="text-sm text-gray-500">
                                {article.date}
                              </span>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <FaEye />
                                {article.views}
                              </span>
                              <span className="flex items-center gap-1">
                                <FaHeart />
                                {article.likes}
                              </span>
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-orange-600 transition-colors">
                            {article.title}
                          </h3>

                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {article.description}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>by {article.author}</span>
                              <span className="flex items-center gap-1">
                                <FaClock />
                                {article.readTime}
                              </span>
                            </div>

                            <div className="flex items-center space-x-2">
                              {article.tags.slice(0, 3).map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FaSearch className="text-6xl text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                  No results found
                </h3>
                <p className="text-gray-500 mb-6">
                  We couldn't find any articles matching "{query}". Try
                  different keywords.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Suggestions:</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      "AI Technology",
                      "Sports News",
                      "Business Updates",
                      "Fashion Trends",
                    ].map((term) => (
                      <Link
                        key={term}
                        href={`/search?q=${encodeURIComponent(term)}`}
                        className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm hover:bg-orange-200 transition-colors"
                      >
                        {term}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <FaSearch className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">
              Start your search
            </h3>
            <p className="text-gray-500 mb-6">
              Enter keywords to find articles, topics, and more.
            </p>
            <Link
              href="/"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
            >
              Go Back Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
