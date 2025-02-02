import React from "react";

export default function Pannel({ children }) {
  return (
    <div className='rounded bg-zinc-950 border-2 border-zinc-800 p-4 mb-4'>
      <p>{children}</p>
    </div>
  );
}
