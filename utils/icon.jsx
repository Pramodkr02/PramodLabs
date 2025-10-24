import React from "react";

// Reusable circular icon wrapper for small sidebar icons
// size is in pixels to allow precise control to match UI mocks
export const CircleIcon = ({
  children,
  className = "",
  bgClass = "bg-white",
  size = 28,
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-full ring-1 ring-gray-200 ${bgClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default CircleIcon;
