import React from "react";

const QuickStats = () => {
  const stats = [
    { label: "Total Articles", value: "2.5K+", icon: "📰" },
    { label: "Active Readers", value: "45K+", icon: "👥" },
    { label: "Categories", value: "12+", icon: "🏷️" },
    { label: "Daily Views", value: "125K+", icon: "👁️" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Stats</h3>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-lg font-bold text-gray-800">{stat.value}</div>
            <div className="text-xs text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100 text-center">
        <p className="text-xs text-gray-500">
          Updated in real-time
        </p>
      </div>
    </div>
  );
};

export default QuickStats;
