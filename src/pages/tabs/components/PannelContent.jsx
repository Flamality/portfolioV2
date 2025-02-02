import React from "react";

export default function PannelContent({ children }) {
  return (
    <div className='inline-flex flex-col text-neutral-300 gap-2 w-full'>
      {children}
    </div>
  );
}
