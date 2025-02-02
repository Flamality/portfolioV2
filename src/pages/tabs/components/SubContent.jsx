import React from "react";

export default function SubContent({ children, icon }) {
  return (
    <div className='px-2 py-1 flex flex-row gap-1 items-center'>
      <img src={icon} className='h-4 w-4 object-contain opacity-60' />
      <p className='text-white text-opacity-60 text-sm'>{children}</p>
    </div>
  );
}
