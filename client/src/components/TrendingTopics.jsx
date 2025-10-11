import React from "react";
import { Link } from "react-router-dom";

const TrendingTopics = () => {
  const trendingTopics = [
    { id: 1, title: "AI Revolution", count: "2.5K", category: "tech" },
    { id: 2, title: "Climate Change", count: "1.8K", category: "environment" },
    { id: 3, title: "Space Exploration", count: "3.2K", category: "science" },
    { id: 4, title: "Digital Health", count: "1.5K", category: "health" },
    { id: 5, title: "Renewable Energy", count: "2.1K", category: "energy" },
    { id: 6, title: "Cybersecurity", count: "2.8K", category: "tech" },
    { id: 7, title: "Mental Health", count: "1.9K", category: "health" },
    { id: 8, title: "Blockchain", count: "2.3K", category: "tech" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Trending Topics</h3>
      <div className="space-y-3">
        {trendingTopics.map((topic, index) => (
          <div key={topic.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-500 w-6">{index + 1}</span>
              <Link 
                to={`/main/${topic.category}/${topic.id}`}
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors line-clamp-1"
              >
                {topic.title}
              </Link>
            </div>
            <span className="text-xs text-gray-500">{topic.count}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <Link 
          to="/trending" 
          className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          View All Trending →
        </Link>
      </div>
    </div>
  );
};

export default TrendingTopics;
