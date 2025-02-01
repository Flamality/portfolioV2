import React from "react";

export default function PannelContent({ children }) {
  return (
    <div className='inline-flex flex-wrap text-neutral-300 gap-2'>
      {children}
    </div>
  );
}
