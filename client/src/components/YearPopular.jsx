import React from "react";
import { yearPopularData } from "../utils/yearPopularData";
import { Link } from "react-router-dom";
import { FaRegClock, FaEye, FaHeart } from "react-icons/fa";

const YearPopular = () => {
  return (
    <section className="max-w-7xl mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-orange-500 m-0">Year Popular</h2>
        <Link
          to="/popular"
          className="text-orange-500 no-underline text-[14px] font-small flex items-center gap-1 hover:underline"
        >
          VIEW ALL <span className="text-gray-500">&gt;</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {yearPopularData.slice(0, 6).map((article) => (
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
                to={`/main/year-popular/${article.id}`}
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
    </section>
  );
};

export default YearPopular;
