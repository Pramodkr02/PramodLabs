import React from "react";
import { Link } from "react-router-dom";
import { FaRegClock, FaEye } from "react-icons/fa";

const RelatedArticles = ({ currentType, currentId }) => {
  // Generate related articles based on current type
  const generateRelatedArticles = () => {
    const allArticles = [
      {
        id: 101,
        type: "tech",
        image:
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
        category: "AI & Machine Learning",
        title: "The Future of Artificial Intelligence in 2024",
        excerpt:
          "Discover the latest breakthroughs and trends shaping the AI landscape this year.",
        date: "2 days ago",
        readTime: "5 min read",
        views: "2.3k",
      },
      {
        id: 102,
        type: "tech",
        image:
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop",
        category: "Mobile Technology",
        title: "5G Networks: Revolutionizing Mobile Connectivity",
        excerpt:
          "How 5G technology is transforming the way we connect and communicate.",
        date: "3 days ago",
        readTime: "4 min read",
        views: "1.8k",
      },
      {
        id: 103,
        type: "slider",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=250&fit=crop",
        category: "Lifestyle",
        title: "Digital Wellness: Balancing Tech and Life",
        excerpt:
          "Tips and strategies for maintaining a healthy relationship with technology.",
        date: "1 week ago",
        readTime: "6 min read",
        views: "3.1k",
      },
      {
        id: 104,
        type: "year-popular",
        image:
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
        category: "Gaming",
        title: "Virtual Reality Gaming: The Next Frontier",
        excerpt:
          "Exploring the immersive world of VR gaming and its potential impact.",
        date: "2 weeks ago",
        readTime: "7 min read",
        views: "4.2k",
      },
    ];

    // Filter out current article and get articles of similar type
    return allArticles
      .filter((article) => article.id !== currentId)
      .slice(0, 4);
  };

  const relatedArticles = generateRelatedArticles();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Related Articles
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {relatedArticles.map((article) => (
          <article key={article.id} className="group">
            <Link to={`/main/${article.type}/${article.id}`} className="block">
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {article.readTime}
                </div>
              </div>

              {/* Article Content */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors leading-tight">
                  {article.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Article Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <FaRegClock className="text-xs" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaEye className="text-xs" />
                      {article.views}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-orange-100 hover:text-orange-700 transition-colors font-semibold"
        >
          View All Articles
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default RelatedArticles;
