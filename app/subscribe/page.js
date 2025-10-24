"use client";

import { useState } from "react";

export default function SubscribePage() {
  const [formData, setFormData] = useState({
    email: "",
    plan: "basic",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscription form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Subscribe to PramodLabs
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Basic Plan
            </h2>
            <p className="text-gray-600 mb-6">
              Access to basic content and features
            </p>
            <div className="text-3xl font-bold text-orange-600 mb-6">
              $9.99/month
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Access to all articles
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Weekly newsletter
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Community access
              </li>
            </ul>
            <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
              Choose Basic
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 border-2 border-orange-500">
            <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
              Most Popular
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Premium Plan
            </h2>
            <p className="text-gray-600 mb-6">
              Full access to all premium content and features
            </p>
            <div className="text-3xl font-bold text-orange-600 mb-6">
              $19.99/month
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Everything in Basic
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Premium articles
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Daily newsletter
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Priority support
              </li>
            </ul>
            <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
              Choose Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
