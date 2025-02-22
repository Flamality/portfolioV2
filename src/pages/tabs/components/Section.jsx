import React from "react";

export default function Section({ children, background }) {
  return (
    <div
      className={`relative px-40 max-md:px-2 py-28 max-sm:py-12`}
      style={{ backgroundColor: background }}
    >
      {children}
    </div>
  );
}
