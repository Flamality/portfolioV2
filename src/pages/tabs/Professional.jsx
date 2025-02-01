import React, { useState } from "react";
import Title from "./components/Title";
import Section from "./components/Section";
import Pannel from "./components/Pannel";
import PannelHeader from "./components/PannelHeader";
import PannelContent from "./components/PannelContent";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Footer from "./components/Footer";

export default function Professional({ isChanging }) {
  const [projectTab, setProjectTab] = useState(0);
  const sequence = ["FLAMALITY", "REMI"];
  return (
    <div className='professional'>
      <div className='min-h-screen flex flex-col pt-16'>
        <div className='flex-grow flex flex-row max-md:flex-col justify-evenly max-md:justify-center items-center gap-16'>
          <div className='w-72 max-md:w-full flex flex-col'>
            <Title sequence={sequence} isChanging={isChanging} />
            <p
              className={`${
                isChanging ? "animate-out" : "animate-in"
              } animation-fill-both opacity-0 text-neutral-400 w-full text-2xl max-md:text-center animation-delay-100`}
            >
              Front-End Web Developer
            </p>
          </div>
          <div className='flex items-center justify-center relative'>
            <img
              src={require("../../images/react.png")}
              className={`w-24 opacity-0 animation-fill-both animation-delay-200 ${
                isChanging ? "animate-out" : "animate-in"
              }`}
            />
            <p
              className={`${
                isChanging ? "animate-out" : "animate-in"
              } animation-fill-both opacity-0 animation-delay-300 mx-6 text-5xl text-neutral-500 cursor-default select-none`}
            >
              +
            </p>
            <img
              src={require("../../images/tailwind.png")}
              className={`w-24 opacity-0 animation-fill-both animation-delay-400 ${
                isChanging ? "animate-out" : "animate-in"
              }`}
            />
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
          <PannelHeader>Introduction</PannelHeader>
          <PannelContent>
            Hello! My name is Remi 👋! I am a web developer with expertise in
            React, especially when paired with Tailwind CSS. I specialize in
            building modern, responsive, and user-friendly applications. I have
            experience working with real-time databases, authentication systems,
            and creating smooth UI/UX experiences. I'm always looking to improve
            my skills and take on new challenges!
          </PannelContent>
        </Pannel>
        <Pannel>
          <PannelHeader>Skills</PannelHeader>
          <PannelContent>
            <Skill
              icon={require("../../images/react.png")}
              skill='React'
              color='#61dbfb'
            />
            <Skill
              icon={require("../../images/tailwind.png")}
              skill='Tailwindcss'
              color='#06b6d4'
            />
            <Skill
              icon={require("../../images/js.png")}
              skill='JavaScript'
              color='#ffd708'
            />
            <Skill
              icon={require("../../images/css.png")}
              skill='CSS'
              color='#264de4'
            />
            <Skill
              icon={require("../../images/blank.png")}
              skill='Please note: More skills still need to be added'
              color='#ffffff'
            />
          </PannelContent>
        </Pannel>
      </Section>
      <p className='font-bold py-2 text-[8em] tracking-[3.4vw] max-xl:tracking-[1.1vw] max-lg:text-9xl max-lg:tracking-[2.25vw] max-md:text-6xl mix-blend-difference bg-neutral-950 w-full text-center'>
        PROJECTS
      </p>
      <Section>
        <div className='flex flex-row gap-8 justify-evenly flex-wrap'>
          <Project name='Projects not added yet' description='Stay tuned!' />
        </div>
      </Section>
      <Footer />
    </div>
  );
}
