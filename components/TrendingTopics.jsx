import React from "react";
import Link from "next/link";
import { trendingTopics } from "../utils/dummyData";

const TrendingTopics = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Trending Topics</h3>
      <div className="space-y-2">
        {trendingTopics.map((topic, index) => (
          <Link
            key={index}
            href={`/search?q=${encodeURIComponent(topic.title)}`}
            className="block p-2 rounded hover:bg-gray-50 transition-colors"
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-700 hover:text-orange-600">
                {topic.title}
              </span>
              <span className="text-xs text-gray-500">{topic.views}</span>
            </div>
            <span className="text-xs text-orange-500">{topic.category}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
