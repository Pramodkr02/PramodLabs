import React from "react";
import { sportsData } from "../utils/dummyData";
import { ArticleCard } from "../utils/articleCard.jsx";
import Link from "next/link";

const Sports = () => {
  return (
    <section className="max-w-7xl mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-orange-500 m-0">SPORTS</h2>
        <Link
          href="/sports"
          className="text-orange-500 no-underline text-[14px] font-small flex items-center gap-1 hover:underline"
        >
          VIEW ALL <span className="text-gray-500">&gt;</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sportsData.map((article) => (
          <ArticleCard key={article.id} article={article} category="sports" />
        ))}
      </div>
    </section>
  );
};

export default Sports;
