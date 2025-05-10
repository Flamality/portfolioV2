import React from "react";

export default function Certificate({ name, image, earned, by, link }) {
  return (
    <a href={link} target='__blank'>
      <div className='flex flex-row items-center p-4 rounded hover:bg-[#121215]'>
        <img src={image} alt={name} className='w-36 rounded object-cover' />
        <div className='ml-6'>
          <p className='text-neutral-200 text-lg font-bold'>{name}</p>
          <p className='text-neutral-400 mb-6'>{by}</p>
          <p className='text-neutral-300 font-semibold'>Issued {earned}</p>
        </div>
      </div>
    </a>
  );
}
