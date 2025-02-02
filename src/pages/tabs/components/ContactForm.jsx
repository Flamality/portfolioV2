import React from "react";
export default function ContactForm() {
  return (
    <div className='w-full bg-zinc-950 -mt-10 flex flex-row justify-evenly items-center max-md:flex-col max-md:py-10 max-md:gap-6'>
      <form
        action='https://formspree.io/f/xqakbkra'
        method='POST'
        className='flex flex-col gap-4 px-24 max-md:px-2 max-md:w-full py-6 rounded w-1/2  mt-4'
      >
        <p className='text-neutral-300 font-bold text-xl border-b-2 border-neutral-600 mb-2'>
          Contact form
        </p>
        <input
          className='bg-transparent border-b-2 border-neutral-700 focus:outline-none p-1 text-neutral-200'
          placeholder='Email'
          type='email'
          name='email'
        />
        <input
          className='bg-transparent border-b-2 border-neutral-700 focus:outline-none p-1 text-neutral-200'
          placeholder='Name'
          type='text'
          name='name'
        />
        <textarea
          className='bg-transparent border-b-2 border-neutral-700 resize-none focus:outline-none p-1 text-neutral-200'
          placeholder='Message'
          name='message'
        ></textarea>
        <button
          className='z-10 p-4 text-neutral-900 bg-neutral-200 font-semibold hover:bg-violet-300 transition-colors rounded mt-8'
          type='submit'
        >
          SEND MESSAGE
        </button>
      </form>
      <div className='flex flex-col gap-2 justify-center items-center'>
        <p className='text-neutral-300 font-bold text-xl z-10'>OR</p>
      </div>
      <div className='flex flex-col justify-center items-center w-1/2'>
        <p className='text-neutral-200 text-lg'>Email me at</p>
        <a
          href='mailto:contact@flamality.com'
          target='__blank'
          className='text-sky-400 hover:text-sky-600 cursor-pointer font-semibold text-xl'
        >
          contact@flamality.com
        </a>
      </div>
    </div>
  );
}
