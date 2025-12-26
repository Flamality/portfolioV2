import React from "react";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero/Hero";
import Info from "../components/Info/Info";
import GridSpacer from "../components/GridSpacer/GridSpacer";
import Projects from "../components/Projects/Projects";
import Certificates from "../components/Certificates/Certificates";

export default function Layout() {
  return (
    <div id='layout'>
      <Hero />
      <GridSpacer />
      <Info />
      {/* <Certificates /> */}
      <Projects />
      <p
        className='font-black py-4 text-[6em] tracking-[3.4vw] 
   max-xl:tracking-[1.1vw] max-lg:text-7xl max-lg:tracking-[2.25vw] max-md:text-6xl 
   bg-gradient-to-r from-rose-500 via-rose-900 to-rose-500
   text-neutral-900/90 w-[200vw] -translate-x-1/4 text-center rotate-3
   shadow-2xl backdrop-blur-sm
   transition-all duration-700 cursor-default hover:rotate-2 mt-12'
      >
        CONTACT
      </p>
      <ContactForm />
      <Footer />
    </div>
  );
}
