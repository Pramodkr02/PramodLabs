import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";

const BreadcrumbNav = ({ type, content }) => {
  const getTypeLabel = (type) => {
    switch (type) {
      case "tech":
        return "Technology";
      case "slider":
        return "Featured";
      case "year-popular":
        return "Year Popular";
      default:
        return "Article";
    }
  };

  const getTypePath = (type) => {
    switch (type) {
      case "tech":
        return "/tech";
      case "slider":
        return "/featured";
      case "year-popular":
        return "/popular";
      default:
        return "/";
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link
            to="/"
            className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors"
          >
            <FaHome className="text-sm" />
            <span>Home</span>
          </Link>

          <FaChevronRight className="text-gray-400" />

          <Link
            to={getTypePath(type)}
            className="text-gray-600 hover:text-orange-500 transition-colors"
          >
            {getTypeLabel(type)}
          </Link>

          <FaChevronRight className="text-gray-400" />

          <span className="text-gray-800 font-medium truncate max-w-xs">
            {content?.title || "Article"}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default BreadcrumbNav;
