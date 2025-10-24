import React from "react";
import Link from "next/link";
import { weekTrending } from "../utils/dummyData";

const WeekTranding = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Week Trending</h3>
      <div className="space-y-3">
        {weekTrending.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <Link
              href={`/search?q=${encodeURIComponent(item.title)}`}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              {item.title}
            </Link>
            <span className="text-sm text-gray-500">{item.views}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekTranding;
