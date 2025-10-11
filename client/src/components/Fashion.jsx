import React from "react";
import { Link } from "react-router-dom";
import { fashionData } from "../utils/fashionData";

const Fashion = () => {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Fashion</h2>
        <Link 
          to="/fashion" 
          className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
        >
          View All →
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fashionData.map((article) => (
          <article key={article.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  Fashion
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{article.meta}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                <Link to={`/main/fashion/${article.id}`}>
                  {article.title}
                </Link>
              </h3>
              
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {article.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{article.readTime}</span>
                <div className="flex items-center space-x-3">
                  <span>{article.views} views</span>
                  <span>{article.likes} likes</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Fashion;
