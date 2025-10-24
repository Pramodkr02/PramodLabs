"use client";

import React, { useState } from "react";
import { newsletterData } from "../utils/dummyData";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-6">
      <h3 className="text-xl font-bold mb-3">{newsletterData.title}</h3>
      <p className="text-orange-100 mb-4">{newsletterData.description}</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          placeholder={newsletterData.placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 rounded text-gray-800 placeholder-gray-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-white text-orange-600 px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors"
        >
          {newsletterData.buttonText}
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
