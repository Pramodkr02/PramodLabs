import React, { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Simulate API call
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6 mb-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Stay Updated</h3>
        <p className="text-sm text-gray-600 mb-4">
          Get the latest news and insights delivered to your inbox
        </p>
        
        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="text-green-600 text-sm font-medium">
            ✓ Successfully subscribed! Check your email.
          </div>
        )}
        
        <p className="text-xs text-gray-500 mt-3">
          No spam, unsubscribe at any time
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;
