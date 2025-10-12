import React from "react";
import { Link } from "react-router-dom";
import { sportsData } from "../utils/sportsData";

const SportsPage = () => {
  // Generate more sports content for the dedicated page
  const extendedSportsData = [
    ...sportsData,
    {
      id: 101,
      title: "Olympic Games 2024: What to Expect",
      description:
        "A comprehensive guide to the upcoming Olympic Games, featuring new sports, venues, and athletes to watch.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      meta: "Olympics • 2 days ago",
      readTime: "8 min read",
      views: "45.2K",
      likes: "3.1K",
    },
    {
      id: 102,
      title: "The Rise of Women's Football",
      description:
        "Exploring the growing popularity and success of women's football leagues around the world.",
      image:
        "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400&h=300&fit=crop",
      meta: "Football • 1 week ago",
      readTime: "6 min read",
      views: "32.8K",
      likes: "2.7K",
    },
    {
      id: 103,
      title: "NBA Playoffs: Championship Predictions",
      description:
        "Expert analysis and predictions for the upcoming NBA playoffs season.",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
      meta: "Basketball • 3 days ago",
      readTime: "7 min read",
      views: "28.9K",
      likes: "2.3K",
    },
    {
      id: 104,
      title: "Tennis Grand Slams: Season Review",
      description:
        "A look back at the major tennis tournaments and the players who dominated the season.",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      meta: "Tennis • 5 days ago",
      readTime: "9 min read",
      views: "19.6K",
      likes: "1.8K",
    },
    {
      id: 105,
      title: "Formula 1: New Season, New Rules",
      description:
        "Understanding the latest changes in Formula 1 regulations and their impact on the sport.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      meta: "Formula 1 • 1 week ago",
      readTime: "5 min read",
      views: "25.4K",
      likes: "2.1K",
    },
    {
      id: 106,
      title: "Cricket World Cup: Team Analysis",
      description:
        "In-depth analysis of the top teams competing in the upcoming Cricket World Cup.",
      image:
        "https://images.unsplash.com/photo-1540747913346-19b32c3e4d5b?w=400&h=300&fit=crop",
      meta: "Cricket • 4 days ago",
      readTime: "10 min read",
      views: "38.7K",
      likes: "3.4K",
    },
  ];

  return (
    <div className="  bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="  mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Sports</h1>
            <p className="text-xl text-red-100 mb-6">
              Stay updated with the latest sports news, analysis, and insights
              from around the world
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-red-500 px-3 py-1 rounded-full">
                Football
              </span>
              <span className="bg-red-500 px-3 py-1 rounded-full">
                Basketball
              </span>
              <span className="bg-red-500 px-3 py-1 rounded-full">Tennis</span>
              <span className="bg-red-500 px-3 py-1 rounded-full">Cricket</span>
              <span className="bg-red-500 px-3 py-1 rounded-full">
                Formula 1
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
              Latest Sports News
            </h2>

            {/* Featured Article */}
            <div className="mb-8">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop"
                    alt="Olympic Games 2024"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>Olympics • 2 days ago</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    <Link
                      to="/main/sports/101"
                      className="hover:text-red-600 transition-colors"
                    >
                      Olympic Games 2024: What to Expect
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    A comprehensive guide to the upcoming Olympic Games,
                    featuring new sports, venues, and athletes to watch. Get
                    ready for the biggest sporting event of the year with our
                    detailed preview.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>8 min read</span>
                      <span>45.2K views</span>
                      <span>3.1K likes</span>
                    </div>
                    <Link
                      to="/main/sports/101"
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {extendedSportsData.slice(1, 7).map((article) => (
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
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Sports
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{article.meta}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-red-600 transition-colors">
                      <Link to={`/main/sports/${article.id}`}>
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
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Sports */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Popular Sports
              </h3>
              <div className="space-y-3">
                {[
                  "Football",
                  "Basketball",
                  "Tennis",
                  "Cricket",
                  "Formula 1",
                  "Golf",
                ].map((sport) => (
                  <Link
                    key={sport}
                    to={`/main/sports/${Math.floor(Math.random() * 100) + 1}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-700">{sport}</span>
                    <span className="text-red-500">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sports Calendar */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Upcoming Events
              </h3>
              <div className="space-y-3">
                {[
                  { event: "Olympic Games 2024", date: "July 26 - Aug 11" },
                  { event: "FIFA World Cup 2026", date: "June 11 - July 19" },
                  { event: "NBA Finals", date: "June 2024" },
                  { event: "Wimbledon", date: "July 1 - 14" },
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

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
              <p className="text-red-100 mb-4">
                Get the latest sports news delivered to your inbox
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded text-gray-800 placeholder-gray-500"
                />
                <button className="w-full bg-white text-red-600 px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
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

export default SportsPage;
