import React from "react";

const AuthorInfo = ({ author }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xl font-bold">
            {author.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{author}</h3>
          <p className="text-gray-600 text-sm">
            Experienced writer and industry expert with over 10 years of
            experience in technology and business.
          </p>
          <div className="flex gap-2 mt-2">
            <button className="text-blue-600 hover:text-blue-800 text-sm">
              Follow
            </button>
            <button className="text-gray-600 hover:text-gray-800 text-sm">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
