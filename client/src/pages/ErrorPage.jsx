import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen   bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Animated Error Icon */}
        <div className="mb-8 animate-bounce">
          <div className="relative">
            <FaExclamationTriangle className="text-6xl text-orange-500 mx-auto animate-pulse" />
            <div className="absolute inset-0 bg-orange-400 rounded-full opacity-20 animate-ping"></div>
          </div>
        </div>

        {/* Error Number */}
        <h1 className="text-6xl font-bold text-orange-600 mb-4 animate-pulse">
          404
        </h1>

        {/* Error Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 animate-fade-in">
          Oops! Page Not Found
        </h2>

        {/* Error Description */}
        <p className="text-m text-gray-600 mb-8 leading-relaxed animate-fade-in-delay">
          The page you're looking for seems to have wandered off into the
          digital wilderness. Don't worry, we'll help you find your way back!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
          <Link
            to="/"
            className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaHome className="text-sm" />
            <span>Go Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-white text-orange-600 border-2 border-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            <FaArrowLeft className="text-sm" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center space-x-2">
          <div
            className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-3 h-3 bg-orange-600 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>

        {/* Additional Help Text */}
        <p className="mt-8 text-sm text-gray-500 animate-fade-in-delay-3">
          Need help? Contact our support team
        </p>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-300 rounded-full opacity-30 animate-float-delay"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-orange-400 rounded-full opacity-25 animate-float-delay-2"></div>
        <div className="absolute top-1/3 right-10 w-20 h-20 bg-orange-500 rounded-full opacity-20 animate-float-delay-3"></div>
      </div>
    </div>
  );
};

export default ErrorPage;
