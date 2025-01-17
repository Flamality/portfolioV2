import React from "react";

export default function ComingSoon() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-2 bg-zinc-950">
      <h1 className="text-5xl font-bold text-neutral-100">Coming Soon</h1>
      <p className="text-2xl text-neutral-400">
        My new portfolio is currently under construction.
      </p>
      <p className="text-base text-neutral-500">
        View the old one{" "}
        <a
          className="text-blue-500 hover:text-blue-400"
          href="https://flamality.xyz"
          target="__blank"
        >
          here
        </a>
      </p>
    </div>
  );
}
