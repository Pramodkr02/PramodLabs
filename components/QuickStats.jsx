import React from "react";
import { quickStats } from "../utils/dummyData";

const QuickStats = () => {
  const getColorClass = (color) => {
    const colorMap = {
      orange: "text-orange-500",
      blue: "text-blue-500",
      green: "text-green-500",
      purple: "text-purple-500",
    };
    return colorMap[color] || "text-gray-500";
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Stats</h3>
      <div className="space-y-3">
        {quickStats.map((stat, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-600">{stat.label}</span>
            <span className={`font-semibold ${getColorClass(stat.color)}`}>
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickStats;
