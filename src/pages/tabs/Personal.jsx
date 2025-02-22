import React from "react";
import Title from "./components/Title";
import Section from "./components/Section";
import Pannel from "./components/Pannel";
import PannelContent from "./components/PannelContent";
import PannelHeader from "./components/PannelHeader";
import Footer from "./components/Footer";

export default function Personal({ isChanging }) {
  const sequence = ["FLAMALITY", "REMI"];
  return (
    <div className='professional'>
      <div className='min-h-screen flex flex-col pt-16'>
        <div className='flex-grow flex flex-row max-md:flex-col justify-evenly max-md:justify-center items-center gap-16'>
          <div className='w-full mx-6 justify-center items-center flex flex-col'>
            <div
              className={`${
                isChanging ? "animate-growOut" : "animate-growIn"
              } w-full h-px animation-fill-both opacity-0 bg-neutral-200 animation-delay-200`}
            />
            <p
              className={`${
                isChanging ? "animate-out" : "animate-in"
              } animation-fill-both opacity-0 text-center text-neutral-200 text-7xl h-20 font-bold max-md:text-center mt-2`}
            >
              REMI
            </p>
            <div className='flex flex-row w-full justify-center items-center gap-2'>
              <div
                className={`${
                  isChanging ? "animate-growOut" : "animate-growIn"
                } w-full h-px animation-fill-both opacity-0 bg-neutral-200 animation-delay-300`}
              />
              <p
                className={`${
                  isChanging ? "animate-out" : "animate-in"
                } animation-fill-both opacity-0 text-neutral-400 text-xl text-center animation-delay-100 w-fit`}
              >
                @FLAMALITY
              </p>
              <div
                className={`${
                  isChanging ? "animate-growOut" : "animate-growIn"
                } w-full h-px animation-fill-both opacity-0 bg-neutral-200 animation-delay-300`}
              />
            </div>
          </div>
        </div>
        <div
          className={`${
            isChanging ? "animate-out" : "animate-in"
          } animation-fill-both opacity-0 animation-delay-300 flex flex-row gap-4 justify-center`}
        >
          <img
            src={require("../../images/arrow.png")}
            className='w-16 animate-arrow'
          />
        </div>
      </div>
      <Section>
        <Pannel>
          <PannelHeader>Note</PannelHeader>
          <PannelContent>
            This website is unfinished as of 2/21/2025. It is actively being
            worked on. Stay tuned!
          </PannelContent>
        </Pannel>
      </Section>
      <Footer />
    </div>
  );
}
