import React from "react";
import { quotes } from "../utils/dummyData";

const Quote = () => {
  // Get a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <blockquote className="text-gray-700 italic text-center">
        "{randomQuote.text}"
      </blockquote>
      <cite className="block text-center text-sm text-gray-500 mt-2">
        - {randomQuote.author}
      </cite>
    </div>
  );
};

export default Quote;
