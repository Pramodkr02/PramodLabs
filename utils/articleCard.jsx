import React from "react";
import Link from "next/link";

// Reusable ArticleCard component with Tailwind CSS
export const ArticleCard = ({ article, category = "tech" }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl max-w-sm">
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
          href={`/main/${category}/${article.id}`}
          className="text-orange-500 text-xs font-medium hover:underline mb-3 inline-block"
        >
          Read More
        </Link>
        <div className="flex items-center gap-2 text-gray-500 text-xs">
          <span>🕐</span>
          <span>{article.date}</span>
        </div>
      </div>
    </div>
  );
};
