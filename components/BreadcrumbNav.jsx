import React from "react";
import Link from "next/link";

const BreadcrumbNav = ({ type, content }) => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-orange-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href={`/${type}`}
            className="hover:text-orange-600 transition-colors capitalize"
          >
            {type}
          </Link>
          <span>/</span>
          <span className="text-gray-800 font-medium truncate max-w-xs">
            {content?.title}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default BreadcrumbNav;
