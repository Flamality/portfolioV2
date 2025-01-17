import React from "react";

export default function Selector({ tab, setTab }) {
  return (
    <div className="absolute top-5 left-1/2 -translate-x-1/2 h-10 rounded">
      {/*w-52*/}
      <div className="relative flex-row flex justify-evenly items-center h-full w-full text-center">
        <div
          className={`absolute top-1/2 -translate-y-1/2 h-8 z-10 rounded-full duration-500 transition-all shadow-xl
            ${
              !tab
                ? "left-0 shadow-cyan-200 bg-cyan-600 w-32"
                : "left-1/2 shadow-indigo-400 bg-indigo-500 w-32"
            }`}
        />
        <p
          className={`cursor-pointer font-semibold transition-colors ${
            !tab ? "text-cyan-100" : "text-neutral-400"
          } w-32 z-20`}
          onClick={() => {
            setTab(false);
          }}
        >
          PROFESSIONAL
        </p>
        <p
          className={`cursor-pointer font-semibold transition-colors ${
            tab ? "text-indigo-100" : "text-neutral-400"
          } w-32 z-20`}
          onClick={() => {
            setTab(true);
          }}
        >
          PERSONAL
        </p>
      </div>
    </div>
  );
}
