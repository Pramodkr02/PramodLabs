"use client";

import React from "react";
import Link from "next/link";
import { FaRegClock, FaEye, FaHeart, FaArrowLeft } from "react-icons/fa";
import { yearPopularData } from "../../utils/dummyData";

export default function PopularPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors"
            >
              <FaArrowLeft />
              <span>Back to Home</span>
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-800">
            Year Popular Articles
          </h1>
          <p className="text-gray-600 mt-2">
            Discover the most popular articles from this year
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {yearPopularData.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium mb-2">
                    {article.category}
                  </span>
                  <h3 className="text-white text-lg font-semibold leading-tight">
                    {article.title}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
                  {article.description}
                </p>
                <Link
                  href={`/main/year-popular/${article.id}`}
                  className="text-orange-500 text-xs font-medium hover:underline mb-3 inline-block"
                >
                  Read More
                </Link>
                <div className="flex items-center justify-between text-gray-500 text-xs">
                  <div className="flex items-center gap-2">
                    <FaRegClock />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <FaEye />
                      {article.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaHeart />
                      {article.likes}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
}
