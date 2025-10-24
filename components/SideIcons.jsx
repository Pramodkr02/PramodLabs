import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTumblr,
} from "react-icons/fa";
import { socialLinks } from "../utils/dummyData";

const SideIcons = () => {
  const getIcon = (iconName) => {
    const iconMap = {
      FaFacebookF: FaFacebookF,
      FaTwitter: FaTwitter,
      FaInstagram: FaInstagram,
      FaLinkedinIn: FaLinkedinIn,
      FaYoutube: FaYoutube,
      FaTumblr: FaTumblr,
    };
    return iconMap[iconName] || FaFacebookF;
  };

  const getColorClass = (color) => {
    const colorMap = {
      "blue-600": "text-blue-600 hover:text-blue-800",
      "sky-500": "text-sky-500 hover:text-sky-600",
      "pink-600": "text-pink-600 hover:text-pink-800",
      "blue-700": "text-blue-700 hover:text-blue-900",
      "red-600": "text-red-600 hover:text-red-800",
      "blue-800": "text-blue-800 hover:text-blue-900",
    };
    return colorMap[color] || "text-gray-600 hover:text-gray-800";
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h3>
      <div className="flex justify-center space-x-4">
        {socialLinks.slice(0, 4).map((social, index) => {
          const IconComponent = getIcon(social.icon);
          return (
            <a
              key={index}
              href={social.url}
              className={`${getColorClass(social.color)} transition-colors`}
              title={social.name}
            >
              <IconComponent size={24} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SideIcons;
