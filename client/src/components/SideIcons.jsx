import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaBehance,
  FaRss,
  FaAngleRight,
} from "react-icons/fa";
import CircleIcon from "../utils/icon";

const rows = [
  {
    id: "twitter",
    label: "Followers",
    count: 228,
    color: "text-sky-500",
    buttonClasses: "bg-sky-500 hover:bg-sky-600 text-white",
    icon: <FaTwitter />,
  },
  {
    id: "facebook",
    label: "Likes",
    count: 216,
    color: "text-blue-600",
    buttonClasses: "bg-blue-600 hover:bg-blue-700 text-white",
    icon: <FaFacebookF />,
  },
  {
    id: "pinterest",
    label: "Followers",
    count: 34,
    color: "text-red-600",
    buttonClasses: "bg-red-600 hover:bg-red-700 text-white",
    icon: <FaPinterestP />,
  },
  {
    id: "linkedin",
    label: "Connections",
    count: 46,
    color: "text-sky-700",
    buttonClasses: "bg-sky-700 hover:bg-sky-800 text-white",
    icon: <FaLinkedinIn />,
  },
  {
    id: "behance",
    label: "Followers",
    count: 8,
    color: "text-blue-500",
    buttonClasses: "bg-blue-500 hover:bg-blue-600 text-white",
    icon: <FaBehance />,
  },
  {
    id: "rss",
    label: "Readers",
    count: 88,
    color: "text-orange-600",
    buttonClasses: "bg-orange-600 hover:bg-orange-700 text-white",
    icon: <FaRss />,
  },
];

const SideIcons = () => {
  return (
    <aside className="w-full rounded bg-white shadow-sm">
      <div className="bg-gray-50 px-6 py-4 text-[18px] font-semibold text-orange-500">
        100+ Social Counters
      </div>
      <ul>
        {rows.map((r) => (
          <li
            key={r.id}
            className="group flex items-center justify-between border-b border-gray-100 px-5 py-3 transition-colors hover:bg-gray-50 hover:border-gray-300 last:border-0"
          >
            <div className="flex items-center gap-4">
              <CircleIcon className={`${r.color}`}>{r.icon}</CircleIcon>
              <div className="text-[15px] text-gray-800">
                <span className="mr-2 font-semibold">{r.count}</span>
                <span className="text-gray-500">{r.label}</span>
              </div>
            </div>
            <Link
              to={`/${r.id}`}
              className={`relative inline-flex items-center rounded px-3 py-1 pr-5 text-[12px] font-semibold ${r.buttonClasses}`}
            >
              <span className="whitespace-nowrap">
                {r.id === "facebook"
                  ? "Like"
                  : r.id === "linkedin"
                  ? "Connect"
                  : r.id === "rss"
                  ? "Subscribe"
                  : "Follow"}
              </span>
              <FaAngleRight
                size={10}
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 translate-x-1 opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideIcons;
