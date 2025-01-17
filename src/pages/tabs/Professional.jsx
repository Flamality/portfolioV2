import React from "react";

export default function Professional({ isChanging }) {
  return (
    <div
      className={`${
        isChanging ? "animate-out" : "animate-in"
      } animation-fill-both text-white`}
    >
      Pro
    </div>
  );
}
