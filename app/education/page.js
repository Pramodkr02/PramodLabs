"use client";

import Link from "next/link";

export default function EducationPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-16">
        <div className="mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Education</h1>
            <p className="text-xl text-indigo-100 mb-6">
              Explore educational content, learning resources, and academic
              insights
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Latest Education News
            </h2>
            <div className="text-center py-12">
              <p className="text-gray-600">Education content coming soon...</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Education Categories
              </h3>
              <div className="space-y-3">
                {["Learning", "Research", "Technology", "Career", "Skills"].map(
                  (category) => (
                    <Link
                      key={category}
                      href={`/main/education/${
                        Math.floor(Math.random() * 100) + 1
                      }`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-gray-700">{category}</span>
                      <span className="text-indigo-500">→</span>
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
