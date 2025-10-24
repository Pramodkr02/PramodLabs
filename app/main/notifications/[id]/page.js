"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  IoIosNotifications,
  IoIosTime,
  IoIosArrowBack,
  IoIosShareAlt,
  IoIosBookmark,
  IoIosHeart,
} from "react-icons/io";
import { FaEye, FaUser, FaCalendarAlt } from "react-icons/fa";

export default function NotificationDetailPage() {
  const params = useParams();
  const notificationId = params.id;

  // Dummy notification data - in real app, this would come from API
  const notificationData = {
    1: {
      id: 1,
      title: "New Tech Article Published",
      description:
        "AI Revolution: How Machine Learning is Transforming Industries",
      category: "Tech",
      time: "2 minutes ago",
      fullTime: "October 24, 2024 at 6:12 PM",
      isRead: false,
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
      author: "Tech Team",
      authorImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
      type: "article",
      content: `
        <p class="mb-4">The artificial intelligence revolution is reshaping industries at an unprecedented pace. From healthcare to finance, machine learning algorithms are driving innovation and transforming how businesses operate.</p>
        
        <h3 class="text-xl font-semibold mb-3">Key Developments in AI</h3>
        <p class="mb-4">Recent breakthroughs in machine learning have enabled computers to perform tasks that were previously thought to be exclusively human. Natural language processing, computer vision, and predictive analytics are now being integrated into everyday business processes.</p>
        
        <h3 class="text-xl font-semibold mb-3">Industry Impact</h3>
        <p class="mb-4">Healthcare organizations are using AI to improve diagnostic accuracy, while financial institutions leverage machine learning for fraud detection and risk assessment. The manufacturing sector has seen significant improvements in quality control and predictive maintenance.</p>
        
        <h3 class="text-xl font-semibold mb-3">Future Outlook</h3>
        <p class="mb-4">As AI technology continues to evolve, we can expect even more sophisticated applications across various sectors. The key to success lies in responsible implementation and continuous learning.</p>
      `,
      tags: ["AI", "Machine Learning", "Technology", "Innovation"],
      views: "12.5K",
      likes: "892",
      shares: "156",
    },
    2: {
      id: 2,
      title: "Sports Update Available",
      description: "Olympic Games 2024: Latest Results and Medal Standings",
      category: "Sports",
      time: "15 minutes ago",
      fullTime: "October 24, 2024 at 5:59 PM",
      isRead: false,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
      author: "Sports Team",
      authorImage:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop",
      type: "update",
      content: `
        <p class="mb-4">The Olympic Games 2024 have been nothing short of spectacular, with athletes from around the world showcasing their incredible talent and determination.</p>
        
        <h3 class="text-xl font-semibold mb-3">Current Medal Standings</h3>
        <p class="mb-4">As of the latest update, several countries are leading the medal count with impressive performances across multiple disciplines. The competition remains fierce as we approach the final days of the games.</p>
        
        <h3 class="text-xl font-semibold mb-3">Notable Performances</h3>
        <p class="mb-4">Several athletes have broken world records this year, demonstrating the incredible progress in sports science and training methodologies. These achievements inspire millions of aspiring athletes worldwide.</p>
        
        <h3 class="text-xl font-semibold mb-3">Upcoming Events</h3>
        <p class="mb-4">The final days of the Olympics promise more excitement with key events still to come. Fans around the world are eagerly anticipating the closing ceremonies.</p>
      `,
      tags: ["Olympics", "Sports", "Athletics", "Medals"],
      views: "8.7K",
      likes: "1.2K",
      shares: "234",
    },
    3: {
      id: 3,
      title: "Business News Alert",
      description: "Stock Market Analysis: Tech Stocks Show Strong Performance",
      category: "Business",
      time: "1 hour ago",
      fullTime: "October 24, 2024 at 5:12 PM",
      isRead: false,
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
      author: "Business Team",
      authorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop",
      type: "alert",
      content: `
        <p class="mb-4">The technology sector continues to demonstrate remarkable resilience in today's volatile market conditions. Major tech companies are reporting strong quarterly earnings, driving investor confidence and market optimism.</p>
        
        <h3 class="text-xl font-semibold mb-3">Market Performance</h3>
        <p class="mb-4">Tech stocks have shown consistent growth over the past quarter, with several major companies exceeding analyst expectations. This performance is attributed to increased demand for digital services and innovative product launches.</p>
        
        <h3 class="text-xl font-semibold mb-3">Investment Opportunities</h3>
        <p class="mb-4">Financial experts suggest that the current market conditions present unique opportunities for both short-term traders and long-term investors. However, they emphasize the importance of thorough research and risk management.</p>
        
        <h3 class="text-xl font-semibold mb-3">Future Projections</h3>
        <p class="mb-4">Analysts predict continued growth in the tech sector, driven by emerging technologies such as artificial intelligence, cloud computing, and renewable energy solutions.</p>
      `,
      tags: ["Stock Market", "Tech Stocks", "Investment", "Finance"],
      views: "15.3K",
      likes: "1.8K",
      shares: "456",
    },
    4: {
      id: 4,
      title: "Fashion Trend Update",
      description: "Spring 2024 Fashion Trends: What's Hot This Season",
      category: "Fashion",
      time: "2 hours ago",
      fullTime: "October 24, 2024 at 4:12 PM",
      isRead: true,
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop",
      author: "Fashion Team",
      authorImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
      type: "trend",
      content: `
        <p class="mb-4">Spring 2024 brings a fresh wave of fashion trends that blend sustainability with bold creativity. This season's collections showcase innovative designs that prioritize both style and environmental consciousness.</p>
        
        <h3 class="text-xl font-semibold mb-3">Key Trends</h3>
        <p class="mb-4">Sustainable fashion continues to dominate the industry, with designers incorporating eco-friendly materials and production methods. Bold colors, oversized silhouettes, and vintage-inspired pieces are making strong statements on runways worldwide.</p>
        
        <h3 class="text-xl font-semibold mb-3">Color Palettes</h3>
        <p class="mb-4">This season embraces vibrant earth tones, pastel combinations, and unexpected color pairings. Designers are experimenting with bold contrasts while maintaining harmony in their collections.</p>
        
        <h3 class="text-xl font-semibold mb-3">Accessory Trends</h3>
        <p class="mb-4">Statement accessories are back in full force, with oversized bags, chunky jewelry, and bold footwear taking center stage. Sustainable materials are being used creatively in accessory design.</p>
      `,
      tags: ["Spring Fashion", "Trends", "Sustainability", "Style"],
      views: "9.2K",
      likes: "756",
      shares: "189",
    },
  };

  const notification = notificationData[notificationId] || notificationData[1];

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
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/"
              className="text-orange-600 hover:text-orange-700 flex items-center gap-1"
            >
              <IoIosArrowBack />
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/notifications"
              className="text-orange-600 hover:text-orange-700"
            >
              Notifications
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 truncate max-w-xs">
              {notification.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-3xl">
                  {getTypeIcon(notification.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-2xl font-bold">{notification.title}</h1>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                        notification.category
                      )}`}
                    >
                      {notification.category}
                    </span>
                  </div>
                  <p className="text-orange-100 text-lg mb-3">
                    {notification.description}
                  </p>
                  <div className="flex items-center space-x-4 text-orange-200">
                    <span className="flex items-center gap-1">
                      <IoIosTime />
                      {notification.fullTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUser />
                      {notification.author}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-full bg-orange-500 hover:bg-orange-400 transition-colors">
                  <IoIosShareAlt />
                </button>
                <button className="p-2 rounded-full bg-orange-500 hover:bg-orange-400 transition-colors">
                  <IoIosBookmark />
                </button>
                <button className="p-2 rounded-full bg-orange-500 hover:bg-orange-400 transition-colors">
                  <IoIosHeart />
                </button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative">
            <img
              src={notification.image}
              alt={notification.title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {notification.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Author Info */}
            <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-gray-200">
              <img
                src={notification.authorImage}
                alt={notification.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-800">
                  {notification.author}
                </h3>
                <p className="text-sm text-gray-500">
                  {notification.category} Team
                </p>
              </div>
              <div className="ml-auto flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <FaEye />
                  {notification.views} views
                </span>
                <span className="flex items-center gap-1">
                  <IoIosHeart />
                  {notification.likes} likes
                </span>
                <span className="flex items-center gap-1">
                  <IoIosShareAlt />
                  {notification.shares} shares
                </span>
              </div>
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: notification.content }}
            />

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {notification.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-orange-100 hover:text-orange-700 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                    <IoIosHeart />
                    <span>Like ({notification.likes})</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <IoIosShareAlt />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <IoIosBookmark />
                    <span>Save</span>
                  </button>
                </div>

                <Link
                  href="/notifications"
                  className="flex items-center space-x-2 px-4 py-2 text-orange-600 hover:text-orange-700 transition-colors"
                >
                  <IoIosArrowBack />
                  <span>Back to Notifications</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
