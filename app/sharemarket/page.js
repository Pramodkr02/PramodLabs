"use client";

import Link from "next/link";

export default function ShareMarketPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-700 text-white py-16">
        <div className="mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Share Market</h1>
            <p className="text-xl text-yellow-100 mb-6">
              Stay updated with market trends, investment insights, and
              financial news
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Latest Market News
            </h2>
            <div className="text-center py-12">
              <p className="text-gray-600">Market content coming soon...</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Market Categories
              </h3>
              <div className="space-y-3">
                {["Stocks", "Crypto", "Forex", "Commodities", "Bonds"].map(
                  (category) => (
                    <Link
                      key={category}
                      href={`/main/sharemarket/${
                        Math.floor(Math.random() * 100) + 1
                      }`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-gray-700">{category}</span>
                      <span className="text-yellow-500">→</span>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
