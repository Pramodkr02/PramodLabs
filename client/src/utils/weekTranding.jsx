import React from "react";
import { Link } from "react-router-dom";
import { FaRegClock, FaChevronRight } from "react-icons/fa";

const DEFAULT_ITEMS = [
  "Custom Title Styles, Subtitle, Long Post Pagination, and More",
  "Affiliate Marketers - Best Layout for Make Money Online Websites",
  "Adapted The New York Times - Best Online Magazine of World",
  "Earned $9,000,000 per Year with a Magazine Website",
  "Elegant Pack - Best Layout for Fashion and Entertainment Websites",
];

const WeekTranding = ({ items = DEFAULT_ITEMS }) => {
  return (
    <aside className="w-full max-w-sm rounded bg-white shadow-sm">
      {/* header */}
      <div className="flex items-center gap-2 border-b bg-gray-50 px-4 py-3 text-sm font-semibold tracking-wide text-gray-800">
        <FaRegClock className="text-gray-500" />
        <span className="uppercase">Week Trending</span>
      </div>

      {/* list */}
      <ul>
        {items.map((text, idx) => (
          <li
            key={idx}
            className="group flex items-start justify-between gap-3 border-b border-gray-100 px-4 py-4 last:border-0"
          >
            <Link
              to="#"
              className="text-[15px] leading-6 text-gray-800 hover:text-orange-600"
            >
              {text}
            </Link>
            <span className="mt-1 inline-flex h-6 w-6 items-center justify-center text-orange-600 transition-transform group-hover:translate-x-1">
              <FaChevronRight />
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default WeekTranding;
