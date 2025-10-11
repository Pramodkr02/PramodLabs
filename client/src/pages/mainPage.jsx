import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  FaRegClock,
  FaUser,
  FaComments,
  FaShare,
  FaHeart,
  FaBookmark,
  FaArrowLeft,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";
import { techArticles } from "../utils/articleCard";
import { sliderData } from "../utils/sliderData";
import { yearPopularData } from "../utils/yearPopularData";
import { sportsData } from "../utils/sportsData";
import { fashionData } from "../utils/fashionData";
import { businessData } from "../utils/businessData";
import { educationData } from "../utils/educationData";
import { sharemarketData } from "../utils/sharemarketData";
import RelatedArticles from "../components/RelatedArticles";
import AuthorInfo from "../components/AuthorInfo";
import CommentSection from "../components/CommentSection";
import BreadcrumbNav from "../components/BreadcrumbNav";

const MainPage = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setLoading(true);

    // Find content based on type and id
    let foundContent = null;

    switch (type) {
      case "tech":
        foundContent = techArticles.find(
          (article) => article.id === parseInt(id)
        );
        break;
      case "slider":
        foundContent = sliderData.find((slide) => slide.id === parseInt(id));
        break;
      case "year-popular":
        foundContent = yearPopularData.find((item) => item.id === parseInt(id));
        break;
      case "sports":
        foundContent = sportsData.find((item) => item.id === parseInt(id));
        break;
      case "fashion":
        foundContent = fashionData.find((item) => item.id === parseInt(id));
        break;
      case "business":
        foundContent = businessData.find((item) => item.id === parseInt(id));
        break;
      case "education":
        foundContent = educationData.find((item) => item.id === parseInt(id));
        break;
      case "sharemarket":
        foundContent = sharemarketData.find((item) => item.id === parseInt(id));
        break;
      default:
        foundContent = null;
    }

    if (foundContent) {
      // Enhance content with additional details
      const enhancedContent = {
        ...foundContent,
        fullContent: generateFullContent(foundContent),
        tags: generateTags(foundContent),
        readTime: calculateReadTime(foundContent),
        views: Math.floor(Math.random() * 10000) + 1000,
        likes: Math.floor(Math.random() * 500) + 50,
        shares: Math.floor(Math.random() * 200) + 20,
      };
      setContent(enhancedContent);
    }

    setLoading(false);
  }, [type, id]);

  const generateFullContent = () => {
    const loremParagraphs = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    ];

    return loremParagraphs.slice(0, Math.floor(Math.random() * 3) + 3);
  };

  const generateTags = () => {
    const allTags = [
      "Technology",
      "Innovation",
      "Design",
      "Development",
      "AI",
      "Future",
      "Trends",
      "Digital",
      "Creative",
      "Modern",
    ];
    return allTags.slice(0, Math.floor(Math.random() * 4) + 2);
  };

  const calculateReadTime = (item) => {
    const words = (item.description || "").split(" ").length;
    return Math.ceil(words / 200) + 2; // 200 words per minute + 2 minutes for images
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Content Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The requested content could not be found.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="  bg-gray-50">
      {/* Header Navigation */}
      <BreadcrumbNav type={type} content={content} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Article Header */}
            <article className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              {/* Hero Image */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {content.category || "Featured"}
                    </span>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                      {content.readTime} min read
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    {content.title}
                  </h1>
                  <div className="flex items-center gap-6 text-white/90 text-sm">
                    <div className="flex items-center gap-2">
                      <FaUser className="text-orange-400" />
                      <span>{content.meta?.author || "Anonymous Author"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRegClock className="text-orange-400" />
                      <span>{content.meta?.date || content.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaComments className="text-orange-400" />
                      <span>{content.meta?.comments || 0} comments</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8">
                {/* Stats Bar */}
                <div className="flex items-center justify-between py-4 border-b border-gray-200 mb-6">
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                      <FaHeart className="text-red-500" />
                      {content.likes} likes
                    </span>
                    <span className="flex items-center gap-2">
                      <FaShare className="text-blue-500" />
                      {content.shares} shares
                    </span>
                    <span className="flex items-center gap-2">
                      <FaBookmark className="text-green-500" />
                      {content.views} views
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                      <FaHeart />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                      <FaBookmark />
                    </button>
                  </div>
                </div>

                {/* Article Text */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {content.description}
                  </p>

                  {content.fullContent?.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-700 leading-relaxed mb-6"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {content.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-orange-100 hover:text-orange-700 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Share */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Share this article
                  </h3>
                  <div className="flex gap-3">
                    <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
                      <FaFacebookF />
                    </button>
                    <button className="bg-sky-500 text-white p-3 rounded-lg hover:bg-sky-600 transition-colors">
                      <FaTwitter />
                    </button>
                    <button className="bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition-colors">
                      <FaLinkedinIn />
                    </button>
                    <button className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors">
                      <FaPinterestP />
                    </button>
                    <button className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors">
                      <FaWhatsapp />
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Author Information */}
            <AuthorInfo author={content.meta?.author || "Anonymous Author"} />

            {/* Comments Section */}
            <CommentSection articleId={content.id} />

            {/* Related Articles */}
            <RelatedArticles currentType={type} currentId={content.id} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Back to Home Button */}
            <div className="border-gray-200 shadow-sm rounded p-6 bg-white">
              <button
                onClick={() => navigate("/")}
                className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-3 rounded hover:bg-orange-600 transition-colors font-semibold"
              >
                <FaArrowLeft />
                Back to Home
              </button>
            </div>

            {/* Quick Stats */}
            <div className="border-gray-200 shadow-sm rounded p-6 bg-white">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Article Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Read Time</span>
                  <span className="font-semibold text-orange-500">
                    {content.readTime} min
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Views</span>
                  <span className="font-semibold text-blue-500">
                    {content.views.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Likes</span>
                  <span className="font-semibold text-red-500">
                    {content.likes}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shares</span>
                  <span className="font-semibold text-green-500">
                    {content.shares}
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded shadow-sm p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-orange-100 mb-4">
                Get the latest articles and insights delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="w-full bg-white text-orange-600 px-4 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
