import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaGlobe,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const AuthorInfo = ({ author }) => {
  // Generate random author details
  const authorDetails = {
    name: author,
    avatar: `https://images.unsplash.com/photo-${Math.floor(
      Math.random() * 1000000
    )}?w=150&h=150&fit=crop&crop=face`,
    bio: "Passionate writer and technology enthusiast with years of experience in digital innovation and creative content creation. Always exploring the latest trends and sharing insights with our community.",
    email: `${author.toLowerCase().replace(" ", ".")}@example.com`,
    website: `https://${author.toLowerCase().replace(" ", "")}.com`,
    twitter: `@${author.toLowerCase().replace(" ", "")}`,
    linkedin: `linkedin.com/in/${author.toLowerCase().replace(" ", "-")}`,
    articles: Math.floor(Math.random() * 100) + 20,
    followers: Math.floor(Math.random() * 5000) + 500,
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        About the Author
      </h3>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Author Avatar */}
        <div className="flex-shrink-0">
          <img
            src={authorDetails.avatar}
            alt={authorDetails.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-orange-100"
          />
        </div>

        {/* Author Details */}
        <div className="flex-1">
          <h4 className="text-xl font-semibold text-gray-800 mb-3">
            {authorDetails.name}
          </h4>
          <p className="text-gray-600 leading-relaxed mb-4">
            {authorDetails.bio}
          </p>

          {/* Author Stats */}
          <div className="flex items-center gap-6 mb-4 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <FaUser className="text-orange-500" />
              {authorDetails.articles} articles
            </span>
            <span className="flex items-center gap-2">
              <FaTwitter className="text-sky-500" />
              {authorDetails.followers} followers
            </span>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${authorDetails.email}`}
              className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-orange-100 hover:text-orange-700 transition-colors"
            >
              <FaEnvelope className="text-sm" />
              <span className="text-sm">Email</span>
            </a>

            <a
              href={authorDetails.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-orange-100 hover:text-orange-700 transition-colors"
            >
              <FaGlobe className="text-sm" />
              <span className="text-sm">Website</span>
            </a>

            <a
              href={`https://twitter.com/${authorDetails.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-sky-500 text-white px-3 py-2 rounded-lg hover:bg-sky-600 transition-colors"
            >
              <FaTwitter className="text-sm" />
              <span className="text-sm">Twitter</span>
            </a>

            <a
              href={`https://${authorDetails.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-700 text-white px-3 py-2 rounded-lg hover:bg-blue-800 transition-colors"
            >
              <FaLinkedinIn className="text-sm" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
