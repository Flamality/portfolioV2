import React from "react";

export default function Footer() {
  return (
    <div className='w-full bg-zinc-950 flex flex-row flex-wrap justify-center items-center p-2 pt-4 gap-2'>
      <p className='text-sm text-neutral-400'>
        Copyright 2025 Flamality. All rights reserved.
      </p>
      <p className='text-sm text-neutral-400'>•</p>
      <p className='text-sm text-sky-400'>
        <a href='https://github.com/Flamality/portfolioV2' target='__blank'>
          Repo
        </a>
      </p>
    </div>
  );
}
