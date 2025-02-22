import React, { useState } from "react";
import Personal from "./tabs/Personal";
import Professional from "./tabs/Professional";
import Selector from "./components/Selector";

export default function Home() {
  const [tab, setTab] = useState(false);
  const [displayTab, setDisplayTab] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const handleTabChange = (changeTab) => {
    if (isChanging) return;
    if (tab === changeTab) return;
    setDisplayTab(changeTab);
    setIsChanging(true);

    setTimeout(() => {
      setTab(changeTab);
      setIsChanging(false);
    }, 500);
  };
  return (
    <div className='relative w-full min-h-screen bg-zinc-900 '>
      <Selector tab={displayTab} setTab={handleTabChange} />
      {tab ? (
        <Personal isChanging={isChanging} />
      ) : (
        <Professional isChanging={isChanging} />
      )}
    </div>
  );
}
