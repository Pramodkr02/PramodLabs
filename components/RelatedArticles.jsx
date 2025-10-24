import React from "react";
import Link from "next/link";
import {
  techArticles,
  sportsData,
  fashionData,
  businessData,
  educationData,
  sharemarketData,
} from "../utils/dummyData";

const RelatedArticles = ({ currentType, currentId }) => {
  const getRelatedData = (type) => {
    const dataMap = {
      tech: techArticles,
      sports: sportsData,
      fashion: fashionData,
      business: businessData,
      education: educationData,
      sharemarket: sharemarketData,
    };
    return dataMap[type] || techArticles;
  };

  const relatedArticles = getRelatedData(currentType)
    .filter((article) => article.id !== currentId)
    .slice(0, 3);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Related Articles</h3>
      <div className="space-y-4">
        {relatedArticles.map((article) => (
          <div key={article.id} className="flex gap-4">
            <img
              src={article.image}
              alt={article.title}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <Link
                href={`/main/${currentType}/${article.id}`}
                className="text-gray-800 hover:text-orange-600 transition-colors"
              >
                <h4 className="font-semibold text-sm mb-1">{article.title}</h4>
              </Link>
              <p className="text-gray-600 text-xs mb-1">
                {article.description}
              </p>
              <span className="text-gray-500 text-xs">{article.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
