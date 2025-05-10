import React from "react";

export default function Project({ name, description, image, link, linkText }) {
  return (
    <div className='relative rounded-lg shadow-xl bg-zinc-950 group hover:border-zinc-700 cursor-pointer border-2 w-64 h-fit transition-all border-zinc-800'>
      {image ? (
        <img
          className='w-full h-64 object-cover rounded-t shadow'
          alt={name + " screenshot"}
          src={image}
        />
      ) : (
        <div className='w-full h-64' />
      )}
      <div className='top-32 left-0 absolute w-full min-h-32 bg-gradient-to-b from-transparent to-zinc-950' />
      <div className='p-6'>
        <h3 className='text-lg text-neutral-200 font-bold'>{name}</h3>
        <p className='text-neutral-400 line-clamp-2 group-hover:line-clamp-none'>
          {description}
        </p>

        {link ? (
          <a href={link} target='_blank' rel='noopener noreferrer'>
            <button className='text-white hover:text-zinc-200 hover:underline mt-2 rounded'>
              {linkText || link}
            </button>
          </a>
        ) : null}
      </div>
    </div>
  );
}
