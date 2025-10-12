import React from "react";
import { Link } from "react-router-dom";
import { fashionData } from "../utils/fashionData";

const FashionPage = () => {
  // Generate more fashion content for the dedicated page
  const extendedFashionData = [
    ...fashionData,
    {
      id: 201,
      title: "Paris Fashion Week 2024: Highlights",
      description:
        "The most stunning looks and trends from the prestigious Paris Fashion Week runway shows.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      meta: "Fashion Week • 1 day ago",
      readTime: "7 min read",
      views: "52.1K",
      likes: "4.2K",
    },
    {
      id: 202,
      title: "Sustainable Fashion: Eco-Friendly Trends",
      description:
        "Discover how the fashion industry is embracing sustainability and eco-friendly practices.",
      image:
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=300&fit=crop",
      meta: "Sustainability • 3 days ago",
      readTime: "8 min read",
      views: "38.9K",
      likes: "3.1K",
    },
    {
      id: 203,
      title: "Street Style: Urban Fashion Trends",
      description:
        "Exploring the latest street style trends that are dominating fashion capitals around the world.",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f6b1?w=400&h=300&fit=crop",
      meta: "Street Style • 5 days ago",
      readTime: "6 min read",
      views: "29.7K",
      likes: "2.4K",
    },
    {
      id: 204,
      title: "Luxury Brands: What's New in 2024",
      description:
        "A look at the latest collections and innovations from top luxury fashion houses.",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop",
      meta: "Luxury • 1 week ago",
      readTime: "9 min read",
      views: "42.3K",
      likes: "3.8K",
    },
    {
      id: 205,
      title: "Accessories: Statement Pieces for 2024",
      description:
        "Must-have accessories and statement pieces that will elevate your style this year.",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=300&fit=crop",
      meta: "Accessories • 4 days ago",
      readTime: "5 min read",
      views: "25.6K",
      likes: "2.1K",
    },
    {
      id: 206,
      title: "Fashion Photography: Behind the Scenes",
      description:
        "An insider's look at fashion photography and what goes into creating iconic fashion images.",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      meta: "Photography • 6 days ago",
      readTime: "7 min read",
      views: "31.2K",
      likes: "2.7K",
    },
  ];

  return (
    <div className="  bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16">
        <div className="  mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Fashion</h1>
            <p className="text-xl text-pink-100 mb-6">
              Discover the latest trends, styles, and insights from the world of
              fashion
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-pink-400 px-3 py-1 rounded-full">Trends</span>
              <span className="bg-pink-400 px-3 py-1 rounded-full">Style</span>
              <span className="bg-pink-400 px-3 py-1 rounded-full">Beauty</span>
              <span className="bg-pink-400 px-3 py-1 rounded-full">Luxury</span>
              <span className="bg-pink-400 px-3 py-1 rounded-full">
                Street Style
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className=" mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Articles */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Latest Fashion News
            </h2>

            {/* Featured Article */}
            <div className="mb-8">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop"
                    alt="Paris Fashion Week 2024"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>Fashion Week • 1 day ago</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    <Link
                      to="/main/fashion/201"
                      className="hover:text-pink-500 transition-colors"
                    >
                      Paris Fashion Week 2024: Highlights
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    The most stunning looks and trends from the prestigious
                    Paris Fashion Week runway shows. From haute couture to
                    ready-to-wear, discover what's shaping the future of
                    fashion.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>7 min read</span>
                      <span>52.1K views</span>
                      <span>4.2K likes</span>
                    </div>
                    <Link
                      to="/main/fashion/201"
                      className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {extendedFashionData.slice(1, 7).map((article) => (
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
                      <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Fashion
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{article.meta}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-pink-500 transition-colors">
                      <Link to={`/main/fashion/${article.id}`}>
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
              <button className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition-colors font-medium">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Fashion Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Fashion Categories
              </h3>
              <div className="space-y-3">
                {[
                  "Women's Fashion",
                  "Men's Fashion",
                  "Street Style",
                  "Luxury",
                  "Sustainable",
                  "Accessories",
                ].map((category) => (
                  <Link
                    key={category}
                    to={`/main/fashion/${Math.floor(Math.random() * 200) + 1}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-700">{category}</span>
                    <span className="text-pink-500">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Fashion Events */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Upcoming Events
              </h3>
              <div className="space-y-3">
                {[
                  { event: "Milan Fashion Week", date: "February 20-26" },
                  { event: "New York Fashion Week", date: "February 9-14" },
                  { event: "London Fashion Week", date: "February 16-20" },
                  { event: "Met Gala", date: "May 6" },
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
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Stay Stylish</h3>
              <p className="text-pink-100 mb-4">
                Get the latest fashion trends and style tips
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded text-gray-800 placeholder-gray-500"
                />
                <button className="w-full bg-white text-pink-500 px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
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

export default FashionPage;
