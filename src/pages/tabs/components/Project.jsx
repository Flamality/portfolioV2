import React from "react";

export default function Project({ name, description, image, link, linkText }) {
  return (
    <div className='p-2 relative rounded bg-zinc-950 hover:bg-zinc-900 cursor-pointer transition-colors border-2 border-zinc-800'>
      {image ? (
        <img
          className='w-full h-64 object-cover'
          alt={name + " screenshot"}
          src={image}
        />
      ) : (
        <div className='w-full h-64' />
      )}
      <div className='p-4'>
        <h3 className='text-lg text-neutral-200 font-bold'>{name}</h3>
        <p className='text-neutral-400'>{description}</p>
        {link ? (
          <a href={link} target='_blank' rel='noopener noreferrer'>
            <button className='text-white bg-indigo-500 hover:bg-indigo-400 px-4 py-2 rounded'>
              {linkText}
            </button>
          </a>
        ) : null}
      </div>
    </div>
  );
}
