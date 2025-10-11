import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaEdit,
  FaSave,
  FaTimes,
  FaSignOutAlt,
  FaShieldAlt,
  FaBell,
  FaCog,
  FaArrowLeft,
  FaCamera,
} from "react-icons/fa";

const AccountPage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    avatar: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    // Load user data from localStorage
    const userName = localStorage.getItem("userName") || "User";
    const userEmail = localStorage.getItem("userEmail") || "user@example.com";

    setUser({
      name: userName,
      email: userEmail,
      phone: "+1 (555) 123-4567",
      location: "New York, NY",
      avatar: "",
    });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    navigate("/");
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem("userName", user.name);
      setIsEditing(false);
      setIsLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    // Reset to original values
    const userName = localStorage.getItem("userName") || "User";
    setUser((prev) => ({ ...prev, name: userName }));
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="  bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="  mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>
          <button
            onClick={handleLogout}
            className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors cursor-pointer"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>

        {/* Profile Section */}
        <div className="bg-white rounded shadow-xl overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold backdrop-blur-sm">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt="Avatar"
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    getInitials(user.name)
                  )}
                </div>
                <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
                  <FaCamera className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-1">{user.name}</h1>
                <p className="text-blue-100">{user.email}</p>
                <p className="text-blue-100 text-sm">Member since 2024</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={handleEdit}
                  className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors cursor-pointer"
                >
                  <FaEdit className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Personal Information
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <FaUser className="text-gray-400" />
                        <span className="text-gray-700">{user.name}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <FaEnvelope className="text-gray-400" />
                      <span className="text-gray-700">{user.email}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <FaPhone className="text-gray-400" />
                        <span className="text-gray-700">{user.phone}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="location"
                        value={user.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <FaMapMarkerAlt className="text-gray-400" />
                        <span className="text-gray-700">{user.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Edit Actions */}
                {isEditing && (
                  <div className="flex space-x-3 pt-4">
                    <button
                      onClick={handleSave}
                      disabled={isLoading}
                      className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      ) : (
                        <FaSave className="mr-2" />
                      )}
                      Save Changes
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <FaTimes className="mr-2" />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              {/* Account Settings */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Account Settings
                </h2>

                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded hover:border-blue-300 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 rounded">
                          <FaShieldAlt className="text-blue-500" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">
                            Privacy Settings
                          </h3>
                          <p className="text-sm text-gray-600">
                            Manage your privacy preferences
                          </p>
                        </div>
                      </div>
                      <FaEdit className="text-gray-400" />
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded hover:border-blue-300 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-100 rounded">
                          <FaBell className="text-green-500" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">
                            Notifications
                          </h3>
                          <p className="text-sm text-gray-600">
                            Configure notification settings
                          </p>
                        </div>
                      </div>
                      <FaEdit className="text-gray-400" />
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded hover:border-blue-300 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-purple-100 rounded">
                          <FaCog className="text-purple-500" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">
                            Account Preferences
                          </h3>
                          <p className="text-sm text-gray-600">
                            Customize your account settings
                          </p>
                        </div>
                      </div>
                      <FaEdit className="text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Account Overview
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-500">
                        12
                      </div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-500">5</div>
                      <div className="text-sm text-gray-600">Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
