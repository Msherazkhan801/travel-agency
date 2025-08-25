'use client'
import React from "react";

function Button({ children, variant = "default", size = "md", className = "", ...props }) {
  const base =
    "rounded-lg font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    default: "bg-primary text-white hover:bg-blue-700",
    outline: "border border-white text-white hover:bg-white hover:text-primary",
    hero: "bg-accent text-white hover:bg-amber-600",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;