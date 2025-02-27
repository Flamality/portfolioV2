import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import Section from "./components/Section";
import Pannel from "./components/Pannel";
import PannelHeader from "./components/PannelHeader";
import PannelContent from "./components/PannelContent";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import Seperator from "./components/Seperator";
import SubContent from "./components/SubContent";
import ContactForm from "./components/ContactForm";
import Certificate from "./components/Certificate";

export default function Professional({ isChanging }) {
  const [projectTab, setProjectTab] = useState(0);
  const [myTime, setMyTime] = useState("0:00:00 AM");
  const sequence = ["FLAMALITY", "REMI"];
  useEffect(() => {
    const timer = setInterval(() => {
      let date = new Date();
      let timezoneOffset = date.getTimezoneOffset();
      let estOffset = -300;
      let adjustedTime = new Date(
        date.getTime() + (estOffset + timezoneOffset) * 60 * 1000
      );
      let options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "America/New_York",
      };
      let estTime = adjustedTime.toLocaleTimeString("en-US", options);
      setMyTime(estTime);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className='professional'>
      <div
        className={` min-h-screen overflow-x-hidden w-screen flex flex-col pt-16 bg-gradient-to-br relative `}
      >
        <div className='flex-grow flex flex-row max-md:flex-col justify-evenly max-md:justify-center items-center gap-16 '>
          <div className='w-72 max-md:w-full flex flex-col'>
            <Title sequence={sequence} isChanging={isChanging} />
            <p
              className={`${
                isChanging ? "animate-out" : "animate-in"
              } animation-fill-both opacity-0 text-neutral-400 w-full text-2xl max-md:text-center animation-delay-100`}
            >
              Web Developer
            </p>
          </div>
          <div className='h-[70vh] w-1/4 max-md:h-[20vh] max-md:w-4/5 flex justify-end'>
            <div
              className={`${
                isChanging ? "animate-growOut" : "animate-growIn"
              } animation-fill-both w-full opacity-0 diag h-full rounded-lg animation-delay-100`}
            />
          </div>
        </div>
        <div className='custom-shape-divider-bottom-1740183064'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
              className='shape-fill'
            ></path>
          </svg>
        </div>{" "}
        <div
          className={`${
            isChanging ? "animate-out" : "animate-in"
          } animation-fill-both opacity-0 animation-delay-300 flex flex-row gap-4 justify-center`}
        >
          <img
            src={require("../../images/arrow.png")}
            className='w-16 animate-arrow z-20'
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
          <div className='mt-3' />
          <PannelHeader>Background</PannelHeader>
          <PannelContent>
            I have always been interested in computer science since the age of
            8, starting with scratch. Now I am working with languages like
            JavaScript to built complex web apps. As well as enrolling in many
            computer science classes, including enrolling in the Programming &
            Software Development Academy in the 2025-2026 and 2026-2027% school
            year.
            <Seperator />
            <div className='flex flex-row justify-center gap-2 flex-wrap'>
              <SubContent icon={require("../../images/location.png")}>
                Mentor, Ohio, USA
              </SubContent>
              <SubContent icon={require("../../images/education.png")}>
                High School Sophomore
              </SubContent>
              <SubContent icon={require("../../images/time.png")}>
                {myTime} EST
              </SubContent>
            </div>
          </PannelContent>
        </Pannel>
        <Pannel>
          <PannelHeader>Skills</PannelHeader>
          <PannelContent>
            <p className='text-neutral-400 font-semibold'>Front-End</p>
            <div className='flex flex-row gap-2 flex-wrap'>
              <Skill
                icon={require("../../images/react.png")}
                skill='React'
                color='#00d8ff'
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
            </div>
            <p className='text-neutral-400 font-semibold mt-2'>Back-End</p>
            <div className='flex flex-row gap-2 flex-wrap'>
              <Skill
                icon={require("../../images/appwrite.png")}
                skill='Appwrite'
                color='#fd366e'
              />
              <Skill
                icon={require("../../images/firebase.png")}
                skill='Firebase'
                color='#ff9100'
              />
              <Skill
                icon={require("../../images/node.png")}
                skill='Node.js'
                color='#52b255'
              />
            </div>
            <p className='text-neutral-400 font-semibold mt-2'>Tools</p>
            <div className='flex flex-row gap-2 flex-wrap'>
              <Skill
                icon={require("../../images/trello.png")}
                skill='Trello'
                color='#518fe1'
              />
              <Skill
                icon={require("../../images/git.png")}
                skill='Git'
                color='#f05030'
              />
              <Skill
                icon={require("../../images/github.png")}
                skill='Github'
                color='#999999'
              />
            </div>
          </PannelContent>
        </Pannel>
        <Pannel>
          <PannelHeader>Certificates</PannelHeader>
          <PannelContent>
            <div className='flex flex-col gap-2 flex-wrap'>
              <Certificate
                by='Sololearn'
                earned='2/12/25'
                image={require("../../images/webdevelopmentcertificate.png")}
                name='Web Development'
                link='https://www.sololearn.com/certificates/CC-DVZJPKRT'
              />
            </div>
          </PannelContent>
        </Pannel>
      </Section>
      <div className='relative'>
        <div className='custom-shape-divider-bottom-1740183970'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M649.97 0L550.03 0 599.91 54.12 649.97 0z'
              className='shape-fill'
            ></path>
          </svg>
        </div>
      </div>
      <p className='font-extrabold text-zinc-900 py-2 text-[8em] tracking-[3.4vw] max-xl:tracking-[1.1vw] max-lg:text-9xl max-lg:tracking-[2.25vw] max-md:text-6xl bg-zinc-950 w-full text-center'>
        PROJECTS
      </p>
      <Section>
        <div className='flex flex-row gap-8 justify-center flex-wrap'>
          <Project
            name='Adrionic.xyz'
            description='A personal website for the content creator "Adrionic"'
            link='https://adrionic.xyz'
            linkText='View website'
            image={require("../../images/adrionicxyzshot1.png")}
          />
          <Project
            name='Wanna be here?'
            description='Contact me and your project I work on could be here!'
          />
        </div>
      </Section>
      <p
        className='font-black py-4 text-[6em] tracking-[3.4vw] 
   max-xl:tracking-[1.1vw] max-lg:text-7xl max-lg:tracking-[2.25vw] max-md:text-6xl 
   bg-gradient-to-r from-violet-500 via-violet-800 to-violet-500
   text-neutral-900/90 w-[200vw] -translate-x-1/4 text-center rotate-3
   shadow-2xl backdrop-blur-sm
   transition-all duration-700 cursor-default hover:rotate-2'
      >
        CONTACT
      </p>
      <ContactForm />
      <Footer />
    </div>
  );
}
