"use client";

import Link from "next/link";
import {
  IoIosNotifications,
  IoIosTime,
  IoIosArrowForward,
} from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function NotificationsPage() {
  // Dummy notification data
  const notifications = [
    {
      id: 1,
      title: "New Tech Article Published",
      description:
        "AI Revolution: How Machine Learning is Transforming Industries",
      category: "Tech",
      time: "2 minutes ago",
      isRead: false,
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=100&h=100&fit=crop",
      author: "Tech Team",
      type: "article",
    },
    {
      id: 2,
      title: "Sports Update Available",
      description: "Olympic Games 2024: Latest Results and Medal Standings",
      category: "Sports",
      time: "15 minutes ago",
      isRead: false,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
      author: "Sports Team",
      type: "update",
    },
    {
      id: 3,
      title: "Business News Alert",
      description: "Stock Market Analysis: Tech Stocks Show Strong Performance",
      category: "Business",
      time: "1 hour ago",
      isRead: false,
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=100&h=100&fit=crop",
      author: "Business Team",
      type: "alert",
    },
    {
      id: 4,
      title: "Fashion Trend Update",
      description: "Spring 2024 Fashion Trends: What's Hot This Season",
      category: "Fashion",
      time: "2 hours ago",
      isRead: true,
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop",
      author: "Fashion Team",
      type: "trend",
    },
    {
      id: 5,
      title: "Education News",
      description: "New Online Learning Platform Launches with Free Courses",
      category: "Education",
      time: "3 hours ago",
      isRead: true,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop",
      author: "Education Team",
      type: "news",
    },
    {
      id: 6,
      title: "Share Market Update",
      description: "Market Analysis: Cryptocurrency Trends and Investment Tips",
      category: "ShareMarket",
      time: "4 hours ago",
      isRead: true,
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=100&h=100&fit=crop",
      author: "Finance Team",
      type: "market",
    },
    {
      id: 7,
      title: "Breaking News Alert",
      description:
        "Major Technology Breakthrough Announced by Leading Tech Company",
      category: "Tech",
      time: "5 hours ago",
      isRead: true,
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=100&h=100&fit=crop",
      author: "Breaking News",
      type: "breaking",
    },
    {
      id: 8,
      title: "Weekly Newsletter",
      description: "Your weekly digest of the most important news and updates",
      category: "General",
      time: "1 day ago",
      isRead: true,
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=100&h=100&fit=crop",
      author: "PramodLabs Team",
      type: "newsletter",
    },
  ];

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const getCategoryColor = (category) => {
    const colors = {
      Tech: "bg-blue-100 text-blue-800",
      Sports: "bg-red-100 text-red-800",
      Business: "bg-green-100 text-green-800",
      Fashion: "bg-pink-100 text-pink-800",
      Education: "bg-purple-100 text-purple-800",
      ShareMarket: "bg-yellow-100 text-yellow-800",
      General: "bg-gray-100 text-gray-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const getTypeIcon = (type) => {
    const icons = {
      article: "📰",
      update: "🔄",
      alert: "🚨",
      trend: "👗",
      news: "📢",
      market: "📈",
      breaking: "⚡",
      newsletter: "📧",
    };
    return icons[type] || "📢";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
                <IoIosNotifications className="text-5xl" />
                Notifications
              </h1>
              <p className="text-orange-100 text-lg">
                Stay updated with the latest news and updates
              </p>
            </div>
            <div className="text-right">
              <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                {unreadCount} Unread
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Filter Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button className="py-4 px-1 border-b-2 border-orange-500 text-orange-600 font-medium">
                All Notifications
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium">
                Unread ({unreadCount})
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium">
                Read
              </button>
            </nav>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notification) => (
            <Link
              key={notification.id}
              href={`/main/notifications/${notification.id}`}
              className={`block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
                !notification.isRead ? "ring-2 ring-orange-200" : ""
              }`}
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Notification Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                      {getTypeIcon(notification.type)}
                    </div>
                    {!notification.isRead && (
                      <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 mx-auto"></div>
                    )}
                  </div>

                  {/* Notification Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3
                            className={`text-lg font-semibold ${
                              !notification.isRead
                                ? "text-gray-900"
                                : "text-gray-700"
                            }`}
                          >
                            {notification.title}
                          </h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                              notification.category
                            )}`}
                          >
                            {notification.category}
                          </span>
                        </div>

                        <p className="text-gray-600 mb-3 line-clamp-2">
                          {notification.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <IoIosTime />
                              {notification.time}
                            </span>
                            <span>by {notification.author}</span>
                          </div>

                          <div className="flex items-center space-x-2">
                            {notification.isRead ? (
                              <FaEye className="text-gray-400" />
                            ) : (
                              <FaEyeSlash className="text-orange-500" />
                            )}
                            <IoIosArrowForward className="text-gray-400" />
                          </div>
                        </div>
                      </div>

                      {/* Thumbnail Image */}
                      <div className="flex-shrink-0 ml-4">
                        <img
                          src={notification.image}
                          alt={notification.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium">
            Load More Notifications
          </button>
        </div>

        {/* Empty State (if no notifications) */}
        {notifications.length === 0 && (
          <div className="text-center py-12">
            <IoIosNotifications className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No notifications yet
            </h3>
            <p className="text-gray-500">
              We'll notify you when there's something new to see.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
