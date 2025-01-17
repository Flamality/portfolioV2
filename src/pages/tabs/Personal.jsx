import React from "react";

export default function Personal({ isChanging }) {
  return (
    <div className="pt-16">
      <div
        className={`${isChanging ? "animate-out" : "animate-in"}
       h-36 w-72 animation-fill-both bg-gray-300
      `}
      ></div>
    </div>
  );
}
