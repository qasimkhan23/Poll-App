import React from "react";

export default function HoverLabel({ icon, label, onClick }:any) {
  return (
    <div className="relative group">
      <button
        className="text-4xl hover:scale-125 transform transition"
        onClick={onClick}
      >
        {icon}
      </button>
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition">
        {label}
      </span>
    </div>
  );
}
