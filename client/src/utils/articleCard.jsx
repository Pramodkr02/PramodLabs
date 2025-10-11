import React from "react";
import { Link } from "react-router-dom";

// Tech articles data - 6 articles for 2 rows of 3 cards each
export const techArticles = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
    category: "Concepts",
    title: "Take a look into the future of technology",
    description:
      "We're in the midst of a jobs crisis, and rapid advances in AI and other technologies may be one culprit. How can we get better at sharing the wealth...",
    date: "Jun 09, 2015",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop",
    category: "Phones",
    title: "Your phone can see in dark and measure heat",
    description:
      "Phone cameras have gotten extremely powerful. The one in your phone right now can capture your kid's quick moves at the soccer game, take day-spannin...",
    date: "Jun 03, 2015",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
    category: "FPS",
    title: "E3's cartoon violence is a step forward",
    description:
      "E3 is, and may always be, about fighting. Once the show wrapped up, critic Anita Sarkeesian determined that 76 percent of the games at press conferenc...",
    date: "May 30, 2015",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
    category: "AI",
    title: "Artificial Intelligence in modern healthcare",
    description:
      "AI is revolutionizing the healthcare industry with advanced diagnostics, personalized treatment plans, and improved patient outcomes...",
    date: "Jun 15, 2015",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop",
    category: "Gaming",
    title: "Virtual Reality gaming takes center stage",
    description:
      "VR technology is transforming the gaming experience, offering immersive worlds and interactive gameplay like never before...",
    date: "Jun 12, 2015",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
    category: "Robotics",
    title: "Robots are becoming more human-like",
    description:
      "Advancements in robotics are creating machines that can understand emotions, learn from interactions, and assist in daily tasks...",
    date: "Jun 08, 2015",
  },
];

// Reusable ArticleCard component with Tailwind CSS
export const ArticleCard = ({ article }) => {
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
          to={`/main/tech/${article.id}`}
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
