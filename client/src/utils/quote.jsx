import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const DEFAULTS = {
  quote:
    "Design is not just what it looks like and feels like. Design is how it works.",
  author: "Steve Jobs",
  image:
    "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1600&auto=format&fit=crop",
};

const Quote = ({
  quote = DEFAULTS.quote,
  author = DEFAULTS.author,
  image = DEFAULTS.image,
}) => {
  return (
    <aside className="relative w-full max-w-sm overflow-hidden rounded bg-black text-white shadow-sm">
      {/* Background */}
      <div className="relative h-64">
        <img
          src={image}
          alt="Quote background"
          className="absolute inset-0 h-full w-full object-cover grayscale"
        />
        {/* Dark overlays for readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-0 left-0 right-0 bg-black/35 px-4 py-2 text-xs font-semibold tracking-wider text-gray-200">
          MAIN QUOTE
        </div>

        {/* Content centered; author anchored to bottom-right */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <blockquote className="max-w-[90%] sm:max-w-xs text-[18px] italic leading-8 drop-shadow">
            {quote}
          </blockquote>
          <div className="pointer-events-none absolute bottom-5 right-5 text-sm font-semibold tracking-wider">
            - {author}
          </div>
          <FaQuoteLeft className="absolute bottom-4 left-4 text-6xl text-white/20" />
        </div>
      </div>
    </aside>
  );
};

export default Quote;
